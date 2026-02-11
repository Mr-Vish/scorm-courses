// Assessment 2: Configuration Errors and Application Startup Failures
// Tests understanding of configuration issues, classpath conflicts, and troubleshooting

test.AddQuestion( new Question ("assess2.q1",
                                "What is the typical consequence when a logging configuration file contains malformed XML syntax?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The application starts with default logging configuration", "The application fails to start with an XML parsing exception", "The logging framework automatically corrects the syntax", "Only file logging is disabled, console logging continues"),
                                "The application fails to start with an XML parsing exception",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("assess2.q2",
                                "Which warning message indicates multiple SLF4J bindings are present on the classpath?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SLF4J: Failed to load class", "SLF4J: Class path contains multiple SLF4J bindings", "SLF4J: No binding found", "SLF4J: Configuration error detected"),
                                "SLF4J: Class path contains multiple SLF4J bindings",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("assess2.q3",
                                "What is the primary purpose of using Spring Boot starter dependencies for logging?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase application performance", "To manage logging dependencies correctly and avoid conflicts", "To enable cloud-native logging automatically", "To compress log files automatically"),
                                "To manage logging dependencies correctly and avoid conflicts",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("assess2.q4",
                                "When a file appender cannot write to the configured log directory due to insufficient permissions, what typically happens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The application creates the directory automatically", "The application fails to start or starts without file logging", "The logs are redirected to the system temp directory", "The application requests elevated permissions from the OS"),
                                "The application fails to start or starts without file logging",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("assess2.q5",
                                "Which Logback configuration attribute enables detailed diagnostic output during initialization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("verbose='true'", "debug='true'", "diagnostic='true'", "trace='true'"),
                                "debug='true'",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("assess2.q6",
                                "What is the recommended approach for handling environment-specific log paths in configuration files?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hard-code different paths for each environment", "Use environment variables with sensible defaults", "Create separate configuration files for each environment", "Let the logging framework choose the path automatically"),
                                "Use environment variables with sensible defaults",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("assess2.q7",
                                "In containerized environments like Docker, what is the best practice for logging configuration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always write logs to the container's root filesystem", "Configure logging to stdout/stderr for log collection", "Disable logging to reduce container size", "Use only synchronous file appenders"),
                                "Configure logging to stdout/stderr for log collection",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("assess2.q8",
                                "What command helps identify classpath conflicts and dependency issues in Maven projects?",
                                QUESTION_TYPE_CHOICE,
                                new Array("mvn clean install", "mvn dependency:tree", "mvn compile", "mvn package"),
                                "mvn dependency:tree",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("assess2.q9",
                                "Which type of logging component writes log events to a destination such as a file, console, or network?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Logger", "Appender", "Layout", "Filter"),
                                "Appender",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("assess2.q10",
                                "When troubleshooting a logging configuration failure, what is the recommended first step?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reinstall the application", "Identify the failure point by examining console output and stack traces", "Disable all logging and restart", "Upgrade to the latest logging framework version"),
                                "Identify the failure point by examining console output and stack traces",
                                "obj_assessment_2")
                );
