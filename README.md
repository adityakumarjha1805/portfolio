# Aditya Kumar Jha — Portfolio

A React single-page portfolio built with Vite.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to Vercel

When importing this repository into Vercel, set the **Root Directory** to `portfolio` (the folder containing this README and `package.json`). The included `vercel.json` configures Vercel to run `npm ci`, build with `npm run build`, and publish `dist`. It also rewrites application routes to the SPA entry point so direct visits and refreshes on routes such as `/projects` work.

Vite requires Node.js `^20.19.0` or `>=22.12.0`; the supported range is declared in `package.json`.
