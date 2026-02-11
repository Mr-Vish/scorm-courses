test.AddQuestion( new Question ("q1",
                                "What is the primary benefit of Retrieval-Augmented Generation (RAG) over standalone LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster response times", "Lower computational costs", "Responses grounded in factual, up-to-date information", "Simpler implementation"),
                                "Responses grounded in factual, up-to-date information",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2",
                                "Which retrieval method uses term frequency and inverse document frequency for ranking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Embedding Retriever", "BM25 Retriever", "Hybrid Retriever", "Filter Retriever"),
                                "BM25 Retriever",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3",
                                "What is the purpose of the DocumentJoiner component in hybrid retrieval?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To split documents into chunks", "To combine results from multiple retrievers", "To filter irrelevant documents", "To embed documents"),
                                "To combine results from multiple retrievers",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4",
                                "Which temperature setting is recommended for factual RAG responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.8 - 1.0 (high creativity)", "0.5 - 0.7 (balanced)", "0.1 - 0.3 (low randomness)", "1.5 - 2.0 (maximum creativity)"),
                                "0.1 - 0.3 (low randomness)",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5",
                                "What does the top_k parameter control in a retriever?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximum token length", "Number of documents to retrieve", "Embedding dimensions", "Query processing threads"),
                                "Number of documents to retrieve",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6",
                                "Which prompt engineering principle helps prevent off-topic responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using longer prompts", "Setting boundaries and constraints", "Increasing temperature", "Removing context"),
                                "Setting boundaries and constraints",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7",
                                "What is the advantage of streaming responses in production applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced API costs", "Better user experience with progressive output", "Higher accuracy", "Simpler error handling"),
                                "Better user experience with progressive output",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8",
                                "In a RAG pipeline, which component is responsible for constructing the final prompt sent to the LLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retriever", "Embedder", "PromptBuilder", "Generator"),
                                "PromptBuilder",
                                "obj_module_2")
                );
