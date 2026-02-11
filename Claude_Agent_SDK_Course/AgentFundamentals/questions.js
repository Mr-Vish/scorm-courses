test.AddQuestion( new Question ("com.scorm.claude_agent.module1_q1",
                                "What is the primary difference between a chatbot and an AI agent?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Chatbots use more advanced AI models", "Agents can execute multi-step tasks autonomously while chatbots respond to single queries", "Chatbots are faster than agents", "Agents cannot use tools"),
                                "Agents can execute multi-step tasks autonomously while chatbots respond to single queries",
                                "obj_agent_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module1_q2",
                                "The agent loop follows a continuous cycle of observe, think, act, and reflect",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_agent_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module1_q3",
                                "Which component defines what an agent can do and when to use each capability?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Conversation history", "Tool definitions", "User input", "Error messages"),
                                "Tool definitions",
                                "obj_agent_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module1_q4",
                                "What is the recommended approach for tool design?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Create one tool that handles all operations", "Follow single responsibility principle with focused tools", "Avoid using tools whenever possible", "Make tools as complex as possible"),
                                "Follow single responsibility principle with focused tools",
                                "obj_agent_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module1_q5",
                                "Tool descriptions should explain what the tool does, when to use it, and what it returns",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_agent_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module1_q6",
                                "In the agent loop, what happens after Claude requests a tool use?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("The conversation ends", "The tool is executed and the result is sent back to Claude", "The user must approve the tool use", "An error is returned"),
                                "The tool is executed and the result is sent back to Claude",
                                "obj_agent_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module1_q7",
                                "What should a well-designed system prompt for an agent include?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the agent's name", "Role, capabilities, constraints, reasoning guidance, and communication style", "Just a list of available tools", "Only error handling instructions"),
                                "Role, capabilities, constraints, reasoning guidance, and communication style",
                                "obj_agent_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module1_q8",
                                "Chain-of-thought prompting encourages agents to think through problems step-by-step",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_agent_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module1_q9",
                                "When should you use an agent instead of a simple chatbot?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("For simple question-answering", "When tasks require multiple steps or tool invocations", "When latency must be minimized", "When no external actions are needed"),
                                "When tasks require multiple steps or tool invocations",
                                "obj_agent_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module1_q10",
                                "Tool input schemas should use JSON Schema to specify required parameters, data types, and validation rules",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_agent_fundamentals")
                );
