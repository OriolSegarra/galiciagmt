/**
 * Xera as figuras SVG dos artigos (public/img/*.svg) co mesmo cálculo solar que a ferramenta.
 * Uso: node scripts/figuras.ts
 */
import { writeFileSync } from 'node:fs';
import { amencer, hhmm } from '../src/lib/sol.ts';
import { cidades } from '../src/data/cidades.ts';

const INK = '#111417', MUTED = '#6b6f74', RULE = '#cfc8b8', BLUE = '#0d3b66', SUN = '#e8a33d', PAPER = '#f3f0e8';
const FONT = "font-family=\"'Schibsted Grotesk', 'Helvetica Neue', Arial, sans-serif\"";
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

type L = 'gl' | 'es';

// ---------- Figura 1: gradiente este-oeste (21/12/2026) ----------
const nomes = ['Xirona', 'Barcelona', 'Valencia', 'Madrid', 'Sevilla', 'Valladolid', 'Cáceres', 'Badaxoz', 'Salamanca', 'León', 'Oviedo', 'Lugo', 'Vigo', 'Santiago'];
const dia = new Date(Date.UTC(2026, 11, 21, 12));

function gradiente(lang: L): string {
  const T = {
    gl: { t: 'Amencer o 21 de decembro de 2026, de leste a oeste', cet: 'Hora actual (CET)', gmt: 'Hora de Lisboa (UTC+0)', fonte: 'Cálculo propio (método NOAA, ±1-2 min). Coordenadas: Wikidata.', desc: 'Gráfico: hora do amencer en 14 cidades, coa hora actual e coa de Lisboa' },
    es: { t: 'Amanecer el 21 de diciembre de 2026, de este a oeste', cet: 'Hora actual (CET)', gmt: 'Hora de Lisboa (UTC+0)', fonte: 'Cálculo propio (método NOAA, ±1-2 min). Coordenadas: Wikidata.', desc: 'Gráfico: hora del amanecer en 14 ciudades, con la hora actual y con la de Lisboa' },
  }[lang];
  const W = 760, rowH = 26, top = 92, left = 120, right = 30;
  const H = top + nomes.length * rowH + 52;
  const x0 = 7 * 60, x1 = 9.25 * 60;
  const X = (m: number) => left + ((m - x0) / (x1 - x0)) * (W - left - right);
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(T.desc)}" ${FONT}>`;
  s += `<rect width="${W}" height="${H}" fill="${PAPER}"/>`;
  s += `<text x="20" y="32" font-size="20" font-weight="800" fill="${INK}">${esc(T.t)}</text>`;
  s += `<circle cx="24" cy="58" r="5" fill="${INK}"/><text x="36" y="62" font-size="13" fill="${INK}">${esc(T.cet)}</text>`;
  s += `<circle cx="230" cy="58" r="5" fill="${SUN}"/><text x="242" y="62" font-size="13" fill="${INK}">${esc(T.gmt)}</text>`;
  for (let m = 7 * 60; m <= 9 * 60; m += 30) {
    s += `<line x1="${X(m)}" x2="${X(m)}" y1="${top - 8}" y2="${top + nomes.length * rowH}" stroke="${RULE}" stroke-width="1"/>`;
    s += `<text x="${X(m)}" y="${top - 14}" font-size="12" text-anchor="middle" fill="${MUTED}">${hhmm(m)}</text>`;
  }
  nomes.forEach((n, i) => {
    const c = cidades.find((k) => k.gl === n)!;
    const y = top + i * rowH + rowH / 2;
    const a = amencer(dia, c.lat, c.lon, 'actual');
    const b = amencer(dia, c.lat, c.lon, 'portugal');
    const gal = !!c.galicia;
    const nome = lang === 'gl' ? c.gl : c.es;
    s += `<text x="${left - 12}" y="${y + 4}" font-size="14" text-anchor="end" font-weight="${gal ? 800 : 500}" fill="${gal ? BLUE : INK}">${esc(nome)}</text>`;
    s += `<line x1="${X(b)}" x2="${X(a)}" y1="${y}" y2="${y}" stroke="${gal ? BLUE : MUTED}" stroke-width="${gal ? 3 : 2}"/>`;
    s += `<circle cx="${X(b)}" cy="${y}" r="5" fill="${SUN}"/><circle cx="${X(a)}" cy="${y}" r="5" fill="${gal ? BLUE : INK}"/>`;
    s += `<text x="${X(a) + 10}" y="${y + 4}" font-size="12" fill="${gal ? BLUE : INK}">${hhmm(a)}</text>`;
  });
  s += `<text x="20" y="${H - 14}" font-size="11" fill="${MUTED}">${esc(T.fonte)}</text></svg>`;
  return s;
}

// ---------- Figura 2: amencer en Santiago todo o ano ----------
function anual(lang: L): string {
  const T = {
    gl: { t: 'Amencer en Santiago ao longo de 2026', cet: 'Hora actual: CET en inverno, CEST en verán', gmt: 'Hora de Lisboa: UTC+0 en inverno, UTC+1 en verán', lim: '8:30', meses: ['X', 'F', 'M', 'A', 'M', 'X', 'X', 'A', 'S', 'O', 'N', 'D'], fonte: 'Cálculo propio (método NOAA, ±1-2 min), aplicando o horario de verán da UE.', desc: 'Gráfico: hora do amencer en Santiago cada día de 2026 coa hora actual e coa de Lisboa' },
    es: { t: 'Amanecer en Santiago a lo largo de 2026', cet: 'Hora actual: CET en invierno, CEST en verano', gmt: 'Hora de Lisboa: UTC+0 en invierno, UTC+1 en verano', lim: '8:30', meses: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], fonte: 'Cálculo propio (método NOAA, ±1-2 min), aplicando el horario de verano de la UE.', desc: 'Gráfico: hora del amanecer en Santiago cada día de 2026 con la hora actual y con la de Lisboa' },
  }[lang];
  const c = cidades.find((k) => k.gl === 'Santiago')!;
  const W = 760, H = 430, l = 56, r = 24, top = 100, bot = 50;
  const y0 = 6 * 60, y1 = 10 * 60;
  const X = (i: number) => l + (i / 364) * (W - l - r);
  const Y = (m: number) => top + ((m - y0) / (y1 - y0)) * (H - top - bot);
  const path = (esc2: 'actual' | 'portugal') => {
    let d = '';
    let prev = NaN;
    for (let i = 0; i < 365; i++) {
      const v = amencer(new Date(Date.UTC(2026, 0, 1 + i, 12)), c.lat, c.lon, esc2);
      const brk = !isNaN(prev) && Math.abs(v - prev) > 30;
      d += `${i === 0 || brk ? 'M' : 'L'}${X(i).toFixed(1)} ${Y(v).toFixed(1)} `;
      prev = v;
    }
    return d;
  };
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(T.desc)}" ${FONT}>`;
  s += `<rect width="${W}" height="${H}" fill="${PAPER}"/>`;
  s += `<text x="20" y="32" font-size="20" font-weight="800" fill="${INK}">${esc(T.t)}</text>`;
  s += `<line x1="24" x2="48" y1="56" y2="56" stroke="${INK}" stroke-width="3"/><text x="56" y="60" font-size="13" fill="${INK}">${esc(T.cet)}</text>`;
  s += `<line x1="24" x2="48" y1="78" y2="78" stroke="${SUN}" stroke-width="3"/><text x="56" y="82" font-size="13" fill="${INK}">${esc(T.gmt)}</text>`;
  for (let m = 6 * 60; m <= 10 * 60; m += 60) {
    s += `<line x1="${l}" x2="${W - r}" y1="${Y(m)}" y2="${Y(m)}" stroke="${RULE}"/><text x="${l - 8}" y="${Y(m) + 4}" font-size="12" text-anchor="end" fill="${MUTED}">${m / 60}:00</text>`;
  }
  s += `<line x1="${l}" x2="${W - r}" y1="${Y(510)}" y2="${Y(510)}" stroke="${BLUE}" stroke-dasharray="4 4"/><text x="${W - r}" y="${Y(510) - 6}" font-size="12" text-anchor="end" fill="${BLUE}">${T.lim}</text>`;
  const ini = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  ini.forEach((d, i) => { s += `<text x="${X(d + 15)}" y="${H - 24}" font-size="12" text-anchor="middle" fill="${MUTED}">${T.meses[i]}</text>`; });
  s += `<path d="${path('portugal')}" fill="none" stroke="${SUN}" stroke-width="2.5"/>`;
  s += `<path d="${path('actual')}" fill="none" stroke="${INK}" stroke-width="2.5"/>`;
  s += `<text x="20" y="${H - 2}" font-size="10" fill="${MUTED}">${esc(T.fonte)}</text></svg>`;
  return s;
}

for (const lang of ['gl', 'es'] as const) {
  writeFileSync(`public/img/gradiente-amencer-${lang}.svg`, gradiente(lang));
  writeFileSync(`public/img/amencer-santiago-ano-${lang}.svg`, anual(lang));
}
console.log('ok');
