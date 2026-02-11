test.AddQuestion( new Question ("com.scorm.genai.gov.mod3_1",
                                "What is the recommended frequency for internal AI audits?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Monthly", "Quarterly", "Semi-annually", "Annually"),
                                "Quarterly",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod3_2",
                                "Which fairness metric measures the ratio of positive rates across demographic groups?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Demographic Parity", "Equalized Odds", "Disparate Impact", "Equal Opportunity"),
                                "Disparate Impact",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod3_3",
                                "What is the minimum disparate impact ratio to pass the 80% rule?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("0.6", "0.7", "0.8", "0.9"),
                                "0.8",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod3_4",
                                "Which OWASP Top 10 for LLM vulnerability involves attempting to override system instructions?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("LLM01: Prompt Injection", "LLM02: Insecure Output Handling", "LLM06: Sensitive Information Disclosure", "LLM08: Excessive Agency"),
                                "LLM01: Prompt Injection",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod3_5",
                                "Under GDPR, how many hours do organizations have to notify regulators of a data breach?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("24 hours", "48 hours", "72 hours", "96 hours"),
                                "72 hours",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod3_6",
                                "Which EU AI Act risk tier requires conformity assessment and registration in the EU database?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Unacceptable Risk", "High-Risk", "Limited Risk", "Minimal Risk"),
                                "High-Risk",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod3_7",
                                "What is the response time requirement for P0 (Critical) AI incidents?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("15 minutes", "1 hour", "4 hours", "Immediate"),
                                "Immediate",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod3_8",
                                "In the incident response workflow, which step involves root cause analysis?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Step 2: Triage", "Step 3: Contain", "Step 4: Investigate", "Step 5: Remediate"),
                                "Step 4: Investigate",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod3_9",
                                "What is the typical timeframe for conducting post-incident reviews after an AI incident?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Within 7 days", "Within 14 days", "Within 30 days", "Within 90 days"),
                                "Within 30 days",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod3_10",
                                "GDPR Article 22 gives individuals the right not to be subject to decisions based solely on automated processing that produce legal or similarly significant effects",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );
