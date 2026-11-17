#!/usr/bin/env python3
"""Builds favicon.ico and the animated logo GIFs. Run after tools/brand.mjs.
Usage: python3 tools/brand.py   (needs Pillow; frames are rendered by Playwright through tools/brand-anim.mjs)"""
import glob, os, sys, tempfile
from PIL import Image

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
pub = os.path.join(root, "public")

# favicon.ico with 16, 32 and 48 px images, made from the 512 px icon
base = Image.open(os.path.join(pub, "icon-512.png")).convert("RGBA")
base.save(os.path.join(pub, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])
print("public/favicon.ico")

# animated logo from frames written by brand-anim.mjs
frames_dir = os.path.join(tempfile.gettempdir(), "mirelli-brand", "frames")
files = sorted(glob.glob(os.path.join(frames_dir, "f*.png")))
if not files:
    sys.exit("No frames found. Run: node tools/brand-anim.mjs")
imgs = [Image.open(f).convert("RGB") for f in files]
durations = [40] * len(imgs)
durations[0] = 900  # the finished logo is the first frame and holds for a moment


def save(size, name):
    out = [im.resize((size, size), Image.LANCZOS).quantize(colors=48, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE) for im in imgs]
    path = os.path.join(pub, "brand", name)
    out[0].save(path, save_all=True, append_images=out[1:], duration=durations, loop=0, optimize=True, disposal=1)
    print("public/brand/" + name, os.path.getsize(path) // 1024, "KB")


save(512, "logo-animated-512.gif")
save(168, "signature-icon.gif")
