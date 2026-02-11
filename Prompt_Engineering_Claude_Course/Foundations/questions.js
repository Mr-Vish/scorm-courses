test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m1_q1",
                                "What is the primary purpose of a System Prompt in Claude?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To provide the actual user request", "To set Claude's role, behavior, and constraints", "To provide few-shot examples", "To define the output format only"),
                                "To set Claude's role, behavior, and constraints",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m1_q2",
                                "Which XML tag is recommended for wrapping source material to be analyzed by Claude?",
                                QUESTION_TYPE_CHOICE,
                                new Array("<instructions>", "<context>", "<document>", "<output_format>"),
                                "<document>",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m1_q3",
                                "In Persona Engineering, what is the 'negative constraint' component used for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To list tasks the persona SHOULD NOT do", "To limit the number of tokens in a response", "To define the tone of the persona", "To provide examples of bad responses"),
                                "To list tasks the persona SHOULD NOT do",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m1_q4",
                                "What is a 'Golden Dataset' in the context of prompt evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A collection of Claude's best responses", "A set of inputs and their ideal, human-verified outputs", "A dataset used for fine-tuning the model", "A collection of successful system prompts"),
                                "A set of inputs and their ideal, human-verified outputs",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m1_q5",
                                "Why is 'Error Analysis' crucial in the iterative prompt development cycle?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To calculate the cost of the prompt", "To identify where and why the prompt fails to meet expectations", "To automatically fix the prompt", "To reduce the latency of the model"),
                                "To identify where and why the prompt fails to meet expectations",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m1_q6",
                                "When using XML tags in prompts, which principle helps Claude understand the hierarchy of information?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Randomized Tagging", "Nesting Tags", "Avoiding Tags", "Using only one tag type"),
                                "Nesting Tags",
                                "obj_module_1")
                );