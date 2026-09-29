# ideas.md — Backlog

Puntuación: **Impacto** (1-5) × **Facilidad** (1-5, 5 = muy fácil) = **Prioridad**. Se trabaja de mayor a menor salvo el ritmo de AGENTE_NOCHE.md (lunes = herramienta o pieza grande; día 1 = revisión estratégica).
Estados: `pendiente` · `en curso` · `hecha AAAA-MM-DD` · `descartada (motivo)`.

Última revisión: 2026-09-27 (lanzamiento).

| # | Idea | Tipo | Imp. | Fac. | Prio. | Estado | Notas |
|---|---|---|---|---|---|---|---|
| 21 | **Mapa de España** coloreado por días al año con amanecer después de las 8:30 (actual vs Portugal vs sin verano) | Herramienta | 5 | 3 | 15 | pendiente | Reutilizar `sol.ts` + `cidades.ts`; SVG propio, sin librerías pesadas. Muy compartible |
| 22 | **Tu año de amaneceres**: gráfico anual por ciudad con bandas horarias (5-6, 6-7… 9-10) por escenario, como el prototipo de Oriol | Herramienta | 4 | 4 | 16 | pendiente | Integrar en la herramienta de amaneceres como segunda vista |
| 23 | Imágenes para compartir (PNG) de la herramienta de amaneceres: "Vigo vs Girona el 21/12" | Campaña | 4 | 3 | 12 | pendiente | Generar en build o con canvas en cliente |
| 1 | **¿A qué hora amanecería en tu concello?** Buscador de los 313 concellos: amanecer/atardecer hoy con CET y con GMT, en invierno y verano | Herramienta | 5 | 3 | 15 | pendiente | Cálculo astronómico en el cliente (algoritmo NOAA, citar método). Coordenadas de concellos: IGN / Nomenclátor. Candidata al primer lunes |
| 2 | **Moción modelo para concellos** (gl/es, descargable .docx/.pdf) | Campaña | 5 | 4 | 20 | pendiente | Solo texto y argumentos con fuente; nunca enviarla a nadie. Página `/mocion` |
| 3 | **Kit de prensa**: 10 datos clave con fuente, gráficos descargables, contacto | Campaña | 4 | 4 | 16 | pendiente | Reutilizar dossier `fontes/` |
| 4 | Activar el formulario de firmas (Tally) en Asínao | Campaña | 5 | 5 | 25 | pendiente | **Requiere a Oriol**: crear el form en tally.so y pasar el ID → `src/config.ts` |
| 5 | **Test: ¿cuánto te afecta el desfase?** (5 preguntas: hora de despertar, cronotipo, trabajo) | Herramienta | 4 | 3 | 12 | pendiente | No es diagnóstico médico; explicarlo. Sin guardar datos |
| 6 | **Mapa de apoyos**: concellos/entidades que se pronuncian públicamente | Herramienta | 5 | 2 | 10 | pendiente | SOLO con acuerdos plenarios o declaraciones públicas enlazadas. Vacío hasta que exista el primero |
| 7 | Artículo: **¿Quién puede cambiar la hora de Galicia?** Marco legal (RD 236/2002, competencias, precedente Canarias) | Artículo | 5 | 3 | 15 | hecha 2026-09-29 | Buscar análisis jurídico serio; no afirmar sin fuente |
| 8 | Artículo: **El colegio a oscuras**: horarios escolares y luz en enero en Galicia | Artículo | 4 | 3 | 12 | pendiente | Datos: calendario escolar Xunta + amaneceres |
| 9 | Gráfico anual: hora de amanecer y atardecer en Santiago todo el año, con CET vs GMT | Herramienta | 4 | 4 | 16 | pendiente | Se integra en la home o en el artículo 1 |
| 10 | Artículo: **La frontera del Miño**: vivir con una hora de diferencia (Tui–Valença) | Artículo | 4 | 3 | 12 | pendiente | Buscar datos de trabajadores transfronterizos (EURES, Eixo Atlántico, AECT). No usar sin fuente |
| 11 | Seguimiento UE: estado de COM(2018) 639 y Consejo; página "Onde estamos" actualizable | Artículo | 3 | 4 | 12 | pendiente | Ideal tras cada noticia UE |
| 12 | Preguntas frecuentes (FAQ) gl/es | Web | 3 | 5 | 15 | pendiente | Respuestas cortas con enlace a artículos |
| 13 | Imagen OG por artículo (generada en build) | Web | 3 | 3 | 9 | pendiente | Mejora cómo se comparten en WhatsApp/redes |
| 14 | Artículo: **Qué pasó en Portugal 1992-1996** en profundidad (prensa portuguesa de la época, OAL) | Artículo | 3 | 3 | 9 | pendiente | |
| 15 | Artículo: **Luz de tarde vs luz de mañana**: qué preferimos y por qué (CIS 2026) | Artículo | 4 | 4 | 16 | pendiente | Honesto: la mayoría prefiere verano |
| 16 | Newsletter mensual (solo si hay sistema de altas con consentimiento) | Campaña | 3 | 2 | 6 | pendiente | Requiere decisión de Oriol |
| 17 | Página "Para partidos e institucións": resumen de 1 página + opciones | Campaña | 4 | 4 | 16 | pendiente | Tono neutral |
| 18 | Hoja de datos descargable (PDF 1 página) para imprimir | Campaña | 3 | 4 | 12 | pendiente | |
| 19 | Artículo: **Irlanda, Reino Unido y otros husos vecinos** en Europa | Artículo | 3 | 3 | 9 | pendiente | |
| 20 | Accesibilidad y rendimiento: auditoría Lighthouse y correcciones | Web | 2 | 4 | 8 | pendiente | |

## Hechas
- 2026-09-29 — Artículo: ¿Quién puede cambiar la hora oficial de Galicia? (CE 149.1.12.ª, RD 1308/1992, RD 236/2002). Queda pendiente verificar la norma de Canarias y el trámite parlamentario.
- 2026-09-28 — Artículo de actualidad: cambio de hora del 25/10/2026 y propuesta española a la UE, con cálculo propio del peor escenario (horario de verano permanente) para Galicia. Cubre parcialmente la idea #11 (seguimiento UE).
- 2026-09-28 — Herramienta "¿A qué hora amanece en cada ciudad?" (52 ciudades, 3 escenarios, selector de fecha, días > 8:00/8:30/9:00). Base para las ideas #1, #9, #21, #22.
- 2026-09-27 — Lanzamiento: home, 5 artículos, Asínao (a la espera del formulario), O proxecto, /ia.
