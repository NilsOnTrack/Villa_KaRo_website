"""
Optimiert alle Bilder in images_original/ (inkl. Unterordner) für Web-Nutzung.
- Verkleinert auf max. LONG_EDGE px an der langen Kante
- Konvertiert Endungen zu lowercase (wegen GitHub Pages case-sensitivity)
- Dateinamen bleiben unveraendert (nur klein geschrieben)
- Erzeugt sowohl JPEG (Fallback) als auch WebP (modern)
"""

from pathlib import Path
from PIL import Image, ImageOps

SCRIPT_DIR    = Path(__file__).parent
SRC_DIR       = SCRIPT_DIR / "images_original"
DST_DIR       = SCRIPT_DIR / "images"
LONG_EDGE     = 1800
JPEG_QUALITY  = 82
WEBP_QUALITY  = 80
CREATE_WEBP   = True


def collect_images(src_dir: Path):
    """Sammle alle Bilder rekursiv. Namen bleiben unveraendert (nur lowercase)."""
    results = []
    for path in src_dir.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
            continue
        results.append((path, path.stem.lower()))
    return sorted(results, key=lambda t: t[1])


def optimize(src: Path, out_stem: str, dst_dir: Path):
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode != "RGB":
            im = im.convert("RGB")
        im.thumbnail((LONG_EDGE, LONG_EDGE), Image.LANCZOS)

        jpg_path  = dst_dir / f"{out_stem}.jpg"
        webp_path = dst_dir / f"{out_stem}.webp"

        im.save(jpg_path, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        print(f"  [OK] {jpg_path.name:45}  {jpg_path.stat().st_size // 1024:>5} KB")

        if CREATE_WEBP:
            im.save(webp_path, "WEBP", quality=WEBP_QUALITY, method=6)
            print(f"  [OK] {webp_path.name:45}  {webp_path.stat().st_size // 1024:>5} KB")


def main():
    if not SRC_DIR.exists():
        print(f"[!] Ordner '{SRC_DIR}' nicht gefunden.")
        return

    DST_DIR.mkdir(exist_ok=True)
    entries = collect_images(SRC_DIR)

    if not entries:
        print(f"[!] Keine Bilder in '{SRC_DIR}' gefunden.")
        return

    total_before = sum(src.stat().st_size for src, _ in entries)
    print(f"-> Verarbeite {len(entries)} Bilder aus '{SRC_DIR}/' (inkl. Unterordner)\n")

    for src, stem in entries:
        rel = src.relative_to(SRC_DIR)
        print(f"{rel}")
        optimize(src, stem, DST_DIR)

    total_after = sum(f.stat().st_size for f in DST_DIR.iterdir())
    saved = 100 * (1 - total_after / total_before) if total_before else 0
    print(f"\n[OK] Fertig. {total_before // 1024 // 1024} MB -> {total_after // 1024 // 1024} MB ({saved:.0f}% kleiner)")


if __name__ == "__main__":
    main()