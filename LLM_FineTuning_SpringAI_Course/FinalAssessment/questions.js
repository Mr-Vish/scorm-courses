// Final Comprehensive Assessment - 25 Unique Questions
// Covers all modules: Introduction, Understanding the Knobs, Spring AI Implementation, Parameter Recommendations, Pro-Tips

// Introduction & Concepts (5 questions)
test.AddQuestion( new Question ("com.scorm.llm.final.intro_1",
                                "What is the primary difference between traditional fine-tuning and inference parameter tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Inference tuning requires model retraining", "Traditional fine-tuning requires model retraining while inference tuning adjusts runtime parameters", "They are the same thing", "Inference tuning is more expensive"),
                                "Traditional fine-tuning requires model retraining while inference tuning adjusts runtime parameters",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.intro_2",
                                "What is the main advantage of using Spring AI for LLM integration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's free to use", "It provides provider-agnostic abstractions that work across multiple LLM providers", "It eliminates the need for API keys", "It makes LLMs run faster"),
                                "It provides provider-agnostic abstractions that work across multiple LLM providers",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.intro_3",
                                "Which scenario is NOT a good candidate for parameter tuning alone?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Adjusting creativity for different content types", "Adding domain-specific knowledge the model doesn't have", "Reducing repetition in responses", "Controlling response length"),
                                "Adding domain-specific knowledge the model doesn't have",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.intro_4",
                                "What ethical consideration is important when using high temperature settings?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses more electricity", "It increases the risk of hallucinations and misinformation", "It violates API terms of service", "It makes responses too short"),
                                "It increases the risk of hallucinations and misinformation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.intro_5",
                                "Which Spring Boot feature is most useful for maintaining different LLM configurations across environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Spring Data", "Spring Profiles", "Spring Security", "Spring Batch"),
                                "Spring Profiles",
                                "obj_final_assessment")
                );

// Understanding Parameters (5 questions)
test.AddQuestion( new Question ("com.scorm.llm.final.params_1",
                                "How does Temperature affect the probability distribution of next token selection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It adds new tokens to the vocabulary", "It scales the distribution, making it sharper at low values and flatter at high values", "It removes low-probability tokens", "It has no effect on probabilities"),
                                "It scales the distribution, making it sharper at low values and flatter at high values",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.params_2",
                                "What is the key difference between Top-P and Top-K sampling?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Top-P uses cumulative probability while Top-K uses a fixed token count", "Top-K is faster than Top-P", "Top-P only works with OpenAI", "There is no difference"),
                                "Top-P uses cumulative probability while Top-K uses a fixed token count",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.params_3",
                                "If Frequency Penalty is set to 0.5, what happens to a token that has already appeared 3 times?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is completely blocked", "Its probability is reduced proportionally to its frequency", "Its probability is increased", "Nothing, frequency doesn't matter"),
                                "Its probability is reduced proportionally to its frequency",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.params_4",
                                "What is the primary purpose of Presence Penalty?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To prevent any token repetition", "To encourage exploring new topics and concepts", "To reduce response length", "To improve grammar"),
                                "To encourage exploring new topics and concepts",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.params_5",
                                "Approximately how many English words does 1000 tokens represent?",
                                QUESTION_TYPE_CHOICE,
                                new Array("250 words", "500 words", "750 words", "1000 words"),
                                "750 words",
                                "obj_final_assessment")
                );

// Spring AI Implementation (5 questions)
test.AddQuestion( new Question ("com.scorm.llm.final.spring_1",
                                "Which method chain is used to set per-request options in Spring AI ChatClient?",
                                QUESTION_TYPE_CHOICE,
                                new Array("chatClient.configure().options()", "chatClient.prompt().user().options()", "chatClient.setOptions()", "chatClient.withOptions()"),
                                "chatClient.prompt().user().options()",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.spring_2",
                                "Where should you store OpenAI API keys in a production Spring Boot application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("In application.properties committed to Git", "Hardcoded in Java classes", "In environment variables or secure secret managers", "In the database"),
                                "In environment variables or secure secret managers",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.spring_3",
                                "What happens when per-request ChatOptions conflict with global configuration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("An error is thrown", "Global configuration takes precedence", "Per-request options override global configuration", "They are merged randomly"),
                                "Per-request options override global configuration",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.spring_4",
                                "Which Spring AI class is used to convert LLM responses to Java objects?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ObjectMapper", "BeanOutputConverter", "ResponseParser", "JsonConverter"),
                                "BeanOutputConverter",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.spring_5",
                                "What is the recommended configuration approach for applications with multiple distinct use cases?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use only global configuration", "Use per-request configuration with different options for each use case", "Create separate applications", "Use the same parameters for everything"),
                                "Use per-request configuration with different options for each use case",
                                "obj_final_assessment")
                );

// Use Case Recommendations (5 questions)
test.AddQuestion( new Question ("com.scorm.llm.final.usecase_1",
                                "For a sentiment classification task, which parameter combination is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Temperature: 0.0, Max Tokens: 10", "Temperature: 0.9, Max Tokens: 1000", "Temperature: 0.5, Frequency Penalty: 0.5", "Temperature: 1.2, Presence Penalty: 0.8"),
                                "Temperature: 0.0, Max Tokens: 10",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.usecase_2",
                                "Which use case requires the highest temperature setting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("JSON data extraction", "Code generation", "Technical documentation", "Creative brainstorming"),
                                "Creative brainstorming",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.usecase_3",
                                "For generating marketing copy that should be creative but not repetitive, which parameters should you emphasize?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Low Temperature, no penalties", "High Temperature, high Frequency Penalty", "Zero Temperature, high Max Tokens", "Medium Temperature, no penalties"),
                                "High Temperature, high Frequency Penalty",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.usecase_4",
                                "What temperature range is recommended for technical documentation generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.0", "0.2 - 0.3", "0.7 - 0.9", "1.0 - 1.5"),
                                "0.2 - 0.3",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.usecase_5",
                                "For a customer support chatbot, why is a moderate Frequency Penalty (0.2) recommended?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make responses shorter", "To prevent repetitive phrasing in conversations", "To increase creativity", "To reduce costs"),
                                "To prevent repetitive phrasing in conversations",
                                "obj_final_assessment")
                );

// Pro-Tips and Best Practices (5 questions)
test.AddQuestion( new Question ("com.scorm.llm.final.tips_1",
                                "Why should you avoid adjusting both Temperature and Top-P simultaneously?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's too expensive", "They control randomness in different ways and create unpredictable interactions", "It's not supported by the API", "It makes responses too long"),
                                "They control randomness in different ways and create unpredictable interactions",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.tips_2",
                                "What is the primary benefit of implementing caching for deterministic LLM requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improved response quality", "Reduced API costs and faster responses", "Better security", "Easier debugging"),
                                "Reduced API costs and faster responses",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.tips_3",
                                "When should you consider using a cheaper model like GPT-3.5 instead of GPT-4?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Never, always use the most expensive model", "For simple tasks like classification or basic Q&A", "Only during development", "Only on weekends"),
                                "For simple tasks like classification or basic Q&A",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.tips_4",
                                "What is the recommended minimum number of test examples for validating parameter choices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("5-10 examples", "50-100 examples", "500-1000 examples", "Testing is not necessary"),
                                "50-100 examples",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llm.final.tips_5",
                                "Which metric is most directly impacted by the Max Tokens parameter?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Response quality", "Cost per request and latency", "Error rate", "User satisfaction"),
                                "Cost per request and latency",
                                "obj_final_assessment")
                );
