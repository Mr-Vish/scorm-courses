test.AddQuestion( new Question ("mcp.adv.q1",
                                "Which security principle states that users should be granted only the minimum permissions necessary?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Defense in Depth", "Fail Secure", "Least Privilege", "Separation of Duties"),
                                "Least Privilege",
                                "obj_advanced_concepts")
                );

test.AddQuestion( new Question ("mcp.adv.q2",
                                "For SSE transport MCP servers, which authentication method uses signed JSON Web Tokens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("API Keys", "OAuth 2.0", "JWT", "Basic Auth"),
                                "JWT",
                                "obj_advanced_concepts")
                );

test.AddQuestion( new Question ("mcp.adv.q3",
                                "Sensitive data like passwords and API keys should never be logged to any output stream",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_advanced_concepts")
                );

test.AddQuestion( new Question ("mcp.adv.q4",
                                "What is the primary purpose of rate limiting in MCP servers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve performance", "To protect against abuse and denial-of-service attacks", "To reduce server costs", "To enforce user quotas"),
                                "To protect against abuse and denial-of-service attacks",
                                "obj_advanced_concepts")
                );

test.AddQuestion( new Question ("mcp.adv.q5",
                                "Which process manager is commonly used for Node.js applications in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("systemd", "PM2", "supervisor", "Docker"),
                                "PM2",
                                "obj_advanced_concepts")
                );

test.AddQuestion( new Question ("mcp.adv.q6",
                                "Configuration should be externalized from code using environment variables or configuration files",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_advanced_concepts")
                );

test.AddQuestion( new Question ("mcp.adv.q7",
                                "What is the benefit of executing multiple independent async operations in parallel rather than sequentially?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Easier to debug", "Reduced total execution time", "Lower memory usage", "Better error handling"),
                                "Reduced total execution time",
                                "obj_advanced_concepts")
                );

test.AddQuestion( new Question ("mcp.adv.q8",
                                "Which caching strategy invalidates cached data after a fixed time duration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Event-based invalidation", "Manual invalidation", "Time-based invalidation", "Size-based invalidation"),
                                "Time-based invalidation",
                                "obj_advanced_concepts")
                );
