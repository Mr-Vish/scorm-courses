test.AddQuestion( new Question ("q1",
                                "Which evaluation approach is most scalable for CI/CD pipelines but often fails to capture nuanced semantic meaning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Automated Metrics (BLEU/ROUGE)", "A/B Testing with real users", "Human Evaluation", "LLM-as-Judge"),
                                "Automated Metrics (BLEU/ROUGE)",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "What is a known bias of 'LLM-as-Judge' systems when comparing two model outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("An inability to read JSON", "A tendency to always pick the shortest answer", "A tendency to favor longer responses or its own training style", "A preference for incorrect mathematical solutions"),
                                "A tendency to favor longer responses or its own training style",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "Scenario: You are deploying an LLM for medical advice. Which evaluation method is most critical for ensuring safety and domain accuracy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("BLEU score", "ROUGE-L score", "Human Evaluation by medical experts", "Counting the number of tokens generated"),
                                "Human Evaluation by medical experts",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q4",
                                "What does a 'SelfCheckGPT' workflow primarily aim to achieve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increasing the speed of model inference", "Fact verification of model outputs without requiring an external reference dataset", "Reducing the cost of training a model", "Translating model logs into different languages"),
                                "Fact verification of model outputs without requiring an external reference dataset",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q5",
                                "Why is 'Continuous Evaluation' important in the LLM lifecycle?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt the user's data", "To replace the need for a system prompt", "To make the model learn new facts in real-time", "To detect 'drift' in quality and catch regressions caused by prompt or model changes"),
                                "To detect 'drift' in quality and catch regressions caused by prompt or model changes",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q6",
                                "When testing for 'Jailbreaks,' what is an evaluator primarily looking for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model's knowledge of history", "Ways to make the model respond faster", "Grammatical errors in the model's output", "Attempts to bypass the model's safety guardrails through adversarial prompting"),
                                "Attempts to bypass the model's safety guardrails through adversarial prompting",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q7",
                                "Which metric is most appropriate for a code generation task where functional correctness is more important than text similarity?",
                                QUESTION_TYPE_CHOICE,
                                new Array("BLEU", "ROUGE", "Pass@k", "BERTScore"),
                                "Pass@k",
                                "obj_module_1")
                );
