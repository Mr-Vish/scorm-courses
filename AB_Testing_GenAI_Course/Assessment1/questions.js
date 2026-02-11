test.AddQuestion( new Question ("q1_m1",
                                "What is the primary reason A/B testing is critical for GenAI features?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GenAI systems are deterministic and predictable", "GenAI systems are non-deterministic and produce variable outputs", "GenAI systems don't require testing", "GenAI systems always perform better than traditional software"),
                                "GenAI systems are non-deterministic and produce variable outputs",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2_m1",
                                "Which challenge is unique to GenAI experimentation compared to traditional A/B testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Measuring click-through rates", "Subjective quality assessment of outputs", "Tracking page views", "Counting user registrations"),
                                "Subjective quality assessment of outputs",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3_m1",
                                "What is the purpose of deterministic user assignment in A/B testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To randomly change user experiences each session", "To ensure users receive consistent variant experiences across sessions", "To increase experiment complexity", "To reduce the number of users needed"),
                                "To ensure users receive consistent variant experiences across sessions",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4_m1",
                                "In the context of GenAI A/B testing, what does MDE stand for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximum Data Extraction", "Minimum Detectable Effect", "Model Deployment Environment", "Metric Definition Engine"),
                                "Minimum Detectable Effect",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5_m1",
                                "Which metric category measures how often users copy AI-generated responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Quality Metrics", "User Behavior Metrics", "Engagement Metrics", "Operational Metrics"),
                                "User Behavior Metrics",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6_m1",
                                "What is the main advantage of using equal traffic allocation (50/50 split)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces business risk", "It maximizes statistical power for a given sample size", "It requires fewer total users", "It prevents all negative outcomes"),
                                "It maximizes statistical power for a given sample size",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7_m1",
                                "When should you use unequal traffic allocation (e.g., 90/10 split)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When you want maximum statistical power", "When testing high-risk changes or expensive models", "When you have unlimited budget", "When the experiment is simple"),
                                "When testing high-risk changes or expensive models",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8_m1",
                                "What problem arises when testing multiple variants simultaneously?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Experiments run faster", "The probability of false positives increases", "Sample size requirements decrease", "Analysis becomes simpler"),
                                "The probability of false positives increases",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q9_m1",
                                "What is the purpose of a canary phase in ramp-up strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To expose all users immediately", "To detect severe issues with minimal user impact", "To increase experiment duration", "To reduce statistical power"),
                                "To detect severe issues with minimal user impact",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q10_m1",
                                "What does SRM stand for in experiment monitoring?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Statistical Ratio Measurement", "Sample Ratio Mismatch", "System Resource Monitor", "Significance Rate Metric"),
                                "Sample Ratio Mismatch",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q11_m1",
                                "Which operational metric tracks the distribution of response times?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Token Usage", "Latency (P50, P95, P99)", "Error Rate", "Cost Per Request"),
                                "Latency (P50, P95, P99)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q12_m1",
                                "What is a guardrail metric in GenAI experimentation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The primary success metric", "A metric that ensures optimizations don't compromise safety or quality", "A metric that measures user engagement", "A metric that tracks API costs"),
                                "A metric that ensures optimizations don't compromise safety or quality",
                                "obj_module_1")
                );
