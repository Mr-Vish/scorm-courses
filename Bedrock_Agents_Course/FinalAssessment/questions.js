// Final Comprehensive Assessment
// Covers all 4 modules with unique questions

// Module 1 Questions (5 questions)
test.AddQuestion( new Question ("com.scorm.bedrock.final.q1",
                                "Which AWS service provides managed access to foundation models through a unified API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Amazon SageMaker", "Amazon Bedrock", "AWS Lambda", "Amazon Comprehend"),
                                "Amazon Bedrock",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q2",
                                "The ReAct loop consists of Thought, Action, and Observation steps that repeat until the agent has sufficient information",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q3",
                                "Which prompt engineering principle emphasizes showing the agent's reasoning process before taking actions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Constraint-based instructions", "Chain-of-thought prompting", "Persona-based instructions", "Word filtering"),
                                "Chain-of-thought prompting",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q4",
                                "What is a key limitation of Bedrock Agents compared to traditional rule-based systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cannot maintain conversation context", "More variable behavior requiring comprehensive testing", "Limited to single-turn interactions", "Cannot integrate with external APIs"),
                                "More variable behavior requiring comprehensive testing",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q5",
                                "Agent instructions should be kept under 1,500 words for optimal model performance",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

// Module 2 Questions (5 questions)
test.AddQuestion( new Question ("com.scorm.bedrock.final.q6",
                                "What must be done after creating or modifying an agent before it can be invoked?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Restart the AWS account", "Prepare the agent", "Delete old versions", "Clear all sessions"),
                                "Prepare the agent",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q7",
                                "Which orchestration phase involves the agent entering the ReAct reasoning loop?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Pre-Processing", "Orchestration", "Post-Processing", "Session Management"),
                                "Orchestration",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q8",
                                "Agent aliases provide stable endpoints that can point to different versions, enabling safe updates",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q9",
                                "What is the purpose of the agent resource role in IAM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To authenticate end users", "To grant the agent permissions to invoke models, Lambda functions, and knowledge bases", "To encrypt agent data", "To manage session state"),
                                "To grant the agent permissions to invoke models, Lambda functions, and knowledge bases",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q10",
                                "The DRAFT version of an agent is mutable and used for development, while numbered versions are immutable",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

// Module 3 Questions (5 questions)
test.AddQuestion( new Question ("com.scorm.bedrock.final.q11",
                                "What are the three primary components of an action group?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model, Instructions, and Guardrails", "OpenAPI Schema, Lambda Function, and Description", "S3, DynamoDB, and CloudWatch", "Embeddings, Vectors, and Chunks"),
                                "OpenAPI Schema, Lambda Function, and Description",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q12",
                                "In OpenAPI schemas, comprehensive descriptions for operations and parameters guide the agent's decision-making",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q13",
                                "What is the primary purpose of Retrieval-Augmented Generation (RAG)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To train foundation models faster", "To ground responses in factual, verifiable information from knowledge bases", "To reduce API costs", "To encrypt agent communications"),
                                "To ground responses in factual, verifiable information from knowledge bases",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q14",
                                "During knowledge base retrieval, what happens after the user's query is converted to a vector embedding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The agent generates a response immediately", "The vector database performs similarity search to find relevant chunks", "Documents are re-chunked", "The foundation model is fine-tuned"),
                                "The vector database performs similarity search to find relevant chunks",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q15",
                                "The recommended chunk size range for knowledge bases is typically 200-1000 tokens",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

// Module 4 Questions (5 questions)
test.AddQuestion( new Question ("com.scorm.bedrock.final.q16",
                                "In a supervisor-subordinate multi-agent architecture, what is the supervisor agent's primary responsibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Execute all business logic", "Analyze requests and route to appropriate subordinate agents", "Store conversation history", "Generate embeddings"),
                                "Analyze requests and route to appropriate subordinate agents",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q17",
                                "Guardrails can filter content, block denied topics, redact PII, and ensure contextual grounding",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q18",
                                "What deployment strategy involves gradually rolling out new versions to increasing percentages of users?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Blue-green deployment", "Canary deployment", "Big bang deployment", "Rolling restart"),
                                "Canary deployment",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q19",
                                "Which tool provides detailed execution information including reasoning steps, action invocations, and knowledge base queries?",
                                QUESTION_TYPE_CHOICE,
                                new Array("CloudFormation", "Trace logging", "AWS Config", "VPC Flow Logs"),
                                "Trace logging",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q20",
                                "Token usage optimization strategies include using concise instructions, efficient prompts, and retrieving fewer but more relevant knowledge base chunks",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

// Additional comprehensive questions (5 questions)
test.AddQuestion( new Question ("com.scorm.bedrock.final.q21",
                                "Which foundation model family offers context windows up to 200K tokens, making it ideal for long document analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Amazon Titan", "Claude 3", "Llama 2", "Cohere Command"),
                                "Claude 3",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q22",
                                "Session attributes provide persistent context across conversation turns, while prompt session attributes provide per-turn dynamic context",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q23",
                                "What is the recommended approach when designing agent instructions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Make them as long and detailed as possible", "Use vague language to allow flexibility", "Be specific, use examples, and define boundaries explicitly", "Focus only on what the agent can do, not what it cannot"),
                                "Be specific, use examples, and define boundaries explicitly",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q24",
                                "Which component of a knowledge base converts text into vector representations for semantic search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("S3 bucket", "Embeddings model", "Lambda function", "OpenAPI schema"),
                                "Embeddings model",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.final.q25",
                                "Production readiness for agents requires validation across functional, performance, security, and operational dimensions",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );
