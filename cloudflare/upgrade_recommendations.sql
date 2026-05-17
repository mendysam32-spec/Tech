-- Run this once if your D1 database was created before this upgrade.
-- If D1 says "duplicate column name: username", ignore that line and continue with the CREATE TABLE statements below.
ALTER TABLE students ADD COLUMN username TEXT;
UPDATE students SET username = lower(replace(name, ' ', '.')) WHERE username IS NULL OR username = '';

CREATE TABLE IF NOT EXISTS staff_users (
  id TEXT PRIMARY KEY,
  role TEXT NOT NULL CHECK(role IN ('admin','teacher')),
  name TEXT NOT NULL,
  username TEXT NOT NULL UNIQUE,
  subject TEXT NOT NULL DEFAULT 'All Subjects',
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS staff_sessions (token TEXT PRIMARY KEY, staff_id TEXT NOT NULL, expires_at TEXT NOT NULL, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS subjects (id TEXT PRIMARY KEY, name TEXT NOT NULL UNIQUE, created_at TEXT NOT NULL, updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS questions (id TEXT PRIMARY KEY, subject TEXT NOT NULL, topic TEXT NOT NULL, question TEXT NOT NULL, image TEXT NOT NULL DEFAULT '', options TEXT NOT NULL, correct INTEGER NOT NULL, explanation TEXT NOT NULL DEFAULT '', created_by TEXT NOT NULL DEFAULT '', created_at TEXT NOT NULL, updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS notes (id TEXT PRIMARY KEY, subject TEXT NOT NULL, title TEXT NOT NULL, content TEXT NOT NULL, created_by TEXT NOT NULL DEFAULT '', created_at TEXT NOT NULL, updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS app_config (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS certificate_approvals (id TEXT PRIMARY KEY, student_id TEXT NOT NULL, subject TEXT NOT NULL, approved INTEGER NOT NULL DEFAULT 0, approved_by TEXT NOT NULL DEFAULT '', updated_at TEXT NOT NULL, UNIQUE(student_id, subject));
CREATE INDEX IF NOT EXISTS idx_staff_sessions_staff ON staff_sessions(staff_id);
CREATE INDEX IF NOT EXISTS idx_questions_subject ON questions(subject);
CREATE INDEX IF NOT EXISTS idx_notes_subject ON notes(subject);
INSERT OR IGNORE INTO subjects (id, name, created_at, updated_at) VALUES ('technical-drawing', 'Technical Drawing', datetime('now'), datetime('now'));
