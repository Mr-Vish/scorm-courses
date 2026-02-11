test.AddQuestion( new Question ("q1_pc",
                                "What is a major limitation of using Instructor in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Limited provider support", "Increased token consumption from retries", "Lack of validation features", "Poor documentation"),
                                "Increased token consumption from retries",
                                "obj_production_considerations")
                );

test.AddQuestion( new Question ("q2_pc",
                                "Which design pattern prevents cascading failures when the LLM API is down?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Singleton pattern", "Circuit breaker pattern", "Factory pattern", "Observer pattern"),
                                "Circuit breaker pattern",
                                "obj_production_considerations")
                );

test.AddQuestion( new Question ("q3_pc",
                                "For simple extractions with few fields, which model type is most cost-effective?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GPT-4o", "Smaller models like GPT-3.5-turbo or Claude Haiku", "GPT-4 Turbo", "Claude Opus"),
                                "Smaller models like GPT-3.5-turbo or Claude Haiku",
                                "obj_production_considerations")
                );

test.AddQuestion( new Question ("q4_pc",
                                "What security practice is essential when handling sensitive data with Instructor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using faster models", "Redacting PII before sending to external APIs", "Increasing max_retries", "Disabling validation"),
                                "Redacting PII before sending to external APIs",
                                "obj_production_considerations")
                );

test.AddQuestion( new Question ("q5_pc",
                                "Which metric is most critical for monitoring production Instructor deployments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Total API calls", "Extraction success rate", "Average response size", "Number of retries"),
                                "Extraction success rate",
                                "obj_production_considerations")
                );
