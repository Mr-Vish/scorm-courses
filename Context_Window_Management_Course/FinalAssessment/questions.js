// Final Comprehensive Assessment
// Covers all 1 modules


test.AddQuestion( new Question ("q1",
                                "In ContextManagement: Which statement about The Lost-in-the-Middle Problem is correct?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Repeat critical instructions at the end of long contexts", "Conversation Management Strategies", "Summarization", "Test with edge cases: very long messages, rapid back-and-forth"),
                                "Repeat critical instructions at the end of long contexts",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q2",
                                "From ContextManagement: How does The Lost-in-the-Middle Problem work?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always count tokens before sending requests", "~320 pages", "Break long contexts into focused, shorter requests when possible", "Llama 3.1 (405B)"),
                                "Break long contexts into focused, shorter requests when possible",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q3",
                                "Regarding ContextManagement: What is a key feature of Token Budgeting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tiered Memory: Recent (full) + Summary + Long-term facts", "128K tokens", "The context window is the maximum number of tokens an LLM can process in a single reque...", "System prompt: 500-2000 tokens (reserve first)"),
                                "System prompt: 500-2000 tokens (reserve first)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q4",
                                "In the context of ContextManagement: Which of the following describes Token Budgeting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Mixed-priority content", "Retrieved context (RAG): 2000-10000 tokens", "RAG on History", "Use structured formatting (headings, XML tags) to help the model locate information"),
                                "Retrieved context (RAG): 2000-10000 tokens",
                                "obj_final_assessment")
                );