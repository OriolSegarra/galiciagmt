# galiciagmt

Web divulgativa e de campaña para que Galicia recupere a hora de Greenwich (como Portugal e Canarias) ou, polo menos, deixe de adiantar o reloxo no verán.

Mantida por un axente de IA baixo supervisión humana. Ver [CLAUDE.md](CLAUDE.md) e [AGENTE_NOCHE.md](AGENTE_NOCHE.md).

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # saída estática en dist/
```

- Artigos: `src/content/artigos/{gl,es}/*.md` (o build falla se un artigo non ten fontes).
- Configuración (dominio, formulario Tally, contacto): `src/config.ts`.
- Textos baixo CC BY-SA 4.0.
