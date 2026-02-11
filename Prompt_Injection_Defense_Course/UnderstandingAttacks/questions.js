test.AddQuestion( new Question ("com.scorm.prompt.injection.m1_q1",
                                "How does Indirect Prompt Injection differ from Direct Prompt Injection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Indirect injection involves the user typing the attack directly", "Indirect injection involves malicious instructions hidden in data that the LLM processes", "Indirect injection is only possible in creative writing tasks", "There is no difference between the two"),
                                "Indirect injection involves malicious instructions hidden in data that the LLM processes",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompt.injection.m1_q2",
                                "What is the primary goal of 'Jailbreaking' an LLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make the model respond faster", "To bypass internal safety guardrails and ethical guidelines", "To translate text into different languages", "To improve the model's performance on coding tasks"),
                                "To bypass internal safety guardrails and ethical guidelines",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompt.injection.m1_q3",
                                "Which of the following is a common jailbreaking technique?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Asking politely for information", "Using complex role-play personas like 'DAN'", "Providing a clear system prompt", "Limiting the context window"),
                                "Using complex role-play personas like 'DAN'",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompt.injection.m1_q4",
                                "Why is Indirect Prompt Injection particularly dangerous for RAG (Retrieval-Augmented Generation) systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RAG systems are immune to injection", "RAG systems automatically retrieve data from external sources, which may contain hidden attacks", "RAG systems only process user messages", "RAG systems don't use system prompts"),
                                "RAG systems automatically retrieve data from external sources, which may contain hidden attacks",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompt.injection.m1_q5",
                                "In the context of AI security, what does 'Payload Splitting' refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Splitting a large dataset into smaller files", "Breaking a malicious prompt into multiple benign parts to bypass filters", "Increasing the temperature of the model", "Dividing the context window between two models"),
                                "Breaking a malicious prompt into multiple benign parts to bypass filters",
                                "obj_module_1")
                );