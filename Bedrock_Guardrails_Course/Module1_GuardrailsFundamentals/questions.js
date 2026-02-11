test.AddQuestion( new Question ("m1_q1",
                                "What is the primary purpose of Amazon Bedrock Guardrails in generative AI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve model inference speed", "To provide configurable safeguards that filter inputs and outputs for content policy compliance", "To reduce the cost of API calls", "To train foundation models on custom data"),
                                "To provide configurable safeguards that filter inputs and outputs for content policy compliance",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q2",
                                "Which intervention point does Amazon Bedrock Guardrails evaluate content?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only before content reaches the foundation model", "Only after the model generates a response", "Both before prompts reach the model and after responses are generated", "Only during model training"),
                                "Both before prompts reach the model and after responses are generated",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q3",
                                "What type of risk does the hate speech content filter primarily address?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Performance degradation", "Content expressing discrimination or prejudice against protected groups", "Increased API latency", "Model hallucinations"),
                                "Content expressing discrimination or prejudice against protected groups",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q4",
                                "Which filter strength level provides the most aggressive detection with highest sensitivity?",
                                QUESTION_TYPE_CHOICE,
                                new Array("NONE", "LOW", "MEDIUM", "HIGH"),
                                "HIGH",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q5",
                                "What is the primary advantage of configuring different filter strengths for inputs versus outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces API costs", "It allows nuanced policy enforcement based on whether content originates from users or models", "It improves model accuracy", "It eliminates the need for denied topics"),
                                "It allows nuanced policy enforcement based on whether content originates from users or models",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q6",
                                "Which content category specifically detects attempts to manipulate or bypass AI system restrictions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hate speech", "Violence", "Misconduct", "Prompt attacks"),
                                "Prompt attacks",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q7",
                                "What is the purpose of denied topics in Amazon Bedrock Guardrails?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To block foundation model access", "To define organization-specific content restrictions beyond standard harmful categories", "To improve model training", "To reduce inference costs"),
                                "To define organization-specific content restrictions beyond standard harmful categories",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q8",
                                "How do content policy filters differ from word filters in their approach to content evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Content filters use ML for semantic understanding while word filters perform exact matching", "Word filters are more accurate than content filters", "Content filters only work on inputs while word filters work on outputs", "There is no difference between them"),
                                "Content filters use ML for semantic understanding while word filters perform exact matching",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q9",
                                "What action does the ANONYMIZE intervention take when PII is detected?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Completely blocks the request", "Replaces sensitive information with generic placeholders", "Logs the information for review", "Sends an alert to administrators"),
                                "Replaces sensitive information with generic placeholders",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q10",
                                "What do contextual grounding checks verify in model responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("That responses are grammatically correct", "That responses remain factually grounded in provided source material", "That responses are generated quickly", "That responses contain no PII"),
                                "That responses remain factually grounded in provided source material",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q11",
                                "Which PII detection action is most appropriate for highly sensitive information like Social Security Numbers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ANONYMIZE", "REDACT", "BLOCK", "LOG"),
                                "BLOCK",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q12",
                                "What is a key limitation of word filters compared to ML-based content filters?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Word filters are slower", "Word filters cannot understand context and may block legitimate uses", "Word filters cost more to implement", "Word filters only work in English"),
                                "Word filters cannot understand context and may block legitimate uses",
                                "obj_module_1")
                );
