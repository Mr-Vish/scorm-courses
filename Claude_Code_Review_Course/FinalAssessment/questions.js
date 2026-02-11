test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q1",
                                "What is the primary difference between AI-powered code review and traditional static analysis tools?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AI is always faster", "AI understands code semantically while static analysis uses pattern matching", "AI never produces false positives", "AI can only analyze JavaScript"),
                                "AI understands code semantically while static analysis uses pattern matching",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q2",
                                "AI-powered code review should completely replace human code reviewers in all scenarios",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q3",
                                "Which analysis dimension focuses on system's ability to handle and recover from failures?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Maintainability", "Scalability", "Resilience", "Testability"),
                                "Resilience",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q4",
                                "What is the recommended action for Critical findings in AI review output?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore them", "Block merge and require resolution", "Create a ticket for later", "Mark as informational only"),
                                "Block merge and require resolution",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q5",
                                "The Repository Pattern helps separate data access logic from business logic",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q6",
                                "What does coupling analysis measure in architectural review?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Code formatting consistency", "Dependencies between components", "Number of lines of code", "Test coverage percentage"),
                                "Dependencies between components",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q7",
                                "Which refactoring safety principle ensures changes don't alter observable program behavior?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Incremental Changes", "Preserve Behavior", "Version Control", "Test Coverage"),
                                "Preserve Behavior",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q8",
                                "Cognitive complexity weights nested conditions more heavily than sequential conditions",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q9",
                                "What is the primary purpose of technical debt prioritization?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To eliminate all debt immediately", "To focus remediation efforts on highest-impact issues", "To avoid all refactoring", "To hide problems from management"),
                                "To focus remediation efforts on highest-impact issues",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q10",
                                "Which code smell indicates that a method is too long to understand easily?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Feature Envy", "Data Clumps", "Long Method", "Primitive Obsession"),
                                "Long Method",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q11",
                                "Pre-commit review integration provides feedback before code enters version control",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q12",
                                "What is a key advantage of parallel advisory review during initial AI adoption?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("It blocks all merges", "It provides low friction adoption while building confidence", "It eliminates all false positives", "It requires no configuration"),
                                "It provides low friction adoption while building confidence",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q13",
                                "Which metric combines multiple factors into a single score indicating overall code maintainability?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Cyclomatic Complexity", "Lines of Code", "Maintainability Index", "Test Coverage"),
                                "Maintainability Index",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q14",
                                "Automated remediation should require human approval for significant changes",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q15",
                                "What is the first phase in the change management framework for AI review adoption?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Gradual Rollout", "Pilot Implementation", "Awareness and Education", "Optimization and Maturity"),
                                "Awareness and Education",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q16",
                                "Which type of technical debt involves poor code quality, duplication, and complexity?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Design Debt", "Code Debt", "Test Debt", "Documentation Debt"),
                                "Code Debt",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q17",
                                "Data flow analysis can identify potential null pointer exceptions and information leakage",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q18",
                                "What is the recommended maintainability index score range for highly maintainable code?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("0-50", "50-65", "65-85", "85-100"),
                                "85-100",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q19",
                                "Which performance anti-pattern involves executing one query to fetch a list, then N additional queries for related data?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Premature Optimization", "N+1 Query Problem", "Memory Leak", "Synchronous Blocking"),
                                "N+1 Query Problem",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.final_q20",
                                "Successful long-term AI review adoption requires continuous improvement and vigilance against complacency",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
