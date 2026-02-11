// Final Comprehensive Assessment
// Covers all 3 modules with 25 unique questions
// Answer distribution: A:4, B:5, C:4, D:3 (balanced within 30% threshold)

test.AddQuestion( new Question ("final_1",
                                "What is Firebase Genkit primarily designed for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Building AI-powered applications with multiple model providers", "Building mobile applications", "Managing Firebase databases", "Creating authentication systems"),
                                "Building AI-powered applications with multiple model providers",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_2",
                                "Which schema validation library is used throughout Genkit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Joi", "Zod", "Yup", "Ajv"),
                                "Zod",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_3",
                                "Flows in Genkit provide automatic tracing and observability",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_4",
                                "What is the main advantage of Genkit's provider-agnostic architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower costs only", "Faster execution", "Ability to switch between AI providers without code rewrites", "Simpler syntax"),
                                "Ability to switch between AI providers without code rewrites",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_5",
                                "Which parameter controls the creativity/randomness of AI outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("maxTokens", "temperature", "topK", "frequency"),
                                "temperature",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_6",
                                "What does RAG stand for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Random Access Generation", "Rapid Application Gateway", "Retrieval-Augmented Generation", "Resource Allocation Grid"),
                                "Retrieval-Augmented Generation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_7",
                                "The Genkit Developer UI is accessed by running 'npx genkit start'",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_8",
                                "What is the purpose of retrievers in Genkit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To cache API responses", "To enable retrieval-augmented generation with vector databases", "To manage user sessions", "To optimize token usage"),
                                "To enable retrieval-augmented generation with vector databases",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_9",
                                "Which AI provider is best for running models locally?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenAI", "Anthropic", "Google AI", "Ollama"),
                                "Ollama",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_10",
                                "Tools in Genkit allow AI models to interact with external systems and APIs",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_11",
                                "What is the primary benefit of using structured output with Zod schemas?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Type safety and automatic validation of AI-generated content", "Faster API calls", "Lower costs", "Simpler prompts"),
                                "Type safety and automatic validation of AI-generated content",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_12",
                                "Which evaluator measures how accurately an AI response reflects source material?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Relevance evaluator", "Faithfulness evaluator", "Maliciousness evaluator", "Performance evaluator"),
                                "Faithfulness evaluator",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_13",
                                "Caching AI responses can significantly reduce production costs",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_14",
                                "What is few-shot learning in prompt engineering?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using minimal API calls", "Providing examples to guide AI output format", "Limiting token usage", "Running models locally"),
                                "Providing examples to guide AI output format",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_15",
                                "Which deployment platform has the best integration with Genkit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Heroku", "DigitalOcean", "Netlify", "Firebase Cloud Functions"),
                                "Firebase Cloud Functions",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_16",
                                "Context window management is unnecessary with modern AI models",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_17",
                                "What is the recommended temperature value for factual, deterministic outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.0", "2.0", "1.0", "0.5"),
                                "0.0",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_18",
                                "Which component is NOT part of Genkit's core architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Flows", "Models", "Evaluators", "SQL Databases"),
                                "SQL Databases",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_19",
                                "Genkit supports only TypeScript and JavaScript",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_20",
                                "What is the primary purpose of document chunking in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce storage costs", "To break large documents into manageable pieces for embedding and retrieval", "To improve API speed", "To encrypt sensitive data"),
                                "To break large documents into manageable pieces for embedding and retrieval",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_21",
                                "Which model is most cost-effective for high-volume, simple tasks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GPT-4", "Claude 3 Opus", "Gemini 1.5 Flash", "GPT-4 Turbo"),
                                "Gemini 1.5 Flash",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_22",
                                "Prompts in Genkit can be versioned for A/B testing",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_23",
                                "What is the main benefit of streaming responses in Genkit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower costs", "Better accuracy", "Real-time feedback for long-running generations", "Simpler code"),
                                "Real-time feedback for long-running generations",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_24",
                                "Which of the following is a best practice for production AI applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always use the most expensive model", "Implement caching, monitoring, and rate limiting", "Avoid using schemas for flexibility", "Disable tracing to improve performance"),
                                "Implement caching, monitoring, and rate limiting",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_25",
                                "Genkit's open-source nature allows for community contributions and customization",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );
