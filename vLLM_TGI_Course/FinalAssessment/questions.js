// Final Comprehensive Assessment
// Covers all 1 modules


test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.vllmtgi.final_q1",
                                "Regarding LLM Serving: Which statement about Prefix caching: Enable for workloads with shared system prompts to save computation is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Wastes 60-80% of allocated KV-cache memory", "Split model across GPUs within one instance", "Prefix caching: Enable for workloads with shared system prompts to save computation", "Continuous batching + Flash Attention"),
                                "Prefix caching: Enable for workloads with shared system prompts to save computation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.vllmtgi.final_q2",
                                "Regarding LLM Serving: How is Speculative decoding: Use a small draft model to speed up generation from larger models best defined in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Multiple instances behind a load balancer", "Bigger GPU or more GPUs per instance", "Speculative decoding: Use a small draft model to speed up generation from larger models", "Custom REST + OpenAI-compatible"),
                                "Speculative decoding: Use a small draft model to speed up generation from larger models",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.vllmtgi.final_q3",
                                "Regarding LLM Serving: Which of the following is true regarding Pre-allocates contiguous memory for maximum sequence length?",
                                QUESTION_TYPE_CHOICE,
                                new Array("vLLM vs TGI Comparison", "Supports copy-on-write sharing for shared prefixes", "Pre-allocates contiguous memory for maximum sequence length", "What is vLLM?"),
                                "Pre-allocates contiguous memory for maximum sequence length",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.vllmtgi.final_q4",
                                "Regarding LLM Serving: Which of the following best describes Allocates memory in small, non-contiguous blocks (pages)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Vertical scaling", "Higher throughput", "Allocates memory in small, non-contiguous blocks (pages)", "Split model across GPUs within one instance"),
                                "Allocates memory in small, non-contiguous blocks (pages)",
                                "obj_final_assessment")
                );