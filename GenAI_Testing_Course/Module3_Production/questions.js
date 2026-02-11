test.AddQuestion( new Question ("q1",
                                "Which CI/CD stage should run unit tests and linting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Nightly", "Pre-release", "Pre-commit", "Monthly"),
                                "Pre-commit",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q2",
                                "What is the recommended duration for PR validation tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1 minute", "Less than 5 minutes", "Less than 30 minutes", "Less than 2 hours"),
                                "Less than 5 minutes",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3",
                                "What is the purpose of regression testing in GenAI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase speed", "To ensure changes don't degrade quality", "To reduce costs", "To add new features"),
                                "To ensure changes don't degrade quality",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q4",
                                "When should baselines be updated in regression testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Never", "When intentional improvements are made", "Every day", "Randomly"),
                                "When intentional improvements are made",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q5",
                                "Which safety testing category focuses on bypassing safety guardrails?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Injection", "Jailbreaking", "Toxicity", "PII Leakage"),
                                "Jailbreaking",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q6",
                                "What is the maximum acceptable toxicity score in safety testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 0.1", "Less than 0.5", "Less than 0.8", "Less than 1.0"),
                                "Less than 0.5",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q7",
                                "What is red team testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Testing with red color themes", "Adversarial testing to find vulnerabilities", "Testing on Tuesdays", "Performance testing"),
                                "Adversarial testing to find vulnerabilities",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q8",
                                "How should expensive evaluations be handled in CI/CD?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Run on every commit", "Run only on main branch or nightly", "Never run them", "Run randomly"),
                                "Run only on main branch or nightly",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q9",
                                "What should happen when a quality gate fails?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore it", "Block deployment and raise an error", "Log a warning only", "Continue anyway"),
                                "Block deployment and raise an error",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q10",
                                "What is the purpose of PII protection testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase speed", "To ensure system doesn't leak sensitive personal information", "To reduce costs", "To improve accuracy"),
                                "To ensure system doesn't leak sensitive personal information",
                                "obj_module_3")
                );