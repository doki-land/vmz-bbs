declare const __irisCategoryIdBrand: unique symbol;
/** Branded primary key for Category. */
export type CategoryId = string & {
    readonly [__irisCategoryIdBrand]: true;
};
/** Convert an external scalar into this schema's branded identity. */
export function categoryId(value: string): CategoryId {
    return value as CategoryId;
}
/** Stored reference identity for &Category (not an ORM relation object). */
export type CategoryReference = {
    readonly __irisRef: "Category";
    categoryId: CategoryId;
};
/** Values accepted when writing &Category. */
export type CategoryRefInput =
    | CategoryId
    | { categoryId: CategoryId }
    | CategoryReference;
declare const __irisTopicIdBrand: unique symbol;
/** Branded primary key for Topic. */
export type TopicId = string & {
    readonly [__irisTopicIdBrand]: true;
};
/** Convert an external scalar into this schema's branded identity. */
export function topicId(value: string): TopicId {
    return value as TopicId;
}
/** Stored reference identity for &Topic (not an ORM relation object). */
export type TopicReference = {
    readonly __irisRef: "Topic";
    topicId: TopicId;
};
/** Values accepted when writing &Topic. */
export type TopicRefInput =
    | TopicId
    | { topicId: TopicId }
    | TopicReference;
