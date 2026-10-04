# VMZ Official BBS (Cloudflare Workers)

Official VMZ BBS deployment using:

- `@vmz/bbs` — domain contracts + D1 list/create API factory
- `@yydb/iris` — schema generate + `@yydb/iris/cloudflare` read plans on D1
- Wrangler + D1 migrations for durable storage

## Setup

```powershell
pnpm install
pnpm --filter vmz-official db:migrate:local
pnpm --filter vmz-official generate
pnpm --filter vmz-official dev
```

Replace `database_id` in `wrangler.toml` after `wrangler d1 create vmz-official`.

## Routes

| Path | Layer |
|------|-------|
| `GET /health` | `@vmz/bbs` |
| `GET/POST /api/categories` | `@vmz/bbs` D1 SQL |
| `GET/POST /api/topics` | `@vmz/bbs` D1 SQL |
| `GET /iris/categories` | Iris generated client + D1 read plans |
| `GET /iris/topics` | Iris generated client + D1 read plans |

Writes use `/api/*` until Iris D1 mutation path lands (Phase 4).
