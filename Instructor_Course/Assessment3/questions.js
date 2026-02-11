test.AddQuestion( new Question ("q1_m3",
                                "What is a key advantage of Instructor's intelligent retry mechanism?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces API costs", "Validation errors are sent back to the LLM with context for correction", "It makes requests faster", "It eliminates all errors"),
                                "Validation errors are sent back to the LLM with context for correction",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q2_m3",
                                "Which factor increases token consumption when using Instructor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using async operations", "Retries and complex schemas", "Caching results", "Using smaller models"),
                                "Retries and complex schemas",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3_m3",
                                "When should you NOT use Instructor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For complex structured extraction", "For simple text generation without structure", "For document intelligence", "For form filling from natural language"),
                                "For simple text generation without structure",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q4_m3",
                                "What pattern helps prevent cascading failures when the LLM API is experiencing issues?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retry pattern", "Circuit breaker pattern", "Observer pattern", "Factory pattern"),
                                "Circuit breaker pattern",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q5_m3",
                                "Which model should you use for simple extractions with 1-5 fields to optimize costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GPT-4o", "GPT-3.5-turbo or Claude Haiku", "GPT-4 Turbo", "Claude Opus"),
                                "GPT-3.5-turbo or Claude Haiku",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q6_m3",
                                "What is a critical security consideration when using Instructor with sensitive data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using faster models", "Redacting PII before sending to LLM APIs", "Increasing retry count", "Using synchronous operations"),
                                "Redacting PII before sending to LLM APIs",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q7_m3",
                                "Caching extraction results can significantly reduce API costs for repeated queries",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q8_m3",
                                "Which metric is most important for monitoring overall system health in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Average token count", "Extraction success rate", "Number of API calls", "Cache hit rate"),
                                "Extraction success rate",
                                "obj_module_3")
                );
