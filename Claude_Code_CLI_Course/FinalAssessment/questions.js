test.AddQuestion( new Question ("com.claude.cli.final.q1",
                                "Which characteristic distinguishes agentic AI from traditional AI assistants?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Larger model size", "Autonomous action execution within environment", "Better user interface", "Lower cost"),
                                "Autonomous action execution within environment",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q2",
                                "What is the correct command to initialize Claude Code CLI in a new project?",
                                QUESTION_TYPE_CHOICE,
                                new Array("claude start", "claude init", "claude setup", "claude create"),
                                "claude init",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q3",
                                "The permission model's Interactive mode is the safest default as it prompts before each operation",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q4",
                                "Which slash command generates commit messages based on staged changes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("/message", "/commit", "/git", "/stage"),
                                "/commit",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q5",
                                "Post-operation hooks execute AFTER operations complete to enable follow-up actions",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q6",
                                "What does MCP enable Claude Code CLI to do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compile code faster", "Access external data sources and enterprise systems", "Run on mobile devices", "Work offline permanently"),
                                "Access external data sources and enterprise systems",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q7",
                                "Which IDE has official extension support with full bidirectional sync?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sublime Text", "Visual Studio Code", "Notepad++", "TextEdit"),
                                "Visual Studio Code",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q8",
                                "API keys should be stored in environment variables or secret management tools, not hardcoded",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q9",
                                "Which data classification level includes customer data and PII?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Public", "Internal", "Confidential", "Restricted"),
                                "Restricted",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q10",
                                "What is the recommended approach for large-scale refactoring in production systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Big Bang - change everything at once", "Incremental - break into smaller safe steps", "Random - change files randomly", "Never refactor production code"),
                                "Incremental - break into smaller safe steps",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q11",
                                "CLAUDE.md file contains project-specific instructions and coding standards for the AI",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q12",
                                "In CI/CD pipelines, what is the primary benefit of selective review?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Slower processing", "60-80% cost reduction by reviewing only changed files", "More errors", "Requires more storage"),
                                "60-80% cost reduction by reviewing only changed files",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q13",
                                "Which optimization technique processes large files in chunks to manage memory?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Batch processing", "Streaming processing", "Parallel processing", "Sequential processing"),
                                "Streaming processing",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q14",
                                "Codebase indexing builds a comprehensive map of project structure and dependencies",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q15",
                                "What is the purpose of the /doctor command?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Generate medical code", "Diagnose configuration issues and system health", "Create documentation", "Delete files"),
                                "Diagnose configuration issues and system health",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q16",
                                "Which hook type would you use to run linting before committing code?",
                                QUESTION_TYPE_CHOICE,
                                new Array("post-commit", "pre-commit", "post-write", "pre-read"),
                                "pre-commit",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q17",
                                "MCP servers can provide documentation, data access, tools, and integration capabilities",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q18",
                                "What synchronization mode provides continuous sync with minimal delay?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manual", "Automatic", "One-Way", "Disabled"),
                                "Automatic",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q19",
                                "Which security principle grants minimum permissions necessary for tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Defense in Depth", "Principle of Least Privilege", "Zero Trust", "Security by Obscurity"),
                                "Principle of Least Privilege",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q20",
                                "Audit logging should capture authentication, file access, commands, and security events",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q21",
                                "In a scenario where you need to rename a function across 50 files, which Claude Code CLI capability is most valuable?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Single file editing", "Multi-file coordinated refactoring", "Code compilation", "Database access"),
                                "Multi-file coordinated refactoring",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q22",
                                "Project configuration files (.claude/config.json) should be committed to version control",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q23",
                                "When experiencing slow response times, what should you check first?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Buy new hardware", "Network connectivity and context size", "Reinstall operating system", "Delete all files"),
                                "Network connectivity and context size",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q24",
                                "Which metric indicates the percentage of requests served from cache?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Error Rate", "Cache Hit Rate", "API Volume", "Memory Usage"),
                                "Cache Hit Rate",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.claude.cli.final.q25",
                                "Claude Code CLI operates as a terminal-native agent with direct file system and command execution access",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );
