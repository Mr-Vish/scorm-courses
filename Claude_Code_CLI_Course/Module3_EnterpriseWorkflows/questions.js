test.AddQuestion( new Question ("com.claude.cli.module3.q1",
                                "What is the primary characteristic of multi-file refactoring?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Changes affect only one file", "Changes span multiple files with coordinated modifications", "Changes only affect comments", "Changes are always automated"),
                                "Changes span multiple files with coordinated modifications",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q2",
                                "Which refactoring approach makes all changes in a single operation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Incremental Approach", "Big Bang Approach", "Branch by Abstraction", "Waterfall Approach"),
                                "Big Bang Approach",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q3",
                                "Test-driven refactoring maintains tests in a passing state after each change",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q4",
                                "Which dependency type consists of dependencies of dependencies?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Direct Dependencies", "Transitive Dependencies", "Circular Dependencies", "Runtime Dependencies"),
                                "Transitive Dependencies",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q5",
                                "What is the recommended practice for version control during refactoring?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Never commit until complete", "Make atomic commits of logical units", "Commit everything at once", "Avoid version control during refactoring"),
                                "Make atomic commits of logical units",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q6",
                                "Project configuration files should be committed to version control for team consistency",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q7",
                                "Which file contains team-specific coding standards and conventions for Claude Code CLI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("README.md", "CLAUDE.md", "config.json", "package.json"),
                                "CLAUDE.md",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q8",
                                "What is the primary benefit of integrating Claude Code CLI into CI/CD pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster compilation", "Automated code review and quality checks", "Free hosting", "Automatic deployment"),
                                "Automated code review and quality checks",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q9",
                                "Which CI/CD stage is most appropriate for AI-assisted code review?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deployment", "Pull Request / Merge Request", "Production Monitoring", "Database Migration"),
                                "Pull Request / Merge Request",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q10",
                                "Automated test generation can create unit tests, integration tests, and edge case coverage",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q11",
                                "Which strategy reduces CI/CD API costs by 60-80%?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Running more tests", "Selective review of only changed files", "Using slower models", "Disabling all checks"),
                                "Selective review of only changed files",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q12",
                                "What is the typical response latency range for Claude Code CLI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.1-0.5 seconds", "1-10 seconds", "30-60 seconds", "2-5 minutes"),
                                "1-10 seconds",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q13",
                                "Incremental indexing updates only modified files rather than re-indexing the entire codebase",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q14",
                                "Which caching strategy invalidates cache when files are modified?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Time-based expiration", "Manual invalidation only", "File modification detection", "Never invalidate"),
                                "File modification detection",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q15",
                                "What technique combines multiple requests to reduce network overhead?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Request splitting", "Request batching", "Request duplication", "Request cancellation"),
                                "Request batching",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q16",
                                "Streaming processing handles large files by processing them in chunks to manage memory usage",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q17",
                                "What is the first diagnostic step when experiencing slow response times?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reinstall the software", "Check network connectivity and latency", "Delete all files", "Upgrade hardware immediately"),
                                "Check network connectivity and latency",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q18",
                                "Which configuration level is committed to version control for team-wide settings?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Global configuration", "Project configuration", "Environment variables", "Command-line flags"),
                                "Project configuration",
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q19",
                                "Branch by Abstraction is a refactoring strategy suitable for high-risk, high-impact changes",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3_enterprise")
                );

test.AddQuestion( new Question ("com.claude.cli.module3.q20",
                                "What metric measures the percentage of requests served from cache?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Error Rate", "Cache Hit Rate", "Response Time", "API Call Volume"),
                                "Cache Hit Rate",
                                "obj_module3_enterprise")
                );
