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

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the site and publishes it.

### Current hosting

`board-export-docs.nikaj.dev` is served by **nginx on your VPS** (`178.238.229.108`), not directly by GitHub Pages today. That means:

- GitHub Actions may build successfully, but the live domain will not update until the VPS pulls the latest `main` and rebuilds/redeploys `build/`.
- After pushing image or static asset changes, confirm the VPS deploy ran (check file `Last-Modified` headers or hard-refresh the browser).

### Option A — Keep VPS hosting (current)

Ensure the VPS redeploys on every push to `main` (git pull → `pnpm install` → `pnpm build` → copy `build/` to nginx).

Optional: add a GitHub repository secret `DOCS_DEPLOY_HOOK_URL` pointing at your server redeploy webhook. The deploy workflow will POST to it after each build.

### Option B — Move to GitHub Pages (recommended for auto-deploy)

1. Open **Settings → Pages** in this repository.
2. Set **Build and deployment → Source** to **GitHub Actions** (or **Deploy from branch → gh-pages**).
3. Point DNS for `board-export-docs.nikaj.dev` to GitHub Pages (CNAME to `NordicsSys.github.io` or GitHub A records).
4. Remove the old nginx vhost on the VPS once DNS has propagated.

After DNS points at GitHub Pages, every push to `main` updates the live site automatically.

### Syncing from the product monorepo

Source content is maintained in the private `board-export-plus` monorepo under `apps/docs/`. Copy updates into this public repository when publishing new docs. Do not copy `.env`, API keys, SMTP credentials, or private application source.

## Content

- Main guide: `docs/power-up-guide.md`
- Blog: `blog/`
- Annotated screenshots: `static/img/guide/`
- Video: [Board Export+ walkthrough](https://www.youtube.com/watch?v=IQOwqYVIWLk)
