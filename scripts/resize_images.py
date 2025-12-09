from PIL import Image
import os

src = os.path.join(os.path.dirname(__file__), '..', 'assets', 'hero-bg.jpg')
out_dir = os.path.join(os.path.dirname(__file__), '..', 'assets')

sizes = [480, 768, 1200]

if not os.path.exists(src):
    print('Source image not found:', src)
    raise SystemExit(1)

img = Image.open(src)
for w in sizes:
    ratio = w / float(img.width)
    h = int(img.height * ratio)
    resized = img.resize((w, h), Image.LANCZOS)
    out_path = os.path.join(out_dir, f'hero-bg-{w}.jpg')
    resized.save(out_path, format='JPEG', quality=85, optimize=True)
    print('Wrote', out_path)
print('Done')
