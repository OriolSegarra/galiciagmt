/**
 * Cálculo de amencer e solpor.
 * Método: ecuacións xerais de posición solar da NOAA
 * (https://gml.noaa.gov/grad/solcalc/solareqns.PDF), cénit de 90,833° (refracción + disco solar).
 * Precisión esperada: ±1-2 minutos.
 */

export type Escenario = 'actual' | 'portugal' | 'senVeran';

const RAD = Math.PI / 180;

function diaDoAno(d: Date): number {
  const start = Date.UTC(d.getUTCFullYear(), 0, 0);
  return Math.floor((d.getTime() - start) / 86_400_000);
}

function diasDoAno(ano: number): number {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0 ? 366 : 365;
}

/** Minutos UTC desde a medianoite do amencer (signo +1) ou solpor (−1). */
function eventoUTC(data: Date, lat: number, lon: number, signo: 1 | -1): number {
  const n = diasDoAno(data.getUTCFullYear());
  const g = ((2 * Math.PI) / n) * (diaDoAno(data) - 1);
  const eqtime =
    229.18 *
    (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
  const decl =
    0.006918 -
    0.399912 * Math.cos(g) +
    0.070257 * Math.sin(g) -
    0.006758 * Math.cos(2 * g) +
    0.000907 * Math.sin(2 * g) -
    0.002697 * Math.cos(3 * g) +
    0.00148 * Math.sin(3 * g);
  const phi = lat * RAD;
  const cosHa = Math.cos(90.833 * RAD) / (Math.cos(phi) * Math.cos(decl)) - Math.tan(phi) * Math.tan(decl);
  const ha = Math.acos(Math.min(1, Math.max(-1, cosHa))) / RAD;
  return 720 - 4 * (lon + signo * ha) - eqtime;
}

/** Último domingo dun mes (UTC). */
function ultimoDomingo(ano: number, mes: number): Date {
  const d = new Date(Date.UTC(ano, mes + 1, 0));
  d.setUTCDate(d.getUTCDate() - d.getUTCDay());
  return d;
}

/** Horario de verán da UE (RD 236/2002): do último domingo de marzo ao último de outubro, ás 01:00 UTC. */
export function enVeran(data: Date): boolean {
  const ano = data.getUTCFullYear();
  const ini = ultimoDomingo(ano, 2).getTime() + 3_600_000;
  const fin = ultimoDomingo(ano, 9).getTime() + 3_600_000;
  const t = data.getTime() + 6 * 3_600_000; // mañá do día: xa aplicado o cambio
  return t >= ini && t < fin;
}

/** Desprazamento respecto a UTC, en horas, para un escenario e data. */
export function desprazamento(esc: Escenario, data: Date): number {
  if (esc === 'senVeran') return 1;
  const base = esc === 'actual' ? 1 : 0;
  return base + (enVeran(data) ? 1 : 0);
}

/** Amencer en minutos de hora oficial local (p.ex. 541 = 9:01). */
export function amencer(data: Date, lat: number, lon: number, esc: Escenario): number {
  return eventoUTC(data, lat, lon, 1) + desprazamento(esc, data) * 60;
}

export function solpor(data: Date, lat: number, lon: number, esc: Escenario): number {
  return eventoUTC(data, lat, lon, -1) + desprazamento(esc, data) * 60;
}

/** Días do ano nos que o sol sae despois de `limite` minutos (hora oficial). */
export function diasDespoisDe(ano: number, lat: number, lon: number, esc: Escenario, limite: number): number {
  let c = 0;
  const n = diasDoAno(ano);
  for (let i = 0; i < n; i++) {
    const d = new Date(Date.UTC(ano, 0, 1 + i, 12));
    if (amencer(d, lat, lon, esc) > limite) c++;
  }
  return c;
}

export function hhmm(min: number): string {
  const m = Math.round(min);
  const h = Math.floor(m / 60);
  return `${h}:${String(m % 60).padStart(2, '0')}`;
}
