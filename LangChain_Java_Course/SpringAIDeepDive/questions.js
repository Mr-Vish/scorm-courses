test.AddQuestion( new Question ("springai_q1",
                                "What is the main design principle of Spring AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximum flexibility", "Spring-native with convention over configuration", "Minimal dependencies", "Python compatibility"),
                                "Spring-native with convention over configuration",
                                "obj_springai"
                ));

test.AddQuestion( new Question ("springai_q2",
                                "Which Spring AI starter is used for OpenAI integration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("spring-ai-openai", "spring-ai-openai-spring-boot-starter", "spring-boot-openai-starter", "openai-spring-ai-starter"),
                                "spring-ai-openai-spring-boot-starter",
                                "obj_springai"
                ));

test.AddQuestion( new Question ("springai_q3",
                                "What is the fluent API provided by Spring AI for building conversational applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ChatModel", "ChatClient", "ConversationBuilder", "AIClient"),
                                "ChatClient",
                                "obj_springai"
                ));

test.AddQuestion( new Question ("springai_q4",
                                "How does Spring AI handle auto-configuration of AI components?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manual bean creation required", "Through Spring Boot starters and auto-configuration", "Using XML configuration", "Via annotations only"),
                                "Through Spring Boot starters and auto-configuration",
                                "obj_springai"
                ));

test.AddQuestion( new Question ("springai_q5",
                                "Which method is used to parse LLM responses into Java objects in Spring AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array(".parse()", ".entity()", ".convert()", ".toObject()"),
                                ".entity()",
                                "obj_springai"
                ));

test.AddQuestion( new Question ("springai_q6",
                                "What is the advantage of Spring AI's integration with Spring Boot Actuator?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster responses", "Built-in monitoring and metrics", "Lower costs", "Better accuracy"),
                                "Built-in monitoring and metrics",
                                "obj_springai"
                ));

test.AddQuestion( new Question ("springai_q7",
                                "Which Spring AI component is used for streaming responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array(".stream()", ".async()", ".flow()", ".reactive()"),
                                ".stream()",
                                "obj_springai"
                ));

test.AddQuestion( new Question ("springai_q8",
                                "What is a key difference between Spring AI and LangChain4j regarding Spring Boot?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Spring AI requires Spring Boot, LangChain4j is framework-agnostic", "LangChain4j requires Spring Boot, Spring AI doesn't", "Both require Spring Boot", "Neither requires Spring Boot"),
                                "Spring AI requires Spring Boot, LangChain4j is framework-agnostic",
                                "obj_springai"
                ));
