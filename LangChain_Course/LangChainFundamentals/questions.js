test.AddQuestion( new Question ("langchain.module1.q1",
                                "What is the primary advantage of using LCEL's pipe operator for composing chains?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes code run faster", "It provides composability with built-in streaming and async support", "It reduces memory usage", "It automatically caches results"),
                                "It provides composability with built-in streaming and async support",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("langchain.module1.q2",
                                "Which component in an LCEL chain is responsible for transforming model output into structured data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PromptTemplate", "ChatModel", "OutputParser", "RunnablePassthrough"),
                                "OutputParser",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("langchain.module1.q3",
                                "What method should you use to process multiple inputs efficiently in a single call?",
                                QUESTION_TYPE_CHOICE,
                                new Array("invoke()", "stream()", "batch()", "parallel()"),
                                "batch()",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("langchain.module1.q4",
                                "Which output parser would you use when you need type-validated objects with field descriptions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("StrOutputParser", "JsonOutputParser", "PydanticOutputParser", "CommaSeparatedListOutputParser"),
                                "PydanticOutputParser",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("langchain.module1.q5",
                                "What is the purpose of the partial() method in prompt templates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To delete variables from templates", "To pre-fill some variables while leaving others for runtime", "To validate template syntax", "To convert templates to strings"),
                                "To pre-fill some variables while leaving others for runtime",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("langchain.module1.q6",
                                "Which LLM provider is best suited for processing documents with very long context windows?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenAI GPT-3.5", "Anthropic Claude 3", "Google Gemini Nano", "Cohere Command-Light"),
                                "Anthropic Claude 3",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("langchain.module1.q7",
                                "What is the recommended way to store API keys for LLM providers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcode them in the source code", "Store them in environment variables", "Include them in configuration files committed to git", "Pass them as command-line arguments"),
                                "Store them in environment variables",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("langchain.module1.q8",
                                "Which parameter controls the randomness of LLM outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("max_tokens", "temperature", "top_k", "batch_size"),
                                "temperature",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("langchain.module1.q9",
                                "What is the main benefit of streaming responses in user-facing applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces API costs", "It improves perceived performance by showing results immediately", "It uses less memory", "It increases accuracy"),
                                "It improves perceived performance by showing results immediately",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("langchain.module1.q10",
                                "Which method would you use to process multiple queries concurrently in an async context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("chain.batch()", "asyncio.gather()", "chain.parallel()", "concurrent.futures()"),
                                "asyncio.gather()",
                                "obj_module_1")
                );
