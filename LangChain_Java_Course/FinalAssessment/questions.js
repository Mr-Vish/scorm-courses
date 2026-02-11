// Final Comprehensive Assessment - 25 Unique Questions
// Covers: LangChain4j Fundamentals, Spring AI, Advanced Patterns & RAG, Framework Comparison

// LangChain4j Questions (6 questions)
test.AddQuestion( new Question ("final_lc4j_1",
                                "Which LangChain4j component is responsible for managing conversation history?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ConversationManager", "ChatMemory", "HistoryStore", "MessageBuffer"),
                                "ChatMemory",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_lc4j_2",
                                "What is the correct way to create an AI Service in LangChain4j?",
                                QUESTION_TYPE_CHOICE,
                                new Array("new AIService()", "AIService.build()", "AiServices.create(Interface.class, model)", "AIService.getInstance()"),
                                "AiServices.create(Interface.class, model)",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_lc4j_3",
                                "Which interface should you use for token-by-token streaming in LangChain4j?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ChatLanguageModel", "StreamingChatLanguageModel", "AsyncChatModel", "ReactiveModel"),
                                "StreamingChatLanguageModel",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_lc4j_4",
                                "What does the @Tool annotation description parameter help the LLM understand?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The tool's performance metrics", "When and how to use the tool", "The tool's implementation details", "The tool's version number"),
                                "When and how to use the tool",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_lc4j_5",
                                "How does LangChain4j handle structured output from LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manual JSON parsing required", "Automatic parsing into POJOs via AI Services", "Only supports String outputs", "Requires custom deserializers"),
                                "Automatic parsing into POJOs via AI Services",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_lc4j_6",
                                "Which provider allows running LLMs locally without API costs in LangChain4j?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenAI Local", "Anthropic Dev", "Ollama", "LocalLLM"),
                                "Ollama",
                                "obj_final"
                ));

// Spring AI Questions (6 questions)
test.AddQuestion( new Question ("final_springai_1",
                                "What is the primary benefit of Spring AI's auto-configuration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster execution", "Minimal setup with convention over configuration", "Better accuracy", "Lower costs"),
                                "Minimal setup with convention over configuration",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_springai_2",
                                "Which method chain is used to build and execute a prompt in Spring AI ChatClient?",
                                QUESTION_TYPE_CHOICE,
                                new Array(".build().execute()", ".prompt().user().call().content()", ".create().send()", ".query().response()"),
                                ".prompt().user().call().content()",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_springai_3",
                                "How are tools registered with Spring AI ChatClient?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using @RegisterTool annotation", "Via defaultFunctions() method", "Automatic discovery", "Manual configuration file"),
                                "Via defaultFunctions() method",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_springai_4",
                                "Which Spring AI feature allows different configurations for dev and production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Environment variables only", "Spring Profiles", "Configuration classes", "Property files only"),
                                "Spring Profiles",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_springai_5",
                                "What is the advantage of Spring AI's VectorStore abstraction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster queries", "Portable code across different vector databases", "Lower storage costs", "Better accuracy"),
                                "Portable code across different vector databases",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_springai_6",
                                "Which Spring Boot feature does Spring AI integrate with for monitoring?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Spring Cloud", "Spring Actuator", "Spring Admin", "Spring Monitor"),
                                "Spring Actuator",
                                "obj_final"
                ));

// RAG and Advanced Patterns (7 questions)
test.AddQuestion( new Question ("final_rag_1",
                                "What are the two main phases of a RAG system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Training and Inference", "Indexing and Retrieval", "Loading and Processing", "Embedding and Querying"),
                                "Indexing and Retrieval",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_rag_2",
                                "Why is chunk overlap important in document splitting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase storage efficiency", "To maintain context across chunk boundaries", "To improve compression ratios", "To reduce processing time"),
                                "To maintain context across chunk boundaries",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_rag_3",
                                "What is the purpose of metadata in vector store documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase embedding dimensions", "To enable filtering and tracking of document sources", "To improve search speed", "To reduce storage costs"),
                                "To enable filtering and tracking of document sources",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_rag_4",
                                "Which document splitting strategy is recommended for maintaining natural text boundaries?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fixed size splitting", "Recursive splitting by paragraphs and sentences", "Random splitting", "Single character splitting"),
                                "Recursive splitting by paragraphs and sentences",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_rag_5",
                                "What is the main advantage of hybrid search over pure vector search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower costs", "Combines semantic and keyword matching for better results", "Faster queries", "Simpler implementation"),
                                "Combines semantic and keyword matching for better results",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_rag_6",
                                "What is the ReAct pattern in AI agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reactive programming", "Reasoning and Acting in iterative cycles", "Real-time action processing", "Response caching"),
                                "Reasoning and Acting in iterative cycles",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_rag_7",
                                "Why should you implement response caching in production RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve accuracy", "To reduce API costs and latency for repeated queries", "To increase storage", "To enable offline mode"),
                                "To reduce API costs and latency for repeated queries",
                                "obj_final"
                ));

// Framework Comparison and Best Practices (6 questions)
test.AddQuestion( new Question ("final_comp_1",
                                "What is the key architectural difference between Spring AI and LangChain4j?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Spring AI is faster", "Spring AI is Spring-native, LangChain4j is framework-agnostic", "LangChain4j has more features", "Spring AI supports more models"),
                                "Spring AI is Spring-native, LangChain4j is framework-agnostic",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_comp_2",
                                "Which framework would you choose for a Quarkus-based application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Spring AI", "LangChain4j", "Both work equally well", "Neither supports Quarkus"),
                                "LangChain4j",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_comp_3",
                                "What is a common challenge when deploying AI applications to production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lack of Java support", "Managing API costs and rate limits", "Insufficient documentation", "Limited model choices"),
                                "Managing API costs and rate limits",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_comp_4",
                                "Which technique helps reduce LLM hallucinations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increasing temperature", "Using RAG to ground responses in retrieved facts", "Reducing token limits", "Disabling function calling"),
                                "Using RAG to ground responses in retrieved facts",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_comp_5",
                                "What is the recommended approach for handling sensitive data in AI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Send all data to cloud APIs", "Use local models like Ollama for sensitive data", "Disable encryption", "Store in plain text"),
                                "Use local models like Ollama for sensitive data",
                                "obj_final"
                ));

test.AddQuestion( new Question ("final_comp_6",
                                "Why is it important to implement retry logic in production AI systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase costs", "To handle transient API failures and improve reliability", "To slow down responses", "To test error handling"),
                                "To handle transient API failures and improve reliability",
                                "obj_final"
                ));
