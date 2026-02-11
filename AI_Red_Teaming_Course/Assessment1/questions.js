test.AddQuestion( new Question ("q1",
                                "What is the primary distinction between AI red teaming and traditional penetration testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI red teaming focuses on code vulnerabilities while traditional testing focuses on model behavior", "AI red teaming addresses emergent behaviors and alignment failures while traditional testing targets technical infrastructure vulnerabilities", "AI red teaming is automated while traditional testing is manual", "AI red teaming only tests security while traditional testing covers all risk categories"),
                                "AI red teaming addresses emergent behaviors and alignment failures while traditional testing targets technical infrastructure vulnerabilities",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which of the following is NOT a primary threat category in the AI threat landscape?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Safety threats involving harmful content generation", "Security threats including prompt injection and data exfiltration", "Performance threats related to computational efficiency", "Fairness and bias threats leading to discriminatory outcomes"),
                                "Performance threats related to computational efficiency",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "In the context of AI red teaming, what does 'hallucination' refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A type of adversarial attack that causes system crashes", "Confident generation of factually incorrect or nonsensical information by the model", "A defense mechanism that prevents unauthorized access", "A training technique used to improve model robustness"),
                                "Confident generation of factually incorrect or nonsensical information by the model",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "According to the red team methodology framework, which phase involves developing adversarial prompts and attack scenarios?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reconnaissance phase", "Planning and scoping phase", "Test case design phase", "Analysis and scoring phase"),
                                "Test case design phase",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is the primary purpose of threat modeling in AI systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To train the model on adversarial examples", "To identify, quantify, and prioritize potential security threats systematically", "To improve model accuracy and performance", "To reduce computational costs during inference"),
                                "To identify, quantify, and prioritize potential security threats systematically",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "Which attack surface layer involves data poisoning and backdoor insertion?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Integration layer attack surface", "Inference phase attack surface", "Training phase attack surface", "API layer attack surface"),
                                "Training phase attack surface",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7",
                                "According to the OWASP Top 10 for LLM Applications, what is LLM01?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model Denial of Service", "Prompt Injection", "Training Data Poisoning", "Sensitive Information Disclosure"),
                                "Prompt Injection",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8",
                                "In risk assessment for AI systems, which factor is NOT typically considered when evaluating likelihood of exploitation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Attack complexity and required technical skill", "Model training time and computational cost", "Privileges required to execute the attack", "Availability of exploit tools and techniques"),
                                "Model training time and computational cost",
                                "obj_module_1")
                );
