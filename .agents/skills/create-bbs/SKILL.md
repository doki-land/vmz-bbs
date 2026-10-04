---
name: create-bbs
description: >-
  Install a new VMZ BBS site: deploy template, pnpm install, D1, iris generate,
  iris push, first Cloudflare CI deploy. Use when creating or first-time
  installing a BBS. Ongoing changes use update-bbs.
---

# create-bbs (install)

First-time install. Dependencies: published `@vmz/bbs` and `@yydb/iris` from npm.

## Install

```bash
# 1. Site repo from deploy template
gh repo create <site> --template <vmz-official-template>
git clone <your-site-repo> && cd <your-site-repo>

# 2. Dependencies
pnpm install

# 3. D1
wrangler d1 create <site-name>   # set database_id in wrangler.toml — no migrations_dir

# 4. Iris
pnpm generate
pnpm push:plan                   # 人工审阅 plan
pnpm push

# 5. Smoke
pnpm dev                         # GET /health

# 6. Go live
git push                         # wait for Cloudflare CI
```

## Rules

- npm `@vmz/bbs` + `@yydb/iris` only — no monorepo, no `workspace:*`
- `createBbsApp` + generated `Database` — no application SQL
- `iris push` is human ops only — never CI, never `migrations/*.sql`

## After install

Upgrades → `update-bbs`.
