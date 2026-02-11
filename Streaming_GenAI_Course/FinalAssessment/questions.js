// Final Comprehensive Assessment
// Covers all 1 modules


test.AddQuestion( new Question ("com.scorm.streaming.genai.web.final_q1",
                                "Regarding Streaming Fundamentals: Which of the following best describes Partial responses: Always display what was received, even if the stream fails mid-way?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SSE Implementation (Backend)", "Simple streaming (most common for LLMs)", "Use useRef for auto-scrolling the chat container", "Partial responses: Always display what was received, even if the stream fails mid-way"),
                                "Partial responses: Always display what was received, even if the stream fails mid-way",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.streaming.genai.web.final_q2",
                                "Regarding Streaming Fundamentals: What is the primary purpose of Server-Sent Events (SSE)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Server to client only", "Append each token to the state, triggering re-render", "Connection drops: Implement reconnection with the last received position", "Server-Sent Events (SSE)"),
                                "Server-Sent Events (SSE)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.streaming.genai.web.final_q3",
                                "Regarding Streaming Fundamentals: Which statement about Server to client only is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Partial responses: Always display what was received, even if the stream fails mid-way", "Show a typing indicator during the stream", "Server to client only", "Streaming Protocols"),
                                "Server to client only",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.streaming.genai.web.final_q4",
                                "Regarding Streaming Fundamentals: What role does Simple streaming (most common for LLMs) play in Streaming Fundamentals?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Chat with real-time features", "Partial responses: Always display what was received, even if the stream fails mid-way", "Simple streaming (most common for LLMs)", "SSE Implementation (Backend)"),
                                "Simple streaming (most common for LLMs)",
                                "obj_final_assessment")
                );