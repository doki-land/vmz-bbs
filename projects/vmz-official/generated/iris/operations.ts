import type { OperationExecutor } from "./_internal/contract-types.js";
import {
    buildDeclaredOperationRequest,
    synthesizeCreate,
    synthesizeDelete,
    synthesizeUpdate,
    synthesizeFindFirst,
    synthesizeFindMany,
    synthesizeFindUnique,
    synthesizeOperationCall,
    throwOperationEnvelopeError,
} from "./_internal/synthesize.js";
import type {
    CategoryFindManyArgs, CategoryFindFirstArgs, CategoryFindUniqueArgs, CategoryCreateArgs, CategoryDeleteArgs, CategoryUpdateArgs, CategoryGetPayload, TopicFindManyArgs, TopicFindFirstArgs, TopicFindUniqueArgs, TopicCreateArgs, TopicDeleteArgs, TopicUpdateArgs, TopicGetPayload
} from "./inputs.js";
/** Schema macros (empty for this project). */
export class GeneratedMacros {
    private readonly executor: OperationExecutor;
    constructor(executor: OperationExecutor) {
        this.executor = executor;
    }
}
export class CategoryDelegate {
    private readonly executor: OperationExecutor;
    constructor(executor: OperationExecutor) {
        this.executor = executor;
    }
    async findMany<const A extends CategoryFindManyArgs>(
        args?: A,
    ): Promise<ReadonlyArray<CategoryGetPayload<A>>> {
        const synthesis = synthesizeFindMany("Category", args);
        const envelope = await this.executor.execute(
            buildDeclaredOperationRequest("Category.findMany", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
        return envelope.value as ReadonlyArray<CategoryGetPayload<A>>;
    }
    async findFirst<const A extends CategoryFindFirstArgs>(
        args?: A,
    ): Promise<CategoryGetPayload<A> | null> {
        const synthesis = synthesizeFindFirst("Category", args);
        const envelope = await this.executor.execute(
            buildDeclaredOperationRequest("Category.findFirst", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
        const rows = envelope.value;
        return (rows[0] ?? null) as CategoryGetPayload<A> | null;
    }
    async findUnique<const A extends CategoryFindUniqueArgs>(
        args: A,
    ): Promise<CategoryGetPayload<A> | null> {
        const synthesis = synthesizeFindUnique("Category", args);
        const envelope = await this.executor.execute(
            buildDeclaredOperationRequest("Category.findUnique", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
        const rows = envelope.value;
        return (rows[0] ?? null) as CategoryGetPayload<A> | null;
    }
    async create<const A extends CategoryCreateArgs>(
        args: A,
    ): Promise<CategoryGetPayload<A>> {
        const synthesis = synthesizeCreate("Category", args);
        const envelope = await this.executor.execute(
            buildDeclaredOperationRequest("Category.create", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
        return envelope.value[0] as CategoryGetPayload<A>;
    }
    async update<const A extends CategoryUpdateArgs>(
        args: A,
    ): Promise<CategoryGetPayload<A>> {
        const synthesis = synthesizeUpdate("Category", args);
        const envelope = await this.executor.execute(
            buildDeclaredOperationRequest("Category.update", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
        return envelope.value[0] as CategoryGetPayload<A>;
    }
    async delete(args: CategoryDeleteArgs): Promise<void> {
        const synthesis = synthesizeDelete("Category", args);
        const envelope = await this.executor.executeUnit(
            buildDeclaredOperationRequest("Category.delete", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
    }
}
export class TopicDelegate {
    private readonly executor: OperationExecutor;
    constructor(executor: OperationExecutor) {
        this.executor = executor;
    }
    async findMany<const A extends TopicFindManyArgs>(
        args?: A,
    ): Promise<ReadonlyArray<TopicGetPayload<A>>> {
        const synthesis = synthesizeFindMany("Topic", args);
        const envelope = await this.executor.execute(
            buildDeclaredOperationRequest("Topic.findMany", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
        return envelope.value as ReadonlyArray<TopicGetPayload<A>>;
    }
    async findFirst<const A extends TopicFindFirstArgs>(
        args?: A,
    ): Promise<TopicGetPayload<A> | null> {
        const synthesis = synthesizeFindFirst("Topic", args);
        const envelope = await this.executor.execute(
            buildDeclaredOperationRequest("Topic.findFirst", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
        const rows = envelope.value;
        return (rows[0] ?? null) as TopicGetPayload<A> | null;
    }
    async findUnique<const A extends TopicFindUniqueArgs>(
        args: A,
    ): Promise<TopicGetPayload<A> | null> {
        const synthesis = synthesizeFindUnique("Topic", args);
        const envelope = await this.executor.execute(
            buildDeclaredOperationRequest("Topic.findUnique", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
        const rows = envelope.value;
        return (rows[0] ?? null) as TopicGetPayload<A> | null;
    }
    async create<const A extends TopicCreateArgs>(
        args: A,
    ): Promise<TopicGetPayload<A>> {
        const synthesis = synthesizeCreate("Topic", args);
        const envelope = await this.executor.execute(
            buildDeclaredOperationRequest("Topic.create", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
        return envelope.value[0] as TopicGetPayload<A>;
    }
    async update<const A extends TopicUpdateArgs>(
        args: A,
    ): Promise<TopicGetPayload<A>> {
        const synthesis = synthesizeUpdate("Topic", args);
        const envelope = await this.executor.execute(
            buildDeclaredOperationRequest("Topic.update", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
        return envelope.value[0] as TopicGetPayload<A>;
    }
    async delete(args: TopicDeleteArgs): Promise<void> {
        const synthesis = synthesizeDelete("Topic", args);
        const envelope = await this.executor.executeUnit(
            buildDeclaredOperationRequest("Topic.delete", synthesis),
        );
        if (!envelope.ok) {
            throwOperationEnvelopeError(envelope);
        }
    }
}
export class DbClient {
    readonly category: CategoryDelegate;
    readonly topic: TopicDelegate;
    readonly $macros: GeneratedMacros;
    private readonly executor: OperationExecutor;
    constructor(executor: OperationExecutor) {
        this.executor = executor;
        this.$macros = new GeneratedMacros(executor);
        this.category = new CategoryDelegate(executor);
        this.topic = new TopicDelegate(executor);
    }
    async $close(): Promise<void> {
        await this.executor.close();
    }
}
/** Construct a client from an injected operation executor (preferred ABI). */
export function createClient(executor: OperationExecutor): DbClient {
    return new DbClient(executor);
}
