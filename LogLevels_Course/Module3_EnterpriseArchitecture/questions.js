test.AddQuestion( new Question ("m3_q1",
                                "What is the primary benefit of centralized logging in distributed systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces application memory usage", "Provides unified access to logs from all sources", "Eliminates the need for log rotation", "Automatically fixes application errors"),
                                "Provides unified access to logs from all sources",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q2",
                                "Which log transmission pattern decouples application performance from log transmission by writing to local files first?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Direct transmission", "File-based with log shipping", "In-memory buffering", "Database logging"),
                                "File-based with log shipping",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q3",
                                "Asynchronous logging guarantees that no log messages will ever be lost",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q4",
                                "What is the main advantage of using a message queue pattern for log transmission?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Eliminates all network latency", "Provides natural buffering and resilience to downstream failures", "Reduces log file size", "Automatically encrypts all log data"),
                                "Provides natural buffering and resilience to downstream failures",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q5",
                                "Which strategy is most appropriate for handling extremely high-frequency log events?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Log everything at FATAL level", "Implement sampling or rate limiting", "Disable logging completely", "Use only synchronous logging"),
                                "Implement sampling or rate limiting",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q6",
                                "What is the purpose of using guard clauses in logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt sensitive log data", "To check if logging is enabled before expensive message construction", "To prevent unauthorized log access", "To compress log files automatically"),
                                "To check if logging is enabled before expensive message construction",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q7",
                                "Correlation IDs should be different for each service in a distributed transaction to maintain service independence",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q8",
                                "Which field format is recommended for timestamps in enterprise logging standards?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Unix epoch time", "ISO 8601 with timezone", "MM/DD/YYYY HH:MM:SS", "Relative time since application start"),
                                "ISO 8601 with timezone",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q9",
                                "What type of alert strategy triggers when error rates exceed historical baselines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Threshold-based alerts", "Anomaly detection", "Pattern matching", "Absence alerts"),
                                "Anomaly detection",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q10",
                                "Which compliance regulation requires the ability to delete logs containing personal data upon request?",
                                QUESTION_TYPE_CHOICE,
                                new Array("HIPAA", "PCI-DSS", "GDPR", "SOX"),
                                "GDPR",
                                "obj_module_3")
                );
