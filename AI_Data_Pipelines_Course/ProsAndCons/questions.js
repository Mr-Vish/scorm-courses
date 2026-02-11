// Module 4 Assessment: Advantages, Limitations, and Best Practices
// Tests understanding of trade-offs and implementation considerations

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod4.q1",
                                "According to the course, by what percentage can AI-powered pipelines reduce mean time to detection (MTTD)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("20-30%", "40-50%", "60-80%", "90-95%"),
                                "60-80%",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod4.q2",
                                "What is the 'cold start problem' in AI-powered pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Servers take too long to boot", "ML models require historical data and are ineffective for new pipelines", "APIs are slow to respond", "Data arrives late"),
                                "ML models require historical data and are ineffective for new pipelines",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod4.q3",
                                "Which mitigation strategy addresses the risk of exposing sensitive data to external LLM APIs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increase API rate limits", "Use on-premise models and implement data masking", "Disable all validation", "Use only free tier APIs"),
                                "Use on-premise models and implement data masking",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod4.q4",
                                "What is the typical annual cost range for LLM API calls in AI-powered pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$500 - $2,000", "$5,000 - $50,000", "$100,000 - $500,000", "$1,000,000+"),
                                "$5,000 - $50,000",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod4.q5",
                                "According to best practices, what should be done before implementing AI enhancements in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploy immediately to all pipelines", "Run AI checks in shadow mode alongside existing systems", "Replace all existing monitoring", "Hire a dedicated AI team"),
                                "Run AI checks in shadow mode alongside existing systems",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod4.q6",
                                "Which scenario represents a POOR fit for AI-powered pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("High-volume pipelines processing millions of records daily", "Simple pipelines with well-defined validation rules", "Complex data with many interdependent fields", "Pipelines with frequent schema changes"),
                                "Simple pipelines with well-defined validation rules",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod4.q7",
                                "What is the recommended frequency for retraining ML models in production pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Daily", "Weekly", "Monthly or when performance degrades", "Annually"),
                                "Monthly or when performance degrades",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod4.q8",
                                "Which future trend involves running ML models locally to reduce latency and API costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cloud AI", "Edge AI", "Quantum AI", "Distributed AI"),
                                "Edge AI",
                                "obj_module_4")
                );
