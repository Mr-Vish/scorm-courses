test.AddQuestion( new Question ("q1_m1",
                                "What is the primary advantage of Retrieval-Augmented Generation (RAG) over standalone LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RAG systems are faster than LLMs", "RAG grounds responses in external, verifiable knowledge sources", "RAG eliminates the need for embedding models", "RAG requires less computational resources"),
                                "RAG grounds responses in external, verifiable knowledge sources",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2_m1",
                                "In the RAG pipeline, which phase involves converting documents into vector embeddings?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Querying phase", "Indexing phase", "Response synthesis phase", "Retrieval phase"),
                                "Indexing phase",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3_m1",
                                "Which LlamaIndex component is specifically responsible for loading data from external sources like PDFs, databases, and APIs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Query Engines", "Response Synthesizers", "Data Connectors (Readers)", "Node Parsers"),
                                "Data Connectors (Readers)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4_m1",
                                "What is the fundamental unit that gets embedded and indexed in LlamaIndex?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Documents", "Nodes", "Paragraphs", "Sentences"),
                                "Nodes",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5_m1",
                                "Which index type is most appropriate for semantic search based on conceptual similarity?",
                                QUESTION_TYPE_CHOICE,
                                new Array("KeywordTableIndex", "VectorStoreIndex", "SummaryIndex", "TreeIndex"),
                                "VectorStoreIndex",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6_m1",
                                "What is the main disadvantage of using very small chunk sizes (e.g., 64-128 tokens) in document processing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increased storage costs", "Loss of broader context and semantic coherence", "Slower embedding generation", "Incompatibility with vector databases"),
                                "Loss of broader context and semantic coherence",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7_m1",
                                "Why is chunk overlap important in document segmentation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces storage requirements", "It prevents information loss at chunk boundaries", "It speeds up the indexing process", "It eliminates the need for metadata"),
                                "It prevents information loss at chunk boundaries",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8_m1",
                                "Semantic chunking uses embeddings to identify natural topic boundaries in documents",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q9_m1",
                                "Which type of metadata enables filtering queries like 'only search documents from 2024'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Structural metadata", "Temporal metadata", "Categorical metadata", "Source metadata"),
                                "Temporal metadata",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q10_m1",
                                "What is the primary purpose of hierarchical node structures in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce storage costs", "To enable multi-level retrieval balancing precision and context", "To eliminate the need for embeddings", "To speed up document loading"),
                                "To enable multi-level retrieval balancing precision and context",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q11_m1",
                                "Vector embeddings transform text into high-dimensional numerical representations where semantic similarity corresponds to geometric proximity",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q12_m1",
                                "Which similarity metric is most commonly used for text embeddings and is magnitude-invariant?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Euclidean distance", "Manhattan distance", "Cosine similarity", "Hamming distance"),
                                "Cosine similarity",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q13_m1",
                                "What does it mean that modern embeddings are 'contextual'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They only work with long documents", "The same word receives different vectors depending on surrounding words", "They require more storage space", "They can only be used with English text"),
                                "The same word receives different vectors depending on surrounding words",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q14_m1",
                                "Which training objective teaches embedding models to produce similar embeddings for semantically related texts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Gradient descent", "Contrastive learning", "Backpropagation", "Dropout regularization"),
                                "Contrastive learning",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q15_m1",
                                "Approximate Nearest Neighbor (ANN) algorithms trade perfect accuracy for dramatic speed improvements in similarity search",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );
