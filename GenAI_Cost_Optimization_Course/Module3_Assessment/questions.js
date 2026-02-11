// Module 3 Assessment: Advanced Optimization and Governance
// 8 questions covering monitoring, governance, FinOps, and best practices

test.AddQuestion( new Question ("com.scorm.genai.cost.module3_q1",
                                "What is the recommended alert threshold for daily GenAI spend as a percentage above the 7-day average?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10%", "20%", "30%", "50%"),
                                "20%",
                                "obj_module3_advanced")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module3_q2",
                                "Which CloudWatch metric directly measures the cost driver for GenAI workloads?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Invocations", "InvocationLatency", "InputTokens and OutputTokens", "InvocationErrors"),
                                "InputTokens and OutputTokens",
                                "obj_module3_advanced")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module3_q3",
                                "In a budget control hierarchy, which control mechanism is most appropriate for production environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hard limits with automatic shutdown", "Soft limits with alerts", "No limits", "Approval gates for all requests"),
                                "Soft limits with alerts",
                                "obj_module3_advanced")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module3_q4",
                                "Which FinOps principle emphasizes that cost optimization decisions should be based on business outcomes rather than absolute cost reduction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Teams need to collaborate", "Everyone takes ownership", "Decisions are driven by business value", "Take advantage of variable cost model"),
                                "Decisions are driven by business value",
                                "obj_module3_advanced")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module3_q5",
                                "What is the recommended approach for implementing cost allocation in organizations new to GenAI FinOps?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Start with chargeback immediately", "Start with showback, evolve to chargeback", "Use fixed allocation only", "Avoid cost allocation initially"),
                                "Start with showback, evolve to chargeback",
                                "obj_module3_advanced")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module3_q6",
                                "What percentage cost reduction is commonly achieved with comprehensive GenAI optimization strategies?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-20%", "30-40%", "60-80%", "90-95%"),
                                "60-80%",
                                "obj_module3_advanced")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module3_q7",
                                "Which risk mitigation strategy addresses the concern that aggressive cost optimization might compromise output quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Implement automated quality testing and monitoring", "Reduce optimization efforts", "Use only premium models", "Eliminate caching"),
                                "Implement automated quality testing and monitoring",
                                "obj_module3_advanced")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module3_q8",
                                "According to enterprise best practices, how frequently should optimization strategies be reviewed to account for evolving GenAI technology and pricing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Weekly", "Monthly", "Quarterly", "Annually"),
                                "Quarterly",
                                "obj_module3_advanced")
                );
