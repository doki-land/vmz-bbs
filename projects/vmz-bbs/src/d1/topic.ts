import type { BbsD1Database, TopicCreateInput, TopicRow } from "../types.ts";

export async function listTopics(db: BbsD1Database): Promise<TopicRow[]> {
    const { results } = await db
        .prepare(
            `SELECT topic_id, link, name, description, color, created_at
             FROM Topic
             ORDER BY created_at DESC`,
        )
        .all<TopicRow>();
    return results ?? [];
}

export async function createTopic(db: BbsD1Database, input: TopicCreateInput): Promise<TopicRow> {
    const topicId = crypto.randomUUID();
    const color = input.color ?? "#999999";
    const description = input.description ?? "";
    await db
        .prepare(
            `INSERT INTO Topic (topic_id, link, name, description, color, created_at)
             VALUES (?, ?, ?, ?, ?, datetime('now'))`,
        )
        .bind(topicId, input.link, input.name, description, color)
        .run();
    return {
        topic_id: topicId,
        link: input.link,
        name: input.name,
        description,
        color,
        created_at: new Date().toISOString(),
    };
}
