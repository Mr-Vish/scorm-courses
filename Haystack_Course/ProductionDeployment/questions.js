test.AddQuestion( new Question ("q1",
                                "Which evaluator measures whether generated answers are grounded in retrieved context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SASEvaluator", "FaithfulnessEvaluator", "ContextRelevanceEvaluator", "DocumentMRREvaluator"),
                                "FaithfulnessEvaluator",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q2",
                                "What is the typical target latency for production RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 100 milliseconds", "Less than 2 seconds", "Less than 10 seconds", "Less than 30 seconds"),
                                "Less than 2 seconds",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3",
                                "Which deployment architecture is best suited for variable workloads and cost optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("REST API", "Microservices", "Serverless", "Monolithic"),
                                "Serverless",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q4",
                                "What is the primary purpose of implementing caching in a RAG application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve security", "To reduce latency and API costs", "To increase accuracy", "To simplify deployment"),
                                "To reduce latency and API costs",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q5",
                                "Which metric measures the proportion of retrieved documents that are relevant?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Recall", "Precision", "F1 Score", "Accuracy"),
                                "Precision",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q6",
                                "What should be the value of recreate_index in production document store configuration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("True", "False", "Auto", "Depends on the use case"),
                                "False",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q7",
                                "Which tool is commonly used to expose Haystack pipelines as HTTP endpoints?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Django", "Flask", "FastAPI", "Tornado"),
                                "FastAPI",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q8",
                                "What is the purpose of a circuit breaker pattern in production deployments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce memory usage", "To protect against cascading failures from external services", "To improve query accuracy", "To enable horizontal scaling"),
                                "To protect against cascading failures from external services",
                                "obj_module_3")
                );
