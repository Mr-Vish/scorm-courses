// Assessment 1: Resource Exhaustion and Memory Management
// Tests understanding of disk exhaustion, memory management, and I/O concepts

test.AddQuestion( new Question ("assess1.q1",
                                "What is the primary reason disk space exhaustion causes application crashes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The logging framework stops working", "The JVM and application cannot perform operations requiring disk I/O", "The operating system automatically terminates the application", "The network connections are closed"),
                                "The JVM and application cannot perform operations requiring disk I/O",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("assess1.q2",
                                "At what disk usage percentage should monitoring systems typically trigger alerts to prevent exhaustion?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50-60%", "70-80%", "90-95%", "98-99%"),
                                "70-80%",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("assess1.q3",
                                "Which log level is most appropriate for normal production environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("TRACE", "DEBUG", "INFO or WARN", "ERROR only"),
                                "INFO or WARN",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("assess1.q4",
                                "What is a 'log storm' in the context of logging systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A scheduled backup of all log files", "An error condition that triggers repeated logging in a tight loop", "A network attack targeting log servers", "A configuration that enables all log levels simultaneously"),
                                "An error condition that triggers repeated logging in a tight loop",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("assess1.q5",
                                "In asynchronous logging, what is the primary function of the in-memory queue?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To permanently store log events", "To buffer log events between application threads and background I/O threads", "To compress log data before writing", "To filter out duplicate log messages"),
                                "To buffer log events between application threads and background I/O threads",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("assess1.q6",
                                "What happens when an unbounded queue is used in asynchronous logging under sustained high load?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The application automatically reduces log verbosity", "The queue can grow indefinitely and exhaust heap memory", "Old log events are automatically discarded", "The logging framework switches to synchronous mode"),
                                "The queue can grow indefinitely and exhaust heap memory",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("assess1.q7",
                                "If an application generates 10,000 log events per second and each event consumes 1 KB of memory, how much memory is required per second?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1 MB", "10 MB", "100 MB", "1 GB"),
                                "10 MB",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("assess1.q8",
                                "Which queue overflow policy ensures no log data loss but may cause application threads to block?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Bounded Queue with Discard policy", "Unbounded Queue", "Bounded Queue with Block policy", "Bounded Queue with Discard Oldest policy"),
                                "Bounded Queue with Block policy",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("assess1.q9",
                                "What is the recommended approach for preventing I/O bandwidth saturation from logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Disable all logging in production", "Use synchronous logging exclusively", "Use asynchronous logging and separate log storage", "Increase the number of application threads"),
                                "Use asynchronous logging and separate log storage",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("assess1.q10",
                                "Which rolling policy configuration element limits the total disk space consumed by all log files?",
                                QUESTION_TYPE_CHOICE,
                                new Array("maxFileSize", "maxHistory", "totalSizeCap", "rollingInterval"),
                                "totalSizeCap",
                                "obj_assessment_1")
                );
