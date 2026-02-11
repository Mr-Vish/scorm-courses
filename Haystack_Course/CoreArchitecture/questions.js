test.AddQuestion( new Question ("q1",
                                "What are the four core pillars of Haystack's architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Models, APIs, Databases, Servers", "Component, Pipeline, Document Store, Document", "Input, Processing, Output, Storage", "Retrieval, Generation, Evaluation, Deployment"),
                                "Component, Pipeline, Document Store, Document",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which component category is responsible for transforming raw data into Documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Preprocessors", "Converters", "Embedders", "Writers"),
                                "Converters",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What is the primary advantage of Haystack's pipeline serialization feature?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster execution speed", "Reduced memory usage", "Version control and reproducible deployments", "Automatic error correction"),
                                "Version control and reproducible deployments",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "Which similarity metric is recommended for normalized embeddings in text similarity tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Euclidean Distance", "Manhattan Distance", "Cosine Similarity", "Hamming Distance"),
                                "Cosine Similarity",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is the purpose of the split_overlap parameter in DocumentSplitter?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase processing speed", "To preserve context across chunk boundaries", "To reduce storage requirements", "To improve embedding quality"),
                                "To preserve context across chunk boundaries",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "Which document store is best suited for development and testing with no persistence requirements?",
                                QUESTION_TYPE_CHOICE,
                                new Array("QdrantDocumentStore", "ElasticsearchDocumentStore", "InMemoryDocumentStore", "PineconeDocumentStore"),
                                "InMemoryDocumentStore",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7",
                                "What does the UPSERT policy do in DocumentWriter?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only inserts new documents", "Only updates existing documents", "Updates existing documents and inserts new ones", "Deletes and recreates all documents"),
                                "Updates existing documents and inserts new ones",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8",
                                "Which indexing algorithm provides excellent query performance but higher memory usage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("IVF (Inverted File Index)", "HNSW (Hierarchical Navigable Small World)", "B-Tree", "Hash Index"),
                                "HNSW (Hierarchical Navigable Small World)",
                                "obj_module_1")
                );
