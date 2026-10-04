# VMZ BBS

Monorepo for the VMZ forum stack: legacy Echo (Rust + Vue) and the Cloudflare BBS path (`@vmz/bbs` + Iris on D1).

## Packages

| Path | Role |
|------|------|
| `projects/echo-frontend` | Legacy Vue UI (`pnpm dev`) |
| `projects/echo-backend` | Legacy Rust/Dioxus backend |
| `projects/vmz-bbs` | **`@vmz/bbs`** — domain contracts + Hono app factory over Iris `Database` |
| `projects/vmz-official` | Official BBS Worker — Iris generate + `@yydb/iris/cloudflare` on D1 |

`@yydb/iris` is linked from the sibling `iris-orm` repo via `pnpm-workspace.yaml`.

## Cloudflare official BBS

```powershell
pnpm install
pnpm generate:official
pnpm --filter vmz-official push:plan
pnpm --filter vmz-official push
pnpm dev:official
```

Worker default: **http://127.0.0.1:8788**

All `/api/*` routes use the generated Iris client (`Database.create` → `OperationExecutor` → D1 read plans). No hand-written query SQL in `@vmz/bbs`.

### Deploy

1. `wrangler d1 create vmz-official` and set `database_id` in `projects/vmz-official/wrangler.toml`
2. Review `push:plan` output, then `pnpm --filter vmz-official push` (human ops — align D1 separately until Iris D1 push ships)
3. `pnpm deploy:official`

## Legacy Echo (local)

```shell
cargo install dioxus-cli --force
dx serve --platform web --package echo-backend
```

Frontend: `pnpm dev` (Vite on port 5173).
