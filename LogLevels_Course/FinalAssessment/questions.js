test.AddQuestion( new Question ("final_q1",
                                "What is the fundamental purpose of log level hierarchy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To organize logs alphabetically", "To enable severity-based filtering without code modification", "To reduce file sizes", "To improve application performance"),
                                "To enable severity-based filtering without code modification",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q2",
                                "When logging is set to WARN level, which messages are captured?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only WARN messages", "WARN and ERROR only", "WARN, ERROR, and FATAL", "All log levels"),
                                "WARN, ERROR, and FATAL",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q3",
                                "TRACE level should remain enabled in production for comprehensive troubleshooting",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q4",
                                "Which log level is most appropriate for recording application startup completion?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG", "INFO", "WARN", "ERROR"),
                                "INFO",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q5",
                                "A database query takes 8 seconds when it normally takes 1 second, but completes successfully. What log level is appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG", "INFO", "WARN", "ERROR"),
                                "WARN",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q6",
                                "What distinguishes FATAL from ERROR level?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FATAL is for security issues only", "FATAL indicates application must terminate", "FATAL is less severe than ERROR", "FATAL is only used in development"),
                                "FATAL indicates application must terminate",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q7",
                                "An external API call fails after exhausting all retry attempts. Which log level is appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG", "INFO", "WARN", "ERROR"),
                                "ERROR",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q8",
                                "Structured logging treats log entries as data structures with defined fields",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q9",
                                "Which anti-pattern describes logging the same exception at multiple layers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Log level misuse", "Logging exceptions multiple times", "Insufficient context", "Excessive logging volume"),
                                "Logging exceptions multiple times",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q10",
                                "What is the primary risk of logging sensitive information like passwords?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increased log file size", "Security vulnerabilities and compliance violations", "Slower application performance", "Difficulty in log parsing"),
                                "Security vulnerabilities and compliance violations",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q11",
                                "A system uses deprecated API that still functions correctly. What log level is appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG", "INFO", "WARN", "ERROR"),
                                "WARN",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q12",
                                "Correlation IDs enable tracing a single operation across multiple services",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q13",
                                "Where should logging focus be concentrated for maximum effectiveness?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Inside every method", "At system boundaries", "Only in error handlers", "In database queries only"),
                                "At system boundaries",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q14",
                                "What makes a log message actionable?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses technical jargon", "It includes context and suggests potential responses", "It is very brief", "It contains stack traces"),
                                "It includes context and suggests potential responses",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q15",
                                "Which centralized logging platform is open-source and consists of Elasticsearch, Logstash, and Kibana?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Splunk", "ELK Stack", "CloudWatch", "Azure Monitor"),
                                "ELK Stack",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q16",
                                "Direct log transmission to centralized systems is always preferable to file-based shipping",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q17",
                                "What is the main benefit of asynchronous logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Guarantees no log loss", "Reduces latency impact on application threads", "Eliminates need for log rotation", "Automatically structures log data"),
                                "Reduces latency impact on application threads",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q18",
                                "Which technique reduces log volume for extremely high-frequency events while maintaining statistical visibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Log compression", "Sampling or rate limiting", "Log encryption", "Log aggregation"),
                                "Sampling or rate limiting",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q19",
                                "What is the purpose of log rotation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt old logs", "To prevent disk space exhaustion", "To improve log search speed", "To compress log data"),
                                "To prevent disk space exhaustion",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q20",
                                "Standard log fields should include timestamp, log level, logger name, message, and correlation ID",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q21",
                                "Which log level is most appropriate for recording method entry/exit during development?",
                                QUESTION_TYPE_CHOICE,
                                new Array("TRACE", "DEBUG", "INFO", "WARN"),
                                "DEBUG",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q22",
                                "A cache miss occurs for infrequently accessed data. What log level is appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG or INFO", "WARN", "ERROR", "FATAL"),
                                "DEBUG or INFO",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q23",
                                "What type of alert triggers when expected log messages don't appear?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Threshold-based", "Anomaly detection", "Pattern matching", "Absence alerts"),
                                "Absence alerts",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q24",
                                "Guard clauses in logging check if a log level is enabled before constructing expensive messages",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q25",
                                "Which practice involves including unique identifiers in all log messages related to a single operation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Log aggregation", "Correlation ID usage", "Log sampling", "Structured logging"),
                                "Correlation ID usage",
                                "obj_final")
                );
