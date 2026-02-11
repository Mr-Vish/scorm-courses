test.AddQuestion( new Question ("com.scorm.bedrock.module4.q1",
                                "What is the primary benefit of using a supervisor-subordinate multi-agent architecture?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced costs", "Specialization with domain-specific agents", "Faster response times", "Simpler configuration"),
                                "Specialization with domain-specific agents",
                                "obj_module4")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module4.q2",
                                "Guardrails can be applied to both agent inputs and outputs",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module4")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module4.q3",
                                "Which guardrail capability automatically detects and masks personally identifiable information?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Content Filters", "Denied Topics", "PII Redaction", "Word Filters"),
                                "PII Redaction",
                                "obj_module4")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module4.q4",
                                "What is the difference between session attributes and prompt session attributes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Session attributes are encrypted, prompt session attributes are not", "Session attributes persist across turns, prompt session attributes are per-turn", "Session attributes are required, prompt session attributes are optional", "There is no difference"),
                                "Session attributes persist across turns, prompt session attributes are per-turn",
                                "obj_module4")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module4.q5",
                                "Streaming responses reduce perceived latency by delivering content progressively",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module4")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module4.q6",
                                "In a blue-green deployment strategy, what happens during the cutover phase?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The old version is deleted", "The alias is switched to point to the new version", "Both versions run simultaneously", "The database is migrated"),
                                "The alias is switched to point to the new version",
                                "obj_module4")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module4.q7",
                                "What is a canary deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploying to a test environment only", "Gradually rolling out new versions to subsets of users", "Deploying all changes at once", "Rolling back to a previous version"),
                                "Gradually rolling out new versions to subsets of users",
                                "obj_module4")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module4.q8",
                                "Trace logging captures detailed execution information including reasoning steps and action invocations",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module4")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module4.q9",
                                "Which strategy can help reduce token usage and costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using longer agent instructions", "Retrieving more knowledge base chunks", "Using concise instructions and efficient prompts", "Increasing session TTL"),
                                "Using concise instructions and efficient prompts",
                                "obj_module4")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module4.q10",
                                "What is the recommended approach when an agent is not invoking actions as expected?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increase the model size", "Improve action group descriptions and explicitly instruct agent to use actions", "Add more knowledge bases", "Reduce session TTL"),
                                "Improve action group descriptions and explicitly instruct agent to use actions",
                                "obj_module4")
                );
