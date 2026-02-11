test.AddQuestion( new Question ("com.scorm.llm.interactions.spring_1",
                                "Which Spring AI interface is used to interact with LLMs in a standardized way?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ChatClient", "LLMService", "ModelInterface", "AIConnector"),
                                "ChatClient",
                                "obj_module_spring")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.spring_2",
                                "What is the recommended approach for configuring different parameter sets for different use cases in the same application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Global configuration only", "Per-request configuration", "Hardcode parameters in each method", "Use separate applications"),
                                "Per-request configuration",
                                "obj_module_spring")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.spring_3",
                                "Which method is used to build ChatOptions for OpenAI in Spring AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenAiChatOptions.create()", "OpenAiChatOptions.builder()", "new OpenAiChatOptions()", "ChatOptions.forOpenAI()"),
                                "OpenAiChatOptions.builder()",
                                "obj_module_spring")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.spring_4",
                                "Where should API keys be stored in a Spring Boot application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcoded in source code", "In application.properties committed to Git", "In environment variables or secure secret managers", "In the database"),
                                "In environment variables or secure secret managers",
                                "obj_module_spring")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.spring_5",
                                "What happens when you specify per-request options that conflict with global configuration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Global configuration takes precedence", "Per-request options override global configuration", "An error is thrown", "Both are merged randomly"),
                                "Per-request options override global configuration",
                                "obj_module_spring")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.spring_6",
                                "Which Spring Boot feature allows you to maintain different LLM configurations for dev, staging, and production environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Spring Profiles", "Spring Beans", "Spring Controllers", "Spring Repositories"),
                                "Spring Profiles",
                                "obj_module_spring")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.spring_7",
                                "For a JSON data extraction endpoint that requires consistent, parseable output, which temperature value should you use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1.0", "0.7", "0.0", "1.5"),
                                "0.0",
                                "obj_module_spring")
                );

test.AddQuestion( new Question ("com.scorm.llm.interactions.spring_8",
                                "What is the primary advantage of using Spring AI's abstraction layer over direct API calls?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's faster than direct API calls", "It provides provider-agnostic code that works across multiple LLM providers", "It's free to use", "It doesn't require API keys"),
                                "It provides provider-agnostic code that works across multiple LLM providers",
                                "obj_module_spring")
                );
