test.AddQuestion( new Question ("com.scorm.vector.databases.compared.m1_q1",
                                "What is a key characteristic of Embedding: Convert text/images to numerical vectors (e.g., 1536 dimensions)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Need managed service at scale: Pinecone (serverless or dedicated)", "Prototyping, small apps", "Embedding: Convert text/images to numerical vectors (e.g., 1536 dimensions)", "Already using PostgreSQL: pgvector (no new infrastructure)"),
                                "Embedding: Convert text/images to numerical vectors (e.g., 1536 dimensions)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.vector.databases.compared.m1_q2",
                                "How is Indexing: Build search-optimized index structures (HNSW, IVF, etc.) best defined in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Higher dims = slower search, more storage", "Indexing: Build search-optimized index structures (HNSW, IVF, etc.)", "Self-hosted/Cloud", "Filtering: Apply metadata filters alongside vector similarity"),
                                "Indexing: Build search-optimized index structures (HNSW, IVF, etc.)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.vector.databases.compared.m1_q3",
                                "Which of the following is true regarding Querying: Convert query to vector, find nearest neighbors?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Already using PostgreSQL: pgvector (no new infrastructure)", "Querying: Convert query to vector, find nearest neighbors", "Production at scale", "Prototyping, small apps"),
                                "Querying: Convert query to vector, find nearest neighbors",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.vector.databases.compared.m1_q4",
                                "What role does Filtering: Apply metadata filters alongside vector similarity play in Vector Database Fundamentals?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Free (open source)", "Filtering: Apply metadata filters alongside vector similarity", "Existing PostgreSQL users", "Free (with PostgreSQL)"),
                                "Filtering: Apply metadata filters alongside vector similarity",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.vector.databases.compared.m1_q5",
                                "What is the primary purpose of Prototyping/Local dev: ChromaDB (zero setup, in-memory or persistent)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Decision Framework", "Prototyping/Local dev: ChromaDB (zero setup, in-memory or persistent)", "Free (self-host) or Cloud", "Billions of vectors"),
                                "Prototyping/Local dev: ChromaDB (zero setup, in-memory or persistent)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.vector.databases.compared.m1_q6",
                                "In the context of Vector Database Fundamentals, what does Already using PostgreSQL: pgvector (no new infrastructure) refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("How Vector Search Works", "Already using PostgreSQL: pgvector (no new infrastructure)", "Billions of vectors", "Higher dims = slower search, more storage"),
                                "Already using PostgreSQL: pgvector (no new infrastructure)",
                                "obj_module_1")
                );