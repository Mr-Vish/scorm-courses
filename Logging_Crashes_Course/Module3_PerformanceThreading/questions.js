test.AddQuestion( new Question ("com.scorm.logging.mod3.q1",
                                "Which metric is most critical for detecting asynchronous logging queue problems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("CPU usage", "Queue utilization percentage", "Network bandwidth", "Thread count"),
                                "Queue utilization percentage",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod3.q2",
                                "What is the purpose of implementing a circuit breaker pattern for logging appenders?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase logging speed", "To prevent repeated attempts to write to failed appenders", "To compress log files", "To rotate logs automatically"),
                                "To prevent repeated attempts to write to failed appenders",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod3.q3",
                                "Graceful shutdown hooks ensure that buffered log events are flushed before application termination",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod3.q4",
                                "At what queue utilization threshold should warning alerts be triggered?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("50%", "70%", "85%", "95%"),
                                "70%",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod3.q5",
                                "What is the first immediate action when recovering from disk space exhaustion?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Restart all servers", "Delete or compress oldest log files to free space", "Increase disk capacity", "Disable all logging"),
                                "Delete or compress oldest log files to free space",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod3.q6",
                                "Which technique prevents log storms by limiting specific error messages to N occurrences per minute?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Log compression", "Rate limiting and throttling", "Log rotation", "Asynchronous logging"),
                                "Rate limiting and throttling",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod3.q7",
                                "Post-incident reviews should identify gaps in monitoring and alerting that failed to detect issues early",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod3.q8",
                                "What is adaptive throttling in the context of logging?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Compressing logs based on age", "Dynamically adjusting logging verbosity based on system health", "Rotating logs at fixed intervals", "Sending logs to multiple destinations"),
                                "Dynamically adjusting logging verbosity based on system health",
                                "obj_module_3")
                );
