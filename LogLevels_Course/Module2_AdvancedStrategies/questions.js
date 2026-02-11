test.AddQuestion( new Question ("m2_q1",
                                "An API call succeeds after two retry attempts. What is the most appropriate log level?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG", "INFO", "WARN", "ERROR"),
                                "WARN",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q2",
                                "What is the key criterion for distinguishing ERROR from WARN?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The severity of the exception thrown", "Whether the operation achieved its intended purpose", "The number of retries attempted", "Whether the event occurs in production or development"),
                                "Whether the operation achieved its intended purpose",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q3",
                                "Logging passwords or API keys in log messages is acceptable if the log level is set to DEBUG",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q4",
                                "A batch job processes 100 records: 98 succeed and 2 fail due to data validation issues. How should this be logged?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ERROR for the entire batch", "INFO for completion, WARN or ERROR for individual failures", "WARN for everything", "DEBUG only since most succeeded"),
                                "INFO for completion, WARN or ERROR for individual failures",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q5",
                                "What is the primary consequence of logging the same exception at multiple layers as it propagates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improved debugging capability", "Inflated error counts and misleading metrics", "Better performance", "Enhanced security"),
                                "Inflated error counts and misleading metrics",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q6",
                                "Which practice best describes structured logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Organizing log files by date and time", "Treating log entries as data structures with defined fields", "Using consistent indentation in log messages", "Storing logs in a hierarchical directory structure"),
                                "Treating log entries as data structures with defined fields",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q7",
                                "Correlation IDs should be generated separately for each log message to ensure uniqueness",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q8",
                                "A configuration file is loaded from the default location as designed. What log level is appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG", "INFO", "WARN", "ERROR"),
                                "INFO",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q9",
                                "What is the main benefit of logging at system boundaries rather than extensively within internal implementation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces code complexity", "Provides visibility into external interactions while minimizing internal noise", "Improves application performance significantly", "Eliminates the need for DEBUG logging"),
                                "Provides visibility into external interactions while minimizing internal noise",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q10",
                                "Which anti-pattern describes performing expensive operations to construct log messages without checking if logging is enabled?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Log level misuse", "Excessive logging volume", "Ignoring performance impact", "Insufficient context"),
                                "Ignoring performance impact",
                                "obj_module_2")
                );
