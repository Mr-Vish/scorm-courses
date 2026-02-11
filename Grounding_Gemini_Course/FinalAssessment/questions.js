// Final Comprehensive Assessment - 25 Questions
// Covers all modules: Grounding Fundamentals, Google Search Grounding, Enterprise Data Grounding

// Grounding Fundamentals (8 questions)
test.AddQuestion( new Question ("com.scorm.gemini.final.fundamentals_1",
                                "What transformation does grounding provide to Large Language Models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increases model size", "Transforms from 'closed book' to 'open book' system", "Reduces training time", "Improves code generation"),
                                "Transforms from 'closed book' to 'open book' system",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.fundamentals_2",
                                "Which problem is NOT directly addressed by grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Stale knowledge", "Hallucinations", "Lack of source attribution", "Slow model inference"),
                                "Slow model inference",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.fundamentals_3",
                                "A grounding score of 0.45 indicates what quality level?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Strongly grounded", "Moderately grounded", "Weakly grounded", "Excellent quality"),
                                "Weakly grounded",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.fundamentals_4",
                                "What should a production system do when receiving a grounding score of 0.3?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Accept the response", "Reject the response as poorly grounded", "Increase model temperature", "Cache the response"),
                                "Reject the response as poorly grounded",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.fundamentals_5",
                                "Which metric measures how much information the model can process in a single request?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Grounding score", "Context window", "Retrieval latency", "Source count"),
                                "Context window",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.fundamentals_6",
                                "What is included in grounding metadata?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User credentials", "Source URLs and grounding scores", "Model weights", "Training data"),
                                "Source URLs and grounding scores",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.fundamentals_7",
                                "Which query type does NOT require grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Current stock prices", "Latest product specifications", "Creative poetry writing", "Recent news events"),
                                "Creative poetry writing",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.fundamentals_8",
                                "What is the typical latency added by grounding for simple queries?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-50ms", "200-500ms", "2000-3000ms", "10000ms+"),
                                "200-500ms",
                                "obj_final_assessment")
                );

// Google Search Grounding (8 questions)
test.AddQuestion( new Question ("com.scorm.gemini.final.search_1",
                                "What is the main advantage of Google Search grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces costs", "Provides access to information after model's training cutoff", "Increases model size", "Eliminates all errors"),
                                "Provides access to information after model's training cutoff",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.search_2",
                                "What does the search_entry_point in metadata show?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User's location", "The search query Gemini formulated", "API key used", "Model version"),
                                "The search query Gemini formulated",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.search_3",
                                "How does dynamic retrieval decide whether to search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User manually triggers it", "Model evaluates query recency and factual requirements", "Random selection", "Always searches"),
                                "Model evaluates query recency and factual requirements",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.search_4",
                                "Which prompt technique encourages dynamic retrieval to perform a search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using longer prompts", "Including temporal keywords like 'latest' or 'current'", "Using all caps", "Adding emojis"),
                                "Including temporal keywords like 'latest' or 'current'",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.search_5",
                                "What optimization technique reduces latency for frequently asked questions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Disabling grounding", "Implementing caching with TTL", "Using smaller models only", "Removing source attribution"),
                                "Implementing caching with TTL",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.search_6",
                                "Which use case is MOST suitable for Google Search grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Basic arithmetic", "Current cryptocurrency prices", "Historical facts from 1800s", "Creative fiction"),
                                "Current cryptocurrency prices",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.search_7",
                                "What is a limitation of Google Search grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cannot access any web content", "Cannot access paywalled content", "Only works in English", "Requires model retraining"),
                                "Cannot access paywalled content",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.search_8",
                                "What should be monitored to assess search result quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model size", "Source diversity and authority", "User's IP address", "API key expiration"),
                                "Source diversity and authority",
                                "obj_final_assessment")
                );

// Enterprise Data Grounding (9 questions)
test.AddQuestion( new Question ("com.scorm.gemini.final.enterprise_1",
                                "What is the primary purpose of Vertex AI Search in enterprise grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Replace Google Search", "Index and search organization's private data", "Train new models", "Generate synthetic data"),
                                "Index and search organization's private data",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.enterprise_2",
                                "Which data sources can Vertex AI Search index?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only Cloud Storage", "Cloud Storage, BigQuery, Cloud SQL, and third-party systems", "Only databases", "Only text files"),
                                "Cloud Storage, BigQuery, Cloud SQL, and third-party systems",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.enterprise_3",
                                "In a hybrid grounding strategy, when should enterprise data be prioritized?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Never", "For internal policies and proprietary information", "For all queries", "Only for public information"),
                                "For internal policies and proprietary information",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.enterprise_4",
                                "How does Vertex AI Search protect sensitive documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encryption only", "Document-level access controls integrated with IAM", "Password protection", "No protection needed"),
                                "Document-level access controls integrated with IAM",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.enterprise_5",
                                "What is the benefit of adding metadata to enterprise documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increases file size", "Improves search relevance and enables filtering", "Reduces costs", "Speeds up uploads"),
                                "Improves search relevance and enables filtering",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.enterprise_6",
                                "Which alert threshold indicates a production grounding system needs attention?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cache hit rate of 50%", "Grounding success rate below 95%", "Average latency of 400ms", "5 queries per minute"),
                                "Grounding success rate below 95%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.enterprise_7",
                                "What is the purpose of a circuit breaker in a resilient grounding service?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduce costs", "Automatically failover when primary service fails repeatedly", "Increase speed", "Encrypt data"),
                                "Automatically failover when primary service fails repeatedly",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.enterprise_8",
                                "What should be logged for compliance and auditing in enterprise grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only errors", "All queries with user context and data access", "Nothing for privacy", "Only successful queries"),
                                "All queries with user context and data access",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gemini.final.enterprise_9",
                                "Which cost optimization strategy is MOST effective for enterprise grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Disable all caching", "Implement aggressive caching with appropriate TTL", "Always use the largest model", "Never limit results"),
                                "Implement aggressive caching with appropriate TTL",
                                "obj_final_assessment")
                );
