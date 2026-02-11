test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod1_1",
                                "Which Claude 3 model offers the best balance of performance and cost?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Claude 3 Opus", "Claude 3 Sonnet", "Claude 3 Haiku", "Claude 2"),
                                "Claude 3 Sonnet",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod1_2",
                                "What is the recommended memory configuration for standard GenAI workloads in Lambda?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("512 MB", "1024 MB", "2048 MB", "3008 MB"),
                                "1024 MB",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod1_3",
                                "What is the recommended timeout for Lambda functions making Bedrock API calls?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("3 seconds", "30 seconds", "60-120 seconds", "900 seconds"),
                                "60-120 seconds",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod1_4",
                                "Which error code should trigger exponential backoff retry logic?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("ValidationException", "ThrottlingException", "ModelTimeoutException", "AccessDeniedException"),
                                "ThrottlingException",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod1_5",
                                "What is the maximum timeout limit for AWS Lambda functions?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("300 seconds", "600 seconds", "900 seconds", "1800 seconds"),
                                "900 seconds",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod1_6",
                                "Which architecture pattern is best for responses that take longer than 30 seconds?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Synchronous Request-Response", "Asynchronous with Polling", "WebSocket Streaming", "Event-Driven"),
                                "Asynchronous with Polling",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod1_7",
                                "What is the typical cost per 1K input tokens for Claude 3 Sonnet?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("$0.00025", "$0.003", "$0.015", "$0.075"),
                                "$0.003",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod1_8",
                                "Where should boto3 clients be initialized for optimal Lambda performance?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Inside the handler function", "Outside the handler function", "In a separate module", "In Lambda layers"),
                                "Outside the handler function",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod1_9",
                                "Which runtime has the fastest cold start for GenAI applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Python 3.11", "Node.js 20", "Java 17", "Go 1.x"),
                                "Node.js 20",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod1_10",
                                "Bedrock costs typically dominate over Lambda costs in GenAI applications",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );
