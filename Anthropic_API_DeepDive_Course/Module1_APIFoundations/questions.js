test.AddQuestion( new Question ("com.anthropic.api.module1.q1",
                                "What is the primary architectural pattern used by the Anthropic Messages API?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("SOAP-based architecture", "RESTful architecture", "GraphQL architecture", "RPC-based architecture"),
                                "RESTful architecture",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q2",
                                "Which HTTP header is required for API key authentication in Anthropic API requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Authorization", "x-api-key", "api-token", "anthropic-auth"),
                                "x-api-key",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q3",
                                "The Anthropic API maintains session state between requests to optimize performance",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q4",
                                "Which Claude model is recommended for tasks requiring maximum intelligence and complex reasoning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Claude Haiku", "Claude Sonnet", "Claude Opus", "Claude Base"),
                                "Claude Opus",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q5",
                                "What is the context window size supported by all Claude models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("32,000 tokens", "100,000 tokens", "200,000 tokens", "500,000 tokens"),
                                "200,000 tokens",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q6",
                                "Claude Haiku is optimized for speed and cost-efficiency over maximum reasoning capability",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q7",
                                "Which parameter controls the maximum length of the model's response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("response_length", "max_tokens", "token_limit", "output_size"),
                                "max_tokens",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q8",
                                "In the Messages API, conversations must always start with which role?",
                                QUESTION_TYPE_CHOICE,
                                new Array("system", "assistant", "user", "admin"),
                                "user",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q9",
                                "A temperature value of 0.0 produces more creative and diverse outputs than a value of 1.0",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q10",
                                "What is the purpose of the system parameter in API requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To specify the operating system", "To provide high-level instructions that guide model behavior", "To configure system resources", "To enable system-level debugging"),
                                "To provide high-level instructions that guide model behavior",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q11",
                                "Which stop_reason indicates that the model naturally completed its response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("completed", "end_turn", "finished", "natural_stop"),
                                "end_turn",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q12",
                                "API keys should be stored in environment variables rather than hardcoded in source code",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q13",
                                "For a customer support chatbot handling 50,000 conversations daily with moderate complexity, which model is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Claude Opus for maximum quality", "Claude Sonnet for balanced performance", "Claude Haiku for speed", "Any model works equally well"),
                                "Claude Sonnet for balanced performance",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q14",
                                "What does the usage metadata in API responses help track?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User behavior patterns", "Token consumption for cost calculation", "System performance metrics", "Error rates"),
                                "Token consumption for cost calculation",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q15",
                                "Providing specific context and clear instructions in prompts improves output quality and consistency",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q16",
                                "Which prompting technique involves providing examples of desired input-output patterns?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Chain-of-thought prompting", "Few-shot learning", "Zero-shot learning", "Perspective taking"),
                                "Few-shot learning",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q17",
                                "For deterministic, consistent outputs in production systems, what temperature range is recommended?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.8 - 1.0", "0.4 - 0.7", "0.0 - 0.3", "Temperature doesn't affect consistency"),
                                "0.0 - 0.3",
                                "obj_module1")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module1.q18",
                                "The anthropic-version header ensures backward compatibility and predictable API behavior",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1")
                );
