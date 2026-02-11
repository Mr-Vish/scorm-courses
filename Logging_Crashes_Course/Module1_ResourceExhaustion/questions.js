test.AddQuestion( new Question ("com.scorm.logging.mod1.q1",
                                "What is the primary paradox of logging systems discussed in Module 1?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Logging is too expensive to implement", "The mechanism designed to diagnose failures can itself cause failures", "Logging frameworks are incompatible with modern applications", "Logs are difficult to read and analyze"),
                                "The mechanism designed to diagnose failures can itself cause failures",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod1.q2",
                                "Which stage of the logging operation is typically the slowest and most resource-intensive?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Log event creation", "Filtering and level evaluation", "Message formatting", "Appender processing (I/O operations)"),
                                "Appender processing (I/O operations)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod1.q3",
                                "Asynchronous logging prevents application thread blocking but introduces memory overhead through queuing",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod1.q4",
                                "What is the most common logging-related failure mode in production environments?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Thread exhaustion", "Disk space exhaustion from uncontrolled log growth", "CPU saturation", "Network failures"),
                                "Disk space exhaustion from uncontrolled log growth",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod1.q5",
                                "Which failure mechanism describes a situation where logging failures create positive feedback loops that amplify the problem?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Resource exhaustion", "Configuration errors", "Performance degradation", "Cascading failures and feedback loops"),
                                "Cascading failures and feedback loops",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod1.q6",
                                "What phenomenon describes when an application gradually becomes unresponsive over time due to logging-induced performance issues?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Fast crash", "Slow crash", "Immediate failure", "Cascading failure"),
                                "Slow crash",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod1.q7",
                                "Memory heap exhaustion in asynchronous logging occurs when log event production rate exceeds consumption rate",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.logging.mod1.q8",
                                "Which early warning sign indicates potential memory-related logging issues?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Decreasing disk utilization", "Growing queue depths in asynchronous logging metrics", "Reduced CPU usage", "Faster response times"),
                                "Growing queue depths in asynchronous logging metrics",
                                "obj_module_1")
                );
