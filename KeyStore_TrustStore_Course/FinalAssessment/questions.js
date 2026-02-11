// Final Comprehensive Assessment
// 12 unique questions covering all modules

// Module 1 Questions (4 questions)
test.AddQuestion( new Question ("final_q1",
                                "What is the primary difference between KeyStore and TrustStore?",
                                QUESTION_TYPE_CHOICE,
                                new Array("KeyStore is for servers, TrustStore is for clients", "KeyStore stores your identity (private keys), TrustStore stores trusted entities (CA certificates)", "KeyStore is encrypted, TrustStore is not", "There is no difference"),
                                "KeyStore stores your identity (private keys), TrustStore stores trusted entities (CA certificates)",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q2",
                                "Which KeyStore format is recommended as the default since Java 9 due to cross-platform compatibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array("JKS", "PKCS12", "JCEKS", "BKS"),
                                "PKCS12",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q3",
                                "What is the correct order for importing a CA-signed certificate and its chain into a KeyStore?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Signed certificate, then intermediate CA, then root CA", "Root CA, then intermediate CA(s), then signed certificate", "Intermediate CA, then root CA, then signed certificate", "Order does not matter"),
                                "Root CA, then intermediate CA(s), then signed certificate",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q4",
                                "What is the minimum recommended RSA key size for production environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1024 bits", "2048 bits", "3072 bits", "4096 bits"),
                                "2048 bits",
                                "obj_final_comprehensive")
                );

// Module 2 Questions (4 questions)
test.AddQuestion( new Question ("final_q5",
                                "What does the error 'PKIX path building failed' typically indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Wrong KeyStore password", "Certificate chain cannot be validated to a trusted root in TrustStore", "Expired certificate", "Wrong hostname"),
                                "Certificate chain cannot be validated to a trusted root in TrustStore",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q6",
                                "In mutual SSL (two-way SSL), which parties must have both KeyStore and TrustStore?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the server", "Only the client", "Both server and client", "Neither"),
                                "Both server and client",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q7",
                                "Which TLS version is the minimum recommended for production use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("TLS 1.0", "TLS 1.1", "TLS 1.2", "SSL 3.0"),
                                "TLS 1.2",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q8",
                                "What is the advantage of OCSP over CRL for certificate revocation checking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Smaller file size", "Real-time certificate status information", "Works offline", "No network connection required"),
                                "Real-time certificate status information",
                                "obj_final_comprehensive")
                );

// Module 3 Questions (4 questions)
test.AddQuestion( new Question ("final_q9",
                                "What is the recommended file permission for KeyStore files in production Linux systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("777", "755", "644", "600"),
                                "600",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q10",
                                "Which Java system property is used to enable SSL debugging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("java.security.debug", "javax.net.debug", "javax.net.ssl.debug", "java.ssl.debug"),
                                "javax.net.ssl.debug",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q11",
                                "What is the principle of least trust in TrustStore management?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Trust all certificates by default", "Only trust necessary CAs and certificates", "Never trust any certificates", "Trust only self-signed certificates"),
                                "Only trust necessary CAs and certificates",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q12",
                                "How many days before certificate expiration should monitoring alerts be configured?",
                                QUESTION_TYPE_CHOICE,
                                new Array("7 days only", "30 days only", "60, 30, and 7 days before expiration", "90 days only"),
                                "60, 30, and 7 days before expiration",
                                "obj_final_comprehensive")
                );
