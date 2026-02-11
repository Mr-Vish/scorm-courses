test.AddQuestion( new Question ("q1",
                                "What are the five main components of a GenAI customer support system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Chat, Voice, Email, SMS, Web", "Intent Classifier, Knowledge Base, Conversation Manager, Action Engine, Escalation System", "Frontend, Backend, Database, API, Cache", "Input, Processing, Output, Storage, Analytics"),
                                "Intent Classifier, Knowledge Base, Conversation Manager, Action Engine, Escalation System",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What confidence threshold triggers an offer to connect to a human agent?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Below 50%", "Below 60%", "Below 70%", "Below 80%"),
                                "Below 70%",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which conversation flow stage involves asking clarifying questions if needed?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Greeting", "Intent detection", "Information gathering", "Resolution"),
                                "Information gathering",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What type of topics require mandatory human review according to the escalation triggers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Technical issues", "Billing questions", "Legal, safety, or financial decisions", "General inquiries"),
                                "Legal, safety, or financial decisions",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "How should knowledge base content be chunked for optimal performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By arbitrary token count", "By topic/section", "By document size", "By creation date"),
                                "By topic/section",
                                "obj_module_1")
                );