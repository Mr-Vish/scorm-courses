test.AddQuestion( new Question ("com.scorm.rag.advanced.m2_q1",
                                "What is the core idea behind Hypothetical Document Embeddings (HyDE)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Searching for documents using the user's original query", "Asking an LLM to generate a hypothetical answer and using that answer for the vector search", "Deleting the user's query and starting from scratch", "Searching only for metadata"),
                                "Asking an LLM to generate a hypothetical answer and using that answer for the vector search",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.rag.advanced.m2_q2",
                                "How does GraphRAG improve over standard Vector RAG for global questions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is faster and cheaper", "It uses community summaries and structured relationships in a knowledge graph to provide holistic, dataset-wide answers", "It only uses a single document", "It doesn't use an LLM"),
                                "It uses community summaries and structured relationships in a knowledge graph to provide holistic, dataset-wide answers",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.rag.advanced.m2_q3",
                                "What is the primary objective of Contextual Compression?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make the prompt longer", "To extract only the most relevant parts of retrieved documents, reducing noise and token usage", "To encrypt the retrieved documents", "To translate the documents into different languages"),
                                "To extract only the most relevant parts of retrieved documents, reducing noise and token usage",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.rag.advanced.m2_q4",
                                "In the RAGAS framework, what does 'Faithfulness' (Groundedness) measure?",
                                QUESTION_TYPE_CHOICE,
                                new Array("If the answer is helpful to the user", "If the generated answer is supported by the retrieved context", "The speed of the retrieval step", "The cost of the API call"),
                                "If the generated answer is supported by the retrieved context",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.rag.advanced.m2_q5",
                                "What defines an 'Agentic RAG' system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A system that only performs one search", "A system where an AI agent iteratively decides which information to retrieve and how to solve the task", "A system that doesn't use any tools", "A system where a human does the retrieval"),
                                "A system where an AI agent iteratively decides which information to retrieve and how to solve the task",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.rag.advanced.m2_q6",
                                "What is a key benefit of 'Long-Context RAG' enabled by models with large context windows?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses the smallest possible chunks of text", "It retrieves large blocks of data (e.g., entire chapters), providing the model with more nuance and complete context", "It reduces the total number of input tokens", "It makes retrieval redundant"),
                                "It retrieves large blocks of data (e.g., entire chapters), providing the model with more nuance and complete context",
                                "obj_module_2")
                );