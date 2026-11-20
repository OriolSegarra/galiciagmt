---
titulo: "Franco y el cambio de hora de 1940: por qué nunca se deshizo"
entradilla: "En marzo de 1940, con el Gobierno de Franco, una orden adelantó el reloj una hora para ir de acuerdo con otros países europeos. Era provisional y nunca se deshizo."
data: 2026-09-27
actualizado: 2026-11-20
par: historia
orde: 2
seccion: historia
fontes:
  - titulo: "Orden de 7 de marzo de 1940 (citada en documento UPM, 2017)"
    url: "https://oa.upm.es/45296/1/CCG_2017_Es-nuestro-huso-horario-un-problema.pdf"
    dato: "Texto íntegro de la orden y confirmación de que el restablecimiento nunca llegó"
  - titulo: "Real Observatorio de la Armada — Cambios de hora oficial en España desde 1918"
    url: "https://armada.defensa.gob.es/ArmadaPortal/page/Portal/ArmadaEspannola/cienciaobservatorio/prefLang-es/06Hora--02cambioshoraoficial"
    dato: "Fila 1940: adelanto el 16 de marzo a las 23:00, sin atraso ese año"
  - titulo: "BOE — Real Decreto 236/2002, hora de verano"
    url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2002-4221"
    dato: "Marco legal vigente del cambio de hora en España"
  - titulo: "RTVE — El Congreso plantea estudiar la hora de Londres (2013)"
    url: "https://www.rtve.es/noticias/20130926/huso-horario-espana-conciliacion-laboral/751584.shtml"
    dato: "Informe del Congreso que pide un estudio para volver al huso de Greenwich"
  - titulo: "La Moncloa — Informe de la Comisión para la reforma de la hora oficial (2019)"
    url: "https://www.lamoncloa.gob.es/consejodeministros/paginas/enlaces/220319-enlacehorario.aspx"
    dato: "La comisión de expertos no propuso cambiar de huso horario"
  - titulo: "BBC Mundo — Por qué España tiene un huso horario que no le corresponde"
    url: "https://www.bbc.com/mundo/noticias-37762613"
    dato: "El 16 de marzo de 1940, las once de la noche pasaron a ser las doce por orden del gobierno de facto del general Franco"
  - titulo: "ABC Historia — El mito de que España no está por culpa de los nazis en el huso horario que le corresponde (2017)"
    url: "https://www.abc.es/historia/abci-mito-espana-no-esta-culpa-nazis-huso-horario-corresponde-201710280244_noticia.html"
    dato: "París adelantó la hora el 25 de febrero de 1940; la orden española del 7 de marzo, firmada por el subsecretario Valentín Galarza, siguió la hora francesa. Francia y España no recuperaron su horario anterior a la guerra"
  - titulo: "El País — ¿Por qué Europa no elimina el cambio de hora? (2025)"
    url: "https://elpais.com/sociedad/2025-10-24/geopolitica-del-cambio-de-hora-una-economia-desincronizada-y-otros-temores-para-no-abolirlo-en-la-ue.html"
    dato: "Franco adelantó la hora española para sincronizarla con la Alemania nazi"
  - titulo: "Cálculo propio de amaneceres y atardeceres (algoritmo NOAA, src/lib/sol.ts)"
    url: "https://gml.noaa.gov/grad/solcalc/solareqns.PDF"
    dato: "Horas de salida y puesta del sol el 21/12/2026 y el 21/6/2026 en cinco ciudades gallegas y Barcelona"
---

## La respuesta corta

- **Qué pasó.** El sábado 16 de marzo de 1940, "las once de la noche pasaron a ser las doce por orden del gobierno de facto del general Franco" ([BBC Mundo](https://www.bbc.com/mundo/noticias-37762613)). Lo mandaba una orden de la Presidencia del Gobierno del 7 de marzo, firmada por el subsecretario Valentín Galarza ([ABC Historia, 2017](https://www.abc.es/historia/abci-mito-espana-no-esta-culpa-nazis-huso-horario-corresponde-201710280244_noticia.html)).
- **De dónde veníamos.** Desde 1901 España tenía la hora del meridiano de Greenwich, "el tiempo solar medio que geográficamente nos corresponde" ([documento UPM, 2017](https://oa.upm.es/45296/1/CCG_2017_Es-nuestro-huso-horario-un-problema.pdf)). Es la misma que hoy usa Portugal en invierno ([Portugal y Canarias](/es/articulos/portugal-y-canarias/)).
- **Por qué no se deshizo.** La orden prometía que "oportunamente se señalará la fecha en que haya de restablecerse la hora normal". Esa fecha no llegó nunca.
- **Qué significa en Galicia.** El 21 de diciembre el sol sale en Santiago a las 9:01; con la hora de antes de 1940 saldría a las 8:01 (cálculo propio, tabla más abajo).

## Una orden para "marchar de acuerdo" con Europa

El 7 de marzo de 1940, el Gobierno español publicó una orden firmada por la Presidencia del Gobierno que cambió la hora legal de todo el país. El texto, tal como lo recoge un documento del Archivo Digital de la Universidad Politécnica de Madrid, decía esto:

> "Hora legal. Se adelanta en sesenta minutos. Considerando la conveniencia de que el horario nacional marche de acuerdo con los de otros países europeos y las ventajas de diversos órdenes que el adelanto temporal de la hora trae consigo, dispongo: Artículo 1º. El sábado 16 de marzo, a las veintitrés horas, será adelantada la hora legal en sesenta minutos. […] Artículo 5º. Oportunamente se señalará la fecha en que haya de restablecerse la hora normal." ([Orden de 1940, citada en documento UPM](https://oa.upm.es/45296/1/CCG_2017_Es-nuestro-huso-horario-un-problema.pdf))

La justificación oficial no habla de ahorro energético ni de conciliación: habla de que el horario español "marche de acuerdo" con el de otros países europeos. Es el único motivo que da el texto. No nombra a Alemania ni a Francia.

## ¿Fue para tener la hora de Alemania?

Es la explicación más repetida, y aquí no hay una sola versión. El País la resume así: Franco, aliado de Hitler, "adelantó la hora española para sincronizarla con la Alemania nazi" ([El País, 2025](https://elpais.com/sociedad/2025-10-24/geopolitica-del-cambio-de-hora-una-economia-desincronizada-y-otros-temores-para-no-abolirlo-en-la-ue.html)).

ABC Historia lo llama "un persistente mito" y cuenta otra secuencia: París adelantó su hora el 25 de febrero de 1940 y la orden española del 7 de marzo se dictó "en seguimiento de la hora francesa". Añade que el Reino Unido y Portugal también cambiaron sus relojes durante la guerra, y que la diferencia es que "Francia y España no recuperaron su horario anterior a la guerra" ([ABC Historia, 2017](https://www.abc.es/historia/abci-mito-espana-no-esta-culpa-nazis-huso-horario-corresponde-201710280244_noticia.html)). El documento de la UPM sitúa el cambio "al inicio de la II Guerra Mundial" y apunta que, tras el armisticio con Francia, "la hora de la Europa central es impuesta a la Europa occidental ocupada" ([documento UPM, 2017](https://oa.upm.es/45296/1/CCG_2017_Es-nuestro-huso-horario-un-problema.pdf)).

Lo que se puede afirmar con los documentos en la mano es menos llamativo: la orden se dictó en plena guerra europea, alineó la hora española con la de Europa central y se presentó como provisional. Para Galicia, el motivo de 1940 importa menos que el resultado, que dura ya 86 años.

## La hora legal de España, antes y después de 1940

| Periodo | Invierno | Verano |
|---|---|---|
| 1901-1917 | UTC+0 | UTC+0 (la tabla del Observatorio empieza en 1918) |
| 1918-1936 | UTC+0 | UTC+0, salvo UTC+1 en 1918, 1919, 1924 y 1926-1929 |
| 1936-1939 | Distinta en cada zona de la Guerra Civil | Distinta en cada zona |
| Abril 1939 - marzo 1940 | UTC+0 | UTC+1 |
| 1940-1941 | UTC+1 | UTC+1 |
| 1942-1946 y 1949 | UTC+1 | UTC+2 |
| 1947-1948 y 1950-1973 | UTC+1 | UTC+1 |
| Desde 1974 | UTC+1 | UTC+2 |

Elaboración propia a partir de la tabla de cambios de hora del [Real Observatorio de la Armada](https://armada.defensa.gob.es/ArmadaPortal/page/Portal/ArmadaEspannola/cienciaobservatorio/prefLang-es/06Hora--02cambioshoraoficial) (adelantos y atrasos desde 1918) y del [documento UPM](https://oa.upm.es/45296/1/CCG_2017_Es-nuestro-huso-horario-un-problema.pdf) (Greenwich desde 1901). En la tabla del Observatorio, el adelanto de 1940 no tiene atraso, ni ese año ni después: desde entonces la base es UTC+1. Para 1937 y 1938 la tabla recoge por separado lo publicado en el BOE y en la Gaceta de la República. Canarias, con una hora menos, no entra en la tabla.

El cambio quedó registrado también en la tabla histórica del Real Observatorio de la Armada, que enumera los cambios de hora oficial en España desde 1918. En la fila correspondiente a 1940 aparece el adelanto —"Sábado 16 Marzo 23:00"— pero la columna del atraso de ese año queda vacía: no hubo vuelta atrás ([Real Observatorio de la Armada](https://armada.defensa.gob.es/ArmadaPortal/page/Portal/ArmadaEspannola/cienciaobservatorio/prefLang-es/06Hora--02cambioshoraoficial)).

## Qué cambió en el cielo de Galicia

Un ejemplo con el mismo día del año: así se verían el amanecer y el atardecer con la hora de antes de 1940 (UTC+0, sin horario de verano) y con la de hoy.

**21 de diciembre de 2026** (salida · puesta del sol)

| Ciudad | Hora de antes de 1940 | Hoy (UTC+1) |
|---|---|---|
| A Coruña | 8:03 · 17:00 | 9:03 · 18:00 |
| Santiago | 8:01 · 17:02 | 9:01 · 18:02 |
| Vigo | 8:00 · 17:05 | 9:00 · 18:05 |
| Lugo | 7:58 · 16:58 | 8:58 · 17:58 |
| Ourense | 7:57 · 17:02 | 8:57 · 18:02 |
| Barcelona | 7:14 · 16:25 | 8:14 · 17:25 |

**21 de junio de 2026** (salida · puesta del sol)

| Ciudad | Hora de antes de 1940 | Hoy (UTC+2) |
|---|---|---|
| A Coruña | 4:53 · 20:17 | 6:53 · 22:17 |
| Santiago | 4:55 · 20:16 | 6:55 · 22:16 |
| Vigo | 4:58 · 20:14 | 6:58 · 22:14 |
| Lugo | 4:51 · 20:13 | 6:51 · 22:13 |
| Ourense | 4:54 · 20:11 | 6:54 · 22:11 |
| Barcelona | 4:17 · 19:28 | 6:17 · 21:28 |

Cálculo propio con el [algoritmo de la NOAA](https://gml.noaa.gov/grad/solcalc/solareqns.PDF) y las coordenadas de Wikidata de cada ciudad. Antes de 1940 algunos veranos tenían una hora de adelanto; la tabla usa UTC+0 todo el año para comparar con la hora base.

La tabla de junio enseña también el límite del argumento: volver tal cual a la hora de antes de 1940 haría salir el sol antes de las 5:00 en pleno verano. Lo que se propone en esta web es otra cosa, la hora de Portugal, que mantiene el horario de verano: en Santiago, el 21 de junio el sol saldría a las 5:55 y se pondría a las 21:16. Puedes comparar cualquier día y ciudad en la [herramienta de amaneceres](/es/herramientas/amanecer/).

## Un artículo 5º que nunca se cumplió

La propia orden de 1940 preveía su reversión. El artículo 5º decía que "oportunamente se señalará la fecha en que haya de restablecerse la hora normal". Esa fecha nunca llegó. El mismo documento de la UPM que recoge la orden lo constata sin rodeos: "Tal restablecimiento no ha tenido lugar desde entonces hasta la actualidad" ([documento UPM, 2017](https://oa.upm.es/45296/1/CCG_2017_Es-nuestro-huso-horario-un-problema.pdf)).

El caso de Galicia tiene un matiz previo. En 1922, la regla de los husos naturales tuvo una excepción en Galicia: "la parte occidental de Galicia, del meridiano de Mondoñedo hasta el mar, pues se encuentra en el huso 23, el mismo que el archipiélago canario" ([documento UPM, 2017](https://oa.upm.es/45296/1/CCG_2017_Es-nuestro-huso-horario-un-problema.pdf)), que "mantuvo la misma hora que el resto de la Península". Ese mismo año, a Canarias "se les aplicó a estas el huso 23, uno menos que el resto de España" (misma fuente). Es decir: geográficamente, una parte de Galicia comparte huso natural con Canarias, pero nunca llegó a llevar la hora que eso implicaría.

## Del decreto de 2002 al debate actual

El marco legal que hoy regula el cambio horario en España es el Real Decreto 236/2002, de 1 de marzo. Establece que el período de la hora de verano "comenzará el último domingo del mes de marzo de cada año a las dos horas de la madrugada (la una hora de la madrugada en Canarias), momento en que la hora oficial española se adelantará sesenta minutos", y que "terminará el último domingo del mes de octubre de cada año, a las tres horas de la madrugada (las dos horas de la madrugada en Canarias)" ([BOE, RD 236/2002](https://www.boe.es/buscar/doc.php?id=BOE-A-2002-4221)). Es el decreto que, 62 años después de la orden de 1940, sigue fijando cuándo se mueve el reloj.

En 2013, el Congreso de los Diputados abrió una vía distinta: aprobó un informe que pedía al Gobierno "un estudio socioeconómico para conocer la incidencia global de un posible cambio de huso horario en España, de modo que se vuelva a vincular al que marca el huso horario de Greenwich", al entender que ese cambio "tendría un efecto favorable en la conciliación de todas las personas" ([RTVE, 2013](https://www.rtve.es/noticias/20130926/huso-horario-espana-conciliacion-laboral/751584.shtml)).

En 2019, el Gobierno encargó un informe a una comisión de expertos sobre la reforma de la hora oficial. Aquí conviene ser preciso: esa comisión no propuso cambiar el huso horario. Su informe recomendaba "no producir ningún cambio precipitado en los husos horarios mientras no exista un consenso compartido […]" y señalaba que "la opinión de los expertos sobre el cambio de hora estacional no es unánime ni concluyente". Sobre el huso horario en concreto, el argumento que dan es este: "los expertos no plantean el cambio del huso horario y argumentan que, tras mantener el actual durante 80 años, la población española ha desarrollado una adecuación a ese horario y no hay suficientes razones para modificarlo" ([La Moncloa, 2019](https://www.lamoncloa.gob.es/consejodeministros/paginas/enlaces/220319-enlacehorario.aspx)).

Ochenta y seis años después de aquella orden de marzo de 1940, el "restablecimiento" que prometía su artículo 5º sigue sin llegar. Lo que sí ha cambiado es el debate: ya no se habla de "marchar de acuerdo" con Europa, sino de conciliación, salud y de si un huso pensado en otro contexto sigue teniendo sentido en Galicia.

Para ver qué significa ese desfase hoy, lee [Galicia, al oeste de Greenwich](/es/articulos/galicia-al-oeste-de-greenwich/) y el artículo sobre el [cambio de hora de octubre de 2026](/es/articulos/cambio-de-hora-octubre-2026/).
