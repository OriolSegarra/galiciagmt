/**
 * Extrae o contorno de España peninsular + Baleares e de Portugal continental
 * de Natural Earth 50m (dominio público, https://www.naturalearthdata.com/),
 * simplifícao (Douglas-Peucker) e escribe src/data/contorno.json.
 * Coordenadas en grao (lon, lat) con 2 decimais; a proxección (equirrectangular corrixida
 * por cos 40°) aplícase ao debuxar.
 * Uso: node scripts/mapa-datos.ts [ruta/ao/ne_50m_admin_0_countries.geojson]
 * Se non se indica ruta, descarga o ficheiro de GitHub (nvkelso/natural-earth-vector).
 */
import { readFileSync, writeFileSync } from 'node:fs';

const URL_NE = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson';
const TOL = 0.012; // graos (~1,3 km)

type Pt = [number, number];

const arg = process.argv[2];
const txt = arg ? readFileSync(arg, 'utf8') : await (await fetch(URL_NE)).text();
const geo = JSON.parse(txt);

function dist(p: Pt, a: Pt, b: Pt): number {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const l = dx * dx + dy * dy;
  const t = l ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l)) : 0;
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}
function dp(pts: Pt[], tol: number): Pt[] {
  if (pts.length < 3) return pts;
  let max = 0, idx = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = dist(pts[i], pts[0], pts[pts.length - 1]);
    if (d > max) { max = d; idx = i; }
  }
  if (max <= tol) return [pts[0], pts[pts.length - 1]];
  return [...dp(pts.slice(0, idx + 1), tol).slice(0, -1), ...dp(pts.slice(idx), tol)];
}
const simp = (ring: Pt[]) => dp(ring, TOL).map(([x, y]) => [Math.round(x * 100) / 100, Math.round(y * 100) / 100] as Pt);

function aneis(adm: string, keep: (ring: Pt[]) => boolean): Pt[][] {
  const f = geo.features.find((x: any) => x.properties.ADM0_A3 === adm);
  return (f.geometry.coordinates as Pt[][][])
    .map((poly) => poly[0])
    .filter(keep) // só o anel exterior de cada illa/polígono
    .map(simp);
}
// España: peninsular + Baleares (Canarias, Ceuta e Melilla quedan fóra: lat < 36,2 ou lon < -10).
const esp = aneis('ESP', (r) => r.every(([lon, lat]) => lon > -10 && lat > 35.9));
// Portugal continental (sen Madeira nin Azores).
const prt = aneis('PRT', (r) => r.every(([lon, lat]) => lon > -10 && lat > 36));

const out = JSON.stringify({ fonte: 'Natural Earth 50m admin_0 (dominio público)', esp, prt });
writeFileSync(new URL('../src/data/contorno.json', import.meta.url), out);
console.log(`esp: ${esp.length} aneis, ${esp.reduce((a, r) => a + r.length, 0)} puntos; prt: ${prt.reduce((a, r) => a + r.length, 0)} puntos; ${(out.length / 1024).toFixed(1)} KB`);
