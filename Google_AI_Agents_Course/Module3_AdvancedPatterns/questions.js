test.AddQuestion( new Question ("q1",
                                "In a multi-agent system, what is the primary role of a Router Agent?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Execute database queries", "Classify intent and delegate to specialist agents", "Monitor system performance", "Generate reports"),
                                "Classify intent and delegate to specialist agents",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q2",
                                "Which agent type is responsible for validating and approving actions before execution?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Router Agent", "Research Agent", "Review Agent", "Action Agent"),
                                "Review Agent",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3",
                                "What is the main benefit of using specialized agents in a multi-agent system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower costs", "Each agent focuses on specific domain expertise", "Faster deployment", "Simpler architecture"),
                                "Each agent focuses on specific domain expertise",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q4",
                                "What is the recommended target for agent response time in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 500ms", "Less than 2 seconds", "Less than 5 seconds", "Less than 10 seconds"),
                                "Less than 2 seconds",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q5",
                                "Which Gemini model should be used for simple tasks to optimize costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("gemini-1.0-pro", "gemini-1.5-pro", "gemini-1.5-flash", "gemini-ultra"),
                                "gemini-1.5-flash",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q6",
                                "What is the purpose of implementing caching in agent systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improve security", "Reduce redundant API calls and costs", "Increase accuracy", "Enable multi-agent communication"),
                                "Reduce redundant API calls and costs",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q7",
                                "Which authentication method is recommended for agent-to-service communication in Google Cloud?",
                                QUESTION_TYPE_CHOICE,
                                new Array("API Keys", "OAuth 2.0", "Service Accounts", "Basic Authentication"),
                                "Service Accounts",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q8",
                                "What security principle states that users should have only the minimum permissions necessary?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Defense in Depth", "Least Privilege", "Zero Trust", "Separation of Duties"),
                                "Least Privilege",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q9",
                                "What should be done with personally identifiable information (PII) before logging agent interactions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encrypt it", "Redact or tokenize it", "Store it separately", "Compress it"),
                                "Redact or tokenize it",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q10",
                                "Under GDPR, what right allows users to request deletion of their data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Right to Access", "Right to Portability", "Right to be Forgotten", "Right to Rectification"),
                                "Right to be Forgotten",
                                "obj_module_3")
                );
