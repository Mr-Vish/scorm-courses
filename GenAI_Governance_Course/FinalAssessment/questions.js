test.AddQuestion( new Question ("com.scorm.genai.gov.final_1",
                                "Which ISO standard specifically addresses AI management systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("ISO 27001", "ISO 31000", "ISO 42001", "ISO 9001"),
                                "ISO 42001",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_2",
                                "What type of AI use is classified as 'Unacceptable Risk' and prohibited under the EU AI Act?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Credit scoring", "Social scoring by governments", "Customer chatbots", "Hiring assistance"),
                                "Social scoring by governments",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_3",
                                "Which policy type defines standards for building AI systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Acceptable Use Policy", "Data Handling Policy", "Model Development Policy", "Monitoring Policy"),
                                "Model Development Policy",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_4",
                                "In the incident response plan, what is the escalation path for P0 incidents?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Team lead → Product manager", "Product manager → Department head", "Department head → VP Engineering + Legal", "VP Engineering + Legal → CEO + Board"),
                                "VP Engineering + Legal → CEO + Board",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_5",
                                "Who is Responsible (in RACI) for deploying AI systems to production?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AI Board", "Model Owner", "Product Team", "Risk Manager"),
                                "Product Team",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_6",
                                "Which metric is used to assess AI governance maturity?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Lines of code", "Number of models", "Governance maturity score", "Revenue generated"),
                                "Governance maturity score",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_7",
                                "What is the typical cost range for a large enterprise AI governance program (100+ systems)?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("$50K-100K/year", "$200K-500K/year", "$2M-5M/year", "$10M-20M/year"),
                                "$2M-5M/year",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_8",
                                "Which risk assessment method is used for evaluating privacy risks?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Benchmark testing", "Fairness metrics", "PII detection and data flow mapping", "Red teaming"),
                                "PII detection and data flow mapping",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_9",
                                "What is the residual risk after mitigations have been implemented?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("The risk before any controls", "The risk after controls are applied", "The maximum possible risk", "The average risk across all systems"),
                                "The risk after controls are applied",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_10",
                                "Which library is commonly used for PII detection in Python?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("NumPy", "Pandas", "Presidio", "TensorFlow"),
                                "Presidio",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_11",
                                "What is the recommended rate limit per user to prevent abuse?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("10 requests/hour", "50 requests/hour", "100 requests/hour", "500 requests/hour"),
                                "100 requests/hour",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_12",
                                "Which section of a model card documents potential harms and affected stakeholders?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Model Details", "Performance", "Limitations", "Ethical Considerations"),
                                "Ethical Considerations",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_13",
                                "How often should model cards be updated?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Daily", "Weekly", "With each version", "Annually"),
                                "With each version",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_14",
                                "What is the minimum sample size per demographic group for statistical significance in bias audits?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("10 samples", "50 samples", "100 samples", "1000 samples"),
                                "100 samples",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_15",
                                "Which audit finding severity requires system to be disabled immediately?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("P3 (Low)", "P2 (Medium)", "P1 (High)", "P0 (Critical)"),
                                "P0 (Critical)",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_16",
                                "Under GDPR, what is the maximum penalty for violations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("€10M or 2% revenue", "€20M or 4% revenue", "€35M or 7% revenue", "€50M or 10% revenue"),
                                "€20M or 4% revenue",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_17",
                                "Which regulation requires clinical validation and FDA clearance for diagnostic AI?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("HIPAA", "GDPR", "FDA Regulation", "CCPA"),
                                "FDA Regulation",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_18",
                                "What document is required when using third-party AI services for GDPR compliance?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Service Level Agreement", "Data Processing Agreement", "Non-Disclosure Agreement", "Master Service Agreement"),
                                "Data Processing Agreement",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_19",
                                "What is the Mean Time to Detect (MTTD) target for well-governed AI systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("5 minutes", "15 minutes", "1 hour", "4 hours"),
                                "15 minutes",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_20",
                                "Which governance maturity level is characterized by quantitative metrics and proactive risk management?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Level 2: Developing", "Level 3: Defined", "Level 4: Managed", "Level 5: Optimizing"),
                                "Level 4: Managed",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_21",
                                "What is a key advantage of implementing AI governance?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Eliminates all AI risks", "Prevents regulatory fines and builds trust", "Guarantees 100% accuracy", "Removes need for human oversight"),
                                "Prevents regulatory fines and builds trust",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_22",
                                "Which challenge is associated with AI governance implementation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Too simple to implement", "No resource requirements", "Tension between velocity and control", "Eliminates all development time"),
                                "Tension between velocity and control",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_23",
                                "What is the recommended approach for organizations in the experimentation phase with no production AI?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Full governance program", "Lightweight policies on data handling", "No governance needed", "External audit required"),
                                "Lightweight policies on data handling",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_24",
                                "What is the estimated ROI from preventing incidents through governance?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("2x", "5x", "16x", "50x"),
                                "16x",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.final_25",
                                "Governance should be embedded in the development workflow rather than being a separate process",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
