# VMZ Official BBS (Cloudflare Workers)

Official VMZ BBS deployment:

- `@vmz/bbs` — HTTP routes over an Iris-generated `Database` client (no application SQL)
- `@yydb/iris` — `schemas/bbs.iris` → generate → `@yydb/iris/cloudflare` D1 physical plans
- Wrangler D1 — durable storage binding (`migrations/` holds DDL bootstrap aligned with Iris schema)

## Setup

```powershell
pnpm install
pnpm generate:official
pnpm --filter vmz-official db:migrate:local
pnpm dev:official
```

Replace `database_id` in `wrangler.toml` after `wrangler d1 create vmz-official`.

## Routes (all Iris `OperationExecutor`)

| Path | Operation |
|------|-----------|
| `GET /health` | `category.findMany` probe |
| `GET /api/categories` | `category.findMany` |
| `POST /api/categories` | `category.create` |
| `GET /api/topics` | `topic.findMany` |
| `POST /api/topics` | `topic.create` |

D1 **writes** return Iris diagnostics until mutation physical plans ship in `@yydb/iris/cloudflare`.
