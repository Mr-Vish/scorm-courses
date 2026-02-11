test.AddQuestion( new Question ("q1",
                                "What is an important aspect of Cache Invalidation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Static knowledge (docs)", "50ms (cache hit)", "Anthropic Prompt Caching", "Time-based (TTL): Simplest, set expiration on cache entries"),
                                "Time-based (TTL): Simplest, set expiration on cache entries",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What is the primary purpose of Cache Invalidation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Track hit rate, miss rate, and eviction rate", "Very High", "Event-based: Invalidate when source data changes (webhook, CDC)", "Monitoring Cache Performance"),
                                "Event-based: Invalidate when source data changes (webhook, CDC)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which of the following best describes Cache Invalidation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("TTL Strategies", "Version-based: Include model version in cache key, auto-invalidate on updates", "Alert on sudden drops in hit rate (may indicate data freshness issues)", "Moderate"),
                                "Version-based: Include model version in cache key, auto-invalidate on updates",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What distinguishes Cache Invalidation from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manual purge: Admin tools to clear specific cache entries or patterns", "Caching Strategies", "$18,000", "Avg tokens/call: 2,000"),
                                "Manual purge: Admin tools to clear specific cache entries or patterns",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "Which of the following is true regarding Monitoring Cache Performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compare latency for cache hits vs misses", "$9,000 + $50 cache", "Track hit rate, miss rate, and eviction rate", "Anthropic offers native prompt caching for repeated system prompts and context:"),
                                "Track hit rate, miss rate, and eviction rate",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "Which statement about Monitoring Cache Performance is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GenAI API calls are expensive ($0.003-$0.075 per 1K tokens) and slow (200ms-5s latency)...", "Time-based (TTL): Simplest, set expiration on cache entries", "Cache computed results", "Monitor cache size and memory usage"),
                                "Monitor cache size and memory usage",
                                "obj_module_1")
                );