import { defineConfig } from "@yydb/iris/types";

/**
 * VMZ official BBS — Iris generate for Cloudflare D1 read plans.
 *
 * Worker runtime uses `@yydb/iris/cloudflare` (via generated `cloudflare.ts`).
 * D1 migrations remain the durable write path until Iris D1 mutations ship.
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
