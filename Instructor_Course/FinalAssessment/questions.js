// Final Comprehensive Assessment - 25 Unique Questions
// Covers all modules: Structured Extraction Fundamentals, Advanced Patterns, Production Considerations

// Structured Extraction Fundamentals (8 questions)
test.AddQuestion( new Question ("final_q1",
                                "Which component is responsible for automatic validation in Instructor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenAI API", "Pydantic models", "Python type hints", "JSON schema"),
                                "Pydantic models",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q2",
                                "What is the default value of max_retries in Instructor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0", "1", "3", "5"),
                                "1",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q3",
                                "Which function is used to patch an Anthropic Claude client?",
                                QUESTION_TYPE_CHOICE,
                                new Array("instructor.from_claude()", "instructor.from_anthropic()", "instructor.patch_claude()", "instructor.anthropic_client()"),
                                "instructor.from_anthropic()",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q4",
                                "What does the @field_validator decorator do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Validates the entire model", "Adds custom validation logic to specific fields", "Generates field descriptions", "Enables streaming"),
                                "Adds custom validation logic to specific fields",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q5",
                                "In Instructor, what parameter specifies the expected output schema?",
                                QUESTION_TYPE_CHOICE,
                                new Array("output_model", "response_model", "schema", "result_type"),
                                "response_model",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q6",
                                "Which Field parameter validates that a string matches a specific pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("regex", "pattern", "match", "format"),
                                "pattern",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q7",
                                "Instructor can work with multiple LLM providers using a unified API",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q8",
                                "What is the main benefit of using Field(description=...) in Pydantic models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improves performance", "Guides the LLM on what each field represents", "Enables caching", "Reduces token usage"),
                                "Guides the LLM on what each field represents",
                                "obj_final_assessment")
                );

// Advanced Patterns (9 questions)
test.AddQuestion( new Question ("final_q9",
                                "What Python feature enables concurrent extraction operations in Instructor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Threading", "Multiprocessing", "Async/await", "Generators"),
                                "Async/await",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q10",
                                "Which method allows extracting a list of objects from a single prompt?",
                                QUESTION_TYPE_CHOICE,
                                new Array("create_list()", "create_iterable()", "extract_multiple()", "batch_create()"),
                                "create_iterable()",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q11",
                                "What is the purpose of exponential backoff in retry logic?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "To gradually increase wait time between retries", "To improve accuracy", "To enable caching"),
                                "To gradually increase wait time between retries",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q12",
                                "In Pydantic, how do you create a field that can be None?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use Optional[Type]", "Use Nullable[Type]", "Use Maybe[Type]", "Use Type | Empty"),
                                "Use Optional[Type]",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q13",
                                "What decorator validates relationships between multiple fields?",
                                QUESTION_TYPE_CHOICE,
                                new Array("@field_validator", "@model_validator", "@cross_validator", "@relationship_validator"),
                                "@model_validator",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q14",
                                "Which Pydantic type restricts a field to specific string values?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Enum", "Literal", "Choice", "Options"),
                                "Literal",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q15",
                                "Recursive Pydantic models allow a model to reference itself",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q16",
                                "What is the recommended approach for handling rate limits in batch processing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore them", "Use Semaphore to control concurrency", "Increase timeout", "Disable retries"),
                                "Use Semaphore to control concurrency",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q17",
                                "What is the maximum recommended nesting depth for complex schemas?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1-2 levels", "3-4 levels", "5-6 levels", "No limit"),
                                "3-4 levels",
                                "obj_final_assessment")
                );

// Production Considerations (8 questions)
test.AddQuestion( new Question ("final_q18",
                                "What is a key disadvantage of using Instructor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Limited validation options", "Retries increase token consumption and latency", "Only works with OpenAI", "Requires manual parsing"),
                                "Retries increase token consumption and latency",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q19",
                                "When should you NOT use Instructor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For structured data extraction", "For simple unstructured text generation", "For form filling", "For document intelligence"),
                                "For simple unstructured text generation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q20",
                                "Which pattern prevents system overload when the API is failing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retry pattern", "Circuit breaker pattern", "Singleton pattern", "Factory pattern"),
                                "Circuit breaker pattern",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q21",
                                "What is the most cost-effective model for simple 1-5 field extractions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GPT-4o", "GPT-3.5-turbo", "GPT-4 Turbo", "Claude Opus"),
                                "GPT-3.5-turbo",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q22",
                                "What security measure is critical when processing sensitive data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using larger models", "Redacting PII before API calls", "Increasing retries", "Disabling validation"),
                                "Redacting PII before API calls",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q23",
                                "Caching extraction results can reduce API costs for repeated inputs",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q24",
                                "Which metric indicates overall system health in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Total token count", "Extraction success rate", "API call count", "Average retry count"),
                                "Extraction success rate",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q25",
                                "What is the primary use case for the Maybe pattern in Instructor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve performance", "To handle uncertain extractions and prevent hallucinations", "To reduce costs", "To enable streaming"),
                                "To handle uncertain extractions and prevent hallucinations",
                                "obj_final_assessment")
                );