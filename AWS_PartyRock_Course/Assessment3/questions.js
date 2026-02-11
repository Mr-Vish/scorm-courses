test.AddQuestion( new Question ("q1",
                                "What is the fundamental difference between PartyRock prototypes and production AI systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PartyRock uses different AI models than production systems", "Production systems require security controls, scalability, integration capabilities, and operational management that PartyRock intentionally abstracts", "PartyRock applications are faster than production systems", "Production systems cannot use the same prompts as PartyRock"),
                                "Production systems require security controls, scalability, integration capabilities, and operational management that PartyRock intentionally abstracts",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q2",
                                "Why do production AI applications require custom user interfaces rather than PartyRock's widget-based interface?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Widget-based interfaces are slower than custom interfaces", "Production applications require tailored user experiences, branding, accessibility, mobile responsiveness, and integration with enterprise applications", "Custom interfaces use less memory", "PartyRock widgets are incompatible with production systems"),
                                "Production applications require tailored user experiences, branding, accessibility, mobile responsiveness, and integration with enterprise applications",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3",
                                "What is Amazon Bedrock's relationship to PartyRock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Bedrock is a newer version of PartyRock", "Bedrock provides the enterprise-grade production platform with the same foundation models that PartyRock uses for prototyping", "Bedrock and PartyRock are competing services", "Bedrock is only for large enterprises while PartyRock is for small businesses"),
                                "Bedrock provides the enterprise-grade production platform with the same foundation models that PartyRock uses for prototyping",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q4",
                                "What capability does Amazon Bedrock provide that PartyRock does not?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Access to foundation models", "Programmatic API access with security controls, VPC endpoints, fine-tuning, and provisioned throughput", "Widget-based application building", "Instant sharing of applications"),
                                "Programmatic API access with security controls, VPC endpoints, fine-tuning, and provisioned throughput",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q5",
                                "A healthcare organization wants to create an AI application that processes patient data. Why is PartyRock inappropriate for this use case?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PartyRock doesn't support healthcare terminology", "PartyRock lacks the security controls, data privacy protections, compliance certifications, and access controls required for handling sensitive healthcare data", "Healthcare applications require different AI models", "PartyRock is too expensive for healthcare organizations"),
                                "PartyRock lacks the security controls, data privacy protections, compliance certifications, and access controls required for handling sensitive healthcare data",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q6",
                                "What is the purpose of prompt management in production Bedrock applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To prevent users from seeing prompts", "To enable version control, A/B testing, dynamic selection, and optimization of prompts separate from application code", "To reduce the number of prompts needed", "To automatically generate prompts"),
                                "To enable version control, A/B testing, dynamic selection, and optimization of prompts separate from application code",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q7",
                                "Which of the following is a key advantage of AWS PartyRock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Production-grade security and compliance", "Zero-barrier entry enabling rapid prototyping and validation without AWS accounts, coding, or infrastructure setup", "Integration with enterprise databases", "Custom authentication and authorization"),
                                "Zero-barrier entry enabling rapid prototyping and validation without AWS accounts, coding, or infrastructure setup",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q8",
                                "Which scenario represents an appropriate use of PartyRock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploying a customer-facing chatbot handling support tickets with personal information", "Creating a prototype to validate whether AI-generated product descriptions meet quality standards before investing in production development", "Processing financial transactions with AI-powered fraud detection", "Managing employee performance reviews with sensitive HR data"),
                                "Creating a prototype to validate whether AI-generated product descriptions meet quality standards before investing in production development",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q9",
                                "What is provisioned throughput in Amazon Bedrock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A feature that automatically generates prompts", "Reserved model capacity that guarantees availability and consistent performance for production applications", "A type of widget available in PartyRock", "A security feature that limits data access"),
                                "Reserved model capacity that guarantees availability and consistent performance for production applications",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q10",
                                "Production AI applications require authentication and authorization, which PartyRock does not provide.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q11",
                                "Prompts that work well in PartyRock can generally be transferred to Amazon Bedrock production implementations with similar effectiveness.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q12",
                                "PartyRock is suitable for production deployment of customer-facing applications handling sensitive data.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_3")
                );
