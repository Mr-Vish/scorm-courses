// Module 4 Assessment: Advantages, Limitations, and Best Practices
// Tests understanding of trade-offs and implementation considerations

test.AddQuestion( new Question ("com.scorm.aiincident.mod4.q1",
                                "According to the module, by what percentage can AI reduce MTTR (Mean Time To Resolution)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-20%", "30-40%", "50-70%", "90-95%"),
                                "50-70%",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod4.q2",
                                "What is a 'hallucination' in the context of AI-assisted incident response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When AI processes too much data", "When AI generates plausible-sounding but incorrect explanations", "When AI crashes", "When AI takes too long to respond"),
                                "When AI generates plausible-sounding but incorrect explanations",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod4.q3",
                                "Which mitigation strategy addresses data privacy concerns when using external LLM APIs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use faster APIs", "Redact sensitive data before sending to LLMs and use on-premise deployments for sensitive data", "Send more data", "Disable logging"),
                                "Redact sensitive data before sending to LLMs and use on-premise deployments for sensitive data",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod4.q4",
                                "What is the typical annual cost range for LLM API calls in AI-assisted incident response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$1,000 - $5,000", "$10,000 - $100,000", "$500,000 - $1,000,000", "$5,000,000+"),
                                "$10,000 - $100,000",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod4.q5",
                                "According to best practices, how should organizations start implementing AI-assisted incident response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploy to all systems immediately", "Start small with log summarization for a single service, prove value, then expand", "Wait for perfect AI accuracy", "Hire a dedicated AI team first"),
                                "Start small with log summarization for a single service, prove value, then expand",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod4.q6",
                                "Which scenario represents a POOR fit for AI-assisted incident response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("High incident frequency with complex distributed systems", "Simple monolithic systems with rare incidents", "Large log volumes requiring cross-service correlation", "Small operations teams managing complex systems"),
                                "Simple monolithic systems with rare incidents",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod4.q7",
                                "What risk is associated with over-reliance on AI in incident response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI becomes too expensive", "Engineers lose manual troubleshooting skills, creating problems when AI fails", "AI processes data too quickly", "AI requires too much training"),
                                "Engineers lose manual troubleshooting skills, creating problems when AI fails",
                                "obj_module_4")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod4.q8",
                                "Which future trend involves AI predicting incidents before they occur?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Multimodal AI", "Proactive Incident Prevention", "Collaborative AI", "Specialized Models"),
                                "Proactive Incident Prevention",
                                "obj_module_4")
                );
