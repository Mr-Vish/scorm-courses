test.AddQuestion( new Question ("q1",
                                "What is the primary benefit of Retrieval Augmented Generation (RAG)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces the model's parameter count", "It provides access to current/proprietary data without fine-tuning", "It increases the model's creativity", "It eliminates the need for prompts"),
                                "It provides access to current/proprietary data without fine-tuning",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2",
                                "Which application category involves LLMs deciding when to call external functions or APIs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Content generation", "Function calling / Tool use", "Summarization", "Translation"),
                                "Function calling / Tool use",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3",
                                "In a multi-agent system, what is the role of a 'Critic' agent?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Break down tasks into steps", "Review and provide feedback", "Execute specific actions", "Combine results from multiple agents"),
                                "Review and provide feedback",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4",
                                "Which type of summarization generates new text that captures main ideas rather than extracting sentences?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Extractive summarization", "Abstractive summarization", "Multi-document summarization", "Keyword-based summarization"),
                                "Abstractive summarization",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5",
                                "What is a key consideration when implementing LLMs for healthcare applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LLMs can hallucinate and require verification for critical applications", "LLMs always provide 100% accurate medical information", "Healthcare applications don't need privacy considerations", "LLMs can replace doctors entirely"),
                                "LLMs can hallucinate and require verification for critical applications",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6",
                                "Which implementation factor relates to the time it takes for an LLM to respond?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Accuracy", "Latency", "Privacy", "Scalability"),
                                "Latency",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7",
                                "What is Named Entity Recognition (NER) used for in information extraction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Generating creative content", "Extracting names, dates, locations, and organizations from text", "Translating between languages", "Compressing large documents"),
                                "Extracting names, dates, locations, and organizations from text",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8",
                                "In the RAG architecture described in the course, what happens after retrieving relevant documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The documents are deleted", "The retrieved context is added to the prompt before generation", "The model is retrained", "The user query is discarded"),
                                "The retrieved context is added to the prompt before generation",
                                "obj_module_2")
                );
