test.AddQuestion( new Question ("q1",
                                "Which component of transformer architecture provides information about the position of tokens in a sequence?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Self-attention mechanism", "Feed-forward networks", "Positional encoding", "Multi-head attention"),
                                "Positional encoding",
                                "obj_final")
                );

test.AddQuestion( new Question ("q2",
                                "What is the approximate cost range for training a large language model like GPT-4?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$1,000 - $10,000", "$100,000 - $1 million", "$10 million - $100+ million", "$1 billion+"),
                                "$10 million - $100+ million",
                                "obj_final")
                );

test.AddQuestion( new Question ("q3",
                                "In RLHF (Reinforcement Learning from Human Feedback), what is the purpose of the reward model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To generate training data", "To learn to predict human preferences and score responses", "To compress the model size", "To translate between languages"),
                                "To learn to predict human preferences and score responses",
                                "obj_final")
                );

test.AddQuestion( new Question ("q4",
                                "Which LLM capability allows it to perform new tasks without additional training data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fine-tuning", "Zero-shot learning", "Pre-training", "Supervised learning"),
                                "Zero-shot learning",
                                "obj_final")
                );

test.AddQuestion( new Question ("q5",
                                "What is the 'lost in the middle' problem related to LLM context windows?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Models forget their training data", "Quality may degrade with very long contexts", "Models can't process short texts", "Models lose internet connectivity"),
                                "Quality may degrade with very long contexts",
                                "obj_final")
                );

test.AddQuestion( new Question ("q6",
                                "Which prompting principle involves specifying format, length, and style requirements?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Clarity", "Context", "Constraints", "Examples"),
                                "Constraints",
                                "obj_final")
                );

test.AddQuestion( new Question ("q7",
                                "What is the main advantage of open-source LLMs like Llama and Mistral?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are always more accurate", "They are self-hostable and customizable without API costs", "They have larger context windows", "They never hallucinate"),
                                "They are self-hostable and customizable without API costs",
                                "obj_final")
                );

test.AddQuestion( new Question ("q8",
                                "In a code generation application, what should you include to make LLM outputs more useful?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the code without any explanation", "Type hints, error handling, docstrings, and example usage", "Just variable names", "Only comments without code"),
                                "Type hints, error handling, docstrings, and example usage",
                                "obj_final")
                );

test.AddQuestion( new Question ("q9",
                                "What is the purpose of using delimiters in prompts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make prompts longer", "To separate different parts of the prompt clearly and prevent injection", "To increase creativity", "To reduce token count"),
                                "To separate different parts of the prompt clearly and prevent injection",
                                "obj_final")
                );

test.AddQuestion( new Question ("q10",
                                "Which evaluation metric compares LLM output to reference summaries by measuring overlap?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Temperature score", "ROUGE score", "Token count", "Context window"),
                                "ROUGE score",
                                "obj_final")
                );

test.AddQuestion( new Question ("q11",
                                "What is a key difference between RLHF and RLAIF?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RLHF uses human feedback, RLAIF uses AI feedback", "RLHF is faster than RLAIF", "RLHF is only for code generation", "There is no difference"),
                                "RLHF uses human feedback, RLAIF uses AI feedback",
                                "obj_final")
                );

test.AddQuestion( new Question ("q12",
                                "Why might you choose a smaller model like Mistral 7B over GPT-4 for certain applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Smaller models are always more accurate", "For resource-constrained environments or edge deployment", "Smaller models have larger context windows", "Smaller models never make mistakes"),
                                "For resource-constrained environments or edge deployment",
                                "obj_final")
                );
