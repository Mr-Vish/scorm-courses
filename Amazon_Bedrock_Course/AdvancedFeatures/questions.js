test.AddQuestion( new Question ("com.scorm.bedrock.interactions.advanced_1",
                                "What is the primary role of the foundation model in a Bedrock Agent architecture?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Storing conversation history", "Reasoning engine for intent understanding and task planning", "Executing Lambda functions", "Managing vector database queries"),
                                "Reasoning engine for intent understanding and task planning",
                                "obj_advanced_features")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.advanced_2",
                                "Action groups in Bedrock Agents connect to external systems through AWS Lambda functions defined by OpenAPI schemas",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_advanced_features")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.advanced_3",
                                "What is the primary benefit of Retrieval-Augmented Generation (RAG) in enterprise applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces model training costs", "Enables models to access current, organization-specific information", "Increases inference speed", "Eliminates the need for prompt engineering"),
                                "Enables models to access current, organization-specific information",
                                "obj_advanced_features")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.advanced_4",
                                "Which chunking strategy creates parent-child relationships with summaries for better context preservation in long documents?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Fixed-size chunking", "Semantic chunking", "Hierarchical chunking", "Random chunking"),
                                "Hierarchical chunking",
                                "obj_advanced_features")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.advanced_5",
                                "Bedrock Guardrails can detect and mask personally identifiable information (PII) such as social security numbers and credit card numbers",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_advanced_features")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.advanced_6",
                                "Which guardrail component is specifically designed to prevent hallucinations by verifying responses are grounded in provided context?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Content Filters", "Denied Topics", "Word Filters", "Contextual Grounding Check"),
                                "Contextual Grounding Check",
                                "obj_advanced_features")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.advanced_7",
                                "When should model fine-tuning be considered over prompt engineering and RAG approaches?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("For all production applications", "When specialized tasks require consistent formatting and domain-specific optimization", "When you have less than 10 training examples", "When requirements change frequently"),
                                "When specialized tasks require consistent formatting and domain-specific optimization",
                                "obj_advanced_features")
                );
                
test.AddQuestion( new Question ("com.scorm.bedrock.interactions.advanced_8",
                                "High-quality training data is more important than quantity when fine-tuning models, with 100 excellent examples often outperforming 1000 mediocre ones",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_advanced_features")
                );
