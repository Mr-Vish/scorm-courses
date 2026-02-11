test.AddQuestion( new Question ("com.scorm.llm.interactions.knobs_1",
                                "Which parameter should you set to 0.0 to ensure completely deterministic output for JSON generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Top-P", "Frequency Penalty", "Temperature", "Presence Penalty"),
                                "Temperature",
                                "obj_module_knobs")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.knobs_2",
                                "What is the primary difference between Top-P and Top-K sampling?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Top-P uses a fixed number of tokens while Top-K uses cumulative probability", "Top-K uses a fixed number of tokens while Top-P uses cumulative probability", "Top-P is faster than Top-K", "Top-K is only available in OpenAI models"),
                                "Top-K uses a fixed number of tokens while Top-P uses cumulative probability",
                                "obj_module_knobs")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.knobs_3",
                                "A model keeps repeating the phrase 'it is important to note' throughout its response. Which parameter should you increase?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Temperature", "Top-P", "Frequency Penalty", "Max Tokens"),
                                "Frequency Penalty",
                                "obj_module_knobs")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.knobs_4",
                                "Your model keeps circling back to discuss the same concept from different angles instead of exploring new topics. Which parameter should you adjust?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Frequency Penalty", "Presence Penalty", "Temperature", "Top-K"),
                                "Presence Penalty",
                                "obj_module_knobs")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.knobs_5",
                                "What is the recommended approach when adjusting Temperature and Top-P parameters?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always adjust both together for best results", "Adjust one OR the other, not both simultaneously", "Always set both to maximum values", "Top-P should always be double the Temperature value"),
                                "Adjust one OR the other, not both simultaneously",
                                "obj_module_knobs")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.knobs_6",
                                "For creative writing tasks requiring diverse vocabulary and imaginative content, which Temperature range is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.0 - 0.3", "0.4 - 0.7", "0.8 - 1.0", "Temperature doesn't affect creativity"),
                                "0.8 - 1.0",
                                "obj_module_knobs")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.knobs_7",
                                "Approximately how many words does 500 tokens represent in English text?",
                                QUESTION_TYPE_CHOICE,
                                new Array("100 words", "250 words", "375 words", "750 words"),
                                "375 words",
                                "obj_module_knobs")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.knobs_8",
                                "Which combination of parameters would be most suitable for generating technical documentation that needs to be consistent and focused?",
                                QUESTION_TYPE_CHOICE,
                                new Array("High Temperature + High Presence Penalty", "Low Temperature + Low Penalties", "High Temperature + High Frequency Penalty", "Low Temperature + High Top-P"),
                                "Low Temperature + Low Penalties",
                                "obj_module_knobs")
                );
