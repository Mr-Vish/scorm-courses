test.AddQuestion( new Question ("q1",
                                "How many experts are typically active for each token during a forward pass in Mixtral 8x7B?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1", "56", "8", "2"),
                                "2",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "What is the role of the 'Router' in a Mixture of Experts model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt the model weights", "To balance the power consumption", "To select the most relevant experts for each input token", "To connect the server to the internet"),
                                "To select the most relevant experts for each input token",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "What is a major advantage of MoE models over dense models of the same total parameter count?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They don't require embeddings", "Lower inference latency due to fewer active parameters per token", "Smaller disk footprint", "Easier to train on a single CPU"),
                                "Lower inference latency due to fewer active parameters per token",
                                "obj_module_1")
                );
