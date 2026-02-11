test.AddQuestion( new Question ("qf1",
                                "What distinguishes parametric knowledge from non-parametric knowledge in AI systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Parametric knowledge is stored in model weights; non-parametric is retrieved externally", "Parametric knowledge is faster to access", "Non-parametric knowledge requires more storage", "They are the same thing"),
                                "Parametric knowledge is stored in model weights; non-parametric is retrieved externally",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf2",
                                "In the RAG pipeline, which phase occurs offline and involves converting documents into embeddings?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Querying phase", "Indexing phase", "Synthesis phase", "Evaluation phase"),
                                "Indexing phase",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf3",
                                "What is the primary trade-off when choosing between small and large chunk sizes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cost versus speed", "Precision versus context completeness", "Storage versus retrieval speed", "Security versus performance"),
                                "Precision versus context completeness",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf4",
                                "Cosine similarity measures the angle between vectors and is magnitude-invariant",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("qf5",
                                "Which embedding model characteristic refers to the same word receiving different vectors based on surrounding context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Dimensionality", "Density", "Context sensitivity", "Sparsity"),
                                "Context sensitivity",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf6",
                                "What is the main advantage of using hierarchical node structures in document processing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced storage costs", "Multi-level retrieval balancing precision and context", "Faster embedding generation", "Elimination of metadata requirements"),
                                "Multi-level retrieval balancing precision and context",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf7",
                                "Which response synthesis mode processes retrieved nodes sequentially, refining the answer with each node?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compact mode", "Refine mode", "Simple concatenate mode", "Tree summarize mode"),
                                "Refine mode",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf8",
                                "Hybrid search combines vector-based semantic search with keyword-based search (BM25) to leverage strengths of both approaches",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("qf9",
                                "What does re-ranking accomplish in advanced retrieval pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces storage costs", "It refines initial retrieval results using more sophisticated relevance models", "It eliminates the need for embeddings", "It speeds up vector search"),
                                "It refines initial retrieval results using more sophisticated relevance models",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf10",
                                "Which query transformation technique generates a hypothetical answer that is then embedded for retrieval?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Query expansion", "Query decomposition", "Hypothetical Document Embeddings (HyDE)", "Query rewriting"),
                                "Hypothetical Document Embeddings (HyDE)",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf11",
                                "A KnowledgeGraphIndex is most appropriate for relationship-based queries like 'Who worked with whom?'",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("qf12",
                                "What is the purpose of dimensionality reduction techniques like PCA in vector embeddings?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase retrieval accuracy", "To compress embeddings while preserving semantic information", "To eliminate the need for vector databases", "To speed up document loading"),
                                "To compress embeddings while preserving semantic information",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf13",
                                "Which cost component typically represents the largest expense in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Embedding costs", "Vector database storage", "LLM generation costs", "Network bandwidth"),
                                "LLM generation costs",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf14",
                                "Semantic caching enables cache hits for paraphrased or similar questions by matching based on meaning rather than exact text",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("qf15",
                                "What security threat involves users crafting queries to manipulate the LLM into ignoring system instructions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SQL injection", "Prompt injection", "Cross-site scripting", "Buffer overflow"),
                                "Prompt injection",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf16",
                                "Under GDPR, embeddings of personal data are still considered personal data and subject to regulation",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("qf17",
                                "Which access control model assigns users to roles and grants document access based on those roles?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Attribute-Based Access Control (ABAC)", "Role-Based Access Control (RBAC)", "Discretionary Access Control (DAC)", "Mandatory Access Control (MAC)"),
                                "Role-Based Access Control (RBAC)",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf18",
                                "What does Precision@k measure in retrieval quality evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The speed of retrieval", "The percentage of retrieved documents that are actually relevant", "The total number of documents retrieved", "The cost per query"),
                                "The percentage of retrieved documents that are actually relevant",
                                "obj_final")
                );

test.AddQuestion( new Question ("qf19",
                                "Faithfulness measures whether an answer accurately reflects retrieved context without hallucination",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("qf20",
                                "What is the primary purpose of A/B testing in RAG system evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "To compare performance of two system variants with real users", "To speed up indexing", "To eliminate the need for monitoring"),
                                "To compare performance of two system variants with real users",
                                "obj_final")
                );
