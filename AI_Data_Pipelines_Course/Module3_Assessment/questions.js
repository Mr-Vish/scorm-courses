// Module 3 Assessment: AI Pipeline Orchestration and Optimization
// 10 unique questions testing understanding of intelligent scheduling and resource optimization

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.assess.q1",
                                "What is the primary problem with traditional static pipeline scheduling?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's too complex to implement", "It ignores actual constraints like data availability and resource costs", "It requires machine learning expertise", "It only works with small datasets"),
                                "It ignores actual constraints like data availability and resource costs",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.assess.q2",
                                "In ML-based scheduling, what does a cost_weight parameter of 0.0 indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only optimize for cost", "Only optimize for speed", "Balance cost and speed equally", "Disable optimization"),
                                "Only optimize for speed",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.assess.q3",
                                "Which resource allocation strategy uses ML to predict future needs before load increases?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reactive scaling", "Predictive scaling", "Manual scaling", "Fixed allocation"),
                                "Predictive scaling",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.assess.q4",
                                "What is the recommended hybrid approach for production resource allocation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only reactive scaling", "Only predictive scaling", "Predictive scaling with reactive fallback", "Manual scaling only"),
                                "Predictive scaling with reactive fallback",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.assess.q5",
                                "Which failure prediction signal indicates a gradual trend toward pipeline failure?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sudden API outage", "Execution time gradually increasing over multiple runs", "Single timeout error", "One-time data spike"),
                                "Execution time gradually increasing over multiple runs",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.assess.q6",
                                "At what failure probability threshold should immediate intervention be triggered?",
                                QUESTION_TYPE_CHOICE,
                                new Array(">20%", ">40%", ">70%", ">90%"),
                                ">70%",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.assess.q7",
                                "In the end-to-end AI pipeline architecture, which layer handles schema drift detection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Transformation layer", "Ingestion layer", "Storage layer", "Monitoring layer"),
                                "Ingestion layer",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.assess.q8",
                                "What is a key challenge with scaling down resources in production pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's too expensive", "Terminating instances mid-processing loses work", "It requires manual approval", "It increases latency"),
                                "Terminating instances mid-processing loses work",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.assess.q9",
                                "Which cost component typically has the highest variability in AI-powered pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Storage costs", "LLM API calls", "Network bandwidth", "Monitoring infrastructure"),
                                "LLM API calls",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.aidatapipelines.mod3.assess.q10",
                                "What is the recommended approach when AI-powered orchestration doesn't justify costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Force implementation anyway", "Maintain fallback to traditional methods", "Abandon all automation", "Increase budget"),
                                "Maintain fallback to traditional methods",
                                "obj_module_3")
                );
