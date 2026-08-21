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
- Hero video may fall back to the Unsplash poster/image on slow networks or blocked media (`#hero-media.is-fallback`) — that is intentional.
- WhatsApp number and social URLs are placeholders in `js/main.js` (`CONFIG`). Update before production demos that message a real phone.
- Tailwind Play CDN needs `'unsafe-eval'` in CSP (already set in `netlify.toml`).
- Canonical domain in SEO files is `https://clubpadelsabor.com` — replace when the DonDominio domain is final.
- Do not add an SPA catch-all rewrite to `index.html`; this is a multi-page site and unknown routes must serve `404.html`.

### Standard commands

See `README.md` and `package.json` scripts (`dev` / `start`).
