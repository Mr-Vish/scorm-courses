test.AddQuestion( new Question ("q1",
                                "What is the primary mechanism behind role-play jailbreak techniques?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They exploit encryption vulnerabilities in the model", "They leverage the model's instruction-following capabilities by creating fictional contexts where safety constraints may be deprioritized", "They use brute force to overwhelm content filters", "They modify the model's training data in real-time"),
                                "They leverage the model's instruction-following capabilities by creating fictional contexts where safety constraints may be deprioritized",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2",
                                "What distinguishes indirect prompt injection from direct prompt injection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Indirect injection is less dangerous than direct injection", "Indirect injection embeds malicious instructions in external data sources that the AI processes, while direct injection provides instructions directly in user input", "Indirect injection only works on older AI models", "Indirect injection requires physical access to the system"),
                                "Indirect injection embeds malicious instructions in external data sources that the AI processes, while direct injection provides instructions directly in user input",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3",
                                "In multi-turn manipulation attacks, what is the primary strategy employed by attackers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sending multiple requests simultaneously to overwhelm the system", "Gradually guiding the conversation toward prohibited content through seemingly innocent interactions", "Using multiple user accounts to bypass rate limits", "Encrypting each message with different algorithms"),
                                "Gradually guiding the conversation toward prohibited content through seemingly innocent interactions",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4",
                                "What is a hallucination trigger in the context of AI red teaming?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A technique to make the model crash or become unavailable", "An input specifically designed to cause the model to generate confident but incorrect information", "A method to extract training data from the model", "A way to bypass authentication mechanisms"),
                                "An input specifically designed to cause the model to generate confident but incorrect information",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5",
                                "What is the primary goal of training data extraction attacks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve model performance by identifying training patterns", "To extract sensitive information that the model has memorized from its training data", "To reduce the model's computational requirements", "To update the model with new training examples"),
                                "To extract sensitive information that the model has memorized from its training data",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6",
                                "In membership inference attacks, what is the attacker attempting to determine?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Whether the model is currently online and accessible", "Whether specific data was included in the model's training set", "Whether the model has been updated recently", "Whether the model supports multiple languages"),
                                "Whether specific data was included in the model's training set",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7",
                                "What is demographic variation testing used to identify?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model's language capabilities across different regions", "Differential treatment or discriminatory outputs based on demographic attributes", "The model's performance speed with different user groups", "The model's ability to understand various dialects"),
                                "Differential treatment or discriminatory outputs based on demographic attributes",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8",
                                "What is the advantage of using LLM-as-Judge for automated evaluation of red team attacks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is always faster than classifier-based approaches", "It provides flexibility to handle nuanced cases and can evaluate complex policy violations", "It requires no computational resources", "It guarantees 100% accuracy in all evaluations"),
                                "It provides flexibility to handle nuanced cases and can evaluate complex policy violations",
                                "obj_module_2")
                );
