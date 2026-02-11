test.AddQuestion( new Question ("q1",
                                "Which benchmark is specifically designed to evaluate multi-step mathematical reasoning in Large Language Models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("IFEval", "GSM8K", "HumanEval", "MMLU"),
                                "GSM8K",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "What is the primary purpose of the IFEval benchmark?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To test how well a model follows specific formatting and constraint instructions", "To evaluate coding speed in Python", "To measure the model's emotional intelligence", "To check the model's knowledge of STEM subjects"),
                                "To test how well a model follows specific formatting and constraint instructions",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "Which hallucination detection technique involves checking for entailment between a retrieved context (premise) and a model output (hypothesis)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("N-gram Overlap", "Self-Consistency", "BLEU Score", "Natural Language Inference (NLI)"),
                                "Natural Language Inference (NLI)",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q4",
                                "In the context of LLM evaluation, what does 'Self-Consistency' measure?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Whether the model provides similar answers when sampled multiple times for the same query", "The size of the model's training dataset", "The model's ability to translate text", "The speed at which the model generates tokens"),
                                "Whether the model provides similar answers when sampled multiple times for the same query",
                                "obj_module_1")
                );
