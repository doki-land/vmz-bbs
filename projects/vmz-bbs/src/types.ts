/** Minimal D1 surface (matches `@yydb/iris/cloudflare` without taking a hard dependency). */
export interface BbsD1BoundStatement {
    all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
    run(): Promise<{ success: boolean }>;
    first<T = Record<string, unknown>>(): Promise<T | null>;
}

export interface BbsD1PreparedStatement extends BbsD1BoundStatement {
    bind(...values: unknown[]): BbsD1BoundStatement;
}

export interface BbsD1Database {
    prepare(query: string): BbsD1PreparedStatement;
}

export interface BbsBindings {
    DB: BbsD1Database;
}

export type CategoryRow = {
    category_id: string;
    link: string;
    name: string;
    description: string;
    color: string;
    created_at: string;
};

export type TopicRow = {
    topic_id: string;
    link: string;
    name: string;
    description: string;
    color: string;
    created_at: string;
};

export type CategoryCreateInput = {
    link: string;
    name: string;
    description?: string;
    color?: string;
};

export type TopicCreateInput = {
    link: string;
    name: string;
    description?: string;
    color?: string;
};
