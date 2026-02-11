// Module 1 Assessment - Resilience Fundamentals

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.m1_q1",
                                "Which retry strategy is most effective at preventing multiple clients from crashing an API simultaneously after a recovery?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fixed interval retry", "Immediate retry", "Exponential backoff with jitter", "Linear backoff"),
                                "Exponential backoff with jitter",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.m1_q2",
                                "If a circuit breaker is in the 'OPEN' state, what happens to new requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are queued for later", "They are sent to the provider with a higher priority", "They are blocked immediately, returning a fallback or error instantly", "They are sent to a human reviewer"),
                                "They are blocked immediately, returning a fallback or error instantly",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.m1_q3",
                                "Which component of an LLM call is measured by 'Tokens Per Minute' (TPM)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The number of individual requests", "The combined total of input and output tokens processed in 60 seconds", "The number of users active on the platform", "The total size of the model in gigabytes"),
                                "The combined total of input and output tokens processed in 60 seconds",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.m1_q4",
                                "What is the primary benefit of the 'Bulkhead' pattern for API keys?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces the cost of each token", "It ensures that if one key's quota is exhausted, other features using different keys are unaffected", "It makes prompts harder to inject", "It speeds up the generation of the first token"),
                                "It ensures that if one key's quota is exhausted, other features using different keys are unaffected",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.m1_q5",
                                "When implementing a 'Hedged Request', what is the purpose of the 'hedge delay'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To wait for the user to confirm the request", "To give the primary provider a head start before sending a second request to a different provider", "To compress the prompt before sending it", "To encrypt the API key"),
                                "To give the primary provider a head start before sending a second request to a different provider",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.m1_q6",
                                "Which metric is most critical for user satisfaction in real-time streaming chat applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Total Completion Time", "Time To First Token (TTFT)", "Model Parameter Count", "Input Token Count"),
                                "Time To First Token (TTFT)",
                                "obj_module_1")
                );