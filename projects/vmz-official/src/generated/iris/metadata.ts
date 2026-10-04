export const IRIS_SCHEMA_FINGERPRINT = "a63e103953d5e8ea";
export const IRIS_GENERATOR_VERSION = "0.1.0";
/** TypeScript author field name → VOS wire field name (per entity). */
export const IRIS_FIELD_WIRE_NAMES: Record<string, Readonly<Record<string, string>>> = {
    Category: { categoryId: "category_id", link: "link", name: "name", description: "description", color: "color" },
    Topic: { topicId: "topic_id", link: "link", name: "name", description: "description", color: "color" },
};
/** Reference field → target entity (per entity). */
export const IRIS_REFERENCE_TARGETS: Record<string, Readonly<Record<string, string>>> = {
    Category: {  },
    Topic: {  },
};
