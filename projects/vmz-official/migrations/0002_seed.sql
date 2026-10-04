-- Demo seed for local dev and first remote deploy.
INSERT OR IGNORE INTO Category (category_id, link, name, description, color, created_at)
VALUES (
    '3306ad0b-aea6-46d5-bd74-5e8d3a208220',
    'general',
    'General',
    'Main board',
    '#336699',
    datetime('now')
);

INSERT OR IGNORE INTO Topic (topic_id, link, name, description, color, created_at)
VALUES (
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'announcements',
    'Announcements',
    'Official updates',
    '#cc6633',
    datetime('now')
);
