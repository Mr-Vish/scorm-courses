// Final Comprehensive Assessment - 25 Questions
// Covers all modules: Architecture, Implementation, Production, and Pros/Cons

// Module 1: Architecture (7 questions)
test.AddQuestion( new Question ("com.scorm.genai.support.final_1",
                                "What are the five core components of a GenAI customer support system?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Frontend, Backend, Database, API, Cache", "Intent Classifier, Knowledge Base, Conversation Manager, Action Engine, Escalation System", "LLM, Embeddings, Vector Store, Retrieval, Generation", "Authentication, Authorization, Logging, Monitoring, Analytics"),
                                "Intent Classifier, Knowledge Base, Conversation Manager, Action Engine, Escalation System",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_2",
                                "Which architectural pattern is recommended for enterprise-scale deployments?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Monolithic RAG", "Multi-Agent System", "Single LLM approach", "Rule-based only"),
                                "Multi-Agent System",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_3",
                                "At what confidence threshold should the system offer human agent escalation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Below 50%", "Below 60%", "Below 70%", "Below 80%"),
                                "Below 70%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_4",
                                "Which escalation trigger has CRITICAL priority requiring mandatory human review?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Low confidence responses", "Customer frustration", "Sensitive topics (legal, safety, financial)", "Complex issues"),
                                "Sensitive topics (legal, safety, financial)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_5",
                                "What should be included in the escalation package when transferring to a human agent?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the customer query", "Customer information, issue context, technical context, and sentiment analysis", "Just the conversation transcript", "Only failed AI responses"),
                                "Customer information, issue context, technical context, and sentiment analysis",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_6",
                                "Which intent classification approach provides the highest accuracy?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Zero-shot classification", "Few-shot learning", "Hybrid (Rules + ML)", "Fine-tuned models"),
                                "Hybrid (Rules + ML)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_7",
                                "How many failed resolution attempts should trigger automatic escalation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1 or more", "2 or more", "3 or more", "5 or more"),
                                "3 or more",
                                "obj_final_assessment")
                );

// Module 2: Implementation (7 questions)
test.AddQuestion( new Question ("com.scorm.genai.support.final_8",
                                "What is the recommended chunk size for RAG document chunking?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("100-200 tokens", "200-400 tokens", "400-600 tokens", "800-1000 tokens"),
                                "400-600 tokens",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_9",
                                "In a hybrid search strategy, what is the typical weight for semantic search?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("50%", "60%", "70%", "80%"),
                                "70%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_10",
                                "What is the target for First Contact Resolution (FCR) rate?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 50%", "Greater than 60%", "Greater than 70%", "Greater than 80%"),
                                "Greater than 70%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_11",
                                "What is the target Average Handle Time for customer support interactions?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1 minute", "Less than 2 minutes", "Less than 3 minutes", "Less than 5 minutes"),
                                "Less than 3 minutes",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_12",
                                "What is the target escalation rate for a well-performing system?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 20%", "Less than 30%", "Less than 40%", "Less than 50%"),
                                "Less than 30%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_13",
                                "Which HTTP status code indicates rate limit exceeded?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("401 Unauthorized", "404 Not Found", "429 Too Many Requests", "503 Service Unavailable"),
                                "429 Too Many Requests",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_14",
                                "What should be done when the knowledge base doesn't contain the answer?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Generate a plausible answer", "Acknowledge limitation and offer alternatives or escalation", "End the conversation", "Redirect to FAQ page"),
                                "Acknowledge limitation and offer alternatives or escalation",
                                "obj_final_assessment")
                );

// Module 3: Production (7 questions)
test.AddQuestion( new Question ("com.scorm.genai.support.final_15",
                                "Which regulatory framework requires right to deletion and data portability?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("HIPAA", "PCI-DSS", "GDPR", "SOC 2"),
                                "GDPR",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_16",
                                "What encryption standard should be used for sensitive data at rest?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AES-128", "AES-256", "DES", "RSA-2048"),
                                "AES-256",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_17",
                                "What is the target P95 latency for customer support responses?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1 second", "Less than 2 seconds", "Less than 3 seconds", "Less than 5 seconds"),
                                "Less than 3 seconds",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_18",
                                "What is the target overall cache hit rate for optimal performance?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("30-40%", "40-50%", "60-80%", "90-100%"),
                                "60-80%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_19",
                                "What is the minimum retention period for audit logs for compliance?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1 year", "3 years", "5 years", "7 years"),
                                "7 years",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_20",
                                "Which circuit breaker state allows limited requests to test recovery?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Closed", "Open", "Half-Open", "Testing"),
                                "Half-Open",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_21",
                                "What should be the Recovery Time Objective (RTO) for production systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 5 minutes", "Less than 15 minutes", "Less than 1 hour", "Less than 4 hours"),
                                "Less than 15 minutes",
                                "obj_final_assessment")
                );

// Pros and Cons / Practical Application (4 questions)
test.AddQuestion( new Question ("com.scorm.genai.support.final_22",
                                "What is the typical cost reduction per interaction when using GenAI vs traditional support?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("20-40%", "40-60%", "70-90%", "95-100%"),
                                "70-90%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_23",
                                "Which scenario is LEAST suitable for GenAI customer support?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("High-volume FAQ queries", "Password reset requests", "High-stakes legal decisions", "Order status lookups"),
                                "High-stakes legal decisions",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_24",
                                "What is a key limitation of GenAI in customer support?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Cannot handle multiple languages", "Lacks genuine emotional intelligence", "Too expensive to implement", "Requires constant human supervision"),
                                "Lacks genuine emotional intelligence",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.support.final_25",
                                "What percentage of issues are typically resolved through self-service with GenAI?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("30-40%", "45-55%", "65-75%", "85-95%"),
                                "65-75%",
                                "obj_final_assessment")
                );
