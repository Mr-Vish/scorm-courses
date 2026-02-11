// Module 3 Assessment - Implementation and Best Practices
// 8 unique questions covering monitoring, security, privacy, and production deployment

test.AddQuestion( new Question ("m3_q1",
                                "What is the target cache hit rate range for most production applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-30%", "40-80%", "85-95%", "95-100%"),
                                "40-80%",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q2",
                                "What is the recommended target for P95 response time latency for cache hits?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 10ms", "Less than 100ms", "Less than 500ms", "Less than 2 seconds"),
                                "Less than 100ms",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q3",
                                "Which metric indicates that cache capacity should be increased?",
                                QUESTION_TYPE_CHOICE,
                                new Array("High hit rate", "High eviction rate", "Low latency", "Low memory usage"),
                                "High eviction rate",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q4",
                                "What is the primary risk of cross-user data leakage in caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increased latency", "User A's cached response inadvertently served to User B", "Higher infrastructure costs", "Reduced hit rates"),
                                "User A's cached response inadvertently served to User B",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q5",
                                "Which encryption standard is recommended for cached data at rest?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DES", "3DES", "AES-128", "AES-256"),
                                "AES-256",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q6",
                                "Under GDPR, what must organizations support regarding cached user data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Indefinite retention", "Right to erasure and cache deletion for specific users", "Sharing with third parties", "No special requirements"),
                                "Right to erasure and cache deletion for specific users",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q7",
                                "What is the recommended approach for initial production deployment of caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploy to 100% of traffic immediately", "Phased rollout starting with shadow mode and canary deployment", "Deploy only during off-hours", "Wait for complete testing in production"),
                                "Phased rollout starting with shadow mode and canary deployment",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q8",
                                "What is the typical Recovery Time Objective (RTO) for cache server failure with automatic failover?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1 minute", "Less than 5 minutes", "Less than 30 minutes", "Less than 1 hour"),
                                "Less than 5 minutes",
                                "obj_module3_implementation")
                );
