test.AddQuestion( new Question ("q1",
                                "In a hybrid search system, which scenario would benefit MOST from BM25 keyword search over vector search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Searching for 'best practices for API design'", "Finding document with ID 'TICKET-5678'", "Looking for content about 'machine learning concepts'", "Searching for 'how to improve code quality'"),
                                "Finding document with ID 'TICKET-5678'",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What is the primary reason RRF (Reciprocal Rank Fusion) does not require score normalization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses machine learning to calibrate scores", "It operates on rank positions rather than raw scores", "It only works with normalized scores", "It averages all scores automatically"),
                                "It operates on rank positions rather than raw scores",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "In the RRF formula, what is the purpose of the constant k (typically set to 60)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To limit the number of results returned", "To prevent top-ranked items from dominating the fusion", "To set the minimum score threshold", "To define the number of search engines to combine"),
                                "To prevent top-ranked items from dominating the fusion",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "Which fusion strategy would be MOST appropriate for a system with strict latency requirements under 100ms?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Re-ranking with cross-encoder on all results", "RRF fusion with multi-query expansion", "Cascade approach using BM25 first, then vector search on top results", "Weighted sum with score normalization"),
                                "Cascade approach using BM25 first, then vector search on top results",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "A user searches for 'car maintenance tips'. Vector search returns documents about 'automobile servicing' and 'vehicle care'. This demonstrates which key advantage of vector search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Exact term matching", "Synonym and semantic understanding", "Faster query processing", "Lower storage requirements"),
                                "Synonym and semantic understanding",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "In Elasticsearch hybrid search, what does the 'num_candidates' parameter in kNN search control?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The final number of results to return", "The number of candidates to consider before applying filters", "The size of the embedding vector", "The number of shards to query"),
                                "The number of candidates to consider before applying filters",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7",
                                "Which statement about BM25 and vector search storage requirements is correct?",
                                QUESTION_TYPE_CHOICE,
                                new Array("BM25 requires more storage due to inverted indices", "Vector search requires more storage due to dense embeddings", "Both require approximately equal storage", "Storage requirements depend only on document count"),
                                "Vector search requires more storage due to dense embeddings",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8",
                                "When would weighted sum fusion be preferred over RRF?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When you want to avoid any configuration", "When you have domain knowledge about optimal contribution ratios", "When combining more than two result sets", "When working with very large datasets"),
                                "When you have domain knowledge about optimal contribution ratios",
                                "obj_module_1")
                );
