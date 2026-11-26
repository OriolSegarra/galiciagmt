---
titulo: "A qué hora amanece en Galicia en enero: el colegio a oscuras"
entradilla: "A mediados de enero el sol sale en Galicia hacia las 9:00: el 15/1/2027, a las 9:01 en Vigo y a las 8:59 en Lugo, y a las 8:15 en Barcelona. Así afecta a la entrada al colegio."
data: 2026-10-08
actualizado: 2026-11-26
par: colexio-a-escuras
orde: 8
seccion: saude
fontes:
  - titulo: "DOG 15/06/2026: calendario escolar 2026-27 en Galicia"
    url: "https://www.xunta.gal/dog/Publicados/2026/20260615/AnuncioG0761-050626-0001_es.html"
    dato: "Las clases del curso 2026-27 van del 9 de septiembre de 2026 al 21 de junio de 2027"
  - titulo: "DOG 23/06/2026: instrucciones para infantil, primaria, ESO y bachillerato, curso 2026/27"
    url: "https://www.xunta.gal/dog/Publicados/2026/20260623/AnuncioG0761-110626-0003_es.html"
    dato: "Los centros, en el uso de su autonomía, pueden organizar el horario lectivo de cada jornada en sesiones o medias sesiones; no figura una hora de entrada común"
  - titulo: "El Debate (15/10/2025): decálogo de la Alianza por el Sueño"
    url: "https://www.eldebate.com/educacion/20251015/medicos-pediatras-aconsejanretrasar-entrada-clase-materias-troncales-empiecen-11_344879.html"
    dato: "La primera medida del decálogo es retrasar entre media hora y una hora la entrada, que en la ESO suele ser a las ocho de la mañana; el 52 % de los adolescentes en España va a clase habiendo dormido menos de ocho horas"
  - titulo: "Paruthi et al. (2016), consenso de la Academia Americana de Medicina del Sueño"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5078711/"
    dato: "Los adolescentes de 13 a 18 años deben dormir de 8 a 10 horas de forma regular"
  - titulo: "Método NOAA de ecuaciones solares (base del cálculo propio, src/lib/sol.ts)"
    url: "https://gml.noaa.gov/grad/solcalc/solareqns.PDF"
    dato: "Días de lunes a viernes del 9/9/2026 al 21/6/2027 con amanecer después de las 8:00, 8:30 y 9:00, con el horario actual y con la hora de Lisboa"
  - titulo: "Wikidata, propiedad P625 (coordenadas de las ciudades usadas en el cálculo)"
    url: "https://www.wikidata.org/wiki/Property:P625"
    dato: "Coordenadas tomadas de Wikidata (propiedad P625, CC0) y recogidas en src/data/cidades.ts"
  - titulo: "timeanddate.com — amanecer y ocaso en Vigo, enero de 2027"
    url: "https://www.timeanddate.com/sun/spain/vigo?month=1&year=2027"
    dato: "15/1/2027: amanecer a las 9:01 y ocaso a las 18:27"
---

Cuando en enero un niño entra al colegio, el sol aún no ha salido. Es una escena conocida, pero pocas veces se pone en números. Aquí lo hacemos con nuestro propio cálculo solar ([método NOAA](https://gml.noaa.gov/grad/solcalc/solareqns.PDF)), y con una advertencia previa: no hemos encontrado ninguna norma de la Xunta que fije una hora de entrada común. Las [instrucciones para el curso 2026/27](https://www.xunta.gal/dog/Publicados/2026/20260623/AnuncioG0761-110626-0003_es.html) dejan que cada centro organice su horario, así que no damos por buena ninguna hora concreta. Lo que sí podemos decir es cuántos amaneceres caen antes o después de los tres horarios más habituales.

## La respuesta corta

El 15 de enero de 2027 el sol sale en las seis ciudades gallegas de la tabla entre las 8:58 y las 9:03: amanece a las 9:01 en Vigo, a las 9:02 en Santiago y a las 8:59 en Lugo; en Madrid, a las 8:36, y en Barcelona, a las 8:15. Con la hora de Portugal, el amanecer en Galicia sería una hora antes, hacia las 8:00. La tabla añade cuántos días de lunes a viernes del curso 2026-27 (204) sale el sol después de las 8:30 y de las 9:00. Es un cálculo propio con el [método NOAA](https://gml.noaa.gov/grad/solcalc/solareqns.PDF) y coordenadas de [Wikidata](https://www.wikidata.org/wiki/Property:P625).

| Ciudad | Amanecer 15/1/2027 | Con hora de Portugal | Días de lunes a viernes del curso con amanecer después de las 8:30 | Después de las 9:00 |
|---|---|---|---|---|
| [A Coruña](/es/herramientas/amanecer/a-coruna/) | 9:03 | 8:03 | 82 | 25 |
| [Santiago](/es/herramientas/amanecer/santiago/) | 9:02 | 8:02 | 81 | 22 |
| [Pontevedra](/es/herramientas/amanecer/pontevedra/) | 9:01 | 8:01 | 80 | 20 |
| [Vigo](/es/herramientas/amanecer/vigo/) | 9:01 | 8:01 | 80 | 20 |
| [Lugo](/es/herramientas/amanecer/lugo/) | 8:59 | 7:59 | 75 | 12 |
| [Ourense](/es/herramientas/amanecer/ourense/) | 8:58 | 7:58 | 75 | 8 |
| [Madrid](/es/herramientas/amanecer/madrid/) | 8:36 | 7:36 | 33 | 0 |
| [Barcelona](/es/herramientas/amanecer/barcelona/) | 8:15 | 7:15 | 0 | 0 |

Con la hora de Portugal, ninguna de estas ciudades tendría un solo día de lunes a viernes del curso con amanecer después de las 8:30. Para un municipio concreto, consulta [a qué hora amanece en tu concello](/es/herramientas/concello/).

## Tres horas de entrada, tres resultados

El curso va del [9 de septiembre de 2026 al 21 de junio de 2027](https://www.xunta.gal/dog/Publicados/2026/20260615/AnuncioG0761-050626-0001_es.html). Contamos los días de lunes a viernes de ese periodo (204, sin descontar festivos ni vacaciones) en los que el sol sale después de la hora de entrada. Comparamos Girona, Madrid y Santiago, con el horario actual y con el de Lisboa.

![Gráfico de barras: días de lunes a viernes del curso con amanecer después de las 8:00, 8:30 y 9:00 en Girona, Madrid y Santiago con el horario actual y con la hora de Lisboa](/img/colexio-amencer-es.svg)

| Entrada | Girona (actual) | Madrid (actual) | Santiago (actual) | Santiago (hora de Lisboa) |
|---|---|---|---|---|
| 8:00 | 49 días | 100 días | 138 días | 22 días |
| 8:30 | 0 | 33 días | 81 días | 0 |
| 9:00 | 0 | 0 | 22 días | 0 |

Con entrada a las 8:30, un alumno de Girona llega siempre con luz; uno de Santiago llega a oscuras en 81 de los 204 días. Con entrada a las 8:00, que según la [Alianza por el Sueño](https://www.eldebate.com/educacion/20251015/medicos-pediatras-aconsejanretrasar-entrada-clase-materias-troncales-empiecen-11_344879.html) es la hora habitual en la ESO, el amanecer llega después de la entrada en 138 días en Santiago. Con el mismo cálculo y la hora de Lisboa, serían 22.

Un caso concreto: el 15 de enero de 2027 el sol sale en Vigo a las 9:01 con el horario actual y a las 8:01 con la hora de Lisboa. Puedes comprobarlo, o cambiar de ciudad y de fecha, en la [herramienta de amaneceres](/es/herramientas/amanecer/?esc=actual&data=01-15&lim=510&cidade=vigo).

## Por qué importa el amanecer para dormir

El cuerpo ajusta su reloj interno con la luz de la mañana, como explicamos en [cómo funciona el reloj del cuerpo](/es/articulos/como-funciona-el-reloj-del-cuerpo/). Los adolescentes, además, necesitan [entre 8 y 10 horas de sueño](https://pmc.ncbi.nlm.nih.gov/articles/PMC5078711/), y según el decálogo citado, el [52 % en España va a clase habiendo dormido menos de ocho](https://www.eldebate.com/educacion/20251015/medicos-pediatras-aconsejanretrasar-entrada-clase-materias-troncales-empiecen-11_344879.html). Ese decálogo es una recomendación de profesionales de la pediatría y del sueño, no un estudio revisado por pares, y no establece que la hora oficial sea la causa. Habla de retrasar la entrada media hora o una hora, que es otra solución posible e independiente de la hora oficial.

## El contraargumento, en su versión más fuerte

Con la hora de Lisboa el sol también se pondría una hora antes. El 15 de enero de 2027 el [ocaso en Vigo](https://www.timeanddate.com/sun/spain/vigo?month=1&year=2027) pasaría de las 18:27 a las 17:27. Para una familia que sale del trabajo a las 18:00 o una chica que entrena por la tarde, eso resta luz útil al final del día. Tampoco hay en Galicia un estudio que mida cuántos alumnos duermen peor por esta causa. Esta pieza solo muestra que, con el horario actual, la luz llega más tarde que la clase en muchos días, y que esa diferencia se reduce con una hora menos.

Que decidan los centros, las familias o el Estado es otra cuestión: la hora oficial es [competencia estatal](/es/articulos/quien-puede-cambiar-la-hora-de-galicia/), y la de entrada, de cada centro.
