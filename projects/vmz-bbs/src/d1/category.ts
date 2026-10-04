import type { BbsD1Database, CategoryCreateInput, CategoryRow } from "../types.ts";

export async function listCategories(db: BbsD1Database): Promise<CategoryRow[]> {
    const { results } = await db
        .prepare(
            `SELECT category_id, link, name, description, color, created_at
             FROM Category
             ORDER BY created_at DESC`,
        )
        .all<CategoryRow>();
    return results ?? [];
}

export async function createCategory(db: BbsD1Database, input: CategoryCreateInput): Promise<CategoryRow> {
    const categoryId = crypto.randomUUID();
    const color = input.color ?? "#999999";
    const description = input.description ?? "";
    await db
        .prepare(
            `INSERT INTO Category (category_id, link, name, description, color, created_at)
             VALUES (?, ?, ?, ?, ?, datetime('now'))`,
        )
        .bind(categoryId, input.link, input.name, description, color)
        .run();
    return {
        category_id: categoryId,
        link: input.link,
        name: input.name,
        description,
        color,
        created_at: new Date().toISOString(),
    };
}
