test.AddQuestion( new Question ("q1",
                                "What is the primary purpose of User Preference Collection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.3 vs 0.7 vs 1.0", "Top-3 vs top-5 chunks, different chunk sizes", "RAG configuration", "Thumbs up/down: Simplest signal - collect on every AI response"),
                                "Thumbs up/down: Simplest signal - collect on every AI response",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What is an important aspect of User Preference Collection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Operational", "Side-by-side comparison: Show two responses, ask user to pick the better one", "Did the user accomplish their goal?", "Backend instrumentation"),
                                "Side-by-side comparison: Show two responses, ask user to pick the better one",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "How is User Preference Collection best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use a different model family as judge", "Perceived speed, satisfaction", "Likert scale: Rate responses on a 1-5 scale for specific dimensions", "Position bias: Judge prefers the first response"),
                                "Likert scale: Rate responses on a 1-5 scale for specific dimensions",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "Which statement about User Preference Collection is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Implicit signals: Track if user copied, edited, or ignored the response", "Quality", "Task completion: Did the user accomplish their goal?", "Did the user accomplish their goal?"),
                                "Implicit signals: Track if user copied, edited, or ignored the response",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "Which of the following is true regarding User Preference Collection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Quality: LLM-as-judge score, ROUGE, human rating", "Follow-up surveys: Ask targeted questions about specific aspects of the AI output", "User behavior: Thumbs up/down, copy rate, edit rate", "Use a different model family as judge"),
                                "Follow-up surveys: Ask targeted questions about specific aspects of the AI output",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What is a key characteristic of Best Practices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("One variable at a time: Change only one thing (model, prompt, or config) per experiment", "Quality: LLM-as-judge score, ROUGE, human rating", "Watch for guardrail metrics: Ensure treatment does not degrade safety, cost, or latency...", "User satisfaction, task completion"),
                                "One variable at a time: Change only one thing (model, prompt, or config) per experiment",
                                "obj_module_1")
                );