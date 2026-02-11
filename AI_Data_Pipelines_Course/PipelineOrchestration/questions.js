// Module 3 Assessment: AI Pipeline Orchestration and Optimization
// Tests understanding of intelligent scheduling and resource optimization

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.q1",
                                "What is the main advantage of ML-based predictive scheduling over static schedules?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It requires less infrastructure", "It optimizes execution times based on cost and resource availability", "It eliminates the need for monitoring", "It works without historical data"),
                                "It optimizes execution times based on cost and resource availability",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.q2",
                                "In the IntelligentScheduler implementation, what does the cost_weight parameter control?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The total cost of the pipeline", "The balance between optimizing for cost vs duration", "The number of retries allowed", "The API call frequency"),
                                "The balance between optimizing for cost vs duration",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.q3",
                                "Why is a 20% safety buffer added to predicted resource allocations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase profit margins", "To account for prediction uncertainty and prevent resource exhaustion", "To comply with regulations", "To improve data quality"),
                                "To account for prediction uncertainty and prevent resource exhaustion",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.q4",
                                "Which failure prediction signal indicates gradual performance degradation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sudden API errors", "Increasing execution time over multiple runs", "Schema changes", "Network outages"),
                                "Increasing execution time over multiple runs",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.q5",
                                "At what failure probability threshold does the FailurePredictor classify risk as 'critical'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 0.2", "Greater than 0.4", "Greater than 0.7", "Greater than 0.9"),
                                "Greater than 0.7",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.q6",
                                "In the end-to-end AI pipeline architecture, which layer handles schema drift detection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Storage layer", "Ingestion layer", "Transformation layer", "Monitoring layer"),
                                "Ingestion layer",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.q7",
                                "What is the primary cost optimization strategy for LLM API calls in production pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use only free models", "Cache results and batch requests", "Avoid using LLMs entirely", "Increase API rate limits"),
                                "Cache results and batch requests",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.q8",
                                "Which resource allocation strategy combines predictive scaling with reactive fallback mechanisms?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reactive Scaling", "Predictive Scaling", "Hybrid", "Reinforcement Learning"),
                                "Hybrid",
                                "obj_module_3")
                );
