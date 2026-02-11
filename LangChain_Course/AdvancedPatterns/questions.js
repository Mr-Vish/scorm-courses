test.AddQuestion( new Question ("langchain.module2.q1",
                                "What is the key difference between agents and chains in LangChain?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Agents are faster than chains", "Agents dynamically decide actions while chains follow fixed sequences", "Chains can use tools but agents cannot", "Agents only work with OpenAI models"),
                                "Agents dynamically decide actions while chains follow fixed sequences",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("langchain.module2.q2",
                                "Which agent type is recommended for modern models with native function calling?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ReAct Agent", "Tool Calling Agent", "Structured Chat Agent", "Plan-and-Execute Agent"),
                                "Tool Calling Agent",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("langchain.module2.q3",
                                "What decorator is used to create custom tools in LangChain?",
                                QUESTION_TYPE_CHOICE,
                                new Array("@custom_tool", "@tool", "@function", "@agent_tool"),
                                "@tool",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("langchain.module2.q4",
                                "Which parameter should you set to prevent agents from running indefinitely?",
                                QUESTION_TYPE_CHOICE,
                                new Array("timeout", "max_iterations", "stop_condition", "iteration_limit"),
                                "max_iterations",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("langchain.module2.q5",
                                "What is the purpose of using Pydantic models in custom tools?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make tools run faster", "To provide input validation and schema definition", "To enable async execution", "To reduce token usage"),
                                "To provide input validation and schema definition",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("langchain.module2.q6",
                                "Which memory type is best for managing long conversations without exceeding token limits?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ConversationBufferMemory", "ConversationSummaryMemory", "ConversationBufferWindowMemory", "VectorStoreMemory"),
                                "ConversationSummaryMemory",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("langchain.module2.q7",
                                "What is the purpose of MessagesPlaceholder in conversation memory?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To delete old messages", "To reserve space for conversation history in prompts", "To compress messages", "To validate message format"),
                                "To reserve space for conversation history in prompts",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("langchain.module2.q8",
                                "In RAG systems, what is the purpose of the text splitter?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To remove unnecessary text", "To break documents into manageable chunks for embedding", "To translate text", "To compress documents"),
                                "To break documents into manageable chunks for embedding",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("langchain.module2.q9",
                                "Which retrieval strategy returns diverse results by balancing relevance and diversity?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Similarity search", "MMR (Maximum Marginal Relevance)", "Keyword search", "Threshold search"),
                                "MMR (Maximum Marginal Relevance)",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("langchain.module2.q10",
                                "What is the recommended chunk overlap percentage for text splitting in RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0-5%", "10-20%", "40-50%", "60-70%"),
                                "10-20%",
                                "obj_module_2")
                );
