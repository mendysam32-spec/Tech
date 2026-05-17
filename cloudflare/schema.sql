CREATE TABLE IF NOT EXISTS students (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE,
  name TEXT NOT NULL,
  student_class TEXT NOT NULL DEFAULT 'General',
  password_hash TEXT NOT NULL,
  xp INTEGER NOT NULL DEFAULT 0,
  level INTEGER NOT NULL DEFAULT 1,
  best_score INTEGER NOT NULL DEFAULT 0,
  total_quizzes INTEGER NOT NULL DEFAULT 0,
  avatar TEXT NOT NULL DEFAULT 'TM',
  profile_settings TEXT NOT NULL DEFAULT '{"avatar":"TM","accent":"blue","motivationStyle":"balanced","quizLength":15,"timerMode":"standard","feedbackMode":"end","dailyGoal":1,"soundEnabled":false,"profilePhoto":""}',
  streak INTEGER NOT NULL DEFAULT 0,
  daily_quiz_count INTEGER NOT NULL DEFAULT 0,
  last_played_date TEXT NOT NULL DEFAULT '',
  badges TEXT NOT NULL DEFAULT '[]',
  topic_stats TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(name, student_class)
);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  student_id TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(student_id) REFERENCES students(id)
);

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

CREATE TABLE IF NOT EXISTS staff_sessions (
  token TEXT PRIMARY KEY,
  staff_id TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(staff_id) REFERENCES staff_users(id)
);

CREATE TABLE IF NOT EXISTS subjects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  subject TEXT NOT NULL,
  topic TEXT NOT NULL,
  question TEXT NOT NULL,
  image TEXT NOT NULL DEFAULT '',
  options TEXT NOT NULL,
  correct INTEGER NOT NULL,
  explanation TEXT NOT NULL DEFAULT '',
  created_by TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS notes (
  id TEXT PRIMARY KEY,
  subject TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_by TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS app_config (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS certificate_approvals (
  id TEXT PRIMARY KEY,
  student_id TEXT NOT NULL,
  subject TEXT NOT NULL,
  approved INTEGER NOT NULL DEFAULT 0,
  approved_by TEXT NOT NULL DEFAULT '',
  updated_at TEXT NOT NULL,
  UNIQUE(student_id, subject)
);

CREATE INDEX IF NOT EXISTS idx_students_leaderboard ON students(best_score DESC, xp DESC, total_quizzes DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_student ON sessions(student_id);
CREATE INDEX IF NOT EXISTS idx_staff_sessions_staff ON staff_sessions(staff_id);
CREATE INDEX IF NOT EXISTS idx_questions_subject ON questions(subject);
CREATE INDEX IF NOT EXISTS idx_notes_subject ON notes(subject);

INSERT OR IGNORE INTO subjects (id, name, created_at, updated_at)
VALUES ('technical-drawing', 'Technical Drawing', datetime('now'), datetime('now'));


-- GradeUP-style control center tables
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
