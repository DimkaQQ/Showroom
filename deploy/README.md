# Deploy

On the server:

```bash
cd /opt/docker/showroom && git pull && ./deploy/deploy.sh
```

The first `git pull` makes sure the latest `deploy.sh` is the one that runs; the script then pulls again
(`--ff-only`), installs dependencies, builds, validates the Caddyfile and switches `/var/www/mirelli/current`
to a new release. The live site only changes in the last steps, so a failed build leaves the current version
untouched. The contact endpoint is reloaded with pm2 and needs `server/contact/.env` once. The last five
releases are kept in `/var/www/mirelli/releases`; to roll back, point `current` at an older one and
`sudo systemctl reload caddy`.
