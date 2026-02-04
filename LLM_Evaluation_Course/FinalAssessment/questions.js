test.AddQuestion( new Question ("q1",
                                "When using 'LLM-as-Judge', what is a common technique to avoid scoring bias and compare two model outputs directly?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Pairwise Comparison", "Exact Match", "Semantic Embedding", "ROUGE-L"),
                                "Pairwise Comparison",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "Which metric focuses on recall of n-grams and is commonly used for summarization tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Exact Match", "BLEU", "ROUGE", "METEOR"),
                                "ROUGE",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "What is a major limitation of automated metrics like BLEU and ROUGE?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too expensive to run", "They do not capture semantic meaning or factual accuracy", "They only work for English", "They require a GPU"),
                                "They do not capture semantic meaning or factual accuracy",
                                "obj_module_1")
                );
