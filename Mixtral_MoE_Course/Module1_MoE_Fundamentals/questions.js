test.AddQuestion( new Question ("com.mixtral.module1.q1",
                                "What is the primary advantage of Mixture-of-Experts architecture over traditional dense neural networks?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Simpler training process", "Sparse activation allows large capacity with manageable computation", "Requires less memory during inference", "Eliminates the need for attention mechanisms"),
                                "Sparse activation allows large capacity with manageable computation",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("com.mixtral.module1.q2",
                                "In an MoE layer with 8 experts where K=2, what percentage of expert parameters are active for any given token?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("12.5%", "25%", "50%", "75%"),
                                "25%",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("com.mixtral.module1.q3",
                                "What is the primary function of the router network in an MoE architecture?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt model parameters", "To select which experts should process each input token", "To balance GPU memory usage", "To compress the model for deployment"),
                                "To select which experts should process each input token",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("com.mixtral.module1.q4",
                                "Why is load balancing critical during MoE training?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce training time", "To prevent some experts from being underutilized while others are overloaded", "To ensure all GPUs have equal workload", "To minimize network communication"),
                                "To prevent some experts from being underutilized while others are overloaded",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("com.mixtral.module1.q5",
                                "What mechanism is commonly used to encourage balanced expert utilization during training?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Dropout regularization", "Auxiliary loss function that penalizes imbalanced routing", "Learning rate scheduling", "Batch normalization"),
                                "Auxiliary loss function that penalizes imbalanced routing",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("com.mixtral.module1.q6",
                                "Expert specializations in MoE models emerge naturally during training without explicit supervision",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("com.mixtral.module1.q7",
                                "Which of the following is an example of emergent expert specialization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("All experts learning identical representations", "One expert specializing in technical content while another handles creative writing", "Experts randomly processing tokens", "All experts being equally activated for all inputs"),
                                "One expert specializing in technical content while another handles creative writing",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("com.mixtral.module1.q8",
                                "What is 'router collapse' in MoE training?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When the router network fails to converge", "When the router sends most tokens to a small subset of experts", "When routing decisions become too slow", "When the router requires too much memory"),
                                "When the router sends most tokens to a small subset of experts",
                                "obj_module1_fundamentals")
                );
