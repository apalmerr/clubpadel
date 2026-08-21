# AGENTS.md

## Project overview

Static multi-page site for **Club Pádel Sabor** (padel club bar/restaurant). No framework build: HTML + Tailwind CDN + vanilla JS. Deploy target: Netlify + custom domain.

## Cursor Cloud specific instructions

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Static site (dev) | `npm run dev` | `5173` | Serves repo root via `npx serve`. Prefer this over `netlify dev` unless you need redirects/headers locally. |

There is no backend, database, or auth. No secrets are required for local browsing.

### Lint / test / build

- No ESLint/Prettier/test suite is configured yet.
- “Build” is a no-op: Netlify publish directory is `.` (see `netlify.toml`).
- Sanity-check: open `/`, `/carta.html`, switch ES→EN, filter menu tabs, open a gallery modal, hit a fake path to confirm `404.html`.

### Gotchas

- Language preference and cookie consent live in `localStorage` (`cps_lang`, `cps_cookie_consent`). Clear site storage to re-test the cookie banner.
- Hero uses a local padel-court photo at `assets/images/hero-padel.jpg` (no video). Instagram CTAs use `CONFIG.instagram` in `js/main.js`.
- WhatsApp number and social URLs are placeholders in `js/main.js` (`CONFIG`). Update before production demos that message a real phone.
- Netlify build runs `npm run build:css`. Local: `npm run build:css` then `npm run dev`.
- Prefer WebP under `assets/images/` (JPEG fallbacks exist). Re-optimize with Pillow/`cwebp` if replacing photos; keep hero ≤ ~150KB WebP when possible.
- Location is **Palma de Mallorca** (Carrer d'Andalusia, Ponent, 07013). Canonical domain placeholder is `https://clubpadelsabor.com`. CSS is built with `npm run build:css` (Tailwind CLI); do not reintroduce the Tailwind CDN.
- Do not add an SPA catch-all rewrite to `index.html`; this is a multi-page site and unknown routes must serve `404.html`.

### Standard commands

See `README.md` and `package.json` scripts (`dev` / `start`).
