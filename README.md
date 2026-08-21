# Club Pádel Sabor

Sitio web estático del bar/restaurante **Club Pádel Sabor**: landing + carta digital QR, multi-idioma (ES / CA / EN / DE), optimizado para GitHub + Netlify y dominio DonDominio.

## Stack

- HTML semántico + Tailwind CSS (CDN)
- JavaScript vanilla (`js/i18n.js`, `js/main.js`, `js/menu-data.js`)
- Sin backend ni build obligatorio
- Despliegue: Netlify (`netlify.toml`)

## Desarrollo local

```bash
npm run dev
# → http://localhost:5173
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
2. Actualiza Instagram / TikTok / dirección / mapa / emails legales.
3. Cambia `https://clubpadelsabor.com` en canonical, `sitemap.xml`, `robots.txt` y JSON-LD al dominio real de DonDominio.
4. Completa CIF/NIF y razón social en las páginas legales.

## Despliegue Netlify + DonDominio

1. Conecta el repo de GitHub en Netlify (publish directory = `.`).
2. En DonDominio, apunta el dominio con registros que indique Netlify (DNS / CNAME / A).
3. En Netlify → Domain management, añade el dominio personalizado y activa HTTPS.

## Licencia

Código del proyecto para uso del Club Pádel Sabor. Imágenes/vídeos de terceros bajo sus licencias (Unsplash, Coverr).
