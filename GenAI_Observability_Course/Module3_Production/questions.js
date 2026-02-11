test.AddQuestion( new Question ("q1",
                                "For a Critical severity alert indicating complete service outage, what is the required response time?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Within 1 hour", "Next business day", "Immediate (page on-call engineer)", "Within 15 minutes"),
                                "Immediate (page on-call engineer)",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q2",
                                "Which evaluation approach provides the highest accuracy but has the poorest scalability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Automated evaluation", "Rule-based evaluation", "Human evaluation by experts", "Embedding similarity"),
                                "Human evaluation by experts",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3",
                                "What is the purpose of 'LLM-as-judge' evaluation in production systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce operational costs", "To use a powerful LLM to evaluate outputs from production models at scale", "To cache responses", "To compress prompts"),
                                "To use a powerful LLM to evaluate outputs from production models at scale",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q4",
                                "Which latency optimization strategy provides the greatest reduction in perceived latency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Smaller models", "Request batching", "Streaming responses (50-70% reduction)", "Prompt caching"),
                                "Streaming responses (50-70% reduction)",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q5",
                                "What is the primary goal of intelligent model routing in production systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase latency", "To route requests to the most cost-effective model that meets quality requirements", "To store more data", "To disable caching"),
                                "To route requests to the most cost-effective model that meets quality requirements",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q6",
                                "When investigating a sudden cost spike, what should be your first diagnostic step?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User interface design review", "Identify top cost contributors by user and feature", "Server hardware inspection", "Network bandwidth analysis"),
                                "Identify top cost contributors by user and feature",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q7",
                                "What is the primary purpose of maintaining a regression test suite for GenAI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase costs", "To verify quality before deployments with a test suite of expected behaviors", "To slow down development", "To disable features"),
                                "To verify quality before deployments with a test suite of expected behaviors",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q8",
                                "Which metrics are essential for tracking in a quality monitoring dashboard?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Server CPU usage only", "Average evaluation scores and user feedback distribution", "Network packet loss", "Disk space"),
                                "Average evaluation scores and user feedback distribution",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q9",
                                "What is the first step in the troubleshooting workflow when investigating a production issue?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Implement a fix immediately", "Deploy to production", "Reproduce the issue using request ID and trace data", "Update documentation"),
                                "Reproduce the issue using request ID and trace data",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q10",
                                "What is the benefit of implementing parallel tool execution in AI agent workflows?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increases costs", "Reduces total time by 40-60% for multi-tool workflows", "Decreases accuracy", "Disables caching"),
                                "Reduces total time by 40-60% for multi-tool workflows",
                                "obj_module_3")
                );