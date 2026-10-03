---
titulo: "Cómo funciona el reloj del cuerpo: luz, sueño y hora oficial"
entradilla: "El cuerpo humano tiene un reloj interno que se ajusta con la luz del sol. Qué dice la ciencia, y por qué el desfase afecta a todo el oeste de la Península."
data: 2026-10-02
par: reloxo-corpo
orde: 7
seccion: saude
fontes:
  - titulo: "Premio Nobel de Medicina 2017 (Hall, Rosbash, Young): información avanzada"
    url: "https://www.nobelprize.org/prizes/medicine/2017/advanced-information/"
    dato: "La transcripción de los genes period y timeless es reprimida por sus propias proteínas, lo que genera una oscilación autónoma"
  - titulo: "Wright et al. (2013), Current Biology"
    url: "https://pubmed.ncbi.nlm.nih.gov/23910656/"
    dato: "Tras una semana solo con luz natural, el reloj interno se sincroniza con el tiempo solar: la noche biológica empieza al ponerse el sol y termina poco después del amanecer"
  - titulo: "Khalsa et al. (2003), The Journal of Physiology"
    url: "https://doi.org/10.1113/jphysiol.2003.040477"
    dato: "La luz antes del mínimo de temperatura corporal retrasa el reloj; después, lo adelanta"
  - titulo: "Roenneberg et al. (2012), Current Biology"
    url: "https://www.cell.com/current-biology/fulltext/S0960-9822(12)00325-9"
    dato: "El «jet lag social» mide la discrepancia entre el reloj circadiano y el social, que lleva a una pérdida crónica de sueño; se asoció a mayor índice de masa corporal"
  - titulo: "Gibson y Shrader (2018), Review of Economics and Statistics"
    url: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ABT3OE"
    dato: "Una hora más de sueño a la semana aumenta los ingresos un 1,1 % a corto plazo y un 5 % a largo plazo (datos de Alemania y de EE. UU.)"
  - titulo: "Cálculo propio con el método NOAA (src/lib/sol.ts), coordenadas de Wikidata"
    url: "https://www.wikidata.org/wiki/Property:P625"
    dato: "Hora del amanecer el 21/12/2026 con la hora oficial actual (CET) y con la de Lisboa (UTC+0)"
---

El cuerpo no tiene un reloj: tiene muchos, y todos reciben la hora del mismo sitio, la luz que entra por los ojos. Para entender por qué importa que el reloj de la pared vaya dos horas por delante del sol, conviene empezar por cómo funciona el interno.

## Un reloj en cada célula

El Premio Nobel de Medicina de 2017 reconoció a Jeffrey Hall, Michael Rosbash y Michael Young por descubrir cómo funciona ese reloj a nivel molecular. Según la [documentación del propio premio](https://www.nobelprize.org/prizes/medicine/2017/advanced-information/), los genes *period* y *timeless* son reprimidos por las proteínas que ellos mismos producen, y eso genera una oscilación autónoma: el reloj anda solo, sin necesitar al sol. Pero no anda exacto, y por eso necesita ajustarse cada día.

## La luz pone el reloj en hora

Ese ajuste se hace con la luz, y la hora a la que llega importa. En un experimento con personas, [Khalsa y su equipo](https://doi.org/10.1113/jphysiol.2003.040477) vieron que la luz brillante recibida antes del mínimo de temperatura corporal retrasa el reloj interno, y la recibida después lo adelanta. Dicho de forma sencilla: la luz de la noche hace que el cuerpo se vaya a dormir más tarde; la luz de la mañana hace lo contrario.

El caso extremo es el de [Wright y colaboradores](https://pubmed.ncbi.nlm.nih.gov/23910656/): tras una semana viviendo solo con luz natural, el reloj interno de las personas participantes quedó sincronizado con el tiempo solar, con la noche biológica empezando al ponerse el sol y terminando poco después del amanecer. No es una prueba sobre Galicia, pero muestra el vínculo: el cuerpo sabe seguir al sol, y se ajusta peor cuanto más se aparta de él la vida social.

## El reloj social

El problema aparece cuando el horario de trabajo, de la escuela o de las comidas no sigue al sol. El investigador Till Roenneberg llamó a esto «jet lag social»: [la discrepancia entre el reloj circadiano y el social](https://www.cell.com/current-biology/fulltext/S0960-9822(12)00325-9), que lleva a una pérdida crónica de sueño. En su estudio, esa discrepancia se asoció a un índice de masa corporal más alto. Es una asociación, no una prueba de causa.

La hora oficial es parte del reloj social. Si el reloj marca las 8:00 cuando el sol aún no ha salido, quien tiene que ir a trabajar o a la escuela a esa hora recibe la luz más tarde de lo que su cuerpo esperaría.

## Qué cambia en el oeste de la Península

Esto no pasa solo en Galicia. El desfase crece cuanto más al oeste se está dentro de un mismo huso horario. Esta es la hora a la que sale el sol el 21 de diciembre de 2026 en varias ciudades, con la hora oficial actual y con la de Lisboa (cálculo propio con el mismo método de nuestra [herramienta de amaneceres](/es/herramientas/amanecer/)):

| Ciudad | Amanecer con la hora actual (CET) | Amanecer con la hora de Lisboa (UTC+0) |
|---|---|---|
| Girona | 8:13 | 7:13 |
| Barcelona | 8:14 | 7:14 |
| Valencia | 8:18 | 7:18 |
| Madrid | 8:34 | 7:34 |
| Sevilla | 8:34 | 7:34 |
| Valladolid | 8:42 | 7:42 |
| Cáceres | 8:42 | 7:42 |
| Badajoz | 8:43 | 7:43 |
| Salamanca | 8:44 | 7:44 |
| León | 8:49 | 7:49 |
| Oviedo | 8:52 | 7:52 |
| Lugo | 8:58 | 7:58 |
| Vigo | 9:00 | 8:00 |
| Santiago | 9:01 | 8:01 |

![Gráfico: hora del amanecer el 21 de diciembre de 2026 en 14 ciudades, con puntos para la hora actual y para la hora de Lisboa, de Girona a Santiago](/img/gradiente-amencer-es.svg)

Entre Girona y Santiago hay casi una hora de diferencia en el amanecer con el mismo reloj. Pero la cuestión no es solo Galicia: Asturias, León, Castilla y León, Extremadura y el oeste de Andalucía están en el mismo gradiente. Por eso esta web habla de Galicia: porque es el extremo, no porque sea el único lugar afectado.

## Salud, productividad y economía: qué se sabe y qué no

Hay evidencia sobre el sueño y los ingresos, pero hay que usarla con cuidado. Gibson y Shrader aprovecharon que la hora del atardecer cambia dentro de un mismo huso para estudiar el efecto del sueño sobre el salario. Concluyeron que [una hora más de sueño a la semana aumenta los ingresos un 1,1 % a corto plazo y un 5 % a largo plazo](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ABT3OE). Los datos son de Alemania y de Estados Unidos, no de España.

Lo que no podemos decir es cuánto cuesta en euros el desfase horario en el oeste peninsular: no conocemos ningún estudio que lo calculase. Tampoco está probado que cambiar la hora oficial resuelva por sí solo el problema del sueño, que depende también de los horarios laborales, escolares y de las comidas. Para el estudio más cercano a nuestra zona, véase el artículo sobre [amaneceres tardíos, sueño y salud](/es/articulos/amaneceres-tardios-sueno-y-salud/).

## Qué pedimos

Que el Estado estudie con datos si la hora oficial debe acercarse a la solar, y en particular en el oeste de la Península. El horario de verano y el huso son decisiones distintas, y [los contraargumentos](/es/articulos/los-contraargumentos/), como el impacto sobre el turismo o el cambio de hábitos, merecen ser estudiados antes de decidir.
