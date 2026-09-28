# diario.md — Registro de sesiones

La entrada más reciente va arriba.

## 2026-09-28 (lunes) — Publicación y primera herramienta
- **Tarea**: publicar la web y construir la herramienta de amaneceres (sesión supervisada con Oriol, a partir de un prototipo suyo).
- **Hecho**:
  - `main` actualizado y desplegado en Vercel: https://galiciagmt.vercel.app/
  - Routine nocturna creada (03:07 Europe/Madrid, sesión nueva cada noche). Oriol ha añadido repo y conectores (Slack, Firecrawl).
  - Herramienta `/ferramentas/amencer/` (es: `/es/herramientas/amanecer/`): 52 ciudades de este a oeste, 3 escenarios (actual, hora de Portugal, sin horario de verano), selector de día, días al año con amanecer después de 8:00/8:30/9:00. Cálculo NOAA en cliente, validado contra timeanddate (±1 min).
  - Nueva sección Ferramentas en el menú y enlace desde la home.
  - CLAUDE.md: nueva sección "Prioridad: que se vea". ideas.md: ideas #21-23 (mapa, gráfico anual por bandas, imágenes para compartir).
  - Canal de Slack corregido a #galicia-gmt.
- **Qué funcionó**: Wikidata vía Firecrawl para coordenadas (la red bloquea wikidata.org directamente).
- **Pendiente / siguiente**: mapa de España por días con amanecer tarde (#21), vista anual por bandas (#22), formulario Tally.
- **Slack**: mensaje de estado enviado a #galicia-gmt.

## 2026-09-27 (domingo) — Lanzamiento
- **Tarea**: construir la web desde cero (sesión supervisada con Oriol).
- **Hecho**:
  - Astro 7 estático, bilingüe (gl en `/`, es en `/es/`), content collections con esquema que obliga a tener fuentes.
  - Diseño propio: Schibsted Grotesk, solo modo claro, papel/tinta/azul/sol. Reloj en vivo "hora oficial vs hora solar en Santiago" y gráfico de luz del 21 de diciembre Santiago vs Lisboa.
  - 5 artículos gl+es: xeografía do desfase, 1940, sono e saúde, Portugal e Canarias, contraargumentos.
  - Páginas: Asínao/Fírmalo (pendiente del formulario Tally), O proxecto, /ia, 404.
  - Cerebro: CLAUDE.md, AGENTE_NOCHE.md, ideas.md (20 ideas), subagentes en `.claude/agents/`.
  - Dossier de fuentes verificadas en `fontes/dossier-lanzamento.md`.
- **Verificador**: NO APTO en la 1ª vuelta (exageración "case as dez", cita UPM mal interpretada, menciones internas a "dossier", frase que contradecía la misión, matiz AASM) → corregido → APTO en la 2ª vuelta.
- **Qué funcionó**: Firecrawl para abrir fuentes que la red del contenedor bloquea (BOE, PubMed). El Notion de Oriol aportó el estudio Lugo/Coimbra (Bonmatí-Carrión 2022).
- **Qué no / aprendizajes**: el investigador en haiku sin Firecrawl no pudo abrir PubMed/BOE y devolvió fuentes sin URL; ahora su definición incluye Firecrawl. Los redactores tienden a redondear cifras ("case as dez"): el verificador debe vigilarlo.
- **Pendiente / siguiente**: formulario de firmas (necesita ID de Tally de Oriol), dominio propio, primera herramienta (amaneceres por concello, idea #1) el lunes.
- **Slack**: sesión supervisada, no aplica.
