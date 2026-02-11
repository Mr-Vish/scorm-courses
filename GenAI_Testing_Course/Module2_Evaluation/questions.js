test.AddQuestion( new Question ("q1",
                                "Which framework is specialized for RAG evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DeepEval", "RAGAS", "Promptfoo", "Jest"),
                                "RAGAS",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2",
                                "What does the faithfulness metric measure in RAGAS?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Response speed", "Whether answer is grounded in provided context", "Token count", "User satisfaction"),
                                "Whether answer is grounded in provided context",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3",
                                "Which model should be used as a judge in LLM-as-judge pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Same model being tested", "A stronger, more capable model", "A smaller, faster model", "Any random model"),
                                "A stronger, more capable model",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4",
                                "What is the main advantage of LLM-as-judge over human evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("More accurate", "Scales better and is faster", "Cheaper than automation", "Provides emotional feedback"),
                                "Scales better and is faster",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5",
                                "Which metric measures if the response addresses the question?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faithfulness", "Relevance", "Toxicity", "Latency"),
                                "Relevance",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6",
                                "What is the target hallucination rate for production systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1%", "Less than 5%", "Less than 10%", "Less than 20%"),
                                "Less than 5%",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7",
                                "Which framework is built in Node.js for prompt testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RAGAS", "DeepEval", "Promptfoo", "PyTest"),
                                "Promptfoo",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8",
                                "What should be included in batch evaluation results?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only pass/fail status", "Test ID, metrics scores, and detailed results", "Just the final score", "Only failed tests"),
                                "Test ID, metrics scores, and detailed results",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q9",
                                "Which benchmark measures code generation quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MMLU", "HumanEval", "TruthfulQA", "GLUE"),
                                "HumanEval",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q10",
                                "What is the recommended target for accuracy metrics?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 50%", "Greater than 75%", "Greater than 95%", "100%"),
                                "Greater than 95%",
                                "obj_module_2")
                );