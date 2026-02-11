test.AddQuestion( new Question ("q1",
                                "What distinguishes Why Context Management Matters from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cost: More input tokens = higher cost per request", "Claude 3.5 Sonnet", "Research shows LLMs are better at using information at the beginning and end of the con...", "Implement graceful degradation when approaching limits"),
                                "Cost: More input tokens = higher cost per request",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which of the following best describes Why Context Management Matters?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Periodically summarize old messages", "Conversation Management Strategies", "Gemini 1.5 Pro: 2M tokens", "Quality: Models can \"lose focus\" in very long contexts (lost-in-the-middle effect)"),
                                "Quality: Models can \"lose focus\" in very long contexts (lost-in-the-middle effect)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What does Why Context Management Matters involve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("~500 pages", "Compression", "Gemini 1.5 Pro: 2M tokens", "Latency: More tokens = slower time-to-first-token"),
                                "Latency: More tokens = slower time-to-first-token",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What is an important aspect of Why Context Management Matters?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Conversation history: Variable, manage dynamically", "Remove low-value content from history", "Limits: Even large windows have limits; conversations can exceed them", "Tiered Memory"),
                                "Limits: Even large windows have limits; conversations can exceed them",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is a key characteristic of The Lost-in-the-Middle Problem?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Mixed-priority content", "Place the most important context at the start or end", "Summarization: Periodically summarize old messages", "What is the Context Window?"),
                                "Place the most important context at the start or end",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "Which of the following is true regarding The Lost-in-the-Middle Problem?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use structured formatting (headings, XML tags) to help the model locate information", "GPT-4o: 128K tokens", "The context window is the maximum number of tokens an LLM can process in a single reque...", "2M tokens"),
                                "Use structured formatting (headings, XML tags) to help the model locate information",
                                "obj_module_1")
                );