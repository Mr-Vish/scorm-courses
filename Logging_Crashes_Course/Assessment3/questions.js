// Assessment 3: Performance Degradation and Threading Issues
// Tests understanding of performance impacts, threading, and network logging

test.AddQuestion( new Question ("assess3.q1",
                                "What is the primary performance impact of synchronous logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increased memory consumption", "Application threads block waiting for I/O operations to complete", "Higher CPU usage", "Increased network bandwidth usage"),
                                "Application threads block waiting for I/O operations to complete",
                                "obj_assessment_3")
                );

test.AddQuestion( new Question ("assess3.q2",
                                "What is a 'slow crash' in the context of logging-induced failures?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A crash that takes several minutes to occur", "Gradual performance degradation until the application is effectively non-functional", "A crash caused by slow disk I/O", "A crash that only happens during low traffic periods"),
                                "Gradual performance degradation until the application is effectively non-functional",
                                "obj_assessment_3")
                );

test.AddQuestion( new Question ("assess3.q3",
                                "What happens when multiple threads contend for a single file appender lock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The logging framework automatically creates multiple files", "Threads spend time waiting for locks instead of doing useful work", "The application switches to asynchronous logging automatically", "Log messages are automatically buffered in memory"),
                                "Threads spend time waiting for locks instead of doing useful work",
                                "obj_assessment_3")
                );

test.AddQuestion( new Question ("assess3.q4",
                                "Which logging practice helps prevent deadlocks in multi-threaded applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using only synchronous logging", "Avoiding logging while holding application locks", "Increasing the thread pool size", "Disabling all logging in production"),
                                "Avoiding logging while holding application locks",
                                "obj_assessment_3")
                );

test.AddQuestion( new Question ("assess3.q5",
                                "What is the recommended timeout duration for network-based logging appenders?",
                                QUESTION_TYPE_CHOICE,
                                new Array("30-60 seconds", "10-20 seconds", "1-5 seconds", "No timeout needed"),
                                "1-5 seconds",
                                "obj_assessment_3")
                );

test.AddQuestion( new Question ("assess3.q6",
                                "Which pattern should be used to avoid unnecessary string concatenation in logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("logger.info('User: ' + userName)", "logger.info('User: {}', userName)", "logger.info(String.format('User: %s', userName))", "logger.info(new StringBuilder().append('User: ').append(userName).toString())"),
                                "logger.info('User: {}', userName)",
                                "obj_assessment_3")
                );

test.AddQuestion( new Question ("assess3.q7",
                                "What is the purpose of a circuit breaker pattern in network logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase logging throughput", "To stop attempting remote logging after consecutive failures and prevent cascading issues", "To compress log data before transmission", "To encrypt log messages during transmission"),
                                "To stop attempting remote logging after consecutive failures and prevent cascading issues",
                                "obj_assessment_3")
                );

test.AddQuestion( new Question ("assess3.q8",
                                "When should you use an 'if (logger.isDebugEnabled())' guard in your code?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always, for every log statement", "Never, it's unnecessary overhead", "When the log message construction is computationally expensive", "Only in production environments"),
                                "When the log message construction is computationally expensive",
                                "obj_assessment_3")
                );

test.AddQuestion( new Question ("assess3.q9",
                                "What is the primary benefit of using the LMAX Disruptor in Log4j2's asynchronous logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It compresses log data automatically", "It provides lock-free, high-throughput queuing with reduced contention", "It encrypts sensitive log information", "It automatically rotates log files"),
                                "It provides lock-free, high-throughput queuing with reduced contention",
                                "obj_assessment_3")
                );

test.AddQuestion( new Question ("assess3.q10",
                                "Which metric is most indicative of logging-related thread blocking issues?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Total disk space used", "Percentage of time threads spend in I/O wait state", "Number of log files created", "Average log message length"),
                                "Percentage of time threads spend in I/O wait state",
                                "obj_assessment_3")
                );
