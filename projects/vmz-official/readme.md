# VMZ Official BBS (full-stack)

One project, **two Cloudflare artifacts**:

| Artifact | Stack | Build | Deploy |
|----------|-------|-------|--------|
| **Pages** (UI) | **VMZ** `web-static` | `pnpm build:pages` → `dist/pages` | `pnpm deploy:pages` |
| **Worker** (API) | Iris + `@vmz/bbs` | `pnpm build:worker` | `pnpm deploy:worker` |

- `src/pages/*.vmz` — VMZ UI (not Vue)
- `src/worker.ts` — Iris API on D1
- D1 — `vmz-bbs-db` in `wrangler.toml`

## Local dev

```powershell
pnpm install
pnpm generate && pnpm push:plan && pnpm push

pnpm dev          # build:pages + wrangler dev → http://127.0.0.1:8787 (UI + API)
pnpm dev:pages    # vmz dev only (UI hot reload, separate port)
```

Production: route `/` → Pages, `/api/*` + `/health` → Worker.

## Schema

`iris push --plan` → review → `push` (human ops only). No `migrations/*.sql`.
