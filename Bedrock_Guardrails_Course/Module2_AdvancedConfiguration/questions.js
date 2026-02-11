test.AddQuestion( new Question ("m2_q1",
                                "When should organizations use denied topics instead of relying on standard content filters?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When content risks are universal and not organization-specific", "When content restrictions are specific to organizational, industry, or application context", "When trying to reduce API costs", "When content filters are not available"),
                                "When content restrictions are specific to organizational, industry, or application context",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q2",
                                "What should a comprehensive denied topic definition include?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only keywords to block", "Core description, inclusion criteria, exclusion criteria, and contextual boundaries", "Just the topic name", "Only examples of blocked content"),
                                "Core description, inclusion criteria, exclusion criteria, and contextual boundaries",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q3",
                                "Which PII action is most appropriate for highly sensitive information like Social Security Numbers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ANONYMIZE to allow interaction to proceed", "REDACT to remove without replacement", "BLOCK to prevent the entire interaction", "LOG for later review"),
                                "BLOCK to prevent the entire interaction",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q4",
                                "What is the primary purpose of the ANONYMIZE action for PII?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To completely block all requests", "To replace sensitive information with generic placeholders while allowing interaction to proceed", "To delete all user data", "To encrypt the information"),
                                "To replace sensitive information with generic placeholders while allowing interaction to proceed",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q5",
                                "What does the grounding score in contextual grounding checks measure?",
                                QUESTION_TYPE_CHOICE,
                                new Array("How fast the model responds", "The degree to which claims in responses are supported by provided source material", "The number of words in the response", "The grammatical correctness of the response"),
                                "The degree to which claims in responses are supported by provided source material",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q6",
                                "What does the relevance score in contextual grounding evaluate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Whether the response is grammatically correct", "Whether the response actually addresses the user's query appropriately", "How long the response is", "Whether the response contains PII"),
                                "Whether the response actually addresses the user's query appropriately",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q7",
                                "What type of hallucination occurs when a model generates specific facts or statistics that are incorrect?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Source hallucinations", "Factual hallucinations", "Reasoning hallucinations", "Contextual hallucinations"),
                                "Factual hallucinations",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q8",
                                "What is a key limitation of contextual grounding checks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too fast", "They verify responses are supported by sources but don't verify source accuracy itself", "They only work in English", "They cannot detect any hallucinations"),
                                "They verify responses are supported by sources but don't verify source accuracy itself",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q9",
                                "What does a high intervention rate in guardrail metrics indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The guardrails are not working", "Guardrails are frequently activating, possibly indicating aggressive filtering or attack attempts", "Users are satisfied with the system", "The system is running slowly"),
                                "Guardrails are frequently activating, possibly indicating aggressive filtering or attack attempts",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q10",
                                "What is a false positive in guardrail performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A policy violation that was correctly blocked", "An intervention that blocked legitimate, policy-compliant content", "A successful attack on the system", "A response that was too slow"),
                                "An intervention that blocked legitimate, policy-compliant content",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q11",
                                "Which optimization approach involves deploying multiple guardrail configurations to different user segments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Baseline-and-iterate", "A/B testing", "Red team-driven", "Manual review"),
                                "A/B testing",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q12",
                                "Why is continuous monitoring important for guardrail optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "Content risks, attack techniques, and regulations evolve over time requiring ongoing adaptation", "To increase model speed", "To eliminate all false positives immediately"),
                                "Content risks, attack techniques, and regulations evolve over time requiring ongoing adaptation",
                                "obj_module_2")
                );
