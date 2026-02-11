test.AddQuestion( new Question ("q1",
                                "What is the main philosophical difference between Spring AI and LangChain4j?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Spring AI is faster than LangChain4j", "Spring AI is Spring ecosystem native, LangChain4j ports LangChain patterns to Java", "Spring AI only works with OpenAI", "LangChain4j requires more memory"),
                                "Spring AI is Spring ecosystem native, LangChain4j ports LangChain patterns to Java",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which annotation is used for tool calling in Spring AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("@Service", "@Tool", "@Component", "@Function"),
                                "@Tool",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "How does Spring AI handle dependency injection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manual configuration only", "Spring Boot auto-configuration", "CDI only", "No dependency injection support"),
                                "Spring Boot auto-configuration",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "When should you choose Spring AI over LangChain4j?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When you need advanced chain/agent patterns", "When you're already using Spring Boot and want seamless integration", "When you want framework-agnostic solutions", "When you need more model support"),
                                "When you're already using Spring Boot and want seamless integration",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What Maven dependency is shown for Spring AI Anthropic integration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("spring-ai-openai-spring-boot-starter", "spring-ai-anthropic-spring-boot-starter", "langchain4j-anthropic", "spring-boot-ai-starter"),
                                "spring-ai-anthropic-spring-boot-starter",
                                "obj_module_1")
                );