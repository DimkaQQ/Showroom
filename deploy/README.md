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

## Moving to mirelli.eu

The site, the contact form and the nine demos now use `mirelli.eu` (demos on `<name>.mirelli.eu`). The old
`dimkaprojects.xyz` and its subdomains answer with a permanent (301) redirect to the new addresses, and
`bot.dimkaprojects.xyz` is left as it was. Do it in this order:

1. **DNS first.** At the domain registrar point these records at the server's IP (A, plus AAAA if the server has IPv6):
   `@`, `www`, and `dizeltrade`, `rentoworld`, `tradinglearn`, `shipter`, `storage`, `caspianflow`, `restaurant`,
   `hr`, `botfactory` (or one wildcard `*`). Wait until `dig mirelli.eu` shows the server IP. Caddy cannot get
   certificates before that.
2. **Contact form origin.** On the server edit `server/contact/.env` (it is not in git) and set
   `ALLOWED_ORIGINS=https://mirelli.eu,https://www.mirelli.eu,https://dimkaprojects.xyz`, otherwise the form is
   rejected on the new domain.
3. **Deploy:** `cd /opt/docker/showroom && git pull && ./deploy/deploy.sh`. The script validates the Caddyfile,
   switches the release and reloads Caddy, which then requests the new certificates by itself.
4. **Check:** open `https://mirelli.eu`, open one demo, send a test message through the form, and open
   `https://dimkaprojects.xyz` (it must land on `https://mirelli.eu/`).
5. **Search engines:** in Google Search Console add `mirelli.eu` and use "Change of address" from the old property.
   The deploy script already tells IndexNow about the new URLs.

Keep `dimkaprojects.xyz` renewed for a long time so links in sent e-mails keep working.
