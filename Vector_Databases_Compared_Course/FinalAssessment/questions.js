// Final Comprehensive Assessment
// Covers all 1 modules


test.AddQuestion( new Question ("com.scorm.vector.databases.compared.final_q1",
                                "Regarding Vector Database Fundamentals: Which of the following best describes Need managed service at scale: Pinecone (serverless or dedicated)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Need managed service at scale: Pinecone (serverless or dedicated)", "The Need for Vector Search", "Self-hosted/Cloud", "Comparison Matrix"),
                                "Need managed service at scale: Pinecone (serverless or dedicated)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.vector.databases.compared.final_q2",
                                "Regarding Vector Database Fundamentals: What is the primary purpose of Need hybrid keyword+vector search: Weaviate (built-in BM25 + vector)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Embedding: Convert text/images to numerical vectors (e.g., 1536 dimensions)", "Need hybrid keyword+vector search: Weaviate (built-in BM25 + vector)", "Pre-filtering reduces search space", "Indexing: Build search-optimized index structures (HNSW, IVF, etc.)"),
                                "Need hybrid keyword+vector search: Weaviate (built-in BM25 + vector)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.vector.databases.compared.final_q3",
                                "Regarding Vector Database Fundamentals: Which statement about Self-hosted/Cloud is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PostgreSQL extension", "HNSW for speed, IVFFlat for memory", "Prototyping/Local dev: ChromaDB (zero setup, in-memory or persistent)", "Self-hosted/Cloud"),
                                "Self-hosted/Cloud",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.vector.databases.compared.final_q4",
                                "Regarding Vector Database Fundamentals: In the context of Vector Database Fundamentals, what does PostgreSQL extension refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PostgreSQL extension", "Use 768-1536, avoid 4096+", "How Vector Search Works", "Pre-filtering reduces search space"),
                                "PostgreSQL extension",
                                "obj_final_assessment")
                );