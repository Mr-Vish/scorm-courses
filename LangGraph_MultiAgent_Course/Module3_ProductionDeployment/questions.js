test.AddQuestion( new Question ("m3_q1",
                                "What is the primary benefit of designing the application layer as stateless in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces memory usage", "Enables horizontal scaling and load balancing", "Improves security", "Simplifies development"),
                                "Enables horizontal scaling and load balancing",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q2",
                                "Which storage option provides strong consistency guarantees and ACID transactions for checkpoint storage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Distributed caches like Redis", "Relational databases like PostgreSQL", "File systems", "In-memory storage"),
                                "Relational databases like PostgreSQL",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q3",
                                "What is a key advantage of serverless compute infrastructure (e.g., AWS Lambda)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No execution time limits", "Automatic scaling and pay-per-execution pricing", "Always faster than containers", "Unlimited memory"),
                                "Automatic scaling and pay-per-execution pricing",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q4",
                                "What is the purpose of the Circuit Breaker pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve performance", "To prevent cascading failures by stopping calls to failing services", "To encrypt data", "To balance load"),
                                "To prevent cascading failures by stopping calls to failing services",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q5",
                                "Which retry strategy involves increasing wait time exponentially between retry attempts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Linear backoff", "Exponential backoff", "Immediate retry", "Random retry"),
                                "Exponential backoff",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q6",
                                "In Blue-Green deployment, what is the primary benefit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced infrastructure costs", "Zero-downtime deployment with instant rollback capability", "Faster deployment speed", "Simplified configuration"),
                                "Zero-downtime deployment with instant rollback capability",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q7",
                                "What are the three pillars of observability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("CPU, Memory, Disk", "Metrics, Logs, and Traces", "Servers, Databases, Networks", "Development, Testing, Production"),
                                "Metrics, Logs, and Traces",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q8",
                                "Which log level should be used for severe errors that affect system availability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DEBUG", "INFO", "ERROR", "CRITICAL"),
                                "CRITICAL",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q9",
                                "What is the purpose of distributed tracing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt communications", "To track requests as they flow through distributed system components", "To balance load", "To cache responses"),
                                "To track requests as they flow through distributed system components",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q10",
                                "Which security practice involves encrypting sensitive data stored in databases?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encryption in transit", "Encryption at rest", "Access control", "Input validation"),
                                "Encryption at rest",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q11",
                                "What is the principle of least privilege in access control?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Give everyone full access", "Grant only the minimum permissions necessary", "Deny all access by default", "Allow access only to administrators"),
                                "Grant only the minimum permissions necessary",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q12",
                                "Which mitigation strategy helps prevent prompt injection attacks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increasing server capacity", "Input validation and clear separation between instructions and user input", "Using faster models", "Caching responses"),
                                "Input validation and clear separation between instructions and user input",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q13",
                                "What is the first step in the incident response process?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Resolution", "Detection", "Post-mortem", "Escalation"),
                                "Detection",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q14",
                                "What does RTO stand for in disaster recovery planning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Real-Time Operations", "Recovery Time Objective", "Resource Tracking Optimization", "Redundant Technology Operations"),
                                "Recovery Time Objective",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q15",
                                "Which deployment strategy gradually rolls out a new version to a small percentage of traffic first?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Blue-Green deployment", "Rolling deployment", "Canary deployment", "Big bang deployment"),
                                "Canary deployment",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q16",
                                "Horizontal scaling involves adding more application servers to handle increased load.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q17",
                                "Structured logging uses plain text format for easy human reading.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q18",
                                "Sensitive personal information (PII) should be logged for debugging purposes.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q19",
                                "Auto-scaling automatically adjusts the number of servers based on load metrics.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q20",
                                "Connection pooling helps reduce the overhead of establishing new connections repeatedly.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );
