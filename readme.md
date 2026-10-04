# VMZ BBS

Monorepo for `@vmz/bbs` (library) and `vmz-official` (full-stack Cloudflare BBS).

## Packages

| Path | Role |
|------|------|
| `projects/vmz-bbs` | **`@vmz/bbs`** — Iris API factory (`createBbsApp`) |
| `projects/vmz-official` | **Full-stack** — VMZ Pages UI + Worker API on D1 |

User workflow: **install** (`create-bbs`) → **update** (`update-bbs`). Agent skills: `.agents/skills/`.

## vmz-official (two artifacts)

| Artifact | Build | Output |
|----------|-------|--------|
| **Pages** (VMZ UI) | `pnpm build:official:pages` | `dist/pages` |
| **Worker** (Iris API) | `pnpm build:official:worker` | Wrangler bundle |

```powershell
pnpm install
pnpm generate:official
pnpm push:official:plan && pnpm push:official
pnpm dev:official          # http://127.0.0.1:8787 — VMZ UI + API
```
