test.AddQuestion( new Question ("com.scorm.quantization.m1_q1",
                                "Which floating-point format is often preferred for training because it has the same exponent range as FP32?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FP16", "BF16", "INT8", "INT4"),
                                "BF16",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.quantization.m1_q2",
                                "What is the primary difference between PTQ and QAT?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PTQ is done during training, QAT is done after", "PTQ is done after training, QAT involves training or fine-tuning the model with quantization in mind", "PTQ only works for small models", "QAT does not require any training data"),
                                "PTQ is done after training, QAT involves training or fine-tuning the model with quantization in mind",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.quantization.m1_q3",
                                "Which quantization method identifies 'salient weights' by looking at model activations and 'protects' them during quantization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GPTQ", "AWQ", "SmoothQuant", "GGUF"),
                                "AWQ",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.quantization.m1_q4",
                                "Which file format is specifically designed for the llama.cpp ecosystem and optimized for CPUs and Macs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GPTQ", "GGUF", "AWQ", "SafeTensors"),
                                "GGUF",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.quantization.m1_q5",
                                "Why does 4-bit quantization often lead to faster inference even on hardware that isn't optimized for INT4 math?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces the number of tokens generated", "It significantly reduces the memory bandwidth bottleneck by requiring less data to be moved from VRAM", "It makes the model's logic simpler", "It removes the need for a tokenizer"),
                                "It significantly reduces the memory bandwidth bottleneck by requiring less data to be moved from VRAM",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.quantization.m1_q6",
                                "Which part of a transformer model is often considered 'sensitive' and might be kept in higher precision during mixed-precision quantization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Middle MLP layers", "The output head and embedding layers", "Bias terms only", "The model's metadata"),
                                "The output head and embedding layers",
                                "obj_module_1")
                );