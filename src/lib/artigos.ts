import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Artigo = CollectionEntry<'artigos'>;

/** O id é "gl/slug" ou "es/slug". */
export function slugOf(entry: Artigo): string {
  return entry.id.split('/').slice(1).join('/');
}

export function langOf(entry: Artigo): Lang {
  return entry.id.startsWith('es/') ? 'es' : 'gl';
}

export async function artigosDe(lang: Lang): Promise<Artigo[]> {
  const all = await getCollection('artigos', (e) => langOf(e) === lang && !e.data.borrador);
  return all.sort((a, b) => a.data.orde - b.data.orde || b.data.data.getTime() - a.data.data.getTime());
}

export async function parDe(entry: Artigo): Promise<Artigo | undefined> {
  const other: Lang = langOf(entry) === 'gl' ? 'es' : 'gl';
  const list = await artigosDe(other);
  return list.find((e) => e.data.par === entry.data.par);
}
