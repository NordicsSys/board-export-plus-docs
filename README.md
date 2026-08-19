# Board Export+ Docs

User-facing documentation site for Board Export+, built with [Docusaurus](https://docusaurus.io/).

## Local development

Docs is **not** part of `pnpm dev` (Power-Up / API / worker). Run it separately.

From the monorepo root:

```bash
pnpm docs:dev
```

Or:

```bash
pnpm --filter @board-export-plus/docs start
```

Opens a local server (usually `http://localhost:3000`) with live reload.

## Build

```bash
pnpm docs:build
```

Static output is written to `apps/docs/build`. Preview with `pnpm docs:serve`.

CI runs `pnpm docs:build` on every push (see `.github/workflows/ci.yml`).

## Content

- Main guide: `docs/power-up-guide.md`
- Annotated screenshots: `static/img/guide/`
- Video: [Board Export+ walkthrough](https://www.youtube.com/watch?v=IQOwqYVIWLk)

Do not publish `.env`, API keys, or private product source with this site.
