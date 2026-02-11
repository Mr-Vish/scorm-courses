test.AddQuestion( new Question ("com.scorm.qapps.module3.q1",
                                "How does the Q Apps security model ensure data access control?",
                                QUESTION_TYPE_CHOICE,
                                new Array("All users have access to all data sources", "Users can only access data through Q Apps that they could access directly in source systems", "Administrators manually configure access for each app", "Data access is unrestricted for published apps"),
                                "Users can only access data through Q Apps that they could access directly in source systems",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module3.q2",
                                "What type of search does Q Apps use to retrieve information from data sources?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Keyword matching only", "Semantic search that understands concepts and context", "Regular expression pattern matching", "Alphabetical sorting"),
                                "Semantic search that understands concepts and context",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module3.q3",
                                "Q Apps queries live source systems in real-time rather than using indexed data",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module3.q4",
                                "Which governance model allows all users to create personal apps but requires approval for organizational sharing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Open Model", "Controlled Model", "Hybrid Model", "Restricted Model"),
                                "Hybrid Model",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module3.q5",
                                "What is the recommended first phase in a Q Apps organizational rollout?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Immediate enterprise-wide deployment", "Pilot with 20-50 power users to validate and gather feedback", "Department-by-department sequential rollout", "Executive-only limited release"),
                                "Pilot with 20-50 power users to validate and gather feedback",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module3.q6",
                                "Featured apps in the Q Apps library are automatically selected based on usage metrics",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module3.q7",
                                "Which is NOT a recommended mitigation strategy for AI hallucination and accuracy risks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Implement review processes for high-stakes applications", "Train users to verify critical information", "Eliminate all citations to simplify outputs", "Use guardrails and validation rules"),
                                "Eliminate all citations to simplify outputs",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.scorm.qapps.module3.q8",
                                "What is a key advantage of Q Apps' data integration approach?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Requires custom integration development for each data source", "Inherits data source connections from Q Business without custom integration", "Only works with AWS native services", "Requires data duplication and synchronization"),
                                "Inherits data source connections from Q Business without custom integration",
                                "obj_module3_enterprise")
                );
