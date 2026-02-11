test.AddQuestion( new Question ("com.scorm.llm.interactions.protips_1",
                                "According to AI provider recommendations, what is the correct approach when adjusting Temperature and Top-P?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always adjust both together for best results", "Adjust one OR the other, not both simultaneously", "Adjust both but in opposite directions", "It doesn't matter, adjust freely"),
                                "Adjust one OR the other, not both simultaneously",
                                "obj_module_protips")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.protips_2",
                                "When using Spring AI's BeanOutputConverter for JSON generation, which temperature value is critical?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.0", "0.5", "0.7", "1.0"),
                                "0.0",
                                "obj_module_protips")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.protips_3",
                                "Your model keeps repeating the specific phrase 'it is important to note' throughout responses. Which parameter should you adjust?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Temperature", "Frequency Penalty", "Presence Penalty", "Max Tokens"),
                                "Frequency Penalty",
                                "obj_module_protips")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.protips_4",
                                "Your model keeps returning to discuss the same concept instead of exploring new topics. Which parameter should you adjust?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Temperature", "Frequency Penalty", "Presence Penalty", "Top-P"),
                                "Presence Penalty",
                                "obj_module_protips")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.protips_5",
                                "What is the primary benefit of implementing parameter logging in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes the application faster", "It allows tracking which parameters are effective and enables data-driven optimization", "It reduces API costs", "It prevents errors"),
                                "It allows tracking which parameters are effective and enables data-driven optimization",
                                "obj_module_protips")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.protips_6",
                                "Which caching strategy is most appropriate for requests with Temperature set to 0.0?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No caching needed", "Short-term caching (5 minutes)", "Long-term or indefinite caching", "Cache only on weekends"),
                                "Long-term or indefinite caching",
                                "obj_module_protips")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.protips_7",
                                "What is a key risk of over-tuning parameters on a small dataset?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improved generalization", "Overfitting that doesn't work well with diverse inputs", "Reduced costs", "Faster responses"),
                                "Overfitting that doesn't work well with diverse inputs",
                                "obj_module_protips")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.protips_8",
                                "When experiencing unexpectedly high API costs, which should be your first investigation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Temperature settings", "Max Tokens settings and request volume", "Top-P values", "Frequency Penalty"),
                                "Max Tokens settings and request volume",
                                "obj_module_protips")
                );
