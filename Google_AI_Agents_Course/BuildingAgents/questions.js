test.AddQuestion( new Question ("q1",
                                "What are the five main components of the Vertex AI Agent architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Models, APIs, Databases, Servers, Networks", "Agent, Tools, Data Stores, Extensions, Playbooks", "Input, Processing, Output, Storage, Monitoring", "Frontend, Backend, Database, Cache, Queue"),
                                "Agent, Tools, Data Stores, Extensions, Playbooks",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "In the code example, what class is used to create a LangChain agent with Vertex AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("reasoning_engines.VertexAgent", "reasoning_engines.LangchainAgent", "reasoning_engines.GoogleAgent", "reasoning_engines.GeminiAgent"),
                                "reasoning_engines.LangchainAgent",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which pre-built extension provides access to Docs, Sheets, Gmail, and Calendar?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Code Interpreter", "BigQuery", "Google Workspace", "Vertex AI Search"),
                                "Google Workspace",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What parameter is set to True in the agent_executor_kwargs to track intermediate steps?",
                                QUESTION_TYPE_CHOICE,
                                new Array("verbose", "return_intermediate_steps", "track_steps", "show_progress"),
                                "return_intermediate_steps",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "In the multi-agent pattern, which agent type validates actions before execution?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Router Agent", "Research Agent", "Action Agent", "Review Agent"),
                                "Review Agent",
                                "obj_module_1")
                );