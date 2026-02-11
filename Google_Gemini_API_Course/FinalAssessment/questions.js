// Final Comprehensive Assessment - Google Gemini API Course
// Covers all modules: Fundamentals, Advanced Features, and Pros/Cons

// Gemini Fundamentals (8 questions)
test.AddQuestion( new Question ("gemini_final_fund_1",
                                "What distinguishes Gemini from traditional text-only language models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Larger parameter count", "Native multi-modal architecture understanding text, images, video, audio, and code simultaneously", "Faster inference speed", "Lower cost per token"),
                                "Native multi-modal architecture understanding text, images, video, audio, and code simultaneously",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_fund_2",
                                "Which model should you select for analyzing a 3-hour video lecture with comprehensive content?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Gemini 2.0 Flash for speed", "Gemini 1.5 Pro for its 2M token context window", "Gemini Nano for on-device processing", "Gemini 1.5 Flash for cost efficiency"),
                                "Gemini 1.5 Pro for its 2M token context window",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_fund_3",
                                "What is the correct way to configure the Gemini API in Python?",
                                QUESTION_TYPE_CHOICE,
                                new Array("genai.setup(api_key)", "genai.configure(api_key=os.environ.get('GEMINI_API_KEY'))", "genai.initialize(key)", "genai.auth(api_key)"),
                                "genai.configure(api_key=os.environ.get('GEMINI_API_KEY'))",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_fund_4",
                                "When combining text and images in a request, what is the correct format?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Send image first, then text in separate requests", "Pass a list containing both text strings and image objects to generate_content", "Only text is supported with images", "Images must be converted to text descriptions"),
                                "Pass a list containing both text strings and image objects to generate_content",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_fund_5",
                                "What does setting temperature to 0.0 in GenerationConfig achieve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximum creativity and randomness", "Most focused and deterministic outputs", "Fastest response time", "Lowest token cost"),
                                "Most focused and deterministic outputs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_fund_6",
                                "How should you handle ResourceExhausted exceptions from rate limiting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Immediately retry without delay", "Implement exponential backoff with increasing wait times between retries", "Give up and return an error", "Switch to a different model"),
                                "Implement exponential backoff with increasing wait times between retries",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_fund_7",
                                "What is required in the response_schema when using JSON mode?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the field names", "Type definitions, properties, and optionally required fields", "Only example values", "Only the root object type"),
                                "Type definitions, properties, and optionally required fields",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_fund_8",
                                "In a streaming response, how is content delivered to the application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("All at once after generation completes", "In chunks as they are generated, allowing real-time display", "Only the final summary", "Compressed and then decompressed"),
                                "In chunks as they are generated, allowing real-time display",
                                "obj_final_assessment")
                );

// Advanced Features (8 questions)
test.AddQuestion( new Question ("gemini_final_adv_1",
                                "What is the correct sequence for processing an uploaded video file?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Upload → Generate content immediately", "Upload → Check processing state → Wait until ACTIVE → Generate content", "Generate content → Upload → Check state", "Upload → Delete → Generate content"),
                                "Upload → Check processing state → Wait until ACTIVE → Generate content",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_adv_2",
                                "What capability does Gemini's video processing provide beyond basic transcription?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only audio extraction", "Simultaneous understanding of visual elements, audio, on-screen text, and their relationships", "Only frame extraction", "Only subtitle generation"),
                                "Simultaneous understanding of visual elements, audio, on-screen text, and their relationships",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_adv_3",
                                "In function calling, who executes the actual function code?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Gemini model executes it directly", "Your application executes it based on the model's structured request", "Google's servers execute it automatically", "The function executes itself"),
                                "Your application executes it based on the model's structured request",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_adv_4",
                                "What must be included when defining a function declaration for Gemini?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the function name", "Name, description, and parameter schema with types", "Only the return type", "Only example inputs"),
                                "Name, description, and parameter schema with types",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_adv_5",
                                "How do you return function execution results back to the model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Print them to console", "Send a message with FunctionResponse containing the function name and result", "Store them in a database", "Email them to Google"),
                                "Send a message with FunctionResponse containing the function name and result",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_adv_6",
                                "What does Google Search grounding provide that standard generation does not?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster responses", "Real-time web data with source citations to reduce hallucinations", "Cheaper API calls", "Longer context windows"),
                                "Real-time web data with source citations to reduce hallucinations",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_adv_7",
                                "When analyzing multiple research papers simultaneously, what Gemini feature enables this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Parallel processing", "Long context windows up to 2M tokens", "Automatic summarization", "Batch API endpoints"),
                                "Long context windows up to 2M tokens",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_adv_8",
                                "What should you do with uploaded files after processing is complete?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Leave them indefinitely", "Delete them using genai.delete_file() to manage storage and costs", "Archive them locally", "Convert them to text"),
                                "Delete them using genai.delete_file() to manage storage and costs",
                                "obj_final_assessment")
                );

// Pros, Cons, and Best Practices (9 questions)
test.AddQuestion( new Question ("gemini_final_pros_1",
                                "What is the primary advantage of Gemini's structured output feature?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster generation", "Reliable JSON with schema validation eliminating parsing errors", "Lower costs", "Longer responses"),
                                "Reliable JSON with schema validation eliminating parsing errors",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_pros_2",
                                "What is a key limitation when using the free tier for production applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No multi-modal support", "Rate limits of 15 requests per minute are too restrictive", "Cannot use Python SDK", "No JSON mode available"),
                                "Rate limits of 15 requests per minute are too restrictive",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_pros_3",
                                "Which strategy best reduces costs when processing long contexts repeatedly?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always use the largest model", "Implement caching for identical or similar queries", "Increase max_output_tokens", "Disable safety filters"),
                                "Implement caching for identical or similar queries",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_pros_4",
                                "What is the recommended approach for handling sensitive data with Gemini?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Send all data for best results", "Avoid sending PII, credentials, or confidential data; ensure compliance with regulations", "Encrypt data before sending", "Only use on weekends"),
                                "Avoid sending PII, credentials, or confidential data; ensure compliance with regulations",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_pros_5",
                                "When should you consider using Vertex AI instead of Google AI Studio?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For initial prototyping", "For production workloads requiring enterprise SLA, IAM, and data residency controls", "For personal projects", "For learning the API"),
                                "For production workloads requiring enterprise SLA, IAM, and data residency controls",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_pros_6",
                                "What is a current limitation regarding model customization in Gemini?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cannot adjust generation parameters", "Cannot fine-tune on custom data; must use prompt engineering and few-shot learning", "Cannot use custom functions", "Cannot change safety settings"),
                                "Cannot fine-tune on custom data; must use prompt engineering and few-shot learning",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_pros_7",
                                "What is an essential component of a production-ready Gemini integration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcoded API keys for consistency", "Comprehensive error handling with retries, monitoring, and fallback strategies", "Disabling all safety filters", "Using only synchronous calls"),
                                "Comprehensive error handling with retries, monitoring, and fallback strategies",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_pros_8",
                                "How should API keys be managed in a production environment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Commit to version control", "Store securely, rotate regularly, restrict permissions, and monitor usage", "Share via email", "Hardcode in application"),
                                "Store securely, rotate regularly, restrict permissions, and monitor usage",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("gemini_final_pros_9",
                                "What ethical consideration is important when deploying AI-powered applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maximize automation without oversight", "Disclose AI-generated content and maintain human oversight for critical decisions", "Hide AI usage from users", "Eliminate all human review"),
                                "Disclose AI-generated content and maintain human oversight for critical decisions",
                                "obj_final_assessment")
                );
