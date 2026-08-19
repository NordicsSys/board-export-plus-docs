# Board Export+ Docs

Public user-facing documentation for [Board Export+](https://board-export-docs.nikaj.dev), built with [Docusaurus](https://docusaurus.io/).

This repository is documentation-only. It is safe to publish separately from the private product repository.

## Local development

```bash
pnpm install
pnpm start
```

Opens a local server (usually `http://localhost:3000`) with live reload.

## Build

```bash
pnpm build
```

Static output is written to `build/`. Preview locally with:

```bash
pnpm serve
```

## Deployment

Live site: **https://board-export-docs.nikaj.dev**

Deploy manually after pulling the latest `main`:

```bash
pnpm install --frozen-lockfile
pnpm build
```

Upload the generated `build/` folder to your hosting provider (nginx docroot on the VPS).

Do not publish `.env`, API keys, SMTP credentials, or private application source.

### Syncing from the product monorepo

Source content is maintained in the private `board-export-plus` monorepo under `apps/docs/`. Copy updates into this public repository when publishing new docs.

## Content

- Main guide: `docs/power-up-guide.md`
- Blog: `blog/`
- Annotated screenshots: `static/img/guide/`
- Video: [Board Export+ walkthrough](https://www.youtube.com/watch?v=IQOwqYVIWLk)
