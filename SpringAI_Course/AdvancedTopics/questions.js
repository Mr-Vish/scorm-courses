test.AddQuestion( new Question ("com.scorm.springai.interactions.advanced_1",
                                "What does RAG stand for in the context of AI?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Random Access Generation", "Retrieval Augmented Generation", "Rapid AI Gateway", "Resource Allocation Graph"),
                                "Retrieval Augmented Generation",
                                "obj_advanced")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.advanced_2",
                                "Structured Output allows you to receive AI responses in specific formats like JSON or Java objects",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_advanced")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.advanced_3",
                                "What is the primary benefit of using prompt templates?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("They make the code run faster", "They provide consistency and reusability for similar requests", "They eliminate the need for API keys", "They only work with OpenAI"),
                                "They provide consistency and reusability for similar requests",
                                "obj_advanced")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.advanced_4",
                                "Which website provides the official Spring AI documentation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("github.com/spring-ai", "docs.spring.io/spring-ai/reference", "springai.com", "openai.com/spring"),
                                "docs.spring.io/spring-ai/reference",
                                "obj_advanced")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.advanced_5",
                                "Streaming responses allow the AI to generate content incrementally rather than waiting for the complete response",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_advanced")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.advanced_6",
                                "What is a best practice for managing API keys in Spring AI applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcode them in the source code", "Share them in public repositories", "Use environment variables or secure vaults", "Email them to team members"),
                                "Use environment variables or secure vaults",
                                "obj_advanced")
                );
