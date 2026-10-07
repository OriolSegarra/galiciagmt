# diario.md — Registro de sesiones

La entrada más reciente va arriba.

## 2026-10-07 (miércoles)
- **Tarea**: idea #27, enlaces con estado preconfigurado a la herramienta de amaneceres (base de #23 y de la guía del 25/10, #26).
- **Hecho**: `/ferramentas/amencer/` y `/es/herramientas/amanecer/` leen y escriben en la URL `?esc=actual|portugal|senveran&data=MM-DD&lim=480|510|540&cidade=vigo` (la ciudad queda resaltada). Apartado "Comparte un exemplo/caso concreto" con 3 enlaces de ejemplo. Probado con Chromium a 390 px. Noticias en `fontes/noticias-2026-10-07.md`: sin novedades de Galicia; el cambio de hora es el 25/10 a las 3:00.
- **Verificador**: NO APTO a la 1ª vuelta (titular idéntico en gl y es; en realidad válido en RAG, pero se diferenció) → APTO a la 2ª. Build OK (35 páginas).
- **Qué funcionó**: cambio pequeño y completo; era requisito para la guía de prensa.
- **Qué no / aprendizajes**: para #8 (colegio a oscuras) no hay fuente oficial de horas de entrada en Galicia (el DOG solo da el calendario 9/9/2026-21/6/2027); sin esa cifra se pospone. Hay que cuidar que el verificador no dé falsos positivos de gallego.
- **Pendiente / siguiente**: guía de prensa del 25/10 (#26) usando los enlaces nuevos, publicarla ~20-24/10; #23 imágenes para compartir; Tally sigue sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-06 (martes)
- **Tarea**: enlazar la moción modelo (ideas #24 y #25, auditoría de enlaces).
- **Hecho**: enlace a `/mocion/` y `/es/mocion/` desde el pie de todas las páginas, la home (bajo "Qué proponemos") y Asínao/Fírmalo. Corregidos galleguismos ("concello") en la versión castellana de la moción. Sin noticias nuevas: no se lanzó investigador (el 25/10 es la próxima ocasión). Auditoría: ninguna página queda huérfana.
- **Verificador**: NO APTO a la 1ª vuelta (galleguismos en `es/mocion.astro`) → corregido → APTO a la 2ª. Build OK (35 páginas).
- **Qué funcionó**: tarea corta y completa.
- **Qué no / aprendizajes**: la versión descargable (.pdf/.docx) de la moción sigue pendiente.
- **Pendiente / siguiente**: guía para el 25/10 (#26); más figuras (#30); Tally sigue sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-05 (lunes)
- **Tarea**: lunes, herramienta: mapa de España (idea #21).
- **Hecho**: `/ferramentas/mapa/` y `/es/herramientas/mapa/`: tres mapas SVG (horario actual, hora de Portugal, sin verano) con rejilla de 0,15° coloreada por días de 2026 con amanecer después de las 8:30; tabla con Girona, Madrid, Santiago y Vigo (0/0/0, 46/0/42, 114/0/91, 113/0/89 días). Contorno Natural Earth (dominio público) simplificado con `scripts/mapa-datos.ts` → `src/data/contorno.json`. Nota de contraargumento: en Vigo el 21/6 el sol se pone a las 21:14 con la hora de Portugal y a las 22:14 con la actual. Enlazada desde el índice de herramientas y desde la de amaneceres. Noticias en `fontes/noticias-2026-10-05.md`: sin novedades de Galicia.
- **Verificador**: APTO a la 1ª vuelta. Build OK (35 páginas).
- **Qué funcionó**: SVG estático calculado en build (sin JS); capturas a 390 y 1280 px para revisar.
- **Qué no / aprendizajes**: el umbral de 8:30 es nuestro e ilustrativo (dicho en la página). Con Portugal da 0 días en las cuatro ciudades: mapa casi en blanco, mensaje claro pero conviene mostrar también un umbral menor.
- **Pendiente / siguiente**: enlazar `/mocion/` (#24); guía para el 25/10 (#26); figuras restantes (#30); selector de umbral en el mapa.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-04 (domingo)
- **Tarea**: continuar la idea #30 (petición de Oriol 2/10): figura propia en el artículo del cambio de hora.
- **Hecho**: nueva figura SVG (`scripts/figuras.ts`): amanecer en Santiago en 2026 con tres horarios (actual, UTC+1 fijo, UTC+2 permanente), en gl y es, insertada en `cambio-de-hora-outubro-2026` / `cambio-de-hora-octubre-2026`. Cifra propia: con verano permanente, 32 días con amanecer después de las 10:00 (máximo 10:05); con el horario actual, ninguno. Noticias de la semana en `fontes/noticias-2026-10-04.md` (sin verificar; sin novedades de Galicia).
- **Verificador**: APTO a la 1ª vuelta. Build OK (33 páginas).
- **Qué funcionó**: reutilizar el escenario `senVeran` de `sol.ts` (+60 min para el verano permanente).
- **Qué no / aprendizajes**: el investigador citó una comunicación UE C/2026/1660 (calendario hasta 2031) sin contrastar; verificar en EUR-Lex antes de usarla.
- **Pendiente / siguiente**: lunes 5/10, mapa de España (#21); figuras para portugal-e-canarias, contraargumentos, 1940 (#30).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-03 (sábado)
- **Tarea**: petición de Oriol en Slack (2/10): acompañar los posts con visuales propios, no solo texto y tablas.
- **Hecho**: `scripts/figuras.ts` genera SVG con `sol.ts` y `cidades.ts` (`node scripts/figuras.ts` → `public/img/`). Dos figuras, en gl y es: (1) gradiente del amanecer el 21/12/2026 en 14 ciudades, de Girona a Santiago, con hora actual y hora de Lisboa, en `como-funciona-o-reloxo-do-corpo` / `como-funciona-el-reloj-del-cuerpo`; (2) amanecer en Santiago todo 2026 con ambas horas y la línea de las 8:30, en `galicia-ao-oeste-de-greenwich` / `galicia-al-oeste-de-greenwich`, con un párrafo que la presenta.
- **Verificador**: NO APTO a la 1ª vuelta (enlace a la herramienta sin ruta es; concordancia gl) → corregido → APTO a la 2ª vuelta. Build OK (33 páginas).
- **Qué funcionó**: SVG generados en script, con los mismos colores del sistema visual; revisión visual con captura de Chromium.
- **Qué no / aprendizajes**: en markdown no se pueden incrustar componentes Astro; las figuras van como imágenes SVG estáticas (hay que regenerarlas si cambia `sol.ts`). Las figuras no tienen enlace propio a la fuente: se cita en el pie del SVG y en el texto.
- **Pendiente / siguiente**: añadir figuras a los demás artículos (portugal-e-canarias, cambio de hora, os contraargumentos, 1940); lunes 5/10, mapa de España (#21).
- **Slack**: leído. Petición de Oriol atendida (primera parte; nueva idea #30).

## 2026-10-02 (viernes)
- **Tarea**: petición de Oriol en Slack (1/10): artículos sobre ritmo circadiano y luz solar, y contenido sobre toda la mitad oeste de la península, no solo Galicia.
- **Hecho**: artículo "Como funciona o reloxo do corpo: luz, sono e hora oficial" → `/artigos/como-funciona-o-reloxo-do-corpo/` y `/es/articulos/como-funciona-el-reloj-del-cuerpo/`. Fuentes: Nobel 2017, Wright 2013, Khalsa 2003, Roenneberg 2012, Gibson y Shrader 2018. Tabla propia (sol.ts) del amanecer del 21/12 en 14 ciudades, de Girona a Santiago, que muestra el gradiente este-oeste. Incluye "lo que no sabemos" (sin estudio del coste en euros).
- **Verificador**: 1ª vuelta; única objeción (tilde en "merecen") descartada por incorrecta según la RAG. Fuentes, cifras y tabla confirmadas. Build OK (33 páginas).
- **Qué funcionó**: investigador con fuentes primarias; reutilizar sol.ts.
- **Qué no / aprendizajes**: el verificador puede dar falsos positivos de ortografía gallega; contrastar con la RAG. Fuente de Gibson y Shrader enlazada al repositorio de datos (no a la revista).
- **Pendiente / siguiente**: más piezas sobre ritmo circadiano (cronotipo, adolescentes) y ampliar a la mitad oeste (idea #29); lunes 5/10, mapa de España (#21). Formulario Tally: Oriol dice haber conectado el MCP; no se ha tocado esta noche (crear/publicar el formulario es decisión de Oriol).
- **Slack**: leído. Petición de Oriol atendida (primera parte).

## 2026-10-01 (jueves) — Revisión estratégica mensual
- **Tarea**: día 1 del mes: revisión estratégica y reescritura parcial del backlog. No se publica contenido nuevo.
- **Hecho**: `ideas.md` repuntuado (#8 sube por curso escolar y gancho estacional; #21 anotada para el lunes 5/10; #4 marcada como bloqueada) y 5 ideas nuevas (#24-28). Sin cambios en la web publicada. Build OK al empezar (31 páginas).
- **Estrategia del mes (octubre)**:
  - Septiembre: lanzamiento, herramienta de amaneceres con gráfico por ciudades, artículo del cambio de hora, marco legal y moción modelo. Funcionó: reutilizar fuentes ya verificadas; Firecrawl para fuentes primarias. Falló: el verificador cazó un error en 3 de 4 piezas (cifras mal resumidas, citas con fecha incorrecta), así que se mantiene como paso obligatorio; los subagentes a veces no están disponibles.
  - Foco de octubre: (1) lunes 5/10 mapa de España; (2) cerrar la moción con enlaces y descarga; (3) piezas para el cambio de hora del 25/10, el momento de mayor atención mediática; (4) kit de prensa antes del 20/10.
  - Cuello de botella: el formulario de firmas (#4) depende de Oriol desde el 28/09; sin él la web no recoge apoyo real. Se recuerda en Slack.
  - Métrica: no hay analítica; no inventar cifras de alcance. Valorar con Oriol activar una analítica respetuosa con la privacidad.
- **Verificador**: no aplica (solo cambios en `ideas.md`/`diario.md`/`RESUMEN.md`, sin contenido publicado).
- **Qué no / aprendizajes**: no se lanzó investigador de noticias: el día 1 no se publica contenido y la última revisión (29-30/9) no halló novedades sobre Galicia.
- **Pendiente / siguiente**: lunes 5/10, mapa de España (#21).
- **Slack**: leído. Sin peticiones nuevas de Oriol (último mensaje, el informe del 30/9).

## 2026-09-30 (miércoles)
- **Tarea**: moción modelo para concellos (idea #2).
- **Hecho**: `/mocion/` y `/es/mocion/`: instrucciones de uso, texto de la moción con exposición de motivos (todo enlazado a fuentes ya verificadas) y acuerdos que piden al Estado un estudio técnico con tres opciones (hora de Greenwich, UTC+1 fijo, statu quo). Aclara que no se envía a nadie y que no hay concellos que la hayan aprobado. Enlaza a los contraargumentos. Ruta añadida en `ui.ts`.
- **Verificador**: NO APTO a la 1ª vuelta (estudio de 2022 simplificado: omitía Ponferrada y Huelva) → corregido → APTO a la 2ª. Build OK.
- **Qué funcionó**: reutilizar los datos ya verificados de los artículos.
- **Qué no / aprendizajes**: no se lanzó investigador de noticias esta noche (sin novedades previstas; el cambio de hora es el 25/10). La página no está en el menú; falta enlazarla desde Asínao/home.
- **Pendiente / siguiente**: enlazar `/mocion/` desde Asínao y home; el lunes 5/10, mapa de España (#21); kit de prensa (#3).
- **Slack**: leído. Sin peticiones nuevas.

## 2026-09-29 (martes)
- **Tarea**: artículo "¿Quién puede cambiar la hora oficial de Galicia?" (idea #7).
- **Hecho**: `/artigos/quen-pode-cambiar-a-hora-de-galicia/` y `/es/articulos/quien-puede-cambiar-la-hora-de-galicia/`. Marco legal: CE 149.1.12.ª (hora oficial, competencia exclusiva del Estado), RD 1308/1992, RD 236/2002. Dossier en `fontes/marco-legal-hora-oficial.md`. Noticias de la semana: nada nuevo sobre Galicia.
- **Verificador**: NO APTO a la 1ª vuelta (frase de Greenwich sin fuente, entradilla que citaba a las Cortes sin respaldo, `orde` duplicado) → corregido → APTO a la 2ª. Build OK.
- **Qué funcionó**: Firecrawl con `directQuote` contra el BOE.
- **Qué no / aprendizajes**: los subagentes `redactor`, `verificador`, `investigador` y `desarrollador` dejaron de estar disponibles a mitad de sesión; redacté yo y usé un agente general-purpose como verificador. El investigador no pudo confirmar la norma original de Canarias ni el trámite parlamentario: quedan como "lo que no sabemos" en el artículo.
- **Pendiente / siguiente**: moción modelo (#2), que se apoya en este artículo; buscar el Reglamento del Congreso y la norma de Canarias con fuente primaria. Próximo lunes: mapa de España (#21).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-09-28 (lunes) — Segunda ejecución de prueba: confirmado el push a main
- **Tarea**: prueba de la Routine (pedida por Oriol) para confirmar que `git push origin main` funciona tras añadir el repo a los "sources" autorizados; como tarea de contenido, artículo de actualidad sobre el cambio de hora del 25 de octubre de 2026 y la propuesta española a la UE (la primera prueba, de esta misma mañana, lo había escrito pero no pudo publicarlo por un 403 del proxy — ver entrada siguiente).
- **Hecho**:
  - `git push origin main` **funciona**: bloqueante resuelto.
  - Artículo nuevo gl/es publicado en `main`: "O 25 de outubro atrasamos o reloxo: por que iso non arranxa o problema de Galicia" / "El 25 de octubre atrasamos el reloj…" → `/artigos/cambio-de-hora-outubro-2026/` y `/es/articulos/cambio-de-hora-octubre-2026/`.
  - Contenido: fin del horario de verano (BOE, Orden PCM/186/2022), propuesta española de octubre de 2025 de derogar el cambio de hora en la UE (El País, Expansión) y estado estancado del expediente COM(2018)639 desde 2018 (Consilium, Comisión Europea). Incluye tabla comparativa con cálculo propio (método NOAA de `sol.ts`): si algún día se impusiera el horario de verano permanente en vez de eliminar el cambio de hora, en Santiago el sol saldría sobre las 10:01 el 21 de diciembre (frente a las 9:01 actuales). Enlaza a `/ferramentas/amencer/`.
  - Fuentes nuevas verificadas con Firecrawl (BOE, El País, Consilium, Comisión Europea, EUR-Lex, Expansión); no se ha creado un dossier nuevo en `fontes/` porque las 6 fuentes ya quedan citadas íntegras en el propio artículo.
- **Verificador**: NO APTO en la 1ª vuelta (una cita de una fuente diplomática, tomada del artículo de El País de 20/10/2025, se presentaba como declarada en 2025 cuando en realidad la hizo en 2021 y El País solo la recuerda) → corregido (se aclaró la fecha real de la cita en ambos idiomas y en el frontmatter) → **APTO en la 2ª vuelta**. `npm run build` OK en ambas rondas.
- **Qué funcionó**: Firecrawl (`formats: ["query"]`) para verificar citas exactas contra la fuente original de El País, incluso detectando una fecha mal atribuida que el investigador no había distinguido.
- **Qué no / aprendizajes**: el investigador puede mezclar la fecha de publicación de un artículo con la fecha real de una cita que ese artículo recuerda de años anteriores — pedir siempre al verificador que compruebe fechas de citas, no solo su literalidad.
- **Pendiente / siguiente**: retomar el ritmo normal de ideas.md (la #21, mapa de España, es la siguiente pieza grande para un lunes). Seguir con el backlog de campañas (moción modelo, kit de prensa) cuando Oriol confirme el formulario Tally.
- **Slack**: leído. Petición de Oriol (mensajes "Prueba 2" pendientes de confirmación de push): confirmar que `git push origin main` funciona — confirmado, ver arriba.

## 2026-09-28 (lunes) — Prueba de la Routine (bloqueada, sin publicar)
- **Tarea**: primera ejecución de prueba de la Routine (pedida por Oriol). Se escribió un artículo de actualidad sobre el cambio de hora del 25/10/2026 y la propuesta española a la UE, con verificador pasado (APTO en 2ª vuelta), pero **no se pudo publicar**.
- **Hecho**: dossier de fuentes (BOE, El País/Expansión, Consilium, Comisión Europea) y artículo gl/es redactados y verificados en el entorno de esa sesión; `npm run build` OK.
- **Verificador**: APTO en la 2ª vuelta (en esa sesión; el trabajo en sí no se conservó, ver abajo).
- **Qué no / aprendizajes**: `git push origin main` falló con 403 (`repo no autorizado en el conjunto de fuentes de la sesión`) — el repo se había añadido a la Routine con la sesión ya iniciada, y esa lista de repos autorizados no se recarga en caliente. El commit local de esa sesión se perdió al terminar el contenedor (cada ejecución nocturna arranca un contenedor nuevo): no había forma de recuperarlo desde una sesión posterior, así que el artículo se rehizo desde cero en la siguiente ejecución (ver entrada de arriba).
- **Pendiente / siguiente**: confirmar en una nueva ejecución que el push funciona (hecho, ver entrada de arriba) y no depender nunca de que el trabajo local de una sesión sobreviva a otra.
- **Slack**: leído/escrito. Se informó del bloqueo y se pidió a Oriol añadir el repo a los "sources" del entorno/trigger programado.

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
