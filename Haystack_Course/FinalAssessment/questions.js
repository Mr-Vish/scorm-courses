test.AddQuestion( new Question ("q1",
                                "Which Haystack component property ensures that connections between components are validated at pipeline construction time?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Statelessness", "Type safety", "Serializability", "Modularity"),
                                "Type safety",
                                "obj_final")
                );

test.AddQuestion( new Question ("q2",
                                "What is the recommended chunk size range in tokens for optimal retrieval quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-50 tokens", "100-500 tokens", "1000-2000 tokens", "5000+ tokens"),
                                "100-500 tokens",
                                "obj_final")
                );

test.AddQuestion( new Question ("q3",
                                "Which document store provides hybrid search capabilities combining vector and full-text search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("InMemoryDocumentStore", "ChromaDocumentStore", "ElasticsearchDocumentStore", "QdrantDocumentStore"),
                                "ElasticsearchDocumentStore",
                                "obj_final")
                );

test.AddQuestion( new Question ("q4",
                                "In batch processing for large datasets, what is the primary benefit of processing documents in batches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improved accuracy", "Memory efficiency", "Faster embedding generation", "Better security"),
                                "Memory efficiency",
                                "obj_final")
                );

test.AddQuestion( new Question ("q5",
                                "What problem does RAG specifically address regarding LLM knowledge cutoff dates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces computational costs", "Provides access to current, updated information", "Improves response speed", "Simplifies model training"),
                                "Provides access to current, updated information",
                                "obj_final")
                );

test.AddQuestion( new Question ("q6",
                                "Which join mode in DocumentJoiner uses reciprocal rank fusion to combine retrieval results?",
                                QUESTION_TYPE_CHOICE,
                                new Array("merge", "concatenate", "reciprocal_rank_fusion", "weighted_average"),
                                "reciprocal_rank_fusion",
                                "obj_final")
                );

test.AddQuestion( new Question ("q7",
                                "What is the purpose of the normalize_embeddings parameter in SentenceTransformersDocumentEmbedder?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce embedding dimensions", "To ensure embeddings work correctly with cosine similarity", "To improve processing speed", "To compress storage requirements"),
                                "To ensure embeddings work correctly with cosine similarity",
                                "obj_final")
                );

test.AddQuestion( new Question ("q8",
                                "Which Jinja2 feature allows conditional logic in prompt templates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Loops only", "Variables only", "If-else statements and loops", "Functions only"),
                                "If-else statements and loops",
                                "obj_final")
                );

test.AddQuestion( new Question ("q9",
                                "What does the max_tokens parameter control in LLM generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Input prompt length", "Maximum response length", "Embedding dimensions", "Batch size"),
                                "Maximum response length",
                                "obj_final")
                );

test.AddQuestion( new Question ("q10",
                                "Which evaluator would you use to assess the ranking quality of retrieved documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SASEvaluator", "FaithfulnessEvaluator", "DocumentMRREvaluator", "ContextRelevanceEvaluator"),
                                "DocumentMRREvaluator",
                                "obj_final")
                );

test.AddQuestion( new Question ("q11",
                                "What is the primary advantage of using environment variables for configuration in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster execution", "Security and flexibility across environments", "Reduced memory usage", "Improved accuracy"),
                                "Security and flexibility across environments",
                                "obj_final")
                );

test.AddQuestion( new Question ("q12",
                                "Which scaling strategy involves distributing requests across multiple API instances?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Vertical scaling", "Horizontal scaling", "Diagonal scaling", "Circular scaling"),
                                "Horizontal scaling",
                                "obj_final")
                );

test.AddQuestion( new Question ("q13",
                                "What is the main disadvantage of Haystack's abstraction layer?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Limited LLM support", "Performance overhead from component orchestration", "Lack of documentation", "No evaluation tools"),
                                "Performance overhead from component orchestration",
                                "obj_final")
                );

test.AddQuestion( new Question ("q14",
                                "Which parameter in HNSW configuration controls the number of connections per layer?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ef_construct", "m", "top_k", "batch_size"),
                                "m",
                                "obj_final")
                );

test.AddQuestion( new Question ("q15",
                                "What is the purpose of metadata filtering in retrieval?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase embedding dimensions", "To narrow search space and improve relevance", "To reduce API costs", "To improve generation quality"),
                                "To narrow search space and improve relevance",
                                "obj_final")
                );

test.AddQuestion( new Question ("q16",
                                "Which component is responsible for persisting documents to a document store?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DocumentReader", "DocumentWriter", "DocumentProcessor", "DocumentManager"),
                                "DocumentWriter",
                                "obj_final")
                );

test.AddQuestion( new Question ("q17",
                                "What does a low faithfulness score indicate in RAG evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Poor retrieval quality", "Potential hallucinations in generated answers", "Slow response time", "High API costs"),
                                "Potential hallucinations in generated answers",
                                "obj_final")
                );

test.AddQuestion( new Question ("q18",
                                "Which deployment pattern is most suitable for enterprise applications requiring high availability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Single server deployment", "Container orchestration with Kubernetes", "Serverless functions", "Desktop application"),
                                "Container orchestration with Kubernetes",
                                "obj_final")
                );

test.AddQuestion( new Question ("q19",
                                "What is the recommended approach for handling API keys in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcode in source files", "Store in version control", "Use environment variables or secret managers", "Include in configuration files"),
                                "Use environment variables or secret managers",
                                "obj_final")
                );

test.AddQuestion( new Question ("q20",
                                "Which metric measures the average of reciprocal ranks of the first relevant document?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Precision", "Recall", "Mean Reciprocal Rank (MRR)", "F1 Score"),
                                "Mean Reciprocal Rank (MRR)",
                                "obj_final")
                );

test.AddQuestion( new Question ("q21",
                                "What is the primary benefit of pipeline serialization to YAML?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster execution", "Version control and environment portability", "Reduced file size", "Automatic optimization"),
                                "Version control and environment portability",
                                "obj_final")
                );

test.AddQuestion( new Question ("q22",
                                "Which retrieval strategy is best for handling synonyms and paraphrasing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("BM25 (sparse retrieval)", "Embedding-based (dense retrieval)", "Exact keyword matching", "Regular expressions"),
                                "Embedding-based (dense retrieval)",
                                "obj_final")
                );

test.AddQuestion( new Question ("q23",
                                "What does the score_threshold parameter control in retrievers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximum number of results", "Minimum similarity score for returned documents", "Embedding quality", "Processing timeout"),
                                "Minimum similarity score for returned documents",
                                "obj_final")
                );

test.AddQuestion( new Question ("q24",
                                "Which cost optimization strategy is most effective for reducing LLM API expenses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using larger models", "Aggressive caching of responses", "Increasing top_k", "Disabling monitoring"),
                                "Aggressive caching of responses",
                                "obj_final")
                );

test.AddQuestion( new Question ("q25",
                                "What is the main advantage of Haystack's LLM-agnostic design?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster processing", "No vendor lock-in, easy provider switching", "Lower costs", "Better accuracy"),
                                "No vendor lock-in, easy provider switching",
                                "obj_final")
                );
