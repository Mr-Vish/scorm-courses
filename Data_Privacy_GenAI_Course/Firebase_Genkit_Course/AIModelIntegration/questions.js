test.AddQuestion( new Question ("ai_model_1",
                                "Which parameter controls the randomness of AI model outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("topP", "temperature", "maxTokens", "frequency"),
                                "temperature",
                                "obj_ai_model_integration")
                );

test.AddQuestion( new Question ("ai_model_2",
                                "What is the recommended temperature value for factual, consistent outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("2.0", "1.5", "0.7", "0.0"),
                                "0.0",
                                "obj_ai_model_integration")
                );

test.AddQuestion( new Question ("ai_model_3",
                                "Prompts in Genkit can include input/output schemas for validation",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_ai_model_integration")
                );

test.AddQuestion( new Question ("ai_model_4",
                                "What is the purpose of few-shot learning in prompt engineering?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To provide examples that guide the AI's output format", "To reduce API costs", "To limit the number of API calls", "To encrypt the prompts"),
                                "To provide examples that guide the AI's output format",
                                "obj_ai_model_integration")
                );

test.AddQuestion( new Question ("ai_model_5",
                                "Which AI provider is best suited for running models locally for privacy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenAI", "Anthropic", "Ollama", "Google AI"),
                                "Ollama",
                                "obj_ai_model_integration")
                );

test.AddQuestion( new Question ("ai_model_6",
                                "What is the main benefit of using multiple AI providers in a single application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced costs only", "Faster response times", "Simpler code structure", "Flexibility to switch models and implement fallbacks"),
                                "Flexibility to switch models and implement fallbacks",
                                "obj_ai_model_integration")
                );

test.AddQuestion( new Question ("ai_model_7",
                                "Context window management is unnecessary when using modern AI models",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_ai_model_integration")
                );

test.AddQuestion( new Question ("ai_model_8",
                                "What is the purpose of tools in Genkit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To debug flows", "To enable AI models to interact with external systems and APIs", "To manage user sessions", "To optimize token usage"),
                                "To enable AI models to interact with external systems and APIs",
                                "obj_ai_model_integration")
                );
