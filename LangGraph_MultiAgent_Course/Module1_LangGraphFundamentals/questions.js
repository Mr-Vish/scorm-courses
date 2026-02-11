test.AddQuestion( new Question ("m1_q1",
                                "What is the primary limitation of traditional chain-based LLM applications that LangGraph addresses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too expensive to run", "They cannot maintain state or implement conditional branching", "They require too much code", "They only work with specific LLM models"),
                                "They cannot maintain state or implement conditional branching",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q2",
                                "In LangGraph architecture, what is the primary responsibility of a node?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Store persistent data", "Receive current state, perform operations, and return state updates", "Define routing logic between other nodes", "Manage database connections"),
                                "Receive current state, perform operations, and return state updates",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q3",
                                "Which type of edge in LangGraph determines the next node based on examining the current state?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Regular edge", "Conditional edge", "Cyclic edge", "Terminal edge"),
                                "Conditional edge",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q4",
                                "What is the main purpose of checkpointing in LangGraph?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve execution speed", "To enable state persistence, resumability, and human-in-the-loop workflows", "To reduce memory usage", "To validate node outputs"),
                                "To enable state persistence, resumability, and human-in-the-loop workflows",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q5",
                                "In the state update strategies, which strategy is most suitable for accumulating conversation messages over time?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Replace strategy", "Append strategy", "Merge strategy", "Delete strategy"),
                                "Append strategy",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q6",
                                "Which graph design pattern is characterized by the structure: A → B → Quality Check → [loop back to B if insufficient] → C?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Linear Pipeline", "Conditional Branch", "Iterative Refinement Loop", "Parallel Processing"),
                                "Iterative Refinement Loop",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q7",
                                "What is a critical best practice when implementing iterative refinement loops?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always run exactly 3 iterations", "Include a maximum iteration limit to prevent infinite loops", "Never use quality checks", "Avoid logging iteration counts"),
                                "Include a maximum iteration limit to prevent infinite loops",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q8",
                                "In the Parallel Processing with Aggregation pattern, what is the role of the aggregator node?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To execute nodes in parallel", "To combine results from multiple parallel nodes", "To validate input data", "To checkpoint the state"),
                                "To combine results from multiple parallel nodes",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q9",
                                "Which checkpoint storage option is recommended for production-grade applications requiring concurrent access and high availability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("In-memory storage", "File-based SQLite", "Database like PostgreSQL", "Local file system"),
                                "Database like PostgreSQL",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q10",
                                "What happens during the graph compilation phase?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Nodes are executed in sequence", "The graph structure is validated and an immutable execution plan is created", "State is initialized with default values", "LLM models are loaded into memory"),
                                "The graph structure is validated and an immutable execution plan is created",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q11",
                                "When should you choose to use LangGraph over simpler chain-based approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For all AI applications regardless of complexity", "When you need multi-step reasoning, state persistence, or conditional logic", "Only for applications with more than 100 users", "When you want to minimize development time"),
                                "When you need multi-step reasoning, state persistence, or conditional logic",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q12",
                                "What is the primary benefit of using structured logging in LangGraph applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces execution time", "It enables easy parsing, analysis, and debugging of execution flows", "It automatically fixes errors", "It eliminates the need for testing"),
                                "It enables easy parsing, analysis, and debugging of execution flows",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q13",
                                "Which testing strategy is most appropriate for testing individual nodes in isolation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("End-to-end testing", "Unit testing with mock state", "Human evaluation", "Integration testing"),
                                "Unit testing with mock state",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q14",
                                "What is a common symptom of an infinite loop problem in a LangGraph application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Graph executes too quickly", "Graph execution never completes", "State becomes empty", "All nodes are skipped"),
                                "Graph execution never completes",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q15",
                                "Which cost optimization strategy involves using different LLM models based on task complexity?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt optimization", "Selective model usage", "Batch processing", "Early termination"),
                                "Selective model usage",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q16",
                                "Nodes in LangGraph should ideally be designed as stateless functions.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q17",
                                "State size has no impact on LangGraph performance or checkpoint storage costs.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q18",
                                "The Human-in-the-Loop pattern introduces latency because execution must wait for human review.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q19",
                                "In LangGraph, regular (unconditional) edges always follow the same predetermined path.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q20",
                                "Caching LLM responses for identical inputs is an effective cost optimization strategy.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );
