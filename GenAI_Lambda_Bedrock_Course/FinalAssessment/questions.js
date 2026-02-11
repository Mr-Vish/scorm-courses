test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_1",
                                "Which Bedrock model family is developed by Anthropic?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Titan", "Claude", "Llama", "Jurassic"),
                                "Claude",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_2",
                                "What is the maximum execution timeout for AWS Lambda functions?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("5 minutes", "10 minutes", "15 minutes", "30 minutes"),
                                "15 minutes",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_3",
                                "Where should boto3 clients be initialized in Lambda for optimal performance?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Inside the handler function", "Outside the handler function at module level", "In a separate Lambda layer", "In environment variables"),
                                "Outside the handler function at module level",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_4",
                                "Which architecture pattern is best for real-time token-by-token streaming?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Synchronous REST API", "Asynchronous with SQS", "WebSocket API", "EventBridge"),
                                "WebSocket API",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_5",
                                "What HTTP method should be used for CORS preflight requests?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("GET", "POST", "OPTIONS", "HEAD"),
                                "OPTIONS",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_6",
                                "Which DynamoDB key type is used for the primary identifier in conversation history?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Sort Key", "Partition Key", "Global Secondary Index", "Local Secondary Index"),
                                "Partition Key",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_7",
                                "What is the purpose of embeddings in RAG implementations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To compress documents", "To convert text into vector representations for similarity search", "To encrypt sensitive data", "To reduce token costs"),
                                "To convert text into vector representations for similarity search",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_8",
                                "Which AWS service orchestrates multi-step GenAI workflows with built-in error handling?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Lambda", "SQS", "Step Functions", "EventBridge"),
                                "Step Functions",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_9",
                                "What is the recommended approach for handling ThrottlingException from Bedrock?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore the error", "Retry immediately", "Implement exponential backoff", "Switch to a different model"),
                                "Implement exponential backoff",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_10",
                                "Provisioned concurrency eliminates Lambda cold starts",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_11",
                                "Which CloudWatch feature allows querying logs with SQL-like syntax?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("CloudWatch Metrics", "CloudWatch Insights", "CloudWatch Alarms", "CloudWatch Events"),
                                "CloudWatch Insights",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_12",
                                "What is the typical cost ratio between input and output tokens for Claude 3 Sonnet?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1:1", "1:3", "1:5", "1:10"),
                                "1:5",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_13",
                                "Which model should be used for simple classification tasks to minimize costs?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Claude 3 Opus", "Claude 3 Sonnet", "Claude 3 Haiku", "Any model works the same"),
                                "Claude 3 Haiku",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_14",
                                "What is the purpose of the TTL attribute in DynamoDB?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt data", "To automatically delete expired items", "To improve query performance", "To enable versioning"),
                                "To automatically delete expired items",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_15",
                                "Which deployment strategy shifts 10% of traffic to the new version for 5 minutes?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AllAtOnce", "Linear10PercentEvery10Minutes", "Canary10Percent5Minutes", "BlueGreen"),
                                "Canary10Percent5Minutes",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_16",
                                "Response caching can significantly reduce Bedrock API costs for repeated queries",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_17",
                                "What is the main disadvantage of serverless GenAI architectures?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("High costs", "Poor scalability", "Cold start latency", "Limited model selection"),
                                "Cold start latency",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_18",
                                "Which tool provides local testing capabilities for SAM applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("sam local", "aws test", "lambda-local", "serverless-offline"),
                                "sam local",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_19",
                                "What is the recommended retention period for CloudWatch logs in production?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1 day", "7-30 days", "90 days", "Never expire"),
                                "7-30 days",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_20",
                                "Batch processing multiple items in a single Bedrock call can reduce costs by up to 90%",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_21",
                                "Which error code indicates that a request parameter is invalid?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("ThrottlingException", "ValidationException", "ModelTimeoutException", "AccessDeniedException"),
                                "ValidationException",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_22",
                                "What is the purpose of X-Ray annotations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt traces", "To enable filtering and searching of traces", "To reduce tracing costs", "To improve performance"),
                                "To enable filtering and searching of traces",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_23",
                                "Which AWS service is best for storing large document embeddings?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("DynamoDB", "S3", "Amazon OpenSearch", "RDS"),
                                "Amazon OpenSearch",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_24",
                                "Optimizing prompt length is one of the most effective cost reduction strategies",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.final_25",
                                "What is the main advantage of using Step Functions over direct Lambda invocations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower costs", "Faster execution", "Built-in orchestration and error handling", "Better security"),
                                "Built-in orchestration and error handling",
                                "obj_final")
                );
