test.AddQuestion( new Question ("com.scorm.gemini.search.grounding_1",
                                "What is the primary advantage of Google Search grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces model size", "Provides access to information after training cutoff date", "Increases inference speed", "Reduces API costs"),
                                "Provides access to information after training cutoff date",
                                "obj_search_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.search.grounding_2",
                                "Which type of query is MOST suitable for Google Search grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Creative fiction writing", "Current stock prices and market data", "Basic mathematical calculations", "Historical facts from ancient history"),
                                "Current stock prices and market data",
                                "obj_search_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.search.grounding_3",
                                "What does the search_entry_point in grounding metadata reveal?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The user's IP address", "The search query Gemini used", "The model's confidence score", "The API key used"),
                                "The search query Gemini used",
                                "obj_search_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.search.grounding_4",
                                "What is dynamic retrieval in the context of grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manually triggering searches", "The model autonomously decides whether to search", "Searching multiple sources simultaneously", "Caching search results"),
                                "The model autonomously decides whether to search",
                                "obj_search_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.search.grounding_5",
                                "What is the typical latency added by Google Search grounding for simple queries?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-50ms", "200-400ms", "1000-2000ms", "5000ms+"),
                                "200-400ms",
                                "obj_search_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.search.grounding_6",
                                "Which prompt technique encourages the model to perform a search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using longer prompts", "Including temporal keywords like 'latest' or 'current'", "Requesting creative responses", "Using technical jargon"),
                                "Including temporal keywords like 'latest' or 'current'",
                                "obj_search_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.search.grounding_7",
                                "What should you implement to optimize performance for frequently asked questions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Disable grounding", "Increase model temperature", "Implement caching with appropriate TTL", "Use smaller models"),
                                "Implement caching with appropriate TTL",
                                "obj_search_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.search.grounding_8",
                                "Which factor does dynamic retrieval evaluate to decide whether to search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User's location", "Query recency and temporal indicators", "Model size", "API rate limits"),
                                "Query recency and temporal indicators",
                                "obj_search_grounding")
                );
