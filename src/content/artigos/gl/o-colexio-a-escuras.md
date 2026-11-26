---
titulo: "Hora de amencer en xaneiro en Galicia: o colexio a escuras"
entradilla: "A mediados de xaneiro o sol sae en Galicia arredor das 9:00: o 15/1/2027, ás 9:01 en Vigo e ás 8:59 en Lugo, e ás 8:15 en Barcelona. Así afecta á entrada no colexio."
data: 2026-10-08
actualizado: 2026-11-26
par: colexio-a-escuras
orde: 8
seccion: saude
fontes:
  - titulo: "DOG 15/06/2026: calendario escolar 2026-27 en Galicia"
    url: "https://www.xunta.gal/dog/Publicados/2026/20260615/AnuncioG0761-050626-0001_es.html"
    dato: "As clases do curso 2026-27 van do 9 de setembro de 2026 ao 21 de xuño de 2027"
  - titulo: "DOG 23/06/2026: instrucións para infantil, primaria, ESO e bacharelato, curso 2026/27"
    url: "https://www.xunta.gal/dog/Publicados/2026/20260623/AnuncioG0761-110626-0003_es.html"
    dato: "Os centros, no uso da súa autonomía, poden organizar o horario lectivo de cada xornada en sesións ou medias sesións; non figura unha hora de entrada común"
  - titulo: "El Debate (15/10/2025): decálogo da Alianza por el Sueño"
    url: "https://www.eldebate.com/educacion/20251015/medicos-pediatras-aconsejanretrasar-entrada-clase-materias-troncales-empiecen-11_344879.html"
    dato: "A primeira medida do decálogo é atrasar entre media hora e unha hora a entrada, que na ESO adoita ser ás oito da mañá; o 52 % dos adolescentes en España vai a clase despois de durmir menos de oito horas"
  - titulo: "Paruthi et al. (2016), consenso da Academia Americana de Medicina do Sono"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5078711/"
    dato: "Os adolescentes de 13 a 18 anos deben durmir de 8 a 10 horas de forma regular"
  - titulo: "Método NOAA de ecuacións solares (base do cálculo propio, src/lib/sol.ts)"
    url: "https://gml.noaa.gov/grad/solcalc/solareqns.PDF"
    dato: "Días de luns a venres do 9/9/2026 ao 21/6/2027 con amencer despois das 8:00, 8:30 e 9:00, co horario actual e coa hora de Lisboa"
  - titulo: "Wikidata, propiedade P625 (coordenadas das cidades usadas no cálculo)"
    url: "https://www.wikidata.org/wiki/Property:P625"
    dato: "Coordenadas tomadas de Wikidata (propiedade P625, CC0) e recollidas en src/data/cidades.ts"
  - titulo: "timeanddate.com — amencer e solpor en Vigo, xaneiro de 2027"
    url: "https://www.timeanddate.com/sun/spain/vigo?month=1&year=2027"
    dato: "15/1/2027: amencer ás 9:01 e solpor ás 18:27"
---

Cando en xaneiro un neno entra no colexio, o sol aínda non saíu. É unha escena coñecida, pero poucas veces se pon en números. Aquí o facemos co noso propio cálculo solar ([método NOAA](https://gml.noaa.gov/grad/solcalc/solareqns.PDF)), e cunha advertencia previa: non atopamos ningunha norma da Xunta que fixe unha hora de entrada común. As [instrucións para o curso 2026/27](https://www.xunta.gal/dog/Publicados/2026/20260623/AnuncioG0761-110626-0003_es.html) deixan que cada centro organice o seu horario, así que non damos por boa ningunha hora concreta. O que si podemos dicir é canto amencer cae antes ou despois dos tres horarios máis habituais.

## A resposta curta

O 15 de xaneiro de 2027 o sol sae nas seis cidades galegas da táboa entre as 8:58 e as 9:03: amence ás 9:01 en Vigo, ás 9:02 en Santiago e ás 8:59 en Lugo; en Madrid, ás 8:36, e en Barcelona, ás 8:15. Coa hora de Portugal, o amencer en Galicia sería unha hora antes, arredor das 8:00. A táboa engade cantos días de luns a venres do curso 2026-27 (204) sae o sol despois das 8:30 e das 9:00. É un cálculo propio co [método NOAA](https://gml.noaa.gov/grad/solcalc/solareqns.PDF) e coordenadas de [Wikidata](https://www.wikidata.org/wiki/Property:P625).

| Cidade | Amencer 15/1/2027 | Coa hora de Portugal | Días de luns a venres do curso con amencer despois das 8:30 | Despois das 9:00 |
|---|---|---|---|---|
| [A Coruña](/ferramentas/amencer/a-coruna/) | 9:03 | 8:03 | 82 | 25 |
| [Santiago](/ferramentas/amencer/santiago/) | 9:02 | 8:02 | 81 | 22 |
| [Pontevedra](/ferramentas/amencer/pontevedra/) | 9:01 | 8:01 | 80 | 20 |
| [Vigo](/ferramentas/amencer/vigo/) | 9:01 | 8:01 | 80 | 20 |
| [Lugo](/ferramentas/amencer/lugo/) | 8:59 | 7:59 | 75 | 12 |
| [Ourense](/ferramentas/amencer/ourense/) | 8:58 | 7:58 | 75 | 8 |
| [Madrid](/ferramentas/amencer/madrid/) | 8:36 | 7:36 | 33 | 0 |
| [Barcelona](/ferramentas/amencer/barcelona/) | 8:15 | 7:15 | 0 | 0 |

Coa hora de Portugal, ningunha destas cidades tería nin un só día de luns a venres do curso con amencer despois das 8:30. Para un concello concreto, consulta [a que hora amence no teu concello](/ferramentas/concello/).

## Tres horas de entrada, tres resultados

O curso vai do [9 de setembro de 2026 ao 21 de xuño de 2027](https://www.xunta.gal/dog/Publicados/2026/20260615/AnuncioG0761-050626-0001_es.html). Contamos os días de luns a venres dese período (204, sen descontar festivos nin vacacións) nos que o sol sae despois da hora de entrada. Comparamos Xirona, Madrid e Santiago, co horario actual e co de Lisboa.

![Gráfico de barras: días de luns a venres do curso con amencer despois das 8:00, 8:30 e 9:00 en Xirona, Madrid e Santiago co horario actual e coa hora de Lisboa](/img/colexio-amencer-gl.svg)

| Entrada | Xirona (actual) | Madrid (actual) | Santiago (actual) | Santiago (hora de Lisboa) |
|---|---|---|---|---|
| 8:00 | 49 días | 100 días | 138 días | 22 días |
| 8:30 | 0 | 33 días | 81 días | 0 |
| 9:00 | 0 | 0 | 22 días | 0 |

Con entrada ás 8:30, un alumno de Xirona chega sempre con luz; un de Santiago chega a escuras en 81 dos 204 días. Con entrada ás 8:00, que segundo a [Alianza por el Sueño](https://www.eldebate.com/educacion/20251015/medicos-pediatras-aconsejanretrasar-entrada-clase-materias-troncales-empiecen-11_344879.html) é a hora habitual na ESO, o amencer chega despois da entrada en 138 días en Santiago. Con ese mesmo cálculo e a hora de Lisboa, serían 22.

Un caso concreto: o 15 de xaneiro de 2027 o sol sae en Vigo ás 9:01 co horario actual e ás 8:01 coa hora de Lisboa. Podes comprobalo, ou cambiar de cidade e de data, na [ferramenta de amenceres](/ferramentas/amencer/?esc=actual&data=01-15&lim=510&cidade=vigo).

## Por que importa o amencer para durmir

O corpo axusta o seu reloxo interno coa luz da mañá, como explicamos en [como funciona o reloxo do corpo](/artigos/como-funciona-o-reloxo-do-corpo/). Os adolescentes, ademais, necesitan [entre 8 e 10 horas de sono](https://pmc.ncbi.nlm.nih.gov/articles/PMC5078711/), e segundo o decálogo citado, o [52 % en España vai a clase despois de durmir menos de oito](https://www.eldebate.com/educacion/20251015/medicos-pediatras-aconsejanretrasar-entrada-clase-materias-troncales-empiecen-11_344879.html). Ese decálogo é unha recomendación de profesionais da pediatría e do sono, non un estudo revisado por pares, e non establece que a hora oficial sexa a causa. Fala de atrasar a entrada media hora ou unha hora, que é outra solución posible e independente da hora oficial.

## O contraargumento, na súa versión máis forte

Coa hora de Lisboa o sol tamén se poñería unha hora antes. O 15 de xaneiro de 2027 o [solpor en Vigo](https://www.timeanddate.com/sun/spain/vigo?month=1&year=2027) pasaría das 18:27 ás 17:27. Para unha familia que sae do traballo ás 18:00 ou unha rapaza que adestra á tarde, iso resta luz útil ao final do día. Tampouco hai en Galicia un estudo que mida cantos alumnos durmen peor por esta causa. Esta peza só mostra que, co horario actual, a luz chega máis tarde que a clase en moitos días, e que esa diferenza se reduce cunha hora menos.

Que decidan as escolas, as familias ou o Estado é outra cuestión: a hora oficial é [competencia estatal](/artigos/quen-pode-cambiar-a-hora-de-galicia/), e a de entrada a cada centro.
