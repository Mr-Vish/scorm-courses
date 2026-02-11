// Final Assessment - Comprehensive questions covering all modules

// Module 1 Coverage
test.AddQuestion( new Question ("llama3_final_q1",
                                "What architectural component enables transformers to identify relationships between words across long sequences?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Feed-forward networks", "Embedding layers", "Self-attention mechanism", "Normalization layers"),
                                "Self-attention mechanism",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q2",
                                "Which deployment architecture is most suitable for an organization requiring centralized management with multi-user access while maintaining data sovereignty?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Single-user desktop deployment", "Local server deployment", "Cloud-based API", "Edge device deployment"),
                                "Local server deployment",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q3",
                                "The autoregressive generation process means each token depends on all previously generated tokens.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q4",
                                "What is the primary advantage of containerized LLM deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster inference speed", "Reduced model size", "Environment consistency across development and production", "Automatic model updates"),
                                "Environment consistency across development and production",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q5",
                                "A 13B parameter model with Q4 quantization requires approximately how much memory?",
                                QUESTION_TYPE_CHOICE,
                                new Array("4 GB", "7 GB", "13 GB", "26 GB"),
                                "7 GB",
                                "obj_final")
                );

// Module 2 Coverage
test.AddQuestion( new Question ("llama3_final_q6",
                                "Which platform feature makes Ollama particularly suitable for CI/CD pipeline integration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Graphical user interface", "Command-line interface and automation capabilities", "Built-in chat interface", "Model comparison tools"),
                                "Command-line interface and automation capabilities",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q7",
                                "LM Studio's primary advantage over Ollama is its visual interface for model exploration and comparison.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q8",
                                "Which model family is specifically designed for code-related tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Llama 3", "Mistral", "CodeLlama", "Phi-3"),
                                "CodeLlama",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q9",
                                "What is the significance of OpenAI-compatible APIs in local LLM platforms?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They increase inference speed", "They enable seamless switching between local and cloud deployments", "They reduce model size", "They improve model accuracy"),
                                "They enable seamless switching between local and cloud deployments",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q10",
                                "The GGUF format is specific to Ollama and cannot be used with other platforms.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final")
                );

// Module 3 Coverage
test.AddQuestion( new Question ("llama3_final_q11",
                                "Why is LLM inference considered memory-bandwidth bound rather than compute-bound?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Models require extensive mathematical calculations", "Performance is limited by data transfer speed from memory", "CPUs lack sufficient processing power", "GPUs cannot handle the workload"),
                                "Performance is limited by data transfer speed from memory",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q12",
                                "Which quantization level provides the best balance between quality and resource requirements for most deployments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Q2_K", "Q4_K_M", "Q8_0", "FP16"),
                                "Q4_K_M",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q13",
                                "Batch processing trades individual request latency for improved overall throughput.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q14",
                                "What is the primary security benefit of implementing API authentication in local LLM deployments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster inference", "Verification of client identity and access control", "Reduced memory usage", "Improved model accuracy"),
                                "Verification of client identity and access control",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q15",
                                "Which deployment strategy maintains two identical environments to enable instant rollback?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Canary deployment", "Blue-green deployment", "Rolling deployment", "Shadow deployment"),
                                "Blue-green deployment",
                                "obj_final")
                );

// Cross-Module Integration Questions
test.AddQuestion( new Question ("llama3_final_q16",
                                "An enterprise needs to deploy an LLM for processing sensitive healthcare data with HIPAA compliance. Which combination is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cloud API with encryption", "Local server with air-gapped infrastructure and audit logging", "Hybrid deployment with anonymization", "Public cloud with VPN"),
                                "Local server with air-gapped infrastructure and audit logging",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q17",
                                "A development team has a workstation with 32GB RAM and an RTX 3080 (10GB VRAM). They need good performance for interactive development. Which configuration is optimal?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Llama 3 70B Q4", "Llama 3 8B Q4 with full GPU offloading", "Llama 3 8B Q8 CPU-only", "CodeLlama 34B Q2"),
                                "Llama 3 8B Q4 with full GPU offloading",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q18",
                                "Increasing context window length from 2048 to 8192 tokens will quadruple memory requirements due to attention mechanism complexity.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q19",
                                "What is the primary reason GPU inference outperforms CPU inference for LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GPUs have more cores", "GPUs have significantly higher memory bandwidth", "GPUs use less power", "GPUs have larger cache"),
                                "GPUs have significantly higher memory bandwidth",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q20",
                                "Which monitoring metric is most critical for identifying when a production system needs capacity expansion?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Average CPU temperature", "Request queue depth and P95 latency", "Total number of models", "Disk space available"),
                                "Request queue depth and P95 latency",
                                "obj_final")
                );

// Advanced Scenario Questions
test.AddQuestion( new Question ("llama3_final_q21",
                                "A company processes 5 million tokens daily. Cloud API costs $0.002 per 1K tokens. Local deployment costs $15,000 upfront plus $200/month. What is the break-even point?",
                                QUESTION_TYPE_CHOICE,
                                new Array("3 months", "6 months", "12 months", "18 months"),
                                "6 months",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q22",
                                "For a system requiring sub-second response times with high request volume, which optimization is most critical?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Larger batch sizes", "GPU acceleration with KV caching", "CPU-only inference", "Increased context window"),
                                "GPU acceleration with KV caching",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q23",
                                "Local LLM deployment always costs less than cloud APIs for all use cases.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q24",
                                "Which factor is LEAST important when selecting a model for production deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("License compatibility with intended use", "Hardware compatibility and resource requirements", "Model developer's company size", "Task-specific performance benchmarks"),
                                "Model developer's company size",
                                "obj_final")
                );

test.AddQuestion( new Question ("llama3_final_q25",
                                "What is the primary purpose of implementing structured logging in production LLM deployments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduce storage costs", "Enable machine parsing and automated analysis", "Improve inference speed", "Decrease memory usage"),
                                "Enable machine parsing and automated analysis",
                                "obj_final")
                );
