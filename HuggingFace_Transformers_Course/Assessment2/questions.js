test.AddQuestion( new Question ("hf_m2_q1",
                                "Which quantization method provides 8x memory reduction with minimal quality loss?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FP16 quantization", "8-bit quantization", "4-bit NF4 quantization", "GPTQ quantization"),
                                "4-bit NF4 quantization",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("hf_m2_q2",
                                "What is the primary benefit of Flash Attention 2?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces model size", "Provides 2-3x speedup and 5-20x less memory for attention", "Improves model accuracy", "Enables distributed training"),
                                "Provides 2-3x speedup and 5-20x less memory for attention",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("hf_m2_q3",
                                "QLoRA combines which two techniques for maximum memory efficiency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LoRA and FP16", "LoRA and 4-bit quantization", "LoRA and Flash Attention", "LoRA and gradient checkpointing"),
                                "LoRA and 4-bit quantization",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("hf_m2_q4",
                                "What does gradient checkpointing trade for reduced memory usage during training?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model accuracy", "Compute time", "Batch size", "Learning rate"),
                                "Compute time",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("hf_m2_q5",
                                "Which compilation mode in torch.compile provides maximum performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("default", "reduce-overhead", "max-autotune", "fast"),
                                "reduce-overhead",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("hf_m2_q6",
                                "Speculative decoding uses a smaller draft model to speed up generation from a larger model",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("hf_m2_q7",
                                "What does the temperature parameter control in text generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximum output length", "Randomness of token selection", "Number of beams in beam search", "Repetition penalty strength"),
                                "Randomness of token selection",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("hf_m2_q8",
                                "Which sampling strategy considers tokens in the top probability mass?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Greedy decoding", "Top-k sampling", "Top-p (nucleus) sampling", "Beam search"),
                                "Top-p (nucleus) sampling",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("hf_m2_q9",
                                "What is the recommended temperature range for factual, deterministic outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.1-0.3", "0.5-0.7", "0.7-0.9", "1.0-1.5"),
                                "0.1-0.3",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("hf_m2_q10",
                                "Which parameter prevents exact n-gram repetition in generated text?",
                                QUESTION_TYPE_CHOICE,
                                new Array("repetition_penalty", "no_repeat_ngram_size", "diversity_penalty", "length_penalty"),
                                "no_repeat_ngram_size",
                                "obj_module_2")
                );
