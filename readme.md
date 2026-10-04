# VMZ BBS

Monorepo for the VMZ forum stack: legacy Echo (Rust + Vue) and the Cloudflare BBS path (`@vmz/bbs` + Iris on D1).

## Packages

| Path | Role |
|------|------|
| `projects/echo-frontend` | Legacy Vue UI (`pnpm dev`) |
| `projects/echo-backend` | Legacy Rust/Dioxus backend |
| `projects/vmz-bbs` | **`@vmz/bbs`** — domain types, D1 accessors, Hono API factory |
| `projects/vmz-official` | Official BBS Worker — `@vmz/bbs` + `@yydb/iris/cloudflare` on D1 |

`@yydb/iris` is linked from the sibling `iris-orm` repo via `pnpm-workspace.yaml`.

## Cloudflare official BBS

```powershell
pnpm install
pnpm generate:official
pnpm --filter vmz-official db:migrate:local
pnpm dev:official
```

Worker default: **http://127.0.0.1:8788**

| Route | Layer |
|-------|-------|
| `GET /health` | `@vmz/bbs` |
| `GET/POST /api/categories` | `@vmz/bbs` D1 SQL |
| `GET/POST /api/topics` | `@vmz/bbs` D1 SQL |
| `GET /iris/categories` | Iris generated client + D1 read plans |
| `GET /iris/topics` | Iris generated client + D1 read plans |

### Deploy

1. `wrangler d1 create vmz-official` and set `database_id` in `projects/vmz-official/wrangler.toml`
2. `pnpm --filter vmz-official db:migrate:remote`
3. `pnpm deploy:official`

Writes use `/api/*` until Iris D1 mutation path ships.

## Legacy Echo (local)

```shell
cargo install dioxus-cli --force
dx serve --platform web --package echo-backend
```

Frontend: `pnpm dev` (Vite on port 5173).
