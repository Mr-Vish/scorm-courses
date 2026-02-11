// Final Comprehensive Assessment - 25 Unique Questions
// Covers all modules: MoE Fundamentals, Mixtral Implementation, Production Deployment

// Module 1: MoE Fundamentals (8 questions)
test.AddQuestion( new Question ("com.mixtral.final.fund_1",
                                "What fundamental problem does Mixture-of-Experts architecture solve?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Reducing training time", "Enabling large model capacity with manageable computational cost through sparse activation", "Eliminating the need for GPUs", "Simplifying model architecture"),
                                "Enabling large model capacity with manageable computational cost through sparse activation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.fund_2",
                                "In an MoE architecture, what determines which experts process each token?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Random selection", "Round-robin distribution", "Router network based on input hidden state", "User configuration"),
                                "Router network based on input hidden state",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.fund_3",
                                "What is the purpose of the auxiliary loss function in MoE training?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve model accuracy", "To encourage balanced expert utilization and prevent router collapse", "To reduce training time", "To compress the model"),
                                "To encourage balanced expert utilization and prevent router collapse",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.fund_4",
                                "Expert specializations in MoE models are explicitly programmed during model design",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.fund_5",
                                "Which of the following is NOT a common type of expert specialization?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Domain-based (technical vs. creative content)", "Language-based (different languages)", "Hardware-based (GPU vs. CPU processing)", "Syntactic (sentence structure patterns)"),
                                "Hardware-based (GPU vs. CPU processing)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.fund_6",
                                "What happens during 'router collapse' in MoE training?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("The router network stops functioning", "The router sends most tokens to a small subset of experts", "All experts receive equal traffic", "The model fails to converge"),
                                "The router sends most tokens to a small subset of experts",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.fund_7",
                                "Compared to dense models, MoE models typically require more memory during training",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.fund_8",
                                "What is the primary trade-off when using Top-K=1 instead of Top-K=2 in expert selection?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Higher memory usage", "Lower computational cost but potentially reduced performance and robustness", "Slower inference", "More complex implementation"),
                                "Lower computational cost but potentially reduced performance and robustness",
                                "obj_final_assessment")
                );

// Module 2: Mixtral Implementation (8 questions)
test.AddQuestion( new Question ("com.mixtral.final.impl_1",
                                "What percentage of Mixtral 8x7B's parameters are in the expert networks?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("50%", "75%", "91%", "99%"),
                                "91%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.impl_2",
                                "How does Mixtral 8x7B achieve performance comparable to 70B dense models?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("By using faster GPUs", "By having 46.7B total parameters with only ~12.9B active per token", "By processing tokens in parallel", "By using a larger context window"),
                                "By having 46.7B total parameters with only ~12.9B active per token",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.impl_3",
                                "On which type of tasks does Mixtral show particularly strong performance?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Image generation", "Mathematical reasoning and code generation", "Audio processing", "Video analysis"),
                                "Mathematical reasoning and code generation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.impl_4",
                                "What is the context window length of Mixtral 8x7B?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("4,096 tokens", "8,192 tokens", "16,384 tokens", "32,768 tokens"),
                                "32,768 tokens",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.impl_5",
                                "Which inference framework is specifically designed for high-throughput LLM serving with PagedAttention?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("PyTorch", "TensorFlow", "vLLM", "Keras"),
                                "vLLM",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.impl_6",
                                "Approximately how much does INT8 quantization reduce memory requirements?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("No reduction", "2x reduction", "4x reduction", "8x reduction"),
                                "2x reduction",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.impl_7",
                                "Self-hosting Mixtral becomes more cost-effective than using GPT-3.5 API at approximately what monthly token volume?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("100,000 tokens", "1 million tokens", "2-5 million tokens", "100 million tokens"),
                                "2-5 million tokens",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.impl_8",
                                "Mixtral 8x7B uses the SwiGLU activation function in its expert networks",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

// Module 3: Production Deployment (9 questions)
test.AddQuestion( new Question ("com.mixtral.final.prod_1",
                                "What is the primary purpose of a load balancer in a Mixtral deployment?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce model size", "To distribute requests across multiple model instances", "To quantize the model", "To cache responses"),
                                "To distribute requests across multiple model instances",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.prod_2",
                                "Which deployment pattern provides the highest availability?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Single-instance deployment", "Replicated deployment with multiple instances", "Local deployment on laptop", "Batch processing only"),
                                "Replicated deployment with multiple instances",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.prod_3",
                                "What is continuous batching?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Processing one request at a time continuously", "Adding new requests to in-progress batches at each generation step", "Batching requests every hour", "A type of model compression"),
                                "Adding new requests to in-progress batches at each generation step",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.prod_4",
                                "What does PagedAttention optimize?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Model training speed", "KV cache memory management", "Network bandwidth", "Disk storage"),
                                "KV cache memory management",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.prod_5",
                                "Which metric is most important for interactive user-facing applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Total model size", "Time to first token (TTFT)", "Training time", "Number of parameters"),
                                "Time to first token (TTFT)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.prod_6",
                                "What should trigger an alert for high priority incident response?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("GPU utilization at 75%", "Error rate exceeding 5% for 5 minutes", "One expert handling 40% of requests", "Throughput 10% below baseline"),
                                "Error rate exceeding 5% for 5 minutes",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.prod_7",
                                "What is the recommended approach for deploying model updates?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Update all instances simultaneously", "Blue-green or canary deployment with gradual rollout", "Wait for scheduled maintenance window", "Deploy during peak traffic"),
                                "Blue-green or canary deployment with gradual rollout",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.prod_8",
                                "Auto-scaling should maintain GPU utilization between which range for optimal efficiency?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("10-30%", "40-60%", "75-90%", "95-100%"),
                                "75-90%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.mixtral.final.prod_9",
                                "Spot instances can provide 50-70% cost savings but come with availability risks",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );
