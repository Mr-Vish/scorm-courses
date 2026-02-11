test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m5_q1",
                                "The concept of \'Python (Flask) fix — parameterized query\' is covered in this module.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_5")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m5_q2",
                                "The concept of \'Java (Spring Boot) fix — use JdbcTemplate parameter binding or JPA\' is covered in this module.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_5")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m5_q3",
                                "The concept of \'Python (Flask) fix — escape content / use templates with autoescape\' is covered in this module.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_5")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m5_q4",
                                "Which of the following best describes: Goal: patch the same apps (from Level 2) to implement secure coding fixes: use parameterized queries...",
                                QUESTION_TYPE_CHOICE,
                                new Array("Goal: patch the same apps (from Level 2) to implement secure coding fixes: use p", "An unrelated concept not covered in LEVEL 3 — Advanced: Fixes (Python & Java)", "None of the above", "This topic is not part of the course material"),
                                "Goal: patch the same apps (from Level 2) to implement secure coding fixes: use p",
                                "obj_module_5")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m5_q5",
                                "Which of the following best describes: For each vulnerability I provide code fixes and retest commands.",
                                QUESTION_TYPE_CHOICE,
                                new Array("For each vulnerability I provide code fixes and retest commands.", "An unrelated concept not covered in LEVEL 3 — Advanced: Fixes (Python & Java)", "None of the above", "This topic is not part of the course material"),
                                "For each vulnerability I provide code fixes and retest commands.",
                                "obj_module_5")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m5_q6",
                                "Which of the following best describes: Replace vulnerable query with parameterized one using ? placeholders:",
                                QUESTION_TYPE_CHOICE,
                                new Array("Replace vulnerable query with parameterized one using ? placeholders:", "An unrelated concept not covered in LEVEL 3 — Advanced: Fixes (Python & Java)", "None of the above", "This topic is not part of the course material"),
                                "Replace vulnerable query with parameterized one using ? placeholders:",
                                "obj_module_5")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m5_q7",
                                "Which of the following best describes: cur.execute(\"SELECT id, username FROM users WHERE username = ?\", (username,))",
                                QUESTION_TYPE_CHOICE,
                                new Array("cur.execute(\"SELECT id, username FROM users WHERE username = ?\", (username,))", "An unrelated concept not covered in LEVEL 3 — Advanced: Fixes (Python & Java)", "None of the above", "This topic is not part of the course material"),
                                "cur.execute(\"SELECT id, username FROM users WHERE username = ?\", (username,))",
                                "obj_module_5")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m5_q8",
                                "Using format() or f-strings instead of parameters still vulnerable.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_5")
                );