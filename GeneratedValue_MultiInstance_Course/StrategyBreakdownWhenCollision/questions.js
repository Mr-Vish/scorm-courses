test.AddQuestion( new Question ("q1",
                                "What database feature does GenerationType.IDENTITY use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Database sequences", "Auto-increment feature", "Stored procedures", "Triggers"),
                                "Auto-increment feature",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "For GenerationType.SEQUENCE to be safe in multi-instance environments, what must all instances use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The same local sequence", "The same shared database", "Different allocation sizes", "Separate sequence generators"),
                                "The same shared database",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What is the recommended approach for GenerationType.TABLE in high-concurrency, multi-instance setups?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use larger allocation sizes", "Implement custom locking", "Avoid using it", "Use multiple tables"),
                                "Avoid using it",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "In the SEQUENCE configuration example, what is the allocationSize set to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("25", "50", "100", "10"),
                                "50",
                                "obj_module_1")
                );