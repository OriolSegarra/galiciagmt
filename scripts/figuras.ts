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

// ---------- Figura 3: tres horarios posibles en Santiago (cambio de hora 2026) ----------
function escenarios(lang: L): string {
  const T = {
    gl: { t: 'Amencer en Santiago en 2026 con tres horarios', a: 'Horario actual (CET/CEST)', b: 'Inverno fixo todo o ano (UTC+1)', c: 'Verán permanente (UTC+2)', fonte: 'Cálculo propio (método NOAA, ±1-2 min). O verán permanente suma unha hora ao horario de inverno todo o ano.', meses: ['X', 'F', 'M', 'A', 'M', 'X', 'X', 'A', 'S', 'O', 'N', 'D'], desc: 'Gráfico: hora do amencer en Santiago cada día de 2026 con tres horarios: o actual, o inverno fixo e o verán permanente' },
    es: { t: 'Amanecer en Santiago en 2026 con tres horarios', a: 'Horario actual (CET/CEST)', b: 'Invierno fijo todo el año (UTC+1)', c: 'Verano permanente (UTC+2)', fonte: 'Cálculo propio (método NOAA, ±1-2 min). El verano permanente suma una hora al horario de invierno todo el año.', meses: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], desc: 'Gráfico: hora del amanecer en Santiago cada día de 2026 con tres horarios: el actual, el invierno fijo y el verano permanente' },
  }[lang];
  const c = cidades.find((k) => k.gl === 'Santiago')!;
  const W = 760, H = 450, l = 56, r = 24, top = 122, bot = 50;
  const y0 = 6 * 60, y1 = 11 * 60;
  const X = (i: number) => l + (i / 364) * (W - l - r);
  const Y = (m: number) => top + ((m - y0) / (y1 - y0)) * (H - top - bot);
  const path = (f: (d: Date) => number) => {
    let d = '';
    let prev = NaN;
    for (let i = 0; i < 365; i++) {
      const v = f(new Date(Date.UTC(2026, 0, 1 + i, 12)));
      const brk = !isNaN(prev) && Math.abs(v - prev) > 30;
      d += `${i === 0 || brk ? 'M' : 'L'}${X(i).toFixed(1)} ${Y(v).toFixed(1)} `;
      prev = v;
    }
    return d;
  };
  const fx = (d: Date) => amencer(d, c.lat, c.lon, 'actual');
  const fy = (d: Date) => amencer(d, c.lat, c.lon, 'senVeran');
  const fz = (d: Date) => amencer(d, c.lat, c.lon, 'senVeran') + 60;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(T.desc)}" ${FONT}>`;
  s += `<rect width="${W}" height="${H}" fill="${PAPER}"/>`;
  s += `<text x="20" y="32" font-size="20" font-weight="800" fill="${INK}">${esc(T.t)}</text>`;
  s += `<line x1="24" x2="48" y1="56" y2="56" stroke="${INK}" stroke-width="3"/><text x="56" y="60" font-size="13" fill="${INK}">${esc(T.a)}</text>`;
  s += `<line x1="24" x2="48" y1="78" y2="78" stroke="${BLUE}" stroke-width="3"/><text x="56" y="82" font-size="13" fill="${INK}">${esc(T.b)}</text>`;
  s += `<line x1="24" x2="48" y1="100" y2="100" stroke="${SUN}" stroke-width="3"/><text x="56" y="104" font-size="13" fill="${INK}">${esc(T.c)}</text>`;
  for (let m = 6 * 60; m <= 11 * 60; m += 60) {
    s += `<line x1="${l}" x2="${W - r}" y1="${Y(m)}" y2="${Y(m)}" stroke="${RULE}"/><text x="${l - 8}" y="${Y(m) + 4}" font-size="12" text-anchor="end" fill="${MUTED}">${m / 60}:00</text>`;
  }
  const ini = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  ini.forEach((d, i) => { s += `<text x="${X(d + 15)}" y="${H - 24}" font-size="12" text-anchor="middle" fill="${MUTED}">${T.meses[i]}</text>`; });
  s += `<path d="${path(fz)}" fill="none" stroke="${SUN}" stroke-width="2.5"/>`;
  s += `<path d="${path(fy)}" fill="none" stroke="${BLUE}" stroke-width="2.5"/>`;
  s += `<path d="${path(fx)}" fill="none" stroke="${INK}" stroke-width="2.5"/>`;
  s += `<text x="20" y="${H - 2}" font-size="10" fill="${MUTED}">${esc(T.fonte)}</text></svg>`;
  return s;
}

// ---------- Figura 4: días lectivos con amencer despois da hora de entrada ----------
function colexio(lang: L): string {
  const T = {
    gl: { t: 'Días lectivos de 2026-27 con amencer despois da hora de entrada', a: 'Horario actual', b: 'Hora de Lisboa (UTC+0; UTC+1 no verán)', ent: 'Entrada ás', dias: 'días', fonte: 'Cálculo propio (método NOAA, ±1-2 min): días de luns a venres entre o 9/9/2026 e o 21/6/2027 (204), sen descontar festivos.', desc: 'Gráfico de barras: días lectivos con amencer despois das 8:00, 8:30 e 9:00 en Xirona, Madrid e Santiago co horario actual e coa hora de Lisboa' },
    es: { t: 'Días lectivos de 2026-27 con amanecer después de la hora de entrada', a: 'Horario actual', b: 'Hora de Lisboa (UTC+0; UTC+1 en verano)', ent: 'Entrada a las', dias: 'días', fonte: 'Cálculo propio (método NOAA, ±1-2 min): días de lunes a viernes entre el 9/9/2026 y el 21/6/2027 (204), sin descontar festivos.', desc: 'Gráfico de barras: días lectivos con amanecer después de las 8:00, 8:30 y 9:00 en Girona, Madrid y Santiago con el horario actual y con la hora de Lisboa' },
  }[lang];
  const nm = lang === 'gl' ? ['Xirona', 'Madrid', 'Santiago'] : ['Girona', 'Madrid', 'Santiago'];
  const ids = ['Xirona', 'Madrid', 'Santiago'];
  const ini = Date.UTC(2026, 8, 9), fin = Date.UTC(2027, 5, 21);
  const conta = (id: string, esc: 'actual' | 'portugal', lim: number) => {
    const c = cidades.find((k) => k.gl === id)!;
    let n = 0;
    for (let t = ini; t <= fin; t += 864e5) {
      const d = new Date(t + 12 * 36e5);
      const w = d.getUTCDay();
      if (w === 0 || w === 6) continue;
      if (amencer(d, c.lat, c.lon, esc) > lim) n++;
    }
    return n;
  };
  const lims = [480, 510, 540];
  const W = 760, H = 500, l = 120, r = 56, maxV = 204;
  const bw = (W - l - r);
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(T.desc)}" ${FONT}>`;
  s += `<rect width="${W}" height="${H}" fill="${PAPER}"/>`;
  s += `<text x="20" y="32" font-size="20" font-weight="800" fill="${INK}">${esc(T.t)}</text>`;
  s += `<rect x="24" y="52" width="18" height="12" fill="${INK}"/><text x="50" y="63" font-size="13" fill="${INK}">${esc(T.a)}</text>`;
  s += `<rect x="224" y="52" width="18" height="12" fill="${SUN}"/><text x="250" y="63" font-size="13" fill="${INK}">${esc(T.b)}</text>`;
  let y = 96;
  for (const lim of lims) {
    s += `<text x="20" y="${y}" font-size="14" font-weight="700" fill="${BLUE}">${esc(T.ent)} ${hhmm(lim)}</text>`;
    s += `<line x1="${l}" x2="${W - r}" y1="${y + 8}" y2="${y + 8}" stroke="${RULE}"/>`;
    y += 14;
    ids.forEach((id, i) => {
      s += `<text x="${l - 8}" y="${y + 17}" font-size="13" text-anchor="end" fill="${INK}">${esc(nm[i])}</text>`;
      (['actual', 'portugal'] as const).forEach((e, j) => {
        const v = conta(id, e, lim);
        const w = (v / maxV) * bw;
        const yy = y + j * 12;
        s += `<rect x="${l}" y="${yy}" width="${Math.max(w, 0)}" height="10" fill="${j ? SUN : INK}"/>`;
        s += `<text x="${l + w + 6}" y="${yy + 9}" font-size="11" fill="${INK}">${v}</text>`;
      });
      y += 32;
    });
    y += 14;
  }
  s += `<text x="20" y="${H - 8}" font-size="10" fill="${MUTED}">${esc(T.fonte)}</text></svg>`;
  return s;
}

for (const lang of ['gl', 'es'] as const) {
  writeFileSync(`public/img/gradiente-amencer-${lang}.svg`, gradiente(lang));
  writeFileSync(`public/img/amencer-santiago-ano-${lang}.svg`, anual(lang));
  writeFileSync(`public/img/amencer-santiago-tres-horarios-${lang}.svg`, escenarios(lang));
  writeFileSync(`public/img/colexio-amencer-${lang}.svg`, colexio(lang));
}
console.log('ok');
