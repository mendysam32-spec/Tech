-- Tech Monster GradeUP-style upgrade: events, assignments, avatar rewards
CREATE TABLE IF NOT EXISTS events (
  id TEXT PRIMARY KEY, title TEXT NOT NULL, type TEXT NOT NULL DEFAULT 'announcement', subject TEXT NOT NULL DEFAULT 'Technical Drawing', description TEXT, prize TEXT, question_ids TEXT DEFAULT '[]', active INTEGER DEFAULT 1, created_by TEXT, created_at TEXT, updated_at TEXT
);
CREATE TABLE IF NOT EXISTS assignments (
  id TEXT PRIMARY KEY, title TEXT NOT NULL, subject TEXT NOT NULL DEFAULT 'Technical Drawing', instructions TEXT NOT NULL, active INTEGER DEFAULT 1, created_by TEXT, created_at TEXT, updated_at TEXT
);
CREATE TABLE IF NOT EXISTS assignment_submissions (
  id TEXT PRIMARY KEY, assignment_id TEXT NOT NULL, student_id TEXT NOT NULL, student_name TEXT, answer TEXT NOT NULL, submitted_at TEXT, FOREIGN KEY (assignment_id) REFERENCES assignments(id), FOREIGN KEY (student_id) REFERENCES students(id)
);
CREATE INDEX IF NOT EXISTS idx_events_subject_active ON events(subject, active);
CREATE INDEX IF NOT EXISTS idx_assignments_subject_active ON assignments(subject, active);
CREATE INDEX IF NOT EXISTS idx_assignment_submissions_assignment ON assignment_submissions(assignment_id);
