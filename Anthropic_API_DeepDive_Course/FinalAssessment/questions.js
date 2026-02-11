test.AddQuestion( new Question ("com.anthropic.api.final.q1",
                                "Which architectural principle allows the Anthropic API to scale horizontally?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Stateful session management", "Stateless communication", "Client-side caching", "Persistent connections"),
                                "Stateless communication",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q2",
                                "For a production chatbot handling 10,000 daily conversations requiring balanced performance and cost, which combination is optimal?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Claude Opus with standard API", "Claude Sonnet with streaming", "Claude Haiku with batch processing", "Claude Opus with batch processing"),
                                "Claude Sonnet with streaming",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q3",
                                "The Messages API requires conversations to alternate between user and assistant roles",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q4",
                                "Which parameter combination produces the most deterministic, consistent outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("temperature=1.0, top_p=1.0", "temperature=0.0, top_p=0.9", "temperature=0.5, top_p=0.5", "temperature=0.0, top_p=1.0"),
                                "temperature=0.0, top_p=1.0",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q5",
                                "What is the primary benefit of using Server-Sent Events (SSE) for streaming responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced token costs", "Improved perceived performance through incremental delivery", "Higher accuracy", "Automatic error recovery"),
                                "Improved perceived performance through incremental delivery",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q6",
                                "Tool use enables Claude to access real-time information and interact with external systems",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q7",
                                "A system experiences repeated 429 errors. What is the most appropriate immediate action?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increase request frequency to compensate", "Implement exponential backoff and request queuing", "Switch to a different model", "Disable error handling"),
                                "Implement exponential backoff and request queuing",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q8",
                                "Which scenario justifies using Claude Opus despite higher costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Simple text classification", "Complex legal document analysis requiring deep reasoning", "Basic FAQ responses", "High-volume content moderation"),
                                "Complex legal document analysis requiring deep reasoning",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q9",
                                "API keys should be stored in environment variables or secret management systems, never in source code",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q10",
                                "What is the recommended approach for handling a conversation that exceeds the context window?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Truncate the oldest messages", "Summarize conversation history", "Start a new conversation", "All of the above are valid strategies"),
                                "All of the above are valid strategies",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q11",
                                "In batch processing, what format is used for the request file?",
                                QUESTION_TYPE_CHOICE,
                                new Array("CSV", "JSONL (JSON Lines)", "XML", "Plain text"),
                                "JSONL (JSON Lines)",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q12",
                                "Few-shot learning in prompt engineering involves providing examples of desired input-output patterns",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q13",
                                "Which combination of strategies provides maximum cost optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Opus model + streaming + no caching", "Haiku model + batch processing + response caching", "Sonnet model + standard API + no optimization", "Opus model + batch processing + caching"),
                                "Haiku model + batch processing + response caching",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q14",
                                "What does a stop_reason of 'max_tokens' indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model completed its response naturally", "The response was truncated due to token limit", "An error occurred", "The user cancelled the request"),
                                "The response was truncated due to token limit",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q15",
                                "Circuit breakers transition to 'open' state after exceeding a failure threshold",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q16",
                                "For GDPR compliance, what must be implemented for user data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Indefinite data retention", "Right to access and deletion", "Automatic data sharing", "Public data disclosure"),
                                "Right to access and deletion",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q17",
                                "Which tool definition component specifies mandatory parameters?",
                                QUESTION_TYPE_CHOICE,
                                new Array("properties", "required", "input_schema", "parameters"),
                                "required",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q18",
                                "Streaming is most beneficial for batch processing of large datasets",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q19",
                                "What is the primary purpose of the anthropic-version header?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To specify the model version", "To ensure backward compatibility and predictable API behavior", "To track API usage", "To enable beta features"),
                                "To ensure backward compatibility and predictable API behavior",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q20",
                                "Which metric is most important for monitoring API health in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Total number of requests only", "Success rate, error rate, and response time percentiles", "Token count only", "Model selection distribution"),
                                "Success rate, error rate, and response time percentiles",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q21",
                                "Graceful degradation strategies include using cached responses and fallback content",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q22",
                                "A system needs to process 50,000 customer reviews for sentiment analysis overnight with minimal cost. What is the optimal approach?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Real-time streaming with Opus", "Standard API with Sonnet", "Batch processing with Haiku", "Streaming with Haiku"),
                                "Batch processing with Haiku",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q23",
                                "What is the recommended target for rate limit capacity utilization in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50-60%", "70-80%", "90-95%", "100%"),
                                "70-80%",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q24",
                                "Structured output generation enables seamless integration with downstream systems by producing specific formats",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q25",
                                "Which combination of practices ensures both security and cost efficiency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcoded keys + Opus model + no caching", "Secret management + appropriate model selection + response caching", "Environment variables + always use Opus + no optimization", "Public keys + Haiku only + aggressive caching"),
                                "Secret management + appropriate model selection + response caching",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q26",
                                "What is the maximum context window size supported by Claude models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("32,000 tokens", "100,000 tokens", "200,000 tokens", "500,000 tokens"),
                                "200,000 tokens",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q27",
                                "Exponential backoff with jitter prevents thundering herd problems during retry scenarios",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q28",
                                "For a real-time customer support chatbot requiring immediate responses, which approach is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Batch processing for cost savings", "Streaming API with Sonnet for balanced performance", "Standard API with Opus for maximum quality", "Batch processing with Haiku"),
                                "Streaming API with Sonnet for balanced performance",
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q29",
                                "Audit logging should include authentication events, API requests, and data access for compliance",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.final.q30",
                                "What is the primary advantage of implementing request queuing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increases model accuracy", "Manages request flow to stay within rate limits", "Reduces token costs", "Improves response quality"),
                                "Manages request flow to stay within rate limits",
                                "obj_final")
                );
