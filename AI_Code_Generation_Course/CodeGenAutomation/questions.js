test.AddQuestion( new Question ("q1",
                                "What distinguishes Automated PR Enhancement from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Add missing tests: Detect untested code paths and generate tests", "Auto-generate PR description: Summarize changes and their purpose", "Suggest documentation: Generate JSDoc/docstrings for new public APIs", "Quality Gates"),
                                "Auto-generate PR description: Summarize changes and their purpose",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What does Automated PR Enhancement involve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Add missing tests: Detect untested code paths and generate tests", "Happy Path", "Pipeline Stages", "Property-Based: Invariants that must hold"),
                                "Add missing tests: Detect untested code paths and generate tests",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What is the primary purpose of Automated PR Enhancement?",
                                QUESTION_TYPE_CHOICE,
                                new Array("API endpoints, database ops", "Quality Gates", "Suggest documentation: Generate JSDoc/docstrings for new public APIs", "Automated PR Enhancement"),
                                "Suggest documentation: Generate JSDoc/docstrings for new public APIs",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What role does Automated PR Enhancement play in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Mandatory human review", "No vulnerabilities introduced", "Edge Cases", "Flag breaking changes: Identify API changes that affect consumers"),
                                "Flag breaking changes: Identify API changes that affect consumers",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "Which statement about Measuring AI Code Quality is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI code must have tests", "Review and Validation: AI reviews its own output for bugs and style", "First-pass acceptance rate: How often AI code passes review without changes", "API endpoints, database ops"),
                                "First-pass acceptance rate: How often AI code passes review without changes",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What is an important aspect of Measuring AI Code Quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Code Generation: Generate implementation code across multiple files", "Bug introduction rate: Bugs found in AI-generated code vs human code", "Integration", "Property-Based"),
                                "Bug introduction rate: Bugs found in AI-generated code vs human code",
                                "obj_module_1")
                );