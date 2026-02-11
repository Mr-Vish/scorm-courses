test.AddQuestion( new Question ("com.scorm.genai.support.module1_1",
                                "What are the five core components of a GenAI customer support system?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Chat Interface, Database, API, Frontend, Backend", "Intent Classifier, Knowledge Base, Conversation Manager, Action Engine, Escalation System", "LLM, Vector Store, Cache, Queue, Load Balancer", "Authentication, Authorization, Logging, Monitoring, Analytics"),
                                "Intent Classifier, Knowledge Base, Conversation Manager, Action Engine, Escalation System",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module1_2",
                                "Which architectural pattern is recommended for enterprise-scale GenAI customer support?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Monolithic RAG", "Multi-Agent System", "Single LLM approach", "Rule-based only"),
                                "Multi-Agent System",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module1_3",
                                "What is the typical accuracy range for fine-tuned intent classification models?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("60-70%", "70-80%", "85-95%", "95-100%"),
                                "85-95%",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module1_4",
                                "At what confidence threshold should the system offer to connect to a human agent?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Below 50%", "Below 60%", "Below 70%", "Below 80%"),
                                "Below 70%",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module1_5",
                                "Which conversation state dimension tracks pending actions and completed operations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Session State", "User Context", "Intent State", "Action State"),
                                "Action State",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module1_6",
                                "What should be included in the escalation package when transferring to a human agent?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the customer name and query", "Customer information, issue context, technical context, and sentiment analysis", "Just the conversation transcript", "Only the AI's attempted solutions"),
                                "Customer information, issue context, technical context, and sentiment analysis",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module1_7",
                                "Which escalation trigger has CRITICAL priority?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Low confidence", "Customer frustration", "Sensitive topics (legal, safety, financial)", "Complex issue"),
                                "Sensitive topics (legal, safety, financial)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module1_8",
                                "How many failed resolution attempts should trigger automatic escalation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1 or more", "2 or more", "3 or more", "5 or more"),
                                "3 or more",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module1_9",
                                "Multi-intent queries should be handled by addressing intents sequentially while maintaining context",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.module1_10",
                                "Which action type requires customer authentication plus business rules validation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Information Retrieval", "Ticket Management", "Transaction Processing", "Notification Triggers"),
                                "Transaction Processing",
                                "obj_module_1")
                );
