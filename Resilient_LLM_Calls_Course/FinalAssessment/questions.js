// Final Comprehensive Assessment - Resilient LLM Applications
// Covers all expanded modules

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q1",
                                "What is the primary difference between RPM and TPM rate limits?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RPM measures response speed, while TPM measures training speed", "RPM is for individual requests, while TPM is for the total number of input and output tokens", "RPM is only used by OpenAI, while TPM is used by Anthropic", "There is no difference; they are interchangeable terms"),
                                "RPM is for individual requests, while TPM is for the total number of input and output tokens",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q2",
                                "In the context of exponential backoff, why is 'Jitter' important?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes the model's responses more creative", "It prevents the 'thundering herd' problem where many clients retry at the exact same time", "It reduces the cost of each API call", "It automatically compresses the input prompt"),
                                "It prevents the 'thundering herd' problem where many clients retry at the exact same time",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q3",
                                "A Circuit Breaker is in the 'HALF-OPEN' state when:",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is successfully processing all requests", "It is blocking all requests to give the provider time to recover", "It is allowing a small number of test requests to see if the provider has recovered", "It has reached its daily budget limit"),
                                "It is allowing a small number of test requests to see if the provider has recovered",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q4",
                                "Which fallback strategy involves switching to a different AI provider (e.g., from OpenAI to Anthropic)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model Fallback", "Provider Fallback", "Canned Fallback", "Cached Fallback"),
                                "Provider Fallback",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q5",
                                "What does 'Time To First Token' (TTFT) measure?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The total time to complete a 1000-token response", "The time from sending a request until the model starts streaming the first character", "The time it takes to train a reward model", "The time it takes for a circuit breaker to reset"),
                                "The time from sending a request until the model starts streaming the first character",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q6",
                                "How does a 'Bulkhead' pattern improve resilience in an LLM application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By increasing the maximum token limit of the model", "By isolating features so that a failure or quota exhaustion in one doesn't impact others", "By automatically summarizing long conversations", "By encrypting all logs to ensure privacy"),
                                "By isolating features so that a failure or quota exhaustion in one doesn't impact others",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q7",
                                "The 'Hedged Request' pattern is primarily used to:",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduce the cost of API calls", "Reduce 'tail latency' (P99) by sending the same request to multiple providers", "Prevent prompt injection attacks", "Automatically version system prompts"),
                                "Reduce 'tail latency' (P99) by sending the same request to multiple providers",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q8",
                                "Which cost-saving strategy involves using a smaller model to handle simple tasks before escalating to a larger model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Semantic Caching", "Model Routing", "Prompt Compression", "Batch Processing"),
                                "Model Routing",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q9",
                                "What is 'Semantic Caching'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Caching responses based on identical string matches only", "Using vector similarity to serve results for 'semantically similar' prompts from a local database", "A way to cache API keys in memory", "Storing the entire training corpus in a local cache"),
                                "Using vector similarity to serve results for 'semantically similar' prompts from a local database",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q10",
                                "Why should 'Safety Violations' (like a blocked prompt) be treated as permanent failures rather than transient ones?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Because retrying a blocked prompt will likely result in another block, wasting resources", "Because safety filters are always 100% accurate", "Because safety violations automatically reset the circuit breaker", "Because providers give a 50% discount for safety blocks"),
                                "Because retrying a blocked prompt will likely result in another block, wasting resources",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q11",
                                "What is the primary risk of using 'Hedged Requests'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increased latency", "Increased cost (multiple calls for one response)", "Lower model quality", "Higher risk of prompt injection"),
                                "Increased cost (multiple calls for one response)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q12",
                                "How does 'Prompt Compression' help with cost optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By reducing the number of input tokens per request, specifically in repetitive system prompts", "By increasing the temperature of the model", "By using a faster optimizer during fine-tuning", "By compressing the weights of the neural network"),
                                "By reducing the number of input tokens per request, specifically in repetitive system prompts",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q13",
                                "Which HTTP error code is typically returned when you hit a rate limit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("400 Bad Request", "401 Unauthorized", "429 Too Many Requests", "500 Internal Server Error"),
                                "429 Too Many Requests",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q14",
                                "In 'Hybrid AI' architectures, which tasks are typically handled by a local model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Highly complex reasoning and multi-step math", "Simple, low-stakes tasks and sensitive data processing", "Large-scale batch document analysis", "Training the next generation of base models"),
                                "Simple, low-stakes tasks and sensitive data processing",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.resilientllmcalls.final_q15",
                                "What is an 'AI Gateway'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A physical device for running LLMs", "A unified API layer that manages routing, retries, and caching across multiple model providers", "A tool for generating marketing copy", "A protocol for peer-to-peer model training"),
                                "A unified API layer that manages routing, retries, and caching across multiple model providers",
                                "obj_final_assessment")
                );