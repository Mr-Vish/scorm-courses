test.AddQuestion( new Question ("langchain.final.q1",
                                "Which LCEL feature allows automatic handling of async operations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manual async configuration", "Built-in async support", "External async library", "Callback handlers"),
                                "Built-in async support",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q2",
                                "What is the purpose of FewShotPromptTemplate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce prompt size", "To provide examples that guide model responses", "To validate prompts", "To cache prompts"),
                                "To provide examples that guide model responses",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q3",
                                "Which model parameter should be set to 0 for deterministic outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("max_tokens", "top_p", "temperature", "frequency_penalty"),
                                "temperature",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q4",
                                "What method enables processing multiple inputs in a single efficient call?",
                                QUESTION_TYPE_CHOICE,
                                new Array("invoke()", "batch()", "stream()", "parallel()"),
                                "batch()",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q5",
                                "In agent architecture, what component orchestrates the execution loop?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Agent", "Tool", "AgentExecutor", "Model"),
                                "AgentExecutor",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q6",
                                "What is the main advantage of using the @tool decorator?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster execution", "Automatic schema generation from function signature", "Reduced memory usage", "Built-in caching"),
                                "Automatic schema generation from function signature",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q7",
                                "Which memory type automatically summarizes conversation history to save tokens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ConversationBufferMemory", "ConversationSummaryMemory", "ConversationBufferWindowMemory", "ConversationTokenBufferMemory"),
                                "ConversationSummaryMemory",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q8",
                                "In RAG systems, what is the recommended chunk overlap percentage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0%", "10-20%", "40-50%", "70-80%"),
                                "10-20%",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q9",
                                "Which retrieval strategy balances relevance and diversity?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Similarity search", "MMR", "Keyword search", "Hybrid search"),
                                "MMR",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q10",
                                "What library is recommended for implementing retry logic with exponential backoff?",
                                QUESTION_TYPE_CHOICE,
                                new Array("asyncio", "tenacity", "requests", "httpx"),
                                "tenacity",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q11",
                                "Which callback is used to track OpenAI token usage and costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("StdOutCallbackHandler", "get_openai_callback", "MetricsCallback", "TokenCallback"),
                                "get_openai_callback",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q12",
                                "What is the target success rate for production LangChain applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("> 70%", "> 80%", "> 90%", "> 95%"),
                                "> 95%",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q13",
                                "Which caching strategy is best for production environments with multiple servers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("InMemoryCache", "SQLiteCache", "RedisCache", "FileCache"),
                                "RedisCache",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q14",
                                "What is the primary security risk of not validating user inputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increased costs", "Prompt injection attacks", "Slower performance", "Memory leaks"),
                                "Prompt injection attacks",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q15",
                                "Which AWS service is recommended for managing API keys in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("S3", "EC2", "Secrets Manager", "Lambda"),
                                "Secrets Manager",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q16",
                                "What is the main benefit of using RunnableParallel?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced costs", "Concurrent execution of multiple chains", "Better error handling", "Automatic caching"),
                                "Concurrent execution of multiple chains",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q17",
                                "Which output parser provides type-safe validation using Python models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("StrOutputParser", "JsonOutputParser", "PydanticOutputParser", "ListOutputParser"),
                                "PydanticOutputParser",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q18",
                                "What is the purpose of MessagesPlaceholder in prompts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To add system messages", "To reserve space for conversation history", "To validate messages", "To compress messages"),
                                "To reserve space for conversation history",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q19",
                                "Which text splitter is recommended for most use cases?",
                                QUESTION_TYPE_CHOICE,
                                new Array("CharacterTextSplitter", "RecursiveCharacterTextSplitter", "TokenTextSplitter", "SentenceTextSplitter"),
                                "RecursiveCharacterTextSplitter",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q20",
                                "What is a key advantage of LangChain over direct API calls?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower latency", "Provider-agnostic interface", "Reduced costs", "Simpler code"),
                                "Provider-agnostic interface",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q21",
                                "When should you consider NOT using LangChain?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Complex multi-step workflows", "Simple single API calls", "RAG implementations", "Agent-based systems"),
                                "Simple single API calls",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q22",
                                "What is the recommended approach for handling PII in LLM applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore it", "Mask or remove before sending to LLM", "Send encrypted", "Store separately"),
                                "Mask or remove before sending to LLM",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q23",
                                "Which agent type is best for models without native function calling?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tool Calling Agent", "ReAct Agent", "Structured Chat Agent", "OpenAI Functions Agent"),
                                "ReAct Agent",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q24",
                                "What is the purpose of ContextualCompressionRetriever in RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To compress embeddings", "To extract only relevant parts of retrieved documents", "To reduce storage size", "To speed up retrieval"),
                                "To extract only relevant parts of retrieved documents",
                                "obj_final")
                );

test.AddQuestion( new Question ("langchain.final.q25",
                                "Which strategy helps reduce costs by avoiding repeated identical requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Streaming", "Caching", "Batching", "Async processing"),
                                "Caching",
                                "obj_final")
                );
