test.AddQuestion( new Question ("q1",
                                "What fundamental characteristic makes GenAI applications uniquely challenging for observability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("High memory usage", "Non-deterministic behavior producing different outputs for identical inputs", "Slow processing speed", "Large file sizes"),
                                "Non-deterministic behavior producing different outputs for identical inputs",
                                "obj_final")
                );

test.AddQuestion( new Question ("q2",
                                "Which observability pillar provides quantitative measurements tracked over time?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Metrics", "Logs", "Traces", "Alerts"),
                                "Metrics",
                                "obj_final")
                );

test.AddQuestion( new Question ("q3",
                                "What distinguishes Arize Phoenix from other observability platforms?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lowest cost", "Open-source and self-hosted with no vendor lock-in", "Fastest performance", "Easiest to use"),
                                "Open-source and self-hosted with no vendor lock-in",
                                "obj_final")
                );

test.AddQuestion( new Question ("q4",
                                "In the SMART metrics framework, what makes a metric 'Actionable'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It can be measured", "Changes should trigger specific operational responses", "It's tracked over time", "It's easy to calculate"),
                                "Changes should trigger specific operational responses",
                                "obj_final")
                );

test.AddQuestion( new Question ("q5",
                                "What is the recommended retention period for request metadata logs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("7 days", "30 days", "90 days", "1 year"),
                                "90 days",
                                "obj_final")
                );

test.AddQuestion( new Question ("q6",
                                "In OpenTelemetry semantic conventions, which attribute stores the LLM provider name?",
                                QUESTION_TYPE_CHOICE,
                                new Array("llm.provider", "gen_ai.system", "model.vendor", "ai.provider"),
                                "gen_ai.system",
                                "obj_final")
                );

test.AddQuestion( new Question ("q7",
                                "Why are output tokens significantly more expensive than input tokens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They require more storage", "LLM providers price them 3-5x higher due to generation costs", "They use more bandwidth", "They take longer to transmit"),
                                "LLM providers price them 3-5x higher due to generation costs",
                                "obj_final")
                );

test.AddQuestion( new Question ("q8",
                                "What is the primary benefit of implementing caching for LLM requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improved accuracy", "Serving identical requests without API calls to reduce costs and latency", "Better security", "Faster training"),
                                "Serving identical requests without API calls to reduce costs and latency",
                                "obj_final")
                );

test.AddQuestion( new Question ("q9",
                                "According to logging best practices, what should NEVER be logged?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Token counts", "API keys and authentication credentials", "Error messages", "Request timestamps"),
                                "API keys and authentication credentials",
                                "obj_final")
                );

test.AddQuestion( new Question ("q10",
                                "What is the purpose of adaptive sampling in distributed tracing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs uniformly", "To capture everything during incidents but sample during normal operation", "To improve accuracy", "To compress data"),
                                "To capture everything during incidents but sample during normal operation",
                                "obj_final")
                );

test.AddQuestion( new Question ("q11",
                                "Which dashboard level is designed for leadership and product managers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Operations Dashboard", "Deep Dive Dashboard", "Executive Dashboard", "Technical Dashboard"),
                                "Executive Dashboard",
                                "obj_final")
                );

test.AddQuestion( new Question ("q12",
                                "What is the recommended response time for a High severity alert?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Immediate", "Within 15 minutes", "Within 1 hour", "Next business day"),
                                "Within 15 minutes",
                                "obj_final")
                );

test.AddQuestion( new Question ("q13",
                                "Which evaluation approach uses a powerful LLM to assess production model outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Human evaluation", "LLM-as-judge", "Rule-based evaluation", "Embedding similarity"),
                                "LLM-as-judge",
                                "obj_final")
                );

test.AddQuestion( new Question ("q14",
                                "What percentage of latency reduction can streaming responses provide?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-20%", "30-40%", "50-70%", "80-90%"),
                                "50-70%",
                                "obj_final")
                );

test.AddQuestion( new Question ("q15",
                                "What is the main purpose of intelligent model routing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase complexity", "To route requests to the most cost-effective model meeting quality requirements", "To slow down processing", "To store more data"),
                                "To route requests to the most cost-effective model meeting quality requirements",
                                "obj_final")
                );

test.AddQuestion( new Question ("q16",
                                "When investigating intermittent timeouts, what should you check first?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Server hardware", "Timeout distribution and average input tokens", "Network cables", "User interface"),
                                "Timeout distribution and average input tokens",
                                "obj_final")
                );

test.AddQuestion( new Question ("q17",
                                "What is the primary benefit of regression testing for GenAI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reducing costs", "Verifying quality before deployments with a test suite", "Increasing speed", "Simplifying code"),
                                "Verifying quality before deployments with a test suite",
                                "obj_final")
                );

test.AddQuestion( new Question ("q18",
                                "Which metric aggregation method is most appropriate for latency analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Average only", "Sum only", "Percentiles (P50, P95, P99)", "Median only"),
                                "Percentiles (P50, P95, P99)",
                                "obj_final")
                );

test.AddQuestion( new Question ("q19",
                                "What is the recommended P95 latency alert threshold for total response time?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 1 second", "Greater than 3 seconds", "Greater than 5 seconds", "Greater than 10 seconds"),
                                "Greater than 5 seconds",
                                "obj_final")
                );

test.AddQuestion( new Question ("q20",
                                "What is the primary challenge of implementing comprehensive observability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's too expensive", "Implementation complexity requiring significant effort and integration", "It doesn't work", "It's too simple"),
                                "Implementation complexity requiring significant effort and integration",
                                "obj_final")
                );

test.AddQuestion( new Question ("q21",
                                "How much cost reduction do organizations typically achieve with comprehensive observability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("5-10%", "15-25%", "40-80%", "90-95%"),
                                "40-80%",
                                "obj_final")
                );

test.AddQuestion( new Question ("q22",
                                "What is the purpose of PII redaction in logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce file size", "To protect sensitive user information from being stored", "To improve performance", "To compress logs"),
                                "To protect sensitive user information from being stored",
                                "obj_final")
                );

test.AddQuestion( new Question ("q23",
                                "Which tool provides zero-code integration by acting as a proxy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LangSmith", "Arize Phoenix", "Helicone", "Weights & Biases"),
                                "Helicone",
                                "obj_final")
                );

test.AddQuestion( new Question ("q24",
                                "What is the first step in the troubleshooting workflow?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploy a fix", "Reproduce the issue using request ID and trace", "Update documentation", "Restart servers"),
                                "Reproduce the issue using request ID and trace",
                                "obj_final")
                );

test.AddQuestion( new Question ("q25",
                                "What percentage of time reduction can parallel tool execution provide?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-20%", "25-35%", "40-60%", "70-80%"),
                                "40-60%",
                                "obj_final")
                );