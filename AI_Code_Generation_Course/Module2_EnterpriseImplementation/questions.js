test.AddQuestion( new Question ("ai_enterprise_impl_1",
                                "What is the recommended duration for an AI code generation pilot program?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1-2 weeks", "4-6 weeks", "3-4 months", "6-12 months"),
                                "4-6 weeks",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_2",
                                "Which tool category is best suited for organizations with strict data residency requirements?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("GitHub Copilot", "ChatGPT", "Tabnine with on-premise deployment", "Amazon CodeWhisperer"),
                                "Tabnine with on-premise deployment",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_3",
                                "All AI-generated code must undergo mandatory human review before merging",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_4",
                                "What is the recommended minimum code coverage threshold for AI-generated code?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("50%", "65%", "80%", "95%"),
                                "80%",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_5",
                                "Which integration pattern involves writing test cases first, then using AI to generate implementation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AI-Assisted Development", "Specification-Driven Generation", "Test-Driven AI Development", "Refactoring and Modernization"),
                                "Test-Driven AI Development",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_6",
                                "Anthropic Claude 3.5 Sonnet features a 200K token context window, making it suitable for large codebase analysis",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_7",
                                "What is the maximum recommended cyclomatic complexity per function for AI-generated code?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("5", "10", "15", "20"),
                                "10",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_8",
                                "Which quality assurance layer involves verifying code correctly implements requirements and checking for logical errors?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Automated Static Analysis", "Automated Testing", "Human Code Review", "Performance Testing"),
                                "Human Code Review",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_9",
                                "What is a key responsibility of the AI Code Generation Governance Committee?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Writing all AI-generated code", "Defining and updating AI code generation policies", "Replacing human developers", "Eliminating code reviews"),
                                "Defining and updating AI code generation policies",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_10",
                                "Organizations should use multiple AI tool vendors to avoid vendor lock-in",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_11",
                                "Which evaluation criterion is considered CRITICAL when selecting AI code generation tools?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Product roadmap", "Vendor marketing materials", "Data privacy and security", "Tool color scheme"),
                                "Data privacy and security",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_12",
                                "What is the recommended size for a pilot program team?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1-3 developers", "5-15 developers", "20-30 developers", "50+ developers"),
                                "5-15 developers",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_13",
                                "Which risk category has HIGH impact but LOW likelihood according to the risk assessment framework?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Quality risks", "Dependency risks", "Compliance risks", "Skills risks"),
                                "Compliance risks",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_14",
                                "AI-generated code can be automatically merged without human review if it passes all automated tests",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_15",
                                "What is the minimum maintainability index threshold for AI-generated code?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("45", "55", "65", "75"),
                                "65",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_16",
                                "Which training level is designed for AI tool champions and technical leads?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Level 1: Awareness and Basics (2 hours)", "Level 2: Effective Usage (4 hours)", "Level 3: Power User and Champion (8 hours)", "No training needed"),
                                "Level 3: Power User and Champion (8 hours)",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_17",
                                "What should be the maximum acceptable code duplication percentage?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("5%", "10%", "15%", "20%"),
                                "5%",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_18",
                                "SAST (Static Application Security Testing) tools should be used to scan AI-generated code for vulnerabilities",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_19",
                                "Which organizational readiness dimension assesses developer openness to AI assistance?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Technical Infrastructure", "Cultural Readiness", "Process Maturity", "Skill Levels"),
                                "Cultural Readiness",
                                "obj_module2_implementation")
                );

test.AddQuestion( new Question ("ai_enterprise_impl_20",
                                "What is the acceptable threshold for critical and high severity security vulnerabilities in AI-generated code?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("0 critical, 0 high", "1 critical, 2 high", "2 critical, 5 high", "Any number is acceptable"),
                                "0 critical, 0 high",
                                "obj_module2_implementation")
                );
