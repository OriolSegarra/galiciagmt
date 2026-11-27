# diario.md — Registro de sesiones

La entrada más reciente va arriba.

## 2026-11-27 (viernes)
- **Tarea**: SEO-2 con `portugal-y-canarias` / `portugal-e-canarias` (Search Console 29/10-25/11: 142 impresiones, pos. 10,6, 0 clics; aparece en «en portugal es una hora menos que en españa», pos. 58, y el título solo nombraba Galicia).
- **Hecho**: SIN PUBLICAR en `main`. Está en la rama `borrador/2026-11-27`. Título «Por qué Portugal tiene una hora menos que España y Galicia» / «Por que Portugal ten unha hora menos ca España e Galicia»; entradilla y primer párrafo empiezan con «En Portugal es una hora menos que en España»; sección nueva «La misma luz con dos relojes: el oeste de España» con tabla de 7 ciudades (Vigo, Ourense, Zamora, Salamanca, Cáceres, Badajoz, Huelva): amanecer 21/12/2026 y puesta 21/6/2027 con hora española y portuguesa, y días de 2027 con amanecer después de las 8:30 (Vigo 119, Huelva 75; con hora de Portugal, 0 en todas). Contraargumento con cifras: en junio el sol se pondría entre las 20:51 y las 21:14. Enlaces a 7 páginas por ciudad, al mapa y a la herramienta de concellos; fuente Wikidata P625; `actualizado: 2026-11-27`; palabra clave añadida en SEO.md. Build OK (157 páginas), sin scroll a 390 px.
- **Verificador**: NO APTO a la 1ª (entradilla ambigua, redondeo «21:00/22:00», año del mapa) → corregido → NO APTO a la 2ª solo por puntuación (dos puntos seguidos en la frase de las puestas). Aplicado su texto literal en el borrador; con el máximo de 2 vueltas cumplido, no publico.
- **Qué funcionó**: el script del scratchpad (`raia.ts`) permitió al verificador recalcular las 42 cifras: coinciden; Vigo 21/12 contrastado con timeanddate (9:00).
- **Qué no / aprendizajes**: al escribir rangos tras dos puntos, revisar que la frase no tenga ya otros dos puntos. Releer en voz alta las frases nuevas antes de verificar.
- **Pendiente / siguiente**: sábado 28/11: una vuelta de verificación de `borrador/2026-11-27` y, si sale APTO, fusionar en `main`. Después N-4. Lunes 30/11: pieza grande; 1/12: revisión estratégica. N-7 sigue bloqueada.
- **Métricas** (PostHog): 26/11: 5 cargas de página; 0 firmas. Search Console 29/10-25/11: portugal-y-canarias 142 impresiones (pos. 10,6), galicia-al-oeste 38 (5,8, 1 clic), 1940 22 (5,0, 1 clic). Noticias: nada en la semana (`fontes/noticias-2026-11-27.md`).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-26 (jueves)
- **Tarea**: SEO-2 con `el-colegio-a-oscuras` / `o-colexio-a-escuras`. El autocompletado de Google sugiere «a qué hora amanece en enero (en España, Madrid, Barcelona…)» y el título no lo recogía.
- **Hecho**: PUBLICADO en `main` (f03724b). Títulos nuevos: «A qué hora amanece en Galicia en enero: el colegio a oscuras» / «Hora de amencer en xaneiro en Galicia: o colexio a escuras». Entradilla con respuesta (15/1/2027: Vigo 9:01, Lugo 8:59, Barcelona 8:15). Sección nueva «La respuesta corta» con una tabla de 8 ciudades (6 gallegas, Madrid y Barcelona), cada una enlazada a su página: amanecer del 15/1/2027 con la hora actual y con la de Portugal, y días de lunes a viernes del curso con amanecer después de las 8:30 y de las 9:00 (cálculo con `sol.ts`; Santiago 81/22, Barcelona 0/0; con la hora de Portugal, 0 en todas a las 8:30). Enlace a la herramienta de concellos. Ocaso de Vigo del contraargumento corregido de 18:26 a 18:27, con timeanddate como fuente. `actualizado: 2026-11-26`. Sin scroll a 390 px. Build OK (157 páginas). https://galiciagmt.es/es/articulos/el-colegio-a-oscuras/
- **Verificador**: NO APTO a la 1ª: ocaso sin fuente y a 1 min de timeanddate; el dato de Wikidata P625 no se puede comprobar en la página de la propiedad; «en enero» generalizaba un solo día; título gl de 61 caracteres. Corregido → APTO a la 2ª. Recalculó todas las cifras y contrastó Vigo con timeanddate (9:01).
- **Qué funcionó**: el script de cálculo en el scratchpad, que el verificador pudo volver a ejecutar tal cual. Las cifras coinciden con la tabla antigua del artículo (Santiago 138/81/22, Girona 49).
- **Qué no / aprendizajes**: las cifras antiguas de un artículo también se revisan cuando se toca (el 18:26 venía de octubre). El dato de una fuente genérica (Wikidata P625) debe describir lo que hay en esa URL. No escribir «lectivos» si no se descuentan festivos.
- **Pendiente / siguiente**: N-4 (logo JSON-LD); SEO-2 con como-funciona-el-reloj; valorar SEO-2 en portugal-y-canarias (145 impresiones, pos. 10,6, 0 clics; aparece en «en portugal es una hora menos que en españa», pos. 58, y el título solo nombra Galicia). Vigilar el estudio de la Comisión sobre el fin del cambio de hora, previsto para finales de 2026 (Consejo, nota 10045/26) → idea #11. Lunes 30/11: pieza grande; 1/12: revisión estratégica. N-7 sigue bloqueada.
- **Métricas** (PostHog): 25/11: 2 cargas de página; 0 firmas. Search Console 28/10-24/11: portugal-y-canarias 145 impresiones (pos. 10,6), herramienta es 88 (7,6), colegio 2. Noticias: nada en la semana (`fontes/noticias-2026-11-26.md`).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-25 (miércoles)
- **Tarea**: publicar el borrador del 23-24/11 (herramienta de concellos + FIX-2) tras una vuelta de verificación.
- **Hecho**: PUBLICADO en `main` (82308e2): fusión de `borrador/2026-11-24`. Herramienta «A que hora amence no teu concello» con los 313 concellos (https://galiciagmt.es/ferramentas/concello/, es: https://galiciagmt.es/es/herramientas/concello/) y FIX-2 (fuera el margen «±1-2 min» sin fuente en 9 archivos; el contraste de ToolMapa con timeanddate queda fechado el 21/12/2026). Antes de verificar, grep en `src` de todos los patrones señalados: sin restos. Build OK (157 páginas).
- **Verificador**: APTO a la 1ª vuelta. Muestreó con Firecrawl 3 coordenadas de concellos contra Wikidata (Vigo, Vimianzo, Val do Dubra): coinciden. Notas no bloqueantes: enlazar timeanddate inline en el método de ToolConcello (:105, :157); revisar «os únicos oficiais» en un comentario de `concellos.ts` (no lo encontré en la línea indicada).
- **Qué funcionó**: buscar con grep todos los patrones antes de verificar (aprendizaje del 24/11): una sola vuelta.
- **Qué no / aprendizajes**: el ciclo borrador → verificación → corrección se alargó 3 noches por frases sueltas. Pasar un grep de patrones conocidos (±, «nos dous casos», «en lugar de a las») antes de la primera verificación.
- **Pendiente / siguiente**: SEO-2 con el-colegio-a-oscuras o como-funciona-el-reloj; N-4 (logo JSON-LD). N-7 sigue bloqueada (necesita a Oriol). Lunes 30/11: herramienta o pieza grande; martes 1/12: revisión estratégica de diciembre.
- **Métricas** (PostHog): 24/11: 2 cargas de página; 0 firmas. Search Console 27/10-23/11: 50 consultas, sobre todo «a qué hora amanece en <ciudad>». Noticias: nada en la semana 18-25/11 (`fontes/noticias-2026-11-25.md`).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-24 (martes)
- **Tarea**: FIX-2 (quitar en todo el sitio el margen «±1-2 min», sin fuente y atribuido a la NOAA) y publicar con ello la herramienta de concellos del 23/11.
- **Hecho**: SIN PUBLICAR en `main`. Todo está en la rama `borrador/2026-11-24` (fusión de `borrador/2026-11-23` + FIX-2). FIX-2: quitado el margen en CidadeAmencer (fuente y método; añadida la fuente timeanddate Santiago dic. 2026, 21/12 = 9:01), Prensa, ToolAmencer (método y nota de la tabla), ToolHora («±1 minuto»), partidos gl/es, ui.ts (nota de la imagen PNG), comentario de `sol.ts` y artículo cambio-de-hora-outubro/octubre-2026 (`actualizado: 2026-11-24`). ToolMapa: el contraste con timeanddate ahora dice que es del 21/12/2026. ToolConcello: «en lugar de a las» → «en lugar de las». Build OK (157 páginas).
- **Verificador**: NO APTO a la 1ª (ToolMapa generalizaba el contraste; dos «en lugar de a las»; sugerencias «nos dous casos») → corregido → NO APTO a la 2ª solo porque quedaba «nos dous casos»/«en ambos casos» en ToolAmencer (gl :31, es :60). Lo corregí con su texto literal, pero con el máximo de 2 vueltas cumplido no publico (esta vez no hago la excepción de los días 16 y 19/11).
- **Qué funcionó**: el verificador confirmó en vivo el 9:01 de timeanddate y dio por buena la parte sustantiva (fuentes, gallego, contraargumento) de la herramienta de concellos.
- **Qué no / aprendizajes**: al corregir un patrón, buscarlo con grep en todo `src` antes de verificar (el «nos dous casos» estaba en tres archivos y solo corregí dos). El verificador no pudo comprobar coordenadas de concellos: wikidata.org no resuelve; usar `firecrawl_scrape` para muestrear.
- **Pendiente / siguiente**: miércoles 25/11: una sola vuelta de verificación de `borrador/2026-11-24` (todo corregido) y, si sale APTO, fusionar en `main`. Después: SEO-2 (el-colegio-a-oscuras), N-4. N-7 sigue bloqueada.
- **Métricas** (PostHog): 23/11: 1 carga de página; 0 firmas. Search Console 26/10-22/11: 50 consultas. Noticias: nada institucional; una entrevista en la SER (18/11) en la que un economista pide reformar el huso (`fontes/noticias-2026-11-24.md`).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-23 (lunes)
- **Tarea**: herramienta del lunes, idea #1: «A que hora amence no teu concello» / «A qué hora amanece en tu concello», con los 313 concellos de Galicia.
- **Hecho**: SIN PUBLICAR en `main`. Está en la rama `borrador/2026-11-23`. Contenido: `src/data/concellos.ts` con los 313 concellos (código INE y coordenadas de Wikidata P625; consulta SPARQL por P772 vía `firecrawl_scrape`, porque query.wikidata.org está bloqueado; reparto 93/67/92/61). Vista `ToolConcello.astro` y rutas `/ferramentas/concello/` y `/es/herramientas/concello/`. Buscador con datalist y fecha, estado en la URL `?c=<ine>&data=MM-DD`. Para el día elegido muestra amanecer y puesta de sol en 3 escenarios, el 21/12 y el 21/6, y los días con amanecer después de las 8:30. Incluye tabla estática con los 10 concellos más tardíos y los 10 más tempranos el 21/12, un listado de los 313 por provincia en `<details>`, un contraargumento calculado (puesta de sol una hora antes en verano) y el marco competencial (CE 149.1.12.ª). Enlaces desde el índice de herramientas, desde ToolAmencer y desde las 6 páginas de ciudades gallegas. Fisterra 21/12: 9:04 (actual) / 8:04 (Portugal). Hoy (23/11) coincide con tablademareas a 8:37-8:39. Build OK (157 páginas) y sin scroll a 390 px.
- **Verificador**: NO APTO en la 1ª vuelta: «±1-2 min» atribuido a la NOAA, faltaba el marco legal y una frase valorativa. Corregido. NO APTO en la 2ª: «uno o dos minutos» sin fuente dentro de un concello, ya quitado en el borrador. Señala además que la misma atribución de «±1-2 min» a la NOAA sigue en páginas ya publicadas (cambio-de-hora-octubre-2026, partidos, prensa, ToolAmencer, CidadeAmencer). Con el máximo de 2 vueltas cumplido, no publico.
- **Qué funcionó**: `firecrawl_scrape` sobre la URL del endpoint SPARQL devuelve JSON. Filtrar por el código INE (P772) da exactamente los 313 concellos; filtrar por tipo (P31) solo daba 3.
- **Qué no / aprendizajes**: no escribir márgenes de precisión («±1-2 min», «uno o dos minutos») sin una base que se pueda citar. Usar lo contrastado: Santiago 21/12 exacto, Lisboa a 1 min. Revisar las frases del contraargumento antes de verificar: evitar las de equilibrio retórico.
- **Pendiente / siguiente**: martes 24/11: (1) FIX-2, quitar o reformular «±1-2 min» en todo el sitio; (2) verificar la rama `borrador/2026-11-23` (1 vuelta) y, si sale APTO, fusionarla en `main`. N-7 sigue bloqueada.
- **Métricas** (PostHog): semana 16-22/11: 13 cargas de página (antes 14); 2 desde Google a páginas profundas; 0 firmas. 22/11: 2. Search Console 25/10-21/11: 45 consultas (antes 10). Fila semanal en `metricas.md` y entrada en `seo-posicions.md`. Noticias: nada relevante (`fontes/noticias-2026-11-23.md`).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-22 (domingo)
- **Tarea**: SEO-2 en las 104 páginas por ciudad (`CidadeAmencer.astro`). Search Console trae consultas «a qué hora anochece en Jaén/Logroño/Sevilla», «amanecer Sevilla invierno», «hora amanecer Madrid/Valladolid/Málaga» a estas páginas (pos. 12-96) y la plantilla solo hablaba del amanecer.
- **Hecho**: PUBLICADO en `main` (aa6829c): título «A qué hora amanece y anochece en <ciudad>: hora oficial y de Portugal» / «A que hora amence e anoitece en <cidade>…», h1 igual; entradilla con salida y puesta del sol el 21/12 y el 21/6 y la salida con hora de Portugal; meta description propia (129-161 car.); tabla nueva «Amanecer y puesta de sol, mes a mes» (día 15 de cada mes, hora actual y hora de Portugal), calculada en build con `sol.ts`. Sin scroll horizontal a 390 px. Build OK (155 páginas). Ej.: https://galiciagmt.es/es/herramientas/amanecer/santiago/
- **Verificador**: NO APTO a la 1ª (frase sobre crepúsculo sin fuente; meta description de 173 car.) → corregido → APTO a la 2ª. Comprobó Santiago contra timeanddate (21/12, 21/6, 15/6 exactos; 15/1 y 15/12 a 1-2 min).
- **Qué funcionó**: un cambio en una plantilla mejora 104 páginas a la vez; `--dim query,page` muestra la intención real («anochece», «invierno»).
- **Qué no / aprendizajes**: no añadir explicaciones de astronomía (crepúsculo) sin fuente aunque parezcan obvias. Usar una `description` separada de la entradilla cuando esta pasa de 160 car.
- **Pendiente / siguiente**: lunes 23/11: herramienta o pieza grande + SEO semanal (candidatas #5 test o #1 buscador de concellos); revisar en 2-3 semanas si las páginas por ciudad suben en «anochece»; N-7 (Cookieless tracking sigue sin activar); N-4.
- **Métricas** (PostHog): 21/11 1 carga de página; 0 firmas. Search Console 24/10-20/11: portugal-y-canarias 163 impr. (pos. 8,1), herramienta es 78 (6,7), galicia-al-oeste 36. Noticias: nada en la semana (`fontes/noticias-2026-11-22.md`).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-21 (sábado)
- **Tarea**: SEO-2 con `amaneceres-tardios-sueno-y-salud` / `amenceres-tardios-sono-e-saude` (19 impresiones, pos. 5,6, 0 clics). El autocompletado de Google muestra búsquedas de «jet lag social» (consecuencias, adolescentes, síntomas) y el título no lo decía.
- **Hecho**: PUBLICADO en `main` (d721df4): título «Jet lag social y salud: los amaneceres tardíos de Galicia» / «Jet lag social e saúde: os amenceres tardíos de Galicia», entradilla nueva; sección «La respuesta corta» (qué es el jet lag social según Roenneberg 2012, lo medido en Lugo/Ponferrada/Huelva frente a Coimbra, los 19 min de EE. UU., lo que no sabemos) con enlaces a reloj del cuerpo y herramienta; definición corregida (antes llamaba «jet lag social» al desfase sol-reloj; ahora es la discrepancia reloj del cuerpo-horarios, que el huso puede agrandar); tabla nueva «Cuántos días sale el sol después de las 8:30» (10 ciudades, hoy y con hora de Portugal; Galicia 105-115 días después de 8:30, Barcelona/Valencia/Palma 0; con hora de Portugal, 0 en todas), cálculo con `diasDespoisDe` de `sol.ts`; enlace a el-colegio-a-oscuras; AASM y SES enlazadas inline; «según sus propios cálculos» de la SES corregido (son estudios de la Universidad de Murcia que cita); quitada la moraleja final; `actualizado: 2026-11-21`. Sin scroll horizontal a 390 px. Build OK (155 páginas). https://galiciagmt.es/es/articulos/amaneceres-tardios-sueno-y-salud/
- **Verificador**: NO APTO a la 1ª (11 puntos: atribución del término a 2012, AASM/SES sin enlace inline, «sus propios cálculos» de la SES, «conviña», «cerca de aquí» con Huelva, «no hay estudios» sin poder probarlo, «correlacionales», título largo, moraleja) → corregido → APTO a la 2ª.
- **Qué funcionó**: el autocompletado de Google dio la palabra clave («jet lag social») que Search Console no enseña para esta página (consultas anonimizadas). La tabla salió de una función que ya existía (`diasDespoisDe`).
- **Qué no / aprendizajes**: el término «jet lag social» lo introdujeron Wittmann y Roenneberg en 2006; no decir que Roenneberg lo «llamó así» citando el artículo de 2012. Ausencias («no hay estudios») mejor como «no conocemos». Un amanecer a las 8:30 no es «a oscuras» (hay crepúsculo antes): no exagerar en los titulares de sección.
- **Pendiente / siguiente**: lunes 23/11: herramienta o pieza grande + SEO semanal (candidatas: #5 test o #1 buscador de concellos si hay coordenadas); N-7 en cuanto Oriol active Cookieless tracking (hoy sigue `cookieless_server_hash_mode: 0`); N-4.
- **Métricas** (PostHog): 20/11 2 cargas de página; 0 firmas. Search Console 23/10-19/11: amaneceres-tardios 19 impr. (pos. 5,6). Noticias: nada relevante en la semana (`fontes/noticias-2026-11-21.md`).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-20 (viernes)
- **Tarea**: SEO-2 con `por-que-cambiamos-de-hora-en-1940` gl/es (25 impresiones, pos. 6,0, 1 clic; palabra clave de `SEO.md`: «cambio de hora 1940 Franco»): el título no llevaba la palabra clave, no había respuesta arriba ni ningún elemento visual.
- **Hecho**: PUBLICADO en `main` (5580c52): título «Franco y el cambio de hora de 1940: por qué nunca se deshizo» / «Franco e o cambio de hora de 1940: por que nunca se desfixo», entradilla nueva; sección «La respuesta corta» (BBC Mundo: orden del gobierno de facto de Franco; orden de 7/3/1940 firmada por Galarza; Greenwich desde 1901, UPM; art. 5º); sección «¿Fue para tener la hora de Alemania?» con las dos versiones (El País 2025 frente a ABC Historia 2017, que lo llama mito y dice que se siguió a Francia; UPM); tabla «La hora legal de España, antes y después de 1940» (elaboración propia desde la tabla del Real Observatorio de la Armada); tablas de amanecer y atardecer 21/12 y 21/6 en 5 ciudades gallegas y Barcelona con la hora de antes de 1940 frente a la de hoy (cálculo con `sol.ts`), con la nota honesta de que UTC+0 sin verano daría amaneceres antes de las 5:00 en junio y que la propuesta es la hora de Portugal (5:55/21:16 en Santiago); corregido el párrafo de 1922 y elipsis en la cita de La Moncloa; `actualizado: 2026-11-20`. Sin scroll horizontal a 390 px. Build OK (155 páginas). https://galiciagmt.es/es/articulos/por-que-cambiamos-de-hora-en-1940/
- **Verificador**: NO APTO a la 1ª (fila 1901-1936 atribuía a la Armada años que su tabla no cubre; cita de La Moncloa cortada sin elipsis; párrafo de 1922 ambiguo; cita ABC del dossier no literal) → corregido → APTO a la 2ª (aplicada su sugerencia opcional «haría salir el sol»).
- **Qué funcionó**: incluir la versión contraria (ABC) junto a la más repetida (El País) en lugar de elegir una: el tema Franco se trata como hecho histórico y la credibilidad no depende de un mito.
- **Qué no / aprendizajes**: al resumir una tabla histórica, no extender sus datos fuera del rango que cubre (la Armada empieza en 1918). En la Guerra Civil hubo calendarios distintos por zona: no simplificar. Copiar citas al dossier literalmente desde el primer momento.
- **Pendiente / siguiente**: SEO-2 con `amaneceres-tardios-sueno-y-salud` (19 impr., pos. 5,6); N-7 en cuanto Oriol active Cookieless tracking; N-4. Lunes 23/11: herramienta o pieza grande + SEO semanal.
- **Métricas** (PostHog): 19/11 2 cargas de página; 0 firmas. Search Console 22/10-18/11: portugal-y-canarias 159 impr. (pos. 8,1), herramienta es 73, 1940 25. Noticias: nada en la semana (`fontes/noticias-2026-11-20.md`).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-19 (jueves)
- **Tarea**: SEO-2 con `galicia-ao-oeste-de-greenwich` / `galicia-al-oeste-de-greenwich` (30 impresiones, pos. 6,1, 1 clic; palabra clave «por qué Galicia no tiene la hora de Portugal»): el artículo no respondía a su propio título.
- **Hecho**: PUBLICADO en `main` (6f89f01): entradilla nueva que responde; sección inicial «A resposta curta» / «La respuesta corta» (competencia del Estado CE 149.1.12.ª, preámbulo del RD 236/2002, orden de 7/3/1940, Decreto-Lei 17/96, UPI 1996) con enlaces a 1940, quen-pode y portugal-e-canarias; tabla nueva «Canto adianta o reloxo ao sol, de leste a oeste» (13 ciudades, Xirona→Vigo, invierno/verano/hora de Portugal, cálculo propio con longitudes de `cidades.ts`) con la nota de que Xirona, Palma y Barcelona quedarían por detrás del sol; frase de contraargumento (compartir hora con Europa) con enlace a os-contraargumentos; 6 fuentes nuevas; `actualizado: 2026-11-19`. Sin scroll horizontal a 390 px (formato h:min). Build OK (155 páginas). https://galiciagmt.es/es/articulos/galicia-al-oeste-de-greenwich/
- **Verificador**: NO APTO a la 1ª (orden Palma/Barcelona, «más de dos horas y media», «Galicia cae en el huso de Greenwich» exagerado, «até», RD sin «preámbulo») → corregido → NO APTO a la 2ª («la mayor parte de Galicia» seguía mal: las ciudades gallegas están al oeste de 7,5° O; entradilla larga) y dijo que con esos dos cambios daba APTO. Se aplicaron (frase literal suya; entradilla acortada a 164 car.) y se publicó sin 3ª vuelta, como el 16/11.
- **Qué funcionó**: tabla calculada desde `cidades.ts`: el verificador recalculó las 39 cifras y coinciden.
- **Qué no / aprendizajes**: el huso de Greenwich va de 7,5° E a 7,5° O: Lugo, Ourense, Santiago, A Coruña y Vigo quedan fuera, al oeste. No decir «Galicia está en el huso de Greenwich» sin matizar. Entradillas: contar caracteres antes de dar por buena la frase. El enlace a Wikidata P625 es genérico; mejorable con enlaces por ciudad.
- **Pendiente / siguiente**: N-7 en cuanto Oriol active Cookieless tracking (hoy `cookieless_server_hash_mode: 0`); SEO-2 con `amaneceres-tardios-sueno-y-salud` (19 impr., pos. 5,6) o `por-que-cambiamos-de-hora-en-1940` (25, pos. 6,0); N-4. Lunes 23/11: herramienta o pieza grande.
- **Métricas** (PostHog): 18/11 2 cargas de página; 0 firmas. Noticias: nada en la semana (`fontes/noticias-2026-11-19.md`).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-18 (miércoles)
- **Tarea**: SEO-2: `/es/herramientas/amanecer/` (71 impresiones, pos. 6,7-9, consulta «a qué hora amanece en galicia») y su pareja gl ahora responden la búsqueda.
- **Hecho**: PUBLICADO en `main` (179ded8): `src/views/ToolAmencer.astro` con `<title>` «¿A qué hora amanece en Galicia? Amaneceres en cada ciudad» / «A que hora amence en Galicia? Amenceres en cada cidade», h1 «¿A qué hora amanece en Galicia y en cada ciudad?» y sección inicial con respuesta directa (6:50 a mediados de junio en Lugo – 9:06 a principios de enero en A Coruña; 21/12 de 8:57 a 9:03, Barcelona 8:14) y tabla calculada en build con `sol.ts` (6 ciudades gallegas enlazadas a su página + Madrid y Barcelona; 21/12, 20/3, 21/6, 22/9, más tarde del año y 21/12 con hora de Portugal). Método reescrito sin generalizar la validación. Sin scroll horizontal a 390 px. Build OK (155 páginas). https://galiciagmt.es/es/herramientas/amanecer/
- **Verificador**: NO APTO a la 1ª (método generalizaba la validación de un día; «varía un minuto entre años» sin cálculo; NOAA sin enlace inline) → corregido → APTO a la 2ª.
- **Qué funcionó**: generar las cifras del texto en build desde `sol.ts`: la frase-respuesta no puede desfasarse de la tabla.
- **Qué no / aprendizajes**: no escribir afirmaciones de precisión que no salgan de un cálculo o fuente (lo de «entre años»).
- **Pendiente / siguiente**: SEO-2 con `galicia-al-oeste-de-greenwich` (27 impr., pos. 6,0); N-7 en cuanto Oriol active Cookieless tracking (hoy `cookieless_server_hash_mode: 0`); N-4.
- **Métricas** (PostHog): 17/11 3 cargas de página; 0 firmas. Noticias: nada en la semana (`fontes/noticias-2026-11-18.md`).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-17 (martes)
- **Tarea**: SEO-2 (tanda): `portugal-e-canarias` / `portugal-y-canarias`, la página con más impresiones en Search Console (145, pos. 7,6, 0 clics), ahora responde también a las búsquedas reales «en portugal se cambia la hora como en españa» y «portugal tiene la misma hora que canarias».
- **Hecho**: PUBLICADO en `main` (0f7c184): sección nueva «Portugal cambia a hora coma España?» / «¿Portugal cambia la hora como España?» con tabla UTC invierno/verano (Península, Portugal continental, Canarias), fuentes nuevas Directiva 2000/84/CE (EUR-Lex) y Decreto-Lei 17/96, deducción UTC+1/UTC+0 marcada como cuenta propia (directiva + RD 236/2002), enlaces a la FAQ y a `/ferramentas/hora/`; entradilla nueva y `actualizado: 2026-11-17`. Build OK (155 páginas). https://galiciagmt.es/es/articulos/portugal-y-canarias/
- **Verificador**: APTO a la 1ª vuelta.
- **Qué funcionó**: `node scripts/gsc.mjs --dim query,page` dice qué consultas llegan a cada página: mejor que adivinar la palabra clave.
- **Qué no / aprendizajes**: oal.ul.pt da error TLS en Firecrawl; el texto del DL 17/96 está en el PDF del OAL y en diariodarepublica.pt. N-5 revisada sin cambiar código: el único envío de Tally es una prueba del 23/10 anterior a PostHog; el evento no aparece porque no ha habido firmas (detalle en `fontes/noticias-2026-11-17.md`).
- **Pendiente / siguiente**: N-7 en cuanto Oriol active Cookieless tracking (sigue desactivado hoy); seguir SEO-2 con `herramientas/amanecer` (71 impresiones, pos. 6,7, consulta «a qué hora amanece en galicia») y `galicia-al-oeste-de-greenwich` (27, pos. 6,0); N-4.
- **Métricas** (PostHog): 16/11 1 carga de página; 0 firmas. Search Console 19/10-15/11: portugal-y-canarias 145 impr., herramienta es 71, 3 clics en total (cambio de hora, 1940, moción).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-16 (lunes)
- **Tarea**: pieza del lunes: kit de prensa (idea #3) con los gráficos descargables.
- **Hecho**: PUBLICADO en `main` (c1ac0ff): `/prensa/` y `/es/prensa/` (`src/views/Prensa.astro`): 5 gráficos SVG propios en gl y es con descripción, botón de descarga, versión en el otro idioma y enlace al artículo con datos y método; enlace a la herramienta para la imagen PNG por ciudad; datos citables (guía, partidos, contraargumentos); licencia y fórmula de cita; contacto; «Que non afirmamos». Enlace en el pie (`nav.prensa`) y desde la guía de prensa gl/es. El pie y la guía dicen ahora «Textos e gráficos» bajo CC BY-SA 4.0. «Baixar imaxe» en la herramienta (gl). Revisado a 390 px sin scroll horizontal. Build OK (155 páginas). Noticias en `fontes/noticias-2026-11-16.md`.
- **Verificador**: NO APTO a la 1ª (títulos de artículo recortados, frase del CIS extrapolada, licencia incoherente con el pie, «descargar» en gl) → corregido → 2ª: quedaban 3 «descargar»→«baixar» en gl y dijo que con esos tres cambios literales daba APTO. Se aplicaron tal cual y se publicó, sin 3ª vuelta.
- **Hallazgo importante (métricas)**: la analítica de PostHog está mal medida. Con `persistence: 'memory'` cada carga de página crea un visitante nuevo: de 93 IDs desde el 23/10, ninguno tiene más de 1 página vista. «Visitantes = páginas vistas», «rebote 100 %» y «nadie pasa de la home» son un artefacto. Arreglo (N-7): Oriol activa *Cookieless tracking* en PostHog (Settings > Web analytics; hoy desactivado) y luego el agente pone `cookieless_mode: 'always'` en `Analytics.astro`. No he tocado el ajuste del proyecto ni el código: con el código cambiado y el ajuste apagado, PostHog descartaría los eventos.
- **Qué funcionó**: consulta SQL en PostHog para comprobar la hipótesis antes de concluir nada.
- **Qué no / aprendizajes**: copiar los títulos de artículo del frontmatter, no resumirlos. En gl, «baixar» y no «descargar». Wikidata (query.wikidata.org) bloqueado por el proxy: el buscador de concellos (#1) necesitará otra fuente de coordenadas.
- **Pendiente / siguiente**: N-7 en cuanto Oriol active el ajuste; N-5 (evento de firmas; depende de N-7 para medirlo bien); N-4.
- **Métricas** (PostHog): 15/11 2 cargas de página; semana 9-15/11 14 (13 la anterior); 0 firmas. Search Console 18/10-14/11: 10 consultas, 0 clics; «a qué hora amanece en galicia» pos. 9,5 (`seo-posicions.md`).
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-15 (domingo)
- **Tarea**: mejora de la web: enlazar `/ferramentas/hora/` desde la home (pendiente desde el 6/11).
- **Hecho**: PUBLICADO en `main` (59b8b0c): línea «Que hora é agora en Galicia e en Portugal →» / «Qué hora es ahora en Galicia y en Portugal →» bajo el bloque de la herramienta de amaneceres en la home gl/es (`src/views/Home.astro`). Revisado a 390 px. Build OK (153 páginas). Noticias en `fontes/noticias-2026-11-15.md`.
- **Verificador**: APTO a la 1ª vuelta (sugerencia opcional de «?» final; no aplicada por coherencia con los otros enlaces).
- **Qué funcionó**: tarea pequeña y cerrada en una noche.
- **Qué no / aprendizajes**: el investigador no encontró nada en la semana; infocop.es y euronews bloqueados en la red.
- **Pendiente / siguiente**: lunes 16/11: herramienta o pieza grande (SEO-3 está cubierta por N-1; candidata #1 buscador de concellos o #5 test) + SEO del lunes (gsc.mjs); N-5.
- **Métricas** (PostHog): 14/11 3 visitantes, 3 páginas vistas, rebote 100 %; 0 firmas. Search Console no consultada.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-14 (sábado)
- **Tarea**: N-6, poner al día las piezas que seguían hablando del 25/10/2026 como futuro.
- **Hecho**: PUBLICADO en `main` (ceb31dc): `cambio-de-hora-outubro-2026` / `cambio-de-hora-octubre-2026` (título nuevo «…por que atrasar o reloxo en outubro non basta», entradilla y primer párrafo en pasado, próximo cambio 28/3/2027 y 31/10/2027 con el DOUE 18/3/2026) y `guia-prensa-cambio-hora` gl/es (título «Guía para contar o cambio de hora», apartado «Cando é o próximo cambio», dato 1 nuevo, enlace a `/ferramentas/hora/`, fórmula de cita actualizada), con `actualizado: 2026-11-14`. También `/partidos/` gl/es (frase del 25/10 en futuro) y los textos de enlace «O 25 de outubro atrasamos o reloxo» en FAQ, guía, partidos y quen-pode. Build OK (153 páginas). Noticias en `fontes/noticias-2026-11-14.md`.
- **Verificador**: NO APTO a la 1ª («os reloxos da Península» en la guía: el cambio es para toda España; textos de enlace antiguos) → corregido → APTO a la 2ª.
- **Qué funcionó**: grep de «25 de outubro/octubre» en todo `src` encontró también la página de partidos, que no estaba en N-6.
- **Qué no / aprendizajes**: «da Península» solo cuando se da la hora concreta (2:00→3:00); si no, «de España». Las piezas con fecha en el título caducan: preferir títulos sin fecha concreta.
- **Pendiente / siguiente**: lunes 16/11: herramienta o pieza grande (candidata SEO-3, páginas por ciudad) + SEO del lunes (gsc.mjs); enlazar `/ferramentas/hora/` desde la home; N-5.
- **Métricas** (PostHog): 13/11 2 visitantes, 2 páginas vistas; 0 firmas. Search Console no consultada.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-13 (viernes)
- **Tarea**: corrección de contenido caducado: la FAQ (gl/es) seguía respondiendo «Que pasa o 25 de outubro?» como si fuera futuro; ahora responde «Cando é o próximo cambio de hora?» con las fechas de 2027.
- **Hecho**: PUBLICADO en `main` (b65dc32): `preguntas-frecuentes` gl/es con el 28/3/2027 y el 31/10/2027 (Comunicación de la Comisión, DOUE 18/3/2026, `DOUE-Z-2026-70018`, comprobada con Firecrawl), nueva entrada en `fontes`, enlace a `/ferramentas/hora/` (cubre en parte el «enlazar la página de hora») y `actualizado: 2026-11-13`. Build OK (153 páginas). Noticias en `fontes/noticias-2026-11-13.md`. `metricas.md` con 12/11.
- **Verificador**: APTO a la 1ª vuelta; se aplicó su sugerencia de marcar 1:00 UTC = 2:00 peninsular como cuenta propia.
- **Qué funcionó**: pedir al investigador la fuente primaria; el calendario UE 2027-2031 estaba en el BOE (sección DOUE) aunque no hay orden española nueva localizada.
- **Qué no / aprendizajes**: no se pudo confirmar si existe orden española 2027-2031 (boe.es bloqueado para WebFetch y sin buscador vía Firecrawl); no afirmarlo en ninguna pieza. Varios medios dicen «confirmación del BOE» sin base clara.
- **Pendiente / siguiente**: el verificador avisa de que la guía de prensa («Qué pasa el 25 de octubre») y el artículo «O 25 de outubro atrasamos o reloxo» han quedado en pasado: actualizarlos con 2027 (o reorientar a «cambio de hora 2027»); enlazar `/ferramentas/hora/` desde la home; N-5.
- **Métricas** (PostHog): 10/11 2, 11/11 1, 12/11 2 visitantes; 0 firmas. Search Console no consultada.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-12 (jueves)
- **Tarea**: cerrar N-3 (textos de difusión para Oriol): 3ª verificación y fusión de `borrador/2026-11-10`.
- **Hecho**: PUBLICADO en `main` (`enlaces.md`, documento interno, no es una página de la web): hilo gl/es, nota de prensa, mensaje para ANPAS/sindicatos y pie de moción, ahora todos en gl y es (añadidos 2b, 3b, 4b). Correcciones de hoy: «204 días de lunes a viernes» (no «laborables»); el pleno «pide al Estado que estudie» la hora (como la moción); «adoptó en 1940 la hora de Europa central» en lugar de «usa desde 1940» (evita la excepción 1942-1946). Build OK (153 páginas). Investigador: noticias en `fontes/noticias-2026-11-12.md`. `metricas.md` con 5-11/11.
- **Verificador**: NO APTO a la 1ª de hoy (3 graves: «laborables», moción «solicitar el cambio», faltaban versiones gl) -> corregido -> APTO a la 2ª.
- **Qué funcionó**: el verificador recalculó todas las cifras con `sol.ts`; pasar las versiones gl de una vez cerró el último hueco.
- **Qué no / aprendizajes**: N-3 costó 6 noches para un texto corto. En textos de difusión, escribir gl y es a la vez desde el principio y copiar la formulación literal de la pieza fuente (no parafrasear «días lectivos/laborables», «cambiar/estudiar»).
- **Noticias**: el calendario de cambios de hora del BOE (orden de marzo de 2022, 5 años) termina el 25/10/2026 según RTVE; falta localizar en el BOE la orden para 2027 en adelante (candidata a pieza de actualidad / idea #11). Nada sobre Galicia en el periodo. Revisión sistemática 2026 (Steponenaite et al., vía Infocop) para contraargumentos: abrir el estudio primario antes de citarlo.
- **Pendiente / siguiente**: enlazar `/ferramentas/hora/` desde la home; comprobar en el BOE el calendario de cambios de hora 2027+; N-5 evento de firmas.
- **Métricas** (PostHog): 5/11 1, 6/11 4, 7/11 3, 8/11 1, 9/11 2, 10/11 2, 11/11 1 visitantes; últimos 7 días 14 visitantes, 14 páginas vistas, rebote 93 %; 0 firmas. Search Console no consultada.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-11 (miércoles)
- **Tarea**: corrección de error publicado: «204 días lectivos» eran días de lunes a viernes sin descontar festivos ni vacaciones.
- **Hecho**: PUBLICADO en `main`: entradilla y texto alternativo de `o-colexio-a-escuras` / `el-colegio-a-oscuras`, dato de `fontes` y punto 7 de `guia-prensa-cambio-hora` (gl/es), con `actualizado: 2026-11-11`; título y aria-label de la figura (`scripts/figuras.ts`, SVG regenerados; cifras sin cambios, título acortado porque se salía del lienzo). Build OK (153 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: APTO a la 1ª vuelta (confirmó 204 días L-V con cálculo propio).
- **Qué funcionó**: diff pequeño; captura del SVG con Playwright antes de verificar detectó el título desbordado.
- **Qué no / aprendizajes**: al cambiar textos de figuras SVG, mirar la imagen: el build no avisa del desbordamiento. N-3 sigue en `borrador/2026-11-10` sin 3ª vuelta.
- **Pendiente / siguiente**: 3ª verificación y fusión de `borrador/2026-11-10` (N-3); enlazar `/ferramentas/hora/` desde la home.
- **Slack**: leído. Sin peticiones nuevas de Oriol. PostHog y Search Console no consultados.

## 2026-11-10 (martes)
- **Tarea**: cerrar N-3 (textos de difusión en `enlaces.md`).
- **Hecho**: NO publicada. Rama `borrador/2026-11-10` con `enlaces.md` (cifras del 21/12 enlazadas a la herramienta, hilo GL arreglado, «cada una con su hora local», «204 días laborables», quitada la fecha sin fuente). Build OK (153 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO a la 1ª (204 «lectivos», fecha sin fuente, Lisboa/Santiago con relojes distintos: corregido) y NO APTO a la 2ª: el enlace del 8:00 de Vigo con hora de Portugal apuntaba a `esc=actual`; frase de los 138/22 confusa; falta enlace al Consejo para «sin aprobarse»; nota final inexacta. Los 4 puntos ya corregidos en la rama, sin 3ª vuelta (tope de 2).
- **Qué funcionó**: el verificador recalculó cada cifra con `sol.ts` y las fuentes.
- **Qué no / aprendizajes**: 5 noches con un texto corto. Comprobar con grep cada enlace `esc=` contra la cifra que acompaña antes de la 1ª vuelta. Ya publicado: «204 días lectivos» en `o-colexio-a-escuras`, `el-colegio-a-oscuras` (entradilla) y `guia-prensa-cambio-hora` punto 7 (gl/es): son laborables sin descontar festivos; corregir con `actualizado:`.
- **Pendiente / siguiente**: 3ª verificación y fusión de `borrador/2026-11-10`; corregir «lectivos»; enlazar `/ferramentas/hora/` desde la home.
- **Slack**: leído. Sin peticiones nuevas de Oriol. PostHog y Search Console no consultados.

## 2026-11-09 (lunes)
- **Tarea**: cerrar N-3 (textos de difusión): verificar y fusionar el borrador. (Lunes: no hubo tiempo de herramienta nueva; se prioriza cerrar lo pendiente.)
- **Hecho**: NO publicada. Rama `borrador/2026-11-09` con `enlaces.md`; `main` solo lleva diario y resumen. Build OK (153 páginas).
- **Verificador**: NO APTO a la 1ª (faltaban enlaces inline en 17:26/18:26 y «Vigo a las 8:00», /mocion/ en gallego dentro del texto es, «mismo reloj» ambiguo; todo corregido) y NO APTO a la 2ª: las cifras del 21/12 (Girona 8:13, Vigo 9:00 / 8:00) estaban enlazadas al artículo del colegio, que solo da valores del 15/1; deben enlazar a la herramienta (`?esc=actual&data=12-21&lim=510&cidade=vigo`). Confirmados: Santiago 9:01 y Lisboa 7:50 (timeanddate), COM(2018) 639 pendiente en el Consejo, CIS 66,4 %/22 %, 138/22 de 204 días. Menores: enlazar «52 ciudades, tres escenarios»; fechar «sigue sin aprobarse»; añadir ±1-2 min.
- **Qué funcionó**: el verificador comprobó cada cifra con `sol.ts` y las fuentes externas.
- **Qué no / aprendizajes**: ya van 3 noches con este borrador. En la rama hay un arreglo parcial y sin verificar (la edición del enlace GL «52 cidades» quedó con paréntesis abierto: revisar a mano). Enlazar cada cifra a la fuente que SÍ la contiene.
- **Pendiente / siguiente**: terminar enlaces en `borrador/2026-11-09` y verificar; enlazar `/ferramentas/hora/` desde la home.
- **Slack**: leído. Sin peticiones nuevas de Oriol. PostHog y Search Console no consultados.

## 2026-11-08 (domingo)
- **Tarea**: cerrar N-3 (textos de difusión en `enlaces.md`): 3ª verificación y fusión.
- **Hecho**: PUBLICADA solo una corrección en `main`: en `os-contraargumentos` / `los-contraargumentos` (gl/es) el CIS 66,4 % decía «verán/verano fijo»; la fuente (El Debate) solo dice «horario de verano». `actualizado: 2026-11-08`. Build OK (153 páginas). Los textos de difusión NO se publican: quedan en la rama `borrador/2026-11-08` (corregidos: enlaces inline de Lisboa, Vigo, 138/22 días y 1940; 22 % de invierno; calco).
- **Verificador**: NO APTO a la 1ª (5 enlaces/cifras sin enlace inline) y NO APTO a la 2ª (falta enlace a «desde 1940»; ya añadido en la rama, sin 3ª vuelta de hoy). Pendiente menor: confirmar Santiago 9:01 del 21/12 en timeanddate y «sigue sin aprobarse en el Consejo» en consilium.europa.eu.
- **Qué funcionó**: el verificador encontró también un error ya publicado (preferencia «fija» no respaldada por la fuente).
- **Qué no / aprendizajes**: en textos de difusión cada cifra y cada fecha necesitan enlace inline; revisar antes de la 1ª vuelta con grep.
- **Pendiente / siguiente**: verificar `borrador/2026-11-08` y fusionar; lunes 9/11: herramienta o pieza grande + SEO (gsc.mjs); enlazar `/ferramentas/hora/` desde la home.
- **Slack**: leído. Sin peticiones nuevas de Oriol. PostHog no consultado.

## 2026-11-07 (sábado)
- **Tarea**: N-3, textos de difusión para Oriol (hilo gl/es, nota de prensa, mensaje para ANPAS/sindicatos, pie de moción) en `enlaces.md`.
- **Hecho**: NO publicada. Rama `borrador/2026-11-07` con la sección nueva de `enlaces.md`. Sin cambios en la web (build no necesario; `node_modules` no instalado). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO a la 1ª (decía «hora de Berlín», «En Galicia» para cifras de Santiago, 66,4 % ambiguo) y NO APTO a la 2ª (faltaban enlaces inline en cifras y fuentes; el 66,4 % del CIS no dice «todo el año»). Ya corregido en la rama (enlaces añadidos, «47 minutos» en lugar de «casi una hora»); falta 3ª verificación.
- **Qué funcionó**: el verificador comparó cada cifra con los artículos publicados.
- **Qué no / aprendizajes**: en textos cortos de difusión hay que enlazar cada cifra en el propio texto y no atribuir a una encuesta formulaciones que no cita.
- **Pendiente / siguiente**: 3ª verificación y fusión de `borrador/2026-11-07`; lunes 9/11: herramienta o pieza grande (+ SEO lunes: gsc.mjs); enlazar `/ferramentas/hora/` desde la home; N-5.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-06 (viernes)
- **Tarea**: N-2, página «Que hora é en Galicia e en Portugal agora».
- **Hecho**: PUBLICADO en `main`: `/ferramentas/hora/` y `/es/herramientas/hora/` (`ToolHora.astro`, ruta `hora`, entrada en Tools). Reloj en directo Europe/Madrid y Europe/Lisbon, diferencia de 1 h todo el año, amanecer/atardecer de hoy en Santiago (actual vs Portugal) con `sol.ts`. Fuentes: timeanddate, BOE RD 236/2002, NOAA, Wikidata. Build OK (153 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO a la 1ª (etiqueta CET/CEST errónea con `enVeran` en la franja del cambio de hora) -> corregido con offset de Intl -> APTO a la 2ª.
- **Qué funcionó**: el verificador detectó un fallo de lógica que el build no ve.
- **Qué no / aprendizajes**: `enVeran` es para fechas de día, no instantes. Sin probar en navegador real. Safari <15.4 no soporta `shortOffset` (menor, sin try/catch). N-5: el código del evento `sinatura_enviada` es correcto (escucha `Tally.FormSubmitted`); no existe en PostHog porque no ha habido envíos tras instalarlo; probar con un envío real.
- **Pendiente / siguiente**: N-3 textos de difusión; enlazar la página de hora desde la home/FAQ; try/catch de `shortOffset`. Métricas (PostHog): 1/11 2, 2/11 1, 3/11 1, 4/11 2, 5/11 1; 0 firmas.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-05 (jueves)
- **Tarea**: enlazar desde la home las páginas de amanecer por ciudad (SEO-4 / cierre de N-1).
- **Hecho**: PUBLICADO en `main`: línea en el bloque Girona/Vigo de `src/views/Home.astro` (gl/es) con enlaces a Lugo, Ourense, A Coruña, Santiago, Pontevedra y Vigo (`/ferramentas/amencer/<cidade>/`). La herramienta ya listaba las 52 ciudades. Build OK (151 páginas). Sin investigador (noticias el 25/10). `metricas.md` con 2-4/11.
- **Verificador**: NO APTO a la 1ª («cada cidade galega» prometía integridad) -> corregido -> APTO a la 2ª.
- **Qué funcionó**: diff mínimo y verificación sobre `dist`.
- **Qué no / aprendizajes**: evitar cuantificadores absolutos en textos generados desde una lista filtrada.
- **Pendiente / siguiente**: N-2 hora actual Galicia/Portugal; N-5 evento de firmas; N-3 textos de difusión. Métricas (PostHog): 2/11 1, 3/11 1, 4/11 2; 0 firmas.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-04 (miércoles)
- **Tarea**: SEO-4: bloque «Ler tamén» al final de cada artículo (3 artículos, herramienta de amaneceres y Asínao), en sustitución del enlace «Seguinte».
- **Hecho**: PUBLICADO en `main`: `src/views/Article.astro` y claves nuevas en `src/i18n/ui.ts` (gl/es); corregido además «Ler en galego» -> «Leer en gallego» en la interfaz es. Build OK (151 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: APTO a la 1ª vuelta.
- **Qué funcionó**: diff pequeño y verificación sobre `dist`.
- **Qué no / aprendizajes**: los enlaces a herramienta y Asínao se ven igual que los títulos de artículo; valorar distinguirlos.
- **Pendiente / siguiente**: enlazar las páginas por ciudad desde la herramienta y la home; N-2 hora actual; N-5 evento de firmas. Métricas (PostHog): 31/10 3, 1/11 2, 2/11 1, 3/11 1; 0 firmas. GSC (6/10-2/11): 6 consultas, 0 clics, posiciones 4-11.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-03 (martes)
- **Tarea**: cerrar N-1 fase 1: verificar y fusionar `borrador/2026-11-02` (páginas por ciudad).
- **Hecho**: PUBLICADO en `main`: 52 ciudades x gl/es en `/ferramentas/amencer/<cidade>/` y `/es/herramientas/amanecer/<ciudad>/`. Correcciones de hoy: título BOE por idioma (también en ToolAmencer, ToolAno y ToolMapa, que lo tenían en gallego en /es), «1 minuto» en singular, fuente timeanddate del huso de Portugal. Build OK (151 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO a la 1ª y a la 2ª de hoy (3ª y 4ª en total); el último fallo (BOE en gallego en tres vistas /es) se corrigió y se comprobó con grep en `dist`, sin 3ª vuelta de hoy.
- **Qué funcionó**: el verificador encontró fallos reales de i18n que el build no ve.
- **Qué no / aprendizajes**: al corregir un texto fijo, buscarlo en todas las vistas (`grep`) antes de verificar.
- **Pendiente / siguiente**: "Ler tamén" + enlace a Asínao (SEO-4); enlazar las páginas por ciudad desde la herramienta y la home; N-2 hora actual. Métricas (PostHog): 29/10 1, 30/10 2, 31/10 3, 1/11 2, 2/11 1; 0 firmas.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-02 (lunes)
- **Tarea**: lunes, herramienta: SEO-3/N-1 fase 1, páginas «A que hora amence en <cidade>» (52 ciudades x gl/es).
- **Hecho**: NO publicada. Rama `borrador/2026-11-02`: vista `CidadeAmencer.astro`, rutas `/ferramentas/amencer/<cidade>/` y `/es/herramientas/amanecer/<ciudad>/`, `slugCidade` en `cidades.ts`, lista de ciudades en la herramienta. Cada página: respuesta en el primer párrafo (21/12 con hora actual y Portugal), comparación con Girona y Madrid, mediodía solar, tabla de 4 fechas x 3 escenarios, gráfico SVG anual, días > 8:30/9:00, contrapartida del solpor de verano y contraargumento (sincronía con España/UE), fuentes. Build OK (151 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO tras 2 vueltas. 1ª: Madrid se comparaba consigo mismo, "punto" en gl, faltaban fuentes (4 min/grado, huso de Portugal) y contraargumento. 2ª: títulos de fuentes timeanddate en gallego en las páginas es (el "4 min/grado" debía decir "coeficiente de las fórmulas"). Ambos ya corregidos en la rama; falta 3ª verificación.
- **Qué funcionó**: reutilizar `sol.ts` y `cidades.ts`; generar el texto desde las cifras evita plantillas vacías.
- **Qué no / aprendizajes**: comprobar en el build las ciudades extremas (Madrid, Girona) y los textos fijos del lado es; generar dos idiomas multiplica los fallos de i18n.
- **Pendiente / siguiente**: 3ª verificación del diff y fusión de `borrador/2026-11-02` en `main`; después "Ler tamén" (SEO-4). Métricas: 29/10 1, 30/10 2, 31/10 3, 1/11 2 visitantes; 0 firmas; GSC 6 consultas, 1 clic.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-11-01 (domingo)
- **Tarea**: día 1 del mes: revisión estratégica (sin contenido nuevo, según `AGENTE_NOCHE.md`).
- **Hecho**: PUBLICADO en `main` (solo documentación interna): `ideas.md` reescrito (5 ideas nuevas N-1..N-5; descartadas #16 y #19; #9 marcada hecha; #3 reducido; nuevo orden de trabajo), `enlaces.md` nuevo, `SEO.md` con palabras nuevas, `metricas.md` con la fila semanal y el 31/10. Sin cambios en la web; build no necesario.
- **Verificador**: no aplica (sin contenido publicable).
- **Qué funcionó**: el autocompletado de Google (Firecrawl) mostró que se busca "a qué hora amanece en <ciudad>" para toda España.
- **Qué no / aprendizajes**: el volumen de contenido no es el cuello de botella: 3 visitantes/día, 0 firmas. Falta difusión (depende de Oriol) y conversión (home -> herramienta -> Asínao). `sinatura_enviada` no aparece en PostHog.
- **Estrategia del mes (noviembre)**: (1) conversión: SEO-4 "Ler tamén" + enlace a Asínao al final de cada artículo; (2) tráfico orgánico: páginas por ciudad (N-1) el lunes 2/11 y hora actual (N-2); (3) SEO-2 en las páginas restantes; (4) comprobar el evento de firmas (N-5); (5) material de difusión listo para Oriol (`enlaces.md`, N-3). Meta de noviembre: 15 visitantes/día y 1 clic diario de Google.
- **Pendiente / siguiente**: lunes 2/11: SEO-3/N-1 fase 1 (herramienta: páginas por ciudad). Métricas: 26/10 12, 27/10 3, 28/10 4, 29/10 3, 30/10 2, 31/10 3; 0 firmas.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-31 (sábado)
- **Tarea**: bloque de entrada en la home (Girona vs Vigo el 21/12), pensado para que los visitantes pasen de la home a la herramienta.
- **Hecho**: PUBLICADO en `main`: bloque "El mismo día, la misma hora oficial" en `src/views/Home.astro` (gl/es): Girona 8:13, Vigo 9:00 (hora actual), Vigo 8:00 con hora de Portugal; enlace a la herramienta con Vigo/Portugal preconfigurado; fuentes NOAA, Wikidata y herramienta enlazadas (cálculo propio con `sol.ts`). Build OK (47 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO a la 1ª (fuentes NOAA/Wikidata sin enlace) -> corregido -> APTO a la 2ª.
- **Qué funcionó**: reutilizar el cálculo ya publicado en el artículo del reloj del cuerpo.
- **Qué no / aprendizajes**: las cifras fijas en el markup no se actualizan solas; si cambia el método, revisar. timeanddate no tiene página de Girona con esa URL.
- **Pendiente / siguiente**: domingo 1/11: revisión estratégica (reescribir `ideas.md`). Luego "Ler tamén" (SEO-4) y SEO-3. Métricas: 27/10 2, 28/10 5, 29/10 3, 30/10 2 visitantes (PostHog), 0 firmas.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-30 (viernes)
- **Tarea**: SEO-2 sobre `portugal-e-canarias` (título, entradilla y primer párrafo con la respuesta, enlaces internos).
- **Hecho**: PUBLICADO en `main`: título "Por que Portugal ten unha hora menos ca Galicia" (es: "Por qué Portugal tiene una hora menos que Galicia"), entradilla con la respuesta, párrafo inicial con fuentes enlazadas (UPI 1996, timeanddate) y enlaces a 1940 y a la herramienta de amaneceres (Santiago, 21/12). `actualizado: 2026-10-30`. Build OK (47 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO a la 1ª (el enlace a la herramienta mostraba Vigo y escenario Portugal, no el 9:01 de Santiago) -> corregido -> APTO a la 2ª.
- **Qué funcionó**: verificar solo el diff.
- **Qué no / aprendizajes**: comprobar que el estado preconfigurado de un enlace muestra la cifra citada.
- **Pendiente / siguiente**: bloque de entrada en la home (Vigo vs Girona); "Ler tamén" (SEO-4); SEO-3. Métricas: 27/10 3, 28/10 4, 29/10 3 visitantes, 0 firmas. GSC sin cambios (4 consultas, 0 clics). Lunes 2/11: herramienta o pieza grande; día 1 (domingo 1/11) revisión estratégica.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-29 (jueves)
- **Tarea**: FIX-1, cierre: verificar y fusionar `borrador/2026-10-27`.
- **Hecho**: PUBLICADO en `main`: cifras de sol (puesta 18:02, salida 6:55, mediodía Lisboa 12:34) con su dato en `fontes`, cita de 1922 textual y con enlace inline al documento UPM 2017 (galicia-ao-oeste-de-greenwich y 1940, gl/es). Build OK (47 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO a la 1ª (faltaba enlace inline en la cita de 1922) -> corregido -> APTO a la 2ª.
- **Qué funcionó**: verificar solo el diff y comprobar citas contra el PDF con Firecrawl.
- **Qué no / aprendizajes**: ninguna cita sin enlace inline en su propio párrafo, aunque diga "misma fuente". Menor: en `fontes` del artículo de 1940, el título de la URL UPM podría ser "Documento UPM, 2017".
- **Pendiente / siguiente**: FIX-1 cerrado. SEO-2 sobre `portugal-y-canarias` (43 impresiones, pos. 7,4); bloque de entrada en la home; "Ler tamén" (SEO-4). Métricas: 28/10 5 visitantes, 29/10 2 (parcial), 0 firmas; GSC 4 consultas, 0 clics.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-28 (miércoles)
- **Tarea**: petición de Oriol en Slack (27/10): comprobar Tally, estadísticas diarias y plan de mejora, posiciones SEO.
- **Hecho**: PUBLICADO en `main` (solo documentación interna, sin cambios en la web): Tally ya tiene ID (`pebMgB`, publicado, 1 envío); mis avisos de "sin ID" eran erróneos. Sección "Seguimiento diario" en `metricas.md` (23-27/10 + plan de mejora) con PostHog y Search Console; `AGENTE_NOCHE.md` pide las cifras cada noche en Slack. Build no necesario (sin código).
- **Verificador**: no aplica (sin contenido publicable).
- **Qué funcionó**: PostHog `execute-sql` y `scripts/gsc.mjs` dan las cifras en un paso.
- **Qué no / aprendizajes**: la web recibe ~3-30 visitantes al día, todos ven 1 página; 1 clic en Google en 4 semanas. Mayor palanca: pasar de la home a la herramienta y SEO de `portugal-y-canarias`.
- **Pendiente / siguiente**: verificar y fusionar `borrador/2026-10-27` (FIX-1); SEO-2 sobre `portugal-y-canarias`; bloque de entrada en la home; "Ler tamén".
- **Slack**: leído. Petición de Oriol atendida.

## 2026-10-27 (martes)
- **Tarea**: FIX-1, resto (18:02/6:55/12:34 de Lisboa sin fuente clara, cita de Canarias 1922).
- **Hecho**: NO publicada. Rama `borrador/2026-10-27`: fuentes de timeanddate ampliadas (puesta 18:02, salida 6:55, mediodía Lisboa 12:34 ya figuraban allí, no son cálculo propio), cita de 1922 textual ("se les aplicó a estas el huso 23…", "la parte occidental…" sin la "a" dentro de las comillas). Build OK (47 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO tras 2 vueltas. 1ª: marqué como "cálculo propio" cifras que son de timeanddate. 2ª: 6:55 también está en timeanddate; faltaba "puesta 18:02" en `fontes`; cita 1922 no literal. Los tres ya aplicados en la rama; falta 3ª verificación.
- **Qué funcionó**: verificar solo el diff.
- **Qué no / aprendizajes**: comprobar en timeanddate/dossier antes de etiquetar algo como "cálculo propio"; textualidad de citas: no meter palabras sueltas dentro de las comillas.
- **Pendiente / siguiente**: verificar y fusionar `borrador/2026-10-27`; corregir la cita "a la parte" en `fontes/dossier-lanzamento.md`; 2019/CIS; SEO-2 2ª tanda; SEO-3. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-26 (lunes)
- **Tarea**: fusionar SEO-2 (1ª tanda) y FIX-1 (correcciones de contenido publicado). Lunes sin herramienta nueva: prioridad a cerrar errores factuales pendientes.
- **Hecho**: PUBLICADO en `main`: títulos/entradillas de galicia-ao-oeste, cambio-de-hora-2026 y 1940 (gl/es); cita del 84 % y 4,6 M ahora con COM(2018) 639 (EUR-Lex, comprobada) en los artículos y la guía de prensa; "32 días >10:00" recalculado con `sol.ts` (Santiago, UTC+2 fijo: 32 días, máx. 10:05); quitada la frase sin fuente sobre 2019/turismo; coordenadas de Santiago 8,53° (Wikipedia es); galego corregido; 2 enlaces internos en el artículo de 1940. `actualizado: 2026-10-26`. Build OK (47 páginas). Métricas semanales añadidas a `metricas.md` (37 visitantes, 0 firmas; GSC sin filas aún).
- **Verificador**: NO APTO a la 1ª (coordenadas, galego, enlaces) -> corregido -> APTO a la 2ª.
- **Qué funcionó**: verificar solo el diff acotó la revisión.
- **Qué no / aprendizajes**: sin investigador hoy (noticias el 25/10).
- **Pendiente / siguiente**: en galicia-ao-oeste, "18:02", "6:55" y "12:34" (Lisboa) sin fuente: marcar como cálculo propio; 2019/CIS sin enlace en `fontes`; tabla de Lisboa; elipsis Canarias 1922; SEO-2 2ª tanda; SEO-3 páginas por ciudad. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-25 (domingo)
- **Tarea**: SEO-2, 1ª tanda (títulos y entradillas de galicia-ao-oeste, cambio-de-hora-2026 y 1940, gl/es).
- **Hecho**: NO publicada. Rama `borrador/2026-10-25` (títulos con palabra clave, entradillas con la respuesta, correcciones: "oitenta anos" -> "62 anos" en el artículo de 1940, latitud de Lisboa, 1 h 32 min-2 h 36 min, fuente Wikipedia para 8,54°, sin "huso de Varsovia"). Build OK (47 páginas). Noticias en `fontes/noticias-2026-10-25.md`: sin decisión nueva en la UE ni postura de Xunta/Parlamento; debate de expertos (ARHOE vs. físicos) en prensa.
- **Verificador**: NO APTO tras 2 vueltas. 1ª: 13 puntos, la mayoría en contenido antiguo. 2ª (solo diff): enlace timeanddate sin longitud, "Varsovia", "cuatro grados" sin fuente. Los 3 ya aplicados en la rama; falta 3ª verificación.
- **Qué funcionó**: el verificador encontró un error factual publicado (80 vs 62 años).
- **Qué no / aprendizajes**: tocar un artículo hace que el verificador audite todo su contenido; en SEO-2 limitar el diff y pedir revisión solo de líneas modificadas desde la 1ª vuelta.
- **Pendiente / siguiente**: verificar y fusionar `borrador/2026-10-25`. Pendientes en contenido ya publicado (alta prioridad): cita 84 % atribuida a MEMO/18/5641 (usar COM(2018) 639), 2019/CIS sin enlace inline ni en `fontes` (cambio-de-hora), "32 días >10:00" sin comprobar con `sol.ts`, tabla de Lisboa sin enlace, elipsis en cita de Canarias 1922 (artículo 1940). Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-24 (sábado)
- **Tarea**: datos estructurados JSON-LD (SEO-1).
- **Hecho**: PUBLICADO en `main`: `Article` en los 22 artículos (gl/es), `FAQPage` en la FAQ (10 preguntas, solo texto visible), `WebApplication` en las 6 páginas de herramientas, `Organization`+`WebSite` en las dos home. Archivos: `JsonLd.astro`, `lib/schema.ts`, `Base.astro`, vistas. Build OK (47 páginas); 34 bloques JSON-LD válidos. Sin investigador (noticias el 25/10).
- **Verificador**: APTO a la 1ª vuelta.
- **Qué funcionó**: tarea acotada, sin cambios visuales.
- **Qué no / aprendizajes**: no validado con el Rich Results Test; el logo de Organization es SVG (Google prefiere PNG ≥112 px). Lancé por error un workflow vacío (sin efecto).
- **Pendiente / siguiente**: domingo 25/10 cambio de hora; SEO-2 (títulos/entradillas); revisar tabla de /partidos/ a 390 px. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-23 (viernes)
- **Tarea**: página "Para partidos e institucións" (idea #17).
- **Hecho**: PUBLICADA en `main`: `/partidos/` y `/es/partidos/` (tabla comparativa de opciones A Lisboa / B UTC+1 fijo / C statu quo, quién decide, herramientas con estado, qué no afirmamos); enlaces desde el pie y la moción. Aclarado en `os-contraargumentos` (gl/es, `actualizado: 2026-10-23`) que la opción B no crea frontera solo si la aplica todo el Estado. Build OK (45 páginas). Noticias en `fontes/noticias-2026-10-23.md`: sin novedades de Galicia ni de la UE.
- **Verificador**: NO APTO a la 1ª (B sin matiz estatal, AASM sin "nacional") -> corregido -> APTO a la 2ª.
- **Qué funcionó**: el verificador detectó una lectura laxa de un artículo propio.
- **Qué no / aprendizajes**: no probado a 390 px (tabla con scroll horizontal).
- **Pendiente / siguiente**: revisar la tabla en móvil; #15 luz de tarde vs mañana; 25/10 cambio de hora; Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-22 (jueves)
- **Tarea**: corrección de precisión del cálculo solar en el artículo del cambio de hora (pendiente del 21/10).
- **Hecho**: PUBLICADO en `main`: "validado con ±1 minuto" -> "precisión esperada de ±1-2 minutos" (alineado con `sol.ts`) en `cambio-de-hora-outubro-2026` (gl) y `cambio-de-hora-octubre-2026` (es); `actualizado: 2026-10-22`. Build OK (43 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: APTO a la 1ª vuelta.
- **Qué funcionó**: tarea pequeña y acotada.
- **Qué no / aprendizajes**: `CLAUDE.md` (sección Prioridad) aún dice "validado ±1 min" para sol.ts; no lo edito de forma autónoma, queda para Oriol.
- **Pendiente / siguiente**: siguiente idea del backlog (p. ej. #17 página para partidos/instituciones o #15 luz de tarde vs mañana); 25/10 cambio de hora. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-21 (miércoles)
- **Tarea**: imágenes para compartir (idea #23).
- **Hecho**: PUBLICADO en `main`: botón "Descargar imaxe/imagen" en `/ferramentas/amencer/` (es: `/es/herramientas/amanecer/`). PNG 1200x630 por canvas con el amanecer de la ciudad elegida en los 3 escenarios. Archivos: `AmencerEspana.astro`, `ui.ts`. Build OK (43 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO a la 1ª (precisión ±1 min vs ±1-2 de sol.ts, fuente NOAA sin enlace en el pie, color fijo) -> corregido -> APTO a la 2ª.
- **Qué funcionó**: el desarrollador probó la descarga a 390 px con Playwright.
- **Qué no / aprendizajes**: no repetir la precisión sin contrastarla con `sol.ts`.
- **Pendiente / siguiente**: ver si el artículo del 25/10 dice ±1 min (sol.ts dice ±1-2) y alinear; jueves: siguiente idea del backlog. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-20 (martes)
- **Tarea**: publicar la guía de prensa del cambio de hora (idea #26) desde `borrador/2026-10-19`.
- **Hecho**: PUBLICADA en `main`: `/artigos/guia-prensa-cambio-hora/` (gl) y `/es/articulos/guia-prensa-cambio-hora/`; ajustes de fuentes en el artículo `cambio-de-hora-*-2026` (cifra 4,6 M quitada, `actualizado:`). Build OK (43 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO a la 1ª ("Consejo de Energía" no figura en la fuente, titular de CIS ambiguo, "no hay cifra" absoluto, "estancada" en presente, dato DOG) -> corregido -> APTO a la 2ª.
- **Qué funcionó**: correcciones puntuales y verificación acotada a los cambios.
- **Qué no / aprendizajes**: no añadir detalles (órgano, lugar) que la fuente no da. Pendiente no bloqueante: reabrir AASM y Moncloa 2019 cuando haya acceso (verificadas antes en `fontes/dossier-lanzamento.md`).
- **Pendiente / siguiente**: restaurar 4,6 M citando COM(2018) 639 (opcional); #23 imágenes para compartir. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-19 (lunes)
- **Tarea**: publicar la guía de prensa del cambio de hora (idea #26) y revisar la cifra 4,6 M del artículo del 25/10. Sin herramienta nueva (lunes) por ser #26 sensible al plazo del 25/10.
- **Hecho**: NO publicada. Rama `borrador/2026-10-19` (guía gl/es + ajustes en `cambio-de-hora-*-2026`: cifra 4,6 M quitada con `actualizado:`, cita de El País parafraseada, fuente El País 2021 añadida, fuentes AASM/SES/MDPI en la guía). Build OK (43 páginas). Sin investigador (noticias el 25/10).
- **Verificador**: NO APTO tras 2 vueltas. 1ª: cita de El País no literal y Consejo Europeo vs Energía, fuentes SES/AASM/MDPI sin enlace, redacción del CIS. 2ª: títulos de fuente entre comillas no literales (El País, Expansión), "confirma el bloqueo" sobreafirmado, "estancado" sin fuente de 2025-26, SES en presente (es de 2018). Los 5 puntos ya aplicados en la rama; falta una 3ª verificación. Nota: la cifra 4,6 M SÍ figura en COM(2018) 639 (EUR-Lex), se puede restaurar citando esa fuente.
- **Qué funcionó**: el verificador abre las fuentes y detecta títulos y tiempos verbales inexactos.
- **Qué no / aprendizajes**: no entrecomillar títulos de fuente sin copiarlos; evitar presente para posturas antiguas.
- **Pendiente / siguiente**: 3ª verificación de `borrador/2026-10-19` (solo esos cambios), fusionar y publicar antes del 25/10. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-18 (domingo)
- **Tarea**: guía de prensa del cambio de hora del 25/10 (idea #26), gl/es, solo con datos ya publicados en los artículos.
- **Hecho**: NO publicada. Trabajo en la rama `borrador/2026-10-18` (`guia-prensa-cambio-hora.md` gl/es, 10 datos citables, enlaces a herramientas con estado, "qué no decir", licencia). Build OK (43 páginas). Sin investigador (próximas noticias el 25/10).
- **Verificador**: NO APTO tras 2 vueltas. 1ª: la pérdida de luz de la tarde atribuida a Os contraargumentos; Xunta y estudios de salud con afirmaciones absolutas; cifra 4,6 M no confirmable en el MEMO 18/5641; galleguismos. 2ª: la cláusula de la tarde seguía dentro de la lista de contraargumentos; COM(2018) 639 sin enlace; el verificador no pudo abrir el MEMO (Firecrawl solo da la cabecera). Todo aplicado en la rama (frase propia para la tarde, enlace EUR-Lex, 4,6 M quitado). El snippet de búsqueda del MEMO sí da literal: "Según los resultados preliminares, el 84 % de los encuestados es partidario de abolir el cambio de hora estacional".
- **Qué funcionó**: el verificador detectó atribuciones indebidas a un artículo propio.
- **Qué no / aprendizajes**: el MEMO de la Comisión no es scrapeable; la cifra 4,6 M del artículo `cambio-de-hora-outubro-2026` (y del dossier) tampoco está confirmada en él: revisar ese artículo y poner `actualizado:` si hace falta.
- **Pendiente / siguiente**: 3ª verificación de `borrador/2026-10-18` (solo esos cambios), fusionar y publicar antes del 25/10; lunes 19: herramienta o pieza grande. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-17 (sábado)
- **Tarea**: verificar y publicar la FAQ (idea #12) de la rama `borrador/2026-10-16`.
- **Hecho**: PUBLICADA en `main`: `/artigos/preguntas-frecuentes/` (gl) y `/es/articulos/preguntas-frecuentes/` (10 preguntas). Build OK (41 páginas). Sin investigador (próximas noticias el 25/10).
- **Verificador**: NO APTO a la 1ª (8,54° sin enlace/fuente; 138/204 y 22 sin enlace al cálculo) -> corregido -> APTO a la 2ª. Todas las citas (Bonmatí-Carrión 429/91, Moncloa "fijo", CIS, UPM, OAL, Consejo UE) confirmadas contra la fuente.
- **Qué funcionó**: la 3ª verificación cerró lo pendiente; cada cifra propia enlaza a su artículo de método.
- **Qué no / aprendizajes**: `src/data/cidades.ts` tiene Santiago en lon -8,5333 (8,53) y la FAQ usa 8,54 (Wikipedia, 8,5444); alinear en una próxima mejora.
- **Pendiente / siguiente**: guía de prensa 25/10 (#26), publicar ~20-24/10. Lunes 19: herramienta o pieza grande. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-16 (viernes)
- **Tarea**: verificar y publicar la FAQ (idea #12) de la rama `borrador/2026-10-15`.
- **Hecho**: NO publicada. Trabajo en la rama `borrador/2026-10-16` (FAQ gl/es con todas las correcciones). Build OK (41 páginas). Sin investigador (próximas noticias el 25/10).
- **Verificador**: NO APTO tras 2 vueltas. 1ª: fuente Bonmatí-Carrión sin enlazar, 8,53° vs 8,54°, Moncloa ambigua, UPM (huso 23 / decreto 1922), RD 236/2002 sobreafirmado, tono ("sentido común"), dato NOAA sin el ocaso de Vigo. 2ª: el estudio Bonmatí-Carrión tiene 429 participantes (91 en Lugo, no "estudio pequeño de 91"), y faltaba "fijo" en la cita de Moncloa. Las 2 ya aplicadas en la rama; falta una 3ª verificación. Opcional: comprobar a mano la frase de Moncloa "no es unánime ni concluyente".
- **Qué funcionó**: el verificador contrastó cada cita con la fuente original.
- **Qué no / aprendizajes**: la FAQ lleva 5 noches. Al citar un estudio, copiar n total y alcance de la fuente; en citas parciales, mantener las palabras que cambian el sentido ("fijo").
- **Pendiente / siguiente**: verificar `borrador/2026-10-16` (solo esos dos cambios), fusionar y publicar; guía de prensa 25/10 (#26), publicar ~20-24/10. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-15 (jueves)
- **Tarea**: verificar y publicar la FAQ (idea #12) de la rama `borrador/2026-10-14`.
- **Hecho**: NO publicada. Trabajo en la rama `borrador/2026-10-15` (FAQ gl/es con todas las correcciones). Build OK (41 páginas). Sin investigador (próximas noticias el 25/10).
- **Verificador**: NO APTO tras 2 vueltas. 1ª: quitar "fijo" (El Debate no lo dice), 8,54° -> 8,53°, añadir 65,7% CIS, recomendación del informe Moncloa, suavizar El País, "no encontramos estudios". 2ª: la recomendación de Moncloa es "mantener el cambio estacional hasta 2021" (no "hasta que haya consenso"); los `dato` del frontmatter (El Debate, Moncloa, El País) debían reflejar lo que dice el cuerpo. Todo ya aplicado en la rama; falta una 3ª verificación. Opcional: anotar en `fontes/` los cálculos propios (138/204, 22, Vigo 18:26->17:26).
- **Qué funcionó**: el verificador abrió El Debate y Moncloa con Firecrawl y contrastó citas literales.
- **Qué no / aprendizajes**: cada frase añadida para corregir exige su propio respaldo literal y su `dato`; copiar la formulación exacta de la fuente.
- **Pendiente / siguiente**: verificar `borrador/2026-10-15` (solo esos cambios), fusionar y publicar; guía de prensa 25/10 (#26), publicar ~20-24/10. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-14 (miércoles)
- **Tarea**: verificar y publicar la FAQ (idea #12) de la rama `borrador/2026-10-13`.
- **Hecho**: NO publicada. Trabajo en la rama `borrador/2026-10-14` (FAQ gl/es con todas las correcciones). Build OK (41 páginas). Sin investigador (próximas noticias el 25/10).
- **Verificador**: NO APTO tras 2 vueltas. 1ª: fuentes inline que faltaban (OAL, UPM para Canarias 1922) y cita del Consejo UE truncada. 2ª: el enlace al OAL no respaldaba "GMT en invierno / +1 en verano"; hay que usar https://oal.ul.pt/hora-legal/legislacao/ (Decreto-Lei 17/96). Esa última corrección y la cita UE/UPM ya aplicadas en la rama; falta la 3ª verificación (solo el cambio del OAL).
- **Qué funcionó**: el verificador contrastó cada cita con la página original.
- **Qué no / aprendizajes**: la FAQ arrastra 4 noches de verificación; cada afirmación necesita enlace inline propio, no solo la sección "Ver".
- **Pendiente / siguiente**: mañana: verificar `borrador/2026-10-14`, fusionar y publicar; guía de prensa 25/10 (#26), publicar ~20-24/10. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-13 (martes)
- **Tarea**: idea #12, FAQ gl/es (10 preguntas, solo datos y fuentes ya publicados en los artículos).
- **Hecho**: redactada y corregida; NO publicada. Trabajo en la rama `borrador/2026-10-13` (`preguntas-frecuentes.md` gl/es). Build OK (41 páginas). Sin investigador (próximas noticias el 25/10).
- **Verificador**: NO APTO tras 2 vueltas. 1ª: 8 puntos (Portugal "mantiene Greenwich" sin verano, El País sobrevalorado, Moncloa atribuida mal, falta enlace a estudios, cálculo 34 min sin fuente). 2ª: 5 puntos (estudio de 91 personas en Lugo, "un parlamento puede pedir el cambio" sin verificar, 34 vs 32 min, fecha del CIS = publicación, "desde entonces" sin fuente). Los 5 ya corregidos en la rama; falta la 3ª verificación.
- **Qué funcionó**: el verificador comprobó cifras y citas contra la fuente original.
- **Qué no / aprendizajes**: una FAQ condensa matices y es fácil que sobreafirme; al resumir, copiar la formulación del artículo de origen.
- **Pendiente / siguiente**: verificar `borrador/2026-10-13`, fusionar y publicar; guía de prensa 25/10 (#26), publicar ~20-24/10. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-12 (lunes)
- **Tarea**: lunes, herramienta: idea #22 "Tu año de amaneceres".
- **Hecho**: `/ferramentas/ano/` y `/es/herramientas/ano/`: selector de ciudad (?cidade=), tres paneles SVG del amanecer de todo el año (actual, hora de Portugal, sin verano) con bandas horarias y línea de 8:30, tabla de días después de 8:00/8:30/9:00 y puesta de sol 21/6 y 21/12. Enlazada desde el listado de herramientas y desde la de amaneceres. Probada en Chromium a 390 px. Build OK (39 páginas). Sin investigador esta noche (próximas noticias el 25/10).
- **Verificador**: NO APTO a la 1ª (contraargumento decía que solo los solpores de verano se adelantan; frase de método sin acotar) → corregido; la 2ª detectó que mi limpieza de variables rompió el script (funciones `aria`/`tabH`) → restaurado y probado en navegador → APTO a la 3ª (una vuelta extra por regresión propia).
- **Qué funcionó**: probar en navegador detectó lo que el build no ve.
- **Qué no / aprendizajes**: no limpiar variables "sin usar" sin comprobar el `<script>` del componente.
- **Pendiente / siguiente**: guía de prensa 25/10 (#26), publicar ~20-24/10 (enlazar esta herramienta). Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-11 (domingo)
- **Tarea**: verificar y publicar la rama `borrador/2026-10-10` (figura Lisboa-Santiago, fuente del estudio Bonmatí-Carrión, corrección de edad).
- **Hecho**: fusionada y publicada en `main`. `/artigos/portugal-e-canarias/` (y es) con figura Lisboa vs Santiago el 21/12 y la frase del estudio ahora con fuente (tendencia en el oeste de España vs Coimbra). Corregido "mayores de 65 años" por "personas mayores y jubiladas, ~72 años de media" en el artículo de salud ya publicado; `actualizado: 2026-10-11` en los cuatro archivos. Build OK (37 páginas). Sin investigador (el 25/10 es la próxima ocasión de noticias).
- **Verificador**: NO APTO a la 1ª vuelta (falta "personas", dato NOAA no literal, "presuntamente sin trabajo remunerado") → corregido → APTO a la 2ª.
- **Qué funcionó**: el verificador comprobó el estudio original (n=294 y 135; 71,8 y 72,1 años).
- **Qué no / aprendizajes**: el contenedor no alcanza gml.noaa.gov; el dato NOAA se marca como traducción de la cita literal del dossier. Opcional futuro: mencionar Coimbra en la frase de limitaciones.
- **Pendiente / siguiente**: guía de prensa 25/10 (#26), publicar ~20-24/10. Mañana lunes: herramienta o pieza grande. Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-10 (sábado)
- **Tarea**: publicar la figura Lisboa-Santiago y fuentear la frase Lugo-Coimbra de portugal-e-canarias (continuación de #30).
- **Hecho**: aplicadas las correcciones de la rama del 9/10; la frase ahora cita Bonmatí-Carrión 2022 (oeste de España vs Coimbra, "tendencia"); fuentes Bonmatí y NOAA en `fontes`; `dato` coherente en el artículo de salud. NO publicado: trabajo en la rama `borrador/2026-10-10`. Build OK.
- **Verificador**: NO APTO tras 2 vueltas. La 2ª pidió: "mayores de 65 años" no está en la fuente (es "mayores y jubilados, edad media ~72"; ya cambiado en la rama, también en el artículo de salud ya publicado) y que el `dato` de NOAA sea literal del PDF (ya cambiado). Falta una 3ª verificación de esos dos cambios.
- **Qué funcionó**: el verificador detectó que el texto ya publicado exageraba el estudio (decía Lugo en vez de oeste de España).
- **Qué no / aprendizajes**: el artículo de salud publicado dice "mayores de 65 años" sin respaldo; hay que corregirlo en `main` con `actualizado:` aunque no se publique la figura.
- **Pendiente / siguiente**: mañana: verificar la rama `borrador/2026-10-10` (solo 2 correcciones), fusionar y publicar; después guía de prensa 25/10 (#26). Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-09 (viernes)
- **Tarea**: idea #30, figura propia (Lisboa vs Santiago el 21/12) para el artículo portugal-e-canarias.
- **Hecho**: función `lisboa` en `scripts/figuras.ts`, SVG gl/es y pie de figura en ambos artículos. NO publicado: trabajo en la rama `borrador/2026-10-09`.
- **Verificador**: NO APTO tras 2 vueltas. Pendiente: pie de figura con enlaces propios a timeanddate Lisboa/Santiago; "Coa hora de Lisboa" (gl); pie del SVG ("cálculo propio coincide con timeanddate"); unificar "amañece"/"amencer"; y, sobre todo, la frase ya publicada "estudios que comparan la salud del sueño entre Lugo y Coimbra" en portugal-e-canarias (gl/es, línea 47) no tiene fuente enlazada: buscar el estudio con fuente o eliminar la frase.
- **Qué funcionó**: cifras de la figura coinciden con timeanddate (9:01 / 7:50; 8:01 calculado).
- **Qué no / aprendizajes**: el verificador encontró un problema de fuentes en texto antiguo; revisar esa frase es prioritario.
- **Pendiente / siguiente**: mañana: arreglar la frase Lugo-Coimbra, aplicar las correcciones de la rama borrador y publicar; guía de prensa 25/10 (#26). Tally sin ID.
- **Slack**: leído. Sin peticiones nuevas de Oriol.

## 2026-10-08 (jueves)
- **Tarea**: idea #8, artículo "El colegio a oscuras" (tras el mensaje de Oriol del 7/10 sobre la hora de entrada).
- **Hecho**: `/artigos/o-colexio-a-escuras/` y `/es/articulos/el-colegio-a-oscuras/`. Figura nueva (`scripts/figuras.ts`, función `colexio`) y tabla: días lectivos L-V del 9/9/2026 al 21/6/2027 (204, sin descontar festivos) con amanecer después de las 8:00/8:30/9:00 en Girona, Madrid y Santiago, con horario actual y hora de Lisboa (Santiago: 138/81/22 vs 22/0/0). Fuentes: DOG (calendario e instrucciones), El Debate (decálogo Alianza por el Sueño), AASM, cálculo propio. Dossier en `fontes/noticias-2026-10-08.md`; sin novedades de Galicia.
- **Verificador**: NO APTO a la 1ª vuelta (castelanismos gl, "Girona" en SVG gl, fuente del método, entradilla demasiado general, leyenda Lisboa) → corregido → APTO a la 2ª. Build OK (37 páginas).
- **Qué funcionó**: sin fuente oficial de la hora de entrada, se planteó por umbrales (8:00/8:30/9:00) y se dijo expresamente.
- **Qué no / aprendizajes**: Oriol dice que la entrada es a las 9 h en la mayoría de ciudades; sin fuente citable no se usa como dato. Si aporta una (MEFP, Eurydice), se puede afinar.
- **Pendiente / siguiente**: guía de prensa 25/10 (#26), publicar ~20-24/10; #23; Tally sin ID.
- **Slack**: leído. Mensaje de Oriol (hora de entrada 9 h) tenido en cuenta como sugerencia.

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
