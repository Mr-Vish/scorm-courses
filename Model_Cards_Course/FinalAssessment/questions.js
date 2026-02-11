// Final Comprehensive Assessment - 25 Questions
// Covers all modules: Model Cards Fundamentals, Bias Detection and Fairness, Transparency and Governance

// Module 1: Model Cards Fundamentals (8 questions)
test.AddQuestion( new Question ("modelcards.final.m1_1",
                                "Who introduced the concept of model cards in 2019?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenAI researchers", "Google researchers including Margaret Mitchell", "Meta AI team", "IBM Research"),
                                "Google researchers including Margaret Mitchell",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m1_2",
                                "Which section of a model card documents what the model should NOT be used for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model Details", "Out-of-Scope Uses within Intended Use section", "Limitations", "Ethical Considerations"),
                                "Out-of-Scope Uses within Intended Use section",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m1_3",
                                "What is the recommended approach when documenting model limitations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use vague language to avoid liability", "Be specific and quantitative with concrete examples", "Only mention minor limitations", "Avoid mentioning limitations entirely"),
                                "Be specific and quantitative with concrete examples",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m1_4",
                                "Model cards should be created once at deployment and never updated",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m1_5",
                                "Which international standard provides guidelines for AI risk management?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ISO 9001", "NIST AI Risk Management Framework", "ITIL", "Six Sigma"),
                                "NIST AI Risk Management Framework",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m1_6",
                                "What information should be included in the Training Data section of a model card?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the dataset size", "Sources, size, demographics, preprocessing, labeling methodology, and known gaps", "Just the data source", "Only preprocessing steps"),
                                "Sources, size, demographics, preprocessing, labeling methodology, and known gaps",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m1_7",
                                "Which platform requires model cards for all published models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GitHub", "Hugging Face", "Docker Hub", "npm"),
                                "Hugging Face",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m1_8",
                                "What is a key principle of effective model cards?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use highly technical language throughout", "Prioritize marketing over accuracy", "Balance transparency with accessibility for diverse audiences", "Focus only on positive aspects"),
                                "Balance transparency with accessibility for diverse audiences",
                                "obj_final_assessment")
                );

// Module 2: Bias Detection and Fairness (9 questions)
test.AddQuestion( new Question ("modelcards.final.m2_1",
                                "What type of bias occurs when training data reflects historical societal inequalities?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Measurement Bias", "Historical Bias", "Aggregation Bias", "Deployment Bias"),
                                "Historical Bias",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m2_2",
                                "What does intersectionality reveal in bias analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Simple additive effects", "Compound effects of bias across multiple identity dimensions", "Only gender-based bias", "Technical performance issues"),
                                "Compound effects of bias across multiple identity dimensions",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m2_3",
                                "Which fairness metric requires that predicted probabilities match actual outcomes across groups?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Demographic Parity", "Equal Opportunity", "Calibration", "Equalized Odds"),
                                "Calibration",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m2_4",
                                "The 80% rule (disparate impact ratio) suggests that a ratio below 0.8 may indicate adverse impact",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m2_5",
                                "What is the purpose of disaggregated evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To combine all metrics into one number", "To break down performance metrics by demographic groups to identify disparities", "To simplify reporting", "To reduce testing time"),
                                "To break down performance metrics by demographic groups to identify disparities",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m2_6",
                                "Which bias mitigation strategy is applied during model training?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Threshold Optimization", "Fairness Constraints", "Calibration Adjustment", "Data Collection"),
                                "Fairness Constraints",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m2_7",
                                "What is SMOTE used for in bias mitigation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Removing biased data", "Generating synthetic minority examples to balance datasets", "Measuring fairness", "Deploying models"),
                                "Generating synthetic minority examples to balance datasets",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m2_8",
                                "Removing protected attributes like race or gender from training data completely eliminates bias",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m2_9",
                                "What tool provides 70+ fairness metrics and bias mitigation algorithms?",
                                QUESTION_TYPE_CHOICE,
                                new Array("TensorFlow", "AI Fairness 360", "PyTorch", "Scikit-learn"),
                                "AI Fairness 360",
                                "obj_final_assessment")
                );

// Module 3: Transparency and Governance (8 questions)
test.AddQuestion( new Question ("modelcards.final.m3_1",
                                "What is the purpose of a risk classification framework in AI governance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To eliminate all risks", "To categorize AI systems by risk level and apply proportionate governance", "To slow down development", "To increase costs"),
                                "To categorize AI systems by risk level and apply proportionate governance",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m3_2",
                                "According to the EU AI Act, what is required for high-risk AI systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No specific requirements", "Only basic documentation", "Comprehensive requirements including conformity assessment, risk management, and human oversight", "Immediate prohibition"),
                                "Comprehensive requirements including conformity assessment, risk management, and human oversight",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m3_3",
                                "What should an AI transparency report include?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only marketing information", "System inventory, fairness assessments, incidents, stakeholder engagement, and commitments", "Financial data only", "Employee information"),
                                "System inventory, fairness assessments, incidents, stakeholder engagement, and commitments",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m3_4",
                                "What is concept drift?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When developers change their minds", "Changes in the relationship between inputs and outputs over time", "When data storage location changes", "When model architecture is updated"),
                                "Changes in the relationship between inputs and outputs over time",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m3_5",
                                "Continuous monitoring of AI systems in production is optional if initial testing was thorough",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m3_6",
                                "What is the first step in an incident response process?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Blame assignment", "Triage to assess severity and impact", "Public announcement", "Model deletion"),
                                "Triage to assess severity and impact",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m3_7",
                                "Which monitoring metric tracks whether model predictions are leading to desired business outcomes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Latency", "Business Metrics like conversion rates", "CPU usage", "Memory consumption"),
                                "Business Metrics like conversion rates",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("modelcards.final.m3_8",
                                "What triggers the need for model retraining?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only when the model is completely broken", "Performance degradation, data drift, or scheduled intervals", "Never, models don't need retraining", "Only regulatory requirements"),
                                "Performance degradation, data drift, or scheduled intervals",
                                "obj_final_assessment")
                );
