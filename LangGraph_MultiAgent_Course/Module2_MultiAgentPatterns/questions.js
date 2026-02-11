test.AddQuestion( new Question ("m2_q1",
                                "In the Supervisor (Router) pattern, what is the primary role of the supervisor agent?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Execute all tasks itself", "Analyze requests and route to appropriate specialist agents", "Store data for other agents", "Monitor system performance"),
                                "Analyze requests and route to appropriate specialist agents",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q2",
                                "Which multi-agent pattern is characterized by agents processing requests through fixed sequential stages?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Supervisor pattern", "Sequential Pipeline pattern", "Debate pattern", "Collaborative Swarm pattern"),
                                "Sequential Pipeline pattern",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q3",
                                "What is the main purpose of the Debate (Adversarial) pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To speed up processing", "To explore multiple perspectives before reaching conclusions", "To reduce costs", "To simplify agent coordination"),
                                "To explore multiple perspectives before reaching conclusions",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q4",
                                "In the Collaborative Swarm pattern, how is workflow routing determined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By a central coordinator", "Dynamically by agents based on current context", "By predefined rules only", "Randomly"),
                                "Dynamically by agents based on current context",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q5",
                                "Which communication mechanism involves all agents reading from and writing to a shared state object?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Message passing", "Shared state communication", "Tool-based communication", "Direct agent calls"),
                                "Shared state communication",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q6",
                                "What is a key advantage of centralized coordination over decentralized coordination?",
                                QUESTION_TYPE_CHOICE,
                                new Array("More flexible and adaptive", "Clearer control flow and easier debugging", "No single point of failure", "Better for unpredictable workflows"),
                                "Clearer control flow and easier debugging",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q7",
                                "Which conflict resolution strategy selects the output from the agent with the highest confidence score?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Voting mechanism", "Consensus building", "Arbitration", "Confidence-based selection"),
                                "Confidence-based selection",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q8",
                                "What type of agent specialization focuses on specific knowledge domains like medical or legal?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Task specialization", "Domain specialization", "Perspective specialization", "Tool specialization"),
                                "Domain specialization",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q9",
                                "Which performance optimization strategy involves executing independent agents concurrently?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lazy agent invocation", "Agent result caching", "Parallel execution", "Progressive enhancement"),
                                "Parallel execution",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q10",
                                "What is a primary technical benefit of multi-agent systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced system complexity", "Modularity and independent agent development", "Lower operational costs", "Faster single-threaded execution"),
                                "Modularity and independent agent development",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q11",
                                "Which limitation is commonly associated with multi-agent systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lack of specialization", "Increased system complexity and coordination overhead", "Inability to scale", "Poor fault tolerance"),
                                "Increased system complexity and coordination overhead",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q12",
                                "What is the main trade-off when using the Debate pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Simplicity vs. capability", "Cost vs. quality (higher cost for multiple perspectives)", "Speed vs. accuracy", "Flexibility vs. control"),
                                "Cost vs. quality (higher cost for multiple perspectives)",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q13",
                                "In message passing communication, how do agents share information?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Through direct function calls", "By appending messages to a shared message history", "By modifying global variables", "Through external databases only"),
                                "By appending messages to a shared message history",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q14",
                                "What is a key indicator that a multi-agent approach is appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The problem is very simple", "The problem naturally decomposes into distinct sub-problems requiring different expertise", "Budget is extremely limited", "Only one perspective is needed"),
                                "The problem naturally decomposes into distinct sub-problems requiring different expertise",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q15",
                                "Which strategy helps mitigate the cost limitations of multi-agent systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always use the most expensive models", "Use cheaper models for simple agents and implement caching", "Avoid monitoring costs", "Run all agents in sequence"),
                                "Use cheaper models for simple agents and implement caching",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q16",
                                "The Supervisor pattern is most efficient when requests can be clearly categorized.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q17",
                                "Decentralized coordination has a single point of failure in the coordinator agent.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q18",
                                "Multi-agent systems always cost less than single-agent systems.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q19",
                                "Parallel execution of independent agents can significantly reduce total execution time.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q20",
                                "The Hierarchical Team pattern organizes agents in management layers for complex tasks.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );
