// Module Assessment - SageMaker Fine-Tuning Fundamentals

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.m1_q1",
                                "Which SageMaker feature provides a hub for 'one-click' fine-tuning and deployment of popular foundation models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SageMaker Data Wrangler", "SageMaker JumpStart", "SageMaker Ground Truth", "SageMaker Feature Store"),
                                "SageMaker JumpStart",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.m1_q2",
                                "In PEFT techniques like LoRA, what portion of the model's parameters are typically updated during fine-tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("100%", "Approximately 50%", "Less than 1%", "0% (nothing is updated)"),
                                "Less than 1%",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.m1_q3",
                                "Which instance type is most recommended for cost-effective LoRA fine-tuning of 7B parameter models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ml.t3.medium", "ml.g5.2xlarge", "ml.p4d.24xlarge", "ml.m5.large"),
                                "ml.g5.2xlarge",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.m1_q4",
                                "What is the primary benefit of 'Fully Sharded Data Parallelism' (FSDP)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes models more creative", "It shards model parameters, gradients, and optimizer states across GPUs to save VRAM", "It removes the need for an internet connection", "It only works with CSV data"),
                                "It shards model parameters, gradients, and optimizer states across GPUs to save VRAM",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.m1_q5",
                                "How does SageMaker Model Monitor help in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By automatically writing new training data", "By detecting quality and bias drift in live endpoints", "By reducing the hourly cost of the instance", "By translating model outputs into different languages"),
                                "By detecting quality and bias drift in live endpoints",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.m1_q6",
                                "Which framework is often used for high-performance serving of LLMs on SageMaker?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Scikit-learn", "Deep Java Library (DJL) with DeepSpeed", "TensorFlow Lite", "Flask"),
                                "Deep Java Library (DJL) with DeepSpeed",
                                "obj_module_1")
                );