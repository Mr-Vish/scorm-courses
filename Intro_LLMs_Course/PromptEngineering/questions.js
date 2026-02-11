test.AddQuestion( new Question ("q1",
                                "Which prompting technique involves providing examples to guide the model's response format?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Zero-shot prompting", "Few-shot prompting", "Role-based prompting", "Meta-prompting"),
                                "Few-shot prompting",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q2",
                                "What is the main purpose of Chain-of-Thought (CoT) prompting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce token usage", "To encourage the model to show its reasoning process step-by-step", "To translate between languages", "To compress the output"),
                                "To encourage the model to show its reasoning process step-by-step",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3",
                                "In prompt engineering, what is the difference between a system prompt and a user prompt?",
                                QUESTION_TYPE_CHOICE,
                                new Array("System prompts are longer than user prompts", "System prompts set overall behavior for the conversation, user prompts are specific queries", "User prompts are more important than system prompts", "There is no difference between them"),
                                "System prompts set overall behavior for the conversation, user prompts are specific queries",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q4",
                                "What is prompt decomposition?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deleting parts of a prompt", "Breaking complex tasks into smaller, manageable sub-tasks", "Translating prompts to another language", "Compressing prompts to save tokens"),
                                "Breaking complex tasks into smaller, manageable sub-tasks",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q5",
                                "Which technique helps prevent prompt injection attacks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using higher temperature settings", "Using delimiters to separate user input and treating it as data, not instructions", "Making prompts shorter", "Removing all examples from prompts"),
                                "Using delimiters to separate user input and treating it as data, not instructions",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q6",
                                "What is the benefit of batch processing multiple items in a single LLM request?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It increases accuracy", "It reduces API calls by up to 90%, lowering cost and latency", "It makes responses more creative", "It eliminates hallucinations"),
                                "It reduces API calls by up to 90%, lowering cost and latency",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q7",
                                "In the ReAct pattern, what does the model combine?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reasoning and acting (tool use) in an iterative loop", "Reading and writing", "Training and inference", "Prompts and responses"),
                                "Reasoning and acting (tool use) in an iterative loop",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q8",
                                "What is meta-prompting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using very long prompts", "Using the LLM to help design better prompts for specific tasks", "Avoiding the use of examples", "Translating prompts between languages"),
                                "Using the LLM to help design better prompts for specific tasks",
                                "obj_module_3")
                );
