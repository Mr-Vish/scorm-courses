test.AddQuestion( new Question ("q1",
                                "What is a key characteristic of Best Practices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Full control via prompt instructions", "LLM rates naturalness on a 1-5 scale", "Use glossaries: Maintain per-language glossaries for consistent terminology", "Speed: Very fast (&lt;100ms)"),
                                "Use glossaries: Maintain per-language glossaries for consistent terminology",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What role does Best Practices play in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Batch by context: Translate related strings together so the LLM maintains consistency", "Limited (formal/informal toggle)", "Sentence-level", "LLM vs Traditional Machine Translation"),
                                "Batch by context: Translate related strings together so the LLM maintains consistency",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which of the following best describes Best Practices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Human review for critical content: Legal, medical, and marketing content should always ...", "Context understanding: Sentence-level", "Full control via prompt instructions", "Currency/units: USD vs EUR, miles vs kilometers"),
                                "Human review for critical content: Legal, medical, and marketing content should always ...",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What distinguishes Best Practices from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Speed: Very fast (&lt;100ms)", "Excellent to superior", "Placeholder preservation: Must not translate variables like {user_name} or HTML tags", "A/B test translations: Test different translation styles with real users in each market"),
                                "A/B test translations: Test different translation styles with real users in each market",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "How is Best Practices best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Flag culturally sensitive color choices", "Continuous feedback: Collect user feedback on translations and feed corrections back in...", "Style control", "Flag translations exceeding UI character limits"),
                                "Continuous feedback: Collect user feedback on translations and feed corrections back in...",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What is an important aspect of Key Challenges?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A/B test translations: Test different translation styles with real users in each market", "Human + LLM-assisted", "Consistency: LLMs may translate the same term differently across calls - use glossaries...", "Back-Translation Quality Check"),
                                "Consistency: LLMs may translate the same term differently across calls - use glossaries...",
                                "obj_module_1")
                );