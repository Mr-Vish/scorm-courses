test.AddQuestion( new Question ("q1",
                                "What is the fundamental difference between traditional software testing and GenAI testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GenAI is faster", "GenAI produces non-deterministic outputs", "GenAI is cheaper", "GenAI requires no testing"),
                                "GenAI produces non-deterministic outputs",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which testing level is appropriate for prompt template rendering and input validation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Unit tests", "Integration tests", "Evaluation tests", "Safety tests"),
                                "Unit tests",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What is the purpose of snapshot testing in GenAI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase speed", "To record LLM outputs and detect unexpected changes", "To reduce costs", "To improve accuracy"),
                                "To record LLM outputs and detect unexpected changes",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "Which RAG component should be tested for retrieval accuracy and ranking quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Embedding Generation", "Vector Search", "Context Assembly", "Token Counting"),
                                "Vector Search",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is the main challenge when testing AI agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too fast", "They follow non-deterministic paths with variable iterations", "They are too expensive", "They never fail"),
                                "They follow non-deterministic paths with variable iterations",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "Why should LLM APIs be mocked in tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve accuracy", "To reduce cost, increase speed, and ensure determinism", "To make tests more complex", "To avoid writing tests"),
                                "To reduce cost, increase speed, and ensure determinism",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7",
                                "What is the VCR pattern in GenAI testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A video recording tool", "Recording real API responses once and replaying them in tests", "A cost tracking method", "A deployment strategy"),
                                "Recording real API responses once and replaying them in tests",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8",
                                "What is the purpose of property-based testing in GenAI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To test UI properties", "To test invariants that should always hold true", "To test API keys", "To test deployment"),
                                "To test invariants that should always hold true",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q9",
                                "Which sampling strategy runs 10% of tests on every commit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Full suite", "Targeted tests", "Smoke tests", "Integration tests"),
                                "Smoke tests",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q10",
                                "What is the Spy pattern used for in testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To hide test results", "To use real implementation but track calls for verification", "To mock all responses", "To disable testing"),
                                "To use real implementation but track calls for verification",
                                "obj_module_1")
                );