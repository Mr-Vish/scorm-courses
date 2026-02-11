test.AddQuestion( new Question ("q1",
                                "What is a hallucination in the context of LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When the model processes images", "When the model generates plausible-sounding but incorrect information", "When the model refuses to answer", "When the model translates text"),
                                "When the model generates plausible-sounding but incorrect information",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("q2",
                                "What is the main limitation of knowledge cutoff in LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Models are too large", "Models lack real-time knowledge and are trained on data up to a specific date", "Models consume too much energy", "Models are too expensive"),
                                "Models lack real-time knowledge and are trained on data up to a specific date",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("q3",
                                "Which mitigation strategy helps address LLM hallucinations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increasing temperature to 2.0", "Using RAG to ground responses in verified documents", "Removing all examples from prompts", "Making prompts shorter"),
                                "Using RAG to ground responses in verified documents",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("q4",
                                "What is a key advantage of LLMs in terms of development speed?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They require extensive data labeling", "They enable 10-20x faster time to production compared to traditional ML pipelines", "They need months of training", "They require deep ML expertise"),
                                "They enable 10-20x faster time to production compared to traditional ML pipelines",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("q5",
                                "Why is explainability a challenge with LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too small", "They are 'black boxes' and it's difficult to understand why they produce specific outputs", "They only work with images", "They are too fast"),
                                "They are 'black boxes' and it's difficult to understand why they produce specific outputs",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("q6",
                                "What privacy concern is associated with using third-party LLM APIs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("APIs are too expensive", "Sensitive information is sent to external servers", "APIs are too slow", "APIs don't support multiple languages"),
                                "Sensitive information is sent to external servers",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("q7",
                                "According to the course, when should you consider alternatives to LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When you need natural language understanding", "When you need 100% accuracy or real-time performance is critical", "When you have limited training data", "When rapid prototyping is a priority"),
                                "When you need 100% accuracy or real-time performance is critical",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("q8",
                                "What is one way to address privacy concerns when using LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use higher temperature settings", "Use on-premise or private cloud deployments with open-source models", "Increase the context window", "Use more examples in prompts"),
                                "Use on-premise or private cloud deployments with open-source models",
                                "obj_module_4")
                );
