test.AddQuestion( new Question ("kg.llm.q1",
                                "What is the main advantage of using LLMs for knowledge graph extraction compared to traditional NLP methods?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster processing speed", "Works with few-shot or zero-shot prompts without large labeled datasets", "Lower computational cost", "Better for structured data"),
                                "Works with few-shot or zero-shot prompts without large labeled datasets",
                                "obj_llm_construction")
                );

test.AddQuestion( new Question ("kg.llm.q2",
                                "What is the purpose of using response_format with 'json_object' in OpenAI API calls?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce API costs", "To ensure consistent structured output format", "To increase processing speed", "To enable multi-language support"),
                                "To ensure consistent structured output format",
                                "obj_llm_construction")
                );

test.AddQuestion( new Question ("kg.llm.q3",
                                "When processing long documents that exceed context limits, what technique should be used?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compress the document", "Chunking with overlap to maintain relationship continuity", "Use a smaller model", "Remove unnecessary text"),
                                "Chunking with overlap to maintain relationship continuity",
                                "obj_llm_construction")
                );

test.AddQuestion( new Question ("kg.llm.q4",
                                "What is entity resolution in knowledge graph construction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Extracting entities from text", "Identifying and merging duplicate entities that refer to the same real-world object", "Validating entity types", "Storing entities in a database"),
                                "Identifying and merging duplicate entities that refer to the same real-world object",
                                "obj_llm_construction")
                );

test.AddQuestion( new Question ("kg.llm.q5",
                                "In the automated graph building pipeline, what is the correct order of operations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Store, Extract, Validate, Deduplicate", "Extract, Validate, Deduplicate, Store", "Validate, Extract, Store, Deduplicate", "Deduplicate, Extract, Validate, Store"),
                                "Extract, Validate, Deduplicate, Store",
                                "obj_llm_construction")
                );

test.AddQuestion( new Question ("kg.llm.q6",
                                "What is the purpose of few-shot examples in extraction prompts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce API costs", "To demonstrate desired extraction behavior and improve consistency", "To increase processing speed", "To validate the model"),
                                "To demonstrate desired extraction behavior and improve consistency",
                                "obj_llm_construction")
                );

test.AddQuestion( new Question ("kg.llm.q7",
                                "Which prompt component defines the allowed entity and relationship types?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Role Definition", "Task Description", "Schema Specification", "Output Format"),
                                "Schema Specification",
                                "obj_llm_construction")
                );

test.AddQuestion( new Question ("kg.llm.q8",
                                "What is the benefit of using self-consistency checking in extraction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster extraction", "Lower costs", "Improved accuracy through majority voting across multiple extractions", "Simpler implementation"),
                                "Improved accuracy through majority voting across multiple extractions",
                                "obj_llm_construction")
                );
