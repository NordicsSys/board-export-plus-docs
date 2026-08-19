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

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the site and publishes it to **GitHub Pages**.

Live site: **https://board-export-docs.nikaj.dev**

### One-time GitHub setup

1. Open **Settings → Pages** in this repository.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Ensure the custom domain `board-export-docs.nikaj.dev` is configured in Pages settings (the repo includes `static/CNAME`).
4. Point DNS for `board-export-docs.nikaj.dev` to GitHub Pages (A/AAAA records or CNAME to `NordicsSys.github.io`).

After that, every push to `main` redeploys automatically.

### Syncing from the product monorepo

Source content is maintained in the private `board-export-plus` monorepo under `apps/docs/`. Copy updates into this public repository when publishing new docs. Do not copy `.env`, API keys, SMTP credentials, or private application source.

## Content

- Main guide: `docs/power-up-guide.md`
- Blog: `blog/`
- Annotated screenshots: `static/img/guide/`
- Video: [Board Export+ walkthrough](https://www.youtube.com/watch?v=IQOwqYVIWLk)
