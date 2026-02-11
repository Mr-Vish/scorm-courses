test.AddQuestion( new Question ("q1_m1",
                                "What is the primary limitation that buffer memory faces in long conversations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It loses information from early conversation turns", "It cannot reference previous messages accurately", "Token consumption grows unbounded and eventually exceeds context window limits", "It requires complex implementation logic"),
                                "Token consumption grows unbounded and eventually exceeds context window limits",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2_m1",
                                "Which memory type is most appropriate for a customer support chatbot handling discrete, independent issues?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Buffer memory", "Window memory", "Entity memory", "Long-term memory"),
                                "Window memory",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3_m1",
                                "What distinguishes entity memory from other memory types?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It maintains complete conversation history", "It stores structured facts about specific entities rather than conversational flow", "It uses sliding windows to manage context", "It compresses older messages automatically"),
                                "It stores structured facts about specific entities rather than conversational flow",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4_m1",
                                "In the token budget allocation strategy, which component should receive the highest priority and never be truncated?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Recent conversation messages", "System prompt", "External knowledge base context", "Response generation space"),
                                "System prompt",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5_m1",
                                "A conversation has reached 25 turns and token usage is at 75% of the context window. According to dynamic adjustment principles, what action should be taken?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Delete the oldest messages completely", "Increase compression level for older conversation segments", "Stop accepting new user messages", "Reduce the system prompt length"),
                                "Increase compression level for older conversation segments",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6_m1",
                                "What is the main advantage of hierarchical summarization over rolling window summarization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It requires fewer API calls", "It preserves more detail for moderately old messages through multiple compression levels", "It is simpler to implement", "It eliminates all information loss"),
                                "It preserves more detail for moderately old messages through multiple compression levels",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7_m1",
                                "In importance-weighted summarization, which type of message content should be assigned the highest importance score?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Greetings and pleasantries", "Acknowledgments and confirmations", "Decisions made and commitments given", "Conversational filler phrases"),
                                "Decisions made and commitments given",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8_m1",
                                "What is a key disadvantage of summary memory compared to buffer memory?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It cannot handle long conversations", "Summarization is inherently lossy and may omit or distort information", "It requires more tokens than buffer memory", "It cannot be implemented with current LLM technology"),
                                "Summarization is inherently lossy and may omit or distort information",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q9_m1",
                                "According to the priority ordering framework, which information should be included at Priority Level 2 (High)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("System prompt", "Recent messages (last 3-5 exchanges)", "External knowledge base articles", "Long-term user preferences"),
                                "Recent messages (last 3-5 exchanges)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q10_m1",
                                "What is the recommended approach for timing summarization to minimize user-perceived latency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Summarize after every single message", "Wait for token usage to reach 100% before summarizing", "Use a hybrid approach: monitor usage and wait for natural conversation boundaries", "Never summarize during active conversations"),
                                "Use a hybrid approach: monitor usage and wait for natural conversation boundaries",
                                "obj_module_1")
                );
