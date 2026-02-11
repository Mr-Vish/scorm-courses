// Module 2 Assessment: Cost Optimization Strategies
// 8 questions covering model selection, prompt optimization, and caching

test.AddQuestion( new Question ("com.scorm.genai.cost.module2_q1",
                                "Which model tier is most appropriate for high-volume email classification tasks with acceptable error tolerance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Premium models (Claude Opus)", "Balanced models (Claude Sonnet)", "Light models (Claude Haiku)", "Ultra-light models (Titan Lite)"),
                                "Ultra-light models (Titan Lite)",
                                "obj_module2_optimization")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module2_q2",
                                "In a tiered processing architecture, what percentage of cost savings can typically be achieved compared to using a single balanced model for all requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("20-30%", "40-50%", "60-70%", "80-90%"),
                                "60-70%",
                                "obj_module2_optimization")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module2_q3",
                                "A system prompt is reduced from 450 tokens to 85 tokens. For 1 million requests using Claude Sonnet ($3 per 1M input tokens), what is the monthly cost savings?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$1.10", "$10.95", "$109.50", "$1,095"),
                                "$1,095",
                                "obj_module2_optimization")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module2_q4",
                                "What is the primary advantage of using structured JSON output instead of natural language responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Better model accuracy", "Reduced output token consumption", "Faster processing time", "Improved user experience"),
                                "Reduced output token consumption",
                                "obj_module2_optimization")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module2_q5",
                                "What is the minimum token size required for AWS Bedrock's prompt caching to activate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("256 tokens", "512 tokens", "1,024 tokens", "2,048 tokens"),
                                "1,024 tokens",
                                "obj_module2_optimization")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module2_q6",
                                "For an FAQ system with 70% cache hit rate, what percentage cost reduction can be expected from exact match caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("30%", "50%", "70%", "90%"),
                                "70%",
                                "obj_module2_optimization")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module2_q7",
                                "What discount does AWS Bedrock's Batch API provide for non-real-time workloads?",
                                QUESTION_TYPE_CHOICE,
                                new Array("25%", "50%", "75%", "90%"),
                                "50%",
                                "obj_module2_optimization")
                );

test.AddQuestion( new Question ("com.scorm.genai.cost.module2_q8",
                                "What is the ROI range for semantic caching when considering embedding generation costs versus avoided inference costs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("2-5x", "10-20x", "30-750x", "1000-2000x"),
                                "30-750x",
                                "obj_module2_optimization")
                );
