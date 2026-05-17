-- Final Tech Monster adjustment: sequential avatar unlocks and diagram questions
-- No destructive changes. Profile photo/avatar unlocks are stored inside students.profile_settings JSON.
-- Question diagrams are stored in questions.image as either a path/URL or compressed data URL.
-- Run this after schema.sql + upgrade_recommendations.sql + upgrade_monster_gradeup.sql.

CREATE INDEX IF NOT EXISTS idx_questions_subject_updated ON questions(subject, updated_at);
CREATE INDEX IF NOT EXISTS idx_staff_users_role_subject ON staff_users(role, subject);
