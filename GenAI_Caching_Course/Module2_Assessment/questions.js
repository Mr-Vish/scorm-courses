// Module 2 Assessment - Advanced Caching Strategies
// 8 unique questions covering semantic caching, provider-native caching, and TTL strategies

test.AddQuestion( new Question ("m2_q1",
                                "What is the primary advantage of semantic caching over exact match caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower infrastructure costs", "Matches queries by meaning rather than exact text, improving hit rates by 2-4x", "Faster response times", "Simpler implementation"),
                                "Matches queries by meaning rather than exact text, improving hit rates by 2-4x",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("m2_q2",
                                "What is the recommended similarity threshold range for most production applications using semantic caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.75 - 0.85", "0.85 - 0.90", "0.90 - 0.95", "0.95 - 1.0"),
                                "0.90 - 0.95",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("m2_q3",
                                "Which embedding model offers the lowest cost for semantic caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenAI text-embedding-3-large", "OpenAI text-embedding-3-small", "Sentence Transformers (self-hosted)", "Cohere embed-english-v3.0"),
                                "Sentence Transformers (self-hosted)",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("m2_q4",
                                "What percentage of cost savings does Anthropic's prompt caching provide on cached input tokens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50%", "75%", "90%", "100%"),
                                "90%",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("m2_q5",
                                "What is the cache duration for Anthropic's prompt caching feature?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1 minute", "5 minutes", "30 minutes", "1 hour"),
                                "5 minutes",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("m2_q6",
                                "What is the recommended TTL for static documentation content?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1-5 minutes", "5-30 minutes", "4-12 hours", "24-72 hours"),
                                "24-72 hours",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("m2_q7",
                                "What problem does request coalescing solve in cache management?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Slow cache reads", "Cache stampede when popular entries expire", "Insufficient cache storage", "Complex invalidation logic"),
                                "Cache stampede when popular entries expire",
                                "obj_module2_advanced")
                );

test.AddQuestion( new Question ("m2_q8",
                                "In a hybrid caching approach combining exact match and semantic caching, which tier is checked first?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Semantic cache for broader coverage", "Exact match cache for fastest retrieval", "Provider-native cache", "Both simultaneously"),
                                "Exact match cache for fastest retrieval",
                                "obj_module2_advanced")
                );
