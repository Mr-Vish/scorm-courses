test.AddQuestion( new Question ("q1_ap",
                                "What is the primary advantage of using async/await with Instructor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced API costs", "Non-blocking concurrent extraction operations", "Better validation accuracy", "Simpler code structure"),
                                "Non-blocking concurrent extraction operations",
                                "obj_advanced_patterns")
                );

test.AddQuestion( new Question ("q2_ap",
                                "Which method extracts multiple structured objects from a single text input?",
                                QUESTION_TYPE_CHOICE,
                                new Array("create_batch()", "create_iterable()", "extract_many()", "batch_extract()"),
                                "create_iterable()",
                                "obj_advanced_patterns")
                );

test.AddQuestion( new Question ("q3_ap",
                                "What is the purpose of asyncio.Semaphore in batch processing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To speed up processing", "To limit the number of concurrent operations", "To handle errors", "To cache results"),
                                "To limit the number of concurrent operations",
                                "obj_advanced_patterns")
                );

test.AddQuestion( new Question ("q4_ap",
                                "In complex schemas, how do you create a field that contains another Pydantic model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use the model class as the field type directly", "Use Nested[ModelClass]", "Use Embedded[ModelClass]", "Use SubModel[ModelClass]"),
                                "Use the model class as the field type directly",
                                "obj_advanced_patterns")
                );

test.AddQuestion( new Question ("q5_ap",
                                "What Pydantic type allows a field to accept multiple different model types?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Multiple", "Union", "Variant", "Choice"),
                                "Union",
                                "obj_advanced_patterns")
                );
