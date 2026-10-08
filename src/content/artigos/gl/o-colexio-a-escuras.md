---
titulo: "O colexio a escuras: o sol e a hora de entrada en Galicia"
entradilla: "En Vigo e Santiago, a finais de decembro e en xaneiro o sol sae ás 9:00 ou despois. Contamos cantos días lectivos do curso 2026-27 chegan ao colexio antes do amencer, e por que depende da hora de entrada."
data: 2026-10-08
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
---

Cando en xaneiro un neno entra no colexio, o sol aínda non saíu. É unha escena coñecida, pero poucas veces se pon en números. Aquí o facemos co noso propio cálculo solar ([método NOAA](https://gml.noaa.gov/grad/solcalc/solareqns.PDF)), e cunha advertencia previa: non atopamos ningunha norma da Xunta que fixe unha hora de entrada común. As [instrucións para o curso 2026/27](https://www.xunta.gal/dog/Publicados/2026/20260623/AnuncioG0761-110626-0003_es.html) deixan que cada centro organice o seu horario, así que non damos por boa ningunha hora concreta. O que si podemos dicir é canto amencer cae antes ou despois dos tres horarios máis habituais.

## Tres horas de entrada, tres resultados

O curso vai do [9 de setembro de 2026 ao 21 de xuño de 2027](https://www.xunta.gal/dog/Publicados/2026/20260615/AnuncioG0761-050626-0001_es.html). Contamos os días de luns a venres dese período (204, sen descontar festivos nin vacacións) nos que o sol sae despois da hora de entrada. Comparamos Xirona, Madrid e Santiago, co horario actual e co de Lisboa.

![Gráfico de barras: días lectivos con amencer despois das 8:00, 8:30 e 9:00 en Xirona, Madrid e Santiago co horario actual e coa hora de Lisboa](/img/colexio-amencer-gl.svg)

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

Coa hora de Lisboa o sol tamén se poñería unha hora antes. O 15 de xaneiro de 2027 o solpor en Vigo pasaría das 18:26 ás 17:26. Para unha familia que sae do traballo ás 18:00 ou unha rapaza que adestra á tarde, iso resta luz útil ao final do día. Tampouco hai en Galicia un estudo que mida cantos alumnos durmen peor por esta causa. Esta peza só mostra que, co horario actual, a luz chega máis tarde que a clase en moitos días, e que esa diferenza se reduce cunha hora menos.

Que decidan as escolas, as familias ou o Estado é outra cuestión: a hora oficial é [competencia estatal](/artigos/quen-pode-cambiar-a-hora-de-galicia/), e a de entrada a cada centro.
