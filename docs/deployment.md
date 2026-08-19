---
draft: true
sidebar_position: 2
title: Publish The Docs
description: Safe deployment options for publishing only Board Export+ documentation.
---

# Publish The Docs

This Docusaurus app is a documentation-only site. It is safe to publish separately from the private Board Export+ product repository because it contains user-facing documentation, not application source code or secrets.

## What To Publish

Publish only the static build output from `apps/docs`:

```bash
pnpm --filter @board-export-plus/docs build
```

The generated site is written to:

```text
apps/docs/build
```

Upload that folder to your hosting provider.

## What Not To Publish

Never publish:

- `.env`
- Trello API keys or tokens
- SMTP credentials
- Database URLs
- Redis URLs
- Private source code from `apps/api`, `apps/worker`, or `apps/power-up`
- Local test files such as webhook receiver scripts

## Recommended Hosting

Good options for a static Docusaurus site:

- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages from a separate public documentation repository

For a private product, the cleanest setup is usually a separate public docs repository that receives only the built docs site or only the docs app.

## Manual Deployment Checklist

1. Create a separate public repository, for example `board-export-plus-docs`.
2. Copy only `apps/docs` into that public repository, or deploy only `apps/docs/build`.
3. Do not copy `.env` or app source folders.
4. Configure the host build command:

   ```bash
   pnpm install --frozen-lockfile
   pnpm build
   ```

   If you publish only the `apps/docs` folder as its own repository, use:

   ```bash
   pnpm install --frozen-lockfile
   pnpm build
   ```

5. Configure the publish directory:

   ```text
   build
   ```

   If deploying from the monorepo, use:

   ```text
   apps/docs/build
   ```

6. Set the final documentation URL in the Power-Up so **Help & docs** opens the hosted docs site.

## Updating The Power-Up Link

After the docs site is live, update the Power-Up docs URL to the public site URL.

For example:

```text
https://docs.your-domain.example/docs/power-up-guide
```

Until the public docs site exists, the app can point to the GitHub Markdown guide or a temporary preview URL.
