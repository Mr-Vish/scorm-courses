// Final Comprehensive Assessment
// Covers all 3 modules with unique questions

// Module 1 Questions (5 questions)
test.AddQuestion( new Question ("qf1",
                                "What is the fundamental challenge that all memory architectures must address in conversational AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User authentication", "The context window constraint limiting how much information can be included in each LLM request", "Network latency", "Database storage costs"),
                                "The context window constraint limiting how much information can be included in each LLM request",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf2",
                                "Which memory type would be most appropriate for a chatbot that needs to handle indefinitely long conversations while maintaining bounded token usage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Buffer memory", "Window memory", "Entity memory only", "No memory system"),
                                "Window memory",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf3",
                                "In a token budget allocation strategy with an 8,000 token context window, what is a typical allocation percentage for the system prompt?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1-2%", "5-10%", "25-30%", "40-50%"),
                                "5-10%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf4",
                                "What is the main trade-off introduced by summary memory compared to buffer memory?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Summary memory is more expensive", "Summary memory enables longer conversations but introduces information loss through compression", "Summary memory requires more storage space", "Summary memory cannot handle recent messages"),
                                "Summary memory enables longer conversations but introduces information loss through compression",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf5",
                                "According to the priority ordering framework, which information should be included at the highest priority level?",
                                QUESTION_TYPE_CHOICE,
                                new Array("External knowledge base articles", "System prompt defining chatbot behavior and constraints", "Long-term user preferences", "Summarized history from previous sessions"),
                                "System prompt defining chatbot behavior and constraints",
                                "obj_final_assessment")
                );

// Module 2 Questions (5 questions)
test.AddQuestion( new Question ("qf6",
                                "In a three-tier memory architecture, which tier is responsible for maintaining persistent information across multiple sessions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tier 1: Working Memory", "Tier 2: Session Memory", "Tier 3: Long-Term Memory", "All tiers equally"),
                                "Tier 3: Long-Term Memory",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf7",
                                "What is the primary function of vector embeddings in conversational memory systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To compress data for storage efficiency", "To represent text as numerical vectors that capture semantic meaning for similarity search", "To encrypt sensitive user information", "To generate conversation summaries automatically"),
                                "To represent text as numerical vectors that capture semantic meaning for similarity search",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf8",
                                "In RAG-based memory systems, what is 'query-driven retrieval'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retrieving memories automatically at session start", "Retrieving memories when users explicitly request past information", "Retrieving memories continuously in the background", "Retrieving memories based on system performance metrics"),
                                "Retrieving memories when users explicitly request past information",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf9",
                                "What problem does 'temporal decay' address in memory retrieval systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Database performance degradation over time", "The need to prioritize recent information over older memories that may be less relevant", "Encryption key expiration", "User session timeout"),
                                "The need to prioritize recent information over older memories that may be less relevant",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf10",
                                "Which hybrid memory pattern combines structured fact storage with recent conversational context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Window + Summary Hybrid", "Entity + Window Hybrid", "Multi-Session Summary Chain", "Buffer + Entity Hybrid"),
                                "Entity + Window Hybrid",
                                "obj_final_assessment")
                );

// Module 3 Questions (5 questions)
test.AddQuestion( new Question ("qf11",
                                "What is the purpose of 'contextual adaptation' in dynamic personalization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt user context for security", "To adjust chatbot behavior based on current conversation context, even if it differs from general preferences", "To compress context to save tokens", "To share context across multiple users"),
                                "To adjust chatbot behavior based on current conversation context, even if it differs from general preferences",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf12",
                                "Which privacy principle requires that data collected for one purpose should not be used for unrelated purposes without additional consent?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Data minimization", "Purpose specification", "Consent and transparency", "Security and confidentiality"),
                                "Purpose specification",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf13",
                                "Under CCPA, what right allows users to request disclosure of what personal data has been collected about them?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Right to Delete", "Right to Know", "Right to Opt-Out", "Right to Portability"),
                                "Right to Know",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf14",
                                "Which ethical principle emphasizes that AI systems should not cause harm to users or society?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Autonomy", "Beneficence", "Non-maleficence", "Justice"),
                                "Non-maleficence",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("qf15",
                                "What is a key safeguard against unhealthy emotional dependency on memory-enabled chatbots?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increasing personalization to strengthen the bond", "Clearly communicating that AI is not a substitute for human relationships", "Storing more emotional conversation data", "Removing all memory features"),
                                "Clearly communicating that AI is not a substitute for human relationships",
                                "obj_final_assessment")
                );
