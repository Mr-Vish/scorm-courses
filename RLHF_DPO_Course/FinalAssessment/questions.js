// Final Comprehensive Assessment - RLHF and DPO
// Covers all expanded modules

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q1",
                                "What is the primary goal of the Supervised Fine-Tuning (SFT) stage in the RLHF pipeline?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To train a model to predict human preference scores", "To 'warm up' the base model using high-quality instruction-response pairs", "To maximize the reward signal from a frozen Reward Model", "To eliminate the need for human annotators"),
                                "To 'warm up' the base model using high-quality instruction-response pairs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q2",
                                "In Reward Modeling, which mathematical model is typically used to derive the ranking loss function?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Bradley-Terry Model", "Kahneman-Tversky Model", "Bellman Equation", "Gaussian Mixture Model"),
                                "Bradley-Terry Model",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q3",
                                "What is 'Reward Hacking' in the context of PPO training?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When a model generates extremely long responses to get higher scores", "When a model finds nonsensical patterns that result in high rewards without being truly helpful", "When a model refuses to answer safe questions due to over-alignment", "When a human labeler provides inconsistent rankings"),
                                "When a model finds nonsensical patterns that result in high rewards without being truly helpful",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q4",
                                "How does Direct Preference Optimization (DPO) simplify the alignment process compared to RLHF?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses human-in-the-loop during every training step", "It removes the need for an explicit Reward Model and PPO loop", "It replaces Supervised Fine-Tuning with unsupervised pre-training", "It requires only a single 'good' example per prompt"),
                                "It removes the need for an explicit Reward Model and PPO loop",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q5",
                                "Which alignment technique is specifically designed to use binary (Good/Bad) feedback instead of pairwise comparisons?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DPO", "ORPO", "KTO (Kahneman-Tversky Optimization)", "SimPO"),
                                "KTO (Kahneman-Tversky Optimization)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q6",
                                "In Constitutional AI, what happens during the 'Critique and Revision' stage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Human annotators critique the model's responses", "The model critiques and rewrites its own responses based on a set of principles", "The model is tested against public benchmarks like MMLU", "The model is penalized for deviating from the reference SFT model"),
                                "The model critiques and rewrites its own responses based on a set of principles",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q7",
                                "What does RLAIF stand for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reinforcement Learning from AI Feedback", "Randomized Linear Aligned Instruction Following", "Recursive Learning for AI Fairness", "Regulated Low-latency AI Framework"),
                                "Reinforcement Learning from AI Feedback",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q8",
                                "Which bias refers to an AI Judge favoring responses that are presented first in a comparison?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Length Bias", "Position Bias", "Self-Enhancement Bias", "Confirmation Bias"),
                                "Position Bias",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q9",
                                "The 'Alignment Tax' refers to which phenomenon?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The high cost of hiring human annotators", "The potential decrease in a model's general capabilities as it becomes more aligned", "The taxes paid by AI companies for using public data", "The computational cost of running PPO"),
                                "The potential decrease in a model's general capabilities as it becomes more aligned",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q10",
                                "What is the primary feature of the IFEval benchmark?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses crowdsourced human votes", "It measures objective, verifiable instruction following (e.g., word count constraints)", "It evaluates the model's ability to debate other AIs", "It focuses exclusively on coding and mathematics"),
                                "It measures objective, verifiable instruction following (e.g., word count constraints)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q11",
                                "What is 'Rejection Sampling' in the context of iterative alignment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Discarding all data that doesn't meet safety standards", "Generating multiple responses and selecting the best one to include in a new training set", "Refusing to answer prompts that are too difficult for the model", "Removing low-quality human annotators from the pipeline"),
                                "Generating multiple responses and selecting the best one to include in a new training set",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q12",
                                "In the DPO loss function, what is the role of the 'beta' parameter?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It controls the learning rate of the optimizer", "It controls the strength of the KL penalty (deviation from the reference model)", "It determines the number of training epochs", "It scales the final reward score of the judge"),
                                "It controls the strength of the KL penalty (deviation from the reference model)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q13",
                                "Which benchmark uses an Elo rating system based on blind human comparisons?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MMLU", "HumanEval", "LMSYS Chatbot Arena", "MT-Bench"),
                                "LMSYS Chatbot Arena",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q14",
                                "What is 'SimPO' (Simple Preference Optimization)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("An alignment method that requires no reference model in memory during training", "A method that uses only simulated data", "A tool for evaluating simple prompt injections", "A way to train Reward Models using fewer parameters"),
                                "An alignment method that requires no reference model in memory during training",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.rlhfdpo.final_q15",
                                "Why is the KL penalty important in PPO?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It speeds up the training process", "It ensures the model doesn't drift too far from its original linguistic capabilities", "It reduces the amount of VRAM required", "It allows the model to ignore noisy human labels"),
                                "It ensures the model doesn't drift too far from its original linguistic capabilities",
                                "obj_final_assessment")
                );