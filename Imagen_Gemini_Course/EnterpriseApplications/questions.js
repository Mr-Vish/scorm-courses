test.AddQuestion( new Question ("q1",
                                "What is the primary benefit of using a queue-based processing pattern for Imagen generation in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces API costs", "It decouples generation from API response and handles variable load", "It improves image quality", "It eliminates the need for error handling"),
                                "It decouples generation from API response and handles variable load",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2",
                                "Which Cloud service is recommended for storing generated images with global fast delivery?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cloud SQL", "Cloud Storage with Cloud CDN", "Firestore", "BigQuery"),
                                "Cloud Storage with Cloud CDN",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3",
                                "What is the purpose of implementing request deduplication in an Imagen service?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve image quality", "To avoid regenerating identical images and reduce costs", "To speed up API responses", "To comply with safety policies"),
                                "To avoid regenerating identical images and reduce costs",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4",
                                "Which monitoring metric is most critical for tracking Imagen service health?",
                                QUESTION_TYPE_CHOICE,
                                new Array("CPU usage only", "API call duration, error rates, and cost per request", "Memory usage only", "Network bandwidth"),
                                "API call duration, error rates, and cost per request",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5",
                                "What is a canary deployment pattern used for in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reducing costs", "Testing new model versions with a small percentage of traffic", "Improving image quality", "Storing backup images"),
                                "Testing new model versions with a small percentage of traffic",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6",
                                "Which security practice is essential for protecting API keys in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcoding them in source code", "Storing them in Secret Manager", "Sharing them via email", "Including them in public repositories"),
                                "Storing them in Secret Manager",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7",
                                "What is the estimated cost per image for Imagen text-to-image generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$0.001", "~$0.020", "$1.00", "$10.00"),
                                "~$0.020",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8",
                                "Which strategy can reduce Imagen costs by 30-50% in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using lower quality settings only", "Caching, deduplication, and using fast models where appropriate", "Generating fewer images", "Disabling safety filters"),
                                "Caching, deduplication, and using fast models where appropriate",
                                "obj_module_2")
                );
