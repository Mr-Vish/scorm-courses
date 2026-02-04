test.AddQuestion( new Question ("q1",
                                "When sending multiple images to Claude in a single request, how should they be structured in the API call?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Each image requires a separate message in the conversation", "As multiple 'image' content blocks within the same message", "As a comma-separated list of URLs in the prompt string", "Images must be merged into a single large mosaic first"),
                                "As multiple 'image' content blocks within the same message",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "Which image format is supported by Claude's vision API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SVG", "TIFF", "JPEG", "ICO"),
                                "JPEG",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "What is a best practice when providing images to Claude for analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Provide clear, high-resolution images and use text to refer to specific images if multiple are provided", "Use the smallest possible thumbnail", "Always blur the images first", "Rotate the image 90 degrees"),
                                "Provide clear, high-resolution images and use text to refer to specific images if multiple are provided",
                                "obj_module_1")
                );
