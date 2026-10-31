# metricas.md — Registro semanal de visitas (PostHog, región UE)

Fuente: PostHog (proyecto galiciagmt, `eu.posthog.com`), analítica sin cookies desde el 23/10/2026.
Se actualiza los lunes y el día 1 de cada mes (ver `AGENTE_NOCHE.md`, paso 2b). Datos internos: no se publican en la web.

| Semana (lun-dom) | Visitantes | Páginas vistas | Firmas (`sinatura_enviada`) | Top 3 páginas | Principales procedencias | Lectura |
|---|---|---|---|---|---|---|
| 2026-10-19 → 25 | 37 | 37 | 0 | `/` (29), `/sobre/` (3), cambio de hora gl / Asínao (1 cada una) | directo 25, galiciagmt.es 7, Google 4 | Primera semana con analítica (desde el 23/10): casi todo entra por la home; sin firmas porque Tally sigue sin ID. Google ya envía algo de tráfico; Search Console aún sin filas. |

## Seguimiento diario (petición de Oriol, 27/10/2026)

PostHog, visitantes únicos por día. Firmas = evento `sinatura_enviada`. Tally (form `pebMgB`) lleva 1 envío en total (probablemente de prueba, el 23/10; sin evento en PostHog).

| Día | Visitantes | Páginas vistas | Firmas |
|---|---|---|---|
| 2026-10-23 | 29 | 29 | 0 |
| 2026-10-24 | 7 | 7 | 0 |
| 2026-10-25 | 1 | 1 | 0 |
| 2026-10-26 | 12 | 12 | 0 |
| 2026-10-27 | 3 | 3 | 0 |
| 2026-10-28 | 4 | 4 | 0 |
| 2026-10-29 | 3 | 3 | 0 |
| 2026-10-30 | 2 | 2 | 0 |

Últimos 7 días, por página: `/` 33, `/sobre/` 5, `/ferramentas/` 3, `/artigos/` 2; el resto, 1 cada una. Procedencia: directo 29, galiciagmt.es 18, Google 4. Casi nadie pasa de la home (1 página vista por visitante).

Search Console (29/9-26/10, `sc-domain:galiciagmt.es`): 3 consultas con impresiones (todas sobre "por qué Portugal tiene una hora menos", posición 7-11); por página, `/es/articulos/portugal-y-canarias/` 43 impresiones (pos. 7,4), herramienta de amaneceres es 15 (pos. 6,5), cambio de hora es 8 impresiones y 1 clic. Clics totales: 1.

### Cómo pensamos mejorarlo
1. **Que la gente pase de la home**: el 100 % de los visitantes ve 1 página. Poner en la home un bloque de entrada a la herramienta de amaneceres con una ciudad y fecha ya elegidas (Vigo vs Girona el 21/12) y "Ler tamén" al final de cada artículo (SEO-4).
2. **Subir donde ya hay impresiones**: `portugal-y-canarias` (43 impresiones, pos. 7,4) y la herramienta es: reescribir título/entradilla para la consulta "por qué Portugal tiene una hora menos" y mover a top 3 (SEO-2, siguiente tanda).
3. **Páginas por ciudad** (SEO-3): cada una responde "a qué hora amanece en Vigo/Santiago…" y enlaza a la herramienta.
4. **Tráfico no directo**: las visitas son sobre todo directas y de la propia web; falta difusión, que depende de Oriol (compartir las imágenes PNG de la herramienta, prensa local). El agente no contacta con nadie.
5. **Firmas**: Tally ya está activo en `/asinao/`; el 23/10 se enlazó, pero solo 1 visitante llegó a la página en 7 días. Enlazar Asínao desde el final de cada artículo.
