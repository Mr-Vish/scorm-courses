// Module 1 Assessment - Caching Fundamentals for GenAI
// 8 unique questions covering business case, exact match caching, and architecture patterns

test.AddQuestion( new Question ("m1_q1",
                                "According to the business case analysis, what is the typical cost range for Claude Opus output tokens per 1,000 tokens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$0.003", "$0.015", "$0.075", "$0.0005"),
                                "$0.075",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("m1_q2",
                                "In the cost scenario analysis for a customer support chatbot with 30,000 daily API calls, what was the calculated monthly savings with a 50% cache hit rate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$1,500", "$2,650", "$3,200", "$5,400"),
                                "$2,650",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("m1_q3",
                                "What is the typical latency range for a cache hit compared to a simple GenAI API call?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cache hit: 10-50ms, GenAI API: 500ms-2s", "Cache hit: 100-200ms, GenAI API: 200-500ms", "Cache hit: 50-100ms, GenAI API: 100-300ms", "Cache hit: 5-10ms, GenAI API: 50-100ms"),
                                "Cache hit: 10-50ms, GenAI API: 500ms-2s",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("m1_q4",
                                "Which parameters must be included in the cache key generation for exact match caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the user prompt", "User prompt and model identifier", "User prompt, system prompt, model identifier, temperature, and max tokens", "User prompt and temperature setting"),
                                "User prompt, system prompt, model identifier, temperature, and max tokens",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("m1_q5",
                                "What is the recommended TTL (Time-To-Live) for static documentation content in a GenAI cache?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1-5 minutes", "15-60 minutes", "4-12 hours", "24-72 hours"),
                                "24-72 hours",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("m1_q6",
                                "Which normalization strategy helps improve cache hit rates in exact match caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increasing TTL values", "Converting text to lowercase and trimming whitespace", "Using larger cache storage", "Implementing multiple cache layers"),
                                "Converting text to lowercase and trimming whitespace",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("m1_q7",
                                "What is the primary advantage of the Proxy/Gateway caching pattern over Application-Level caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower latency for cache operations", "Multiple applications can share the same cache with centralized management", "Simpler implementation with no infrastructure requirements", "Better integration with business logic"),
                                "Multiple applications can share the same cache with centralized management",
                                "obj_module1_fundamentals")
                );

test.AddQuestion( new Question ("m1_q8",
                                "In a Distributed Cache Cluster architecture, what is the main trade-off compared to Sidecar caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Higher infrastructure cost but maximum hit rates across all applications", "Lower hit rates but simpler deployment", "No failover capabilities but faster response times", "Limited scalability but better isolation"),
                                "Higher infrastructure cost but maximum hit rates across all applications",
                                "obj_module1_fundamentals")
                );
