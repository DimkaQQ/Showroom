#!/usr/bin/env python3
"""Builds the self-contained design variants from the templates.
Usage: python3 design/build.py <data.json>   (data.json: EN site content exported from lib/*.ts)"""
import base64, json, sys, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
data = json.load(open(sys.argv[1], encoding="utf8"))
for p in data["projects"]:
    raw = (root / "public" / "shots" / f"{p['id']}.webp").read_bytes()
    p["shot"] = "data:image/webp;base64," + base64.b64encode(raw).decode()
blob = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")
for name in ("a", "b"):
    t = root / "design" / f"variant-{name}.template.html"
    if not t.exists():
        continue
    out = root / "design" / f"variant-{name}.html"
    out.write_text(t.read_text(encoding="utf8").replace("/*DATA*/", blob), encoding="utf8")
    print(out, round(out.stat().st_size / 1024), "KB")
