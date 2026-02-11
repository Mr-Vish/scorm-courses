test.AddQuestion( new Question ("com.anthropic.api.module2.q1",
                                "What protocol does the Anthropic API use for streaming responses?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("WebSockets", "Server-Sent Events (SSE)", "Long Polling", "HTTP/2 Push"),
                                "Server-Sent Events (SSE)",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q2",
                                "Which event type contains the actual generated tokens in a streaming response?",
                                QUESTION_TYPE_CHOICE,
                                new Array("message_start", "content_block_delta", "message_delta", "token_stream"),
                                "content_block_delta",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q3",
                                "Streaming responses provide better perceived performance by delivering content incrementally",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q4",
                                "What cost advantage does batch processing offer compared to standard API requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("25% reduction", "50% reduction", "75% reduction", "No cost difference"),
                                "50% reduction",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q5",
                                "Which format is used for batch request files?",
                                QUESTION_TYPE_CHOICE,
                                new Array("CSV", "XML", "JSONL (JSON Lines)", "YAML"),
                                "JSONL (JSON Lines)",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q6",
                                "Batch processing is ideal for real-time, user-facing applications requiring immediate responses",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q7",
                                "What is the primary purpose of tool use (function calling) in the Anthropic API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce token costs", "To enable Claude to interact with external systems and data", "To improve response speed", "To increase context window size"),
                                "To enable Claude to interact with external systems and data",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q8",
                                "In tool use, which component defines the expected parameters for a tool?",
                                QUESTION_TYPE_CHOICE,
                                new Array("tool_config", "input_schema", "parameter_definition", "function_signature"),
                                "input_schema",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q9",
                                "The application is responsible for executing tool calls and returning results to Claude",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q10",
                                "For a content analysis system processing 50,000 customer reviews overnight, which approach is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Streaming API for real-time feedback", "Standard synchronous API calls", "Batch processing for cost efficiency", "Multiple concurrent streaming requests"),
                                "Batch processing for cost efficiency",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q11",
                                "What is the message_stop event used for in streaming responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To pause generation temporarily", "To signal completion of the entire response", "To indicate an error occurred", "To request user input"),
                                "To signal completion of the entire response",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q12",
                                "Batch jobs can be modified after submission to add or remove requests",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q13",
                                "Which tool use pattern involves executing multiple independent tools simultaneously?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sequential tool use", "Parallel tool use", "Conditional tool chains", "Iterative refinement"),
                                "Parallel tool use",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q14",
                                "What is the recommended approach for handling partial results when a streaming connection fails?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Discard all partial content", "Display partial results with error indicator", "Automatically retry from beginning", "Wait indefinitely for reconnection"),
                                "Display partial results with error indicator",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q15",
                                "Structured output generation enables seamless integration with downstream systems by producing specific formats",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q16",
                                "What is the maximum number of requests allowed in a single batch?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10,000 requests", "50,000 requests", "100,000 requests", "Unlimited"),
                                "100,000 requests",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q17",
                                "In tool definitions, what does the 'required' array specify?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tools that must be called together", "Mandatory parameter names", "Required API permissions", "Essential system resources"),
                                "Mandatory parameter names",
                                "obj_module2")
                );
                
test.AddQuestion( new Question ("com.anthropic.api.module2.q18",
                                "Streaming is most beneficial for interactive chat applications where users observe generation in real-time",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2")
                );
