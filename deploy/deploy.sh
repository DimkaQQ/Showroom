#!/usr/bin/env bash
# Rebuild the static site and reload Caddy. Run on the server from /opt/docker/showroom.
set -euo pipefail
cd "$(dirname "$0")/.."
git pull --ff-only
npm ci --no-audit --no-fund
node tools/build-demos.mjs
npm run build
caddy validate --config deploy/Caddyfile --adapter caddyfile
sudo cp deploy/Caddyfile /etc/caddy/Caddyfile
sudo systemctl reload caddy
echo "deployed"
