test.AddQuestion( new Question ("com.scorm.claude_agent.module3_q1",
                                "What is the primary purpose of iteration limits in agent guardrails?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To save money", "To prevent infinite loops by capping agent turns", "To improve performance", "To reduce errors"),
                                "To prevent infinite loops by capping agent turns",
                                "obj_production_systems")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module3_q2",
                                "Tool allowlists restrict which tools agents can use for security and safety",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_production_systems")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module3_q3",
                                "What is exponential backoff in retry logic?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Retrying immediately", "Increasing wait time between retries exponentially", "Decreasing wait time", "Retrying indefinitely"),
                                "Increasing wait time between retries exponentially",
                                "obj_production_systems")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module3_q4",
                                "Which error handling strategy provides reduced functionality when systems fail?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Retry logic", "Graceful degradation", "Circuit breaker", "Logging"),
                                "Graceful degradation",
                                "obj_production_systems")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module3_q5",
                                "Circuit breakers stop accepting requests when error rates exceed a threshold",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_production_systems")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module3_q6",
                                "What is the purpose of a canary deployment?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploy to all users at once", "Deploy new version to small subset of users first", "Skip testing", "Reduce costs"),
                                "Deploy new version to small subset of users first",
                                "obj_production_systems")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module3_q7",
                                "Which metric measures the percentage of tasks completed successfully?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Response time", "Success rate", "Token usage", "Error count"),
                                "Success rate",
                                "obj_production_systems")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module3_q8",
                                "Audit logging records all agent actions for security review and debugging",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_production_systems")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module3_q9",
                                "What should agents do when uncertain about action safety?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Execute anyway", "Default deny and request human review", "Ignore the request", "Retry multiple times"),
                                "Default deny and request human review",
                                "obj_production_systems")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module3_q10",
                                "Horizontal scaling adds more agent instances to handle increased load",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_production_systems")
                );
