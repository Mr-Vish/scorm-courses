test.AddQuestion( new Question ("mod1_q1",
                                "Which PII category poses the highest privacy risk and should always be redacted before sending to third-party LLM APIs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Quasi-identifiers like ZIP code and age", "Contact information like email addresses", "Digital identifiers like IP addresses", "Direct identifiers like SSN and passport numbers"),
                                "Direct identifiers like SSN and passport numbers",
                                "obj_module1_assessment")
                );

test.AddQuestion( new Question ("mod1_q2",
                                "What is the primary purpose of using context words in Presidio custom recognizers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To boost confidence scores when relevant terms are found nearby", "To increase detection speed", "To reduce memory usage", "To enable multi-language support"),
                                "To boost confidence scores when relevant terms are found nearby",
                                "obj_module1_assessment")
                );

test.AddQuestion( new Question ("mod1_q3",
                                "Which detection method does Presidio use for recognizing person names?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Regex patterns only", "Checksum validation", "Entropy calculation", "Named Entity Recognition (NER) with spaCy"),
                                "Named Entity Recognition (NER) with spaCy",
                                "obj_module1_assessment")
                );

test.AddQuestion( new Question ("mod1_q4",
                                "In a RAG pipeline, at which stage should PII scanning occur?",
                                QUESTION_TYPE_CHOICE,
                                new Array("At multiple stages: ingestion, retrieval, and before LLM call", "Only after LLM response generation", "Only during document ingestion", "Only in the user prompt"),
                                "At multiple stages: ingestion, retrieval, and before LLM call",
                                "obj_module1_assessment")
                );

test.AddQuestion( new Question ("mod1_q5",
                                "What is the re-identification risk associated with quasi-identifiers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They cannot be used to identify individuals", "They are always safe to share publicly", "They only pose risks in healthcare contexts", "When combined, they can uniquely identify individuals (e.g., ZIP + DOB + gender)"),
                                "When combined, they can uniquely identify individuals (e.g., ZIP + DOB + gender)",
                                "obj_module1_assessment")
                );

test.AddQuestion( new Question ("mod1_q6",
                                "When creating a custom recognizer for employee IDs with format 'EMP-12345', which component is essential?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A machine learning model", "An API call to validate the ID", "A database lookup", "A regex pattern with word boundaries like \\bEMP-\\d{5}\\b"),
                                "A regex pattern with word boundaries like \\bEMP-\\d{5}\\b",
                                "obj_module1_assessment")
                );
