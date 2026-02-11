test.AddQuestion( new Question ("q1_m2",
                                "What is the primary advantage of LLM-as-judge evaluation over human evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is always more accurate", "It provides scalable, cost-effective quality assessment", "It eliminates all biases", "It requires no configuration"),
                                "It provides scalable, cost-effective quality assessment",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2_m2",
                                "What is position bias in LLM-as-judge evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The judge prefers responses based on their presentation order", "The judge prefers longer responses", "The judge prefers its own model family", "The judge is influenced by previous evaluations"),
                                "The judge prefers responses based on their presentation order",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3_m2",
                                "How can position bias be mitigated in pairwise comparisons?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use only one judge model", "Randomly swap response order and average results", "Always present responses in alphabetical order", "Increase sample size"),
                                "Randomly swap response order and average results",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4_m2",
                                "What is verbosity bias?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The judge systematically prefers longer, more detailed responses", "The judge prefers shorter responses", "The judge cannot evaluate long responses", "The judge ignores response length"),
                                "The judge systematically prefers longer, more detailed responses",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5_m2",
                                "What does the null hypothesis (H₀) state in A/B testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The treatment is better than control", "There is no difference between variants", "The control is better than treatment", "More data is needed"),
                                "There is no difference between variants",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6_m2",
                                "What is a Type I error in hypothesis testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Failing to detect a real difference", "Concluding there is a difference when there isn't one (false positive)", "Using the wrong statistical test", "Having insufficient sample size"),
                                "Concluding there is a difference when there isn't one (false positive)",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7_m2",
                                "What is a Type II error?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Detecting a false positive", "Missing a real difference that exists (false negative)", "Using incorrect metrics", "Stopping the experiment too early"),
                                "Missing a real difference that exists (false negative)",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8_m2",
                                "What does Cohen's d measure?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Statistical significance", "Effect size in standard deviation units", "Sample size requirements", "Confidence level"),
                                "Effect size in standard deviation units",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q9_m2",
                                "A Cohen's d of 0.6 indicates what type of effect?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Negligible effect", "Small effect", "Medium effect", "Large effect"),
                                "Medium effect",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q10_m2",
                                "What is the purpose of confidence intervals?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To replace p-values entirely", "To provide a range of plausible values for the true effect", "To calculate sample size", "To detect biases"),
                                "To provide a range of plausible values for the true effect",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q11_m2",
                                "What problem arises from repeatedly checking experiment results and stopping when p < 0.05?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It saves time", "It inflates the false positive rate", "It improves accuracy", "It reduces sample size needs"),
                                "It inflates the false positive rate",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q12_m2",
                                "What is the recommended approach when a result is statistically significant but has a negligible effect size?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ship immediately", "Exercise caution - the practical impact may be too small", "Ignore the result", "Increase sample size"),
                                "Exercise caution - the practical impact may be too small",
                                "obj_module_2")
                );
