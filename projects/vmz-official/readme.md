# VMZ Official BBS (Cloudflare Workers)

Official VMZ BBS deployment:

- `@vmz/bbs` — HTTP routes over an Iris-generated `Database` client (no application SQL)
- `@yydb/iris` — `schemas/bbs.iris` → generate → `@yydb/iris/cloudflare` D1 physical plans
- Wrangler D1 — durable storage binding at runtime (schema via Iris `managed_push`, not ordered SQL migrations)

## Schema workflow (Iris canonical)

```text
edit schemas/ → iris check → iris generate → commit generated/
             → push:plan   → push          # human ops only, never CI
```

| Step            | Command                  | Notes                                                |
|-----------------|--------------------------|------------------------------------------------------|
| Author          | Edit `schemas/**/*.iris` | Single source of truth                               |
| Generate client | `pnpm generate`          | Writes `src/generated/iris`                          |
| Plan DDL drift  | `pnpm push:plan`         | Writes `.cache/iris/migrations/default-plan.von`     |
| Apply + verify  | `pnpm push`              | Applies to `.local/official.sqlite` (`managed_push`) |

Do **not** use `wrangler d1 migrations` or versioned `migrations/*.sql` folders. Ordered migration tables do not scale
in multi-team repos; Iris uses drift-based `managed_push` instead.

D1 (local Wrangler dev / remote deploy): Iris D1 `managed_push` is not shipped yet. Until it is, treat D1 schema
alignment as a separate human-gated step from the reviewed push plan — not CI, not deploy hooks, and not a migrations
directory.

## Setup

```powershell
pnpm install
pnpm generate:official
pnpm --filter vmz-official push:plan
pnpm --filter vmz-official push
pnpm dev:official
```

Replace `database_id` in `wrangler.toml` after `wrangler d1 create vmz-official`.

## Routes (all Iris `OperationExecutor`)

| Path                   | Operation                 |
|------------------------|---------------------------|
| `GET /health`          | `category.findMany` probe |
| `GET /api/categories`  | `category.findMany`       |
| `POST /api/categories` | `category.create`         |
| `GET /api/topics`      | `topic.findMany`          |
| `POST /api/topics`     | `topic.create`            |

D1 **writes** return Iris diagnostics until mutation physical plans ship in `@yydb/iris/cloudflare`.
