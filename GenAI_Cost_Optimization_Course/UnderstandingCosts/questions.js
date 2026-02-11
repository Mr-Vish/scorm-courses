test.AddQuestion( new Question ("q1",
                                "How is Model Selection Strategy best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cost Estimation Formula", "Bedrock native prompt caching", "Haiku for triage: Use fast/cheap models for classification, routing, simple tasks", "Retries: Failed requests still consume tokens on the provider side"),
                                "Haiku for triage: Use fast/cheap models for classification, routing, simple tasks",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which statement about Model Selection Strategy is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sonnet for most work: Best balance of quality and cost", "100% (similar hit)", "Bedrock native prompt caching", "Cost Estimation Formula"),
                                "Sonnet for most work: Best balance of quality and cost",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which of the following is true regarding Model Selection Strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use prompt caching: Bedrock caches system prompts, reducing repeat costs by up to 90%", "Opus for critical tasks: Reserve for complex reasoning where quality is paramount", "Model Selection Strategy", "Up to 90% on input tokens"),
                                "Opus for critical tasks: Reserve for complex reasoning where quality is paramount",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "Which of the following best describes Prompt Optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt cache", "100% (cache hit)", "Use prompt caching: Bedrock caches system prompts, reducing repeat costs by up to 90%", "Shorten system prompts: Every token costs money on every request"),
                                "Shorten system prompts: Every token costs money on every request",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is a key characteristic of Prompt Optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RAG context: Retrieved documents add to input token count", "Semantic cache", "Most GenAI services charge per token (roughly 4 characters or 0.75 words). Costs differ...", "Use prompt caching: Bedrock caches system prompts, reducing repeat costs by up to 90%"),
                                "Use prompt caching: Bedrock caches system prompts, reducing repeat costs by up to 90%",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What role does Prompt Optimization play in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Claude 3.5 Sonnet", "Limit output tokens: Set max_tokens to the minimum needed", "Extended thinking: Thinking tokens billed at output rates", "Prompt Optimization"),
                                "Limit output tokens: Set max_tokens to the minimum needed",
                                "obj_module_1")
                );