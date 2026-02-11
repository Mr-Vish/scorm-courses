test.AddQuestion( new Question ("com.scorm.bedrock.interactions.enterprise_1",
                                "Which architecture pattern is most suitable for real-time interactive chatbot applications requiring immediate user feedback?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Event-Driven Pattern with SQS", "Streaming Pattern with WebSocket connections", "Batch Processing Pattern", "Microservices Pattern with REST APIs"),
                                "Streaming Pattern with WebSocket connections",
                                "obj_enterprise_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.enterprise_2",
                                "Amazon Bedrock guarantees that customer prompts and responses are never used to train foundation models",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_enterprise_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.enterprise_3",
                                "What is the primary purpose of implementing VPC endpoints for Bedrock connectivity?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduce latency", "Enable private connectivity without internet exposure", "Increase throughput", "Reduce costs"),
                                "Enable private connectivity without internet exposure",
                                "obj_enterprise_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.enterprise_4",
                                "Which security measure helps prevent prompt injection attacks in Bedrock applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Increasing model temperature", "Input validation and sanitization with parameterized prompts", "Using larger context windows", "Enabling streaming responses"),
                                "Input validation and sanitization with parameterized prompts",
                                "obj_enterprise_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.enterprise_5",
                                "CloudWatch automatically publishes built-in metrics for Bedrock including invocations, latency, errors, and token consumption",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_enterprise_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.enterprise_6",
                                "What is the typical cost savings achieved by implementing intelligent model routing that directs simple queries to efficient models?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("5-10%", "15-25%", "40-60%", "80-90%"),
                                "40-60%",
                                "obj_enterprise_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.enterprise_7",
                                "Which pricing model is most cost-effective for predictable, sustained high-volume workloads requiring consistent low latency?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("On-demand pricing", "Provisioned throughput with reserved capacity", "Spot instances", "Free tier"),
                                "Provisioned throughput with reserved capacity",
                                "obj_enterprise_implementation")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.enterprise_8",
                                "Output tokens typically cost 3-5 times more than input tokens in Bedrock pricing models",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_enterprise_implementation")
                );
