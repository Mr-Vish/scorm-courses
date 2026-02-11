test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod2_1",
                                "What is the primary purpose of API Gateway in a GenAI REST API architecture?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To store conversation history", "To act as the entry point and trigger Lambda functions", "To invoke Bedrock models directly", "To cache API responses"),
                                "To act as the entry point and trigger Lambda functions",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod2_2",
                                "Which HTTP status code should be returned when a GenAI task is accepted for asynchronous processing?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("200 OK", "201 Created", "202 Accepted", "204 No Content"),
                                "202 Accepted",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod2_3",
                                "What is the recommended DynamoDB attribute for automatic conversation history cleanup?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("expiresAt", "ttl", "deleteAt", "cleanup"),
                                "ttl",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod2_4",
                                "In RAG architecture, what is the first step when processing a user query?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Invoke Bedrock model", "Embed the query into a vector", "Search the knowledge base", "Store the query in DynamoDB"),
                                "Embed the query into a vector",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod2_5",
                                "Which AWS service is recommended for vector storage in RAG implementations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("DynamoDB", "S3", "Amazon OpenSearch", "RDS"),
                                "Amazon OpenSearch",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod2_6",
                                "What is the main advantage of using SQS for long-running GenAI tasks?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster processing", "Bypasses Lambda's 15-minute timeout limit", "Reduces Bedrock costs", "Improves model accuracy"),
                                "Bypasses Lambda's 15-minute timeout limit",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod2_7",
                                "In Step Functions, which state type is used to make decisions based on input values?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Task", "Choice", "Parallel", "Wait"),
                                "Choice",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod2_8",
                                "WebSocket APIs enable bidirectional real-time communication for streaming responses",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod2_9",
                                "What is the purpose of the API Gateway Management API in WebSocket implementations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To create WebSocket connections", "To send messages back to connected clients", "To authenticate users", "To log WebSocket traffic"),
                                "To send messages back to connected clients",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod2_10",
                                "Conversation summarization helps reduce token count while maintaining context",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );
