test.AddQuestion( new Question ("hf_m3_q1",
                                "What percentage of parameters does LoRA typically update compared to full fine-tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50-60%", "20-30%", "1-10%", "Less than 1%"),
                                "1-10%",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("hf_m3_q2",
                                "Which parameter in LoraConfig determines the rank of the update matrices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("lora_alpha", "r", "rank", "lora_rank"),
                                "r",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("hf_m3_q3",
                                "What is the primary advantage of QLoRA over standard LoRA?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster training speed", "Better model quality", "Ability to fine-tune larger models on limited GPU memory", "Easier implementation"),
                                "Ability to fine-tune larger models on limited GPU memory",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("hf_m3_q4",
                                "Which metric measures how well a language model predicts text?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Accuracy", "Perplexity", "F1 Score", "BLEU"),
                                "Perplexity",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("hf_m3_q5",
                                "ROUGE scores are primarily used for evaluating which task?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Translation", "Summarization", "Question Answering", "Classification"),
                                "Summarization",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("hf_m3_q6",
                                "Lower perplexity indicates better language model performance",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("hf_m3_q7",
                                "Which deployment option provides managed service with automatic scaling?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FastAPI + Docker", "Hugging Face Inference Endpoints", "vLLM", "ONNX Runtime"),
                                "Hugging Face Inference Endpoints",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("hf_m3_q8",
                                "What is the key feature of continuous batching in production serving?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Processing all requests simultaneously", "Adding new requests to in-flight batches dynamically", "Batching requests by size", "Caching batch results"),
                                "Adding new requests to in-flight batches dynamically",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("hf_m3_q9",
                                "Which framework provides 10-20x higher throughput than naive implementations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FastAPI", "TGI", "vLLM", "ONNX Runtime"),
                                "vLLM",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("hf_m3_q10",
                                "What is the primary benefit of exporting models to ONNX format?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Larger model size", "Cross-platform deployment and optimized inference", "Easier training", "Better accuracy"),
                                "Cross-platform deployment and optimized inference",
                                "obj_module_3")
                );
