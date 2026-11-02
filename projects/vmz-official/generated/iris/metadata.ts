export const IRIS_SCHEMA_FINGERPRINT = "2d83b779a80308584fcc30c5d0979c36c5ca02481a60b9a02b67a8545cec7a1f";
export const IRIS_GENERATOR_VERSION = "0.1.0";
/** TypeScript author field name → VOS wire field name (per entity). */
export const IRIS_FIELD_WIRE_NAMES: Record<string, Readonly<Record<string, string>>> = {
    Category: { categoryId: "category_id", link: "link", name: "name", description: "description", color: "color" },
    Topic: { topicId: "topic_id", link: "link", name: "name", description: "description", color: "color" },
};
/** TypeScript author field name → VOS value carrier label (per entity). */
export const IRIS_VALUE_CARRIERS: Record<string, Readonly<Record<string, string>>> = {
    Category: { categoryId: "utf8", link: "utf8", name: "utf8", description: "utf8", color: "utf8" },
    Topic: { topicId: "utf8", link: "utf8", name: "utf8", description: "utf8", color: "utf8" },
};
/** Reference field → target entity (per entity). */
export const IRIS_REFERENCE_TARGETS: Record<string, Readonly<Record<string, string>>> = {
    Category: {  },
    Topic: {  },
};
