// Final Comprehensive Assessment - 25 Unique Questions
// Covers all modules with scenario-based and application-focused questions

// Module 1: Hub, Pipeline, Tokenizers, Model Loading (8 questions)
test.AddQuestion( new Question ("hf_final_q1",
                                "You need to deploy a model that requires license acceptance. What must you do before loading it?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Pay for a license", "Accept the license on the model page and login with HF token", "Download the model manually", "Use a different model"),
                                "Accept the license on the model page and login with HF token",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q2",
                                "Which pipeline task would you use for classifying text without any training data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("text-classification", "zero-shot-classification", "token-classification", "text-generation"),
                                "zero-shot-classification",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q3",
                                "Your tokenized batch has sequences of different lengths. What parameter ensures all sequences have the same length?",
                                QUESTION_TYPE_CHOICE,
                                new Array("truncation", "padding", "max_length", "return_tensors"),
                                "padding",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q4",
                                "You want to process a document that exceeds the model's context window. What is the best approach?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Truncate the document", "Use a larger model", "Split into overlapping chunks", "Increase max_position_embeddings"),
                                "Split into overlapping chunks",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q5",
                                "Which parameter should you set to True when loading very large models to reduce RAM usage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("low_memory", "low_cpu_mem_usage", "reduce_memory", "optimize_memory"),
                                "low_cpu_mem_usage",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q6",
                                "What is the default cache location for Hugging Face models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("~/.huggingface/cache/", "~/.cache/huggingface/", "~/.transformers/cache/", "/tmp/huggingface/"),
                                "~/.cache/huggingface/",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q7",
                                "You need to add custom special tokens to a tokenizer. Which method should you use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("add_tokens()", "add_special_tokens()", "insert_tokens()", "register_tokens()"),
                                "add_special_tokens()",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q8",
                                "The Pipeline API automatically handles tokenization, inference, and post-processing",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

// Module 2: Optimization and Generation (9 questions)
test.AddQuestion( new Question ("hf_final_q9",
                                "You have a 70B parameter model and only 24GB GPU memory. Which technique enables loading it?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FP16 precision", "8-bit quantization", "4-bit quantization with device_map='auto'", "Gradient checkpointing"),
                                "4-bit quantization with device_map='auto'",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q10",
                                "Which quantization type is specifically designed for normal distribution of weights?",
                                QUESTION_TYPE_CHOICE,
                                new Array("int8", "int4", "nf4", "fp4"),
                                "nf4",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q11",
                                "What does bnb_4bit_use_double_quant=True enable in quantization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Double precision computation", "Nested quantization for extra memory savings", "Two-stage quantization", "Quantizing both weights and activations"),
                                "Nested quantization for extra memory savings",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q12",
                                "Your generated text contains repetitive phrases. Which two parameters should you adjust?",
                                QUESTION_TYPE_CHOICE,
                                new Array("temperature and top_p", "repetition_penalty and no_repeat_ngram_size", "max_new_tokens and min_new_tokens", "top_k and top_p"),
                                "repetition_penalty and no_repeat_ngram_size",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q13",
                                "You need creative, diverse outputs. What temperature value should you use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.1", "0.3", "0.9", "2.0"),
                                "0.9",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q14",
                                "Which generation method explores multiple paths simultaneously?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Greedy decoding", "Sampling", "Beam search", "Top-k sampling"),
                                "Beam search",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q15",
                                "Batched inference improves throughput but increases memory usage",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q16",
                                "What is the primary advantage of using torch.compile on a model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces model size", "Provides 1.5-3x speedup with no quality loss", "Enables quantization", "Improves accuracy"),
                                "Provides 1.5-3x speedup with no quality loss",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q17",
                                "Which parameter in top-p sampling controls the cumulative probability threshold?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The value of p (e.g., 0.9 for 90%)", "temperature", "top_k", "repetition_penalty"),
                                "The value of p (e.g., 0.9 for 90%)",
                                "obj_final_assessment")
                );

// Module 3: Fine-Tuning, Evaluation, Deployment (8 questions)
test.AddQuestion( new Question ("hf_final_q18",
                                "You want to fine-tune a 13B model on a single 16GB GPU. Which approach is most suitable?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Full fine-tuning", "LoRA", "QLoRA", "Prefix tuning"),
                                "QLoRA",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q19",
                                "What does the lora_alpha parameter control in LoRA configuration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Learning rate", "Scaling factor for LoRA updates", "Number of adapter layers", "Dropout rate"),
                                "Scaling factor for LoRA updates",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q20",
                                "Which training argument simulates larger batch sizes without increasing memory?",
                                QUESTION_TYPE_CHOICE,
                                new Array("per_device_train_batch_size", "gradient_accumulation_steps", "max_grad_norm", "warmup_steps"),
                                "gradient_accumulation_steps",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q21",
                                "BLEU score is most appropriate for evaluating which task?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sentiment analysis", "Translation", "Text generation", "Named entity recognition"),
                                "Translation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q22",
                                "You need maximum inference throughput for production. Which framework should you use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FastAPI", "Hugging Face Inference Endpoints", "vLLM", "ONNX Runtime"),
                                "vLLM",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q23",
                                "What is PagedAttention's primary benefit in vLLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster attention computation", "Efficient memory management for KV cache", "Better model accuracy", "Reduced latency"),
                                "Efficient memory management for KV cache",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q24",
                                "Which deployment option is best for cross-platform inference including mobile devices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("TGI", "vLLM", "ONNX Runtime", "TensorRT"),
                                "ONNX Runtime",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("hf_final_q25",
                                "Implementing a caching layer can significantly reduce inference costs for repeated queries",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );
