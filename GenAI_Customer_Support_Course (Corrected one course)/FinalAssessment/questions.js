test.AddQuestion( new Question ("q1",
                                "What is the target for first contact resolution rate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 50%", "Greater than 60%", "Greater than 70%", "Greater than 80%"),
                                "Greater than 70%",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which escalation trigger is activated when sentiment analysis detects anger?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Low confidence", "Customer frustration", "Complex issue", "Sensitive topic"),
                                "Customer frustration",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What is the target escalation rate according to the metrics table?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 20%", "Less than 30%", "Less than 40%", "Less than 50%"),
                                "Less than 30%",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "Which feedback mechanism tracks whether users needed to contact support again?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Thumbs up/down", "Resolution tracking", "Agent review", "Analytics"),
                                "Resolution tracking",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is the target for average handle time?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 2 minutes", "Less than 3 minutes", "Less than 4 minutes", "Less than 5 minutes"),
                                "Less than 3 minutes",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What metadata should be included when setting up the knowledge base?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Author, word count, file size", "Product, version, last updated date", "Creation date, file type, language", "Category, priority, status"),
                                "Product, version, last updated date",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7",
                                "Which conversation flow stage involves collecting satisfaction ratings?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Resolution", "Confirmation", "Feedback", "Greeting"),
                                "Feedback",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8",
                                "What should be done with low-rated conversations for continuous improvement?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Delete them from the system", "Use them to identify knowledge gaps", "Archive them for compliance", "Send them to management"),
                                "Use them to identify knowledge gaps",
                                "obj_module_1")
                );