// Module 1 Assessment - Alignment Training Fundamentals

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.m1_q1",
                                "What is the primary role of the Reward Model (RM) in the RLHF pipeline?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To generate initial responses to prompts", "To act as a proxy for human preferences during PPO training", "To replace the SFT model entirely", "To perform unsupervised pre-training"),
                                "To act as a proxy for human preferences during PPO training",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.m1_q2",
                                "Which component of the PPO objective helps prevent the model from 'reward hacking' and staying close to the original assistant behavior?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Entropy bonus", "The KL Divergence penalty", "The Advantage estimate", "The Learning Rate scheduler"),
                                "The KL Divergence penalty",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.m1_q3",
                                "Why is Supervised Fine-Tuning (SFT) necessary before starting RLHF or DPO?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce the model's parameter count", "To teach the model the basic structure of following instructions and being an assistant", "To train the reward head", "To optimize the model's inference speed"),
                                "To teach the model the basic structure of following instructions and being an assistant",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.m1_q4",
                                "In Direct Preference Optimization (DPO), what is optimized directly?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A separate Reward Model", "The policy (language model) based on preference pairs", "The human annotator guidelines", "The pre-training corpus"),
                                "The policy (language model) based on preference pairs",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.m1_q5",
                                "Which of these is a major challenge of using PPO for alignment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is too simple and lacks depth", "It is highly stable and doesn't require tuning", "It is computationally expensive and can be unstable during training", "It does not require a reference model"),
                                "It is computationally expensive and can be unstable during training",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.m1_q6",
                                "What type of data is primarily used to train a Reward Model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Unlabeled internet text", "Single high-quality expert responses", "Pairwise preference rankings (Chosen vs Rejected)", "Code snippets with unit tests"),
                                "Pairwise preference rankings (Chosen vs Rejected)",
                                "obj_module_1")
                );