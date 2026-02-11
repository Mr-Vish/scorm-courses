test.AddQuestion( new Question ("com.anthropic.api.module3.q1",
                                "Which HTTP status code indicates that rate limits have been exceeded?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("400", "401", "429", "500"),
                                "429",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q2",
                                "What is the recommended retry strategy for handling transient API failures?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Immediate retry without delay", "Exponential backoff with jitter", "Fixed 1-second delay", "No retries, fail immediately"),
                                "Exponential backoff with jitter",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q3",
                                "Circuit breakers should immediately retry failed requests to maximize success rate",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q4",
                                "Which rate limit header indicates when the rate limit will reset?",
                                QUESTION_TYPE_CHOICE,
                                new Array("anthropic-ratelimit-reset", "anthropic-ratelimit-requests-reset", "rate-limit-expiry", "reset-timestamp"),
                                "anthropic-ratelimit-requests-reset",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q5",
                                "What percentage of rate limit capacity should production systems target for utilization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50-60%", "70-80%", "90-95%", "100%"),
                                "70-80%",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q6",
                                "API keys should be rotated regularly, with a recommended minimum frequency of every 90 days",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q7",
                                "Which is the most secure method for storing API keys in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcoded in source code", "Environment variables", "Secret management systems (AWS Secrets Manager, Azure Key Vault)", "Configuration files in version control"),
                                "Secret management systems (AWS Secrets Manager, Azure Key Vault)",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q8",
                                "What does GDPR require for data breach notifications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Report within 24 hours", "Report within 72 hours", "Report within 7 days", "No specific timeframe"),
                                "Report within 72 hours",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q9",
                                "Personally Identifiable Information (PII) should be anonymized or masked before API submission when possible",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q10",
                                "What cost advantage does batch processing provide compared to standard API requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("25% reduction", "50% reduction", "75% reduction", "No cost difference"),
                                "50% reduction",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q11",
                                "Which strategy reduces token consumption by managing conversation history?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increasing max_tokens", "Sliding window approach", "Using higher temperature", "Disabling caching"),
                                "Sliding window approach",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q12",
                                "Graceful degradation maintains partial functionality when full API service is unavailable",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q13",
                                "For a simple classification task processing 100,000 items daily, which model provides the best cost efficiency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Claude Opus for maximum accuracy", "Claude Sonnet for balanced performance", "Claude Haiku for speed and cost", "Any model works equally well"),
                                "Claude Haiku for speed and cost",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q14",
                                "What is the primary purpose of implementing a circuit breaker pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase request speed", "To prevent cascading failures", "To reduce token costs", "To improve model accuracy"),
                                "To prevent cascading failures",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q15",
                                "Response caching can significantly reduce API costs by avoiding duplicate requests",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q16",
                                "Which audit logging practice is essential for security compliance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Log only successful requests", "Log authentication events and data access", "Disable logging to improve performance", "Log only error messages"),
                                "Log authentication events and data access",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q17",
                                "What should be the first step when an API key compromise is suspected?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Wait and monitor usage", "Rotate the key immediately", "Increase rate limits", "Disable all API access"),
                                "Rotate the key immediately",
                                "obj_module3")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module3.q18",
                                "Token optimization through concise prompts and context management can reduce costs by 60-80%",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3")
                );
