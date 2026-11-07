#!/usr/bin/env bash
# Build the site and switch Caddy to the new release atomically.
# Run on the server from /opt/docker/showroom. The live site only changes at the last two steps,
# so a failed build or an invalid Caddyfile leaves the current version untouched.
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT=/var/www/mirelli

git pull --ff-only
npm ci --no-audit --no-fund --ignore-scripts
npm run build
# Next also writes RSC payloads and a default 404 page that are never served.
find out -name 'index.txt' -delete
rm -rf out/404 out/404.html

caddy validate --config deploy/Caddyfile --adapter caddyfile

rel="$ROOT/releases/$(date +%Y%m%d-%H%M%S)-$(git rev-parse --short HEAD)"
mkdir -p "$rel"
cp -a out "$rel/site"
cp -a demos "$rel/demos"
sudo install -m 644 deploy/Caddyfile /etc/caddy/Caddyfile
ln -sfn "$rel" "$ROOT/current"
sudo systemctl reload caddy

# Contact form endpoint (needs server/contact/.env once; without it the form shows the email fallback).
pm2 startOrReload deploy/ecosystem.config.cjs --update-env
pm2 save >/dev/null

# Tell search engines about the new pages (never fails the deploy).
node tools/indexnow.mjs || true
ls -1dt "$ROOT"/releases/* | tail -n +6 | xargs -r rm -rf
echo "deployed $rel"
