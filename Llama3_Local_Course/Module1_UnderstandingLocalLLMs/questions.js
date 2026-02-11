test.AddQuestion( new Question ("llama3_m1_q1",
                                "What is the primary architectural innovation that enables Large Language Models to process sequential data effectively?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Convolutional Neural Networks", "Self-attention mechanism in transformers", "Recurrent Neural Networks", "Decision Trees"),
                                "Self-attention mechanism in transformers",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q2",
                                "A Llama 3 8B model with 4-bit quantization (Q4) requires approximately how much memory?",
                                QUESTION_TYPE_CHOICE,
                                new Array("2 GB", "4 GB", "8 GB", "16 GB"),
                                "4 GB",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q3",
                                "Quantization reduces model size by decreasing parameter precision while maintaining most of the model's performance.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q4",
                                "Which stage of the inference pipeline converts text into discrete units that the model can process mathematically?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Embedding", "Tokenization", "Attention Processing", "Generation"),
                                "Tokenization",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q5",
                                "What is the primary factor that makes LLM inference 'memory-bandwidth bound'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The speed of transferring model parameters from memory to processing units", "The size of the training dataset", "The number of users accessing the model", "The complexity of the prompts"),
                                "The speed of transferring model parameters from memory to processing units",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q6",
                                "Doubling the context window size quadruples the memory and computational requirements due to the quadratic complexity of attention mechanisms.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q7",
                                "An organization processes highly sensitive healthcare data and requires AI capabilities. Which deployment model best addresses their privacy requirements?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cloud-based API with encryption", "Local server deployment within their infrastructure", "Hybrid deployment with data anonymization", "Public cloud with VPN access"),
                                "Local server deployment within their infrastructure",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q8",
                                "What optimization technique stores intermediate attention computations to eliminate redundant calculations during token generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Flash Attention", "KV Cache", "Speculative Decoding", "Batch Processing"),
                                "KV Cache",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q9",
                                "Which quantization format provides the best balance between model quality and size for most deployment scenarios?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Q2_K", "Q4_K_M", "Q8_0", "FP16"),
                                "Q4_K_M",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q10",
                                "GPU inference typically offers 5-20x performance improvements over CPU inference primarily due to higher memory bandwidth.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q11",
                                "A development team needs to run a 7B parameter model on a workstation with 16GB RAM and no dedicated GPU. What is the most appropriate quantization level?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FP32 (full precision)", "Q8_0 (8-bit)", "Q4_K_M (4-bit)", "Q2_K (2-bit)"),
                                "Q4_K_M (4-bit)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q12",
                                "What is the primary advantage of implementing an OpenAI-compatible API for local LLM deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster inference speed", "Reduced memory usage", "Seamless migration between local and cloud deployments", "Automatic model updates"),
                                "Seamless migration between local and cloud deployments",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q13",
                                "In a containerized deployment, which benefit is most critical for ensuring consistency across development and production environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster startup times", "Identical runtime environment with packaged dependencies", "Reduced storage requirements", "Automatic scaling capabilities"),
                                "Identical runtime environment with packaged dependencies",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q14",
                                "Horizontal scaling of LLM deployments involves upgrading to more powerful hardware on existing servers.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("llama3_m1_q15",
                                "An enterprise application processes 10 million tokens daily. The cloud API costs $0.002 per 1000 tokens. What is the approximate monthly cost?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$200", "$600", "$1,200", "$2,400"),
                                "$600",
                                "obj_module_1")
                );
