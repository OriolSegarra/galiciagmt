# Coordenadas e cálculo solar (28/09/2026)

## Coordenadas das cidades — Wikidata (CC0)
- Propiedade P625 (coordenadas): https://www.wikidata.org/wiki/Property:P625
- Consultadas vía SPARQL (query.wikidata.org) a través de Firecrawl, porque a rede do contedor bloquea wikidata.org directamente.
- Consulta usada para capitais: capital (P36) de cada provincia de España (Q162620) + P625. Completadas con consultas por QID: Palma (Q8826), Santiago de Compostela (Q14314), Vigo (Q8745), Girona (Q7038), Mérida (Q14323), Pamplona (Q10282), Murcia (Q12225), Cartagena (Q162615).
- Datos en `src/data/cidades.ts`.

## Cálculo de amencer — NOAA
- "General Solar Position Calculations": https://gml.noaa.gov/grad/solcalc/solareqns.PDF
  - Cénit para amencer/solpor: 90,833° ("the approximate correction for atmospheric refraction at sunrise and sunset, and the size of the solar disk").
  - sunrise (UTC, min) = 720 − 4·(longitude + ha) − eqtime.
- Implementación: `src/lib/sol.ts`.

## Validación (contra timeanddate.com, ver dossier-lanzamento.md)
| Caso | timeanddate | Cálculo |
|---|---|---|
| Santiago 21/12/2026 amencer | 9:01 | 9:01 |
| Santiago 21/12/2026 solpor | 18:02 | 18:03 |
| Santiago 21/06/2026 amencer | 6:55 | 6:55 |
| Santiago 21/06/2026 solpor | 22:16 | 22:16 |
| Lisboa 21/12/2026 amencer (UTC+0) | 7:50 | 7:51 |

## Resultados de referencia (ano 2026, días con amencer despois das 8:30)
- Horario actual: Santiago 114, Barcelona 0.
- Hora de Portugal: Santiago 0, Barcelona 0.
- Sen horario de verán (UTC+1 fixo): Santiago 91, Barcelona 0.
