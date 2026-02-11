test.AddQuestion( new Question ("com.scorm.rag.claude.m2_q1",
                                "Which Claude 3.5 Sonnet feature allows users to interact with RAG output (like code or diagrams) in a dedicated side window?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Caching", "Artifacts", "Tool Use", "Long Context"),
                                "Artifacts",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.m2_q2",
                                "What is the most effective optimization for reducing the cost and latency of long-context RAG in Claude?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using a smaller model", "Prompt Caching", "Metadata filtering only", "Removing all citations"),
                                "Prompt Caching",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.m2_q3",
                                "In the context of 'Agentic RAG', what is the role of Claude?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A passive receiver of information", "An active agent that decides which tools to call and which information to retrieve iteratively", "A tokenizer for the database", "A human-in-the-loop"),
                                "An active agent that decides which tools to call and which information to retrieve iteratively",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.m2_q4",
                                "What is a 'hallucination' in a RAG system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model responding too quickly", "The model making claims that are not supported by the provided source documents", "The model using too many XML tags", "The model failing to use JSON"),
                                "The model making claims that are not supported by the provided source documents",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.m2_q5",
                                "Which Claude-specific technique helps ensure the model outputs valid JSON every time?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Asking politely", "Assistant Prefilling (providing the opening '{')", "Using only small context windows", "Removing all metadata"),
                                "Assistant Prefilling (providing the opening '{')",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.m2_q6",
                                "Why should you use an 'Output Guard' model in a RAG pipeline?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To speed up retrieval", "To verify that the primary model's answer is faithful to the context and doesn't contain prohibited content", "To generate the initial query", "To manage the vector database"),
                                "To verify that the primary model's answer is faithful to the context and doesn't contain prohibited content",
                                "obj_module_2")
                );