import type {
    Category,
    Topic,
} from "./models.js";
import type {
    CategoryId,
    CategoryRefInput,
    TopicId,
    TopicRefInput,
} from "./references.js";
/** Shared input/result type helpers for generated delegates (use-site reference paths). */
type EntityByName = {
    Category: Category;
    Topic: Topic;
};
type EntityName = "Category" | "Topic";
type WhereInputByName = {
    Category: CategoryWhereInput;
    Topic: TopicWhereInput;
};
type SelectShape<S> = S extends { readonly select: infer Nested } ? Nested : S;
/** Scalar filter operators for utf8 fields. */
export type StringFilter = {
    readonly eq?: string;
    readonly not?: string;
    readonly contains?: string;
    readonly startsWith?: string;
    readonly endsWith?: string;
};
/** Scalar filter operators for numeric fields. */
export type NumberFilter = {
    readonly eq?: number;
    readonly not?: number;
    readonly gt?: number;
    readonly gte?: number;
    readonly lt?: number;
    readonly lte?: number;
};
/** Scalar filter operators for VOS `i64` / `u64` fields (carrier: `bigint`). */
export type BigIntFilter = {
    readonly eq?: bigint;
    readonly not?: bigint;
    readonly gt?: bigint;
    readonly gte?: bigint;
    readonly lt?: bigint;
    readonly lte?: bigint;
};
/** Scalar filter operators for bool fields. */
export type BooleanFilter = {
    readonly eq?: boolean;
    readonly not?: boolean;
};
/** Scalar filter operators for uuid / branded id fields. */
export type UuidFilter = {
    readonly eq?: string;
    readonly not?: string;
};
/** Scalar filter operators for decimal fields. */
export type DecimalFilter = {
    readonly eq?: string;
    readonly not?: string;
    readonly gt?: string;
    readonly gte?: string;
    readonly lt?: string;
    readonly lte?: string;
};
/** Scalar filter operators for datetime fields. */
export type DateTimeFilter = {
    readonly eq?: string;
    readonly not?: string;
    readonly gt?: string;
    readonly gte?: string;
    readonly lt?: string;
    readonly lte?: string;
};
/** Scalar filter operators for bytes fields (carrier: `Uint8Array`). */
export type BytesFilter = {
    readonly eq?: Uint8Array;
    readonly not?: Uint8Array;
};
/** Patch field: write a value. Omitted field means unchanged. */
export type PatchValue<T> = { readonly set: T };
/** Patch field on nullable columns: write a value or explicit null. */
export type NullablePatchValue<T> = PatchValue<T> | { readonly setNull: true };
/** Nested select shape for a reference target (use-site dereference projection). */
export type SelectPathFor<E extends EntityName> = {
    [K in keyof EntityByName[E]]?:
        | boolean
        | (EntityByName[E][K] extends { readonly __irisRef: infer T extends EntityName }
              ? { readonly select: SelectPathFor<T> }
              : never);
};
/**
 * Nested where path for a reference target (use-site filter navigation).
 *
 * Every field keeps the filter surface its faithful VOS label declared in the
 * generated `<Entity>WhereInput` — never an approximation of the TS carrier,
 * so a `uuid` / `decimal` / `datetime` field can not accept `StringFilter`
 * operators just because the carrier is `string`.
 */
export type WherePathFor<E extends EntityName> = {
    [K in keyof EntityByName[E] as K extends keyof WhereInputByName[E] ? K : never]?: WhereInputByName[E][Extract<K, keyof WhereInputByName[E]>];
};
/**
 * Resolve a select shape against an entity — nested object on &T becomes
 * SelectResultFor of the target; `true` on &T means full target entity.
 */
export type SelectResultFor<E extends EntityName, S> = [S] extends [undefined]
    ? EntityByName[E]
    : {
          [K in keyof SelectShape<S> & keyof EntityByName[E] as SelectShape<S>[K] extends true | object ? K : never]: SelectShape<S>[K] extends true
              ? EntityByName[E][K] extends { readonly __irisRef: infer T extends EntityName }
                  ? EntityByName[T]
                  : EntityByName[E][K]
              : SelectShape<S>[K] extends object
                ? EntityByName[E][K] extends { readonly __irisRef: infer T extends EntityName }
                    ? SelectResultFor<T, SelectShape<S>[K]>
                    : never
                : never;
      };
export type CategorySelect = {
    categoryId?: boolean;
    link?: boolean;
    name?: boolean;
    description?: boolean;
    color?: boolean;
};
export type CategoryWhereInput = {
    categoryId?: CategoryId | StringFilter;
    link?: string | StringFilter;
    name?: string | StringFilter;
    description?: string | StringFilter;
    color?: string | StringFilter;
};
export type CategoryWhereUniqueInput = {
    categoryId: CategoryId;
};
export type CategoryCreateInput = {
    categoryId: CategoryId;
    link: string;
    name: string;
    description: string;
    color: string;
};
export type CategoryPatchInput = {
    link?: PatchValue<string>;
    name?: PatchValue<string>;
    description?: PatchValue<string>;
    color?: PatchValue<string>;
};
export type CategoryFindManyArgs = {
    where?: CategoryWhereInput;
    select?: CategorySelect;
    take?: number;
};
export type CategoryFindUniqueArgs = {
    where: CategoryWhereUniqueInput;
    select?: CategorySelect;
};
export type CategoryFindFirstArgs = CategoryFindManyArgs;
export type CategoryCreateArgs = {
    data: CategoryCreateInput;
    select?: CategorySelect;
};
export type CategoryDeleteArgs = {
    where: CategoryWhereUniqueInput;
};
export type CategoryUpdateArgs = {
    where: CategoryWhereUniqueInput;
    data: CategoryPatchInput;
    select?: CategorySelect;
};
export type CategoryGetPayload<A extends CategoryFindManyArgs | CategoryFindUniqueArgs | CategoryCreateArgs | CategoryUpdateArgs> =
    SelectResultFor<"Category", A["select"]>;
export type TopicSelect = {
    topicId?: boolean;
    link?: boolean;
    name?: boolean;
    description?: boolean;
    color?: boolean;
};
export type TopicWhereInput = {
    topicId?: TopicId | StringFilter;
    link?: string | StringFilter;
    name?: string | StringFilter;
    description?: string | StringFilter;
    color?: string | StringFilter;
};
export type TopicWhereUniqueInput = {
    topicId: TopicId;
};
export type TopicCreateInput = {
    topicId: TopicId;
    link: string;
    name: string;
    description: string;
    color: string;
};
export type TopicPatchInput = {
    link?: PatchValue<string>;
    name?: PatchValue<string>;
    description?: PatchValue<string>;
    color?: PatchValue<string>;
};
export type TopicFindManyArgs = {
    where?: TopicWhereInput;
    select?: TopicSelect;
    take?: number;
};
export type TopicFindUniqueArgs = {
    where: TopicWhereUniqueInput;
    select?: TopicSelect;
};
export type TopicFindFirstArgs = TopicFindManyArgs;
export type TopicCreateArgs = {
    data: TopicCreateInput;
    select?: TopicSelect;
};
export type TopicDeleteArgs = {
    where: TopicWhereUniqueInput;
};
export type TopicUpdateArgs = {
    where: TopicWhereUniqueInput;
    data: TopicPatchInput;
    select?: TopicSelect;
};
export type TopicGetPayload<A extends TopicFindManyArgs | TopicFindUniqueArgs | TopicCreateArgs | TopicUpdateArgs> =
    SelectResultFor<"Topic", A["select"]>;
