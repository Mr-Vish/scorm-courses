// Final Comprehensive Assessment
// Covers all 4 modules with unique, non-duplicate questions

// Module 1: AI-Powered Log Analysis (6 questions)
test.AddQuestion( new Question ("com.scorm.aiincident.final.q1",
                                "What fundamental limitation prevents traditional regex-based log analysis from detecting novel error patterns?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is too slow for large datasets", "It can only match explicitly defined patterns and cannot understand semantic meaning", "It requires too much memory", "It only works with structured data"),
                                "It can only match explicitly defined patterns and cannot understand semantic meaning",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q2",
                                "In multi-service correlation, how does AI identify causal chains that distributed tracing misses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By processing data faster", "By understanding semantic relationships and analyzing log content beyond request IDs", "By using more servers", "By storing more data"),
                                "By understanding semantic relationships and analyzing log content beyond request IDs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q3",
                                "What is the typical context window limit for modern LLMs in tokens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1K-10K tokens", "128K-200K tokens", "1M-5M tokens", "Unlimited"),
                                "128K-200K tokens",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q4",
                                "Which integration pattern is most commonly used for custom AI implementations with observability platforms?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manual copy-paste", "API-Based Integration", "Email-based", "FTP transfer"),
                                "API-Based Integration",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q5",
                                "Why is preprocessing logs before sending to LLMs considered essential?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make logs colorful", "To reduce costs, stay within context limits, and improve analysis quality", "To satisfy compliance only", "To make logs shorter"),
                                "To reduce costs, stay within context limits, and improve analysis quality",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q6",
                                "What type of temporal pattern can AI detect that humans often miss?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Timestamps", "Errors occurring exactly 5 minutes after deployments or at specific intervals", "Date formats", "Time zones"),
                                "Errors occurring exactly 5 minutes after deployments or at specific intervals",
                                "obj_final_assessment")
                );

// Module 2: Runbook Automation (7 questions)
test.AddQuestion( new Question ("com.scorm.aiincident.final.q7",
                                "How does AI-powered runbook selection use semantic matching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By matching exact keywords only", "By understanding symptom similarity even without exact keyword matches", "By random selection", "By alphabetical order"),
                                "By understanding symptom similarity even without exact keyword matches",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q8",
                                "What confidence score range suggests a runbook might help but requires validation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0-25%", "50-80%", "85-95%", "100%"),
                                "50-80%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q9",
                                "According to the automation spectrum, which actions should require manual execution by humans?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Restarting services", "Database schema changes and network configuration changes", "Clearing cache", "Scaling instances"),
                                "Database schema changes and network configuration changes",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q10",
                                "What should AI systems validate before executing any remediation action?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the time of day", "Preconditions, dependencies, timing, and resource availability", "Only user permissions", "Only network connectivity"),
                                "Preconditions, dependencies, timing, and resource availability",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q11",
                                "What triggers an automatic rollback during AI-driven remediation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Any metric change", "Error rate increases by >20%, metrics worsen, or new critical errors appear", "Time passing", "User requests"),
                                "Error rate increases by >20%, metrics worsen, or new critical errors appear",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q12",
                                "How many consecutive failures should trigger a circuit breaker to stop automatic remediation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1", "3", "10", "100"),
                                "3",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q13",
                                "How do intelligent runbooks improve through continuous learning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They don't improve", "By analyzing execution outcomes and engineer feedback to refine steps", "By reading manuals", "By random updates"),
                                "By analyzing execution outcomes and engineer feedback to refine steps",
                                "obj_final_assessment")
                );

// Module 3: Post-Mortems (6 questions)
test.AddQuestion( new Question ("com.scorm.aiincident.final.q14",
                                "What is the primary goal of blameless post-mortems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To identify who made mistakes", "To understand what happened and prevent recurrence through systemic improvements", "To satisfy management", "To create documentation"),
                                "To understand what happened and prevent recurrence through systemic improvements",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q15",
                                "How does AI maintain blameless language in post-mortem generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By removing all names", "By focusing on systems and processes, using neutral language, and avoiding blame-oriented phrasing", "By only writing positive content", "By making everything anonymous"),
                                "By focusing on systems and processes, using neutral language, and avoiding blame-oriented phrasing",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q16",
                                "Which post-mortem section uses the 'five whys' technique?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Summary", "Root Cause", "Timeline", "Action Items"),
                                "Root Cause",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q17",
                                "What percentage of post-mortem action items typically go uncompleted?",
                                QUESTION_TYPE_CHOICE,
                                new Array("5-10%", "20-30%", "60-70%", "95-100%"),
                                "60-70%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q18",
                                "How does AI improve action item completion rates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By reducing the number of items", "By automatic ticket creation, progress monitoring, and escalation", "By sending emails", "By hiding incomplete items"),
                                "By automatic ticket creation, progress monitoring, and escalation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q19",
                                "What should AI do when a new incident matches patterns from historical incidents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore the history", "Surface the historical post-mortem to help engineers learn from past resolution strategies", "Delete old incidents", "Create duplicate tickets"),
                                "Surface the historical post-mortem to help engineers learn from past resolution strategies",
                                "obj_final_assessment")
                );

// Module 4: Advantages and Limitations (6 questions)
test.AddQuestion( new Question ("com.scorm.aiincident.final.q20",
                                "By what percentage do organizations typically reduce MTTR after implementing AI-assisted incident response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("5-10%", "20-30%", "50-70%", "95-100%"),
                                "50-70%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q21",
                                "What is the primary technical limitation that prevents LLMs from processing gigabytes of raw logs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Processing speed", "Context window token limits (128K-200K tokens)", "Network bandwidth", "Storage capacity"),
                                "Context window token limits (128K-200K tokens)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q22",
                                "Which mitigation strategy addresses the risk of AI hallucinations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use more expensive models", "Always validate AI suggestions against actual system behavior and multiple data sources", "Disable AI completely", "Ignore the suggestions"),
                                "Always validate AI suggestions against actual system behavior and multiple data sources",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q23",
                                "What is the recommended approach for starting AI-assisted incident response implementation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploy to all systems immediately", "Start small with one service, measure baseline, prove value, then expand gradually", "Wait for perfect accuracy", "Outsource to vendors"),
                                "Start small with one service, measure baseline, prove value, then expand gradually",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q24",
                                "Which characteristic indicates a good fit for AI-assisted incident response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Simple monolithic architecture", "High incident frequency (>5 per week) with complex distributed systems", "Rare incidents (<1 per month)", "No logging infrastructure"),
                                "High incident frequency (>5 per week) with complex distributed systems",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.final.q25",
                                "What operational risk is associated with over-reliance on AI systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI becomes too fast", "Engineers lose manual troubleshooting skills, creating vulnerability when AI fails", "AI costs too little", "AI becomes too accurate"),
                                "Engineers lose manual troubleshooting skills, creating vulnerability when AI fails",
                                "obj_final_assessment")
                );
