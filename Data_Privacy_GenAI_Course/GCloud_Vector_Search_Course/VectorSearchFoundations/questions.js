// Assessment 1: Vector Search Foundations
// Covers embeddings, similarity metrics, indexing algorithms, and architecture
// Answer distribution: A=2, B=3, C=3, D=2 (20%, 30%, 30%, 20%)

test.AddQuestion( new Question ("q1",
                                "What is the primary advantage of using embeddings over traditional one-hot encoding for text representation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Embeddings capture semantic relationships between words", "Embeddings work only with English text", "Embeddings require less storage space", "Embeddings are faster to compute"),
                                "Embeddings capture semantic relationships between words",
                                "obj_assessment1")
                );

test.AddQuestion( new Question ("q2",
                                "Which embedding model dimension range is recommended for general-purpose semantic search according to the course?",
                                QUESTION_TYPE_CHOICE,
                                new Array("2048-4096 dimensions", "128-256 dimensions", "1024-1536 dimensions", "384-768 dimensions"),
                                "384-768 dimensions",
                                "obj_assessment1")
                );

test.AddQuestion( new Question ("q3",
                                "When comparing two text embeddings, which distance metric is most commonly used and why?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manhattan distance because it's fastest", "Euclidean distance because it measures magnitude", "Cosine similarity because it focuses on direction rather than magnitude", "Hamming distance because it works with binary vectors"),
                                "Cosine similarity because it focuses on direction rather than magnitude",
                                "obj_assessment1")
                );

test.AddQuestion( new Question ("q4",
                                "For normalized vectors, which operation provides the same result as cosine similarity but with better performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manhattan distance", "Euclidean distance", "Cross product", "Dot product"),
                                "Dot product",
                                "obj_assessment1")
                );

test.AddQuestion( new Question ("q5",
                                "What is the main trade-off when using Approximate Nearest Neighbor (ANN) search instead of exact KNN search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ANN uses more memory but is faster", "ANN sacrifices a small amount of accuracy for massive speed improvements", "ANN requires more complex hardware", "ANN only works with small datasets"),
                                "ANN sacrifices a small amount of accuracy for massive speed improvements",
                                "obj_assessment1")
                );

test.AddQuestion( new Question ("q6",
                                "Which ANN algorithm does Vertex AI Vector Search use for indexing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("HNSW (Hierarchical Navigable Small World)", "FAISS (Facebook AI Similarity Search)", "ScaNN (Scalable Nearest Neighbors)", "LSH (Locality-Sensitive Hashing)"),
                                "ScaNN (Scalable Nearest Neighbors)",
                                "obj_assessment1")
                );

test.AddQuestion( new Question ("q7",
                                "In ScaNN configuration, what happens when you increase the leaf_nodes_to_search_percent parameter?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Recall decreases and latency decreases", "Recall increases and latency increases", "Memory usage decreases", "Recall stays the same but latency decreases"),
                                "Recall increases and latency increases",
                                "obj_assessment1")
                );

test.AddQuestion( new Question ("q8",
                                "What is the typical recall percentage targeted for production vector search systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("70-80%", "85-90%", "100% (exact search)", "95%+ "),
                                "95%+ ",
                                "obj_assessment1")
                );

test.AddQuestion( new Question ("q9",
                                "In the vector search workflow, which phase runs offline and periodically to update the index?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Query processing phase", "Metadata enrichment phase", "Indexing phase", "Application integration phase"),
                                "Indexing phase",
                                "obj_assessment1")
                );

test.AddQuestion( new Question ("q10",
                                "Which file format is recommended by Vertex AI for storing embeddings in Cloud Storage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("JSONL format", "Parquet format", "CSV format", "XML format"),
                                "JSONL format",
                                "obj_assessment1")
                );
