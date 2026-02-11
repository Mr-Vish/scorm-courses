test.AddQuestion( new Question ("q1_m2",
                                "What Python pattern does Instructor support for non-blocking concurrent operations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Threading", "Multiprocessing", "Async/await", "Coroutines only"),
                                "Async/await",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2_m2",
                                "Which Instructor method allows extracting multiple objects from a single API call?",
                                QUESTION_TYPE_CHOICE,
                                new Array("create_batch()", "create_iterable()", "create_multiple()", "extract_list()"),
                                "create_iterable()",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3_m2",
                                "What is the main benefit of using asyncio.Semaphore in batch processing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster execution", "Rate limiting and controlling concurrent requests", "Better error handling", "Reduced memory usage"),
                                "Rate limiting and controlling concurrent requests",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4_m2",
                                "In Pydantic models, what type annotation allows a field to contain other Pydantic models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Nested[ModelName]", "ModelName (direct type)", "Embedded[ModelName]", "SubModel[ModelName]"),
                                "ModelName (direct type)",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5_m2",
                                "Which Pydantic type is used when a field can have multiple distinct structures?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Union", "Multiple", "Variant", "Choice"),
                                "Union",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6_m2",
                                "What decorator validates relationships between multiple fields in a Pydantic model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("@field_validator", "@model_validator", "@cross_validator", "@multi_field_validator"),
                                "@model_validator",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7_m2",
                                "Recursive Pydantic models can reference themselves to create tree-like structures",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8_m2",
                                "What is the recommended maximum nesting depth for complex schemas?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1-2 levels", "3-4 levels", "5-6 levels", "No limit"),
                                "3-4 levels",
                                "obj_module_2")
                );
