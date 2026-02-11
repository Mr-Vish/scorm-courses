test.AddQuestion( new Question ("modelcards.module2.q1",
                                "Which type of bias occurs when training data does not adequately represent the population the model will serve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Historical Bias", "Representation Bias", "Measurement Bias", "Deployment Bias"),
                                "Representation Bias",
                                "obj_module2")
                );

test.AddQuestion( new Question ("modelcards.module2.q2",
                                "What is disaggregated evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Combining multiple models into one", "Breaking down performance metrics by demographic groups or other dimensions", "Removing biased data from the dataset", "Averaging performance across all users"),
                                "Breaking down performance metrics by demographic groups or other dimensions",
                                "obj_module2")
                );

test.AddQuestion( new Question ("modelcards.module2.q3",
                                "It is mathematically possible to satisfy all fairness criteria simultaneously for any model",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module2")
                );

test.AddQuestion( new Question ("modelcards.module2.q4",
                                "What does the 80% rule (disparate impact ratio) indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Models must be 80% accurate", "The ratio of positive prediction rates between groups should be at least 0.8", "80% of data should be used for training", "Models should be retrained every 80 days"),
                                "The ratio of positive prediction rates between groups should be at least 0.8",
                                "obj_module2")
                );

test.AddQuestion( new Question ("modelcards.module2.q5",
                                "Which fairness metric requires that true positive rates be equal across groups?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Demographic Parity", "Equal Opportunity", "Predictive Parity", "Calibration"),
                                "Equal Opportunity",
                                "obj_module2")
                );

test.AddQuestion( new Question ("modelcards.module2.q6",
                                "What is the purpose of counterfactual analysis in bias detection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To generate synthetic training data", "To test how predictions change when protected attributes are modified while keeping other features constant", "To remove outliers from the dataset", "To improve model accuracy"),
                                "To test how predictions change when protected attributes are modified while keeping other features constant",
                                "obj_module2")
                );

test.AddQuestion( new Question ("modelcards.module2.q7",
                                "Which bias mitigation strategy involves assigning higher weights to underrepresented groups during training?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Resampling", "Reweighting", "Threshold Optimization", "Calibration Adjustment"),
                                "Reweighting",
                                "obj_module2")
                );

test.AddQuestion( new Question ("modelcards.module2.q8",
                                "Adversarial debiasing works by training a model to make accurate predictions while preventing an adversary from predicting protected attributes from the model's internal representations",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2")
                );
