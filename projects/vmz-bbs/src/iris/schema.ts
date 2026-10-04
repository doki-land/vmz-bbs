/** Iris schema text shared by `@vmz/bbs` consumers and `vmz-official` generate/push. */
export const BBS_IRIS_SCHEMA = `
table Category {
    @@category_id: utf8,
    link: utf8,
    name: utf8,
    description: utf8,
    color: utf8,
}

table Topic {
    @@topic_id: utf8,
    link: utf8,
    name: utf8,
    description: utf8,
    color: utf8,
}
`;
