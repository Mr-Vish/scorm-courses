// Module 2 Assessment - TrustStore and SSL/TLS
// 8 unique questions covering TrustStore, SSL handshake, and PKI

test.AddQuestion( new Question ("m2_q1",
                                "What is the primary purpose of a TrustStore?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Store private keys", "Store trusted CA certificates for validating remote parties", "Store application passwords", "Store database credentials"),
                                "Store trusted CA certificates for validating remote parties",
                                "obj_module2_truststore")
                );

test.AddQuestion( new Question ("m2_q2",
                                "What is the default password for Java's cacerts TrustStore?",
                                QUESTION_TYPE_CHOICE,
                                new Array("password", "changeit", "admin", "truststore"),
                                "changeit",
                                "obj_module2_truststore")
                );

test.AddQuestion( new Question ("m2_q3",
                                "In one-way SSL, which party uses a KeyStore to prove identity?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Client only", "Server only", "Both client and server", "Neither"),
                                "Server only",
                                "obj_module2_truststore")
                );

test.AddQuestion( new Question ("m2_q4",
                                "What additional step occurs in mutual SSL compared to one-way SSL?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Server sends certificate", "Client sends certificate to prove identity", "Cipher suite negotiation", "Key exchange"),
                                "Client sends certificate to prove identity",
                                "obj_module2_truststore")
                );

test.AddQuestion( new Question ("m2_q5",
                                "Which TLS version is the minimum recommended for production use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("TLS 1.0", "TLS 1.1", "TLS 1.2", "SSL 3.0"),
                                "TLS 1.2",
                                "obj_module2_truststore")
                );

test.AddQuestion( new Question ("m2_q6",
                                "What does the error 'PKIX path building failed' typically indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Wrong password", "Certificate chain cannot be validated to trusted root", "Expired certificate", "Wrong hostname"),
                                "Certificate chain cannot be validated to trusted root",
                                "obj_module2_truststore")
                );

test.AddQuestion( new Question ("m2_q7",
                                "Which certificate validation level requires the most rigorous verification?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Domain Validated (DV)", "Organization Validated (OV)", "Extended Validation (EV)", "Self-Signed"),
                                "Extended Validation (EV)",
                                "obj_module2_truststore")
                );

test.AddQuestion( new Question ("m2_q8",
                                "What is the advantage of OCSP over CRL for certificate revocation checking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Smaller file size", "Real-time status information", "Works offline", "No network required"),
                                "Real-time status information",
                                "obj_module2_truststore")
                );
