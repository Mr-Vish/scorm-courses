test.AddQuestion( new Question ("com.scorm.claude.interactions.m2_q1",
                                "Which refactoring pattern is used when a class has grown to handle multiple responsibilities?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Inline Class", "Extract Class", "Merge Modules", "Consolidate Duplicate Code"),
                                "Extract Class",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m2_q2",
                                "The Strategy Pattern is useful for eliminating complex conditional branches implementing different algorithms",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m2_q3",
                                "What does data flow analysis help detect in code?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Naming convention violations", "Uninitialized variables and information leakage", "Missing documentation", "Code formatting issues"),
                                "Uninitialized variables and information leakage",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m2_q4",
                                "Which quality attribute measures the degree to which system components are separated into distinct, independent units?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Scalability", "Modularity", "Resilience", "Testability"),
                                "Modularity",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m2_q5",
                                "Cyclomatic complexity measures the number of independent paths through code",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m2_q6",
                                "What is the recommended maximum cyclomatic complexity before refactoring is considered necessary?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("5", "10", "20", "50"),
                                "20",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m2_q7",
                                "Which type of technical debt involves outdated dependencies and deprecated APIs?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Code Debt", "Design Debt", "Technology Debt", "Documentation Debt"),
                                "Technology Debt",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m2_q8",
                                "The N+1 query problem can be solved by using joins or batch loading",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m2_q9",
                                "Which code smell indicates that a method is more interested in another class than its own?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Long Method", "Feature Envy", "Data Clumps", "Divergent Change"),
                                "Feature Envy",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m2_q10",
                                "What is the primary purpose of custom review rules in AI-powered code review?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To replace all human reviewers", "To enforce organization-specific standards and requirements", "To eliminate all false positives", "To speed up code compilation"),
                                "To enforce organization-specific standards and requirements",
                                "obj_module2")
                );
