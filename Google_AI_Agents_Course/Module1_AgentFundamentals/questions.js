test.AddQuestion( new Question ("q1",
                                "What is the primary purpose of an AI agent's reasoning engine?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Store conversation history", "Process inputs and decide on actions", "Execute API calls", "Generate embeddings"),
                                "Process inputs and decide on actions",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which reasoning pattern interleaves thinking and action steps?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Plan-and-Execute", "ReAct", "Chain-of-Thought", "Sequential Processing"),
                                "ReAct",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What is the maximum context window size for Gemini 1.5 Pro?",
                                QUESTION_TYPE_CHOICE,
                                new Array("32K tokens", "128K tokens", "1M tokens", "2M tokens"),
                                "2M tokens",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "Which component in Vertex AI Agent architecture provides step-by-step instructions for specific scenarios?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tools", "Extensions", "Playbooks", "Data Stores"),
                                "Playbooks",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is the main benefit of using type hints in Python function definitions for agent tools?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster execution", "Helps the LLM understand parameter types", "Reduces memory usage", "Enables parallel processing"),
                                "Helps the LLM understand parameter types",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "Which validation library is commonly used for tool input validation in Python?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Marshmallow", "Pydantic", "Cerberus", "Voluptuous"),
                                "Pydantic",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7",
                                "What is the primary purpose of grounding in AI agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improve response speed", "Reduce hallucinations with external knowledge", "Lower computational costs", "Enable parallel processing"),
                                "Reduce hallucinations with external knowledge",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8",
                                "Which Vertex AI service is best for searching enterprise documents and unstructured data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("BigQuery", "Cloud Storage", "Vertex AI Search", "Datastore"),
                                "Vertex AI Search",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q9",
                                "In RAG (Retrieval-Augmented Generation), what is the typical recommended chunk size for document splitting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("100-300 tokens", "500-1500 tokens", "2000-3000 tokens", "5000+ tokens"),
                                "500-1500 tokens",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q10",
                                "What percentage of overlap is typically recommended between document chunks in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0-5%", "10-20%", "30-40%", "50%+"),
                                "10-20%",
                                "obj_module_1")
                );
