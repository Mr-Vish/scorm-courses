test.AddQuestion( new Question ("com.scorm.claude_agent.module2_q1",
                                "What is the main benefit of parallel tool execution in agents?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("It's easier to implement", "It reduces latency by executing independent operations simultaneously", "It uses less memory", "It prevents errors"),
                                "It reduces latency by executing independent operations simultaneously",
                                "obj_advanced_patterns")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module2_q2",
                                "Sequential tool execution is used when tool calls have data dependencies on previous results",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_advanced_patterns")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module2_q3",
                                "Which type of memory persists across multiple sessions?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Conversation memory", "Working memory", "Long-term memory", "Tool result memory"),
                                "Long-term memory",
                                "obj_advanced_patterns")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module2_q4",
                                "What is the purpose of a sliding window in context management?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt messages", "To keep recent messages while discarding older ones to manage context limits", "To speed up processing", "To compress data"),
                                "To keep recent messages while discarding older ones to manage context limits",
                                "obj_advanced_patterns")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module2_q5",
                                "Working memory stores temporary information relevant to the current task",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_advanced_patterns")
                );
                
test.AddQuestion( new Question ("com.scorm.claude_agent.module2_q6",
                                "In a hierarchical agent architecture, what is the role of the manager agent?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Execute all tools directly", "Decompose tasks and delegate to specialist worker agents", "Store data", "Handle errors only"),
                                "Decompose tasks and delegate to specialist worker agents",
                                "obj_advanced_patterns")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module2_q7",
                                "Which workflow pattern is best when operations are independent and can run concurrently?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Linear workflow", "Branching workflow", "Parallel workflow", "Iterative workflow"),
                                "Parallel workflow",
                                "obj_advanced_patterns")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module2_q8",
                                "Checkpointing in long-running workflows allows resuming from the last saved milestone if a failure occurs",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_advanced_patterns")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module2_q9",
                                "What is a compensating action in workflow error recovery?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Retrying the failed operation", "Undoing partial work when a workflow fails", "Logging the error", "Notifying the user"),
                                "Undoing partial work when a workflow fails",
                                "obj_advanced_patterns")
                );

test.AddQuestion( new Question ("com.scorm.claude_agent.module2_q10",
                                "Human-in-the-loop workflows include approval gates where agents request human approval before executing certain actions",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_advanced_patterns")
                );
