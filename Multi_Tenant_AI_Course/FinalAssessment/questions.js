// Final Comprehensive Assessment
// Covers all modules


test.AddQuestion( new Question ("com.scorm.multitenant.ai.final_q1",
                                "Regarding Multi-Tenant AI: What is the primary purpose of Include tenant_id in every log: This is essential for debugging, billing, and compliance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Quota Management", "Configure rate limits and budgets", "Tenant Context Implementation", "Include tenant_id in every log: This is essential for debugging, billing, and compliance"),
                                "Include tenant_id in every log: This is essential for debugging, billing, and compliance",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.multitenant.ai.final_q2",
                                "Regarding Multi-Tenant AI: Which of the following best describes Test with multiple tenants: Verify isolation by attempting cross-tenant data access?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Test with multiple tenants: Verify isolation by attempting cross-tenant data access", "Training cost + hosting/API cost", "Multi-Tenant GenAI Platforms", "Quota Management"),
                                "Test with multiple tenants: Verify isolation by attempting cross-tenant data access",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.multitenant.ai.final_q3",
                                "Regarding Multi-Tenant AI: What role does Plan for noisy neighbors: One tenant\'s heavy usage should not degrade service for others play in Multi-Tenant AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Data Isolation Patterns", "Enforce quotas at the gateway: Check rate limits and budgets before making expensive LLM c", "Plan for noisy neighbors: One tenant\'s heavy usage should not degrade service for others", "Simple (one model for all)"),
                                "Plan for noisy neighbors: One tenant\'s heavy usage should not degrade service for others",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.multitenant.ai.final_q4",
                                "Regarding Multi-Tenant AI: What is a key characteristic of Vector stores, documents, conversation history?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Vector stores, documents, conversation history", "Database isolation: Separate database instances per tenant (strongest, highest cost)", "Complex (model per tenant lifecycle)", "Simple (one model for all)"),
                                "Vector stores, documents, conversation history",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.multitenant.ai.final_q5",
                                "Which data isolation model provides the highest level of security but at the highest cost?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Pool Model", "The Bridge Model", "The Silo Model", "The Hybrid Model"),
                                "The Silo Model",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.multitenant.ai.final_q6",
                                "What is the primary benefit of using LoRA adapters for tenant customization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It allows for full fine-tuning of the base model", "It is cost-effective and allows for supporting many customized models on shared hardware", "It eliminates the need for any base model", "It automatically redacts all PII"),
                                "It is cost-effective and allows for supporting many customized models on shared hardware",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.multitenant.ai.final_q7",
                                "In the context of multi-tenant AI, what does the 'Noisy Neighbor' effect refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A tenant who makes too much literal noise in the office", "One tenant's excessive resource consumption negatively impacting others", "A security breach from an external attacker", "A bug in the model's training data"),
                                "One tenant's excessive resource consumption negatively impacting others",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.multitenant.ai.final_q8",
                                "Which regulation often requires that personal data of EU citizens stays within the EEA?",
                                QUESTION_TYPE_CHOICE,
                                new Array("CCPA", "HIPAA", "GDPR", "FINRA"),
                                "GDPR",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.multitenant.ai.final_q9",
                                "What is the role of an AI Gateway in a multi-tenant architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To store the model's weights", "To provide a single point of entry for authentication, routing, and rate limiting", "To physically cool the GPUs", "To write the application's code"),
                                "To provide a single point of entry for authentication, routing, and rate limiting",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.multitenant.ai.final_q10",
                                "Why is PII redaction important before sending data to a third-party AI provider?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make the prompt longer", "To comply with privacy regulations and protect sensitive user data", "To increase the cost of the API call", "To improve the model's creativity"),
                                "To comply with privacy regulations and protect sensitive user data",
                                "obj_final_assessment")
                );
