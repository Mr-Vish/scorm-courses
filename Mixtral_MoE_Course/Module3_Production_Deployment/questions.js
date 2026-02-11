test.AddQuestion( new Question ("com.mixtral.module3.q1",
                                "What is the primary advantage of a replicated deployment architecture over a single-instance deployment?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower cost", "Simpler configuration", "Higher availability and fault tolerance", "Faster inference speed"),
                                "Higher availability and fault tolerance",
                                "obj_module3_deployment")
                );

test.AddQuestion( new Question ("com.mixtral.module3.q2",
                                "Which GPU is recommended as the best option for production Mixtral deployment?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("V100 32GB", "A100 80GB", "RTX 3090", "T4"),
                                "A100 80GB",
                                "obj_module3_deployment")
                );

test.AddQuestion( new Question ("com.mixtral.module3.q3",
                                "What is PagedAttention?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("A technique for paginating model outputs", "An efficient KV cache management technique that treats cache like virtual memory", "A method for distributing experts across pages", "A user interface pagination system"),
                                "An efficient KV cache management technique that treats cache like virtual memory",
                                "obj_module3_deployment")
                );

test.AddQuestion( new Question ("com.mixtral.module3.q4",
                                "What is the primary benefit of continuous batching over static batching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Simpler implementation", "Lower memory usage", "Maximizes GPU utilization while minimizing latency", "Reduces model size"),
                                "Maximizes GPU utilization while minimizing latency",
                                "obj_module3_deployment")
                );

test.AddQuestion( new Question ("com.mixtral.module3.q5",
                                "Which optimization provides the best cost-performance trade-off with minimal quality loss?",
                                QUESTION_TYPE_CHOICE,
                                new Array("INT4 quantization", "INT8 quantization", "Expert offloading", "Reducing context window"),
                                "INT8 quantization",
                                "obj_module3_deployment")
                );

test.AddQuestion( new Question ("com.mixtral.module3.q6",
                                "What should trigger a scale-up decision in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GPU utilization consistently below 30%", "GPU utilization consistently above 80%", "Cost reduction opportunities", "Weekly maintenance schedule"),
                                "GPU utilization consistently above 80%",
                                "obj_module3_deployment")
                );

test.AddQuestion( new Question ("com.mixtral.module3.q7",
                                "Which metric is most critical for user experience in interactive applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Total throughput (tokens/second)", "GPU memory usage", "Time to first token (TTFT)", "Model size on disk"),
                                "Time to first token (TTFT)",
                                "obj_module3_deployment")
                );

test.AddQuestion( new Question ("com.mixtral.module3.q8",
                                "What is the recommended approach for deploying model updates in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Direct replacement of running model", "Blue-green or canary deployment with gradual rollout", "Scheduled downtime for updates", "Update all instances simultaneously"),
                                "Blue-green or canary deployment with gradual rollout",
                                "obj_module3_deployment")
                );
