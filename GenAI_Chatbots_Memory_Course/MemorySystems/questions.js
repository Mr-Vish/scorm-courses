test.AddQuestion( new Question ("q1",
                                "What is an important aspect of Dynamic Personalization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Extracted and stored entity information", "Token budget allocation: Reserve tokens for system prompt, memory, current turn, and re...", "Long-term memory: Cross-conversation", "Extract facts: After each conversation, extract new user facts using an LLM"),
                                "Extract facts: After each conversation, extract new user facts using an LLM",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which of the following is true regarding Dynamic Personalization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Buffer memory", "Update preferences: Track implicit preferences from user behavior", "Deletion: Provide \"forget me\" functionality", "Encrypt stored profiles, restrict access"),
                                "Update preferences: Track implicit preferences from user behavior",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "How is Dynamic Personalization best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Buffer memory: Current conversation", "Update preferences: Track implicit preferences from user behavior", "Inject context: Include relevant user facts in the system prompt", "LLM-generated summaries of older turns"),
                                "Inject context: Include relevant user facts in the system prompt",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What distinguishes Dynamic Personalization from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encrypt stored profiles, restrict access", "User Profile Schema", "Entity memory: Key facts about entities", "Adapt tone: Adjust formality and detail level based on user profile"),
                                "Adapt tone: Adjust formality and detail level based on user profile",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "Which statement about Context Window Management is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Token budget allocation: Reserve tokens for system prompt, memory, current turn, and re...", "Let users view and edit their stored profile", "Memory Categories", "Buffer memory"),
                                "Token budget allocation: Reserve tokens for system prompt, memory, current turn, and re...",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What role does Context Window Management play in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Current conversation", "Priority ordering: System prompt > recent messages > summarized history > long-term memory", "Memory Categories", "Cross-conversation"),
                                "Priority ordering: System prompt > recent messages > summarized history > long-term memory",
                                "obj_module_1")
                );