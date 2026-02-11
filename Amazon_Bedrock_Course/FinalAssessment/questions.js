// Final Comprehensive Assessment
// Covers all 3 modules with unique questions

// Module 1: Bedrock Fundamentals (8 questions)
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_1",
                                "What distinguishes Amazon Bedrock from self-hosted foundation model deployments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Bedrock models are more accurate", "Bedrock provides fully managed serverless infrastructure", "Bedrock is always less expensive", "Bedrock only supports AWS-developed models"),
                                "Bedrock provides fully managed serverless infrastructure",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_2",
                                "Which model provider is specifically optimized for European languages including French, German, and Spanish?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Anthropic", "Mistral AI", "Amazon Titan", "Stability AI"),
                                "Mistral AI",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_3",
                                "When selecting a foundation model, what is the primary trade-off between Claude 3 Opus and Claude 3 Haiku?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Language support vs. image generation", "Advanced reasoning capability vs. cost and latency efficiency", "Context window size vs. accuracy", "Security features vs. performance"),
                                "Advanced reasoning capability vs. cost and latency efficiency",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_4",
                                "The max_tokens parameter in Bedrock API requests controls the maximum length of the generated response",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_5",
                                "Which prompt engineering technique involves providing example input-output pairs to demonstrate desired patterns?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Zero-shot learning", "Few-shot learning", "Chain-of-thought prompting", "Instruction decomposition"),
                                "Few-shot learning",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_6",
                                "What is the recommended temperature setting range for creative writing and brainstorming tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.0 to 0.3", "0.3 to 0.5", "0.5 to 0.7", "0.7 to 1.0"),
                                "0.7 to 1.0",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_7",
                                "Streaming invocation with invoke_model_with_response_stream delivers responses progressively as tokens are generated",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_8",
                                "Which component in prompt engineering helps prevent the model from generating overly long responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Temperature parameter", "Stop sequences and max_tokens limits", "Top_p parameter", "System prompts"),
                                "Stop sequences and max_tokens limits",
                                "obj_final_assessment")
                );

// Module 2: Advanced Features (9 questions)
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_9",
                                "In Bedrock Agent architecture, what is the primary function of action groups?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Store conversation history", "Connect agents to external systems through Lambda functions", "Filter harmful content", "Manage user authentication"),
                                "Connect agents to external systems through Lambda functions",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_10",
                                "Bedrock Agents can autonomously plan and execute multi-step workflows without explicit programming of conversation flows",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_11",
                                "What is the primary purpose of Retrieval-Augmented Generation (RAG) in enterprise applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduce model training time", "Enable models to access current, organization-specific information", "Improve model inference speed", "Reduce API costs"),
                                "Enable models to access current, organization-specific information",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_12",
                                "Which vector database is recommended for most Bedrock Knowledge Base implementations due to seamless AWS integration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Pinecone", "Redis Enterprise", "Amazon OpenSearch Serverless", "MongoDB Atlas"),
                                "Amazon OpenSearch Serverless",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_13",
                                "What is the recommended chunk size range for most Knowledge Base use cases?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50-100 tokens", "300-500 tokens", "1000-1500 tokens", "2000-3000 tokens"),
                                "300-500 tokens",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_14",
                                "Guardrails' Contextual Grounding Check detects hallucinations by verifying responses are grounded in provided context",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_15",
                                "Which guardrail component automatically detects and masks personally identifiable information like social security numbers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Content Filters", "Denied Topics", "Sensitive Information Filters", "Word Filters"),
                                "Sensitive Information Filters",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_16",
                                "When should model fine-tuning be prioritized over prompt engineering and RAG approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For all production applications", "When you have less than 50 training examples", "After exhausting prompt engineering and RAG, for specialized tasks requiring consistent formatting", "When requirements change frequently"),
                                "After exhausting prompt engineering and RAG, for specialized tasks requiring consistent formatting",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_17",
                                "Fine-tuning in Bedrock requires a minimum of 32 training examples, with 200-1000+ recommended for best results",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

// Module 3: Enterprise Implementation (8 questions)
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_18",
                                "Which architecture pattern is most appropriate for batch document processing workloads?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Streaming Pattern with WebSocket", "Event-Driven Pattern with SQS", "Synchronous API Gateway Pattern", "Real-time Processing Pattern"),
                                "Event-Driven Pattern with SQS",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_19",
                                "What percentage of cost savings can typically be achieved through intelligent model routing strategies?",
                                QUESTION_TYPE_CHOICE,
                                new Array("5-10%", "15-25%", "40-60%", "80-90%"),
                                "40-60%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_20",
                                "VPC endpoints for Bedrock enable private connectivity without traffic traversing the public internet",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_21",
                                "Which AWS service provides distributed tracing for end-to-end visibility across Bedrock applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("CloudWatch Logs", "AWS X-Ray", "CloudTrail", "AWS Config"),
                                "AWS X-Ray",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_22",
                                "What is the typical cost relationship between output tokens and input tokens in Bedrock pricing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Output tokens cost the same as input tokens", "Output tokens cost 3-5 times more than input tokens", "Output tokens cost less than input tokens", "Output tokens are free"),
                                "Output tokens cost 3-5 times more than input tokens",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_23",
                                "Provisioned throughput offers 30-50% cost savings for predictable, sustained high-volume workloads",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_24",
                                "Which compliance certification is required for healthcare applications handling protected health information (PHI)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SOC 2", "ISO 27001", "HIPAA with Business Associate Agreement", "PCI DSS"),
                                "HIPAA with Business Associate Agreement",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.interactions.final_25",
                                "Semantic caching reduces costs by reusing responses for similar but not identical queries based on vector similarity",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );
