test.AddQuestion( new Question ("q1",
                                "What is the primary strategic purpose of AWS PartyRock within the AWS ecosystem?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To replace Amazon Bedrock for production AI applications", "To serve as a rapid prototyping and learning platform for generative AI without requiring AWS accounts or coding", "To provide enterprise-grade AI deployment infrastructure", "To compete with other cloud providers' AI services"),
                                "To serve as a rapid prototyping and learning platform for generative AI without requiring AWS accounts or coding",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "How does PartyRock's relationship with Amazon Bedrock benefit users?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PartyRock provides access to the same foundation models as Bedrock through a simplified no-code interface", "PartyRock offers more advanced models than Bedrock", "PartyRock automatically converts prototypes to production Bedrock applications", "PartyRock and Bedrock are completely independent services with no relationship"),
                                "PartyRock provides access to the same foundation models as Bedrock through a simplified no-code interface",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which widget type would be most appropriate for creating a multi-turn dialogue where the AI maintains context across user interactions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Text Generation Widget", "User Input Widget", "Chatbot Widget", "Static Text Widget"),
                                "Chatbot Widget",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "In PartyRock's widget architecture, what does the @WidgetName syntax accomplish?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It creates a hyperlink to another widget", "It allows one widget's prompt to dynamically reference another widget's output, creating data flow", "It assigns a unique identifier to each widget", "It specifies which AI model the widget should use"),
                                "It allows one widget's prompt to dynamically reference another widget's output, creating data flow",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "A company wants to create an application where users describe a product, and the system generates a name, tagline, and logo in sequence. Which design pattern is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Conversational Exploration", "Parallel Processing", "Linear Pipeline", "Static Display"),
                                "Linear Pipeline",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "Why is specificity important in prompt engineering for PartyRock applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Specific prompts reduce token consumption", "Specific prompts provide clear direction to the AI model, resulting in more consistent and relevant outputs", "Specific prompts are required by PartyRock's technical architecture", "Specific prompts allow the use of more advanced AI models"),
                                "Specific prompts provide clear direction to the AI model, resulting in more consistent and relevant outputs",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7",
                                "What is the purpose of role assignment in prompt engineering (e.g., 'You are an experienced marketing consultant')?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To limit the AI model's access to certain knowledge domains", "To prime the model to adopt appropriate knowledge, tone, and perspective for the task", "To comply with PartyRock's usage policies", "To reduce the computational cost of generation"),
                                "To prime the model to adopt appropriate knowledge, tone, and perspective for the task",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8",
                                "A PartyRock application consistently generates outputs that are too informal for business use. Which prompting technique would most directly address this issue?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Adding more User Input widgets", "Including constraint specifications in the prompt such as 'Maintain a professional, formal tone'", "Switching to a different widget type", "Increasing the number of examples in the prompt"),
                                "Including constraint specifications in the prompt such as 'Maintain a professional, formal tone'",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q9",
                                "PartyRock requires an AWS account and programming knowledge to create applications.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q10",
                                "Text Generation widgets can reference outputs from other widgets using the @WidgetName syntax to create dynamic, context-aware applications.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q11",
                                "Providing examples of desired outputs in prompts (few-shot learning) can improve consistency and quality of AI-generated content.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q12",
                                "Image Generation widgets and Text Generation widgets interpret prompts identically and require the same prompting techniques.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_1")
                );
