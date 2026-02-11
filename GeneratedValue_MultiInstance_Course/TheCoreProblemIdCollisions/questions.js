test.AddQuestion( new Question ("com.scorm.gv.collision_1",
                                "What is a race condition in the context of ID generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Database running out of IDs", "Multiple instances generating same ID due to timing", "Slow database queries", "Network latency issues"),
                                "Multiple instances generating same ID due to timing",
                                "obj_collision")
                );

test.AddQuestion( new Question ("com.scorm.gv.collision_2",
                                "What is the typical symptom of ID collisions in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Slow application performance", "Duplicate key constraint violations or silent data loss", "High CPU usage", "Memory leaks"),
                                "Duplicate key constraint violations or silent data loss",
                                "obj_collision")
                );

test.AddQuestion( new Question ("com.scorm.gv.collision_3",
                                "How can you test for ID collisions in your application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Run single-threaded tests", "Execute concurrent inserts and check for duplicate IDs", "Check database logs only", "Use production data"),
                                "Execute concurrent inserts and check for duplicate IDs",
                                "obj_collision")
                );

test.AddQuestion( new Question ("com.scorm.gv.collision_4",
                                "Why is silent data loss dangerous?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It causes application crashes", "Records are lost without error logs or notifications", "It's easy to detect", "It only affects test environments"),
                                "Records are lost without error logs or notifications",
                                "obj_collision")
                );

test.AddQuestion( new Question ("com.scorm.gv.collision_5",
                                "What makes ID collisions hard to reproduce?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They require specific hardware", "They depend on precise timing and concurrent load", "They only happen on Mondays", "They need special database versions"),
                                "They depend on precise timing and concurrent load",
                                "obj_collision")
                );

test.AddQuestion( new Question ("com.scorm.gv.collision_6",
                                "Which prevention strategy eliminates coordination between instances?",
                                QUESTION_TYPE_CHOICE,
                                new Array("IDENTITY strategy", "TABLE strategy", "UUID generation", "Manual ID assignment"),
                                "UUID generation",
                                "obj_collision")
                );
