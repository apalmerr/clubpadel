# Club Pádel Sabor

Sitio web estático del bar/restaurante **Club Pádel Sabor** (Palma de Mallorca, Ponent): landing + carta digital QR, multi-idioma (ES / CA / EN / DE), optimizado para GitHub + Netlify y dominio DonDominio.

## Stack

- HTML semántico + Tailwind CSS (CLI build → `css/styles.css`)
- JavaScript vanilla (`js/i18n.js`, `js/main.js`, `js/menu-data.js`)
- Build CSS: `npm run build:css` (también en Netlify)
- Despliegue: Netlify (`netlify.toml`)

## Desarrollo local

```bash
npm install
npm run build:css   # genera css/styles.css
npm run dev         # → http://localhost:5173
```

O con Python: `python3 -m http.server 5173`

## Páginas

| Ruta | Uso |
|------|-----|
| `/` | Landing (hero vídeo, experiencia, galería, horarios, mapa) |
| `/carta.html` | Carta digital para QR de mesas |
| `/404.html` | Error personalizado Netlify |
| `/privacidad.html` | Política de privacidad (RGPD) |
| `/cookies.html` | Política de cookies |
| `/aviso-legal.html` | Aviso legal (LSSI) |

## Configuración rápida antes de producción

1. Sustituye el número de WhatsApp en `js/main.js` (`CONFIG.whatsapp`).
2. Actualiza Instagram (`js/main.js` → `CONFIG.instagram`), TikTok, WhatsApp y emails legales. Dirección ya apunta a Carrer d'Andalusia, Ponent, 07013 Palma.
3. Cambia `https://clubpadelsabor.com` en canonical, `sitemap.xml`, `robots.txt` y JSON-LD al dominio real de DonDominio.
4. Completa CIF/NIF y razón social en las páginas legales.

## Despliegue Netlify + DonDominio

1. Conecta el repo de GitHub en Netlify (publish directory = `.`).
2. En DonDominio, apunta el dominio con registros que indique Netlify (DNS / CNAME / A).
3. En Netlify → Domain management, añade el dominio personalizado y activa HTTPS.

## QR de la carta

Archivos listos para mesas:

| Archivo | Uso |
|---------|-----|
| `/qr.html` | Página para ver / imprimir el cartel |
| `assets/qr/carta-qr-mesa.png` | Cartel completo (imprimir) |
| `assets/qr/carta-qr.png` | Solo el código QR |
| `scripts/generate-qr.py` | Regenerar con tu dominio real |

```bash
python3 scripts/generate-qr.py https://tu-dominio.com/carta.html
```

Por defecto el QR apunta a `https://clubpadelsabor.com/carta.html` (cámbialo al dominio de DonDominio/Netlify).

## Cómo subir esto a GitHub

El código de esta web **ya está en GitHub** en el repositorio `apalmerr/clubpadel`, rama `cursor/club-padel-sabor-web-d29d`, con el pull request [#1](https://github.com/apalmerr/clubpadel/pull/1).

### Opción A — Fusionar el PR (recomendado)

1. Entra en https://github.com/apalmerr/clubpadel/pull/1  
2. Revisa los cambios.  
3. Pulsa **Merge pull request** → **Confirm merge**.  
4. La rama `main` quedará con toda la web.

### Opción B — Desde tu ordenador (si clonas el repo)

```bash
git clone https://github.com/apalmerr/clubpadel.git
cd clubpadel
git checkout cursor/club-padel-sabor-web-d29d   # o main tras el merge
# si haces cambios locales:
git add .
git commit -m "Tu mensaje"
git push origin cursor/club-padel-sabor-web-d29d
```

No hace falta “subir zip” a mano: con `git push` los archivos van al remoto.

### Después: Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project** → GitHub → `clubpadel`.  
2. Build command: `npm run build:css` · Publish directory: `.` (ya está en `netlify.toml`).  
3. En DonDominio, apunta el dominio (CNAME/A según indique Netlify) y activa HTTPS.

## Rendimiento

- CSS compilado y minificado (`npm run build:css`); sin Tailwind CDN.
- Imágenes locales en **WebP** (+ JPEG de respaldo), hero precargado.
- Fuentes Google con carga no bloqueante y pesos reducidos.
- Scripts con `defer`; galería y platos con `loading="lazy"`.
- Caché larga de assets en Netlify (`netlify.toml`).

Para medir: PageSpeed Insights / Lighthouse sobre el deploy de Netlify.

## Licencia

Código del proyecto para uso del Club Pádel Sabor. Imágenes de terceros: Unsplash y Wikimedia Commons (ver `assets/images/ATTRIBUTION.txt`).
