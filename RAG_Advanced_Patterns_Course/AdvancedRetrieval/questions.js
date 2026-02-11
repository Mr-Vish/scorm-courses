test.AddQuestion( new Question ("com.scorm.rag.advanced.m1_q1",
                                "What is the primary benefit of Hybrid Search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is faster than vector search", "It combines the semantic understanding of vector search with the keyword precision of traditional search (BM25)", "It requires no vector database", "It only works with images"),
                                "It combines the semantic understanding of vector search with the keyword precision of traditional search (BM25)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.rag.advanced.m1_q2",
                                "Which algorithm is commonly used in Hybrid Search to combine and rank results from different search methods?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Backpropagation", "Reciprocal Rank Fusion (RRF)", "Gradient Descent", "K-Means Clustering"),
                                "Reciprocal Rank Fusion (RRF)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.rag.advanced.m1_q3",
                                "What is a 'Cross-Encoder' in the context of Reranking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A model that encodes query and document separately", "A high-precision model that processes the query and document together to determine relevance", "A model that translates text between languages", "A model used for generating images from text"),
                                "A high-precision model that processes the query and document together to determine relevance",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.rag.advanced.m1_q4",
                                "Why is Reranking usually performed as a second stage after initial retrieval?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Because initial retrieval is too accurate", "Because cross-encoders are too slow to run against the entire database, so they only process a small set of candidates", "Because it is required by the RAGAS framework", "Because it reduces the cost of the embedding model"),
                                "Because cross-encoders are too slow to run against the entire database, so they only process a small set of candidates",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.rag.advanced.m1_q5",
                                "Which vector indexing algorithm uses a hierarchical graph structure to provide extremely fast, high-recall search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("IVF", "HNSW", "Flat Index", "Binary Search"),
                                "HNSW",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.rag.advanced.m1_q6",
                                "When would you choose an IVF index over an HNSW index?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When you need the absolute highest search speed", "When you have a massive dataset and need to be more memory-efficient", "When you only have a few hundred documents", "IVF is never better than HNSW"),
                                "When you have a massive dataset and need to be more memory-efficient",
                                "obj_module_1")
                );