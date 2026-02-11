// Final Comprehensive Assessment
// Covers all 3 modules with unique questions

test.AddQuestion( new Question ("final_q1",
                                "What is the fundamental purpose of Amazon Bedrock Guardrails' dual-layer evaluation approach?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce API costs", "To filter both user inputs and model outputs for comprehensive protection", "To improve model training", "To increase inference speed"),
                                "To filter both user inputs and model outputs for comprehensive protection",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q2",
                                "Which content category specifically addresses attempts to manipulate AI systems through adversarial prompting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hate speech", "Violence", "Prompt attacks", "Misconduct"),
                                "Prompt attacks",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q3",
                                "What is the key difference between content filters and word filters?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Word filters are faster", "Content filters use ML for semantic understanding while word filters perform exact matching", "Word filters are more accurate", "There is no difference"),
                                "Content filters use ML for semantic understanding while word filters perform exact matching",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q4",
                                "When should organizations use denied topics instead of standard content filters?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "For organization-specific content restrictions beyond universal harmful categories", "When content filters are unavailable", "To improve performance"),
                                "For organization-specific content restrictions beyond universal harmful categories",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q5",
                                "What does the ANONYMIZE action do when PII is detected?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Blocks the entire request", "Replaces sensitive information with generic placeholders", "Deletes all user data", "Sends an alert"),
                                "Replaces sensitive information with generic placeholders",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q6",
                                "What problem do contextual grounding checks address?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Slow response times", "Model hallucinations by verifying responses are grounded in source material", "High API costs", "User authentication"),
                                "Model hallucinations by verifying responses are grounded in source material",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q7",
                                "What does a high grounding threshold (0.8-1.0) prioritize?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Response speed", "Maximum factual accuracy by blocking questionable responses", "Cost reduction", "User satisfaction"),
                                "Maximum factual accuracy by blocking questionable responses",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q8",
                                "What is a false positive in guardrail performance metrics?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A correctly blocked policy violation", "An intervention that blocked legitimate, policy-compliant content", "A successful attack", "A slow response"),
                                "An intervention that blocked legitimate, policy-compliant content",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q9",
                                "Why should production applications use numbered guardrail versions instead of DRAFT?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DRAFT is slower", "Numbered versions are immutable providing stable, predictable behavior", "DRAFT costs more", "Numbered versions have more features"),
                                "Numbered versions are immutable providing stable, predictable behavior",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q10",
                                "What does the guardrail action field 'GUARDRAIL_INTERVENED' indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Request was successful", "Guardrail blocked content and response is an intervention message", "Model is unavailable", "Request was too slow"),
                                "Guardrail blocked content and response is an intervention message",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q11",
                                "What is the purpose of a multi-guardrail strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using multiple AI models", "Maintaining different configurations for different contexts like public vs internal", "Running same guardrail multiple times", "Reducing costs"),
                                "Maintaining different configurations for different contexts like public vs internal",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q12",
                                "What should sudden intervention rate spikes indicate to operators?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Normal system operation", "Potential attacks or configuration issues requiring investigation", "System is working perfectly", "Time to disable guardrails"),
                                "Potential attacks or configuration issues requiring investigation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q13",
                                "What is the primary objective of red team testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improve model training", "Provide adversarial perspective and identify bypass techniques", "Reduce costs", "Increase speed"),
                                "Provide adversarial perspective and identify bypass techniques",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q14",
                                "What type of test cases verify that policy violations are correctly caught?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Positive test cases", "Negative test cases", "Performance tests", "Integration tests"),
                                "Negative test cases",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q15",
                                "What is the benefit of phased rollout deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's faster", "It limits blast radius by deploying incrementally", "It costs less", "It requires no testing"),
                                "It limits blast radius by deploying incrementally",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q16",
                                "Why is configuration as code important?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Makes configurations faster", "Enables tracking, review, and rollback through version control", "Reduces costs", "Improves accuracy"),
                                "Enables tracking, review, and rollback through version control",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q17",
                                "Which filter strength level provides the most aggressive detection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("NONE", "LOW", "MEDIUM", "HIGH"),
                                "HIGH",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q18",
                                "What is a key limitation of contextual grounding checks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too slow", "They verify source support but don't verify source accuracy itself", "They only work in English", "They cannot detect hallucinations"),
                                "They verify source support but don't verify source accuracy itself",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q19",
                                "What should a comprehensive denied topic definition include?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only keywords", "Core description, inclusion criteria, exclusion criteria, and boundaries", "Just the topic name", "Only examples"),
                                "Core description, inclusion criteria, exclusion criteria, and boundaries",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q20",
                                "What is the purpose of monitoring category-specific intervention rates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "To identify which filters are most active and where to focus optimization", "To improve model training", "To increase speed"),
                                "To identify which filters are most active and where to focus optimization",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q21",
                                "What action is most appropriate for highly sensitive PII like Social Security Numbers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ANONYMIZE", "REDACT", "BLOCK", "LOG"),
                                "BLOCK",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q22",
                                "What does the relevance score in grounding checks measure?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Grammatical correctness", "Whether response addresses the user's query appropriately", "Response length", "PII presence"),
                                "Whether response addresses the user's query appropriately",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q23",
                                "What is a canary deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploying to all users at once", "Deploying to small group first to monitor before full rollout", "Deploying only at night", "Deploying without testing"),
                                "Deploying to small group first to monitor before full rollout",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q24",
                                "Why is continuous monitoring important for guardrails?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "Content risks and attack techniques evolve requiring ongoing adaptation", "To improve model training", "To eliminate false positives immediately"),
                                "Content risks and attack techniques evolve requiring ongoing adaptation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q25",
                                "What should organizations do when users report false positives?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore reports", "Review promptly, adjust configurations, and communicate resolutions", "Disable guardrails", "Blame users"),
                                "Review promptly, adjust configurations, and communicate resolutions",
                                "obj_final_assessment")
                );
