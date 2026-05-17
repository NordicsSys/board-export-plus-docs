# Board Export+ Docs Site

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

This app is documentation-only. It is intended to be safe to publish separately from the private product repository.

## Installation

```bash
pnpm install
```

## Local Development

```bash
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Publish only the generated `build` folder or publish this `apps/docs` folder as a separate public docs repository.

```bash
pnpm build
```

Do not publish `.env`, Trello keys, SMTP credentials, database URLs, Redis URLs, or private app source code.

See `docs/deployment.md` inside the Docusaurus site for the manual deployment checklist.
