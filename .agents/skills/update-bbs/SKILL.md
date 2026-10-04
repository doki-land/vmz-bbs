---
name: update-bbs
description: >-
  Update an installed VMZ BBS site: bump @vmz/bbs and @yydb/iris, iris generate,
  iris push --plan, human review, iris push, git push, wait for Cloudflare CI.
  Use when upgrading BBS, bumping packages, or applying schema changes.
---

# update-bbs

For a site that is already installed (`create-bbs`).

## Update

```bash
pnpm add @vmz/bbs@latest @yydb/iris@latest
pnpm install
pnpm generate
pnpm push:plan                   # 人工审阅 plan
pnpm push
git push                         # wait for Cloudflare CI
```

```text
iris push --plan → 人工审阅 → iris push（漂移对齐，非有序 migration 链）
```

## Rules

- npm packages only — no monorepo checkout
- `iris push` human ops only — never CI, never `wrangler d1 migrations`
- Commit `src/generated/iris/` when `generate` changed it

## Verify

Live `/health` and API routes after Cloudflare CI is green.

## New site

`create-bbs` (install).
