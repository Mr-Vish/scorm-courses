test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod3_1",
                                "What is the primary benefit of using structured JSON logging in GenAI applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces log storage costs", "Enables easy parsing and analysis with CloudWatch Insights", "Improves Lambda performance", "Reduces cold start times"),
                                "Enables easy parsing and analysis with CloudWatch Insights",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod3_2",
                                "Which AWS service provides distributed tracing for serverless applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("CloudWatch Logs", "AWS X-Ray", "CloudTrail", "EventBridge"),
                                "AWS X-Ray",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod3_3",
                                "What percentage of total costs do Bedrock API calls typically represent in GenAI applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("20-40%", "40-60%", "60-80%", "80-95%"),
                                "80-95%",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod3_4",
                                "Which Claude 3 model offers the lowest cost per token?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Claude 3 Opus", "Claude 3 Sonnet", "Claude 3 Haiku", "All have the same cost"),
                                "Claude 3 Haiku",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod3_5",
                                "What is the recommended approach for caching Bedrock responses?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Use Lambda layers", "Store in DynamoDB with hash-based keys", "Use API Gateway caching", "Caching is not recommended"),
                                "Store in DynamoDB with hash-based keys",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod3_6",
                                "Which deployment tool is specifically designed for serverless applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("CloudFormation", "AWS SAM", "Terraform", "Ansible"),
                                "AWS SAM",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod3_7",
                                "What is the purpose of canary deployments in Lambda?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "To gradually shift traffic to new versions and minimize risk", "To improve cold start performance", "To enable multi-region deployment"),
                                "To gradually shift traffic to new versions and minimize risk",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod3_8",
                                "Optimizing prompts can reduce token usage by 30-50% without sacrificing quality",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod3_9",
                                "What is the main advantage of AWS CDK over SAM?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster deployment", "Full AWS service support with programming languages", "Better local testing", "Lower costs"),
                                "Full AWS service support with programming languages",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.lambda.bedrock.mod3_10",
                                "CloudWatch Alarms should be configured before deploying to production",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );
