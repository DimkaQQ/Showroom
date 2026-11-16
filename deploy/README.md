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

## Domains

The site and all twelve demos run on `dimkaprojects.xyz` (demos on `<name>.dimkaprojects.xyz`; DNS has a wildcard
record pointing at the server). `bot.dimkaprojects.xyz` is BotFactory. Other projects (for example
`sklad.dimkaprojects.xyz` from the Storage repo) add their own file to `/etc/caddy/sites/`, which the Caddyfile
imports, so this deploy never drops them. To add a demo: put it in `demos/<name>/`, add it to `lib/data.ts` and add
a `<name>.dimkaprojects.xyz { import demo <name> }` block to the Caddyfile.

The server must build the branch this file is on: check `git branch --show-current` in `/opt/docker/showroom`
before deploying, because `deploy.sh` pulls whatever branch is checked out.
