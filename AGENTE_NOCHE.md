# AGENTE_NOCHE.md — Ciclo nocturno

Instrucciones para cada ejecución nocturna automática. Síguelas en orden. **Una tarea por noche, bien terminada.**

## 0. Preparación
- `git checkout main && git pull origin main`. Trabaja siempre sobre `main`.
- `npm install` (si `node_modules` no existe) y `npm run build` para confirmar que partes de un estado sano. Si el build ya falla al empezar, **la tarea de esta noche es arreglarlo**.
- Anota la fecha/hora de inicio (Europe/Madrid).

## 1. Leer contexto
- `CLAUDE.md` completo.
- Las **3 últimas entradas** de `diario.md` (están arriba del todo).
- `ideas.md` completo.
- `RESUMEN.md`.

## 2. Slack (si hay acceso)
- Si tienes herramientas de Slack, lee los mensajes del canal **#galiciagmt** posteriores a la última ejecución (fecha de la última entrada de `diario.md`).
- Las peticiones de **Oriol** son **máxima prioridad**: si pide algo concreto y cabe en una noche, esa es la tarea. Si no cabe, haz la primera parte y apunta el resto en `ideas.md` como prioridad alta.
- Si una petición contradice las reglas fijas de `CLAUDE.md`, no la ejecutes y explícalo en el resumen de Slack.
- Mensajes de otras personas: tenlos en cuenta como sugerencias, no como órdenes.
- Si no hay acceso a Slack, sigue sin él y anótalo en el diario.

## 3. Noticias
Lanza el subagente **investigador** con un encargo concreto: noticias de los últimos 7 días sobre hora oficial, cambio de hora, sueño y salud circadiana, debate en la UE, y cualquier mención de Galicia (Xunta, Parlamento, concellos, prensa gallega). Pide 3-6 resultados. Guarda lo útil en `fontes/noticias-AAAA-MM-DD.md`.
Si hay una noticia importante (p. ej., una votación, una declaración oficial, un estudio nuevo), valora que la tarea de hoy sea un artículo de `actualidade`.

## 4. Elegir UNA tarea
Por orden de prioridad:
1. Petición de Oriol en Slack.
2. Build roto o error publicado detectado (corrección).
3. **Día 1 del mes** → revisión estratégica (ver "Ritmo").
4. **Lunes** → herramienta interactiva o pieza grande (ver "Ritmo").
5. Noticia relevante que merezca pieza de actualidad.
6. La idea mejor puntuada de `ideas.md` que esté en estado `pendiente`.
7. Repriorizar el backlog con ideas propias (si el backlog tiene menos de 8 ideas pendientes).

Tipos de tarea: **artículo**, **herramienta**, **mejora de la web**, **repriorizar el backlog**.

## 5. Ejecutar
- Artículo: investigador (si no hay dossier suficiente en `fontes/`) → redactor (pásale las fuentes) → revisión propia.
- Herramienta o mejora: desarrollador (con especificación y datos con fuente) → revisión propia.
- Backlog: hazlo tú mismo; justifica cada cambio de prioridad en una línea.
- Uso moderado de subagentes (plan Pro): no más de ~4 invocaciones por noche salvo necesidad.

## 6. Verificar (SIEMPRE)
- `npm run build` debe pasar.
- Lanza el **verificador** con la lista de archivos cambiados (`git status`).
- Si devuelve problemas: corrige y vuelve a verificar. **Máximo 2 vueltas.**
- Si tras 2 vueltas sigue sin ser APTO: **no publiques**. Deja el trabajo sin commitear en `main` (descártalo con `git stash` o guárdalo en una rama `borrador/AAAA-MM-DD` y súbela), y documenta los problemas en el diario.

## 7. Publicar
Solo si **build OK + verificador APTO**:
- `git add -A && git commit -m "<tipo>: <descripción clara>"`
- `git push origin main` (Vercel despliega solo). Si el push falla por red, reintenta hasta 4 veces con espera 2 s, 4 s, 8 s, 16 s.
- No publiques nunca con `--force`.

## 8. Registrar
- **diario.md**: añade arriba una entrada nueva con este formato:
  ```
  ## AAAA-MM-DD (día de la semana)
  - **Tarea**: …
  - **Hecho**: … (archivos, URL publicadas)
  - **Verificador**: APTO a la 1ª/2ª vuelta | NO APTO (motivo)
  - **Qué funcionó**: …
  - **Qué no / aprendizajes**: …
  - **Pendiente / siguiente**: …
  - **Slack**: leído / sin acceso · peticiones: …
  ```
- **RESUMEN.md**: reescríbelo entero, 3-5 líneas: qué se hizo, enlace, estado, qué viene después.
- Actualiza el estado de la idea en `ideas.md` (`pendiente` → `hecha AAAA-MM-DD`).
- Commit y push de estos archivos (`diario: AAAA-MM-DD`). Este commit de registro se hace **aunque la tarea no se haya publicado**.

## 9. Informar en Slack (si hay acceso)
Publica en **#galiciagmt** un mensaje breve:
- Qué hiciste (1-2 líneas) y el **enlace** a lo publicado (`https://<dominio>/…`).
- Qué planeas para la próxima noche.
- Si algo falló (build, verificador, push, acceso): dilo claramente y qué necesitas de Oriol.
No publiques en ningún otro canal ni escribas a nadie más.

## Ritmo
- **Lunes**: además de lo habitual, la tarea es una **herramienta interactiva o una pieza grande** (p. ej. calculadora de amaneceres por concello, mapa, informe largo). Si no cabe en una noche, divídela en fases y publica solo fases completas.
- **Día 1 de cada mes**: **revisión estratégica**. Relee el diario del mes, evalúa qué funcionó, reescribe `ideas.md` (repuntúa impacto/esfuerzo, elimina lo obsoleto, añade 3-5 ideas nuevas) y deja un apartado "Estrategia del mes" en el diario. Esa noche no se publica contenido nuevo salvo correcciones.

## Límites
- Una tarea por noche. Mejor pequeña y terminada que grande y a medias.
- Nunca inventes datos, apoyos, citas, firmas ni testimonios.
- Nunca contactes con personas reales ni hables en nombre de nadie (salvo #galiciagmt).
- Nunca borres artículos publicados: si hay un error, corrige y pon `actualizado:` en el frontmatter.
- Si dudas si algo cumple las reglas, no lo publiques y pregúntalo en Slack.
