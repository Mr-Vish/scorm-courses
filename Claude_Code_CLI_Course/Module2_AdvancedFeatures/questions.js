test.AddQuestion( new Question ("com.claude.cli.module2.q1",
                                "What is the primary purpose of hooks in Claude Code CLI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve code performance", "To automate actions at defined points in development workflows", "To connect to databases", "To format code automatically"),
                                "To automate actions at defined points in development workflows",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q2",
                                "Which hook type executes BEFORE Claude Code CLI modifies files?",
                                QUESTION_TYPE_CHOICE,
                                new Array("post-write", "pre-write", "post-commit", "pre-read"),
                                "pre-write",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q3",
                                "Hooks can be configured to fail fast or continue on error depending on the failOnError parameter",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q4",
                                "What does MCP stand for in the context of Claude Code CLI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model Context Protocol", "Multi-Code Platform", "Managed Configuration Process", "Master Control Program"),
                                "Model Context Protocol",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q5",
                                "Which component acts as the consumer of context in MCP architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MCP Server", "MCP Client", "Protocol Layer", "Transport Layer"),
                                "MCP Client",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q6",
                                "MCP enables Claude Code CLI to access external data sources, tools, and enterprise systems",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q7",
                                "Which MCP server type provides access to databases and file systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tool Servers", "Data Servers", "Documentation Servers", "Integration Servers"),
                                "Data Servers",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q8",
                                "What is the primary benefit of IDE integration with Claude Code CLI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster internet connection", "Reduced context switching between terminal and IDE", "Automatic bug fixing", "Free API access"),
                                "Reduced context switching between terminal and IDE",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q9",
                                "Which IDE platform has official extension support for Claude Code CLI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sublime Text", "Visual Studio Code", "Atom", "Notepad++"),
                                "Visual Studio Code",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q10",
                                "Bidirectional synchronization maintains consistency between IDE state and Claude Code CLI",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q11",
                                "Which synchronization mode provides continuous sync with minimal delay?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manual", "Automatic", "Selective", "One-Way"),
                                "Automatic",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q12",
                                "What is the recommended storage method for Anthropic API keys?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcoded in source files", "Environment variables or secret management tools", "Plain text configuration files", "Shared in team chat"),
                                "Environment variables or secret management tools",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q13",
                                "Role-Based Access Control (RBAC) defines roles with specific permissions for different user types",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q14",
                                "Which data classification level requires maximum protection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Public", "Internal", "Confidential", "Restricted"),
                                "Restricted",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q15",
                                "What security mechanism protects data in transit to Claude API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Base64 encoding", "TLS encryption", "ZIP compression", "ROT13 cipher"),
                                "TLS encryption",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q16",
                                "Audit logging should capture authentication events, file access, command execution, and security events",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q17",
                                "Which hook execution pattern runs independent actions concurrently?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sequential execution", "Parallel execution", "Conditional execution", "Manual execution"),
                                "Parallel execution",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q18",
                                "What authentication method does MCP support for third-party services?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only API keys", "Only passwords", "OAuth 2.0, API keys, Bearer tokens, and Mutual TLS", "No authentication required"),
                                "OAuth 2.0, API keys, Bearer tokens, and Mutual TLS",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q19",
                                "IDE integration requires code to be transmitted over the internet to function",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("com.claude.cli.module2.q20",
                                "What is the principle of granting minimum permissions necessary for tasks called?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Defense in Depth", "Principle of Least Privilege", "Zero Trust", "Security by Obscurity"),
                                "Principle of Least Privilege",
                                "obj_module2_advanced")
                );
