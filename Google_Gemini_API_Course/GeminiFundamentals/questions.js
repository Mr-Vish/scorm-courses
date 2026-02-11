test.AddQuestion( new Question ("gemini_fund_1",
                                "What is the primary architectural difference between Gemini and traditional text-only LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Gemini has more parameters", "Gemini is natively multi-modal, designed from the ground up to understand multiple modalities simultaneously", "Gemini uses a different transformer architecture", "Gemini is faster at text generation"),
                                "Gemini is natively multi-modal, designed from the ground up to understand multiple modalities simultaneously",
                                "obj_gemini_fundamentals")
                );

test.AddQuestion( new Question ("gemini_fund_2",
                                "Which Gemini model variant offers the largest context window?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Gemini 2.0 Flash with 2M tokens", "Gemini 1.5 Pro with 2M tokens", "Gemini 1.5 Flash with 1M tokens", "Gemini Nano with on-device context"),
                                "Gemini 1.5 Pro with 2M tokens",
                                "obj_gemini_fundamentals")
                );

test.AddQuestion( new Question ("gemini_fund_3",
                                "What is the recommended approach for storing API keys in production applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcode them in the source code", "Store them in environment variables or secure secret management systems", "Include them in configuration files committed to version control", "Pass them as command-line arguments"),
                                "Store them in environment variables or secure secret management systems",
                                "obj_gemini_fundamentals")
                );

test.AddQuestion( new Question ("gemini_fund_4",
                                "When should you use Gemini 1.5 Flash instead of Gemini 1.5 Pro?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When processing extremely long documents requiring 2M tokens", "When building high-throughput production applications that need to balance performance with cost", "When you need the most advanced reasoning capabilities", "When processing on-device without internet"),
                                "When building high-throughput production applications that need to balance performance with cost",
                                "obj_gemini_fundamentals")
                );

test.AddQuestion( new Question ("gemini_fund_5",
                                "What is the primary advantage of using Google AI Studio over Vertex AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Better performance and lower latency", "Free tier available for prototyping and development", "Enterprise SLA guarantees", "Advanced compliance and security controls"),
                                "Free tier available for prototyping and development",
                                "obj_gemini_fundamentals")
                );

test.AddQuestion( new Question ("gemini_fund_6",
                                "What Python library is used to handle images in multi-modal Gemini requests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenCV", "PIL.Image", "imageio", "scikit-image"),
                                "PIL.Image",
                                "obj_gemini_fundamentals")
                );

test.AddQuestion( new Question ("gemini_fund_7",
                                "What parameter in GenerationConfig controls the creativity and randomness of model outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("top_p", "top_k", "temperature", "max_output_tokens"),
                                "temperature",
                                "obj_gemini_fundamentals")
                );

test.AddQuestion( new Question ("gemini_fund_8",
                                "When implementing retry logic for API calls, what strategy should be used for rate limit errors?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retry immediately without delay", "Exponential backoff with increasing wait times", "Give up after first failure", "Retry with fixed 1-second intervals"),
                                "Exponential backoff with increasing wait times",
                                "obj_gemini_fundamentals")
                );

test.AddQuestion( new Question ("gemini_fund_9",
                                "What is the purpose of the response_mime_type parameter when set to 'application/json'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To compress the response data", "To enable structured JSON output with schema validation", "To format the response as XML", "To encrypt the response payload"),
                                "To enable structured JSON output with schema validation",
                                "obj_gemini_fundamentals")
                );

test.AddQuestion( new Question ("gemini_fund_10",
                                "In a chat conversation, what does the chat.history attribute contain?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the user's messages", "Only the model's responses", "All messages from both user and model with their roles", "A summary of the conversation"),
                                "All messages from both user and model with their roles",
                                "obj_gemini_fundamentals")
                );

test.AddQuestion( new Question ("gemini_fund_11",
                                "What should you check before using a response from the Gemini API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the response text", "The prompt_feedback for block_reason to see if content was blocked", "The model version used", "The timestamp of the response"),
                                "The prompt_feedback for block_reason to see if content was blocked",
                                "obj_gemini_fundamentals")
                );

test.AddQuestion( new Question ("gemini_fund_12",
                                "Approximately how many words can fit in a 1 million token context window?",
                                QUESTION_TYPE_CHOICE,
                                new Array("100,000 words", "750,000 words", "1,500,000 words", "2,000,000 words"),
                                "750,000 words",
                                "obj_gemini_fundamentals")
                );
