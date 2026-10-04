import { createBbsApp } from "@vmz/bbs";
import { createIrisOperationExecutor } from "@yydb/iris/cloudflare";
import { Hono } from "hono";

import { Database } from "./generated/iris/cloudflare.js";

const bbs = createBbsApp();

/** Iris D1 read routes (build-time plans from `pnpm generate`). */
const iris = new Hono<{ Bindings: Env }>();

iris.get("/iris/categories", async (c) => {
    const db = await Database.create({ d1: c.env.DB });
    try {
        const rows = await db.category.findMany();
        return c.json(rows);
    } finally {
        await db.$close();
    }
});

iris.get("/iris/topics", async (c) => {
    const db = await Database.create({ d1: c.env.DB });
    try {
        const rows = await db.topic.findMany();
        return c.json(rows);
    } finally {
        await db.$close();
    }
});

iris.get("/iris/health", async (c) => {
    const executor = await createIrisOperationExecutor({ d1: c.env.DB });
    await executor.close();
    return c.json({ ok: true, iris: "cloudflare-d1" });
});

const app = new Hono<{ Bindings: Env }>();
app.route("/", bbs);
app.route("/", iris);

export default app;
