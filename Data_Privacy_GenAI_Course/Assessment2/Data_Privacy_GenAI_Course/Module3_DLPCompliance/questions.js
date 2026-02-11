test.AddQuestion( new Question ("mod3_q1",
                                "In a GenAI DLP pipeline, what should happen when critical PII like SSN is detected in user input?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Log it and continue processing", "Send it to the LLM with a warning", "Only redact it if the user consents", "Block the request immediately and notify the user"),
                                "Block the request immediately and notify the user",
                                "obj_module3_assessment")
                );

test.AddQuestion( new Question ("mod3_q2",
                                "Which regex pattern correctly detects AWS access keys?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AWS-[0-9]{16}", "aws_[a-z0-9]{20}", "AK[0-9]{18}", "AKIA[0-9A-Z]{16}"),
                                "AKIA[0-9A-Z]{16}",
                                "obj_module3_assessment")
                );

test.AddQuestion( new Question ("mod3_q3",
                                "Under GDPR, what is the maximum time frame for notifying authorities of a data breach?",
                                QUESTION_TYPE_CHOICE,
                                new Array("24 hours", "7 days", "30 days", "72 hours"),
                                "72 hours",
                                "obj_module3_assessment")
                );

test.AddQuestion( new Question ("mod3_q4",
                                "What is required under HIPAA before sending Protected Health Information (PHI) to a third-party LLM provider?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User consent only", "Encryption of the data", "Annual security audits", "A Business Associate Agreement (BAA) with the provider"),
                                "A Business Associate Agreement (BAA) with the provider",
                                "obj_module3_assessment")
                );

test.AddQuestion( new Question ("mod3_q5",
                                "What is entropy-based secret detection used for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Measuring data compression ratios", "Calculating password strength", "Optimizing database queries", "Detecting high-randomness strings that may be secrets or tokens"),
                                "Detecting high-randomness strings that may be secrets or tokens",
                                "obj_module3_assessment")
                );

test.AddQuestion( new Question ("mod3_q6",
                                "Which GDPR right allows users to request all personal data an organization holds about them?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Right to be forgotten", "Right to data portability", "Right to rectification", "Right of access (Article 15)"),
                                "Right of access (Article 15)",
                                "obj_module3_assessment")
                );
