test.AddQuestion( new Question ("com.scorm.prompt.injection.m2_q1",
                                "What is the 'Principle of Least Privilege' in the context of LLM agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Giving the AI the most powerful API keys possible", "Giving the AI only the minimum permissions necessary to perform its specific task", "Allowing the AI to access all user data by default", "Allowing the AI to bypass all system filters"),
                                "Giving the AI only the minimum permissions necessary to perform its specific task",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.prompt.injection.m2_q2",
                                "What is a 'Guard Model' in an LLM security architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A model used to generate new attacks", "A second LLM used specifically to classify inputs or outputs as safe or unsafe", "A physical hardware device that protects the server", "A model that replaces the primary LLM"),
                                "A second LLM used specifically to classify inputs or outputs as safe or unsafe",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.prompt.injection.m2_q3",
                                "Why is output verification important if you already have input filtering?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It isn't; input filtering is sufficient", "It can catch successful attacks that bypassed the input filters", "It makes the model more creative", "It is required by law in most countries"),
                                "It can catch successful attacks that bypassed the input filters",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.prompt.injection.m2_q4",
                                "Which OWASP risk refers to an LLM having too much authority to perform real-world actions without oversight?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LLM01: Prompt Injection", "LLM06: Sensitive Information Disclosure", "LLM08: Excessive Agency", "LLM02: Insecure Output Handling"),
                                "LLM08: Excessive Agency",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.prompt.injection.m2_q5",
                                "In 'Red Teaming', what is the primary objective?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To ensure the model is as helpful as possible", "To proactively find and exploit vulnerabilities in a system to improve its security", "To train the model on new data", "To reduce the cost of API calls"),
                                "To proactively find and exploit vulnerabilities in a system to improve its security",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.prompt.injection.m2_q6",
                                "What is the 'Defense in Depth' approach to AI security?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using a single, very strong prompt", "Stacking multiple, independent layers of security controls", "Keeping the model's weights secret", "Only allowing trusted users to access the AI"),
                                "Stacking multiple, independent layers of security controls",
                                "obj_module_2")
                );