---
name: create-bbs
description: >-
  Install a new VMZ BBS site: deploy template, pnpm install, D1, iris generate,
  iris push, VMZ Pages build + Worker build, Cloudflare CI. Use when creating
  a BBS. Ongoing changes use update-bbs.
---

# create-bbs (install)

Full-stack: **VMZ Pages** (`vmz build` → UI) + **Worker** (Iris API on D1).

npm: `@vmz/bbs`, `@yydb/iris`, `@vmz/vmz`, `@vmz/core`.

```bash
pnpm install
wrangler d1 create <site-name>
pnpm generate && pnpm push:plan && pnpm push
pnpm build:pages    # vmz build → dist/pages
pnpm build:worker
git push            # CF CI
```

UI is **`.vmz` pages**, not Vue. Homepage is the Pages artifact.

After install → `update-bbs`.
