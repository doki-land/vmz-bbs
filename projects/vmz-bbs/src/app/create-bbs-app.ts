import { Hono } from "hono";

import type { CategoryCreateBody, CreateBbsAppOptions, TopicCreateBody } from "../types.ts";

/**
 * Compose the VMZ BBS HTTP API backed exclusively by an Iris-generated client.
 *
 * No raw SQL — reads and writes route through `OperationExecutor` / D1 physical plans
 * supplied by the host (`vmz-official` generated `Database.create`).
 */
export function createBbsApp<TBindings extends object>(options: CreateBbsAppOptions<TBindings>) {
    const serviceName = options.serviceName ?? "vmz-bbs";
    const app = new Hono<{ Bindings: TBindings }>();

    app.get("/health", async (c) => {
        const db = await options.openDatabase(c.env);
        try {
            await db.category.findMany();
            return c.json({ ok: true, service: serviceName, iris: true });
        } finally {
            await db.$close();
        }
    });

    app.get("/api/categories", async (c) => {
        const db = await options.openDatabase(c.env);
        try {
            return c.json(await db.category.findMany());
        } finally {
            await db.$close();
        }
    });

    app.post("/api/categories", async (c) => {
        const body = await c.req.json<CategoryCreateBody>();
        if (!body.link?.trim() || !body.name?.trim()) {
            return c.json({ error: "link and name are required" }, 400);
        }
        const db = await options.openDatabase(c.env);
        try {
            const row = await db.category.create({
                data: {
                    categoryId: crypto.randomUUID(),
                    link: body.link.trim(),
                    name: body.name.trim(),
                    description: body.description?.trim() ?? "",
                    color: body.color?.trim() ?? "#999999",
                },
            });
            return c.json(row, 201);
        } finally {
            await db.$close();
        }
    });

    app.get("/api/topics", async (c) => {
        const db = await options.openDatabase(c.env);
        try {
            return c.json(await db.topic.findMany());
        } finally {
            await db.$close();
        }
    });

    app.post("/api/topics", async (c) => {
        const body = await c.req.json<TopicCreateBody>();
        if (!body.link?.trim() || !body.name?.trim()) {
            return c.json({ error: "link and name are required" }, 400);
        }
        const db = await options.openDatabase(c.env);
        try {
            const row = await db.topic.create({
                data: {
                    topicId: crypto.randomUUID(),
                    link: body.link.trim(),
                    name: body.name.trim(),
                    description: body.description?.trim() ?? "",
                    color: body.color?.trim() ?? "#999999",
                },
            });
            return c.json(row, 201);
        } finally {
            await db.$close();
        }
    });

    return app;
}
