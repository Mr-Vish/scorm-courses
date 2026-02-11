test.AddQuestion( new Question ("q1",
                                "What is the primary function of the self-attention mechanism in transformer architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To compress input data into smaller representations", "To weigh the importance of different words in context when processing each token", "To generate random variations in output", "To store the model's learned parameters"),
                                "To weigh the importance of different words in context when processing each token",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "A token in LLM processing is roughly equivalent to how much text?",
                                QUESTION_TYPE_CHOICE,
                                new Array("One character", "3/4 of a word or about 4 characters", "One complete sentence", "One paragraph"),
                                "3/4 of a word or about 4 characters",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which sampling parameter should you set to 0.0 for maximum determinism in factual tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Top-p", "Top-k", "Temperature", "Max tokens"),
                                "Temperature",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What is the main purpose of the pre-training stage in LLM development?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To align the model with human values", "To learn language patterns, facts, and reasoning from massive text corpora", "To make the model follow specific instructions", "To reduce the model's size for deployment"),
                                "To learn language patterns, facts, and reasoning from massive text corpora",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "According to the course, which approach should you start with for most LLM tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fine-tuning on custom data", "Pre-training from scratch", "Prompt engineering", "Building a multi-agent system"),
                                "Prompt engineering",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What is the purpose of Supervised Fine-Tuning (SFT) in LLM development?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To learn language from internet text", "To train on instruction-response pairs to make the model follow instructions", "To reduce computational costs", "To increase the context window size"),
                                "To train on instruction-response pairs to make the model follow instructions",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7",
                                "Which model family is described as having the longest context window of 1M tokens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Claude 3.5 Sonnet", "GPT-4 Turbo", "Gemini 1.5 Pro", "Llama 3"),
                                "Gemini 1.5 Pro",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8",
                                "In the autoregressive text generation process, when does the model stop generating tokens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("After exactly 100 tokens", "When reaching max tokens, generating a stop token, or completing the thought", "When the user manually stops it", "After processing all training data"),
                                "When reaching max tokens, generating a stop token, or completing the thought",
                                "obj_module_1")
                );
