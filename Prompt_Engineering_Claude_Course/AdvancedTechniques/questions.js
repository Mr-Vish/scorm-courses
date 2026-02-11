test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m2_q1",
                                "In the Tool Use (function calling) workflow, what is the role of the developer after Claude generates a tool use block?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To ask Claude to execute the tool", "To execute the tool in the application and provide the result back to Claude", "To ignore the tool call and ask for a text response", "To define a new tool"),
                                "To execute the tool in the application and provide the result back to Claude",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m2_q2",
                                "What is the primary benefit of Claude's long context window (up to 200k tokens)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It allows Claude to generate images", "It enables the processing of entire codebases or long legal documents in a single prompt", "It makes Claude respond faster to short queries", "It reduces the cost of every message"),
                                "It enables the processing of entire codebases or long legal documents in a single prompt",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m2_q3",
                                "Which feature in the Claude web interface allows for interactive collaboration on code and UI designs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt Caching", "Computer Use", "Artifacts", "Tool Use"),
                                "Artifacts",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m2_q4",
                                "What is a 'cache breakpoint' in the context of Prompt Caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A point in the prompt where Claude stops responding", "A marker that indicates which prefix of the prompt should be cached", "An error that occurs when the cache is full", "A way to delete the cache"),
                                "A marker that indicates which prefix of the prompt should be cached",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m2_q5",
                                "Which capability allows Claude to interact with a computer's GUI by looking at screenshots and performing clicks/keystrokes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Vision", "Tool Use", "Computer Use", "Artifacts"),
                                "Computer Use",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.prompt.engineering.claude.m2_q6",
                                "When using Claude's Vision capabilities, what is a best practice for visual prompting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Provide only the image without any text", "Describe why you are providing the image and what to look for", "Always use low-resolution images", "Ask Claude to identify specific individuals in the photo"),
                                "Describe why you are providing the image and what to look for",
                                "obj_module_2")
                );