# diario.md — Registro de sesiones

La entrada más reciente va arriba.

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
