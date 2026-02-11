test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.vllmtgi.m1_q1",
                                "What is a key characteristic of Static batching: Wait for all requests to finish, then process next batch (inefficient)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Running vLLM", "Result: 10-20x higher throughput compared to naive batching", "Variable traffic patterns", "Static batching: Wait for all requests to finish, then process next batch (inefficient)"),
                                "Static batching: Wait for all requests to finish, then process next batch (inefficient)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.vllmtgi.m1_q2",
                                "Which statement about Continuous batching: When one request finishes, immediately add a waiting request (much hi is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Batch size: Larger max batch sizes improve throughput but increase latency", "Docker (primary), Rust backend", "Continuous batching: When one request finishes, immediately add a waiting request (much hi", "GPTQ, AWQ, bitsandbytes"),
                                "Continuous batching: When one request finishes, immediately add a waiting request (much hi",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.vllmtgi.m1_q3",
                                "What is the primary purpose of Result: 10-20x higher throughput compared to naive batching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("HuggingFace integrated, production-proven", "Allocates memory in small, non-contiguous blocks (pages)", "Result: 10-20x higher throughput compared to naive batching", "Scaling Strategies"),
                                "Result: 10-20x higher throughput compared to naive batching",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.vllmtgi.m1_q4",
                                "What role does Key metrics: Tokens/second, time-to-first-token (TTFT), requests/second, queue depth, GPU  play in LLM Serving?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Key metrics: Tokens/second, time-to-first-token (TTFT), requests/second, queue depth, GPU ", "What is vLLM?", "Cannot share memory between requests", "Scale instances based on queue depth or latency"),
                                "Key metrics: Tokens/second, time-to-first-token (TTFT), requests/second, queue depth, GPU ",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.vllmtgi.m1_q5",
                                "How is Memory tuning: Adjust --gpu-memory-utilization (0.85-0.95 typical range) best defined in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Memory tuning: Adjust --gpu-memory-utilization (0.85-0.95 typical range)", "Vertical scaling", "Supports copy-on-write sharing for shared prefixes", "Pre-allocates contiguous memory for maximum sequence length"),
                                "Memory tuning: Adjust --gpu-memory-utilization (0.85-0.95 typical range)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.vllmtgi.m1_q6",
                                "Which of the following is true regarding Batch size: Larger max batch sizes improve throughput but increase latency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Variable traffic patterns", "Batch size: Larger max batch sizes improve throughput but increase latency", "Pre-allocates contiguous memory for maximum sequence length", "Running vLLM"),
                                "Batch size: Larger max batch sizes improve throughput but increase latency",
                                "obj_module_1")
                );