test.AddQuestion( new Question ("q1",
                                "What is the primary purpose of implementing distributed tracing in GenAI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce operational costs", "To track a single request's journey through multiple operations and services", "To store user conversation data", "To improve model accuracy scores"),
                                "To track a single request's journey through multiple operations and services",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2",
                                "In OpenTelemetry semantic conventions, which attribute stores the LLM model identifier?",
                                QUESTION_TYPE_CHOICE,
                                new Array("llm.model", "gen_ai.request.model", "model.name", "ai.model_id"),
                                "gen_ai.request.model",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3",
                                "Why do LLM providers typically charge 3-5x more for output tokens compared to input tokens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They require more storage capacity", "Generation is computationally more expensive than processing input", "They take longer to transmit", "They use more network bandwidth"),
                                "Generation is computationally more expensive than processing input",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4",
                                "For simple classification or extraction tasks, which strategy provides the best cost optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increase temperature parameter", "Use smaller, cheaper models like Claude Haiku or GPT-4o Mini", "Add more few-shot examples", "Disable response caching"),
                                "Use smaller, cheaper models like Claude Haiku or GPT-4o Mini",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5",
                                "What is the primary benefit of implementing a cache layer for LLM requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase response latency", "To serve identical requests without making API calls, reducing costs and latency", "To store user authentication credentials", "To improve model accuracy"),
                                "To serve identical requests without making API calls, reducing costs and latency",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6",
                                "According to logging best practices, what metadata should you ALWAYS log for every request?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Full user messages with PII", "API keys and credentials", "Request metadata like timestamp, model, and token counts", "Complete conversation histories"),
                                "Request metadata like timestamp, model, and token counts",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7",
                                "What is the primary purpose of implementing PII redaction in logging systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce log file size", "To protect sensitive user information from being stored in logs", "To improve query performance", "To compress data efficiently"),
                                "To protect sensitive user information from being stored in logs",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8",
                                "In a real-world cost optimization scenario, what combination of strategies achieved 80% cost reduction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using only one model exclusively", "Model selection, prompt optimization, output limits, and caching combined", "Reducing request volume significantly", "Disabling features completely"),
                                "Model selection, prompt optimization, output limits, and caching combined",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q9",
                                "What is tail-based sampling in distributed tracing, and why is it valuable?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sampling at the start of the trace", "Making sampling decisions after trace completion, keeping all errors and sampling successes", "Random sampling throughout execution", "Sampling only successful requests"),
                                "Making sampling decisions after trace completion, keeping all errors and sampling successes",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q10",
                                "What is the recommended retention period for guardrail event logs to meet compliance requirements?",
                                QUESTION_TYPE_CHOICE,
                                new Array("7 days", "30 days", "1 year", "Permanent retention"),
                                "1 year",
                                "obj_module_2")
                );