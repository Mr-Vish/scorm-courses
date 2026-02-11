test.AddQuestion( new Question ("com.scorm.claude_agent.final_q1",
                                "What is the fundamental difference between an AI agent and a chatbot?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Agents use better AI models", "Agents can execute multi-step tasks autonomously while chatbots respond to single queries", "Chatbots are more expensive", "Agents cannot use tools"),
                                "Agents can execute multi-step tasks autonomously while chatbots respond to single queries",
                                "obj_final_assessment")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.final_q2",
                                "The agent loop follows the cycle of observe, think, act, and reflect",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.final_q3",
                                "Which tool design principle states that each tool should do one thing well?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Multiple responsibility", "Single responsibility", "Shared responsibility", "No responsibility"),
                                "Single responsibility",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q4",
                                "What should a system prompt for an agent include?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Only tool names", "Role, capabilities, constraints, reasoning guidance, and communication style", "Just error messages", "Only examples"),
                                "Role, capabilities, constraints, reasoning guidance, and communication style",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q5",
                                "Chain-of-thought prompting encourages agents to think through problems step-by-step",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q6",
                                "What is the main benefit of parallel tool execution?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Easier to code", "Reduces latency by executing independent operations simultaneously", "Uses less memory", "Prevents all errors"),
                                "Reduces latency by executing independent operations simultaneously",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q7",
                                "Sequential tool execution is used when tools have data dependencies on previous results",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q8",
                                "Which type of memory persists across multiple sessions?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Conversation memory", "Working memory", "Long-term memory", "Temporary memory"),
                                "Long-term memory",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q9",
                                "What is the purpose of a sliding window in context management?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt data", "To keep recent messages while discarding older ones to manage context limits", "To speed up processing", "To store everything"),
                                "To keep recent messages while discarding older ones to manage context limits",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q10",
                                "In hierarchical agent architecture, the manager agent decomposes tasks and delegates to specialist workers",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q11",
                                "Which workflow pattern is best when operations are independent and can run concurrently?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Linear workflow", "Branching workflow", "Parallel workflow", "Sequential workflow"),
                                "Parallel workflow",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q12",
                                "Checkpointing in long-running workflows allows resuming from the last saved milestone if failure occurs",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q13",
                                "What is the primary purpose of iteration limits in guardrails?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To save money", "To prevent infinite loops by capping agent turns", "To improve speed", "To reduce complexity"),
                                "To prevent infinite loops by capping agent turns",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q14",
                                "Tool allowlists restrict which tools agents can use for security purposes",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q15",
                                "What is exponential backoff in retry logic?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Retrying immediately", "Increasing wait time between retries exponentially", "Decreasing wait time", "Never retrying"),
                                "Increasing wait time between retries exponentially",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q16",
                                "Which error handling strategy provides reduced functionality when systems fail?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Retry logic", "Graceful degradation", "Immediate failure", "Ignore errors"),
                                "Graceful degradation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q17",
                                "Circuit breakers stop accepting requests when error rates exceed a threshold",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q18",
                                "What is the purpose of canary deployment?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploy to all users immediately", "Deploy new version to small subset of users first", "Skip all testing", "Reduce all costs"),
                                "Deploy new version to small subset of users first",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q19",
                                "Audit logging records all agent actions for security review and debugging",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q20",
                                "What should agents do when uncertain about action safety?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Execute anyway", "Default deny and request human review", "Ignore the request", "Retry indefinitely"),
                                "Default deny and request human review",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q21",
                                "Working memory stores temporary information relevant to the current task",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q22",
                                "What is a compensating action in workflow error recovery?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Retrying the operation", "Undoing partial work when a workflow fails", "Logging the error", "Ignoring the failure"),
                                "Undoing partial work when a workflow fails",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q23",
                                "Horizontal scaling adds more agent instances to handle increased load",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q24",
                                "Which metric measures the percentage of tasks completed successfully?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Response time", "Success rate", "Token count", "Error count"),
                                "Success rate",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.final_q25",
                                "Human-in-the-loop workflows include approval gates where agents request human approval before executing certain actions",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );
