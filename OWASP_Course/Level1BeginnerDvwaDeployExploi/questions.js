test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m3_q1",
                                "The concept of \'Option A — Copy files out of running container\' is covered in this module.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m3_q2",
                                "The concept of \'Option B — Create a Docker container with a bind mount (dev mode)\' is covered in this module.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m3_q3",
                                "The concept of \'A) SQL Injection (SQLi)\' is covered in this module.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m3_q4",
                                "Which of the following best describes: Goal: deploy DVWA (Damn Vulnerable Web App) in a local Docker container, exploit SQLi, XSS, and Brok...",
                                QUESTION_TYPE_CHOICE,
                                new Array("Goal: deploy DVWA (Damn Vulnerable Web App) in a local Docker container, exploit", "An unrelated concept not covered in LEVEL 1 — Beginner: DVWA (Deploy + Exploit)", "None of the above", "This topic is not part of the course material"),
                                "Goal: deploy DVWA (Damn Vulnerable Web App) in a local Docker container, exploit",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m3_q5",
                                "Which of the following best describes: Prereqs: Docker installed and running, VS Code (with Remote - Containers optional), curl, browser (C...",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prereqs: Docker installed and running, VS Code (with Remote - Containers optiona", "An unrelated concept not covered in LEVEL 1 — Beginner: DVWA (Deploy + Exploit)", "None of the above", "This topic is not part of the course material"),
                                "Prereqs: Docker installed and running, VS Code (with Remote - Containers optiona",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m3_q6",
                                "Which of the following best describes: docker run --name dvwa -d -p 8080:80 vulnerables/web-dvwa",
                                QUESTION_TYPE_CHOICE,
                                new Array("docker run --name dvwa -d -p 8080:80 vulnerables/web-dvwa", "An unrelated concept not covered in LEVEL 1 — Beginner: DVWA (Deploy + Exploit)", "None of the above", "This topic is not part of the course material"),
                                "docker run --name dvwa -d -p 8080:80 vulnerables/web-dvwa",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m3_q7",
                                "Which of the following best describes: If you see errors on first load, DVWA sometimes requires initialization — check container logs:",
                                QUESTION_TYPE_CHOICE,
                                new Array("If you see errors on first load, DVWA sometimes requires initialization — check ", "An unrelated concept not covered in LEVEL 1 — Beginner: DVWA (Deploy + Exploit)", "None of the above", "This topic is not part of the course material"),
                                "If you see errors on first load, DVWA sometimes requires initialization — check ",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.m3_q8",
                                "Open VS Code. Open a new terminal (Ctrl+ ).",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );