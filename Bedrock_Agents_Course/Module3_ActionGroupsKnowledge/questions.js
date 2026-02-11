test.AddQuestion( new Question ("com.scorm.bedrock.module3.q1",
                                "What are the three primary components of an action group?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Lambda, S3, and DynamoDB", "OpenAPI Schema, Lambda Function, and Description", "Foundation Model, Instructions, and Guardrails", "Embeddings, Vector Database, and Chunks"),
                                "OpenAPI Schema, Lambda Function, and Description",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module3.q2",
                                "In OpenAPI schemas, the operationId should be descriptive and clearly indicate what the action does",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module3.q3",
                                "What HTTP status code should be returned for validation errors with invalid parameters?",
                                QUESTION_TYPE_CHOICE,
                                new Array("200", "400", "404", "500"),
                                "400",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module3.q4",
                                "What is the primary benefit of Retrieval-Augmented Generation (RAG)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces model training time", "Grounds responses in factual, verifiable information", "Eliminates need for Lambda functions", "Increases token limits"),
                                "Grounds responses in factual, verifiable information",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module3.q5",
                                "Embeddings models convert text into high-dimensional vectors that capture semantic meaning",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module3.q6",
                                "Which vector database option is fully managed and auto-scaling in AWS?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MySQL", "Amazon OpenSearch Serverless", "MongoDB", "Cassandra"),
                                "Amazon OpenSearch Serverless",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module3.q7",
                                "What is the typical recommended range for chunk sizes in knowledge bases?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10-50 tokens", "200-1000 tokens", "2000-5000 tokens", "10000+ tokens"),
                                "200-1000 tokens",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module3.q8",
                                "The 'Return of Control' pattern allows agents to return action details to your application for execution rather than executing directly",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module3.q9",
                                "During knowledge base retrieval, what happens after the query is converted to a vector?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The agent generates a response immediately", "Vector database finds chunks with highest similarity scores", "Documents are re-chunked", "The foundation model is retrained"),
                                "Vector database finds chunks with highest similarity scores",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module3.q10",
                                "Agents can access multiple knowledge bases, each serving different purposes or domains",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3")
                );
