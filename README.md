# Athlete IQ Landing Page

A clean Vite + React + Tailwind landing page prepared for Cloudflare Pages.

## Local development

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run build
```

The production build is emitted to `dist/`.

## Cloudflare Pages deployment

Use these build settings in Cloudflare Pages:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** repository root
- **Node.js version:** `22.16.0` from `.node-version` or any supported Node 22 version

Cloudflare Pages will install dependencies from `package-lock.json`, run the build command, and publish `dist/`.

## Project structure

```text
public/assets/          Static media copied into the production build
components/ui/          Reusable motion/visual components
src/App.tsx             Landing page sections
src/main.tsx            React entry point
src/styles.css          Tailwind and global styles
vite.config.ts          Vite + React config
```

## Notes

- Generated folders such as `dist/`, `.vite/`, and `node_modules/` are intentionally ignored.
- Media lives in `public/assets/` because Vite copies `public/` into `dist/` for static hosting.
- macOS metadata and TypeScript build cache files are intentionally excluded.
