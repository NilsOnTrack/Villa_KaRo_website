"""
Konvertiert images_original/logo.jpg zu images/logo.png mit transparentem Hintergrund.
Weisse Pixel (heller als THRESHOLD) werden transparent.
Zusaetzlich: sanftes Anti-Aliasing an den Kanten via Grauwert-Alpha.
"""
from pathlib import Path
from PIL import Image

SCRIPT_DIR = Path(__file__).parent
SRC        = SCRIPT_DIR / "images_original" / "logo.jpg"
DST        = SCRIPT_DIR / "images" / "logo.png"

# Alles heller als WHITE_CUTOFF = komplett transparent
# Alles zwischen BLACK_CUTOFF und WHITE_CUTOFF = teilweise transparent (Anti-Aliasing)
# Alles dunkler als BLACK_CUTOFF = komplett sichtbar
WHITE_CUTOFF = 240
BLACK_CUTOFF = 60


def brightness(r: int, g: int, b: int) -> int:
    # Standard-Luminanz-Gewichtung
    return int(0.299 * r + 0.587 * g + 0.114 * b)


def main():
    if not SRC.exists():
        print(f"[!] {SRC} nicht gefunden.")
        print(f"    Lege dein Logo als 'logo.jpg' in 'images_original/' ab und starte erneut.")
        return

    DST.parent.mkdir(exist_ok=True)

    with Image.open(SRC) as im:
        im = im.convert("RGBA")
        data = im.getdata()
        new_data = []
        for pixel in data:
            r, g, b, _ = pixel
            lum = brightness(r, g, b)
            if lum >= WHITE_CUTOFF:
                new_data.append((0, 0, 0, 0))                    # ganz transparent
            elif lum <= BLACK_CUTOFF:
                new_data.append((r, g, b, 255))                  # ganz sichtbar
            else:
                # Uebergangsbereich: linear zwischen sichtbar und transparent
                alpha = int(255 * (WHITE_CUTOFF - lum) / (WHITE_CUTOFF - BLACK_CUTOFF))
                new_data.append((r, g, b, alpha))
        im.putdata(new_data)
        im.save(DST, "PNG")

    kb = DST.stat().st_size // 1024
    print(f"[OK] {DST}  ({kb} KB)")


if __name__ == "__main__":
    main()