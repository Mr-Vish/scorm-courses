// Final Comprehensive Assessment - Covers all 3 modules with unique questions

// Module 1 Questions
test.AddQuestion( new Question ("final_q1",
                                "Why is hash-based bucketing used for user assignment in A/B tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make experiments run faster", "To ensure users receive consistent variant experiences across sessions", "To reduce server load", "To increase statistical power"),
                                "To ensure users receive consistent variant experiences across sessions",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q2",
                                "Which GenAI variable would you test to optimize the balance between creativity and consistency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model selection", "Temperature settings", "RAG configuration", "UI presentation"),
                                "Temperature settings",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q3",
                                "What is the primary purpose of calculating required sample size before an experiment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "To ensure adequate statistical power to detect meaningful effects", "To speed up the experiment", "To simplify analysis"),
                                "To ensure adequate statistical power to detect meaningful effects",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q4",
                                "In a ramp-up strategy, what is monitored during the canary phase?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only user satisfaction", "Error rates, crashes, and severe quality issues", "Only cost metrics", "Only engagement metrics"),
                                "Error rates, crashes, and severe quality issues",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q5",
                                "What does Sample Ratio Mismatch (SRM) indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The experiment is successful", "Implementation bugs or biased assignment in the experiment", "Users prefer one variant", "The sample size is too small"),
                                "Implementation bugs or biased assignment in the experiment",
                                "obj_final_assessment")
                );

// Module 2 Questions
test.AddQuestion( new Question ("final_q6",
                                "What is self-preference bias in LLM-as-judge evaluation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The judge prefers longer responses", "The judge may favor outputs from its own model family", "The judge prefers the first response", "The judge cannot make decisions"),
                                "The judge may favor outputs from its own model family",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q7",
                                "How can you mitigate self-preference bias?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use only one judge model", "Use a judge model from a different provider than the models being tested", "Increase temperature", "Reduce sample size"),
                                "Use a judge model from a different provider than the models being tested",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q8",
                                "What is the purpose of using structured output formats (like JSON) in LLM-as-judge?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make responses longer", "To enable consistent parsing and analysis of judgments", "To reduce costs", "To increase creativity"),
                                "To enable consistent parsing and analysis of judgments",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q9",
                                "Which statistical test is appropriate for comparing continuous metrics like average quality scores?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Two-proportion z-test", "Two-sample t-test", "Chi-square test", "ANOVA"),
                                "Two-sample t-test",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q10",
                                "What does a confidence interval provide that a p-value alone does not?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The exact sample size needed", "A range of plausible values for the true treatment effect", "The probability of Type I error", "The cost of the experiment"),
                                "A range of plausible values for the true treatment effect",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q11",
                                "What is p-hacking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using proper statistical methods", "Testing multiple metrics and only reporting significant ones", "Calculating p-values correctly", "Increasing sample size"),
                                "Testing multiple metrics and only reporting significant ones",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q12",
                                "A Cohen's d of 0.15 would be interpreted as:",
                                QUESTION_TYPE_CHOICE,
                                new Array("Large effect", "Medium effect", "Small effect", "Negligible effect"),
                                "Negligible effect",
                                "obj_final_assessment")
                );

// Module 3 Questions
test.AddQuestion( new Question ("final_q13",
                                "What is the key difference between multi-armed bandits and traditional A/B testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Bandits require more users", "Bandits adaptively allocate traffic while A/B tests use fixed allocation", "Bandits are less accurate", "Bandits cannot measure statistical significance"),
                                "Bandits adaptively allocate traffic while A/B tests use fixed allocation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q14",
                                "In an epsilon-greedy algorithm with ε=0.2, what percentage of the time does the algorithm explore?",
                                QUESTION_TYPE_CHOICE,
                                new Array("80%", "20%", "50%", "100%"),
                                "20%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q15",
                                "What type of guardrail metric is 'hallucination rate'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Performance guardrail", "Business guardrail", "Safety and quality guardrail", "Engagement guardrail"),
                                "Safety and quality guardrail",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q16",
                                "If P95 latency exceeds 5 seconds, this violates which type of guardrail?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Safety guardrail", "Performance guardrail", "Business guardrail", "Quality guardrail"),
                                "Performance guardrail",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q17",
                                "What should be documented BEFORE starting an experiment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the results", "Hypothesis, primary metric, success criteria, and variant configurations", "Only the winner", "Only user feedback"),
                                "Hypothesis, primary metric, success criteria, and variant configurations",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q18",
                                "In the hybrid bandit-informed A/B testing approach, what happens in Phase 1?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploy to production", "Use multi-armed bandit to quickly identify promising variants", "Run traditional A/B test", "Document results"),
                                "Use multi-armed bandit to quickly identify promising variants",
                                "obj_final_assessment")
                );

// Cross-Module Integration Questions
test.AddQuestion( new Question ("final_q19",
                                "You observe a statistically significant result (p=0.03) with Cohen's d=0.15, but the treatment increases cost by 40%. What should you do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ship immediately because it's significant", "Evaluate carefully - small effect size and high cost may not justify the change", "Ignore the cost increase", "Extend the experiment"),
                                "Evaluate carefully - small effect size and high cost may not justify the change",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q20",
                                "Which combination of techniques would be most appropriate for testing a high-risk GenAI feature?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Equal traffic split with no guardrails", "Unequal allocation (90/10), comprehensive guardrails, and gradual ramp-up", "Multi-armed bandit with no monitoring", "Skip testing and deploy directly"),
                                "Unequal allocation (90/10), comprehensive guardrails, and gradual ramp-up",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q21",
                                "To evaluate GenAI output quality at scale while mitigating position bias, you should:",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use only human evaluators", "Use LLM-as-judge with randomized response ordering", "Skip evaluation entirely", "Only test with small samples"),
                                "Use LLM-as-judge with randomized response ordering",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q22",
                                "What is the correct sequence for a production deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Full deployment immediately", "Internal testing → Canary → Staged rollout → Full deployment", "Skip testing and monitor after deployment", "Deploy to 50% of users immediately"),
                                "Internal testing → Canary → Staged rollout → Full deployment",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q23",
                                "Which scenario best justifies using a contextual bandit instead of a standard A/B test?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Testing two completely different features", "Optimizing model selection based on query complexity and user expertise", "One-time decision with long-term impact", "When you need confidence intervals"),
                                "Optimizing model selection based on query complexity and user expertise",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q24",
                                "An experiment shows treatment improves engagement by 20% but increases safety violations. What is the correct action?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ship because engagement improved", "Pause immediately due to safety guardrail violation", "Ignore safety and focus on engagement", "Reduce sample size"),
                                "Pause immediately due to safety guardrail violation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q25",
                                "What is the most important principle for building an experimentation culture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only run experiments that will succeed", "Embrace failure as learning and question assumptions with data", "Avoid documenting failed experiments", "Let opinions override data"),
                                "Embrace failure as learning and question assumptions with data",
                                "obj_final_assessment")
                );
