test.AddQuestion( new Question ("com.scorm.bedrock.module2.q1",
                                "Which component serves as the agent's 'brain' providing reasoning capabilities?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Action Groups", "Foundation Model", "Knowledge Base", "Guardrails"),
                                "Foundation Model",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module2.q2",
                                "What is the purpose of an OpenAPI schema in an action group?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt agent communications", "To define available operations, parameters, and response formats", "To store conversation history", "To filter inappropriate content"),
                                "To define available operations, parameters, and response formats",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module2.q3",
                                "Knowledge bases use vector embeddings to enable semantic search and retrieval",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module2.q4",
                                "During which orchestration phase does the agent enter the ReAct reasoning loop?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Pre-Processing", "Orchestration", "Post-Processing", "Session Update"),
                                "Orchestration",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module2.q5",
                                "What is the purpose of agent aliases?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt agent data", "To provide stable endpoints that can point to different versions", "To store user credentials", "To generate embeddings"),
                                "To provide stable endpoints that can point to different versions",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module2.q6",
                                "Agents must be 'prepared' after configuration changes before they can be invoked",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module2.q7",
                                "Which IAM permission is required for an agent to invoke Lambda functions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("bedrock:InvokeModel", "lambda:InvokeFunction", "s3:GetObject", "dynamodb:Query"),
                                "lambda:InvokeFunction",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module2.q8",
                                "What is the recommended idle session TTL for balancing user experience and resource usage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("60-300 seconds", "1800-3600 seconds", "7200-10800 seconds", "No expiration"),
                                "1800-3600 seconds",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module2.q9",
                                "Trace logging captures detailed execution information including reasoning processes and action invocations",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module2.q10",
                                "Which version type is mutable and used for development and testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Production", "DRAFT", "Numbered Version", "Alias"),
                                "DRAFT",
                                "obj_module2")
                );
