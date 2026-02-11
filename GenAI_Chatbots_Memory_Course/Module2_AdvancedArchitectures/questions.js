test.AddQuestion( new Question ("q1_m2",
                                "In a three-tier memory architecture, what is the primary purpose of Tier 1 (Working Memory)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Store persistent user facts across sessions", "Maintain immediate conversational context for turn-by-turn interaction", "Compress historical conversations into summaries", "Retrieve external knowledge base articles"),
                                "Maintain immediate conversational context for turn-by-turn interaction",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2_m2",
                                "Which hybrid memory pattern is most appropriate for a CRM-integrated chatbot that needs precise fact recall?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Window + Summary Hybrid", "Entity + Window Hybrid", "Multi-Session Summary Chain", "Topic-Segmented Memory"),
                                "Entity + Window Hybrid",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3_m2",
                                "What is the primary advantage of vector embeddings in conversational memory systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They reduce storage costs significantly", "They enable semantic similarity search based on meaning rather than exact keywords", "They eliminate the need for summarization", "They automatically resolve contradictory information"),
                                "They enable semantic similarity search based on meaning rather than exact keywords",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4_m2",
                                "Which similarity metric is most commonly used for text embeddings in vector databases?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Euclidean Distance", "Manhattan Distance", "Cosine Similarity", "Hamming Distance"),
                                "Cosine Similarity",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5_m2",
                                "In the context of memory retrieval, what does 'chunking strategy' refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("How to compress summaries to save tokens", "The granularity at which conversations are segmented for embedding and storage", "The method for encrypting sensitive user data", "The algorithm for ranking retrieved memories"),
                                "The granularity at which conversations are segmented for embedding and storage",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6_m2",
                                "What is the main benefit of hybrid search (combining keyword and semantic search)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces computational costs", "It captures both exact terminology matches and conceptually similar content", "It eliminates the need for vector databases", "It automatically generates conversation summaries"),
                                "It captures both exact terminology matches and conceptually similar content",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7_m2",
                                "In RAG-based memory systems, what is the purpose of 'contextual compression'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt retrieved memories for security", "To retrieve more memories than needed, then extract only relevant information to fit token budget", "To permanently delete old conversation history", "To convert text into vector embeddings"),
                                "To retrieve more memories than needed, then extract only relevant information to fit token budget",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8_m2",
                                "What challenge does 'temporal decay' address in memory retrieval?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Preventing database storage from growing too large", "Prioritizing recent information over older memories that may be less relevant", "Encrypting old memories for security compliance", "Reducing the dimensionality of embedding vectors"),
                                "Prioritizing recent information over older memories that may be less relevant",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q9_m2",
                                "In hierarchical retrieval, what is retrieved at Level 1 (coarse-grained)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Individual words from conversations", "Specific facts or quotes", "Relevant session summaries", "User profile metadata only"),
                                "Relevant session summaries",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q10_m2",
                                "What is a key indicator that a memory system is experiencing 'under-retrieval'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Too many memories are included, exceeding token limits", "Relevant memories exist in storage but are not being retrieved for current queries", "Retrieved memories contradict each other", "The vector database is running out of storage space"),
                                "Relevant memories exist in storage but are not being retrieved for current queries",
                                "obj_module_2")
                );
