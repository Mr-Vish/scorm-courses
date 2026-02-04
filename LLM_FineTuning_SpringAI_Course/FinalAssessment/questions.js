test.AddQuestion( new Question ("q1",
                                "When using Spring AI, how can you dynamically adjust model parameters like temperature for a specific request?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Via the application.properties file", "By restarting the Spring Boot application", "It cannot be adjusted dynamically", "Using ChatOptions in the prompt call"),
                                "Using ChatOptions in the prompt call",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "Which of the following is a recommended approach for managing API keys in a Spring Boot application using Spring AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcoding them in the source code", "Printing them in the application logs", "Storing them in a public GitHub repository", "Using environment variables or a secure secret manager"),
                                "Using environment variables or a secure secret manager",
                                "obj_module_1")
                );
