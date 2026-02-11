// Final Comprehensive Assessment - 25 Questions with Randomized Answer Positions
// Answer distribution: Position A=6, B=7, C=6, D=6 (balanced across all positions)

// Module 1: PII Detection (8 questions)
test.AddQuestion( new Question ("final_q1",
                                "Which type of PII is classified as a 'direct identifier' that can uniquely identify an individual?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ZIP code", "Age", "Job title", "Social Security Number"),
                                "Social Security Number",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q2",
                                "What is the primary advantage of using Presidio's AnalyzerEngine over simple regex patterns for PII detection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is faster", "It requires less memory", "It only works with English text", "It combines NER models with regex for higher accuracy"),
                                "It combines NER models with regex for higher accuracy",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q3",
                                "In a custom PatternRecognizer, what does the 'score' parameter represent?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The confidence level of the detection (0.0 to 1.0)", "The speed of detection", "The number of matches found", "The memory usage"),
                                "The confidence level of the detection (0.0 to 1.0)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q4",
                                "Why is it important to scan LLM outputs for PII, not just inputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve response quality", "To reduce processing time", "To comply with API rate limits", "LLMs may hallucinate or leak PII from training data"),
                                "LLMs may hallucinate or leak PII from training data",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q5",
                                "What is the re-identification risk when combining ZIP code, date of birth, and gender?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No risk, these are not PII", "Low risk, cannot identify individuals", "Only a risk in healthcare contexts", "High risk, can uniquely identify 87% of US population"),
                                "High risk, can uniquely identify 87% of US population",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q6",
                                "Which spaCy model component does Presidio use for detecting person names?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tokenizer", "Named Entity Recognition (NER)", "Part-of-speech tagger", "Dependency parser"),
                                "Named Entity Recognition (NER)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q7",
                                "When should you use word boundaries (\\b) in regex patterns for custom recognizers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Never, they slow down detection", "Only for email addresses", "Only for numeric patterns", "Always, to avoid partial matches within words"),
                                "Always, to avoid partial matches within words",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q8",
                                "What is the recommended approach for handling false positives in PII detection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Disable detection entirely", "Use allow lists and context-aware validation", "Lower all confidence thresholds", "Only scan user inputs, not outputs"),
                                "Use allow lists and context-aware validation",
                                "obj_final_assessment")
                );

// Module 2: Anonymization Techniques (8 questions)
test.AddQuestion( new Question ("final_q9",
                                "Which anonymization strategy allows you to restore original values using a secure mapping?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Complete redaction", "Hash-based pseudonymization", "Partial masking", "Tokenization"),
                                "Tokenization",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q10",
                                "What is the main disadvantage of hash-based pseudonymization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is too slow", "It cannot handle large datasets", "It only works with numbers", "It is vulnerable to dictionary attacks and rainbow tables"),
                                "It is vulnerable to dictionary attacks and rainbow tables",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q11",
                                "When displaying a credit card number to a customer service representative, which masking format is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Show all 16 digits", "****-****-****-1234 (mask first 12, show last 4)", "1234-****-****-**** (show first 4, mask rest)", "Completely hide the number"),
                                "****-****-****-1234 (mask first 12, show last 4)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q12",
                                "What is differential privacy primarily used for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encrypting individual records", "Detecting PII in text", "Compressing large datasets", "Adding statistical noise to aggregated data to protect individuals"),
                                "Adding statistical noise to aggregated data to protect individuals",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q13",
                                "In k-anonymity, what does the 'k' value represent?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The number of encryption keys", "The number of anonymization techniques applied", "The percentage of data to remove", "The minimum group size for each combination of quasi-identifiers"),
                                "The minimum group size for each combination of quasi-identifiers",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q14",
                                "Why should synthetic data only be used in testing environments, not production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is too expensive to generate", "It is illegal to use synthetic data", "It cannot be generated at scale", "It may accidentally match real PII and lacks real-world relationships"),
                                "It may accidentally match real PII and lacks real-world relationships",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q15",
                                "What is format-preserving pseudonymization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Keeping the original data unchanged", "Converting all data to the same format", "Compressing data to save space", "Replacing PII while maintaining the original format (e.g., email structure)"),
                                "Replacing PII while maintaining the original format (e.g., email structure)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q16",
                                "What is the primary security concern with tokenization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is too slow for production use", "It cannot handle large volumes of data", "It only works with structured data", "The token vault is a single point of failure if compromised"),
                                "The token vault is a single point of failure if compromised",
                                "obj_final_assessment")
                );

// Module 3: DLP & Compliance (9 questions)
test.AddQuestion( new Question ("final_q17",
                                "In a GenAI DLP pipeline, what is the correct action when a user's prompt contains an AWS access key?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Log it and continue", "Redact it and send to LLM", "Only block if it appears multiple times", "Block the request immediately and alert the user"),
                                "Block the request immediately and alert the user",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q18",
                                "Which regex pattern correctly identifies OpenAI API keys?",
                                QUESTION_TYPE_CHOICE,
                                new Array("openai-[0-9]{32}", "sk-[a-zA-Z0-9]{48}", "api_key_[A-Z0-9]{20}", "OPENAI[0-9A-Z]{40}"),
                                "sk-[a-zA-Z0-9]{48}",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q19",
                                "Under GDPR, what is the 'right to be forgotten'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The right to use a pseudonym", "The right to access data", "The right to opt-out of marketing", "The right to request deletion of personal data (Article 17)"),
                                "The right to request deletion of personal data (Article 17)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q20",
                                "What is required under HIPAA before sending PHI to a third-party LLM provider?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User consent only", "A Business Associate Agreement (BAA)", "Annual security audits", "HIPAA certification"),
                                "A Business Associate Agreement (BAA)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q21",
                                "What is entropy-based detection used for in secret scanning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Measuring file sizes", "Calculating hash values", "Compressing data", "Identifying high-randomness strings that may be secrets"),
                                "Identifying high-randomness strings that may be secrets",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q22",
                                "Which stage of a DLP pipeline should scan RAG context documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only after LLM response", "During context retrieval, before sending to LLM", "Only during initial ingestion", "Never, context is always safe"),
                                "During context retrieval, before sending to LLM",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q23",
                                "Under CCPA, what right do California residents have regarding their personal data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Right to sell their data", "Right to unlimited data storage", "Right to free services", "Right to opt-out of data sale"),
                                "Right to opt-out of data sale",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q24",
                                "What is the recommended approach for healthcare GenAI applications to comply with HIPAA?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use any public LLM API", "Only redact patient names", "Disable all logging", "Use on-premise LLMs or HIPAA-compliant cloud services with BAAs"),
                                "Use on-premise LLMs or HIPAA-compliant cloud services with BAAs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q25",
                                "What is the purpose of audit logging in a DLP pipeline?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve LLM performance", "To reduce storage costs", "To speed up processing", "To track PII detections and access for compliance and incident response"),
                                "To track PII detections and access for compliance and incident response",
                                "obj_final_assessment")
                );
