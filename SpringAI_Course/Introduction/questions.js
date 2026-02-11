test.AddQuestion( new Question ("com.scorm.springai.interactions.intro_1",
                                "What is the primary purpose of Spring AI?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To replace Python in all AI applications", "To act as a common abstraction layer for AI models in Java", "To create new AI models from scratch", "To only work with OpenAI"),
                                "To act as a common abstraction layer for AI models in Java",
                                "obj_introduction")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.intro_2",
                                "Spring AI allows you to switch between different AI providers with minimal code changes",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_introduction")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.intro_3",
                                "Which of these is a key advantage of Spring AI over LangChain for Java developers?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("It requires Python knowledge", "It uses native Java/Spring patterns and tooling", "It only supports one AI provider", "It has no testing support"),
                                "It uses native Java/Spring patterns and tooling",
                                "obj_introduction")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.intro_4",
                                "Spring AI is compared to which Spring framework in terms of abstraction?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Spring Security", "Spring Data JPA", "Spring Cloud", "Spring Batch"),
                                "Spring Data JPA",
                                "obj_introduction")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.intro_5",
                                "Spring AI runs natively within the Java Virtual Machine (JVM)",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_introduction")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.intro_6",
                                "What type of AI capabilities does Spring AI primarily focus on?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Image recognition only", "Large Language Models (LLMs)", "Robotics control", "Database optimization"),
                                "Large Language Models (LLMs)",
                                "obj_introduction")
                );
