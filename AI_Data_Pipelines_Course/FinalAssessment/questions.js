// Final Comprehensive Assessment
// 25 completely unique questions (no duplicates from module assessments)
// Covers all modules with scenario-based and application-focused questions

// Module 1: Data Quality and Schema Drift (7 questions)
test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q1",
                                "A retail company notices their customer age distribution shifted from mean 45 to mean 25 over two months, but all individual ages are valid. What type of issue is this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Schema drift", "Semantic drift indicating potential data collection changes", "Completeness issue", "Accuracy problem"),
                                "Semantic drift indicating potential data collection changes",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q2",
                                "When implementing Great Expectations with AI enhancements, what type of custom expectation validates text quality using LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ExpectColumnValuesToMatchRegex", "ExpectColumnValuesToPassLLMValidation", "ExpectColumnValuesToBeUnique", "ExpectColumnValuesToBeInSet"),
                                "ExpectColumnValuesToPassLLMValidation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q3",
                                "Which statistical test should be used to detect if the proportion of product categories has shifted significantly?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Kolmogorov-Smirnov test", "Chi-square test", "T-test", "Z-score test"),
                                "Chi-square test",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q4",
                                "In dbt testing, what advantage do AI-powered custom tests have over standard dbt tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They run faster", "They learn and adapt to changing data patterns", "They require no configuration", "They eliminate all false positives"),
                                "They learn and adapt to changing data patterns",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q5",
                                "A pipeline processes addresses. Which validation approach is most appropriate for checking address plausibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Regex pattern matching only", "LLM-based semantic validation", "Simple null checks", "Length validation"),
                                "LLM-based semantic validation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q6",
                                "What is the recommended sampling rate for LLM validation to balance cost and detection effectiveness?",
                                QUESTION_TYPE_CHOICE,
                                new Array("100% of records", "50% of records", "10% of records", "1% of records"),
                                "10% of records",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q7",
                                "When should a schema drift detection system update its baseline schema?",
                                QUESTION_TYPE_CHOICE,
                                new Array("After every pipeline run", "Only when critical changes are detected and approved", "Never - baselines should be static", "Randomly to avoid staleness"),
                                "Only when critical changes are detected and approved",
                                "obj_final_assessment")
                );

// Module 2: Anomaly Detection and Remediation (7 questions)
test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q8",
                                "A customer makes 100 purchases in one hour. Individual transactions look normal. What type of anomaly is this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Value anomaly", "Pattern anomaly", "Volume anomaly", "Temporal anomaly"),
                                "Pattern anomaly",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q9",
                                "What is the main limitation of using Z-score for anomaly detection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's too slow", "It assumes normal distribution and is affected by outliers", "It requires labeled training data", "It only works with categorical data"),
                                "It assumes normal distribution and is affected by outliers",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q10",
                                "In autoencoder-based anomaly detection, what indicates an anomaly?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Low reconstruction error", "High reconstruction error", "Zero reconstruction error", "Negative reconstruction error"),
                                "High reconstruction error",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q11",
                                "When should automated remediation escalate to human operators?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For all anomalies regardless of severity", "When confidence is low or impact is high", "Never - automation should handle everything", "Only during business hours"),
                                "When confidence is low or impact is high",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q12",
                                "What is the recommended target for false positive rate in anomaly detection systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("<5%", "<10%", "<25%", "<50%"),
                                "<10%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q13",
                                "Which dashboard metric provides a single composite view of overall data quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Anomaly Rate", "Composite Quality Score", "Throughput", "Error Rate"),
                                "Composite Quality Score",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q14",
                                "For duplicate record remediation, what is the typical success rate when deduplication logic is clear?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50%", "70%", "85%", "100%"),
                                "85%",
                                "obj_final_assessment")
                );

// Module 3: Orchestration and Optimization (7 questions)
test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q15",
                                "What is the primary benefit of ML-based pipeline scheduling over fixed cron schedules?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's easier to configure", "It optimizes across multiple constraints like cost, speed, and data availability", "It requires no historical data", "It eliminates all pipeline failures"),
                                "It optimizes across multiple constraints like cost, speed, and data availability",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q16",
                                "In reinforcement learning-based resource allocation, how does the agent learn optimal policies?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By reading documentation", "Through trial and error, observing outcomes of different scaling decisions", "By copying other systems", "By following fixed rules"),
                                "Through trial and error, observing outcomes of different scaling decisions",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q17",
                                "What is the typical safety buffer percentage added to ML resource predictions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("5%", "10%", "20%", "50%"),
                                "20%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q18",
                                "Which failure prediction signal is most indicative of memory leaks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sudden API failures", "Memory usage gradually increasing over multiple runs", "One-time timeout", "Schema changes"),
                                "Memory usage gradually increasing over multiple runs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q19",
                                "In the end-to-end AI pipeline architecture, where should final quality validation occur?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Before extraction", "After transformation, before loading", "Only in the monitoring layer", "Never - validate only at ingestion"),
                                "After transformation, before loading",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q20",
                                "What is the main challenge with aggressive scale-down policies?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They cost too much", "They risk interrupting work in progress", "They require manual approval", "They increase latency"),
                                "They risk interrupting work in progress",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q21",
                                "When calculating ROI for AI pipeline enhancements, which benefit is often the largest but hardest to quantify?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Infrastructure cost savings", "Labor savings", "Improved data quality leading to better business decisions", "Prevented downtime"),
                                "Improved data quality leading to better business decisions",
                                "obj_final_assessment")
                );

// Module 4: Advantages and Limitations (4 questions)
test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q22",
                                "What is the primary mitigation strategy for the cold start problem in new pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Wait indefinitely for data", "Start with rule-based checks and transition to ML as data accumulates", "Use only LLMs", "Avoid AI entirely"),
                                "Start with rule-based checks and transition to ML as data accumulates",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q23",
                                "Which scenario represents a poor fit for AI-powered pipeline monitoring?",
                                QUESTION_TYPE_CHOICE,
                                new Array("High-volume pipeline with complex interdependencies", "Simple pipeline with well-defined rules and rare failures", "Pipeline with frequent schema changes", "Pipeline with high downtime costs"),
                                "Simple pipeline with well-defined rules and rare failures",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q24",
                                "What is the recommended approach to address data privacy concerns when using external LLM APIs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Avoid LLMs entirely", "Use on-premise models and implement data masking", "Send all data without restrictions", "Only use LLMs in development"),
                                "Use on-premise models and implement data masking",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.final.new.q25",
                                "According to the course, by what percentage can AI-powered monitoring reduce mean time to detection (MTTD)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-20%", "30-40%", "60-80%", "90-95%"),
                                "60-80%",
                                "obj_final_assessment")
                );
