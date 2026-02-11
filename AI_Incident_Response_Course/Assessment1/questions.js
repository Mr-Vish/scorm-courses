// Module 1 Assessment: AI-Powered Log Analysis and Correlation
// Tests understanding of AI capabilities in log analysis

test.AddQuestion( new Question ("com.scorm.aiincident.mod1.q1",
                                "What is the primary limitation of traditional regex-based log analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is too slow", "It can only find patterns explicitly searched for and cannot identify novel patterns", "It requires expensive infrastructure", "It cannot process text data"),
                                "It can only find patterns explicitly searched for and cannot identify novel patterns",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod1.q2",
                                "How do LLMs understand the semantic meaning of log entries differently from traditional keyword matching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They process logs faster", "They understand relationships, causality, and context beyond exact keyword matches", "They use more memory", "They require less training data"),
                                "They understand relationships, causality, and context beyond exact keyword matches",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod1.q3",
                                "In the context of multi-service correlation, what advantage does AI have over distributed tracing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI is cheaper to implement", "AI can identify causal chains not captured by request IDs, including background jobs and infrastructure issues", "AI requires no configuration", "AI works without any observability tools"),
                                "AI can identify causal chains not captured by request IDs, including background jobs and infrastructure issues",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod1.q4",
                                "What is a 'hallucination' in the context of LLM-based log analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When the LLM processes too many logs", "When the LLM generates plausible-sounding but incorrect explanations", "When the LLM crashes due to memory issues", "When the LLM takes too long to respond"),
                                "When the LLM generates plausible-sounding but incorrect explanations",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod1.q5",
                                "Why is preprocessing logs before sending them to an LLM considered a best practice?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make logs look better", "To reduce costs, stay within context limits, and improve analysis quality", "To comply with regulations", "To speed up network transfer"),
                                "To reduce costs, stay within context limits, and improve analysis quality",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod1.q6",
                                "Which integration pattern involves AI being triggered when an incident is created in PagerDuty?",
                                QUESTION_TYPE_CHOICE,
                                new Array("API-Based Integration", "Webhook-Based Integration", "Embedded AI Assistants", "Manual Integration"),
                                "Webhook-Based Integration",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod1.q7",
                                "What type of data should always be redacted from logs before sending to LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Timestamps", "Error messages", "Customer data, credentials, API keys, and PII", "Service names"),
                                "Customer data, credentials, API keys, and PII",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod1.q8",
                                "According to the module, what is the typical response time for LLM API calls?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Milliseconds", "2-10 seconds", "30-60 seconds", "Several minutes"),
                                "2-10 seconds",
                                "obj_module_1")
                );
