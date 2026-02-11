test.AddQuestion( new Question ("llama3_m2_q1",
                                "What is the primary design philosophy behind Ollama's architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Graphical user interface focus", "Container-inspired simplicity and accessibility", "Enterprise-scale deployment", "Mobile-first design"),
                                "Container-inspired simplicity and accessibility",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q2",
                                "Which port does Ollama's API server use by default?",
                                QUESTION_TYPE_CHOICE,
                                new Array("8080", "3000", "11434", "5000"),
                                "11434",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q3",
                                "Ollama's API is compatible with OpenAI's interface conventions, enabling drop-in replacement for cloud APIs.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q4",
                                "What model format does Ollama primarily use for storage and execution?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PyTorch (.pt)", "GGUF (GGML Universal Format)", "TensorFlow SavedModel", "ONNX"),
                                "GGUF (GGML Universal Format)",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q5",
                                "Which feature distinguishes LM Studio from Ollama?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Support for quantized models", "OpenAI-compatible API", "Graphical user interface with visual model management", "Ability to run Llama models"),
                                "Graphical user interface with visual model management",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q6",
                                "LM Studio's side-by-side model comparison feature allows users to submit identical prompts to multiple models simultaneously.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q7",
                                "A development team needs to integrate LLM capabilities into an automated CI/CD pipeline. Which platform is most suitable?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LM Studio for its GUI", "Ollama for its CLI and automation capabilities", "GPT4All for privacy", "Text Generation WebUI for features"),
                                "Ollama for its CLI and automation capabilities",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q8",
                                "What is the primary advantage of LM Studio's GPU offloading slider?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Automatic model updates", "Visual control over layer distribution between GPU and CPU", "Faster model downloads", "Reduced disk space usage"),
                                "Visual control over layer distribution between GPU and CPU",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q9",
                                "Which model family is specifically optimized for code generation and analysis tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Llama 3", "Mistral", "CodeLlama", "Gemma"),
                                "CodeLlama",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q10",
                                "The GGUF format enables model portability across different platforms like Ollama and LM Studio.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q11",
                                "An organization has a laptop with 16GB RAM and no dedicated GPU. Which model configuration is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Llama 3 70B Q8_0", "Llama 3 8B Q4_K_M", "CodeLlama 34B Q5_K_M", "Mixtral 8x7B Q4"),
                                "Llama 3 8B Q4_K_M",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q12",
                                "What is the key benefit of Ollama's automatic GPU detection feature?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces model download size", "Automatically utilizes available GPUs without manual configuration", "Enables model fine-tuning", "Provides cloud backup"),
                                "Automatically utilizes available GPUs without manual configuration",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q13",
                                "Which license type is most permissive for commercial use without restrictions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Llama 3 Community License", "Apache 2.0", "Gemma Terms of Use", "GPL v3"),
                                "Apache 2.0",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q14",
                                "LM Studio requires internet connectivity to function because it processes requests through cloud servers.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("llama3_m2_q15",
                                "A content creation team wants to evaluate multiple models visually before selecting one for production. Which platform best supports this workflow?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ollama with command-line testing", "LM Studio with side-by-side comparison", "llama.cpp for performance", "LocalAI for containers"),
                                "LM Studio with side-by-side comparison",
                                "obj_module_2")
                );
