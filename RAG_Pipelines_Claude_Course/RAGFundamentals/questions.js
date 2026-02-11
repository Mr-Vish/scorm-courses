test.AddQuestion( new Question ("com.scorm.rag.claude.m1_q1",
                                "Why does Claude prefer XML tags for structuring RAG prompts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes the prompt look more professional", "It helps Claude clearly distinguish between instructions, different documents, and user queries", "It reduces the cost of the prompt", "It is required by the XML standard"),
                                "It helps Claude clearly distinguish between instructions, different documents, and user queries",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.m1_q2",
                                "In a Claude RAG prompt, where is the best place to put the core instructions for a very long context (100k+ tokens)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("In the middle of the documents", "At the very beginning and potentially repeated at the very end", "In a separate API call", "In the metadata of the PDF"),
                                "At the very beginning and potentially repeated at the very end",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.m1_q3",
                                "What is 'Semantic Chunking'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Splitting text every 500 words exactly", "Splitting text at logical points where the meaning or topic shifts (e.g., headers or paragraph ends)", "Randomly deleting words to save space", "Encoding text into vectors"),
                                "Splitting text at logical points where the meaning or topic shifts (e.g., headers or paragraph ends)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.m1_q4",
                                "Which pattern involves adding global context (like the document title) to every individual chunk?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Recursive splitting", "Context Enrichment (Augmented Chunking)", "Sliding Window", "Vectorization"),
                                "Context Enrichment (Augmented Chunking)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.m1_q5",
                                "What is the primary benefit of Hybrid Retrieval?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is always faster than vector search", "It combines the semantic 'meaning' search of vectors with the 'exact match' precision of keyword search", "It doesn't require an LLM", "It only works with encrypted data"),
                                "It combines the semantic 'meaning' search of vectors with the 'exact match' precision of keyword search",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.m1_q6",
                                "How should you instruct Claude to handle a case where the answer is NOT in the provided documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ask it to make up a plausible answer", "Tell it to explicitly say 'I cannot find the answer in the provided documents' and not to use its own knowledge", "Ask it to search the web automatically", "Tell it to ignore the question"),
                                "Tell it to explicitly say 'I cannot find the answer in the provided documents' and not to use its own knowledge",
                                "obj_module_1")
                );