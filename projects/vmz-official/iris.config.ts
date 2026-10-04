import { defineConfig } from "@yydb/iris/types";

/**
 * VMZ official BBS — Iris generate for Cloudflare D1 read plans.
 *
 * Worker runtime uses `@yydb/iris/cloudflare` (via generated `cloudflare.ts`).
 * Schema truth: schemas under `schemas/` + `managed_push` on `.local/official.sqlite`.
 * Apply DDL with `pnpm push:plan` then `pnpm push` (human ops only, never CI).
 * D1 binding is runtime storage; Iris D1 managed_push is not shipped yet.
 */
export default defineConfig({
    schema: "schemas/**/*.iris",
    datasources: {
        default: {
            kind: "sqlite",
            mode: "managed_push",
            path: ".local/official.sqlite",
        },
    },
    generate: {
        out: "src/generated/iris",
        target: "typescript",
    },
});
