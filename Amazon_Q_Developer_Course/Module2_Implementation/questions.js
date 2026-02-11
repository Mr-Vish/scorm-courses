test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q1",
                                "What is the approximate context window size that Amazon Q Developer analyzes when generating code completion suggestions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1,000 characters", "5,000 characters", "10,000 characters", "50,000 characters"),
                                "10,000 characters",
                                "obj_module2_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q2",
                                "Which of the following is the MOST effective comment for generating quality code suggestions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("// validate input", "// do validation", "// validate email format and check domain exists via DNS lookup", "// check if valid"),
                                "// validate email format and check domain exists via DNS lookup",
                                "obj_module2_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q3",
                                "Amazon Q Developer's chat interface maintains conversation context across multiple turns within a session",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q4",
                                "What is the recommended approach when Amazon Q provides a code suggestion that is close but not exactly what you need?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reject it and write the code manually", "Accept it and immediately edit to adjust details", "Request a completely different suggestion", "Disable code completion"),
                                "Accept it and immediately edit to adjust details",
                                "obj_module2_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q5",
                                "Which type of information should NEVER be included in Amazon Q chat messages?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Error messages from your application", "Code snippets from your project", "API keys and credentials", "Questions about AWS services"),
                                "API keys and credentials",
                                "obj_module2_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q6",
                                "What security analysis technique does Amazon Q use to track how untrusted input moves through an application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Pattern matching", "Taint analysis", "Entropy analysis", "Semantic parsing"),
                                "Taint analysis",
                                "obj_module2_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q7",
                                "SQL injection vulnerabilities can be prevented by using parameterized queries instead of string concatenation",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q8",
                                "Which cryptographic hashing algorithm is considered secure for modern applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MD5", "SHA-1", "SHA-256", "DES"),
                                "SHA-256",
                                "obj_module2_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q9",
                                "What is the primary purpose of Amazon Q's reference tracking feature when generating code?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To track developer productivity", "To identify code similarity with public repositories and provide license information", "To monitor code execution performance", "To analyze code complexity"),
                                "To identify code similarity with public repositories and provide license information",
                                "obj_module2_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q10",
                                "Security findings with Critical severity should be fixed immediately before deployment",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q11",
                                "Which of the following is NOT a recommended practice for effective use of Amazon Q chat?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Providing specific context and requirements", "Including relevant code snippets", "Copying all suggestions without review", "Using iterative refinement through follow-up questions"),
                                "Copying all suggestions without review",
                                "obj_module2_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.amazonq.interactions.mod2_q12",
                                "What method does Amazon Q use to detect hardcoded secrets in code?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only pattern matching", "Only variable name analysis", "Entropy analysis, pattern matching, and variable name analysis", "Manual code review"),
                                "Entropy analysis, pattern matching, and variable name analysis",
                                "obj_module2_implementation")
                );
