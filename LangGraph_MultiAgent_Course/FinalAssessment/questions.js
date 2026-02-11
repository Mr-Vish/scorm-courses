test.AddQuestion( new Question ("final_q1",
                                "What fundamental capability does LangGraph provide that traditional chain-based approaches lack?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster execution", "Stateful workflows with cycles and conditional branching", "Lower cost", "Simpler code"),
                                "Stateful workflows with cycles and conditional branching",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q2",
                                "Which component in LangGraph is responsible for performing operations and returning state updates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Edges", "Nodes", "Checkpoints", "State"),
                                "Nodes",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q3",
                                "What is the primary purpose of conditional edges in a LangGraph?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To store data", "To determine the next node based on current state", "To validate inputs", "To log execution"),
                                "To determine the next node based on current state",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q4",
                                "In which graph design pattern would you use the structure: A → B → Quality Check → [loop back if insufficient]?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Linear Pipeline", "Iterative Refinement Loop", "Conditional Branch", "Parallel Processing"),
                                "Iterative Refinement Loop",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q5",
                                "Which multi-agent pattern involves one agent routing requests to specialized agents based on classification?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Debate pattern", "Supervisor pattern", "Pipeline pattern", "Swarm pattern"),
                                "Supervisor pattern",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q6",
                                "What is the main advantage of the Debate (Adversarial) pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lowest cost", "Fastest execution", "Explores multiple perspectives to improve decision quality", "Simplest implementation"),
                                "Explores multiple perspectives to improve decision quality",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q7",
                                "In multi-agent systems, what does centralized coordination provide?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximum flexibility", "Clear control flow and easier debugging", "No single point of failure", "Lowest latency"),
                                "Clear control flow and easier debugging",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q8",
                                "Which communication mechanism involves agents appending messages to a shared history?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Shared state communication", "Message passing communication", "Direct function calls", "Database queries"),
                                "Message passing communication",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q9",
                                "What is a key technical benefit of multi-agent systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always lower cost", "Modularity allowing independent agent development", "Simpler debugging", "Guaranteed faster execution"),
                                "Modularity allowing independent agent development",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q10",
                                "Which limitation is commonly associated with multi-agent systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cannot handle complex tasks", "Increased system complexity and coordination overhead", "Poor scalability", "Limited specialization"),
                                "Increased system complexity and coordination overhead",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q11",
                                "Why is a stateless application layer important for production deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses less memory", "It enables horizontal scaling and load balancing", "It's easier to code", "It requires no database"),
                                "It enables horizontal scaling and load balancing",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q12",
                                "Which checkpoint storage option is recommended for production systems requiring concurrent access?",
                                QUESTION_TYPE_CHOICE,
                                new Array("In-memory storage", "File-based SQLite", "Relational database like PostgreSQL", "Local file system"),
                                "Relational database like PostgreSQL",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q13",
                                "What is the purpose of the Circuit Breaker pattern in production systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve performance", "To prevent cascading failures by stopping calls to failing services", "To encrypt data", "To cache responses"),
                                "To prevent cascading failures by stopping calls to failing services",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q14",
                                "Which deployment strategy provides zero-downtime deployment with instant rollback capability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Rolling deployment", "Blue-Green deployment", "Big bang deployment", "Manual deployment"),
                                "Blue-Green deployment",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q15",
                                "What are the three pillars of observability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Servers, Databases, Networks", "Metrics, Logs, and Traces", "CPU, Memory, Disk", "Code, Tests, Documentation"),
                                "Metrics, Logs, and Traces",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q16",
                                "Which security practice protects sensitive data stored in databases?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Input validation", "Encryption at rest", "Rate limiting", "Load balancing"),
                                "Encryption at rest",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q17",
                                "What is the primary goal of prompt injection prevention?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improve performance", "Prevent malicious users from manipulating LLM behavior", "Reduce costs", "Increase throughput"),
                                "Prevent malicious users from manipulating LLM behavior",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q18",
                                "Which cost optimization strategy involves using different LLM models based on task complexity?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Batch processing", "Selective model usage", "Caching only", "Parallel execution"),
                                "Selective model usage",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q19",
                                "What is the benefit of implementing retry logic with exponential backoff?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster execution", "Prevents overwhelming recovering services while retrying failed operations", "Reduces memory usage", "Simplifies code"),
                                "Prevents overwhelming recovering services while retrying failed operations",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q20",
                                "When should you choose LangGraph over simpler chain-based approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For all applications", "When you need multi-step reasoning, state persistence, or conditional logic", "Only for large enterprises", "When budget is unlimited"),
                                "When you need multi-step reasoning, state persistence, or conditional logic",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q21",
                                "Checkpointing in LangGraph enables state persistence and resumability.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q22",
                                "The Collaborative Swarm pattern uses a central coordinator to manage all agent interactions.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q23",
                                "Multi-agent systems always cost less than single-agent systems.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q24",
                                "Parallel execution of independent agents can reduce total execution time.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q25",
                                "Structured logging uses JSON format to enable easy parsing and analysis.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
