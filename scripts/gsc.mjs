#!/usr/bin/env node
/**
 * Google Search Console (datos reais de Google) sen dependencias.
 *
 * Necesita a variable de contorno GSC_SERVICE_ACCOUNT_JSON co JSON da conta de servizo
 * (texto JSON tal cal ou en base64). A conta de servizo debe estar engadida como usuario
 * (permiso "Restrinxido" / "Restringido") na propiedade de Search Console.
 *
 * Uso:
 *   node scripts/gsc.mjs                      # consultas, últimos 28 días
 *   node scripts/gsc.mjs --dim page --days 7  # páxinas, últimos 7 días
 *   node scripts/gsc.mjs --dim query,page     # consulta + páxina
 *   node scripts/gsc.mjs --sitemaps           # estado dos sitemaps
 *
 * Saída: táboa Markdown (clics, impresións, CTR, posición media) para pegar en seo-posicions.md.
 */
import { createSign } from 'node:crypto';

const SITE = process.env.GSC_SITE || 'sc-domain:galiciagmt.es';
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';

function arg(name, def) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? def : process.argv[i + 1];
}
const has = (name) => process.argv.includes(`--${name}`);

function loadKey() {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    console.error('Falta GSC_SERVICE_ACCOUNT_JSON no contorno. Ver SEO.md → "Datos reais de Google".');
    process.exit(2);
  }
  const text = raw.trim().startsWith('{') ? raw : Buffer.from(raw, 'base64').toString('utf8');
  return JSON.parse(text);
}

const b64url = (s) => Buffer.from(s).toString('base64url');

async function token(key) {
  const now = Math.floor(Date.now() / 1000);
  const head = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const body = b64url(
    JSON.stringify({ iss: key.client_email, scope: SCOPE, aud: key.token_uri, iat: now, exp: now + 3600 }),
  );
  const sig = createSign('RSA-SHA256').update(`${head}.${body}`).sign(key.private_key, 'base64url');
  const res = await fetch(key.token_uri, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${head}.${body}.${sig}` }),
  });
  const json = await res.json();
  if (!json.access_token) throw new Error(`Token: ${JSON.stringify(json)}`);
  return json.access_token;
}

const ymd = (d) => d.toISOString().slice(0, 10);

async function main() {
  const key = loadKey();
  const at = await token(key);
  const site = encodeURIComponent(SITE);

  if (has('sitemaps')) {
    const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${site}/sitemaps`, {
      headers: { authorization: `Bearer ${at}` },
    });
    const j = await r.json();
    for (const s of j.sitemap || []) {
      const sub = (s.contents || []).map((c) => `${c.type}: ${c.submitted} enviadas`).join(', ');
      console.log(`- ${s.path} · última lectura ${s.lastDownloaded || '—'} · erros ${s.errors} · avisos ${s.warnings} · ${sub}`);
    }
    if (!j.sitemap) console.log(JSON.stringify(j));
    return;
  }

  const days = Number(arg('days', '28'));
  const dims = arg('dim', 'query').split(',');
  // Search Console ten uns 2-3 días de atraso.
  const end = new Date(Date.now() - 2 * 86_400_000);
  const start = new Date(end.getTime() - (days - 1) * 86_400_000);
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`, {
    method: 'POST',
    headers: { authorization: `Bearer ${at}`, 'content-type': 'application/json' },
    body: JSON.stringify({ startDate: ymd(start), endDate: ymd(end), dimensions: dims, rowLimit: Number(arg('limit', '50')) }),
  });
  const j = await r.json();
  if (j.error) throw new Error(JSON.stringify(j.error));
  const rows = j.rows || [];
  console.log(`Search Console · ${SITE} · ${ymd(start)} → ${ymd(end)} · ${rows.length} filas\n`);
  if (!rows.length) {
    console.log('(sen datos aínda: normal nas primeiras semanas)');
    return;
  }
  console.log(`| ${dims.join(' | ')} | Clics | Impresións | CTR | Posición |`);
  console.log(`|${dims.map(() => '---').join('|')}|---|---|---|---|`);
  for (const row of rows) {
    console.log(
      `| ${row.keys.join(' | ')} | ${row.clicks} | ${row.impressions} | ${(row.ctr * 100).toFixed(1)} % | ${row.position.toFixed(1)} |`,
    );
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
