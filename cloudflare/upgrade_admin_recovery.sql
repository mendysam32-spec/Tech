-- Admin recovery via email: mendysam32@gmail.com + magic link login
CREATE TABLE IF NOT EXISTS admin_recovery_tokens (
  token TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  used INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_recovery_tokens_email ON admin_recovery_tokens(email);
CREATE INDEX IF NOT EXISTS idx_recovery_tokens_expires ON admin_recovery_tokens(expires_at);
