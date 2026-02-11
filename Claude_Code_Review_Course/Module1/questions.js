test.AddQuestion( new Question ("com.scorm.claude.interactions.m1_q1",
                                "What is the primary advantage of AI-powered code review over traditional code review?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("It completely replaces human reviewers", "It provides consistent, comprehensive analysis that augments human capabilities", "It is always faster than human review", "It eliminates all false positives"),
                                "It provides consistent, comprehensive analysis that augments human capabilities",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m1_q2",
                                "Claude AI analyzes code semantically, understanding intent and context beyond simple pattern matching",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m1_q3",
                                "Which analysis dimension focuses on logic errors, edge cases, and algorithm implementation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Security", "Performance", "Correctness", "Maintainability"),
                                "Correctness",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m1_q4",
                                "What type of issues does Claude categorize as 'Critical' in its review output?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Readability improvements", "Security vulnerabilities with exploitation potential", "Missing documentation", "Style convention violations"),
                                "Security vulnerabilities with exploitation potential",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m1_q5",
                                "Pre-commit review integration provides feedback after code is merged to the main branch",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m1_q6",
                                "Which refactoring pattern is used to decompose complex methods into smaller, focused functions?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Rename Symbol", "Extract Method", "Inline Variable", "Replace Magic Numbers"),
                                "Extract Method",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m1_q7",
                                "What is a key limitation of AI-powered code review?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("It cannot analyze multiple files", "It may lack understanding of business requirements and organizational context", "It only works with JavaScript", "It cannot detect security vulnerabilities"),
                                "It may lack understanding of business requirements and organizational context",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m1_q8",
                                "Traditional static analysis tools understand code semantically just like AI-powered systems",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m1_q9",
                                "In the recommended workflow pattern, when should AI initial analysis occur?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("After human review is complete", "Before developer self-review", "After developer self-review but before human review request", "Only when critical issues are suspected"),
                                "After developer self-review but before human review request",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.scorm.claude.interactions.m1_q10",
                                "Which integration method has the highest implementation complexity?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("IDE Plugin", "Command-Line Tool", "CI/CD Pipeline", "Git Hooks"),
                                "CI/CD Pipeline",
                                "obj_module1")
                );
