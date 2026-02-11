test.AddQuestion( new Question ("com.claude.cli.module1.q1",
                                "What is the primary characteristic that distinguishes agentic AI systems from traditional AI assistants?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("They provide better code suggestions", "They can autonomously perceive, decide, act, and learn within their environment", "They have larger language models", "They work faster than traditional tools"),
                                "They can autonomously perceive, decide, act, and learn within their environment",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q2",
                                "Which of the following is NOT one of the four fundamental characteristics of agentic AI systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Environmental Perception", "Autonomous Decision-Making", "Code Compilation", "Action Execution"),
                                "Code Compilation",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q3",
                                "Claude Code CLI maintains persistent context throughout development sessions",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q4",
                                "What is the minimum required Node.js version for Claude Code CLI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Node.js 14.0.0", "Node.js 16.0.0", "Node.js 18.0.0", "Node.js 20.0.0"),
                                "Node.js 18.0.0",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q5",
                                "Which operating system requires WSL2 to run Claude Code CLI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("macOS", "Linux", "Windows", "All of the above"),
                                "Windows",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q6",
                                "The CLAUDE.md file serves as a project-specific instruction manual for Claude Code CLI",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q7",
                                "What command is used to diagnose configuration issues and system health in Claude Code CLI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("/help", "/doctor", "/check", "/status"),
                                "/doctor",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q8",
                                "Which authentication method is NOT supported by Claude Code CLI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("API Key Authentication", "Claude Pro Subscription", "OAuth2 Authentication", "Claude Max Subscription"),
                                "OAuth2 Authentication",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q9",
                                "What is the purpose of the codebase indexing process in Claude Code CLI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To compile the code", "To build a comprehensive understanding of project structure and dependencies", "To create backups of files", "To optimize code performance"),
                                "To build a comprehensive understanding of project structure and dependencies",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q10",
                                "In the permission model, which mode automatically approves all operations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Interactive Mode", "Auto-Approve Read", "Auto-Approve All", "Safe Mode"),
                                "Auto-Approve All",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q11",
                                "The Interactive permission mode is the default and prompts for approval before each operation",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q12",
                                "What slash command is used to clear conversation history and reset context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("/reset", "/clear", "/restart", "/new"),
                                "/clear",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q13",
                                "Which slash command generates commit messages based on staged changes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("/git", "/commit", "/message", "/stage"),
                                "/commit",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q14",
                                "Claude Code CLI can only interact with code through natural language, not through structured commands",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q15",
                                "What is the primary advantage of Claude Code CLI operating in the terminal versus a browser?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Better graphics", "Direct access to file system and ability to execute commands", "Faster internet connection", "More storage space"),
                                "Direct access to file system and ability to execute commands",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q16",
                                "Which configuration file contains system-wide settings that apply to all projects?",
                                QUESTION_TYPE_CHOICE,
                                new Array(".claude/config.json in project root", "~/.claude/config.json", "package.json", "settings.json"),
                                "~/.claude/config.json",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q17",
                                "The /review command can analyze code for security vulnerabilities, performance issues, and best practices",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q18",
                                "What happens during the incremental update phase of codebase indexing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The entire codebase is re-scanned from scratch", "Only modified files are re-analyzed and the index is updated", "All files are deleted and recreated", "The index is permanently locked"),
                                "Only modified files are re-analyzed and the index is updated",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q19",
                                "Which permission category controls the ability to run shell commands and scripts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Read Permissions", "Write Permissions", "Execute Permissions", "Admin Permissions"),
                                "Execute Permissions",
                                "obj_module1_foundations")
                );

test.AddQuestion( new Question ("com.claude.cli.module1.q20",
                                "Custom slash commands can be defined in the .claude/commands.json file",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1_foundations")
                );
