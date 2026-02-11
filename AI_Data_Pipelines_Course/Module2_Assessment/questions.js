// Module 2 Assessment: Anomaly Detection and Automated Remediation
// 10 unique questions testing understanding of anomaly detection methods and remediation strategies

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod2.assess.q1",
                                "Which type of anomaly involves sequences or combinations of values that violate learned patterns?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Volume anomalies", "Value anomalies", "Pattern anomalies", "Temporal anomalies"),
                                "Pattern anomalies",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod2.assess.q2",
                                "What is the primary advantage of Isolation Forest over statistical methods for anomaly detection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's faster", "It handles multi-dimensional data without assuming specific distributions", "It requires less training data", "It never produces false positives"),
                                "It handles multi-dimensional data without assuming specific distributions",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod2.assess.q3",
                                "In the IQR method, values are considered outliers if they fall outside which range?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Mean ± 2 standard deviations", "Q1 - 1.5×IQR to Q3 + 1.5×IQR", "0 to 100 percentile", "Median ± 3×MAD"),
                                "Q1 - 1.5×IQR to Q3 + 1.5×IQR",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod2.assess.q4",
                                "What is the primary role of LLMs in anomaly detection systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Detecting anomalies faster than ML models", "Explaining detected anomalies and suggesting root causes", "Replacing all statistical methods", "Reducing infrastructure costs"),
                                "Explaining detected anomalies and suggesting root causes",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod2.assess.q5",
                                "Which factor should NOT be considered when deciding whether to auto-remediate an anomaly?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Severity of the issue", "Confidence in the cause and fix", "Time of day the anomaly occurred", "Reversibility of the fix"),
                                "Time of day the anomaly occurred",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod2.assess.q6",
                                "What is the typical auto-remediation success rate for API rate limiting issues?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50%", "70%", "90%+", "100%"),
                                "90%+",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod2.assess.q7",
                                "Which monitoring metric measures the average time from anomaly detection to resolution?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MTTD (Mean Time to Detection)", "MTTR (Mean Time to Remediation)", "Anomaly Rate", "False Positive Rate"),
                                "MTTR (Mean Time to Remediation)",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod2.assess.q8",
                                "What is the recommended target for pipeline success rate in production environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array(">95%", ">99%", ">80%", ">90%"),
                                ">99%",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod2.assess.q9",
                                "Which anomaly detection method is best suited for data with strong seasonal patterns?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Z-Score method", "Isolation Forest", "Forecast-based methods (Prophet, ARIMA)", "DBSCAN clustering"),
                                "Forecast-based methods (Prophet, ARIMA)",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod2.assess.q10",
                                "What should be included in LLM prompts for effective root cause analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the anomaly metric name", "Anomaly details, pipeline context, recent changes, and historical patterns", "Just the error message", "Only the timestamp"),
                                "Anomaly details, pipeline context, recent changes, and historical patterns",
                                "obj_module_2")
                );
