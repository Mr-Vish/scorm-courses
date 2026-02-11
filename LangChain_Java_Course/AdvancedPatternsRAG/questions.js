test.AddQuestion( new Question ("rag_q1",
                                "What does RAG stand for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Rapid AI Generation", "Retrieval-Augmented Generation", "Real-time API Gateway", "Recursive Agent Generation"),
                                "Retrieval-Augmented Generation",
                                "obj_rag"
                ));

test.AddQuestion( new Question ("rag_q2",
                                "What is the primary purpose of vector embeddings in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To compress data", "To capture semantic meaning of text as numerical vectors", "To encrypt sensitive information", "To reduce API costs"),
                                "To capture semantic meaning of text as numerical vectors",
                                "obj_rag"
                ));

test.AddQuestion( new Question ("rag_q3",
                                "Which vector database is a PostgreSQL extension?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Chroma", "Pinecone", "PgVector", "Weaviate"),
                                "PgVector",
                                "obj_rag"
                ));

test.AddQuestion( new Question ("rag_q4",
                                "What is the recommended chunk size for document splitting in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50-100 tokens", "300-500 tokens", "1000-2000 tokens", "5000+ tokens"),
                                "300-500 tokens",
                                "obj_rag"
                ));

test.AddQuestion( new Question ("rag_q5",
                                "Which similarity metric is most commonly used for vector search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Euclidean Distance", "Manhattan Distance", "Cosine Similarity", "Hamming Distance"),
                                "Cosine Similarity",
                                "obj_rag"
                ));

test.AddQuestion( new Question ("rag_q6",
                                "What is the purpose of chunk overlap in document splitting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase storage size", "To prevent context loss at chunk boundaries", "To improve compression", "To reduce processing time"),
                                "To prevent context loss at chunk boundaries",
                                "obj_rag"
                ));

test.AddQuestion( new Question ("rag_q7",
                                "Which OpenAI embedding model has 1536 dimensions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("text-embedding-ada-001", "text-embedding-3-small", "text-embedding-3-large", "text-embedding-base"),
                                "text-embedding-3-small",
                                "obj_rag"
                ));

test.AddQuestion( new Question ("rag_q8",
                                "What is hybrid search in the context of RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using multiple LLM providers", "Combining vector search with keyword search", "Searching multiple databases", "Using both embeddings and images"),
                                "Combining vector search with keyword search",
                                "obj_rag"
                ));
