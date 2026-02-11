test.AddQuestion( new Question ("q1_m2",
                                "Which response synthesis mode provides the highest quality answers but requires the most LLM API calls?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compact mode", "Simple concatenate mode", "Refine mode", "Tree summarize mode"),
                                "Refine mode",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2_m2",
                                "What is the primary purpose of a chat engine compared to a query engine?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "To maintain conversation history for multi-turn dialogues", "To eliminate the need for embeddings", "To speed up retrieval"),
                                "To maintain conversation history for multi-turn dialogues",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3_m2",
                                "In the 'condense plus context' chat mode, what happens to the conversation history?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is deleted after each turn", "It is condensed with the current query into a standalone question", "It is stored in a separate database", "It is ignored during retrieval"),
                                "It is condensed with the current query into a standalone question",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4_m2",
                                "What is the main advantage of hybrid search over pure vector search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is always faster", "It combines semantic understanding with exact keyword matching", "It requires less storage", "It eliminates the need for embeddings"),
                                "It combines semantic understanding with exact keyword matching",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5_m2",
                                "Re-ranking uses cross-encoder models that process query and document together for more accurate relevance scoring",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6_m2",
                                "What is the purpose of Hypothetical Document Embeddings (HyDE)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce storage costs", "To generate a hypothetical answer that is embedded and used for retrieval", "To eliminate the need for vector databases", "To speed up indexing"),
                                "To generate a hypothetical answer that is embedded and used for retrieval",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7_m2",
                                "Which query transformation technique breaks complex queries into simpler sub-queries?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Query expansion", "Query decomposition", "Query rewriting", "Query filtering"),
                                "Query decomposition",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8_m2",
                                "Pre-filtering applies metadata filters before vector search, while post-filtering applies them after retrieval",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q9_m2",
                                "Which index type is most appropriate for queries about entity relationships like 'Who worked with whom?'",
                                QUESTION_TYPE_CHOICE,
                                new Array("VectorStoreIndex", "SummaryIndex", "KeywordTableIndex", "KnowledgeGraphIndex"),
                                "KnowledgeGraphIndex",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q10_m2",
                                "What is the primary benefit of using a TreeIndex?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster retrieval than vector search", "Hierarchical navigation from broad summaries to specific details", "Lower storage costs", "No need for embeddings"),
                                "Hierarchical navigation from broad summaries to specific details",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q11_m2",
                                "Which vector database is described as an embedded database that runs in-process and is perfect for prototyping?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Pinecone", "Milvus", "Chroma", "Weaviate"),
                                "Chroma",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q12_m2",
                                "Dimensionality reduction techniques can compress embeddings while preserving most semantic information",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q13_m2",
                                "What is the purpose of index partitioning in large-scale RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To eliminate the need for vector databases", "To divide indexes by logical boundaries for better scalability and performance", "To reduce embedding dimensions", "To speed up document loading"),
                                "To divide indexes by logical boundaries for better scalability and performance",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q14_m2",
                                "In a blue-green deployment strategy for reindexing, what happens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The old index is immediately deleted", "A new index is built alongside the old one, then traffic is switched", "Documents are gradually migrated one at a time", "The system goes offline during the update"),
                                "A new index is built alongside the old one, then traffic is switched",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q15_m2",
                                "Reciprocal Rank Fusion (RRF) is a method for combining results from multiple retrieval strategies in hybrid search",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );
