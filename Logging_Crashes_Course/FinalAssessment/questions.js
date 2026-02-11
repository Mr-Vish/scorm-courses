// Final Comprehensive Assessment - 25 Unique Questions
// Covers all modules: Fundamentals, Resource Management, Monitoring & Prevention

// Module 1: Fundamentals and Root Causes (8 questions)
test.AddQuestion( new Question ("com.scorm.logging.final.q1",
                                "Which of the following best describes the logging paradox?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Logs are too expensive to store", "Logging tools designed to diagnose failures can cause system failures", "Logging is only useful in development", "Logs cannot be analyzed effectively"),
                                "Logging tools designed to diagnose failures can cause system failures",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q2",
                                "What is the primary difference between synchronous and asynchronous logging?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Synchronous is faster", "Asynchronous blocks application threads while synchronous does not", "Synchronous blocks threads until logs are written; asynchronous uses queues", "There is no difference"),
                                "Synchronous blocks threads until logs are written; asynchronous uses queues",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q3",
                                "Which category of logging failure involves errors that create positive feedback loops?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Resource exhaustion", "Configuration errors", "Cascading failures and feedback loops", "Performance degradation"),
                                "Cascading failures and feedback loops",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q4",
                                "Disk space exhaustion affects only the logging system and does not impact other application components",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q5",
                                "What causes memory heap exhaustion in asynchronous logging systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Too many log files", "Log event production rate exceeding consumption rate", "Disk space running out", "Network failures"),
                                "Log event production rate exceeding consumption rate",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q6",
                                "Which type of appender typically has the highest latency?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Console appender", "File appender", "Network appender", "Memory appender"),
                                "Network appender",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q7",
                                "A 'slow crash' refers to gradual application unresponsiveness caused by logging-induced performance issues",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q8",
                                "Which early warning sign indicates potential disk space issues?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Decreasing CPU usage", "Log files growing faster than rotation policies can manage", "Reduced memory consumption", "Fewer error messages"),
                                "Log files growing faster than rotation policies can manage",
                                "obj_final_assessment")
                );

// Module 2: Resource Management and Configuration (9 questions)
test.AddQuestion( new Question ("com.scorm.logging.final.q9",
                                "What is the recommended file size threshold for log rotation in most applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("10MB to 50MB", "100MB to 500MB", "1GB to 5GB", "No size limit needed"),
                                "100MB to 500MB",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q10",
                                "Which retention policy provides consistent temporal coverage regardless of logging volume?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Count-based retention", "Age-based retention", "Size-based retention", "No retention policy"),
                                "Age-based retention",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q11",
                                "Unbounded queues are acceptable in production if sufficient memory is available",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q12",
                                "What is the formula for calculating asynchronous queue size?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Queue Size = Peak Rate × 10", "Queue Size = (Peak Logging Rate × Burst Duration) + Safety Margin", "Queue Size = Available Memory / 2", "Queue Size = Number of Threads × 100"),
                                "Queue Size = (Peak Logging Rate × Burst Duration) + Safety Margin",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q13",
                                "Which overflow strategy maintains application performance by discarding log events when queues are full?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Blocking strategy", "Discarding strategy", "Retry strategy", "Buffering strategy"),
                                "Discarding strategy",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q14",
                                "What is the recommended log level for third-party libraries in production?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG", "INFO", "WARN or ERROR", "TRACE"),
                                "WARN or ERROR",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q15",
                                "Parameterized logging is more efficient than string concatenation in log statements",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q16",
                                "Why should logs be written to a dedicated disk partition?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve log performance", "To prevent application data corruption if logs fill the disk", "To enable faster log rotation", "To reduce storage costs"),
                                "To prevent application data corruption if logs fill the disk",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q17",
                                "What should network appenders include to prevent indefinite blocking?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Larger buffers", "Aggressive connection timeouts", "More threads", "Synchronous operation"),
                                "Aggressive connection timeouts",
                                "obj_final_assessment")
                );

// Module 3: Monitoring, Prevention, and Recovery (8 questions)
test.AddQuestion( new Question ("com.scorm.logging.final.q18",
                                "Which metric indicates that asynchronous logging queues are experiencing backlog?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Decreasing queue depth", "Enqueue rate consistently exceeds dequeue rate", "Low CPU usage", "Reduced disk I/O"),
                                "Enqueue rate consistently exceeds dequeue rate",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q19",
                                "At what disk usage percentage should emergency alerts be triggered?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("70%", "80%", "90%", "95%"),
                                "95%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q20",
                                "Circuit breakers for logging appenders automatically disable failed appenders after repeated failures",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q21",
                                "What is the purpose of rate limiting in logging systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase log file size", "To prevent log storms by limiting specific messages to N occurrences per time period", "To compress logs faster", "To improve log readability"),
                                "To prevent log storms by limiting specific messages to N occurrences per time period",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q22",
                                "What is the first step in recovering from memory exhaustion caused by logging?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Increase heap size", "Restart the application", "Delete log files", "Disable all logging"),
                                "Restart the application",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q23",
                                "Graceful shutdown hooks should have unlimited time to flush all queued log events",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q24",
                                "Which monitoring integration allows visualization of logging metrics alongside application metrics?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Email alerts", "Grafana", "Text files", "Console output"),
                                "Grafana",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.logging.final.q25",
                                "What should post-incident reviews identify regarding logging failures?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Who to blame for the incident", "Gaps in monitoring and alerting that failed to detect issues early", "Ways to eliminate all logging", "How to reduce team size"),
                                "Gaps in monitoring and alerting that failed to detect issues early",
                                "obj_final_assessment")
                );
