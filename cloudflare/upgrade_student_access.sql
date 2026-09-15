-- Student subject access control (GradeUP-style): admin can restrict which subjects a student can access.
-- Run against an existing D1 database to add the allowed_subjects column.
ALTER TABLE students ADD COLUMN allowed_subjects TEXT NOT NULL DEFAULT '';