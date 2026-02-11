test.AddQuestion( new Question ("com.scorm.qapps.module2.q1",
                                "When is the conversation-to-app creation method most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When building complex multi-step workflows with conditional logic", "When you've had a successful Q Business conversation that could be repeated with different parameters", "When you need precise control over every card configuration", "When the application requires plugin integrations"),
                                "When you've had a successful Q Business conversation that could be repeated with different parameters",
                                "obj_module2_building")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module2.q2",
                                "What is the primary advantage of the Progressive Information Refinement pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It eliminates the need for user inputs", "It starts with broad information gathering then progressively narrows focus based on initial results", "It processes all queries simultaneously", "It requires fewer cards than other patterns"),
                                "It starts with broad information gathering then progressively narrows focus based on initial results",
                                "obj_module2_building")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module2.q3",
                                "Effective prompt engineering requires being vague to allow AI flexibility in interpretation",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module2_building")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module2.q4",
                                "Which query optimization technique involves explicitly limiting where information is retrieved from?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Result Structuring", "Context Injection", "Scope Limitation", "Iterative Refinement"),
                                "Scope Limitation",
                                "obj_module2_building")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module2.q5",
                                "What is the recommended approach when a single query tries to accomplish too many tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increase the response length limit", "Break it into multiple focused queries using iterative refinement", "Add more input cards", "Use a plugin card instead"),
                                "Break it into multiple focused queries using iterative refinement",
                                "obj_module2_building")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module2.q6",
                                "Providing sensible default values for input fields helps minimize cognitive load for users",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_building")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module2.q7",
                                "Which user experience principle focuses on making results easy to scan and understand quickly?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Minimize Cognitive Load", "Provide Immediate Feedback", "Design for Scannability", "Enable Easy Action"),
                                "Design for Scannability",
                                "obj_module2_building")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module2.q8",
                                "When handling the edge case of 'No Results Found', what is the recommended strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Display a generic error message", "Automatically retry the query with different parameters", "Include instructions in the query to explain what was searched and suggest alternatives", "Terminate the application immediately"),
                                "Include instructions in the query to explain what was searched and suggest alternatives",
                                "obj_module2_building")
                );
