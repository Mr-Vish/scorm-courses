test.AddQuestion( new Question ("q1",
                                "What distinguishes an AI agent from a traditional chatbot?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Agents use larger models", "Agents can use tools and take actions autonomously", "Agents are faster", "Agents cost less"),
                                "Agents can use tools and take actions autonomously",
                                "obj_final")
                );

test.AddQuestion( new Question ("q2",
                                "Which component in the agent architecture is responsible for breaking down complex tasks into steps?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reasoning Engine", "Planning Module", "Memory", "Execution Loop"),
                                "Planning Module",
                                "obj_final")
                );

test.AddQuestion( new Question ("q3",
                                "In the ReAct pattern, what happens after an agent executes an action?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The agent terminates", "The agent receives an observation", "The agent resets memory", "The agent switches models"),
                                "The agent receives an observation",
                                "obj_final")
                );

test.AddQuestion( new Question ("q4",
                                "What is the primary purpose of docstrings in tool function definitions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improve code performance", "Help the LLM understand when and how to use the tool", "Enable debugging", "Reduce memory usage"),
                                "Help the LLM understand when and how to use the tool",
                                "obj_final")
                );

test.AddQuestion( new Question ("q5",
                                "Which tool execution pattern allows multiple tools to be called simultaneously?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sequential", "Parallel", "Conditional", "Chained"),
                                "Parallel",
                                "obj_final")
                );

test.AddQuestion( new Question ("q6",
                                "What is the main advantage of implementing tool input validation with Pydantic?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster execution", "Type safety and automatic validation", "Lower costs", "Better logging"),
                                "Type safety and automatic validation",
                                "obj_final")
                );

test.AddQuestion( new Question ("q7",
                                "What does RAG stand for in the context of AI agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Rapid Agent Generation", "Retrieval-Augmented Generation", "Random Access Grounding", "Recursive Agent Gateway"),
                                "Retrieval-Augmented Generation",
                                "obj_final")
                );

test.AddQuestion( new Question ("q8",
                                "Why is chunk overlap important in document splitting for RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces storage costs", "Maintains context across chunk boundaries", "Improves search speed", "Enables parallel processing"),
                                "Maintains context across chunk boundaries",
                                "obj_final")
                );

test.AddQuestion( new Question ("q9",
                                "What is the benefit of using hybrid search that combines keyword and semantic search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower costs", "Better relevance by leveraging both exact matches and meaning", "Faster queries", "Simpler implementation"),
                                "Better relevance by leveraging both exact matches and meaning",
                                "obj_final")
                );

test.AddQuestion( new Question ("q10",
                                "What is the purpose of semantic versioning for deployed agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improve performance", "Track changes and enable rollbacks", "Reduce costs", "Enhance security"),
                                "Track changes and enable rollbacks",
                                "obj_final")
                );

test.AddQuestion( new Question ("q11",
                                "Which environment should have production-like settings but use test data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Development", "Staging", "Production", "Testing"),
                                "Staging",
                                "obj_final")
                );

test.AddQuestion( new Question ("q12",
                                "What is the purpose of the Code Interpreter extension?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compile code", "Execute Python code and perform data analysis", "Debug applications", "Generate documentation"),
                                "Execute Python code and perform data analysis",
                                "obj_final")
                );

test.AddQuestion( new Question ("q13",
                                "Where should API keys and credentials be stored for production extensions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Configuration files", "Environment variables", "Secret Manager", "Database"),
                                "Secret Manager",
                                "obj_final")
                );

test.AddQuestion( new Question ("q14",
                                "What authentication type is recommended for Google Cloud service integrations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("API Keys", "Basic Auth", "Google Service Account", "OAuth User Tokens"),
                                "Google Service Account",
                                "obj_final")
                );

test.AddQuestion( new Question ("q15",
                                "In LangChain, what is the purpose of the Memory component?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Store model weights", "Manage conversation history and context", "Cache API responses", "Store tool definitions"),
                                "Manage conversation history and context",
                                "obj_final")
                );

test.AddQuestion( new Question ("q16",
                                "Which LangChain chain type is best for executing a sequence of operations where each step depends on the previous?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Router Chain", "Sequential Chain", "Parallel Chain", "Conditional Chain"),
                                "Sequential Chain",
                                "obj_final")
                );

test.AddQuestion( new Question ("q17",
                                "What is the main advantage of using callbacks in LangChain agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster execution", "Monitoring and logging agent execution", "Lower costs", "Better accuracy"),
                                "Monitoring and logging agent execution",
                                "obj_final")
                );

test.AddQuestion( new Question ("q18",
                                "In a hierarchical multi-agent system, what is the role of the Coordinator Agent?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Execute database queries", "Orchestrate workflows across multiple agents", "Monitor performance", "Handle authentication"),
                                "Orchestrate workflows across multiple agents",
                                "obj_final")
                );

test.AddQuestion( new Question ("q19",
                                "What is the purpose of a message bus in multi-agent communication?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encrypt messages", "Facilitate inter-agent message passing", "Store conversation history", "Generate responses"),
                                "Facilitate inter-agent message passing",
                                "obj_final")
                );

test.AddQuestion( new Question ("q20",
                                "Which metric category tracks accuracy, relevance, and hallucination rate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Performance", "Cost", "Quality", "User Satisfaction"),
                                "Quality",
                                "obj_final")
                );

test.AddQuestion( new Question ("q21",
                                "What is the primary benefit of using Gemini 1.5 Flash instead of Gemini 1.5 Pro for simple tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Better accuracy", "Lower cost and faster responses", "Larger context window", "More features"),
                                "Lower cost and faster responses",
                                "obj_final")
                );

test.AddQuestion( new Question ("q22",
                                "What is the purpose of A/B testing in agent deployments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduce costs", "Compare performance of different agent configurations", "Improve security", "Enable multi-agent communication"),
                                "Compare performance of different agent configurations",
                                "obj_final")
                );

test.AddQuestion( new Question ("q23",
                                "What security principle requires granting only the minimum necessary permissions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Defense in Depth", "Least Privilege", "Zero Trust", "Separation of Duties"),
                                "Least Privilege",
                                "obj_final")
                );

test.AddQuestion( new Question ("q24",
                                "What should be done with PII (Personally Identifiable Information) before logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encrypt it", "Redact or tokenize it", "Compress it", "Archive it"),
                                "Redact or tokenize it",
                                "obj_final")
                );

test.AddQuestion( new Question ("q25",
                                "What is the purpose of rate limiting in agent systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improve accuracy", "Prevent abuse and control costs", "Enable caching", "Enhance security encryption"),
                                "Prevent abuse and control costs",
                                "obj_final")
                );
