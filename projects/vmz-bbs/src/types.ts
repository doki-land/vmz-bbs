/** Minimal Iris-generated client surface consumed by `createBbsApp` (host provides `Database.create`). */
export interface BbsDbClient {
    category: {
        findMany(args?: Record<string, unknown>): Promise<readonly Record<string, unknown>[]>;
        create(args: { data: Record<string, unknown> }): Promise<Record<string, unknown>>;
    };
    topic: {
        findMany(args?: Record<string, unknown>): Promise<readonly Record<string, unknown>[]>;
        create(args: { data: Record<string, unknown> }): Promise<Record<string, unknown>>;
    };
    $close(): Promise<void>;
}

export type OpenBbsDatabase<TBindings extends object> = (bindings: TBindings) => Promise<BbsDbClient>;

export type CategoryCreateBody = {
    link: string;
    name: string;
    description?: string;
    color?: string;
};

export type TopicCreateBody = {
    link: string;
    name: string;
    description?: string;
    color?: string;
};

export type CreateBbsAppOptions<TBindings extends object> = {
    /** Service label in `/health` (default `vmz-bbs`). */
    serviceName?: string;
    /** Open the host-generated Iris `Database` client (e.g. `cloudflare.ts`). */
    openDatabase: OpenBbsDatabase<TBindings>;
};
