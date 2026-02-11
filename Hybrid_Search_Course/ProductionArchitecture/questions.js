test.AddQuestion( new Question ("q1",
                                "In a production indexing pipeline, what is the primary purpose of document chunking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce storage costs", "To improve retrieval precision by creating smaller, focused searchable units", "To speed up embedding generation", "To compress the document content"),
                                "To improve retrieval precision by creating smaller, focused searchable units",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q2",
                                "Which chunking strategy would be MOST appropriate for a legal document database where context across sections is critical?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fixed size chunks without overlap", "Sliding window with 50-token overlap", "Semantic chunking at sentence boundaries", "Single chunk per document"),
                                "Sliding window with 50-token overlap",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3",
                                "What is the typical target for p95 query latency in a production search system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Under 50ms", "Under 200ms", "Under 500ms", "Under 1000ms"),
                                "Under 200ms",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q4",
                                "In the query pipeline, at which stage should filters extracted from query understanding be applied?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Before any search execution", "After RRF fusion but before re-ranking", "After re-ranking", "Filters should not be used in hybrid search"),
                                "After RRF fusion but before re-ranking",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q5",
                                "Which caching strategy would provide the MOST benefit for a search system with repetitive queries?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cache only the final search results", "Cache query embeddings and frequent query results", "Cache only the BM25 results", "Disable caching to ensure fresh results"),
                                "Cache query embeddings and frequent query results",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q6",
                                "What is the recommended approach for monitoring search quality in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only monitor error rates", "Track click-through rate, MRR, and NDCG metrics", "Monitor only query latency", "Quality monitoring is not necessary"),
                                "Track click-through rate, MRR, and NDCG metrics",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q7",
                                "Why is batch processing recommended for embedding generation in the indexing pipeline?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces storage requirements", "It improves GPU utilization and throughput", "It ensures better embedding quality", "It is required by all embedding models"),
                                "It improves GPU utilization and throughput",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q8",
                                "In a three-pipeline architecture (indexing, query, response), which pipeline typically has the strictest latency requirements?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Indexing pipeline", "Query pipeline", "Response pipeline", "All have equal requirements"),
                                "Query pipeline",
                                "obj_module_3")
                );
