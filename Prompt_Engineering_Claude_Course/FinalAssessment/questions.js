// Final Comprehensive Assessment
// Covers all modules

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q1",
                                "Which element of a prompt is best used for setting Claude's expertise and behavioral guidelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User Message", "System Prompt", "Context tags", "Output constraints"),
                                "System Prompt",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q2",
                                "Why are XML tags recommended when prompting Claude?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They make the prompt look more professional", "They help Claude distinguish between instructions and different pieces of data", "They are required by the Anthropic API", "They reduce the total token count of the prompt"),
                                "They help Claude distinguish between instructions and different pieces of data",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q3",
                                "In Persona Engineering, what is the benefit of including 'Values and Priorities'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces the model's latency", "It helps the model prioritize certain aspects of a problem over others, matching the persona's role", "It bypasses safety guardrails", "It is only useful for creative writing tasks"),
                                "It helps the model prioritize certain aspects of a problem over others, matching the persona's role",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q4",
                                "What is the recommended approach for handling 'lost in the middle' in long prompts with Claude?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always keep prompts under 10,000 tokens", "Place the most important information at the very beginning and very end only", "Claude is already optimized for high recall across its entire context window", "Only use RAG instead of long context"),
                                "Claude is already optimized for high recall across its entire context window",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q5",
                                "When using Tool Use, what happens after Claude decides to use a tool?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Claude executes the code automatically in a secure sandbox", "Claude provides a 'tool use' block which the developer must handle by executing the tool and returning the result", "Claude asks the user to provide the tool result", "Claude stops the conversation and generates an error"),
                                "Claude provides a 'tool use' block which the developer must handle by executing the tool and returning the result",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q6",
                                "What is the primary advantage of Prompt Caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increased response creativity", "Reduced latency and cost for repetitive or large prompt prefixes", "Higher token limits for individual messages", "Automatic correction of prompt errors"),
                                "Reduced latency and cost for repetitive or large prompt prefixes",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q7",
                                "Claude 3.5 Artifacts are most useful for which of the following?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sending private messages to the model", "Visualizing code, diagrams, and UI designs in a dedicated window", "Storing long-term memory between conversations", "Encrypting sensitive data in prompts"),
                                "Visualizing code, diagrams, and UI designs in a dedicated window",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q8",
                                "Which capability enables Claude to perform actions on a computer desktop environment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Vision", "Tool Use", "Computer Use", "Chain of Thought"),
                                "Computer Use",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q9",
                                "In the iterative development cycle, what should you do after identifying errors in a prompt's output?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Discard the prompt and use a different model", "Perform error analysis and refine the prompt instructions or examples", "Increase the temperature setting to get different results", "Ask the user to rewrite their query"),
                                "Perform error analysis and refine the prompt instructions or examples",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q10",
                                "When using Vision to analyze a chart, what is a key best practice?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Provide the chart in low resolution to save tokens", "Ask Claude to look for specific trends or data points and specify the desired output format", "Don't provide any text context to avoid biasing the model", "Only provide images of simple bar charts"),
                                "Ask Claude to look for specific trends or data points and specify the desired output format",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q11",
                                "What does 'Prefilling' refer to in the context of Claude prompting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Filling the context window with random data", "Starting Claude's response for it (e.g., providing the opening bracket '{' for JSON)", "Caching the prompt before it is sent", "Using an LLM to generate the prompt"),
                                "Starting Claude's response for it (e.g., providing the opening bracket '{' for JSON)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q12",
                                "Which prompting pattern involves asking Claude to explain its step-by-step reasoning before giving the final answer?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Few-Shot Prompting", "Chain of Thought", "Persona Engineering", "Negative Constraints"),
                                "Chain of Thought",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q13",
                                "Where should static, cacheable content be placed in a prompt to maximize Prompt Caching efficiency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("At the very end of the prompt", "In the middle, after the user query", "At the beginning of the prompt", "In a separate API call"),
                                "At the beginning of the prompt",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q14",
                                "What is the primary role of a 'Judge' model in automated evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To write the initial prompt", "To execute tool calls", "To score the outputs of another model based on specific criteria", "To interact with the end user"),
                                "To score the outputs of another model based on specific criteria",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.final_q15",
                                "Which of the following is NOT a core structural element of an effective prompt to Claude?",
                                QUESTION_TYPE_CHOICE,
                                new Array("System Prompt", "User Message", "Background Music", "Context and Examples"),
                                "Background Music",
                                "obj_final_assessment")
                );