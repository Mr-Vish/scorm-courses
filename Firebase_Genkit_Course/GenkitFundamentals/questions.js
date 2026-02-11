test.AddQuestion( new Question ("q1",
                                "What is a key characteristic of Observability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Structured Output", "Every flow execution is automatically traced with:", "Input/output logging", "Prompts: Managed prompt templates with input/output schemas"),
                                "Input/output logging",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "How is Observability best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LLM call details (model, tokens, latency)", "Prompts: Managed prompt templates with input/output schemas", "Key Concepts", "Error tracking with stack traces"),
                                "LLM call details (model, tokens, latency)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which of the following is true regarding Observability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Observability", "Tool execution traces", "Key Concepts", "Genkit Developer UI"),
                                "Tool execution traces",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What does Observability involve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tool execution traces", "Retrievers: Built-in RAG support with pluggable vector stores", "Evaluators: Test AI output quality with automated metrics", "Error tracking with stack traces"),
                                "Error tracking with stack traces",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What distinguishes Key Concepts from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retrievers: Built-in RAG support with pluggable vector stores", "Flows: Type-safe, observable functions that can call AI models and tools", "Deploy flows as Firebase Cloud Functions or any Node.js hosting:", "Key Concepts"),
                                "Flows: Type-safe, observable functions that can call AI models and tools",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What is an important aspect of Key Concepts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploy flows as Firebase Cloud Functions or any Node.js hosting:", "Prompts: Managed prompt templates with input/output schemas", "Models: Abstraction over LLM providers (Gemini, GPT, Claude, Ollama)", "Tool execution traces"),
                                "Models: Abstraction over LLM providers (Gemini, GPT, Claude, Ollama)",
                                "obj_module_1")
                );