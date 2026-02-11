test.AddQuestion( new Question ("hf_m1_q1",
                                "What is the primary purpose of Model Cards on the Hugging Face Hub?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase model download speed", "To provide comprehensive documentation including limitations and intended uses", "To encrypt model weights", "To enable model versioning"),
                                "To provide comprehensive documentation including limitations and intended uses",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("hf_m1_q2",
                                "Which component of the Hugging Face ecosystem provides hosted ML applications and demos?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model Hub", "Datasets Hub", "Spaces", "Inference API"),
                                "Spaces",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("hf_m1_q3",
                                "What parameter should you use to load a specific version of a model using Git commit hash?",
                                QUESTION_TYPE_CHOICE,
                                new Array("version", "revision", "commit", "tag"),
                                "revision",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("hf_m1_q4",
                                "Which tokenization algorithm is used by BERT and DistilBERT?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Byte-Pair Encoding (BPE)", "WordPiece", "SentencePiece", "Unigram"),
                                "WordPiece",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("hf_m1_q5",
                                "What does the attention mask indicate in tokenized inputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Which tokens are special tokens", "Which tokens to attend to (1) and which to ignore (0)", "The importance weight of each token", "The position of each token in the sequence"),
                                "Which tokens to attend to (1) and which to ignore (0)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("hf_m1_q6",
                                "What method should you use to format conversational messages with special tokens for chat models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("format_chat()", "apply_chat_template()", "encode_conversation()", "tokenize_chat()"),
                                "apply_chat_template()",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("hf_m1_q7",
                                "Fast tokenizers written in Rust provide offset mapping capabilities",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("hf_m1_q8",
                                "Which AutoModel class should you use for text generation tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AutoModel", "AutoModelForCausalLM", "AutoModelForSeq2SeqLM", "AutoModelForTextGeneration"),
                                "AutoModelForCausalLM",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("hf_m1_q9",
                                "What does device_map='auto' do when loading large models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Selects the fastest available device", "Automatically distributes model layers across available GPUs", "Enables automatic mixed precision", "Optimizes memory allocation"),
                                "Automatically distributes model layers across available GPUs",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("hf_m1_q10",
                                "Which data type provides the best balance between memory usage and numerical stability for training?",
                                QUESTION_TYPE_CHOICE,
                                new Array("float32", "float16", "bfloat16", "int8"),
                                "bfloat16",
                                "obj_module_1")
                );
