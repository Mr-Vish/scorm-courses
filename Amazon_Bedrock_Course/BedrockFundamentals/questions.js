test.AddQuestion( new Question ("com.scorm.bedrock.interactions.fundamentals_1",
                                "What is the primary architectural advantage of Amazon Bedrock compared to self-hosted foundation models?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower cost per token", "Fully managed serverless infrastructure eliminating operational overhead", "Access to proprietary AWS-only models", "Faster inference speed"),
                                "Fully managed serverless infrastructure eliminating operational overhead",
                                "obj_bedrock_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.fundamentals_2",
                                "Amazon Bedrock provides a unified API that allows seamless switching between different foundation model providers",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_bedrock_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.fundamentals_3",
                                "Which Anthropic Claude model is specifically optimized for tasks requiring the longest context windows and most advanced reasoning capabilities?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Claude 3 Haiku", "Claude 3.5 Sonnet", "Claude 3 Opus", "Claude Instant"),
                                "Claude 3 Opus",
                                "obj_bedrock_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.fundamentals_4",
                                "When selecting a foundation model, which factor should be prioritized for a high-volume customer service chatbot requiring real-time responses?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximum parameter count", "Low latency and cost efficiency", "Largest context window", "Image generation capabilities"),
                                "Low latency and cost efficiency",
                                "obj_bedrock_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.fundamentals_5",
                                "Before invoking any foundation model through Amazon Bedrock, you must explicitly request and enable model access in the Bedrock console",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_bedrock_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.fundamentals_6",
                                "Which invocation method should be used for interactive applications where users expect immediate progressive feedback?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Synchronous invocation with invoke_model", "Batch processing invocation", "Streaming invocation with invoke_model_with_response_stream", "Asynchronous invocation"),
                                "Streaming invocation with invoke_model_with_response_stream",
                                "obj_bedrock_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.fundamentals_7",
                                "What is the recommended temperature setting for factual question-answering tasks requiring deterministic and consistent outputs?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("0.0 to 0.3", "0.5 to 0.7", "0.7 to 1.0", "1.0 to 1.5"),
                                "0.0 to 0.3",
                                "obj_bedrock_fundamentals")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.fundamentals_8",
                                "In prompt engineering, few-shot learning involves providing example input-output pairs to demonstrate the desired pattern for the model to follow",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_bedrock_fundamentals")
                );
