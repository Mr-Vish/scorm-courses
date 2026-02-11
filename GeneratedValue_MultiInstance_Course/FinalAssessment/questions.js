// Final Assessment - 15 Unique Questions

test.AddQuestion( new Question ("com.scorm.gv.final_1",
                                "What is the root cause of ID collisions in multi-instance environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Slow network", "Lack of coordination between instances generating IDs", "Database errors", "Application bugs"),
                                "Lack of coordination between instances generating IDs",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_2",
                                "Which strategy requires allocationSize configuration for safety?",
                                QUESTION_TYPE_CHOICE,
                                new Array("IDENTITY", "SEQUENCE", "TABLE", "UUID"),
                                "SEQUENCE",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_3",
                                "In a 3-instance deployment, two instances simultaneously insert with ID=1001. What happens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Both succeed with different IDs", "Constraint violation or one overwrites the other", "Database queues them automatically", "Application prevents it"),
                                "Constraint violation or one overwrites the other",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_4",
                                "What does @PrePersist annotation do in UUID generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deletes old records", "Generates UUID before entity is persisted", "Validates data", "Commits transaction"),
                                "Generates UUID before entity is persisted",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_5",
                                "Which database does NOT natively support SEQUENCE?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PostgreSQL", "Oracle", "MySQL 5.7", "DB2"),
                                "MySQL 5.7",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_6",
                                "What is the storage size difference between UUID string and Long?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No difference", "UUID is 36 bytes, Long is 8 bytes", "Long is larger", "Both are 16 bytes"),
                                "UUID is 36 bytes, Long is 8 bytes",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_7",
                                "Why is TABLE strategy problematic under high concurrency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's too fast", "Row-level locking creates bottleneck", "It uses too much memory", "It only works with one instance"),
                                "Row-level locking creates bottleneck",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_8",
                                "What makes UUID ideal for microservices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They're shorter", "No coordination needed between services", "They're faster", "They use less storage"),
                                "No coordination needed between services",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_9",
                                "How do you test for ID collisions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Single-threaded unit tests", "Concurrent inserts checking for duplicate IDs", "Manual testing only", "Database logs"),
                                "Concurrent inserts checking for duplicate IDs",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_10",
                                "What does AUTO strategy do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always uses IDENTITY", "Provider chooses strategy based on database", "Always uses UUID", "Requires manual configuration"),
                                "Provider chooses strategy based on database",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_11",
                                "Which scenario is IDENTITY strategy safe?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Multi-instance production", "Single-instance application", "Distributed database", "Cloud deployment"),
                                "Single-instance application",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_12",
                                "What is the benefit of binary UUID storage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Easier to read", "Better index performance and smaller size", "Prevents collisions", "Works with all databases"),
                                "Better index performance and smaller size",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_13",
                                "Why are ID collisions hard to detect in testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tests are too fast", "Require specific timing and production-level concurrency", "Databases hide them", "They don't exist in testing"),
                                "Require specific timing and production-level concurrency",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_14",
                                "What is the recommended allocationSize for SEQUENCE in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1", "10", "50 or higher", "1000"),
                                "50 or higher",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.gv.final_15",
                                "Which approach eliminates ID collision risk entirely?",
                                QUESTION_TYPE_CHOICE,
                                new Array("IDENTITY with careful configuration", "TABLE strategy", "UUID generation", "AUTO strategy"),
                                "UUID generation",
                                "obj_final")
                );
