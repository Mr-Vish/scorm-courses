// Assessment 3: RAG Applications
// Covers RAG fundamentals, production implementation, and evaluation
// Answer distribution: A=3, B=2, C=2, D=3 (30%, 20%, 20%, 30%)

test.AddQuestion( new Question ("q1",
                                "What is the primary advantage of RAG over fine-tuning for knowledge-intensive applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RAG allows real-time knowledge updates without retraining", "RAG produces more creative responses", "RAG is faster to train", "RAG uses less memory"),
                                "RAG allows real-time knowledge updates without retraining",
                                "obj_assessment3")
                );

test.AddQuestion( new Question ("q2",
                                "What is the recommended chunk size for general-purpose Q&A applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("128-256 tokens", "1024-2048 tokens", "2048-4096 tokens", "512-768 tokens"),
                                "512-768 tokens",
                                "obj_assessment3")
                );

test.AddQuestion( new Question ("q3",
                                "Which RAG component is responsible for converting user questions into vector representations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LLM generator", "Context assembler", "Embedding model", "Document chunker"),
                                "Embedding model",
                                "obj_assessment3")
                );

test.AddQuestion( new Question ("q4",
                                "What is the purpose of hybrid retrieval in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To combine vector search with keyword search for better coverage", "To reduce memory usage", "To reduce costs", "To speed up retrieval"),
                                "To combine vector search with keyword search for better coverage",
                                "obj_assessment3")
                );

test.AddQuestion( new Question ("q5",
                                "What does the faithfulness metric measure in RAG evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("How many sources are cited", "Whether the answer is supported by retrieved context", "User satisfaction scores", "How fast the system responds"),
                                "Whether the answer is supported by retrieved context",
                                "obj_assessment3")
                );

test.AddQuestion( new Question ("q6",
                                "What is the recommended temperature setting for factual RAG responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.5-0.7", "0.9-1.0", "0.1-0.3", "0.0"),
                                "0.1-0.3",
                                "obj_assessment3")
                );

test.AddQuestion( new Question ("q7",
                                "What is query expansion used for in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To generate multiple query variations for better recall", "To compress queries", "To make queries longer", "To translate queries to other languages"),
                                "To generate multiple query variations for better recall",
                                "obj_assessment3")
                );

test.AddQuestion( new Question ("q8",
                                "What is the typical target for retrieval precision in production RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 50%", "100% (perfect precision)", "Greater than 95%", "Greater than 80%"),
                                "Greater than 80%",
                                "obj_assessment3")
                );

test.AddQuestion( new Question ("q9",
                                "Which technique can reduce RAG latency by 50-70%?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Caching frequent queries", "Adding more context", "Using larger chunks", "Increasing temperature"),
                                "Caching frequent queries",
                                "obj_assessment3")
                );

test.AddQuestion( new Question ("q10",
                                "What is the main symptom of context overflow in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retrieval fails", "System crashes", "Costs increase dramatically", "LLM becomes confused with too much context"),
                                "LLM becomes confused with too much context",
                                "obj_assessment3")
                );
