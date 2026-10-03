---
titulo: "Como funciona o reloxo do corpo: luz, sono e hora oficial"
entradilla: "O corpo humano ten un reloxo interno que se axusta coa luz do sol. Que di a ciencia, e por que o desfase afecta a todo o oeste da Península."
data: 2026-10-02
par: reloxo-corpo
orde: 7
seccion: saude
fontes:
  - titulo: "Premio Nobel de Medicina 2017 (Hall, Rosbash, Young): información avanzada"
    url: "https://www.nobelprize.org/prizes/medicine/2017/advanced-information/"
    dato: "A transcrición dos xenes period e timeless é reprimida polas súas propias proteínas, o que xera unha oscilación autónoma"
  - titulo: "Wright et al. (2013), Current Biology"
    url: "https://pubmed.ncbi.nlm.nih.gov/23910656/"
    dato: "Tras unha semana só con luz natural, o reloxo interno sincronízase co tempo solar: a noite biolóxica comeza ao solpor e remata pouco despois do amencer"
  - titulo: "Khalsa et al. (2003), The Journal of Physiology"
    url: "https://doi.org/10.1113/jphysiol.2003.040477"
    dato: "A luz antes do mínimo de temperatura corporal atrasa o reloxo; despois, adiántao"
  - titulo: "Roenneberg et al. (2012), Current Biology"
    url: "https://www.cell.com/current-biology/fulltext/S0960-9822(12)00325-9"
    dato: "O «jet lag social» mide a discrepancia entre o reloxo circadiano e o social, que leva a unha perda crónica de sono; asociouse a maior índice de masa corporal"
  - titulo: "Gibson e Shrader (2018), Review of Economics and Statistics"
    url: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ABT3OE"
    dato: "Unha hora máis de sono á semana aumenta os ingresos un 1,1 % a curto prazo e un 5 % a longo prazo (datos de Alemaña e dos EUA)"
  - titulo: "Cálculo propio co método NOAA (src/lib/sol.ts), coordenadas de Wikidata"
    url: "https://www.wikidata.org/wiki/Property:P625"
    dato: "Hora do amencer o 21/12/2026 coa hora oficial actual (CET) e coa de Lisboa (UTC+0)"
---

O corpo non ten un reloxo: ten moitos, e todos reciben a hora do mesmo sitio, a luz que entra polos ollos. Para entender por que importa que o reloxo da parede vaia dúas horas por diante do sol, convén comezar por como funciona o interno.

## Un reloxo en cada célula

O Premio Nobel de Medicina de 2017 recoñeceu a Jeffrey Hall, Michael Rosbash e Michael Young por descubrir como funciona ese reloxo a nivel molecular. Segundo a [documentación do propio premio](https://www.nobelprize.org/prizes/medicine/2017/advanced-information/), os xenes *period* e *timeless* son reprimidos polas proteínas que eles mesmos producen, e iso xera unha oscilación autónoma: o reloxo anda só, sen necesitar o sol. Pero non anda exacto, e por iso precisa axustarse cada día.

## A luz pon o reloxo en hora

Ese axuste faise coa luz, e a hora á que chega importa. Nun experimento con persoas, [Khalsa e o seu equipo](https://doi.org/10.1113/jphysiol.2003.040477) viron que a luz brillante recibida antes do mínimo de temperatura corporal atrasa o reloxo interno, e a recibida despois adiántao. Dito de forma sinxela: a luz da noite fai que o corpo se vaia deitando máis tarde; a luz da mañá fai o contrario.

O caso extremo é o de [Wright e colaboradores](https://pubmed.ncbi.nlm.nih.gov/23910656/): tras unha semana vivindo só con luz natural, o reloxo interno das persoas participantes quedou sincronizado co tempo solar, coa noite biolóxica comezando ao solpor e rematando pouco despois do amencer. Non é unha proba sobre Galicia, pero mostra a ligazón: o corpo sabe seguir ao sol, e axústase peor canto máis se aparta del a vida social.

## O reloxo social

O problema aparece cando o horario de traballo, da escola ou das comidas non segue ao sol. O investigador Till Roenneberg chamou a isto «jet lag social»: [a discrepancia entre o reloxo circadiano e o social](https://www.cell.com/current-biology/fulltext/S0960-9822(12)00325-9), que leva a unha perda crónica de sono. No seu estudo, esa discrepancia asociouse a un índice de masa corporal máis alto. É unha asociación, non unha proba de causa.

A hora oficial é parte do reloxo social. Se a hora marca as 8:00 cando o sol aínda non saíu, a xente que ten que ir traballar ou á escola a esa hora recibe a luz máis tarde do que o seu corpo agardaría.

## Que cambia no oeste da Península

Isto non pasa só en Galicia. O desfase crece canto máis ao oeste se está dentro dun mesmo fuso horario. Esta é a hora á que sae o sol o 21 de decembro de 2026 en varias cidades, coa hora oficial actual e coa hora de Lisboa (cálculo propio co mesmo método da nosa [ferramenta de amenceres](/ferramentas/amencer/)):

| Cidade | Amencer coa hora actual (CET) | Amencer coa hora de Lisboa (UTC+0) |
|---|---|---|
| Xirona | 8:13 | 7:13 |
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

![Gráfico: hora do amencer o 21 de decembro de 2026 en 14 cidades, con puntos para a hora actual e para a hora de Lisboa, de Xirona a Santiago](/img/gradiente-amencer-gl.svg)

Entre Xirona e Santiago hai case unha hora de diferenza no amencer co mesmo reloxo. Pero a cuestión non é só Galicia: Asturias, León, Castela e León, Extremadura e o oeste de Andalucía están no mesmo gradiente. Por iso esta web fala de Galicia porque é o extremo, non porque sexa o único lugar afectado.

## Saúde, produtividade e economía: que se sabe e que non

Hai evidencia sobre o sono e os ingresos, pero hai que usala con coidado. Gibson e Shrader aproveitaron que a hora do solpor cambia dentro dun mesmo fuso para estudar o efecto do sono sobre o salario. Concluíron que [unha hora máis de sono á semana aumenta os ingresos un 1,1 % a curto prazo e un 5 % a longo prazo](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ABT3OE). Os datos son de Alemaña e dos Estados Unidos, non de España.

O que non podemos dicir é canto custa en euros o desfase horario no oeste peninsular: non coñecemos ningún estudo que o calculase. Tampouco está probado que cambiar a hora oficial resolva por si só o problema do sono, que depende tamén dos horarios laborais, escolares e das comidas. Para o estudo máis próximo á nosa zona, consulta o artigo sobre [amenceres tardíos, sono e saúde](/artigos/amenceres-tardios-sono-e-saude/).

## Que pedimos

Que o Estado estude con datos se a hora oficial debe achegarse á solar, e en particular no oeste da Península. O horario de verán e o fuso son decisións distintas, e [os contraargumentos](/artigos/os-contraargumentos/), como o impacto sobre o turismo ou o cambio de hábitos, merecen ser estudados antes de decidir.
