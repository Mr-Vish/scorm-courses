// Final Comprehensive Assessment
// Covers all 3 modules with unique questions

test.AddQuestion( new Question ("q1",
                                "Which framework developed by MITRE provides a knowledge base of adversary tactics and techniques specific to machine learning systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("STRIDE", "ATLAS", "OWASP Top 10", "NIST Framework"),
                                "ATLAS",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q2",
                                "What type of attack involves determining whether specific data was included in a model's training set?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt injection attack", "Membership inference attack", "Jailbreak attack", "Denial of service attack"),
                                "Membership inference attack",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q3",
                                "In the red team methodology framework, which phase involves gathering information about the target system's architecture and capabilities?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Planning and scoping", "Reconnaissance", "Test case design", "Execution"),
                                "Reconnaissance",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q4",
                                "What is the primary risk associated with indirect prompt injection attacks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are slower than direct attacks", "Users are unaware of malicious content embedded in external data sources, and the AI may have elevated privileges", "They only work on small language models", "They require physical access to servers"),
                                "Users are unaware of malicious content embedded in external data sources, and the AI may have elevated privileges",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q5",
                                "Which defense mechanism involves using dedicated models trained specifically to evaluate the safety of inputs and outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Input filtering", "Guardrail models", "Rate limiting", "System prompt hardening"),
                                "Guardrail models",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q6",
                                "What is payload splitting in the context of jailbreak techniques?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Dividing computational load across multiple servers", "Breaking harmful requests into fragments that individually pass safety checks but combine to form prohibited content", "Separating user data from system data", "Distributing model weights across multiple locations"),
                                "Breaking harmful requests into fragments that individually pass safety checks but combine to form prohibited content",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q7",
                                "According to the OWASP Top 10 for LLM Applications, what is LLM08?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Injection", "Model Denial of Service", "Excessive Agency", "Training Data Poisoning"),
                                "Excessive Agency",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q8",
                                "What is the purpose of demographic variation testing in bias exploitation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To test model performance across different geographic regions", "To systematically vary demographic attributes in prompts to identify differential treatment or discriminatory outputs", "To measure model response time for different user groups", "To evaluate language translation capabilities"),
                                "To systematically vary demographic attributes in prompts to identify differential treatment or discriminatory outputs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q9",
                                "Which evaluation approach combines rules, classifiers, and LLM judges for optimal accuracy and efficiency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Binary scoring", "Hybrid evaluation", "Rule-based evaluation only", "Manual review only"),
                                "Hybrid evaluation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q10",
                                "What is the main challenge with using homoglyph attacks as adversarial inputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too easy to detect", "They use visually similar characters from different Unicode blocks that humans understand but may confuse models", "They require expensive hardware", "They only work on image-based models"),
                                "They use visually similar characters from different Unicode blocks that humans understand but may confuse models",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q11",
                                "In continuous red teaming programs, what is the primary purpose of production monitoring?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce server costs", "To conduct ongoing surveillance for attacks in live systems through anomaly detection and attack pattern recognition", "To improve model accuracy", "To train new models"),
                                "To conduct ongoing surveillance for attacks in live systems through anomaly detection and attack pattern recognition",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q12",
                                "What distinguishes AI red teaming from traditional software penetration testing in terms of failure modes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI systems only have security failures while traditional software has no failures", "AI systems exhibit harmful outputs, bias, hallucinations, and manipulation while traditional software has crashes and unauthorized access", "Traditional software is always more secure than AI systems", "There is no difference between the two approaches"),
                                "AI systems exhibit harmful outputs, bias, hallucinations, and manipulation while traditional software has crashes and unauthorized access",
                                "obj_final_assessment")
                );
