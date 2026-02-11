test.AddQuestion( new Question ("m1_q1",
                                "What is the primary purpose of the hierarchical nature of log levels?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To organize log files by date", "To allow filtering of messages by severity without code changes", "To compress log data more efficiently", "To encrypt sensitive log information"),
                                "To allow filtering of messages by severity without code changes",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q2",
                                "If logging is configured at INFO level, which messages will be captured?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only INFO messages", "INFO, WARN, ERROR, and FATAL", "All log levels including DEBUG and TRACE", "INFO and DEBUG only"),
                                "INFO, WARN, ERROR, and FATAL",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q3",
                                "TRACE level logging should be enabled continuously in production environments",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q4",
                                "Which log level is most appropriate for recording method entry and exit points with parameter values during development?",
                                QUESTION_TYPE_CHOICE,
                                new Array("TRACE", "DEBUG", "INFO", "WARN"),
                                "DEBUG",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q5",
                                "What is the key distinction between DEBUG and TRACE levels?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG is for errors, TRACE is for warnings", "DEBUG shows what happened, TRACE shows how it happened step by step", "TRACE is more severe than DEBUG", "DEBUG is only for production, TRACE is only for development"),
                                "DEBUG shows what happened, TRACE shows how it happened step by step",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q6",
                                "Which scenario is most appropriate for INFO level logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Logging every iteration of a loop", "Recording successful completion of a payment transaction", "Capturing detailed variable states for debugging", "Logging application termination due to critical failure"),
                                "Recording successful completion of a payment transaction",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q7",
                                "INFO level logging should be enabled in all environments including production",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q8",
                                "A system successfully falls back to default configuration when preferred settings are unavailable. Which log level is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG", "INFO", "WARN", "ERROR"),
                                "WARN",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q9",
                                "What distinguishes ERROR from FATAL level?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ERROR is less severe than WARN", "ERROR allows application to continue, FATAL requires termination", "FATAL is only for security issues", "ERROR is for development, FATAL is for production"),
                                "ERROR allows application to continue, FATAL requires termination",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("m1_q10",
                                "Which situation best represents a WARN level event?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Application startup completed successfully", "Database connection pool is 85% utilized", "User authentication failed after 5 attempts", "Application cannot start due to missing configuration"),
                                "Database connection pool is 85% utilized",
                                "obj_module_1")
                );
