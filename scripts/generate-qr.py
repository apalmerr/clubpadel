#!/usr/bin/env python3
"""Generate QR codes for the digital menu (carta).

Usage:
  python3 scripts/generate-qr.py
  python3 scripts/generate-qr.py https://tu-dominio.com/carta.html

Requires: pip install 'qrcode[pil]'
"""
from __future__ import annotations

import sys
from pathlib import Path

import qrcode
from PIL import Image, ImageDraw, ImageFont
from qrcode.constants import ERROR_CORRECT_H

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "qr"
DEFAULT_URL = "https://clubpadelsabor.com/carta.html"


def load_font(size: int) -> ImageFont.ImageFont:
    for path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    ):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def make_qr(url: str) -> Image.Image:
    qr = qrcode.QRCode(error_correction=ERROR_CORRECT_H, box_size=20, border=4)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#0f172a", back_color="white").convert("RGB")
    if img.width < 1200:
        img = img.resize((1200, 1200), Image.Resampling.NEAREST)
    return img


def make_table_card(qr_img: Image.Image, url: str) -> Image.Image:
    W = 1600
    card = Image.new("RGB", (W, W), "#0f172a")
    draw = ImageDraw.Draw(card)
    draw.rectangle([0, 0, W, 28], fill="#a3e635")
    draw.rectangle([0, W - 28, W, W], fill="#a3e635")

    qr_size = 980
    qr_big = qr_img.resize((qr_size, qr_size), Image.Resampling.NEAREST)
    qx = (W - qr_size) // 2
    qy = 280
    draw.rectangle([qx - 36, qy - 36, qx + qr_size + 36, qy + qr_size + 36], fill="#FFFFFF")
    card.paste(qr_big, (qx, qy))

    f_title, f_sub, f_url = load_font(64), load_font(36), load_font(28)

    def center_text(text: str, font: ImageFont.ImageFont, y: int, fill: str) -> None:
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        draw.text(((W - tw) / 2, y), text, font=font, fill=fill)

    host = url.replace("https://", "").replace("http://", "")
    center_text("Club Pádel Sabor", f_title, 70, "#FFFFFF")
    center_text("Escanea la carta digital", f_sub, 155, "#a3e635")
    center_text("Palma · Ponent", f_sub, 210, "#7dd3fc")
    center_text(host, f_url, qy + qr_size + 60, "#94a3b8")
    center_text("Wi‑Fi del club · sin app", f_url, qy + qr_size + 105, "#64748b")
    return card


def main() -> None:
    url = (sys.argv[1] if len(sys.argv) > 1 else DEFAULT_URL).strip()
    OUT.mkdir(parents=True, exist_ok=True)
    qr_img = make_qr(url)
    qr_img.save(OUT / "carta-qr.png", "PNG", optimize=True)
    qr_img.save(OUT / "carta-qr.webp", "WEBP", quality=90)

    card = make_table_card(qr_img, url)
    card.save(OUT / "carta-qr-mesa.png", "PNG", optimize=True)
    card.resize((800, 800), Image.Resampling.LANCZOS).save(
        OUT / "carta-qr-mesa.webp", "WEBP", quality=82
    )
    print(f"QR → {url}")
    print(f"Saved in {OUT}")


if __name__ == "__main__":
    main()
