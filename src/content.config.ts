import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Artigos. Cada ficheiro vive en src/content/artigos/{gl|es}/<slug>.md
 * Regra fixa: sen fontes non se publica — o build falla se `fontes` está baleiro.
 */
const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    titulo: z.string().min(10),
    entradilla: z.string().min(40).max(260),
    data: z.coerce.date(),
    actualizado: z.coerce.date().optional(),
    /** Clave común ás dúas versións (gl/es) do mesmo artigo. */
    par: z.string(),
    /** Orde de lectura na portada (menor = antes). */
    orde: z.number().int().default(100),
    seccion: z.enum(['xeografia', 'historia', 'saude', 'comparativa', 'debate', 'actualidade', 'campaña']),
    borrador: z.boolean().default(false),
    fontes: z
      .array(
        z.object({
          titulo: z.string(),
          url: z.url(),
          dato: z.string().optional(),
        }),
      )
      .min(1, 'Cada artigo necesita polo menos unha fonte enlazada.'),
  }),
});

export const collections = { artigos };
