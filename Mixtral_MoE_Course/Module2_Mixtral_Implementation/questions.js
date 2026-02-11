test.AddQuestion( new Question ("com.mixtral.module2.q1",
                                "How many total parameters does Mixtral 8x7B have?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("12.9 billion", "46.7 billion", "70 billion", "32 billion"),
                                "46.7 billion",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("com.mixtral.module2.q2",
                                "Approximately how many parameters are active per token in Mixtral 8x7B?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("46.7 billion", "7 billion", "12.9 billion", "32 billion"),
                                "12.9 billion",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("com.mixtral.module2.q3",
                                "What is Mixtral 8x7B's context window length?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("4,096 tokens", "8,192 tokens", "16,384 tokens", "32,768 tokens"),
                                "32,768 tokens",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("com.mixtral.module2.q4",
                                "On which benchmark does Mixtral show particularly strong performance compared to LLaMA 2 70B?",
                                QUESTION_TYPE_CHOICE,
                                new Array("General knowledge (MMLU)", "Mathematical reasoning (GSM8K)", "Reading comprehension", "Sentiment analysis"),
                                "Mathematical reasoning (GSM8K)",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("com.mixtral.module2.q5",
                                "Mixtral 8x7B achieves inference speeds comparable to which dense model size?",
                                QUESTION_TYPE_CHOICE,
                                new Array("7B parameters", "13B parameters", "30B parameters", "70B parameters"),
                                "13B parameters",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("com.mixtral.module2.q6",
                                "What is the primary benefit of INT8 quantization for Mixtral deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increases inference speed by 10x", "Reduces memory requirements by approximately 2x with minimal quality loss", "Eliminates the need for GPUs", "Improves model accuracy"),
                                "Reduces memory requirements by approximately 2x with minimal quality loss",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("com.mixtral.module2.q7",
                                "Which inference framework is specifically optimized for high-throughput serving with continuous batching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hugging Face Transformers", "vLLM", "PyTorch", "TensorFlow"),
                                "vLLM",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("com.mixtral.module2.q8",
                                "Compared to GPT-3.5 API, self-hosting Mixtral becomes cost-effective at approximately what monthly token volume?",
                                QUESTION_TYPE_CHOICE,
                                new Array("100K tokens", "500K tokens", "2-5 million tokens", "50 million tokens"),
                                "2-5 million tokens",
                                "obj_module2_implementation")
                );
