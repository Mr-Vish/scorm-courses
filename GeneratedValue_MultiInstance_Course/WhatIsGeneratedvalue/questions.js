test.AddQuestion( new Question ("com.scorm.gv.strategy_1",
                                "Which GenerationType is safest for multi-instance deployments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("IDENTITY", "SEQUENCE with proper allocationSize", "TABLE", "AUTO"),
                                "SEQUENCE with proper allocationSize",
                                "obj_strategy")
                );

test.AddQuestion( new Question ("com.scorm.gv.strategy_2",
                                "What does allocationSize parameter control in SEQUENCE strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximum ID value", "Number of IDs pre-fetched from sequence", "Database connection pool size", "Transaction timeout"),
                                "Number of IDs pre-fetched from sequence",
                                "obj_strategy")
                );

test.AddQuestion( new Question ("com.scorm.gv.strategy_3",
                                "Why does IDENTITY strategy fail in multi-instance environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's too slow", "Each database session generates IDs independently without coordination", "It requires too much memory", "It only works with MySQL"),
                                "Each database session generates IDs independently without coordination",
                                "obj_strategy")
                );

test.AddQuestion( new Question ("com.scorm.gv.strategy_4",
                                "Which database supports SEQUENCE strategy natively?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MySQL 5.7", "PostgreSQL", "SQLite", "MS Access"),
                                "PostgreSQL",
                                "obj_strategy")
                );

test.AddQuestion( new Question ("com.scorm.gv.strategy_5",
                                "What is the main disadvantage of TABLE strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Doesn't work with any database", "Creates performance bottleneck due to table locking", "Requires manual ID assignment", "Only generates even numbers"),
                                "Creates performance bottleneck due to table locking",
                                "obj_strategy")
                );

test.AddQuestion( new Question ("com.scorm.gv.strategy_6",
                                "What is the recommended minimum allocationSize for SEQUENCE in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1", "10", "50", "1000"),
                                "50",
                                "obj_strategy")
                );
