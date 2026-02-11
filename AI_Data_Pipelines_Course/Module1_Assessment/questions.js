// Module 1 Assessment: Data Quality Monitoring and Schema Drift Detection
// 10 unique questions testing conceptual understanding and practical application

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.assess.q1",
                                "What type of data quality issue occurs when values are technically valid but contextually incorrect?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Completeness drift", "Semantic drift", "Schema drift", "Temporal drift"),
                                "Semantic drift",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.assess.q2",
                                "Which AI enhancement allows data quality monitoring to adapt as business conditions change legitimately?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fixed threshold rules", "Statistical baseline updates", "Manual threshold adjustments", "Static validation rules"),
                                "Statistical baseline updates",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.assess.q3",
                                "In the context of schema drift, which change is classified as CRITICAL and requires immediate pipeline halt?",
                                QUESTION_TYPE_CHOICE,
                                new Array("New optional columns added", "Additional enum values in existing fields", "Type changes from integer to string", "Metadata description updates"),
                                "Type changes from integer to string",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.assess.q4",
                                "What is the primary advantage of using LLMs for validating product descriptions compared to traditional regex patterns?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LLMs are faster", "LLMs can assess semantic quality and completeness", "LLMs are cheaper", "LLMs never make mistakes"),
                                "LLMs can assess semantic quality and completeness",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.assess.q5",
                                "Which cost optimization strategy is recommended for LLM-based validation in production pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Validate every single record", "Use only the most expensive models", "Implement caching and sampling strategies", "Avoid batching to ensure accuracy"),
                                "Implement caching and sampling strategies",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.assess.q6",
                                "The Chi-Square test is most appropriate for detecting distribution shifts in which type of data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Continuous numerical data", "Categorical data", "Time-series data only", "Binary data only"),
                                "Categorical data",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.assess.q7",
                                "In Apache Airflow integration, AI quality checks should be implemented as:",
                                QUESTION_TYPE_CHOICE,
                                new Array("Optional logging steps", "First-class pipeline tasks that can halt execution", "Post-processing reports only", "Manual review checkpoints"),
                                "First-class pipeline tasks that can halt execution",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.assess.q8",
                                "What is the recommended approach when implementing AI-powered quality monitoring for the first time?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Replace all existing validation immediately", "Start with 2-3 critical quality issues and expand gradually", "Wait until you have perfect models", "Implement only for new pipelines"),
                                "Start with 2-3 critical quality issues and expand gradually",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.assess.q9",
                                "Which data quality dimension benefits most from time-series forecasting models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Accuracy", "Uniqueness", "Freshness", "Completeness"),
                                "Freshness",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod1.assess.q10",
                                "What is the purpose of implementing feedback loops in AI quality monitoring systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase processing speed", "To allow operators to mark false positives and improve model accuracy", "To reduce storage costs", "To eliminate the need for retraining"),
                                "To allow operators to mark false positives and improve model accuracy",
                                "obj_module_1")
                );
