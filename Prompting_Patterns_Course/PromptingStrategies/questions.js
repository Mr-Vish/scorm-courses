test.AddQuestion( new Question ("com.scorm.prompting.patterns.m1_q1",
                                "Which element of a Persona Pattern helps the most in setting the tone and style of the AI's response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model version", "The core identity and title (e.g., 'You are a senior data scientist')", "The length of the user's message", "The current date"),
                                "The core identity and title (e.g., 'You are a senior data scientist')",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.m1_q2",
                                "What is the primary purpose of the Template Pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make the AI more creative", "To ensure the AI's output follows a consistent and predictable structure", "To reduce the cost of the prompt", "To translate text into multiple languages"),
                                "To ensure the AI's output follows a consistent and predictable structure",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.m1_q3",
                                "How does the Tree of Thoughts (ToT) pattern differ from linear Chain of Thought (CoT)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ToT is only for creative writing", "ToT involves exploring and evaluating multiple potential reasoning paths instead of just one", "CoT is much more accurate for complex problems", "There is no difference between them"),
                                "ToT involves exploring and evaluating multiple potential reasoning paths instead of just one",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.m1_q4",
                                "In the Self-Reflection pattern, what happens during the 'Critique' phase?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The user writes a review of the model", "The model reviews its own previous output to find flaws or areas for improvement", "The model generates its final response", "The model calls an external tool"),
                                "The model reviews its own previous output to find flaws or areas for improvement",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.m1_q5",
                                "What does the 'Act' stage in the ReAct pattern represent?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model performing internal reasoning", "The model calling a tool or API to interact with the real world", "The model summarizing its thoughts", "The model providing the final answer to the user"),
                                "The model calling a tool or API to interact with the real world",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.m1_q6",
                                "Why is the Chain of Density (CoD) pattern used for summarization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make summaries as long as possible", "To create summaries that are increasingly packed with unique information while maintaining a fixed length", "To randomly delete words from a summary", "To translate a summary into multiple languages"),
                                "To create summaries that are increasingly packed with unique information while maintaining a fixed length",
                                "obj_module_1")
                );