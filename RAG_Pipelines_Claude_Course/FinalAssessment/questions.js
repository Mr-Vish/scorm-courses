// Final Assessment - RAG Pipelines with Claude

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q1",
                                "Which structural element is Claude specifically trained to use for distinguishing different parts of a RAG prompt?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Markdown headers", "XML tags", "Comma-separated values", "Square brackets"),
                                "XML tags",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q2",
                                "How does 'Long-Context RAG' differ from traditional RAG architectures?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses more models in parallel", "It retrieves and processes much larger blocks of information (e.g., entire chapters) instead of small snippets", "It only works with 8-bit quantization", "It doesn't use vector embeddings"),
                                "It retrieves and processes much larger blocks of information (e.g., entire chapters) instead of small snippets",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q3",
                                "What is the primary purpose of 'Grounding' in RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make the model more creative", "To ensure the model's answers are strictly based on and verifiable by the provided source material", "To reduce the latency of the API call", "To protect the model from prompt injection"),
                                "To ensure the model's answers are strictly based on and verifiable by the provided source material",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q4",
                                "Why is 'Context Enrichment' useful for chunking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes chunks smaller", "It provides each chunk with global context (like document titles) so it is more understandable in isolation", "It speeds up the indexing process", "It removes metadata from the documents"),
                                "It provides each chunk with global context (like document titles) so it is more understandable in isolation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q5",
                                "Which feature should you use to handle repetitive, large context blocks across multiple Claude API calls efficiently?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Streaming", "Prompt Caching", "Few-shot examples", "Temperature tuning"),
                                "Prompt Caching",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q6",
                                "How can 'Assistant Prefilling' be used in a RAG pipeline?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To fill the database with data", "To start Claude's response (e.g., with '{') to enforce a specific output format like JSON", "To pre-load images into the context", "To skip the retrieval step entirely"),
                                "To start Claude's response (e.g., with '{') to enforce a specific output format like JSON",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q7",
                                "In the RAG Triad, what does 'Faithfulness' measure?",
                                QUESTION_TYPE_CHOICE,
                                new Array("If the model's tone is professional", "If the generated answer is logically supported by the retrieved documents", "If the retrieval step was fast enough", "If the user liked the answer"),
                                "If the generated answer is logically supported by the retrieved documents",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q8",
                                "What is the key benefit of 'Agentic RAG'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is simpler to implement", "It allows the model to dynamically decide its own search strategy and use multiple tools to achieve a goal", "It uses fewer tokens than linear RAG", "It doesn't require any metadata"),
                                "It allows the model to dynamically decide its own search strategy and use multiple tools to achieve a goal",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q9",
                                "Which Claude 3.5 Sonnet feature is ideal for presenting structured RAG output like code or diagrams?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tool Use", "Artifacts", "Long Context", "System Prompts"),
                                "Artifacts",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q10",
                                "When using XML tags for citations, what is a best practice?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use random tag names", "Ask Claude to provide citations in a specific, parseable format (like [Doc ID]) and verify them", "Only cite the first document", "Avoid using the word 'citation' in the prompt"),
                                "Ask Claude to provide citations in a specific, parseable format (like [Doc ID]) and verify them",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q11",
                                "What is 'Extrinsic Hallucination' in RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model uses information not found in the retrieved documents", "The model uses only information in the documents", "The model fails to respond", "The model uses the wrong XML tag"),
                                "The model uses information not found in the retrieved documents",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q12",
                                "Why is 'Metadata Filtering' used before vector search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make the vectors more colorful", "To narrow down the search space to a specific subset of documents (e.g., by date or category)", "To increase the latency", "To avoid using an LLM"),
                                "To narrow down the search space to a specific subset of documents (e.g., by date or category)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q13",
                                "Which pattern involves using a 'Judge' model to evaluate the quality of a RAG pipeline?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reranking", "RAGAS Evaluation", "Hybrid Search", "Prompt Caching"),
                                "RAGAS Evaluation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q14",
                                "What is 'Recursive Character Text Splitting'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Splitting text into individual letters", "A chunking method that splits by largest to smallest delimiters (like newlines then spaces) to preserve structure", "A way to encrypt text", "A method for merging two documents"),
                                "A chunking method that splits by largest to smallest delimiters (like newlines then spaces) to preserve structure",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.rag.claude.final_q15",
                                "In the 'BankBot' case study for security, how does RAG help prevent hallucinations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By allowing the bot to access any website", "By grounding the bot's responses in the customer's actual, verified transaction history", "By using a larger model", "By hiding the system prompt"),
                                "By grounding the bot's responses in the customer's actual, verified transaction history",
                                "obj_final_assessment")
                );