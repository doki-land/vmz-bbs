-- D1 schema for VMZ official BBS (mirrors schemas/bbs.iris and @vmz/bbs D1 accessors).
CREATE TABLE IF NOT EXISTS Category (
    category_id TEXT PRIMARY KEY NOT NULL,
    link TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    color TEXT NOT NULL DEFAULT '#999999',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS Topic (
    topic_id TEXT PRIMARY KEY NOT NULL,
    link TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    color TEXT NOT NULL DEFAULT '#999999',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_category_created_at ON Category(created_at);
CREATE INDEX IF NOT EXISTS idx_topic_created_at ON Topic(created_at);
