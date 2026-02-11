test.AddQuestion( new Question ("com.scorm.genai.gov.mod2_1",
                                "Which AI risk category includes concerns about hallucinations and inconsistent outputs?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Bias & Fairness", "Accuracy & Reliability", "Privacy & Data Protection", "Security & Adversarial"),
                                "Accuracy & Reliability",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod2_2",
                                "What is the risk score range for Tier 3 (High Risk) classification?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("5-10", "11-15", "16-20", "21-25"),
                                "16-20",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod2_3",
                                "Which technical control layer is responsible for PII detection and prompt injection detection?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Layer 1: Input Validation", "Layer 2: Model Safeguards", "Layer 3: Output Filtering", "Layer 4: Monitoring & Logging"),
                                "Layer 1: Input Validation",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod2_4",
                                "What is the recommended maximum tokens per request to prevent DoS attacks?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1000", "2000", "4000", "8000"),
                                "4000",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod2_5",
                                "Which temperature setting is recommended for factual tasks requiring consistency?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("0.1", "0.3", "0.7", "1.0"),
                                "0.3",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod2_6",
                                "What is the minimum retention period for request and response logs?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("30 days", "60 days", "90 days", "1 year"),
                                "90 days",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod2_7",
                                "Which model card section documents known weaknesses and failure modes?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Intended Use", "Performance", "Limitations", "Ethical Considerations"),
                                "Limitations",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod2_8",
                                "How long should audit trail logs be retained for compliance purposes?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("90 days", "1 year", "3 years", "7 years"),
                                "7 years",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod2_9",
                                "What is the recommended confidence threshold below which AI should escalate to human review?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("0.50", "0.65", "0.75", "0.85"),
                                "0.75",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod2_10",
                                "Data sheets for datasets should document preprocessing steps including PII redaction and quality filtering",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );
