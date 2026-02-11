// Final Assessment - Model Quantization

test.AddQuestion( new Question ("com.scorm.quantization.final_q1",
                                "How much VRAM is required to load a 70B parameter model in FP16 precision?",
                                QUESTION_TYPE_CHOICE,
                                new Array("35 GB", "70 GB", "140 GB", "280 GB"),
                                "140 GB",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q2",
                                "What is the memory savings ratio when moving from FP16 to 4-bit quantization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("2x", "4x", "8x", "16x"),
                                "4x",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q3",
                                "Which format uses 'Brain Floating Point' to provide a larger exponent range than FP16?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FP32", "BF16", "INT8", "GGUF"),
                                "BF16",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q4",
                                "In quantization, what is a 'Scaling Factor' used for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase the model's parameter count", "To map high-precision floating-point values to a lower-precision integer range", "To speed up the tokenizer", "To reduce the cost of API calls"),
                                "To map high-precision floating-point values to a lower-precision integer range",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q5",
                                "Which Post-Training Quantization (PTQ) method is known for its layer-by-layer optimization using Hessian information?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AWQ", "GPTQ", "GGUF", "SmoothQuant"),
                                "GPTQ",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q6",
                                "What is the key advantage of QLoRA over traditional fine-tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It requires no training data", "It allows high-quality fine-tuning on a single GPU by using a 4-bit quantized base model", "It is faster than FP16 fine-tuning", "It increases the number of model parameters"),
                                "It allows high-quality fine-tuning on a single GPU by using a 4-bit quantized base model",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q7",
                                "Which GGUF K-Quant is generally considered the best balance of size and quality for most users?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Q2_K", "Q4_K_M", "Q8_0", "Q6_K"),
                                "Q4_K_M",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q8",
                                "What specialized hardware unit in NVIDIA GPUs is designed to accelerate INT8 and INT4 matrix math?",
                                QUESTION_TYPE_CHOICE,
                                new Array("CUDA Core", "Tensor Core", "RT Core", "Streaming Multiprocessor"),
                                "Tensor Core",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q9",
                                "What is the purpose of 'Calibration' in the quantization process?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To train the model from scratch", "To determine the optimal scaling factors based on the typical distribution of activations", "To remove biases from the model", "To encrypt the model weights"),
                                "To determine the optimal scaling factors based on the typical distribution of activations",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q10",
                                "Which of the following is a common pitfall when using quantized models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using a model that is too large", "Using the wrong tokenizer or model configuration", "Using a GPU that is too fast", "Running the model on too many different languages"),
                                "Using the wrong tokenizer or model configuration",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q11",
                                "What is 'Mixed-Precision Quantization'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using both English and French in the same model", "Quantizing different layers of the model to different bit-widths (e.g., some 8-bit, some 4-bit)", "Mixing GPTQ and AWQ in the same file", "Running the model on both CPU and GPU"),
                                "Quantizing different layers of the model to different bit-widths (e.g., some 8-bit, some 4-bit)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q12",
                                "Why are multimodal models more challenging to quantize than text-only models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They have fewer parameters", "They have heterogeneous architectures where different components (like vision and text) have different sensitivities", "They only work on 16-bit hardware", "They don't use transformers"),
                                "They have heterogeneous architectures where different components (like vision and text) have different sensitivities",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q13",
                                "The BitNet b1.58 paper introduced weights that are limited to which three values?",
                                QUESTION_TYPE_CHOICE,
                                new Array("{0, 1, 2}", "{-1, 0, 1}", "{0.5, 1.0, 1.5}", "{-2, -1, 0}"),
                                "{-1, 0, 1}",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q14",
                                "What is the theoretical benefit of 'Ternary' (1.58-bit) quantization for hardware?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It increases the need for high-speed RAM", "It allows replacing expensive multiplications with simple additions and subtractions", "It makes models larger and more complex", "It requires 64-bit processors"),
                                "It allows replacing expensive multiplications with simple additions and subtractions",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.quantization.final_q15",
                                "When quantizing small models (under 7B), what is a recommended best practice?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Quantize them as aggressively as possible (e.g., 2-bit)", "Stay at higher bit-widths (like 6-bit or 8-bit) because small models are more sensitive to precision loss", "Never quantize small models", "Use only PTQ without any calibration data"),
                                "Stay at higher bit-widths (like 6-bit or 8-bit) because small models are more sensitive to precision loss",
                                "obj_final_assessment")
                );