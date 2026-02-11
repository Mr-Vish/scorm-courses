// Module 1 Assessment - KeyStore Fundamentals
// 8 unique questions covering KeyStore architecture, certificate management, and Java configuration

test.AddQuestion( new Question ("m1_q1",
                                "What is the primary purpose of a KeyStore in Java applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To store database connection strings", "To store cryptographic keys and certificates", "To store application configuration", "To store user passwords"),
                                "To store cryptographic keys and certificates",
                                "obj_module1_keystore")
                );

test.AddQuestion( new Question ("m1_q2",
                                "Which KeyStore format is recommended as the default since Java 9?",
                                QUESTION_TYPE_CHOICE,
                                new Array("JKS", "PKCS12", "JCEKS", "BKS"),
                                "PKCS12",
                                "obj_module1_keystore")
                );

test.AddQuestion( new Question ("m1_q3",
                                "What are the two levels of password protection in a KeyStore?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User password and admin password", "KeyStore password and key password", "Read password and write password", "Public password and private password"),
                                "KeyStore password and key password",
                                "obj_module1_keystore")
                );

test.AddQuestion( new Question ("m1_q4",
                                "In a certificate chain, what is the position of the end-entity certificate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Last (root)", "Middle", "First (leaf certificate)", "Can be anywhere"),
                                "First (leaf certificate)",
                                "obj_module1_keystore")
                );

test.AddQuestion( new Question ("m1_q5",
                                "What is the correct order for importing a CA-signed certificate into a KeyStore?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Import signed certificate first, then CA certificates", "Import root CA, then intermediate CA(s), then signed certificate", "Import intermediate CA first, then root CA, then signed certificate", "Order does not matter"),
                                "Import root CA, then intermediate CA(s), then signed certificate",
                                "obj_module1_keystore")
                );

test.AddQuestion( new Question ("m1_q6",
                                "What is the minimum recommended RSA key size for production use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("512 bits", "1024 bits", "2048 bits", "4096 bits"),
                                "2048 bits",
                                "obj_module1_keystore")
                );

test.AddQuestion( new Question ("m1_q7",
                                "Which Java system property specifies the path to the KeyStore file?",
                                QUESTION_TYPE_CHOICE,
                                new Array("java.security.keystore", "javax.net.ssl.keyStore", "javax.security.keyStorePath", "java.net.ssl.keystoreFile"),
                                "javax.net.ssl.keyStore",
                                "obj_module1_keystore")
                );

test.AddQuestion( new Question ("m1_q8",
                                "What is the recommended file permission for KeyStore files in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("777 (read/write/execute for all)", "755 (read/execute for all, write for owner)", "644 (read for all, write for owner)", "600 (read/write for owner only)"),
                                "600 (read/write for owner only)",
                                "obj_module1_keystore")
                );
