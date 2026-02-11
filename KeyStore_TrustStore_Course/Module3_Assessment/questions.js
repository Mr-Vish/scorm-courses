// Module 3 Assessment - Implementation and Best Practices
// 8 unique questions covering troubleshooting, security, and real-world applications

test.AddQuestion( new Question ("m3_q1",
                                "What is the first step in systematic troubleshooting of SSL/TLS issues?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Restart the application", "Enable SSL debugging", "Reinstall certificates", "Change passwords"),
                                "Enable SSL debugging",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q2",
                                "What is the recommended file permission for KeyStore files in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("777 (full access for all)", "755 (read/execute for all)", "644 (read for all)", "600 (read/write for owner only)"),
                                "600 (read/write for owner only)",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q3",
                                "Which secrets management approach provides the highest security level?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Environment variables", "Encrypted configuration files", "Hardware Security Module (HSM)", "Configuration files"),
                                "Hardware Security Module (HSM)",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q4",
                                "How many days before certificate expiration should alerts be configured?",
                                QUESTION_TYPE_CHOICE,
                                new Array("7 days only", "30 days only", "60, 30, and 7 days", "90 days only"),
                                "60, 30, and 7 days",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q5",
                                "What is the principle of least trust in TrustStore management?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Trust all certificates by default", "Only trust necessary CAs and certificates", "Never trust any certificates", "Trust only self-signed certificates"),
                                "Only trust necessary CAs and certificates",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q6",
                                "In a microservices architecture using mutual SSL, what does each service require?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only a TrustStore", "Only a KeyStore", "Both KeyStore with service certificate and TrustStore with CA certificates", "Neither KeyStore nor TrustStore"),
                                "Both KeyStore with service certificate and TrustStore with CA certificates",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q7",
                                "What is a key advantage of automated certificate management?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Eliminates need for monitoring", "Reduces human error and enables automatic renewal", "Makes certificates free", "Removes security requirements"),
                                "Reduces human error and enables automatic renewal",
                                "obj_module3_implementation")
                );

test.AddQuestion( new Question ("m3_q8",
                                "Which certificate validation level is most appropriate for financial services applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Domain Validated (DV)", "Self-Signed", "Extended Validation (EV)", "No validation required"),
                                "Extended Validation (EV)",
                                "obj_module3_implementation")
                );
