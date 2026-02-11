test.AddQuestion( new Question ("q1",
                                "What is the fundamental challenge of testing GenAI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too slow", "They produce non-deterministic outputs", "They are too expensive", "They require special hardware"),
                                "They produce non-deterministic outputs",
                                "obj_final")
                );

test.AddQuestion( new Question ("q2",
                                "Which testing level uses standard unit tests for deterministic components?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Unit tests", "Integration tests", "Evaluation tests", "Safety tests"),
                                "Unit tests",
                                "obj_final")
                );

test.AddQuestion( new Question ("q3",
                                "What is the VCR pattern used for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Video recording", "Recording and replaying API responses", "Cost tracking", "Performance testing"),
                                "Recording and replaying API responses",
                                "obj_final")
                );

test.AddQuestion( new Question ("q4",
                                "Which framework is specialized for RAG evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DeepEval", "RAGAS", "Promptfoo", "PyTest"),
                                "RAGAS",
                                "obj_final")
                );

test.AddQuestion( new Question ("q5",
                                "What does faithfulness measure in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Speed", "Whether answer is grounded in context", "Cost", "User satisfaction"),
                                "Whether answer is grounded in context",
                                "obj_final")
                );

test.AddQuestion( new Question ("q6",
                                "Which model should be used as judge in LLM-as-judge pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Same model", "A stronger, more capable model", "A smaller model", "Any model"),
                                "A stronger, more capable model",
                                "obj_final")
                );

test.AddQuestion( new Question ("q7",
                                "What is the target hallucination rate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1%", "Less than 5%", "Less than 10%", "Less than 20%"),
                                "Less than 5%",
                                "obj_final")
                );

test.AddQuestion( new Question ("q8",
                                "Which CI/CD stage runs unit tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Nightly", "Pre-release", "Pre-commit", "Weekly"),
                                "Pre-commit",
                                "obj_final")
                );

test.AddQuestion( new Question ("q9",
                                "What is the purpose of regression testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increase speed", "Ensure changes don't degrade quality", "Reduce costs", "Add features"),
                                "Ensure changes don't degrade quality",
                                "obj_final")
                );

test.AddQuestion( new Question ("q10",
                                "Which safety category tests for bypassing guardrails?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Injection", "Jailbreaking", "Toxicity", "PII Leakage"),
                                "Jailbreaking",
                                "obj_final")
                );

test.AddQuestion( new Question ("q11",
                                "Why mock LLM APIs in tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improve accuracy", "Reduce cost and increase speed", "Make tests complex", "Avoid testing"),
                                "Reduce cost and increase speed",
                                "obj_final")
                );

test.AddQuestion( new Question ("q12",
                                "What is property-based testing used for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("UI testing", "Testing invariants that should always hold", "API testing", "Deployment"),
                                "Testing invariants that should always hold",
                                "obj_final")
                );

test.AddQuestion( new Question ("q13",
                                "Which benchmark measures code generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MMLU", "HumanEval", "TruthfulQA", "GLUE"),
                                "HumanEval",
                                "obj_final")
                );

test.AddQuestion( new Question ("q14",
                                "What is the recommended accuracy target?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 50%", "Greater than 75%", "Greater than 95%", "100%"),
                                "Greater than 95%",
                                "obj_final")
                );

test.AddQuestion( new Question ("q15",
                                "How long should PR validation tests take?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1 min", "Less than 5 min", "Less than 30 min", "Less than 2 hours"),
                                "Less than 5 min",
                                "obj_final")
                );

test.AddQuestion( new Question ("q16",
                                "When should baselines be updated?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Never", "When intentional improvements are made", "Daily", "Randomly"),
                                "When intentional improvements are made",
                                "obj_final")
                );

test.AddQuestion( new Question ("q17",
                                "What is red team testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Color testing", "Adversarial testing to find vulnerabilities", "Tuesday testing", "Performance testing"),
                                "Adversarial testing to find vulnerabilities",
                                "obj_final")
                );

test.AddQuestion( new Question ("q18",
                                "What is the Spy pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hiding results", "Using real implementation but tracking calls", "Mocking everything", "Disabling tests"),
                                "Using real implementation but tracking calls",
                                "obj_final")
                );

test.AddQuestion( new Question ("q19",
                                "Which framework is built in Node.js?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RAGAS", "DeepEval", "Promptfoo", "PyTest"),
                                "Promptfoo",
                                "obj_final")
                );

test.AddQuestion( new Question ("q20",
                                "What should quality gates do when they fail?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore", "Block deployment", "Log warning", "Continue"),
                                "Block deployment",
                                "obj_final")
                );

test.AddQuestion( new Question ("q21",
                                "What is snapshot testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Taking photos", "Recording outputs and detecting changes", "Speed testing", "Cost tracking"),
                                "Recording outputs and detecting changes",
                                "obj_final")
                );

test.AddQuestion( new Question ("q22",
                                "Which RAG component tests retrieval accuracy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Embedding Generation", "Vector Search", "Context Assembly", "Token Counting"),
                                "Vector Search",
                                "obj_final")
                );

test.AddQuestion( new Question ("q23",
                                "What is the main challenge testing AI agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Too fast", "Non-deterministic paths with variable iterations", "Too cheap", "Never fail"),
                                "Non-deterministic paths with variable iterations",
                                "obj_final")
                );

test.AddQuestion( new Question ("q24",
                                "What is the maximum toxicity score?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 0.1", "Less than 0.5", "Less than 0.8", "Less than 1.0"),
                                "Less than 0.5",
                                "obj_final")
                );

test.AddQuestion( new Question ("q25",
                                "What percentage reduction in production incidents do organizations with comprehensive testing report?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-20%", "30-40%", "50-70%", "90-100%"),
                                "50-70%",
                                "obj_final")
                );