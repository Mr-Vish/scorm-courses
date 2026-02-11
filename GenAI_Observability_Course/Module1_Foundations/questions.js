test.AddQuestion( new Question ("q1",
                                "What fundamental characteristic distinguishes GenAI applications from traditional software systems in terms of observability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They consume more memory resources", "They produce non-deterministic outputs for identical inputs", "They require specialized hardware accelerators", "They use more CPU processing power"),
                                "They produce non-deterministic outputs for identical inputs",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which observability pillar captures the complete lifecycle of a single request across multiple operations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Metrics", "Logs", "Traces", "Alerts"),
                                "Traces",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Why is Time to First Token (TTFT) a critical metric for user experience?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It determines total API cost", "It directly impacts perceived responsiveness and user satisfaction", "It measures API error frequency", "It tracks memory consumption patterns"),
                                "It directly impacts perceived responsiveness and user satisfaction",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "Which observability platform is specifically designed as the official tool for LangChain applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Arize Phoenix", "Helicone", "LangSmith", "Weights & Biases"),
                                "LangSmith",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What distinguishes Helicone from other GenAI observability tools?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It requires extensive code modifications", "It operates as a proxy requiring only endpoint URL changes", "It exclusively supports OpenAI models", "It provides unlimited free usage"),
                                "It operates as a proxy requiring only endpoint URL changes",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "In the SMART metrics framework, what does 'Actionable' specifically mean?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The metric can be automatically measured", "Metric changes should trigger specific operational responses", "The metric is continuously tracked", "The metric aligns with business objectives"),
                                "Metric changes should trigger specific operational responses",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7",
                                "What is the recommended P95 latency threshold for Time to First Token (TTFT) that should trigger alerts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 100ms", "Less than 500ms", "Greater than 1000ms", "Greater than 3000ms"),
                                "Greater than 1000ms",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8",
                                "Which sampling strategy dynamically adjusts collection rates based on system conditions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Full Collection", "Random Sampling", "Adaptive Sampling", "Selective Logging"),
                                "Adaptive Sampling",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q9",
                                "According to security best practices, which data should NEVER be logged?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Request metadata and timestamps", "Token counts and usage statistics", "API keys and authentication credentials", "Error messages and codes"),
                                "API keys and authentication credentials",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q10",
                                "Why are percentiles (P50, P95, P99) preferred over averages for latency analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are easier to calculate", "They reveal tail latencies and outliers that averages hide", "They require less storage space", "They are more accurate for cost tracking"),
                                "They reveal tail latencies and outliers that averages hide",
                                "obj_module_1")
                );