test.AddQuestion( new Question ("q1",
                                "What are the core components of a LangGraph?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Nodes, edges, state, and checkpointing", "Models, prompts, and chains", "Agents, tools, and memory", "Functions, classes, and variables"),
                                "Nodes, edges, state, and checkpointing",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which multi-agent pattern involves one agent routing to specialist agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Debate", "Pipeline", "Supervisor", "Swarm"),
                                "Supervisor",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What does the 'interrupt_before' parameter do in LangGraph compilation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Stops execution permanently", "Pauses before specified nodes for human approval", "Prevents errors from occurring", "Speeds up execution"),
                                "Pauses before specified nodes for human approval",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "In the code example, what does the should_continue function return when tool calls are present?",
                                QUESTION_TYPE_CHOICE,
                                new Array("END", "\"tools\"", "\"agent\"", "None"),
                                "\"tools\"",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "Which state persistence option is recommended for production-grade applications with concurrent access?",
                                QUESTION_TYPE_CHOICE,
                                new Array("In-memory", "SQLite", "PostgreSQL", "File-based"),
                                "PostgreSQL",
                                "obj_module_1")
                );