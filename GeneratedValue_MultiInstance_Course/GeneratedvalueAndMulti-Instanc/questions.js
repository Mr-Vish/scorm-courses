test.AddQuestion( new Question ("com.scorm.gv.intro_1",
                                "What is the primary risk of using @GeneratedValue in multi-instance environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Slow performance", "ID collisions causing data corruption", "High memory usage", "Complex configuration"),
                                "ID collisions causing data corruption",
                                "obj_intro")
                );

test.AddQuestion( new Question ("com.scorm.gv.intro_2",
                                "Which scenario is safe for using @GeneratedValue with IDENTITY strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Multi-instance production deployment", "Single-instance application", "Microservices architecture", "Distributed database system"),
                                "Single-instance application",
                                "obj_intro")
                );

test.AddQuestion( new Question ("com.scorm.gv.intro_3",
                                "What happens when two instances generate the same ID simultaneously?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Database automatically resolves conflict", "One record overwrites the other or constraint violation occurs", "Both records are saved with different IDs", "Application crashes immediately"),
                                "One record overwrites the other or constraint violation occurs",
                                "obj_intro")
                );

test.AddQuestion( new Question ("com.scorm.gv.intro_4",
                                "Why are ID collisions hard to detect in testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They only occur under production load and specific timing", "Testing tools cannot detect them", "They don't cause any errors", "Databases prevent them automatically"),
                                "They only occur under production load and specific timing",
                                "obj_intro")
                );

test.AddQuestion( new Question ("com.scorm.gv.intro_5",
                                "What is the main advantage of using @GeneratedValue?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Guaranteed uniqueness across instances", "Automatic primary key generation without manual management", "Best performance in all scenarios", "Works only with PostgreSQL"),
                                "Automatic primary key generation without manual management",
                                "obj_intro")
                );

test.AddQuestion( new Question ("com.scorm.gv.intro_6",
                                "Which alternative provides collision-free IDs in distributed systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("IDENTITY strategy", "TABLE strategy", "UUID-based IDs", "AUTO strategy"),
                                "UUID-based IDs",
                                "obj_intro")
                );
