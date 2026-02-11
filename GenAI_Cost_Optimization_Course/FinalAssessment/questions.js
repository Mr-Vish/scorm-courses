// Final Comprehensive Assessment
// 25 unique questions covering all 3 modules

// Module 1 Questions (8 questions)
test.AddQuestion( new Question ("com.scorm.genai.cost.final_q1",
                                "What fundamental characteristic distinguishes GenAI costs from traditional cloud computing costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GenAI uses more storage", "GenAI costs are driven by token consumption rather than infrastructure", "GenAI requires more network bandwidth", "GenAI uses specialized hardware"),
                                "GenAI costs are driven by token consumption rather than infrastructure",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q2",
                                "Why do output tokens typically cost 3-5x more than input tokens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Output tokens are larger", "Output generation requires more computational resources", "Output tokens use more storage", "Output tokens require more bandwidth"),
                                "Output generation requires more computational resources",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q3",
                                "For a chatbot with a 300-token system prompt handling 200,000 daily requests using Claude Sonnet ($3 per 1M input tokens), what is the monthly system prompt cost?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$540", "$1,800", "$5,400", "$18,000"),
                                "$5,400",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q4",
                                "Which AWS service pricing model is most cost-effective for applications with unpredictable, low-volume GenAI workloads?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SageMaker with 24/7 instances", "Bedrock Provisioned Throughput", "Bedrock On-Demand", "SageMaker Batch Transform"),
                                "Bedrock On-Demand",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q5",
                                "What is the primary benefit of using Bedrock's Batch API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster processing", "50% cost reduction for non-real-time workloads", "Better model quality", "Unlimited capacity"),
                                "50% cost reduction for non-real-time workloads",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q6",
                                "In RAG applications, retrieved documents add 3,000 tokens per request. For 30,000 daily requests, how many additional input tokens are consumed monthly?",
                                QUESTION_TYPE_CHOICE,
                                new Array("90 million", "900 million", "2.7 billion", "9 billion"),
                                "2.7 billion",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q7",
                                "At what utilization threshold does Bedrock Provisioned Throughput typically become more cost-effective than On-Demand pricing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("20-30%", "40-60%", "70-80%", "90-100%"),
                                "40-60%",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q8",
                                "According to sensitivity analysis, which optimization has the LARGEST impact on cost reduction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reducing conversation length", "Implementing caching", "Selecting a more cost-effective model", "Optimizing context size"),
                                "Selecting a more cost-effective model",
                                "obj_final_comprehensive")
                );

// Module 2 Questions (9 questions)
test.AddQuestion( new Question ("com.scorm.genai.cost.final_q9",
                                "Which model tier is most appropriate for legal contract analysis requiring critical quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ultra-light models", "Light models", "Balanced models", "Premium models"),
                                "Premium models",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q10",
                                "In a tiered processing architecture, what percentage of requests typically flow through the standard processing tier (light models)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("30-40%", "50-60%", "70-80%", "90-95%"),
                                "70-80%",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q11",
                                "A system prompt is optimized from 500 tokens to 100 tokens. What percentage reduction in system prompt costs is achieved?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50%", "60%", "70%", "80%"),
                                "80%",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q12",
                                "What is the primary advantage of using structured JSON output over natural language?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Easier to parse", "Significantly reduced token consumption", "Better user experience", "Faster generation"),
                                "Significantly reduced token consumption",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q13",
                                "What discount does Bedrock's prompt caching provide on cached input tokens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50%", "70%", "90%", "100%"),
                                "90%",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q14",
                                "For an FAQ system with 65% exact match cache hit rate, what cost reduction can be expected?",
                                QUESTION_TYPE_CHOICE,
                                new Array("30%", "45%", "65%", "85%"),
                                "65%",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q15",
                                "What is the minimum cacheable token size for Bedrock's prompt caching feature?",
                                QUESTION_TYPE_CHOICE,
                                new Array("512 tokens", "1,024 tokens", "2,048 tokens", "4,096 tokens"),
                                "1,024 tokens",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q16",
                                "What is the typical ROI range for semantic caching considering embedding costs versus avoided inference costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("5-10x", "15-25x", "30-750x", "1000-5000x"),
                                "30-750x",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q17",
                                "In a 10-turn conversation, summarized history reduces context from 5,000 to 300 tokens. What percentage cost reduction is achieved on context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("40%", "60%", "80%", "94%"),
                                "94%",
                                "obj_final_comprehensive")
                );

// Module 3 Questions (8 questions)
test.AddQuestion( new Question ("com.scorm.genai.cost.final_q18",
                                "What is the recommended alert threshold for daily spend exceeding the 7-day average?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10%", "20%", "30%", "50%"),
                                "20%",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q19",
                                "Which CloudWatch metric is the most direct indicator of GenAI cost drivers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Invocations", "InvocationLatency", "InputTokens and OutputTokens", "InvocationErrors"),
                                "InputTokens and OutputTokens",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q20",
                                "Which budget control mechanism is most appropriate for production GenAI environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hard limits with automatic shutdown", "Soft limits with alerts", "No budget controls", "Manual approval for every request"),
                                "Soft limits with alerts",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q21",
                                "Which FinOps principle emphasizes measuring cost per business outcome rather than absolute cost?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Teams need to collaborate", "Everyone takes ownership", "Decisions are driven by business value", "Reports should be accessible"),
                                "Decisions are driven by business value",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q22",
                                "What is the recommended initial approach for cost allocation in organizations new to GenAI FinOps?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Immediate chargeback", "Start with showback, evolve to chargeback", "Fixed allocation only", "No cost allocation"),
                                "Start with showback, evolve to chargeback",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q23",
                                "What percentage cost reduction is commonly achieved with comprehensive GenAI optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("20-30%", "40-50%", "60-80%", "90-95%"),
                                "60-80%",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q24",
                                "How should organizations mitigate the risk that cost optimization might compromise output quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Avoid all optimization", "Implement automated quality testing and monitoring", "Use only premium models", "Eliminate caching"),
                                "Implement automated quality testing and monitoring",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.final_q25",
                                "According to best practices, how frequently should GenAI optimization strategies be reviewed?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Weekly", "Monthly", "Quarterly", "Annually"),
                                "Quarterly",
                                "obj_final_comprehensive")
                );
