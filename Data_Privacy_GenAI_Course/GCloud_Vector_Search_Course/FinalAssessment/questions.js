// Final Comprehensive Assessment
// Covers all modules: Vector Search Foundations, Implementation, RAG Applications, and Pros/Cons
// Answer distribution: A=7, B=6, C=6, D=6 (28%, 24%, 24%, 24%) - Balanced <30% per position

// Module 1: Vector Search Foundations (8 questions)
test.AddQuestion( new Question ("q1",
                                "What transformation do embedding models perform on text data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compress text to reduce storage", "Convert text to dense numerical vectors that capture semantic meaning", "Convert text to binary code", "Translate text to multiple languages"),
                                "Convert text to dense numerical vectors that capture semantic meaning",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q2",
                                "Why is cosine similarity preferred over Euclidean distance for text embeddings?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It works with any dimension size", "It is faster to compute", "It focuses on direction rather than magnitude", "It provides exact matches"),
                                "It focuses on direction rather than magnitude",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q3",
                                "What does the ScaNN algorithm optimize in Vertex AI Vector Search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Storage space only", "Network bandwidth", "Embedding generation speed", "Balance between search speed and accuracy"),
                                "Balance between search speed and accuracy",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q4",
                                "In the vector search workflow, which phase runs periodically offline?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Indexing phase", "User authentication", "Query processing", "Result ranking"),
                                "Indexing phase",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q5",
                                "What is the typical recall target for production ANN search systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("85-90%", "70-80%", "100%", "95%+"),
                                "95%+",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q6",
                                "Which parameter controls how many partitions are searched in a ScaNN index?",
                                QUESTION_TYPE_CHOICE,
                                new Array("dimensions", "leaf_nodes_to_search_percent", "distance_measure_type", "approximate_neighbors_count"),
                                "leaf_nodes_to_search_percent",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q7",
                                "What happens when you increase approximate_neighbors_count in index configuration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only storage increases", "Recall decreases and latency decreases", "Recall increases and latency increases", "Only cost decreases"),
                                "Recall increases and latency increases",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q8",
                                "For normalized vectors, which operation equals cosine similarity but performs faster?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Euclidean distance", "Manhattan distance", "Hamming distance", "Dot product"),
                                "Dot product",
                                "obj_final_assessment")
                );

// Module 2: Vector Search Implementation (8 questions)
test.AddQuestion( new Question ("q9",
                                "What file format does Vertex AI recommend for storing embeddings in Cloud Storage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("JSONL", "Parquet", "CSV", "XML"),
                                "JSONL",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q10",
                                "What is the primary difference between Tree-AH and Brute Force indexes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tree-AH only works with text", "Tree-AH uses approximate search for scalability, Brute Force is exact but doesn't scale", "Tree-AH is slower but more accurate", "Brute Force is always better"),
                                "Tree-AH uses approximate search for scalability, Brute Force is exact but doesn't scale",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q11",
                                "How long does auto-scaling typically take to add a new replica?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-30 seconds", "15-20 minutes", "2-3 minutes", "1-2 hours"),
                                "2-3 minutes",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q12",
                                "What deployment strategy allows zero-downtime index updates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Blue-green deployment", "Hot swap", "Direct replacement", "Rolling restart"),
                                "Blue-green deployment",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q13",
                                "What is the main benefit of batch querying in vector search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Higher accuracy", "Reduced per-query overhead", "Simpler code", "Lower storage costs"),
                                "Reduced per-query overhead",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q14",
                                "For DOT_PRODUCT_DISTANCE, what does a higher distance value indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Vectors are less similar", "An error occurred", "Vectors are more similar", "Vectors are orthogonal"),
                                "Vectors are more similar",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q15",
                                "What is the typical p50 query latency for a 1 million vector index?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1-2ms", "8ms", "50ms", "500ms"),
                                "8ms",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q16",
                                "Which machine type is recommended for production workloads with 1-10M vectors?",
                                QUESTION_TYPE_CHOICE,
                                new Array("e2-standard-2", "n1-standard-64", "e2-micro", "e2-standard-16"),
                                "e2-standard-16",
                                "obj_final_assessment")
                );

// Module 3: RAG Applications (7 questions)
test.AddQuestion( new Question ("q17",
                                "What is the main advantage of RAG over fine-tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RAG allows real-time knowledge updates without retraining", "RAG is more accurate", "RAG is faster to train", "RAG uses less memory"),
                                "RAG allows real-time knowledge updates without retraining",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q18",
                                "What is the recommended chunk size for general Q&A applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("128-256 tokens", "512-768 tokens", "4096+ tokens", "1024-2048 tokens"),
                                "512-768 tokens",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q19",
                                "What does the faithfulness metric evaluate in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Response speed", "User satisfaction", "Whether answers are supported by retrieved context", "Cost efficiency"),
                                "Whether answers are supported by retrieved context",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q20",
                                "What temperature setting is recommended for factual RAG responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.0", "0.1-0.3", "0.5-0.7", "0.9-1.0"),
                                "0.1-0.3",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q21",
                                "What is the purpose of hybrid retrieval in RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To speed up indexing", "To reduce costs", "To combine vector and keyword search for better coverage", "To compress data"),
                                "To combine vector and keyword search for better coverage",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q22",
                                "Which technique can reduce RAG latency by 50-70%?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Caching frequent queries", "Using larger models", "Using more chunks", "Increasing temperature"),
                                "Caching frequent queries",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q23",
                                "What is the target retrieval precision for production RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array(">50%", ">95%", ">80%", "100%"),
                                ">80%",
                                "obj_final_assessment")
                );

// Pros and Cons (2 questions)
test.AddQuestion( new Question ("q24",
                                "What is a key limitation of ANN search compared to exact search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ANN uses more memory", "ANN trades accuracy for speed and may miss some relevant results", "ANN is slower", "ANN only works with small datasets"),
                                "ANN trades accuracy for speed and may miss some relevant results",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q25",
                                "When should you NOT use vector search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For semantic search", "For exact match requirements and small datasets", "For recommendation systems", "For multi-modal search"),
                                "For exact match requirements and small datasets",
                                "obj_final_assessment")
                );
