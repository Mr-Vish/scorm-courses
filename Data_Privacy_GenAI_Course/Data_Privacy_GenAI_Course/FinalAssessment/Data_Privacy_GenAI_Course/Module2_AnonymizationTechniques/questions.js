test.AddQuestion( new Question ("mod2_q1",
                                "Which anonymization strategy provides the highest utility while maintaining reversibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Complete redaction with placeholders", "Partial masking", "Hash-based pseudonymization", "Tokenization with secure token vault"),
                                "Tokenization with secure token vault",
                                "obj_module2_assessment")
                );

test.AddQuestion( new Question ("mod2_q2",
                                "What is the main advantage of hash-based pseudonymization over complete redaction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is faster to process", "It requires less storage", "It is easier to implement", "It maintains consistent mapping for analytics while protecting privacy"),
                                "It maintains consistent mapping for analytics while protecting privacy",
                                "obj_module2_assessment")
                );

test.AddQuestion( new Question ("mod2_q3",
                                "When should synthetic data replacement be used?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For testing, demos, and training environments only", "In production systems with real customer data", "For all PII regardless of context", "Only for healthcare applications"),
                                "For testing, demos, and training environments only",
                                "obj_module2_assessment")
                );

test.AddQuestion( new Question ("mod2_q4",
                                "What is k-anonymity in the context of dataset release?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encrypting data k times", "Using k different anonymization techniques", "Removing k% of the data", "Ensuring each combination of quasi-identifiers appears at least k times"),
                                "Ensuring each combination of quasi-identifiers appears at least k times",
                                "obj_module2_assessment")
                );

test.AddQuestion( new Question ("mod2_q5",
                                "Which masking approach is most appropriate for displaying credit card numbers in customer service interfaces?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Show all digits", "Show first 4 digits only", "Mask all digits", "Mask first 12 digits, show last 4 (****-****-****-1234)"),
                                "Mask first 12 digits, show last 4 (****-****-****-1234)",
                                "obj_module2_assessment")
                );

test.AddQuestion( new Question ("mod2_q6",
                                "What is differential privacy used for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encrypting individual records", "Detecting PII in text", "Generating synthetic data", "Adding noise to aggregated data to protect individual privacy"),
                                "Adding noise to aggregated data to protect individual privacy",
                                "obj_module2_assessment")
                );
