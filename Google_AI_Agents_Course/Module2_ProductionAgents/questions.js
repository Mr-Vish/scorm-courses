test.AddQuestion( new Question ("q1",
                                "What is the primary advantage of using Vertex AI Agent Builder as a managed platform?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower costs", "No infrastructure management required", "Faster model training", "Better accuracy"),
                                "No infrastructure management required",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2",
                                "Which parameter controls the creativity of agent responses in Vertex AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("top_k", "temperature", "max_iterations", "top_p"),
                                "temperature",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3",
                                "What is the recommended temperature range for factual, deterministic agent responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.0-0.1", "0.2-0.4", "0.5-0.7", "0.8-1.0"),
                                "0.2-0.4",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4",
                                "Which pre-built extension allows agents to execute Python code and generate charts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("BigQuery", "Code Interpreter", "Cloud Functions", "Vertex AI Search"),
                                "Code Interpreter",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5",
                                "What specification format is used to define custom extensions in Vertex AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GraphQL", "WSDL", "OpenAPI", "Protocol Buffers"),
                                "OpenAPI",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6",
                                "Where should API keys and credentials be stored for Vertex AI extensions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("In code files", "Environment variables", "Secret Manager", "Cloud Storage"),
                                "Secret Manager",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7",
                                "Which LangChain component is responsible for managing conversation history?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Chains", "Memory", "Prompts", "Callbacks"),
                                "Memory",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8",
                                "What is the purpose of callbacks in LangChain?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Execute tools", "Monitor and log agent execution", "Store conversation history", "Generate embeddings"),
                                "Monitor and log agent execution",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q9",
                                "Which LangChain chain type is best for routing queries to specialized expert agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sequential Chain", "Router Chain", "LLM Chain", "Retrieval Chain"),
                                "Router Chain",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q10",
                                "What should be the first step when deploying a LangChain agent to production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Scale to maximum capacity", "Test thoroughly in development environment", "Enable all extensions", "Increase temperature"),
                                "Test thoroughly in development environment",
                                "obj_module_2")
                );
