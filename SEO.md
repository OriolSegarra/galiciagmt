# SEO.md — Cómo ganamos posiciones en Google

Objetivo: que galiciagmt.es sea **la referencia** (top 3, idealmente nº 1) en las búsquedas sobre la hora de Galicia, en gallego y en castellano. Nadie puede garantizar el nº 1; lo que sí depende de nosotros es publicar la mejor respuesta, técnicamente impecable, y conseguir que otros la enlacen.

## Palabras clave objetivo
Revisar la lista el día 1 de cada mes (añadir/quitar según `seo-posicions.md` y PostHog).

| # | Búsqueda | Idioma | Página que debe posicionar | Intención |
|---|---|---|---|---|
| 1 | hora de Galicia Portugal | es | `/es/articulos/portugal-y-canarias/` | Informativa |
| 2 | por qué Galicia no tiene la hora de Portugal | es | `/es/articulos/galicia-al-oeste-de-greenwich/` | Informativa |
| 3 | huso horario Galicia | es | `/es/` | Informativa |
| 4 | fuso horario Galicia | gl | `/` | Informativa |
| 5 | a que hora amence en Galicia | gl | `/ferramentas/amencer/` | Herramienta |
| 6 | a qué hora amanece en Galicia | es | `/es/herramientas/amanecer/` | Herramienta |
| 7 | amanecer Santiago de Compostela / Vigo / A Coruña horario | es | `/es/herramientas/ano/` | Herramienta |
| 8 | cambio de hora Galicia | es | artículo de actualidad del cambio de hora vigente | Estacional |
| 9 | cambio de hora 1940 Franco | es | `/es/articulos/por-que-cambiamos-de-hora-en-1940/` | Informativa |
| 10 | horario de verano permanente Galicia amanecer 10 | es | artículo del cambio de hora | Estacional |
| 11 | Galicia GMT | gl/es | `/` | Marca |
| 12 | moción cambio de hora concello | gl/es | `/mocion/` | Campaña |

## Cómo medimos posiciones (cada lunes)
Sin Search Console vía MCP, medimos con Firecrawl:
- `firecrawl_search` con `query` = la búsqueda, `location: "Spain"`, `limit: 20`, `sources: ["web"]`, `highlights: false`.
- Posición = `position` del primer resultado cuyo `url` contenga `galiciagmt.es` (o `—` si no está en el top 20).
- Anota la fila en `seo-posicions.md` (una columna por semana) y quién está en el nº 1.
- Firecrawl no es Google exacto: úsalo como tendencia, no como verdad absoluta. Si Oriol pega datos de Search Console en Slack, esos mandan.

## Datos reais de Google (Search Console API)
Fonte principal cando estea configurada; Firecrawl queda como complemento.
- Script: `node scripts/gsc.mjs` (consultas, 28 días), `--dim page`, `--dim query,page`, `--days 7`, `--sitemaps`.
- Necesita a variable de contorno `GSC_SERVICE_ACCOUNT_JSON` (conta de servizo de Google Cloud con permiso de lectura na propiedade `sc-domain:galiciagmt.es`). Se falta, o script dío e segues con Firecrawl.
- Cada luns: garda a táboa de consultas en `seo-posicions.md` (sección "Search Console") e compara coa semana anterior.
- **Oportunidades** = consultas con moitas impresións e posición 5-20: mellorar título, primeiro parágrafo e ligazóns internas desa páxina. Consultas con impresións e sen páxina boa = artigo ou páxina nova.

## Investigación de palabras clave (gratis)
- **Autocompletado de Google** vía Firecrawl (`firecrawl_scrape` con `formats: ["rawHtml"]`):
  `https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=es&q=<termo>` (e `hl=gl` para galego).
  Proba o termo só e con prefixos ("por que", "cando", "a que hora", "<cidade>") e sufixos (a, b, c…). O que aparece é o que a xente busca de verdade.
- **Competencia**: `firecrawl_search` da búsqueda (ubicación España, top 10). Mira títulos, que preguntas responden e que formato gaña (ferramenta, noticia, explicación). Se gaña unha calculadora, a nosa resposta debe ser unha ferramenta mellor; se gaña prensa, unha peza máis completa e citable.
- **"A xente tamén pregunta"**: busca a pregunta exacta e recolle as preguntas relacionadas que aparezan nos resultados para a FAQ.
- Rexistra as palabras novas e o seu volume aproximado (alto/medio/baixo segundo autocompletado e competencia) en `SEO.md` → táboa de palabras clave, o día 1 de cada mes.

## Reglas on-page (el verificador las revisa en cada página nueva o tocada)
- **Título** (`titulo`): contiene la palabra clave principal, ≤ 60 caracteres si es posible, sin clickbait.
- **Entradilla** (se usa como meta description): responde la pregunta en la primera frase, 120-160 caracteres ideal.
- **Primer párrafo**: da la respuesta directa (Google premia responder pronto). Luego el detalle y las fuentes.
- **Slug** corto y descriptivo, en el idioma de la página.
- **Enlaces internos**: cada pieza nueva enlaza al menos 2 piezas existentes y recibe al menos 1 enlace desde una existente (la home o un artículo relacionado). Las herramientas se enlazan con estado preconfigurado cuando aporte.
- **Pareja gl/es** siempre (hreflang ya lo genera `Base.astro`).
- **Imagen/visual** cuando tenga sentido (ver "Prioridad: que se vea" en `CLAUDE.md`).
- Nada de relleno ni repetir la palabra clave artificialmente: escribimos para personas.

## Técnico (revisar el día 1 de cada mes)
- `sitemap-index.xml` y `robots.txt` responden 200; las páginas nuevas aparecen en el sitemap.
- Cada página tiene `<title>`, `description`, `canonical` y `og:image` correctos.
- Datos estructurados (JSON-LD): `Article` en artículos, `FAQPage` en la FAQ, `WebApplication` en herramientas (idea #SEO-1 en `ideas.md`).
- Velocidad: las páginas siguen siendo estáticas y ligeras; no añadir dependencias pesadas.

## Calendario estacional (lo más importante para el tráfico)
Los picos de búsqueda llegan con los cambios de hora: **último domingo de marzo** y **último domingo de octubre**.
- **3 semanas antes**: actualizar (`actualizado:`) la pieza del cambio de hora con las fechas nuevas y datos de la herramienta; revisar enlaces internos hacia ella desde la home.
- **1 semana antes**: pieza de actualidad o actualización con lo último (UE, Gobierno, Xunta), y la guía de prensa al día.
- **Semana del cambio**: no tocar estructura; solo correcciones.

## Enlaces entrantes (lo que más pesa y no podemos hacer solos)
El agente **no escribe a nadie** (regla fija 3). Lo que sí hace:
- Mantener `prensa/` / guía de prensa con datos citables y gráficos descargables (los medios enlazan a quien cita bien).
- Cada mes, preparar en `enlaces.md` una lista corta de **oportunidades** (medios que han publicado sobre el tema, Wikipedia gl/es, blogs de divulgación, concellos) con el texto que Oriol podría enviar. **Oriol decide y envía.**
- Avisar en Slack cuando una noticia reciente sea buena ocasión para que Oriol contacte con un medio.
