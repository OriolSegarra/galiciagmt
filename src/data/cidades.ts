/**
 * Capitais de provincia peninsulares e de Baleares, máis Santiago, Vigo, Mérida e Cartagena.
 * Coordenadas: Wikidata (propiedade P625, licenza CC0), consultadas o 28/09/2026.
 * Canarias queda fóra: xa ten a súa propia hora (unha menos ca Península).
 */
export interface Cidade {
  gl: string;
  es: string;
  lat: number;
  lon: number;
  galicia?: boolean;
}

export const WIKIDATA_SRC = 'https://www.wikidata.org/wiki/Property:P625';

export const cidades: Cidade[] = [
  { gl: 'Xirona', es: 'Girona', lat: 41.9833, lon: 2.8167 },
  { gl: 'Palma', es: 'Palma', lat: 39.5667, lon: 2.6497 },
  { gl: 'Barcelona', es: 'Barcelona', lat: 41.3825, lon: 2.1769 },
  { gl: 'Tarragona', es: 'Tarragona', lat: 41.1175, lon: 1.2528 },
  { gl: 'Lleida', es: 'Lleida', lat: 41.6167, lon: 0.6333 },
  { gl: 'Castelló', es: 'Castellón', lat: 39.986, lon: -0.0374 },
  { gl: 'Valencia', es: 'Valencia', lat: 39.47, lon: -0.3764 },
  { gl: 'Huesca', es: 'Huesca', lat: 42.1409, lon: -0.4111 },
  { gl: 'Alacant', es: 'Alicante', lat: 38.3453, lon: -0.4831 },
  { gl: 'Zaragoza', es: 'Zaragoza', lat: 41.6565, lon: -0.8793 },
  { gl: 'Cartaxena', es: 'Cartagena', lat: 37.6019, lon: -0.9842 },
  { gl: 'Teruel', es: 'Teruel', lat: 40.3441, lon: -1.1093 },
  { gl: 'Murcia', es: 'Murcia', lat: 37.9833, lon: -1.1303 },
  { gl: 'Pamplona', es: 'Pamplona', lat: 42.8167, lon: -1.65 },
  { gl: 'Albacete', es: 'Albacete', lat: 38.9956, lon: -1.8558 },
  { gl: 'Donostia', es: 'San Sebastián', lat: 43.32, lon: -1.98 },
  { gl: 'Cuenca', es: 'Cuenca', lat: 40.0717, lon: -2.135 },
  { gl: 'Logroño', es: 'Logroño', lat: 42.4664, lon: -2.4457 },
  { gl: 'Almería', es: 'Almería', lat: 36.8417, lon: -2.4639 },
  { gl: 'Soria', es: 'Soria', lat: 41.7667, lon: -2.4667 },
  { gl: 'Vitoria', es: 'Vitoria', lat: 42.8467, lon: -2.6731 },
  { gl: 'Bilbao', es: 'Bilbao', lat: 43.2631, lon: -2.935 },
  { gl: 'Guadalajara', es: 'Guadalajara', lat: 40.6333, lon: -3.1667 },
  { gl: 'Granada', es: 'Granada', lat: 37.175, lon: -3.6 },
  { gl: 'Burgos', es: 'Burgos', lat: 42.3408, lon: -3.6997 },
  { gl: 'Madrid', es: 'Madrid', lat: 40.4169, lon: -3.7033 },
  { gl: 'Xaén', es: 'Jaén', lat: 37.7697, lon: -3.7889 },
  { gl: 'Santander', es: 'Santander', lat: 43.4647, lon: -3.8044 },
  { gl: 'Cidade Real', es: 'Ciudad Real', lat: 38.9865, lon: -3.9313 },
  { gl: 'Toledo', es: 'Toledo', lat: 39.8667, lon: -4.0333 },
  { gl: 'Segovia', es: 'Segovia', lat: 40.9481, lon: -4.1183 },
  { gl: 'Málaga', es: 'Málaga', lat: 36.7167, lon: -4.4167 },
  { gl: 'Palencia', es: 'Palencia', lat: 42.0167, lon: -4.5333 },
  { gl: 'Ávila', es: 'Ávila', lat: 40.6543, lon: -4.6962 },
  { gl: 'Valladolid', es: 'Valladolid', lat: 41.652, lon: -4.7286 },
  { gl: 'Córdoba', es: 'Córdoba', lat: 37.89, lon: -4.78 },
  { gl: 'León', es: 'León', lat: 42.5989, lon: -5.5669 },
  { gl: 'Salamanca', es: 'Salamanca', lat: 40.965, lon: -5.6642 },
  { gl: 'Zamora', es: 'Zamora', lat: 41.5033, lon: -5.7556 },
  { gl: 'Oviedo', es: 'Oviedo', lat: 43.3634, lon: -5.8423 },
  { gl: 'Sevilla', es: 'Sevilla', lat: 37.3886, lon: -5.995 },
  { gl: 'Cádiz', es: 'Cádiz', lat: 36.535, lon: -6.2975 },
  { gl: 'Mérida', es: 'Mérida', lat: 38.9158, lon: -6.3333 },
  { gl: 'Cáceres', es: 'Cáceres', lat: 39.4731, lon: -6.3711 },
  { gl: 'Huelva', es: 'Huelva', lat: 37.25, lon: -6.95 },
  { gl: 'Badaxoz', es: 'Badajoz', lat: 38.8779, lon: -6.9706 },
  { gl: 'Lugo', es: 'Lugo', lat: 43.0117, lon: -7.5572, galicia: true },
  { gl: 'Ourense', es: 'Ourense', lat: 42.3356, lon: -7.8641, galicia: true },
  { gl: 'A Coruña', es: 'A Coruña', lat: 43.3711, lon: -8.3961, galicia: true },
  { gl: 'Santiago', es: 'Santiago', lat: 42.8833, lon: -8.5333, galicia: true },
  { gl: 'Pontevedra', es: 'Pontevedra', lat: 42.431, lon: -8.6443, galicia: true },
  { gl: 'Vigo', es: 'Vigo', lat: 42.2358, lon: -8.7267, galicia: true },
];
