test.AddQuestion( new Question ("com.scorm.llm.interactions.params_1",
                                "For a JSON data extraction task that requires consistent, parseable output, which temperature value is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.0", "0.5", "0.9", "1.2"),
                                "0.0",
                                "obj_module_params")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.params_2",
                                "Which parameter combination is best suited for creative writing tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Temperature: 0.0, Frequency Penalty: 0.0", "Temperature: 0.3, Top-P: 0.2", "Temperature: 1.0, Frequency Penalty: 0.5, Presence Penalty: 0.3", "Temperature: 0.5, Max Tokens: 100"),
                                "Temperature: 1.0, Frequency Penalty: 0.5, Presence Penalty: 0.3",
                                "obj_module_params")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.params_3",
                                "For code generation tasks, what temperature range is recommended?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.0", "0.1 - 0.2", "0.7 - 0.9", "1.0 - 1.5"),
                                "0.1 - 0.2",
                                "obj_module_params")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.params_4",
                                "Your customer support chatbot responses sound too robotic and repetitive. Which parameter should you adjust?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Decrease Temperature", "Increase Frequency Penalty", "Decrease Max Tokens", "Increase Top-K"),
                                "Increase Frequency Penalty",
                                "obj_module_params")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.params_5",
                                "Which use case requires the highest temperature setting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Classification tasks", "Technical documentation", "Brainstorming and idea generation", "Data extraction"),
                                "Brainstorming and idea generation",
                                "obj_module_params")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.params_6",
                                "For text summarization tasks, which parameter combination is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Temperature: 0.0, Max Tokens: 2000", "Temperature: 0.3-0.5, Max Tokens: 150-400", "Temperature: 1.0, Frequency Penalty: 0.8", "Temperature: 0.7, Presence Penalty: 0.5"),
                                "Temperature: 0.3-0.5, Max Tokens: 150-400",
                                "obj_module_params")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.params_7",
                                "Your marketing copy generation is producing repetitive phrases. Which parameter should you increase?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Temperature", "Frequency Penalty", "Max Tokens", "Top-P"),
                                "Frequency Penalty",
                                "obj_module_params")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.params_8",
                                "What is the primary reason for setting Max Tokens appropriately for each use case?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve response quality", "To optimize cost and prevent unnecessarily long responses", "To increase processing speed", "To reduce hallucinations"),
                                "To optimize cost and prevent unnecessarily long responses",
                                "obj_module_params")
                );
