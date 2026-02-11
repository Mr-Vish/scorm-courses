// Final Comprehensive Assessment
// 12 unique questions covering all modules: Fundamentals, Advanced Strategies, and Implementation

// Module 1 Questions (4 questions)
test.AddQuestion( new Question ("final_q1",
                                "A customer support application serves 30,000 daily API calls with an average of 500 input tokens and 300 output tokens using Claude Sonnet ($0.003 input, $0.015 output per 1K tokens). With a 50% cache hit rate, what is the approximate monthly API cost savings?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$1,350", "$2,650", "$4,500", "$5,400"),
                                "$2,650",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q2",
                                "Which cache architecture pattern provides the highest cache hit rates across multiple application instances?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Application-Level Caching", "Sidecar Caching", "Distributed Cache Cluster", "Proxy/Gateway Caching"),
                                "Distributed Cache Cluster",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q3",
                                "What is the primary limitation of exact match caching that semantic caching addresses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("High infrastructure costs", "Inability to recognize semantically equivalent queries with different wording", "Slow response times", "Complex implementation"),
                                "Inability to recognize semantically equivalent queries with different wording",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q4",
                                "For a cache key in exact match caching, which hash function is commonly recommended?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MD5", "SHA-1", "SHA-256", "CRC32"),
                                "SHA-256",
                                "obj_final_comprehensive")
                );

// Module 2 Questions (4 questions)
test.AddQuestion( new Question ("final_q5",
                                "In semantic caching, what does a similarity threshold of 0.92 mean?",
                                QUESTION_TYPE_CHOICE,
                                new Array("92% of queries will hit the cache", "Queries with 92% or higher cosine similarity to cached embeddings will return cached responses", "The cache will be 92% full", "92% cost savings"),
                                "Queries with 92% or higher cosine similarity to cached embeddings will return cached responses",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q6",
                                "What is the minimum cacheable token size for Anthropic's prompt caching feature?",
                                QUESTION_TYPE_CHOICE,
                                new Array("256 tokens", "512 tokens", "1,024 tokens", "2,048 tokens"),
                                "1,024 tokens",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q7",
                                "Which TTL strategy automatically extends the expiration time each time a cached entry is accessed?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fixed TTL", "Sliding Window TTL", "Adaptive TTL", "Time-of-Day TTL"),
                                "Sliding Window TTL",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q8",
                                "What problem does request coalescing solve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Slow database queries", "Cache stampede when multiple requests simultaneously detect a cache miss", "High memory usage", "Network latency"),
                                "Cache stampede when multiple requests simultaneously detect a cache miss",
                                "obj_final_comprehensive")
                );

// Module 3 Questions (4 questions)
test.AddQuestion( new Question ("final_q9",
                                "What is the formula for calculating cache hit rate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("(Total Requests / Cache Hits) × 100", "(Cache Hits / Total Requests) × 100", "(Cache Misses / Total Requests) × 100", "(Cache Hits / Cache Misses) × 100"),
                                "(Cache Hits / Total Requests) × 100",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q10",
                                "Which security measure prevents User A's cached data from being served to User B?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encryption at rest", "User-scoped cache keys including user ID or session ID", "TLS encryption", "Rate limiting"),
                                "User-scoped cache keys including user ID or session ID",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q11",
                                "In a phased rollout deployment strategy, what is the purpose of shadow mode?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To hide the cache from users", "To populate cache and monitor performance without impacting users", "To reduce costs", "To test security features"),
                                "To populate cache and monitor performance without impacting users",
                                "obj_final_comprehensive")
                );

test.AddQuestion( new Question ("final_q12",
                                "What is the recommended target ROI (Return on Investment) for cache infrastructure?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Break-even (1x)", "2x savings over costs", "3-10x savings over costs", "100x savings over costs"),
                                "3-10x savings over costs",
                                "obj_final_comprehensive")
                );
