export type Lang = 'gl' | 'es';

export const langs: Record<Lang, string> = { gl: 'Galego', es: 'Castellano' };

/** Rutas equivalentes entre idiomas. A clave é un identificador interno. */
export const routes = {
  home: { gl: '/', es: '/es/' },
  artigos: { gl: '/artigos/', es: '/es/articulos/' },
  ferramentas: { gl: '/ferramentas/', es: '/es/herramientas/' },
  amencer: { gl: '/ferramentas/amencer/', es: '/es/herramientas/amanecer/' },
  asinao: { gl: '/asinao/', es: '/es/firmalo/' },
  sobre: { gl: '/sobre/', es: '/es/sobre/' },
  ia: { gl: '/ia/', es: '/es/ia/' },
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
  gl: {
    'site.name': 'Galicia GMT',
    'site.tagline': 'Galicia vive cun reloxo que non é o seu.',
    'site.description':
      'Divulgación e campaña para que Galicia recupere a hora de Greenwich (como Portugal e Canarias) ou, polo menos, deixe de adiantar o reloxo no verán.',
    'nav.artigos': 'Artigos',
    'nav.ferramentas': 'Ferramentas',
    'nav.asinao': 'Asínao',
    'nav.sobre': 'O proxecto',
    'nav.ia': 'Como se fai',
    'nav.menu': 'Menú',
    'footer.ai': 'Web mantida por IA baixo supervisión humana.',
    'footer.ai.more': 'Como funciona',
    'footer.rules': 'Cada cifra leva a súa fonte enlazada. Se atopas un erro, avísanos.',
    'footer.license': 'Textos baixo licenza CC BY-SA 4.0.',
    'article.sources': 'Fontes',
    'article.published': 'Publicado',
    'article.updated': 'Actualizado',
    'article.read': 'Ler',
    'article.all': 'Todos os artigos',
    'article.other': 'Ler en castelán',
    'article.next': 'Seguinte',
    'clock.official': 'Hora oficial',
    'clock.solar': 'Hora solar en Santiago',
    'clock.gap': 'de diferenza',
    'clock.note': 'Hora solar media calculada coa lonxitude de Santiago (8,54° O): 4 minutos por grao.',
    'cta.title': 'Se che parece razoable, asínao.',
    'cta.text': 'Non pedimos cartos nin datos que non fagan falta. Só contar cantas persoas pensan que o tema merece un debate serio.',
    'cta.button': 'Ir a Asínao',
    'section.xeografia': 'Xeografía',
    'section.historia': 'Historia',
    'section.saude': 'Saúde',
    'section.comparativa': 'Comparativa',
    'section.debate': 'Debate',
    'section.actualidade': 'Actualidade',
    'section.campaña': 'Campaña',
  },
  es: {
    'site.name': 'Galicia GMT',
    'site.tagline': 'Galicia vive con un reloj que no es el suyo.',
    'site.description':
      'Divulgación y campaña para que Galicia recupere la hora de Greenwich (como Portugal y Canarias) o, al menos, deje de adelantar el reloj en verano.',
    'nav.artigos': 'Artículos',
    'nav.ferramentas': 'Herramientas',
    'nav.asinao': 'Fírmalo',
    'nav.sobre': 'El proyecto',
    'nav.ia': 'Cómo se hace',
    'nav.menu': 'Menú',
    'footer.ai': 'Web mantenida por IA bajo supervisión humana.',
    'footer.ai.more': 'Cómo funciona',
    'footer.rules': 'Cada cifra lleva su fuente enlazada. Si encuentras un error, avísanos.',
    'footer.license': 'Textos bajo licencia CC BY-SA 4.0.',
    'article.sources': 'Fuentes',
    'article.published': 'Publicado',
    'article.updated': 'Actualizado',
    'article.read': 'Leer',
    'article.all': 'Todos los artículos',
    'article.other': 'Ler en galego',
    'article.next': 'Siguiente',
    'clock.official': 'Hora oficial',
    'clock.solar': 'Hora solar en Santiago',
    'clock.gap': 'de diferencia',
    'clock.note': 'Hora solar media calculada con la longitud de Santiago (8,54° O): 4 minutos por grado.',
    'cta.title': 'Si te parece razonable, fírmalo.',
    'cta.text': 'No pedimos dinero ni datos que no hagan falta. Solo contar cuántas personas creen que el tema merece un debate serio.',
    'cta.button': 'Ir a Fírmalo',
    'section.xeografia': 'Geografía',
    'section.historia': 'Historia',
    'section.saude': 'Salud',
    'section.comparativa': 'Comparativa',
    'section.debate': 'Debate',
    'section.actualidade': 'Actualidad',
    'section.campaña': 'Campaña',
  },
} as const;

export type UiKey = keyof (typeof ui)['gl'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

export function r(lang: Lang, key: RouteKey): string {
  return routes[key][lang];
}

export function articleUrl(lang: Lang, slug: string): string {
  return `${routes.artigos[lang]}${slug}/`;
}

export function formatDate(lang: Lang, d: Date): string {
  return d.toLocaleDateString(lang === 'gl' ? 'gl-ES' : 'es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
