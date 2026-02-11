test.AddQuestion( new Question ("com.scorm.genai.support.module3_1",
                                "Which regulatory framework requires right to access, deletion, and data portability?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("HIPAA", "PCI-DSS", "GDPR", "SOC 2"),
                                "GDPR",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module3_2",
                                "What encryption standard should be used for data at rest?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AES-128", "AES-256", "DES", "3DES"),
                                "AES-256",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module3_3",
                                "What is the target P95 latency for customer support responses?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1 second", "Less than 2 seconds", "Less than 3 seconds", "Less than 5 seconds"),
                                "Less than 3 seconds",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module3_4",
                                "Which caching layer provides the highest latency reduction?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Embedding caching", "Response caching", "Retrieval caching", "Session caching"),
                                "Response caching",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module3_5",
                                "What is the target overall cache hit rate for optimal performance?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("30-40%", "40-50%", "60-80%", "90-100%"),
                                "60-80%",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module3_6",
                                "In a tiered model strategy, what percentage of queries typically fall into the simple category?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("20%", "40%", "60%", "80%"),
                                "40%",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module3_7",
                                "What is the minimum retention period for audit logs for compliance?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1 year", "3 years", "5 years", "7 years"),
                                "7 years",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module3_8",
                                "Which circuit breaker state allows limited requests to test service recovery?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Closed", "Open", "Half-Open", "Testing"),
                                "Half-Open",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module3_9",
                                "Streaming responses reduce perceived latency by 60-80% while maintaining the same actual latency",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module3_10",
                                "What should be the Recovery Time Objective (RTO) for a production customer support system?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 5 minutes", "Less than 15 minutes", "Less than 1 hour", "Less than 4 hours"),
                                "Less than 15 minutes",
                                "obj_module_3")
                );
