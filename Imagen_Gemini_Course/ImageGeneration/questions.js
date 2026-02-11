test.AddQuestion( new Question ("q1",
                                "Which Imagen model should you use for text-to-image generation on Vertex AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("imagen-3.0-generate-001", "imagen-3.0-capability-001", "imagen-2.0-base", "imagen-vision-001"),
                                "imagen-3.0-generate-001",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What is the primary difference between inpainting and outpainting in Imagen?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Inpainting adds text, outpainting removes it", "Inpainting fills masked regions, outpainting extends image boundaries", "Inpainting works with photos, outpainting with drawings", "Inpainting is faster, outpainting is more accurate"),
                                "Inpainting fills masked regions, outpainting extends image boundaries",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which prompt engineering technique would improve image quality in Imagen?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using shorter prompts", "Adding quality modifiers like 'photorealistic, 8K, detailed'", "Including multiple subjects", "Using only basic colors"),
                                "Adding quality modifiers like 'photorealistic, 8K, detailed'",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What is the purpose of the aspect_ratio parameter in Imagen generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Controls image file size", "Defines width to height proportions", "Sets color depth", "Determines generation speed"),
                                "Defines width to height proportions",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "Which edit_mode parameter would you use to add new elements to an existing image?",
                                QUESTION_TYPE_CHOICE,
                                new Array("inpainting-remove", "inpainting-insert", "outpainting-extend", "editing-replace"),
                                "inpainting-insert",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What is the recommended approach for handling Imagen API quota exceeded errors?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Immediately fail the request", "Implement retry logic with exponential backoff", "Switch to a different model", "Reduce image quality"),
                                "Implement retry logic with exponential backoff",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7",
                                "Which Gemini model provides the fastest response times for image analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("gemini-1.5-pro", "gemini-1.5-flash", "gemini-vision-ultra", "gemini-standard"),
                                "gemini-1.5-flash",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8",
                                "In a production workflow, what is the benefit of using Gemini Vision to validate Imagen outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces generation costs", "It ensures generated images match prompt requirements and quality standards", "It speeds up image generation", "It eliminates the need for safety filters"),
                                "It ensures generated images match prompt requirements and quality standards",
                                "obj_module_1")
                );