import { Hono } from "hono";

import { createCategory, listCategories } from "../d1/category.ts";
import { createTopic, listTopics } from "../d1/topic.ts";
import type { BbsBindings, CategoryCreateInput, TopicCreateInput } from "../types.ts";

/** Compose the official VMZ BBS HTTP API (D1-backed list/create routes). */
export function createBbsApp() {
    const app = new Hono<{ Bindings: BbsBindings }>();

    app.get("/health", async (c) => {
        const probe = await c.env.DB.prepare("SELECT 1 AS ok").first<{ ok: number }>();
        return c.json({
            ok: true,
            service: "vmz-official",
            d1: probe?.ok === 1,
        });
    });

    app.get("/api/categories", async (c) => {
        return c.json(await listCategories(c.env.DB));
    });

    app.post("/api/categories", async (c) => {
        const body = await c.req.json<CategoryCreateInput>();
        if (!body.link?.trim() || !body.name?.trim()) {
            return c.json({ error: "link and name are required" }, 400);
        }
        const row = await createCategory(c.env.DB, {
            link: body.link.trim(),
            name: body.name.trim(),
            description: body.description?.trim(),
            color: body.color?.trim(),
        });
        return c.json(row, 201);
    });

    app.get("/api/topics", async (c) => {
        return c.json(await listTopics(c.env.DB));
    });

    app.post("/api/topics", async (c) => {
        const body = await c.req.json<TopicCreateInput>();
        if (!body.link?.trim() || !body.name?.trim()) {
            return c.json({ error: "link and name are required" }, 400);
        }
        const row = await createTopic(c.env.DB, {
            link: body.link.trim(),
            name: body.name.trim(),
            description: body.description?.trim(),
            color: body.color?.trim(),
        });
        return c.json(row, 201);
    });

    return app;
}
