test.AddQuestion( new Question ("q1",
                                "What is the main difference between Imagen and Gemini Vision?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Imagen generates images, Gemini Vision understands them", "Imagen is faster, Gemini Vision is more accurate", "Imagen works with text, Gemini Vision with audio", "Imagen is free, Gemini Vision is paid"),
                                "Imagen generates images, Gemini Vision understands them",
                                "obj_final")
                );

test.AddQuestion( new Question ("q2",
                                "Which industry use case is best suited for Gemini Vision rather than Imagen?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Product image generation for e-commerce", "Virtual staging of empty rooms", "Visual quality inspection in manufacturing", "Ad creative generation"),
                                "Visual quality inspection in manufacturing",
                                "obj_final")
                );

test.AddQuestion( new Question ("q3",
                                "What parameter controls the number of images generated in a single Imagen request?",
                                QUESTION_TYPE_CHOICE,
                                new Array("batch_size", "image_count", "number_of_images", "generation_limit"),
                                "number_of_images",
                                "obj_final")
                );

test.AddQuestion( new Question ("q4",
                                "Which safety_filter_level provides the most restrictive content filtering?",
                                QUESTION_TYPE_CHOICE,
                                new Array("block_few", "block_some", "block_most", "block_none"),
                                "block_most",
                                "obj_final")
                );

test.AddQuestion( new Question ("q5",
                                "Which Imagen model should you use for image editing capabilities?",
                                QUESTION_TYPE_CHOICE,
                                new Array("imagen-3.0-generate-001", "imagen-3.0-capability-001", "imagen-base-001", "imagen-edit-001"),
                                "imagen-3.0-capability-001",
                                "obj_final")
                );

test.AddQuestion( new Question ("q6",
                                "What type of content does Imagen refuse to generate according to its content policies?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Abstract art", "Harmful, misleading, or CSAM content", "Black and white images", "Simple geometric shapes"),
                                "Harmful, misleading, or CSAM content",
                                "obj_final")
                );

test.AddQuestion( new Question ("q7",
                                "What is SynthID used for in Imagen?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improving image quality", "Embedding invisible watermarks to identify AI-generated images", "Reducing generation costs", "Speeding up image creation"),
                                "Embedding invisible watermarks to identify AI-generated images",
                                "obj_final")
                );

test.AddQuestion( new Question ("q8",
                                "In a microservices architecture, what is the recommended approach for handling long-running Imagen generation requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Synchronous blocking calls", "Async processing with job tracking and callbacks", "Polling every second", "Direct database writes"),
                                "Async processing with job tracking and callbacks",
                                "obj_final")
                );

test.AddQuestion( new Question ("q9",
                                "Which prompt component is most important for controlling the artistic style of generated images?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Subject description only", "Style specification like 'watercolor' or 'photorealistic'", "Image dimensions", "Safety filter level"),
                                "Style specification like 'watercolor' or 'photorealistic'",
                                "obj_final")
                );

test.AddQuestion( new Question ("q10",
                                "What is a key limitation of Imagen when generating complex scenes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cannot generate any colors", "May struggle with text rendering and very complex prompts with many objects", "Only works in black and white", "Cannot generate landscapes"),
                                "May struggle with text rendering and very complex prompts with many objects",
                                "obj_final")
                );

test.AddQuestion( new Question ("q11",
                                "Which Cloud Run configuration is recommended for production Imagen services?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Min instances 0, max instances 1", "Min instances 1, max instances 10, with auto-scaling", "No memory limits", "Single instance only"),
                                "Min instances 1, max instances 10, with auto-scaling",
                                "obj_final")
                );

test.AddQuestion( new Question ("q12",
                                "What is the primary advantage of using Gemini Vision to validate Imagen outputs in an automated workflow?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes generation faster", "It provides quality assurance and prompt adherence verification", "It reduces API costs to zero", "It eliminates all errors"),
                                "It provides quality assurance and prompt adherence verification",
                                "obj_final")
                );

test.AddQuestion( new Question ("q13",
                                "Which aspect ratio option is best for social media portrait posts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("16:9", "9:16", "1:1", "4:3"),
                                "9:16",
                                "obj_final")
                );

test.AddQuestion( new Question ("q14",
                                "What is the recommended strategy for handling Imagen API failures in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore errors", "Implement retry logic with exponential backoff and circuit breakers", "Immediately alert users", "Switch to manual processing"),
                                "Implement retry logic with exponential backoff and circuit breakers",
                                "obj_final")
                );

test.AddQuestion( new Question ("q15",
                                "Which ethical consideration is most important when deploying Imagen in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximizing generation speed", "Disclosing AI-generated content and implementing proper safety controls", "Reducing all costs", "Generating as many images as possible"),
                                "Disclosing AI-generated content and implementing proper safety controls",
                                "obj_final")
                );