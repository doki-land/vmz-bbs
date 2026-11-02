/** Build-time D1 read plan artifact (operationId → parameterized SQL). */
export type D1PhysicalPlan = {
    readonly sql: string;
    readonly mode: "read";
    readonly paramOrder?: readonly string[];
};
/** Generated read plans for Cloudflare D1 (unfiltered list reads in Phase 3). */
export const IRIS_D1_PLANS: Record<string, D1PhysicalPlan> = {
    "Category.findMany": { sql: "SELECT category_id, link, name, description, color FROM Category", mode: "read" },
    "Category.findFirst": { sql: "SELECT category_id, link, name, description, color FROM Category LIMIT 1", mode: "read" },
    "Category.findMany@p_categoryId": { sql: "SELECT category_id, link, name, description, color FROM Category WHERE category_id = ?", mode: "read", paramOrder: ["p_categoryId"] },
    "Category.findMany@p_link": { sql: "SELECT category_id, link, name, description, color FROM Category WHERE link = ?", mode: "read", paramOrder: ["p_link"] },
    "Category.findMany@p_name": { sql: "SELECT category_id, link, name, description, color FROM Category WHERE name = ?", mode: "read", paramOrder: ["p_name"] },
    "Category.findMany@p_description": { sql: "SELECT category_id, link, name, description, color FROM Category WHERE description = ?", mode: "read", paramOrder: ["p_description"] },
    "Category.findMany@p_color": { sql: "SELECT category_id, link, name, description, color FROM Category WHERE color = ?", mode: "read", paramOrder: ["p_color"] },
    "Topic.findMany": { sql: "SELECT topic_id, link, name, description, color FROM Topic", mode: "read" },
    "Topic.findFirst": { sql: "SELECT topic_id, link, name, description, color FROM Topic LIMIT 1", mode: "read" },
    "Topic.findMany@p_topicId": { sql: "SELECT topic_id, link, name, description, color FROM Topic WHERE topic_id = ?", mode: "read", paramOrder: ["p_topicId"] },
    "Topic.findMany@p_link": { sql: "SELECT topic_id, link, name, description, color FROM Topic WHERE link = ?", mode: "read", paramOrder: ["p_link"] },
    "Topic.findMany@p_name": { sql: "SELECT topic_id, link, name, description, color FROM Topic WHERE name = ?", mode: "read", paramOrder: ["p_name"] },
    "Topic.findMany@p_description": { sql: "SELECT topic_id, link, name, description, color FROM Topic WHERE description = ?", mode: "read", paramOrder: ["p_description"] },
    "Topic.findMany@p_color": { sql: "SELECT topic_id, link, name, description, color FROM Topic WHERE color = ?", mode: "read", paramOrder: ["p_color"] },
};
