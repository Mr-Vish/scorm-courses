test.AddQuestion( new Question ("q1_m3",
                                "What is the main limitation of traditional A/B testing that multi-armed bandits address?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Statistical rigor", "Regret accumulation from continuing to send traffic to inferior variants", "Sample size requirements", "Metric selection"),
                                "Regret accumulation from continuing to send traffic to inferior variants",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q2_m3",
                                "In multi-armed bandit algorithms, what does 'exploitation' mean?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Testing new variants randomly", "Selecting the currently best-performing variant", "Increasing sample size", "Stopping the experiment"),
                                "Selecting the currently best-performing variant",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3_m3",
                                "What does 'exploration' mean in the context of multi-armed bandits?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Trying alternative variants to discover if they might be better", "Only using the best variant", "Ending the experiment", "Increasing traffic allocation"),
                                "Trying alternative variants to discover if they might be better",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q4_m3",
                                "In epsilon-greedy algorithm, what does epsilon (ε) represent?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The probability of exploitation", "The probability of exploration", "The sample size", "The confidence level"),
                                "The probability of exploration",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q5_m3",
                                "What is the main advantage of Thompson Sampling over epsilon-greedy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It requires less computation", "It automatically balances exploration and exploitation without parameter tuning", "It always converges faster", "It uses less memory"),
                                "It automatically balances exploration and exploitation without parameter tuning",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q6_m3",
                                "What are guardrail metrics?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The primary success metrics", "Metrics that ensure optimizations don't cause unintended harm", "Metrics for calculating sample size", "Metrics for user segmentation"),
                                "Metrics that ensure optimizations don't cause unintended harm",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q7_m3",
                                "What should be the action if a safety violation guardrail is breached?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Continue monitoring", "Immediate experiment pause", "Increase sample size", "Change the metric"),
                                "Immediate experiment pause",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q8_m3",
                                "What is a contextual bandit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A bandit that runs only at specific times", "A bandit that considers user or request context when selecting variants", "A bandit with fixed traffic allocation", "A bandit that uses only exploitation"),
                                "A bandit that considers user or request context when selecting variants",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q9_m3",
                                "When should you use traditional A/B testing instead of multi-armed bandits?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For continuous optimization", "For high-stakes decisions requiring rigorous statistical validation", "When you want to minimize regret", "For personalization"),
                                "For high-stakes decisions requiring rigorous statistical validation",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q10_m3",
                                "What is the purpose of a canary release in production deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To deploy to all users immediately", "To detect severe issues with minimal user impact before wider rollout", "To reduce costs", "To increase statistical power"),
                                "To detect severe issues with minimal user impact before wider rollout",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q11_m3",
                                "According to the decision matrix, what should you do if a result is statistically significant but has a small effect size?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ship immediately", "Evaluate whether the improvement is worth the cost and complexity", "Reject the result", "Extend the experiment"),
                                "Evaluate whether the improvement is worth the cost and complexity",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q12_m3",
                                "What is a key ethical consideration in GenAI experimentation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximizing profit at all costs", "Monitoring performance across demographic groups to ensure fairness", "Hiding experiment details from users", "Collecting as much data as possible"),
                                "Monitoring performance across demographic groups to ensure fairness",
                                "obj_module_3")
                );
