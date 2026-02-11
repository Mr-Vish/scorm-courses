test.AddQuestion( new Question ("rag_prod_1",
                                "What does RAG stand for in the context of AI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Rapid Application Generation", "Retrieval-Augmented Generation", "Random Access Gateway", "Resource Allocation Grid"),
                                "Retrieval-Augmented Generation",
                                "obj_rag_production")
                );

test.AddQuestion( new Question ("rag_prod_2",
                                "What is the primary benefit of using RAG in AI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced hallucinations and access to up-to-date information", "Faster response times", "Lower API costs", "Simpler code structure"),
                                "Reduced hallucinations and access to up-to-date information",
                                "obj_rag_production")
                );

test.AddQuestion( new Question ("rag_prod_3",
                                "Vector databases are essential for implementing RAG systems",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_rag_production")
                );

test.AddQuestion( new Question ("rag_prod_4",
                                "Which deployment platform is specifically designed for Genkit flows?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Heroku", "DigitalOcean", "Firebase Cloud Functions", "Netlify"),
                                "Firebase Cloud Functions",
                                "obj_rag_production")
                );

test.AddQuestion( new Question ("rag_prod_5",
                                "What is the purpose of evaluators in Genkit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To compile TypeScript code", "To manage database connections", "To assess AI output quality using automated metrics", "To handle user authentication"),
                                "To assess AI output quality using automated metrics",
                                "obj_rag_production")
                );

test.AddQuestion( new Question ("rag_prod_6",
                                "Which metric evaluates how accurately an AI response reflects source material?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Relevance", "Faithfulness", "Maliciousness", "Latency"),
                                "Faithfulness",
                                "obj_rag_production")
                );

test.AddQuestion( new Question ("rag_prod_7",
                                "Caching AI responses can significantly reduce costs in production",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_rag_production")
                );

test.AddQuestion( new Question ("rag_prod_8",
                                "What is the most cost-effective strategy for high-volume, simple AI tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always use GPT-4 for quality", "Avoid caching to save storage costs", "Increase temperature for faster responses", "Use cheaper models like Gemini Flash or GPT-3.5"),
                                "Use cheaper models like Gemini Flash or GPT-3.5",
                                "obj_rag_production")
                );
