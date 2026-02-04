test.AddQuestion( new Question ("q1",
                                "Why is 'Few-Shot Prompting' particularly useful for Text-to-SQL tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces the cost of the model", "It allows the model to work without a database connection", "It provides the model with examples of the schema and corresponding correct SQL queries to improve accuracy", "It makes the SQL queries run faster"),
                                "It provides the model with examples of the schema and corresponding correct SQL queries to improve accuracy",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "What is a major challenge when models generate SQL for complex schemas?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model doesn't know how to add numbers", "SQL is a dead language", "Databases are always offline", "Handling join logic between multiple tables correctly"),
                                "Handling join logic between multiple tables correctly",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "Which of the following is a security risk when implementing Text-to-SQL?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using a dark mode UI", "SQL Injection via the generated query if not properly handled", "Generating too many charts", "The model might learn to read minds"),
                                "SQL Injection via the generated query if not properly handled",
                                "obj_module_1")
                );
