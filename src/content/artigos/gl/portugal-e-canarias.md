---
titulo: "Por que Portugal ten unha hora menos ca España e Galicia"
entradilla: "En Portugal é unha hora menos ca en España porque usa a hora de Greenwich, mentres a Península usa a centroeuropea. Cambia o reloxo o mesmo día ca España, ten a mesma hora ca Canarias e probou a CET de 1992 a 1996."
data: 2026-09-27
actualizado: 2026-11-27
par: comparativa
orde: 4
seccion: comparativa
fontes:
  - titulo: "EUR-Lex — Directiva 2000/84/CE, sobre a hora de verán"
    url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32000L0084"
    dato: "O período da hora de verán comeza e remata «en todos los Estados miembros a la 1 de la madrugada, hora universal» do último domingo de marzo e de outubro"
  - titulo: "Diário da República — Decreto-Lei n.º 17/96, de 8 de março"
    url: "https://diariodarepublica.pt/dr/detalhe/decreto-lei/17-1996-621299"
    dato: "«A hora legal de Portugal continental coincide com o tempo universal coordenado (UTC)» no inverno e co UTC «aumentado de sessenta minutos» no verán"
  - titulo: "UPI Archives, 'Portugal turns back the clock' (1996)"
    url: "https://www.upi.com/Archives/1996/02/16/Portugal-turns-back-the-clock/1455824446800/"
    dato: "Portugal abandonou en 1996 catro anos de hora centroeuropea"
  - titulo: "Observatório Astronómico de Lisboa — Hora Legal"
    url: "https://oal.ul.pt/hora-legal/"
    dato: "O OAL ten a incumbencia legal da hora en Portugal"
  - titulo: "Documento UPM, 'Es nuestro huso horario un problema' (2017)"
    url: "https://oa.upm.es/45296/1/CCG_2017_Es-nuestro-huso-horario-un-problema.pdf"
    dato: "Dende 1922, Canarias ten un uso horario menos que a Península"
  - titulo: "BOE — Real Decreto 236/2002"
    url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2002-4221"
    dato: "O cambio de hora aplícase 'a una hora de la madrugada en Canarias'"
  - titulo: "timeanddate.com — Santiago de Compostela, decembro 2026"
    url: "https://www.timeanddate.com/sun/spain/santiago-de-compostela?month=12&year=2026"
    dato: "O 21/12/2026 o sol sae en Santiago ás 9:01"
  - titulo: "timeanddate.com — Lisboa, decembro 2026"
    url: "https://www.timeanddate.com/sun/portugal/lisbon?month=12&year=2026"
    dato: "O 21/12/2026 o sol sae en Lisboa ás 7:50"
  - titulo: "Bonmatí-Carrión et al. (2022), Biology"
    url: "https://www.mdpi.com/2079-7737/11/8/1130"
    dato: "Tendencia a maior desincronización circadiana no oeste de España (Lugo, Ponferrada, Huelva) que en Coimbra, en persoas maiores e xubiladas, de preto de 72 anos de media"
  - titulo: "Método NOAA de ecuacións solares (base do cálculo propio, src/lib/sol.ts)"
    url: "https://gml.noaa.gov/grad/solcalc/solareqns.PDF"
    dato: "(tradución) «O cénit fíxase en 90,833° (corrección aproximada pola refracción atmosférica no amencer e no solpor e polo tamaño do disco solar)»"
  - titulo: "Wikidata, propiedade P625 (coordenadas das cidades usadas no cálculo)"
    url: "https://www.wikidata.org/wiki/Property:P625"
    dato: "Coordenadas tomadas de Wikidata (propiedade P625, CC0) e recollidas en src/data/cidades.ts"
---

En Portugal é unha hora menos ca en España, e polo tanto ca en Galicia, porque a súa hora oficial é a de Greenwich, mentres que España leva a centroeuropea (CET) dende a orde de 1940, que [explicamos noutro artigo](/artigos/por-que-cambiamos-de-hora-en-1940/). Portugal probou a CET entre 1992 e 1996 e abandonouna ([UPI, 1996](https://www.upi.com/Archives/1996/02/16/Portugal-turns-back-the-clock/1455824446800/)). O resultado vese no amencer: o 21 de decembro sae ás 7:50 en [Lisboa](https://www.timeanddate.com/sun/portugal/lisbon?month=12&year=2026) e ás 9:01 en [Santiago](https://www.timeanddate.com/sun/spain/santiago-de-compostela?month=12&year=2026), como amosa a [ferramenta de amenceres](/ferramentas/amencer/?esc=actual&data=12-21&lim=510&cidade=santiago).

Cando se fala de que Galicia use a hora de Greenwich, adoita saír a mesma obxección: "iso sería un lío". Pero xa temos dous exemplos reais, moi preto de nós, de territorios que viven cunha hora distinta á do resto do Estado ao que pertencen. Un saíu mal e rectificouse. O outro leva un século funcionando sen que ninguén o cuestione. Paga a pena mirar os dous con calma antes de sacar conclusións.

## Portugal cambia a hora coma España?

Si. Portugal e España adiantan e atrasan o reloxo o mesmo día e no mesmo instante, porque a [Directiva 2000/84/CE](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32000L0084) fixa o cambio «en todos los Estados miembros a la 1 de la madrugada, hora universal» do último domingo de marzo e do último de outubro. O que cambia é a hora de partida. En Portugal continental, a hora legal «coincide com o tempo universal coordenado (UTC)» no inverno e vai sesenta minutos por diante no verán ([Decreto-Lei 17/96](https://diariodarepublica.pt/dr/detalhe/decreto-lei/17-1996-621299)). En España, o [Real Decreto 236/2002](https://www.boe.es/buscar/doc.php?id=BOE-A-2002-4221) sitúa ese mesmo cambio ás dúas da madrugada peninsulares, «la una hora de la madrugada en Canarias». Como ese instante é a 1:00 UTC, a Península vai en UTC+1 no inverno e Canarias, igual ca Portugal, en UTC+0 (conta propia a partir das dúas normas).

| | Inverno | Verán |
|---|---|---|
| Galicia e resto da Península | UTC+1 | UTC+2 |
| Portugal continental | UTC+0 | UTC+1 |
| Canarias | UTC+0 | UTC+1 |

Por iso Portugal e Canarias teñen sempre a mesma hora, e Galicia sempre unha máis. O próximo cambio é o 28 de marzo de 2027, como contamos nas [preguntas frecuentes](/artigos/preguntas-frecuentes/); a que hora sería agora en cada lado pódese ver no [reloxo de Galicia e Portugal](/ferramentas/hora/).

## A mesma luz con dous reloxos: o oeste de España

A fronteira con Portugal separa dous reloxos. A táboa colle sete cidades do oeste peninsular, de Vigo a Huelva, e dá, para cada unha, a hora do amencer do 21 de decembro de 2026 e a do solpor do 21 de xuño de 2027 coa hora española e coa portuguesa, e cantos días de 2027 sae o sol despois das 8:30.

| Cidade | Amencer 21/12, hora española | Con hora de Portugal | Solpor 21/6, hora española | Con hora de Portugal | Días con amencer despois das 8:30 (hora española / de Portugal) |
|---|---|---|---|---|---|
| [Vigo](/ferramentas/amencer/vigo/) | 9:00 | 8:00 | 22:14 | 21:14 | 119 / 0 |
| [Ourense](/ferramentas/amencer/ourense/) | 8:57 | 7:57 | 22:11 | 21:11 | 112 / 0 |
| [Zamora](/ferramentas/amencer/zamora/) | 8:46 | 7:46 | 22:00 | 21:00 | 86 / 0 |
| [Salamanca](/ferramentas/amencer/salamanca/) | 8:44 | 7:44 | 21:58 | 20:58 | 81 / 0 |
| [Cáceres](/ferramentas/amencer/caceres/) | 8:42 | 7:42 | 21:56 | 20:56 | 81 / 0 |
| [Badaxoz](/ferramentas/amencer/badaxoz/) | 8:43 | 7:43 | 21:56 | 20:56 | 86 / 0 |
| [Huelva](/ferramentas/amencer/huelva/) | 8:38 | 7:38 | 21:51 | 20:51 | 75 / 0 |

Cálculo propio co [método NOAA](https://gml.noaa.gov/grad/solcalc/solareqns.PDF) e as coordenadas de cada cidade tomadas de [Wikidata](https://www.wikidata.org/wiki/Property:P625); a columna «con hora de Portugal» aplica a esas mesmas coordenadas a hora legal portuguesa (UTC+0 no inverno, UTC+1 no verán).

Galicia é o extremo, pero non o único caso: Huelva, Badaxoz ou Zamora tamén suman entre 75 e 86 días ao ano con amencer despois das 8:30. O prezo da hora portuguesa tamén aparece na táboa: en xuño o sol poríase unha hora antes, entre as 20:51 e as 21:14 en lugar de entre as 21:51 e as 22:14. Cantos días de 2026 amence tarde en cada provincia vese no [mapa de amenceres](/ferramentas/mapa/), e cada concello galego ten o seu cálculo en [a que hora amence no teu concello](/ferramentas/concello/).

## Portugal probou o contrario e deu marcha atrás

En 1992 Portugal fixo o movemento inverso ao que aquí se propón: adiantou o reloxo para adoptar a hora centroeuropea (CET), coa idea de aliñarse coa maioría dos socios da Unión Europea. O experimento durou catro anos. En febreiro de 1996, o entón primeiro ministro António Guterres anunciou que o país abandonaba "a four-year experiment with Central European Time" ([UPI, 1996](https://www.upi.com/Archives/1996/02/16/Portugal-turns-back-the-clock/1455824446800/)).

O motivo non foi técnico, senón social: segundo recolle esa mesma crónica, houbo "fierce pressure from parents' associations which complained that children were going to school in the dark and refused to go to bed at night because it was still light". A propia UPI describe o cambio de 1992 como algo que puxera o reloxo "about 2 hours ahead of the sun". Guterres xustificou a marcha atrás cunha frase que resume ben o argumento de fondo deste debate: "There are undoubted advantages in bringing legal time back closer to solar time. It is wrong to go against nature" ([UPI, 1996](https://www.upi.com/Archives/1996/02/16/Portugal-turns-back-the-clock/1455824446800/)).

Dende entón, Portugal mantén a hora de Greenwich (con horario de verán, coma España), e quen custodia esa hora legal é unha institución concreta: o Observatório Astronómico de Lisboa, que "é a instituição que tem a incumbência legal de manter e distribuir a Hora Legal em Portugal" ([OAL](https://oal.ul.pt/hora-legal/)). É dicir: hai un organismo claro, con nome e enderezo, responsable de que a hora oficial portuguesa siga sendo a que é.

## Canarias leva case un século cunha hora menos

O outro caso é máis próximo aínda, porque é parte do mesmo Estado. Dende 1922, ao arquipélago canario "se les aplicó a estas el huso 23, uno menos que el resto de España", segundo recolle o documento do Archivo Digital da UPM sobre o problema do fuso horario español ([UPM, 2017](https://oa.upm.es/45296/1/CCG_2017_Es-nuestro-huso-horario-un-problema.pdf)). Ese mesmo documento sinala que a franxa occidental de Galicia comparte fuso xeográfico con Canarias dende aquel ano, aínda que na práctica mantivo sempre a hora peninsular.

Hoxe esa diferenza segue regulada por lei. O Real Decreto 236/2002, que fixa o horario de verán en España, distingue explicitamente Canarias no seu propio articulado: o cambio "comenzará el último domingo del mes de marzo de cada año a las dos horas de la madrugada (la una hora de la madrugada en Canarias)" ([BOE, RD 236/2002](https://www.boe.es/buscar/doc.php?id=BOE-A-2002-4221)). Non é unha excepción escondida nin unha anomalía tolerada: está escrita no mesmo decreto que regula o horario para todo o Estado.

## Santiago e Lisboa, a mesma latitude aproximada, horas distintas

A diferenza entre ter GMT ou CET faise visible cando se compara o amencer. O 21 de decembro de 2026, o sol sae en Santiago de Compostela ás 9:01 da mañá; en Lisboa, ese mesmo día, sae ás 7:50 ([timeanddate, Santiago](https://www.timeanddate.com/sun/spain/santiago-de-compostela?month=12&year=2026); [timeanddate, Lisboa](https://www.timeanddate.com/sun/portugal/lisbon?month=12&year=2026)). Máis dunha hora de diferenza no amencer, entre dous puntos que comparten fuso xeográfico pero non hora oficial. Un estudo de 2022 comparou persoas maiores e xubiladas, de preto de 72 anos de media do oeste de España (Lugo, Ponferrada e Huelva) coas de Coimbra e atopou unha tendencia a maior desincronización circadiana nas primeiras ([Bonmatí-Carrión et al., Biology](https://www.mdpi.com/2079-7737/11/8/1130)); as súas limitacións explícanse no artigo dedicado á saúde.

![Gráfico: hora do amencer en Lisboa e en Santiago o 21 de decembro de 2026](/img/amencer-lisboa-santiago-gl.svg)

Coa hora de Lisboa, Santiago amencería ás 8:01 (cálculo propio: o 9:01 de [timeanddate, Santiago](https://www.timeanddate.com/sun/spain/santiago-de-compostela?month=12&year=2026) en hora de inverno, restando unha hora). Lisboa, 7:50 segundo [timeanddate, Lisboa](https://www.timeanddate.com/sun/portugal/lisbon?month=12&year=2026); o noso cálculo para Santiago coincide co de timeanddate (9:01).

## Un Estado, un arquipélago, e o caso galego

Convén ser honestos co que cada exemplo demostra e co que non. Portugal é un Estado enteiro: cando cambia a hora, cambia para todo o territorio, sen ningunha fronteira horaria interna que xestionar. Canarias é un arquipélago separado por mar do resto de España: a fronteira horaria non a cruza ninguén camiñando ou conducindo cada día.

Galicia sería un caso distinto dos dous: unha fronteira terrestre interna, dentro do mesmo Estado, entre unha comunidade con hora propia e o resto da Península. Iso non ten equivalente exacto nin en Portugal nin en Canarias. Ao mesmo tempo, a fronteira co Miño xa existe hoxe en día: quen cruza cara a Portugal xa vive, cada vez que o fai, cunha hora de diferenza coa que sae de Galicia. Non é, polo tanto, unha situación descoñecida na práctica cotiá da xente que vive preto desa raia, aínda que iso non equivale a dicir que se xestione dun xeito ou doutro sen custo ningún.
