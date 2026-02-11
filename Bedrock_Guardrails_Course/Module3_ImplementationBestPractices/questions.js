test.AddQuestion( new Question ("m3_q1",
                                "What are the two key parameters required to specify a guardrail in API calls?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model ID and region", "Guardrail identifier and guardrail version", "API key and secret", "User ID and session token"),
                                "Guardrail identifier and guardrail version",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q2",
                                "Why should production applications reference numbered guardrail versions instead of DRAFT?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DRAFT versions are slower", "Numbered versions are immutable and provide stable, predictable behavior", "DRAFT versions cost more", "Numbered versions have more features"),
                                "Numbered versions are immutable and provide stable, predictable behavior",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q3",
                                "What does the guardrail action field value 'GUARDRAIL_INTERVENED' indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The request was successful", "The guardrail blocked content and the response is an intervention message", "The model is unavailable", "The request was too slow"),
                                "The guardrail blocked content and the response is an intervention message",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q4",
                                "What is a multi-guardrail strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using multiple AI models", "Maintaining different guardrail configurations for different contexts like public-facing vs internal tools", "Running the same guardrail multiple times", "Combining guardrails with firewalls"),
                                "Maintaining different guardrail configurations for different contexts like public-facing vs internal tools",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q5",
                                "What is the primary purpose of monitoring intervention rates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "To understand how frequently guardrails are activating and detect anomalies", "To improve model accuracy", "To increase throughput"),
                                "To understand how frequently guardrails are activating and detect anomalies",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q6",
                                "What should organizations do when intervention rate spikes suddenly occur?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore them as normal variation", "Investigate immediately as they may indicate attacks or configuration issues", "Disable guardrails", "Increase filter strength"),
                                "Investigate immediately as they may indicate attacks or configuration issues",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q7",
                                "What is the purpose of red team testing for guardrails?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve model training", "To provide adversarial perspective and identify bypass techniques", "To reduce costs", "To increase throughput"),
                                "To provide adversarial perspective and identify bypass techniques",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q8",
                                "What type of test cases verify that legitimate, policy-compliant content is allowed?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Negative test cases", "Positive test cases", "Performance test cases", "Security test cases"),
                                "Positive test cases",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q9",
                                "What is the benefit of a phased rollout deployment strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's faster than other methods", "It limits the blast radius of potential issues by deploying incrementally", "It costs less", "It requires no testing"),
                                "It limits the blast radius of potential issues by deploying incrementally",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q10",
                                "What is a canary deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploying to all users at once", "Deploying to a small group first to monitor for issues before full rollout", "Deploying only during business hours", "Deploying without testing"),
                                "Deploying to a small group first to monitor for issues before full rollout",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q11",
                                "Why is configuration as code important for guardrails?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes configurations faster", "It enables tracking, review, and rollback through version control", "It reduces API costs", "It improves model accuracy"),
                                "It enables tracking, review, and rollback through version control",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q12",
                                "What should organizations do when users report false positives?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore the reports", "Review promptly, adjust configurations to reduce recurrence, and communicate resolutions", "Disable all guardrails", "Blame the user"),
                                "Review promptly, adjust configurations to reduce recurrence, and communicate resolutions",
                                "obj_module_3")
                );
