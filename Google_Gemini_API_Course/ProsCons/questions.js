test.AddQuestion( new Question ("gemini_pros_1",
                                "What is a key limitation of the Gemini API free tier that impacts development?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No access to multi-modal features", "Restrictive rate limits of 15 requests per minute", "Cannot use JSON mode", "No function calling support"),
                                "Restrictive rate limits of 15 requests per minute",
                                "obj_gemini_proscons")
                );

test.AddQuestion( new Question ("gemini_pros_2",
                                "What is the recommended mitigation strategy for handling large video processing latency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Avoid using video features entirely", "Implement asynchronous processing with progress indicators and compress media files", "Only process videos under 1 minute", "Use synchronous blocking calls"),
                                "Implement asynchronous processing with progress indicators and compress media files",
                                "obj_gemini_proscons")
                );

test.AddQuestion( new Question ("gemini_pros_3",
                                "Which cost optimization strategy is most effective for reducing token consumption?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always use Gemini 1.5 Pro for all tasks", "Optimize prompts to be concise and specific, and implement caching for similar queries", "Increase max_output_tokens to get more value", "Send the same request multiple times"),
                                "Optimize prompts to be concise and specific, and implement caching for similar queries",
                                "obj_gemini_proscons")
                );

test.AddQuestion( new Question ("gemini_pros_4",
                                "What is a significant advantage of Gemini's structured output with schema validation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes responses longer", "It eliminates parsing errors and ensures predictable integration with consistent data formats", "It reduces API costs", "It speeds up response generation"),
                                "It eliminates parsing errors and ensures predictable integration with consistent data formats",
                                "obj_gemini_proscons")
                );

test.AddQuestion( new Question ("gemini_pros_5",
                                "What is a key ethical consideration when deploying Gemini-powered applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always maximize token usage", "Disclose AI-generated content to users and maintain human oversight for critical decisions", "Hide the fact that AI is being used", "Avoid any human review"),
                                "Disclose AI-generated content to users and maintain human oversight for critical decisions",
                                "obj_gemini_proscons")
                );

test.AddQuestion( new Question ("gemini_pros_6",
                                "When should you consider alternatives to Gemini API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When you need multi-modal understanding", "When you need complete control over model hosting and fine-tuning on proprietary data is essential", "When you want to use function calling", "When you need structured JSON outputs"),
                                "When you need complete control over model hosting and fine-tuning on proprietary data is essential",
                                "obj_gemini_proscons")
                );

test.AddQuestion( new Question ("gemini_pros_7",
                                "What is the recommended approach for handling safety filter false positives?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Disable all safety filters", "Adjust safety settings, implement fallback strategies, and rephrase prompts", "Ignore blocked responses", "Always use maximum safety thresholds"),
                                "Adjust safety settings, implement fallback strategies, and rephrase prompts",
                                "obj_gemini_proscons")
                );

test.AddQuestion( new Question ("gemini_pros_8",
                                "What security best practice should be followed for API key management?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Share keys across all team members", "Store keys securely, rotate regularly, restrict permissions, and monitor usage for anomalies", "Commit keys to version control for backup", "Use the same key for all environments"),
                                "Store keys securely, rotate regularly, restrict permissions, and monitor usage for anomalies",
                                "obj_gemini_proscons")
                );

test.AddQuestion( new Question ("gemini_pros_9",
                                "What is a limitation of current Gemini models regarding customization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cannot use custom prompts", "Cannot fine-tune models on custom data, must rely on prompt engineering", "Cannot adjust temperature settings", "Cannot use function calling"),
                                "Cannot fine-tune models on custom data, must rely on prompt engineering",
                                "obj_gemini_proscons")
                );

test.AddQuestion( new Question ("gemini_pros_10",
                                "Which deployment option provides the best data residency controls for compliance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Google AI Studio with API keys", "Vertex AI with IAM and advanced security controls", "Gemini Nano on-device", "Public API endpoints"),
                                "Vertex AI with IAM and advanced security controls",
                                "obj_gemini_proscons")
                );
