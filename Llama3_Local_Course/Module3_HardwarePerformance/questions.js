test.AddQuestion( new Question ("llama3_m3_q1",
                                "What is the primary factor that makes LLM inference 'memory-bandwidth bound'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("CPU clock speed", "The rate of transferring model parameters from memory to processing units", "Number of CPU cores", "Storage speed"),
                                "The rate of transferring model parameters from memory to processing units",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q2",
                                "For a Llama 3 8B model with Q4 quantization, what is the minimum recommended VRAM for full GPU inference?",
                                QUESTION_TYPE_CHOICE,
                                new Array("4 GB", "8 GB", "16 GB", "24 GB"),
                                "8 GB",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q3",
                                "GPU memory bandwidth is more important than compute capability for LLM inference performance.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q4",
                                "Which CPU feature significantly accelerates LLM inference through vector operations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hyper-Threading", "AVX2/AVX-512 SIMD instructions", "Turbo Boost", "Integrated Graphics"),
                                "AVX2/AVX-512 SIMD instructions",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q5",
                                "What is the typical performance improvement of GPU inference over CPU inference for an 8B model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("2-3x faster", "5-10x faster", "20-50x faster", "100x faster"),
                                "5-10x faster",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q6",
                                "Quantization from FP16 to Q4_K_M typically maintains 95-97% of the original model's quality.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q7",
                                "An organization needs to process 1000 documents overnight with no real-time requirements. Which optimization strategy is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Minimize latency with single-request processing", "Maximize throughput with large batch sizes", "Use the largest available model", "Prioritize response caching"),
                                "Maximize throughput with large batch sizes",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q8",
                                "What optimization technique stores attention key-value pairs to eliminate redundant computation during token generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Flash Attention", "KV Cache", "Speculative Decoding", "Dynamic Batching"),
                                "KV Cache",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q9",
                                "Doubling the context window size typically results in what impact on memory requirements?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No change", "2x increase", "4x increase", "8x increase"),
                                "4x increase",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q10",
                                "NVMe SSD storage significantly reduces model loading times compared to traditional hard drives.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q11",
                                "Which deployment strategy routes a small percentage of traffic to a new version before full rollout?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Blue-Green Deployment", "Canary Deployment", "Rolling Deployment", "A/B Testing"),
                                "Canary Deployment",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q12",
                                "What is the primary purpose of implementing rate limiting in production LLM deployments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improve model accuracy", "Prevent abuse and denial-of-service attacks", "Reduce hardware costs", "Increase inference speed"),
                                "Prevent abuse and denial-of-service attacks",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q13",
                                "Which monitoring metric is most critical for detecting performance degradation in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Total disk space", "P95 latency percentile", "Number of API keys", "Model file size"),
                                "P95 latency percentile",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q14",
                                "Local LLM deployment eliminates all security concerns because data never leaves the organization's infrastructure.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("llama3_m3_q15",
                                "A production system experiences GPU thermal throttling during peak usage. What is the most appropriate immediate action?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increase batch size", "Improve cooling and airflow", "Switch to CPU inference", "Reduce model size"),
                                "Improve cooling and airflow",
                                "obj_module_3")
                );
