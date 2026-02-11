test.AddQuestion( new Question ("langchain.module3.q1",
                                "What is the recommended approach for handling rate limit errors?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore the error", "Implement exponential backoff retry", "Switch to a different model", "Reduce prompt size"),
                                "Implement exponential backoff retry",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("langchain.module3.q2",
                                "Which error type occurs when the input exceeds the model's context window?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RateLimitError", "TimeoutError", "ContextLengthExceeded", "AuthenticationError"),
                                "ContextLengthExceeded",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("langchain.module3.q3",
                                "What is the purpose of OutputFixingParser?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To speed up parsing", "To automatically fix malformed model outputs", "To validate inputs", "To compress outputs"),
                                "To automatically fix malformed model outputs",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("langchain.module3.q4",
                                "Which metric is most important for tracking application costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Latency", "Token Usage", "Error Rate", "Cache Hit Rate"),
                                "Token Usage",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("langchain.module3.q5",
                                "What is the target error rate for production LangChain applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("< 1%", "< 5%", "< 10%", "< 20%"),
                                "< 1%",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("langchain.module3.q6",
                                "Which caching strategy matches similar queries, not just exact matches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("InMemoryCache", "SQLiteCache", "RedisCache", "RedisSemanticCache"),
                                "RedisSemanticCache",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("langchain.module3.q7",
                                "What is the primary benefit of using streaming in LangChain applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces costs", "Improves perceived latency", "Increases accuracy", "Simplifies code"),
                                "Improves perceived latency",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("langchain.module3.q8",
                                "Where should API keys be stored in production applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("In source code", "In configuration files", "In environment variables or secrets management", "In database"),
                                "In environment variables or secrets management",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("langchain.module3.q9",
                                "What security risk does prompt injection pose?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increased costs", "Unauthorized actions or data exposure", "Slower performance", "Cache invalidation"),
                                "Unauthorized actions or data exposure",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("langchain.module3.q10",
                                "Which strategy helps reduce costs by avoiding redundant API calls?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Streaming", "Caching", "Async processing", "Batch processing"),
                                "Caching",
                                "obj_module_3")
                );
