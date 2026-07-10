"""
Optimiert alle Bilder in images_original/ für Web-Nutzung.
- Verkleinert auf max. LONG_EDGE px an der langen Kante
- Konvertiert .JPG → .jpg (lowercase, wegen GitHub Pages case-sensitivity)
- Speichert als optimiertes JPEG in images/
- Erzeugt zusätzlich WebP-Versionen
"""

from pathlib import Path
from PIL import Image, ImageOps

SRC_DIR       = Path("images_original")
DST_DIR       = Path("images")
LONG_EDGE     = 1800
JPEG_QUALITY  = 82
WEBP_QUALITY  = 80
CREATE_WEBP   = True


def optimize(src: Path, dst_dir: Path):
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode != "RGB":
            im = im.convert("RGB")
        im.thumbnail((LONG_EDGE, LONG_EDGE), Image.LANCZOS)

        stem = src.stem.lower()
        jpg_path  = dst_dir / f"{stem}.jpg"
        webp_path = dst_dir / f"{stem}.webp"

        im.save(jpg_path, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        print(f"  ✓ {jpg_path.name:35}  {jpg_path.stat().st_size // 1024:>5} KB")

        if CREATE_WEBP:
            im.save(webp_path, "WEBP", quality=WEBP_QUALITY, method=6)
            print(f"  ✓ {webp_path.name:35}  {webp_path.stat().st_size // 1024:>5} KB")


def main():
    if not SRC_DIR.exists():
        print(f"[!] Ordner '{SRC_DIR}' nicht gefunden.")
        return

    DST_DIR.mkdir(exist_ok=True)

    files = sorted(
        f for f in SRC_DIR.iterdir()
        if f.suffix.lower() in {".jpg", ".jpeg", ".png"}
    )

    if not files:
        print(f"[!] Keine Bilder in '{SRC_DIR}' gefunden.")
        return

    total_before = sum(f.stat().st_size for f in files)
    print(f"-> Verarbeite {len(files)} Bilder aus '{SRC_DIR}/'\n")

    for f in files:
        print(f"{f.name}")
        optimize(f, DST_DIR)

    total_after = sum(f.stat().st_size for f in DST_DIR.iterdir())
    saved = 100 * (1 - total_after / total_before)
    print(f"\n[OK] Fertig. {total_before // 1024 // 1024} MB -> {total_after // 1024 // 1024} MB ({saved:.0f}% kleiner)")


if __name__ == "__main__":
    main()