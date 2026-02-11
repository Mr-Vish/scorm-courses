test.AddQuestion( new Question ("com.scorm.logging.mod2.q1",
                                "What is the recommended approach for log rotation in production environments?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Size-based rotation only", "Time-based rotation only", "Hybrid rotation combining both size and time thresholds", "No rotation needed"),
                                "Hybrid rotation combining both size and time thresholds",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod2.q2",
                                "Which queue overflow strategy preserves higher-priority log events while discarding lower-priority ones?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Blocking strategy", "Discarding strategy", "Selective discarding strategy", "Unbounded queue strategy"),
                                "Selective discarding strategy",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod2.q3",
                                "Production environments should never use unbounded queues for asynchronous logging",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod2.q4",
                                "What is the recommended log level for the root logger in production environments?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG", "INFO", "WARN", "ERROR"),
                                "INFO",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod2.q5",
                                "Compressing rotated log files can reduce disk usage by what percentage?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("10-20%", "30-50%", "80-95%", "100%"),
                                "80-95%",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod2.q6",
                                "Which defensive programming pattern avoids expensive operations in log statements that may not be executed?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Exception handling", "Lazy evaluation and guarded logging", "Synchronous logging", "Unbounded queues"),
                                "Lazy evaluation and guarded logging",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod2.q7",
                                "Network appenders should always be configured asynchronously to prevent blocking on network failures",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod2.q8",
                                "At what disk usage threshold should critical alerts be triggered?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("50%", "70%", "85%", "95%"),
                                "85%",
                                "obj_module_2")
                );
