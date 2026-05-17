ALTER TABLE students ADD COLUMN profile_settings TEXT NOT NULL DEFAULT '{"avatar":"TM","accent":"blue","motivationStyle":"balanced","quizLength":15,"timerMode":"standard","feedbackMode":"end","dailyGoal":1,"soundEnabled":false,"profilePhoto":""}';
ALTER TABLE students ADD COLUMN streak INTEGER NOT NULL DEFAULT 0;
ALTER TABLE students ADD COLUMN daily_quiz_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE students ADD COLUMN last_played_date TEXT NOT NULL DEFAULT '';
ALTER TABLE students ADD COLUMN badges TEXT NOT NULL DEFAULT '[]';
ALTER TABLE students ADD COLUMN topic_stats TEXT NOT NULL DEFAULT '{}';
