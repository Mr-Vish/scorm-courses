// Module 1 Assessment: Data Quality Monitoring and Schema Drift Detection
// Tests understanding of AI-powered quality monitoring concepts

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.q1",
                                "What is the primary limitation of traditional rule-based data quality checks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too expensive to implement", "They cannot detect semantic drift and distribution shifts", "They require machine learning expertise", "They only work with structured data"),
                                "They cannot detect semantic drift and distribution shifts",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.q2",
                                "Which data quality dimension uses LLMs to validate free-text fields for plausibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Completeness", "Accuracy", "Freshness", "Uniqueness"),
                                "Accuracy",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.q3",
                                "In the SchemaDriftDetector implementation, what severity level is assigned when columns are removed or types change?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Warning", "Critical", "Medium", "Low"),
                                "Critical",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.q4",
                                "What is the recommended temperature setting for LLM-based data validation to ensure consistent results?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.1 (low)", "0.5 (medium)", "0.9 (high)", "1.5 (very high)"),
                                "0.1 (low)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.q5",
                                "The Kolmogorov-Smirnov (KS) test is used to detect what type of data issue?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Missing values", "Distribution shifts", "Schema changes", "Duplicate records"),
                                "Distribution shifts",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.q6",
                                "In Apache Airflow integration, what should happen if critical schema drift is detected?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Log a warning and continue", "Raise an exception to stop the pipeline", "Send an email notification", "Automatically fix the schema"),
                                "Raise an exception to stop the pipeline",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.q7",
                                "Which of the following is NOT a recommended best practice for AI-powered quality monitoring?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Start with high-impact fields", "Replace all traditional rules with AI immediately", "Monitor AI model performance", "Implement gradual rollout"),
                                "Replace all traditional rules with AI immediately",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.q8",
                                "What is the purpose of caching LLM validation results?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve data quality", "To reduce API costs for repeated values", "To increase processing speed only", "To store historical data"),
                                "To reduce API costs for repeated values",
                                "obj_module_1")
                );
