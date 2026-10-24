import { SITE_URL } from '../config';
import type { Lang } from '../i18n/ui';

const ORG_NAME = 'Galicia GMT';
const CTX = 'https://schema.org';

const abs = (path: string) => new URL(path, SITE_URL).toString();

export const orgRef = () => ({ '@type': 'Organization', name: ORG_NAME, url: SITE_URL + '/' });

export function articleSchema(o: {
  lang: Lang;
  path: string;
  titulo: string;
  entradilla: string;
  data: Date;
  actualizado?: Date;
}) {
  return {
    '@context': CTX,
    '@type': 'Article',
    headline: o.titulo,
    description: o.entradilla,
    datePublished: o.data.toISOString(),
    dateModified: (o.actualizado ?? o.data).toISOString(),
    inLanguage: o.lang,
    author: orgRef(),
    publisher: orgRef(),
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(o.path) },
  };
}

/** Limpa markdown básico a texto plano. */
function plain(md: string): string {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]+/g, '')
    .replace(/^\s*[-*]\s+/gm, '')
    .replace(/\s*\n\s*/g, ' ')
    .trim();
}

/** Extrae pares pregunta/resposta dos "## Título" do corpo markdown, sen engadir nada novo. */
export function faqSchema(lang: Lang, body: string) {
  const parts = body.split(/^## +/m).slice(1);
  const mainEntity = parts
    .map((p) => {
      const nl = p.indexOf('\n');
      const q = plain(p.slice(0, nl));
      const a = plain(p.slice(nl + 1));
      return { q, a };
    })
    .filter((x) => x.q && x.a)
    .map((x) => ({
      '@type': 'Question',
      name: x.q,
      acceptedAnswer: { '@type': 'Answer', text: x.a },
    }));
  return { '@context': CTX, '@type': 'FAQPage', inLanguage: lang, mainEntity };
}

export function webAppSchema(o: { lang: Lang; path: string; name: string; description: string }) {
  return {
    '@context': CTX,
    '@type': 'WebApplication',
    name: o.name,
    description: o.description,
    url: abs(o.path),
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    inLanguage: o.lang,
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    publisher: orgRef(),
  };
}

export function homeSchema(lang: Lang, description: string) {
  const url = abs(lang === 'gl' ? '/' : '/es/');
  return [
    {
      '@context': CTX,
      '@type': 'Organization',
      name: ORG_NAME,
      url: SITE_URL + '/',
      logo: abs('/favicon.svg'),
      description,
    },
    {
      '@context': CTX,
      '@type': 'WebSite',
      name: ORG_NAME,
      url,
      inLanguage: lang,
      publisher: orgRef(),
    },
  ];
}
