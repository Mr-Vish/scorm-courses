test.AddQuestion( new Question ("q1",
                                "What is a key characteristic of The Compile Workflow?",
                                QUESTION_TYPE_CHOICE,
                                new Array("BootstrapFewShot", "Hard to systematically improve", "Define your program: Create a DSPy module with signatures", "Few-shot examples are manually curated: Examples are selected by the optimizer"),
                                "Define your program: Create a DSPy module with signatures",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which statement about The Compile Workflow is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prepare training data: Provide input-output examples (even a handful works)", "Modules are the building blocks of DSPy programs. Each module wraps one or more LLM cal...", "Finds optimal few-shot examples from training data", "Examples are selected by the optimizer"),
                                "Prepare training data: Provide input-output examples (even a handful works)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which of the following best describes The Compile Workflow?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hard to systematically improve: Use metrics and optimizers to improve", "Hand-craft prompts with trial and error", "What Are Optimizers?", "Define a metric: Write a function that scores program outputs"),
                                "Define a metric: Write a function that scores program outputs",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What is an important aspect of The Compile Workflow?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hard to systematically improve", "Use metrics and optimizers to improve", "Choose an optimizer: Select the optimization strategy", "Prompts break when models change"),
                                "Choose an optimizer: Select the optimization strategy",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is the primary purpose of The Compile Workflow?",
                                QUESTION_TYPE_CHOICE,
                                new Array("What Are Optimizers?", "Compile: The optimizer tunes your program automatically", "Best overall quality", "dspy.ReAct: Interleaves reasoning with tool calls"),
                                "Compile: The optimizer tunes your program automatically",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "How is Benefits of Compiling best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Portability: Recompile when switching models (e.g., GPT-4 to Claude) - the optimizer ad...", "Benefits of Compiling", "Define your program: Create a DSPy module with signatures", "dspy.ChainOfThought: Adds step-by-step reasoning before the output"),
                                "Portability: Recompile when switching models (e.g., GPT-4 to Claude) - the optimizer ad...",
                                "obj_module_1")
                );