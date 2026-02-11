test.AddQuestion( new Question ("lc4j_q1",
                                "Which dependency is required for the core LangChain4j library?",
                                QUESTION_TYPE_CHOICE,
                                new Array("langchain4j", "langchain4j-core", "langchain-java", "langchain4j-api"),
                                "langchain4j",
                                "obj_langchain4j"
                ));

test.AddQuestion( new Question ("lc4j_q2",
                                "What is the primary advantage of LangChain4j being framework-agnostic?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's faster than Spring AI", "It works with any Java framework including plain Java", "It has more features", "It's easier to learn"),
                                "It works with any Java framework including plain Java",
                                "obj_langchain4j"
                ));

test.AddQuestion( new Question ("lc4j_q3",
                                "Which interface is used for stateless single-turn interactions in LangChain4j?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ChatModel", "ChatLanguageModel", "SingleTurnModel", "StatelessChat"),
                                "ChatLanguageModel",
                                "obj_langchain4j"
                ));

test.AddQuestion( new Question ("lc4j_q4",
                                "What does the MessageWindowChatMemory.withMaxMessages(10) method do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Limits message length to 10 characters", "Keeps the last 10 messages in memory", "Allows 10 concurrent users", "Sets timeout to 10 seconds"),
                                "Keeps the last 10 messages in memory",
                                "obj_langchain4j"
                ));

test.AddQuestion( new Question ("lc4j_q5",
                                "Which annotation is used to mark methods as callable functions for LLMs in LangChain4j?",
                                QUESTION_TYPE_CHOICE,
                                new Array("@Function", "@Tool", "@Callable", "@AIMethod"),
                                "@Tool",
                                "obj_langchain4j"
                ));

test.AddQuestion( new Question ("lc4j_q6",
                                "What is the purpose of AI Services in LangChain4j?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To host AI models locally", "To provide high-level abstraction using Java interfaces", "To manage API keys", "To cache responses"),
                                "To provide high-level abstraction using Java interfaces",
                                "obj_langchain4j"
                ));

test.AddQuestion( new Question ("lc4j_q7",
                                "Which memory implementation limits memory by token count instead of message count?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MessageWindowChatMemory", "TokenWindowChatMemory", "TokenLimitMemory", "CountBasedMemory"),
                                "TokenWindowChatMemory",
                                "obj_langchain4j"
                ));

test.AddQuestion( new Question ("lc4j_q8",
                                "What does the temperature parameter control in LLM configuration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("API response time", "Randomness and creativity of responses", "Token usage cost", "Model accuracy"),
                                "Randomness and creativity of responses",
                                "obj_langchain4j"
                ));
