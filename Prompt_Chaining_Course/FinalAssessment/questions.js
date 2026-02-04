test.AddQuestion( new Question ("q1",
                                "What is a major advantage of 'Task Decomposition' in prompt engineering?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes the prompt much longer and more complex", "It reduces the number of API calls needed", "It allows the model to focus on one small, manageable sub-task at a time, improving overall accuracy", "It eliminates the need for any instructions"),
                                "It allows the model to focus on one small, manageable sub-task at a time, improving overall accuracy",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "In a prompt chain, what happens during the 'Aggregation' step?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Combining the outputs of multiple sub-tasks into a final unified response", "Deleting all previous outputs", "Randomizing the order of the sub-tasks", "Encrypting the final answer"),
                                "Combining the outputs of multiple sub-tasks into a final unified response",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "How does chaining help with models that have limited context windows?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By magically increasing the window size", "By breaking a large task into smaller steps that each fit within the context window", "It doesn't help at all", "By compressing the text to 1 bit per character"),
                                "By breaking a large task into smaller steps that each fit within the context window",
                                "obj_module_1")
                );
