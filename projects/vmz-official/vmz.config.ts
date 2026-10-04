import { defineConfig } from "@vmz/vmz";

/** Cloudflare Pages static artifact — `vmz build` → `dist/pages`. */
export default defineConfig({
    delivery: {
        default: "static",
        profiles: {
            static: {
                host: "browser",
                assembly: "web-static",
                name: "pages",
            },
        },
    },
});
