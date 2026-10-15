-- Ensure SES exists in subjects (existing D1 DBs created before SES was added).
-- Fresh DBs get this from cloudflare/schema.sql automatically.
-- Run: wrangler d1 execute tech_monster_db --file=cloudflare/upgrade_ses_subject.sql
-- Note: redeployed Pages Functions also auto-insert SES via ensureDefaultSubjects()
-- on the next GET /api/subjects call, so this file is only needed if you want it immediately.
INSERT OR IGNORE INTO subjects (id, name, created_at, updated_at)
VALUES ('ses', 'SES', datetime('now'), datetime('now'));
