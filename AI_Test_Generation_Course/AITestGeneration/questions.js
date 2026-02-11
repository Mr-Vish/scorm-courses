test.AddQuestion( new Question ("q1",
                                "Which statement about Limitations is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cannot replace test design: LLMs generate individual tests well but miss system-level t...", "Best - understands patterns and conventions", "Provide context", "Specify which dependencies to mock"),
                                "Cannot replace test design: LLMs generate individual tests well but miss system-level t...",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What does Limitations involve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Existing test extension", "Run tests and verify assertions make sense", "First generation is rarely perfect", "Context window limits: Large codebases may not fit in a single prompt"),
                                "Context window limits: Large codebases may not fit in a single prompt",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which of the following best describes Limitations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Test generation: The LLM produces test code with assertions", "First generation is rarely perfect", "Provide context", "Hallucinated APIs: LLMs may call methods or use assertions that do not exist"),
                                "Hallucinated APIs: LLMs may call methods or use assertions that do not exist",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What is an important aspect of Limitations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("State pytest, Jest, JUnit, etc. explicitly", "Meaningful assertions: Tests should assert behavior, not just \"no exception thrown\"", "Flaky tests: Generated tests may have race conditions or timing dependencies", "Better for methods with state"),
                                "Flaky tests: Generated tests may have race conditions or timing dependencies",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is a key characteristic of How LLM Test Generation Works?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Code analysis: The LLM reads the function/class to understand its behavior", "Integration Test Generation", "Function-level prompting: Send one function at a time with its docstring", "Specify framework: Different projects use different test frameworks"),
                                "Code analysis: The LLM reads the function/class to understand its behavior",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What is the primary purpose of How LLM Test Generation Works?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Run them: Generated tests must actually pass against the current code", "Edge case identification: The LLM identifies boundary conditions, error cases, and typi...", "Ask the LLM to fix failures and add missing cases", "Different projects use different test frameworks"),
                                "Edge case identification: The LLM identifies boundary conditions, error cases, and typi...",
                                "obj_module_1")
                );