test.AddQuestion( new Question ("com.scorm.genai.support.module2_1",
                                "What is the recommended chunk size for document chunking in RAG systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("100-200 tokens", "200-400 tokens", "400-600 tokens", "800-1000 tokens"),
                                "400-600 tokens",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module2_2",
                                "Which chunking method is best for structured documentation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Fixed-size chunking", "Semantic chunking", "Random chunking", "Character-based chunking"),
                                "Semantic chunking",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module2_3",
                                "In a hybrid search strategy, what is the typical weight distribution?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("50% semantic, 50% keyword", "70% semantic, 20% keyword, 10% metadata", "80% keyword, 20% semantic", "100% semantic only"),
                                "70% semantic, 20% keyword, 10% metadata",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module2_4",
                                "What is the target for First Contact Resolution (FCR) rate?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 50%", "Greater than 60%", "Greater than 70%", "Greater than 80%"),
                                "Greater than 70%",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module2_5",
                                "What is the target for Average Handle Time in customer support?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1 minute", "Less than 2 minutes", "Less than 3 minutes", "Less than 5 minutes"),
                                "Less than 3 minutes",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module2_6",
                                "Which feedback collection method has the fastest response time?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Customer satisfaction survey", "Agent review", "Immediate user feedback (thumbs up/down)", "Analytics review"),
                                "Immediate user feedback (thumbs up/down)",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module2_7",
                                "What should be done when the knowledge base doesn't contain the answer to a customer query?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Make up an answer", "Acknowledge limitation and offer alternatives or escalation", "Ignore the question", "End the conversation"),
                                "Acknowledge limitation and offer alternatives or escalation",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module2_8",
                                "Which HTTP status code indicates rate limit exceeded?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("401", "404", "429", "503"),
                                "429",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module2_9",
                                "Metadata enrichment improves retrieval quality by enabling better filtering and context",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module2_10",
                                "What is the target escalation rate for a well-performing GenAI support system?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 20%", "Less than 30%", "Less than 40%", "Less than 50%"),
                                "Less than 30%",
                                "obj_module_2")
                );
