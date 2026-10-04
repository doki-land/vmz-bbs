---
name: update-bbs
description: >-
  Update a VMZ BBS site: bump packages, iris generate, iris push, vmz build
  (Pages) + worker build, git push, Cloudflare CI.
---

# update-bbs

```bash
pnpm add @vmz/bbs@latest @yydb/iris@latest @vmz/vmz@latest @vmz/core@latest
pnpm install
pnpm generate
pnpm push:plan && pnpm push
pnpm build:pages
pnpm build:worker
git push
```

Rebuild **both** VMZ Pages and Worker when UI or API changed.

New site → `create-bbs`.
