// Module 1 Assessment: Understanding GenAI Costs
// 8 questions covering cost fundamentals, pricing models, and forecasting

test.AddQuestion( new Question ("com.scorm.genai.cost.module1_q1",
                                "What is the primary cost driver in GenAI workloads compared to traditional cloud computing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compute instance hours", "Token consumption for inference", "Storage volumes", "Network bandwidth"),
                                "Token consumption for inference",
                                "obj_module1_understanding_costs")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module1_q2",
                                "Why do output tokens typically cost more than input tokens in GenAI pricing models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Output tokens require more storage", "Output generation requires more computational resources", "Output tokens are larger in size", "Output tokens need more network bandwidth"),
                                "Output generation requires more computational resources",
                                "obj_module1_understanding_costs")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module1_q3",
                                "A chatbot application sends a 400-token system prompt with every request. If the application handles 100,000 requests daily using Claude 3.5 Sonnet ($3 per 1M input tokens), what is the monthly cost of system prompts alone?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$360", "$3,600", "$36", "$36,000"),
                                "$3,600",
                                "obj_module1_understanding_costs")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module1_q4",
                                "Which AWS service pricing model is most cost-effective for unpredictable, low-volume GenAI workloads?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SageMaker with 24/7 instances", "Bedrock Provisioned Throughput", "Bedrock On-Demand pricing", "SageMaker Serverless Inference"),
                                "Bedrock On-Demand pricing",
                                "obj_module1_understanding_costs")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module1_q5",
                                "What is the primary advantage of Bedrock's Batch API for cost optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster processing times", "50% cost reduction for non-real-time workloads", "Better model quality", "Unlimited token capacity"),
                                "50% cost reduction for non-real-time workloads",
                                "obj_module1_understanding_costs")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module1_q6",
                                "In a RAG application, retrieved documents add 2,500 tokens to each request. For 50,000 daily requests, how many additional input tokens are consumed monthly?",
                                QUESTION_TYPE_CHOICE,
                                new Array("125 million tokens", "3.75 billion tokens", "2.5 billion tokens", "1.25 billion tokens"),
                                "3.75 billion tokens",
                                "obj_module1_understanding_costs")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module1_q7",
                                "When should an organization consider switching from Bedrock On-Demand to Provisioned Throughput?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When they need better model quality", "When utilization consistently exceeds 40-60% of capacity", "When they want to reduce latency", "When they need access to more models"),
                                "When utilization consistently exceeds 40-60% of capacity",
                                "obj_module1_understanding_costs")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module1_q8",
                                "Which factor has the LARGEST impact on GenAI cost reduction according to sensitivity analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reducing conversation length", "Implementing prompt caching", "Selecting a more cost-effective model", "Optimizing context size"),
                                "Selecting a more cost-effective model",
                                "obj_module1_understanding_costs")
                );
