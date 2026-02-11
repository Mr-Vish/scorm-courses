// Module 2 Assessment - Governance and Red Teaming

test.AddQuestion( new Question ("com.scorm.responsible.ai.m2_q1",
                                "What is the primary role of an AI Governance Framework?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To speed up the deployment of AI products", "To establish the rules, roles, and processes for responsible AI development and use", "To replace all human engineers with AI systems", "To encrypt the model's weights"),
                                "To establish the rules, roles, and processes for responsible AI development and use",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.m2_q2",
                                "In AI Red Teaming, what does 'Jailbreaking' refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Optimizing a model for a specific hardware", "Finding prompts that bypass a model's safety filters to trigger prohibited behavior", "The process of deleting a model from a server", "Training a model on legal documentation"),
                                "Finding prompts that bypass a model's safety filters to trigger prohibited behavior",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.m2_q3",
                                "Which risk level in the EU AI Act requires the highest level of documentation, human oversight, and safety testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Unacceptable Risk", "High-Risk", "Limited Risk", "Minimal Risk"),
                                "High-Risk",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.m2_q4",
                                "What is the difference between 'Interpretability' and 'Explainability'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("There is no difference", "Interpretability is about understanding internal mechanics; Explainability is about external justifications for outputs", "Interpretability is for small models; Explainability is for large ones", "Interpretability is about training; Explainability is about deployment"),
                                "Interpretability is about understanding internal mechanics; Explainability is about external justifications for outputs",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.m2_q5",
                                "Which technique is used to explain a specific AI decision by perturbing the input and observing the change in output?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LIME", "Backpropagation", "Quantization", "Pruning"),
                                "LIME",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.m2_q6",
                                "Under the EU AI Act, what is required for 'Limited Risk' systems like chatbots?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are completely banned", "They must inform the user that they are interacting with an AI", "They must have PhD-level oversight at all times", "They must be open-sourced"),
                                "They must inform the user that they are interacting with an AI",
                                "obj_module_2")
                );