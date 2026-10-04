import type { CategoryId, CategoryReference, TopicId, TopicReference } from "./references.js";
export interface Category {
    categoryId: CategoryId;
    link: string;
    name: string;
    description: string;
    color: string;
}
export interface Topic {
    topicId: TopicId;
    link: string;
    name: string;
    description: string;
    color: string;
}
