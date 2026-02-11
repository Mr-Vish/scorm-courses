test.AddQuestion( new Question ("q1",
                                "Which of the following is true regarding Integration with Observability Tools?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Datadog: Use the API to fetch logs and metrics, then send to LLM for analysis", "Post-Mortem Action Item Tracking", "Integration with Observability Tools", "Prevention: Implement connection pool health checks in CI"),
                                "Datadog: Use the API to fetch logs and metrics, then send to LLM for analysis",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What distinguishes Integration with Observability Tools from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Pattern detection: Regex rules, manual inspection", "Prevention", "Anomaly explanation: Dashboard investigation", "PagerDuty: Trigger LLM analysis when an incident is created, attach findings to the inc..."),
                                "PagerDuty: Trigger LLM analysis when an incident is created, attach findings to the inc...",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What is the primary purpose of Integration with Observability Tools?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Mitigation", "Document the connection pool configuration guide", "Grafana: Build an AI assistant panel that explains dashboard anomalies in natural language", "Add auto-scaling rule for database connections"),
                                "Grafana: Build an AI assistant panel that explains dashboard anomalies in natural language",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "Which statement about Integration with Observability Tools is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Multi-Service Correlation", "Slack: Deploy an incident bot that summarizes logs and suggests actions in the incident...", "AI-Powered Incident Response", "Regex rules, manual inspection"),
                                "Slack: Deploy an incident bot that summarizes logs and suggests actions in the incident...",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is an important aspect of Best Practices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Human approval for actions: Never let AI execute remediation steps without human confir...", "Mitigation: Add auto-scaling rule for database connections", "Pattern detection", "Add auto-scaling rule for database connections"),
                                "Human approval for actions: Never let AI execute remediation steps without human confir...",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What does Best Practices involve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI-Assisted Runbook Execution", "Context window management: Summarize logs before sending to the LLM - do not send raw g...", "Detection: Add alert for connection pool usage above 80%", "Runbook Selection"),
                                "Context window management: Summarize logs before sending to the LLM - do not send raw g...",
                                "obj_module_1")
                );