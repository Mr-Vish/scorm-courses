test.AddQuestion( new Question ("genkit_fund_1",
                                "What is the primary purpose of flows in Firebase Genkit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To orchestrate AI operations with type-safe, observable functions", "To store data in Firebase", "To manage user authentication", "To handle HTTP requests"),
                                "To orchestrate AI operations with type-safe, observable functions",
                                "obj_genkit_fundamentals")
                );

test.AddQuestion( new Question ("genkit_fund_2",
                                "Which library does Genkit use for schema validation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Joi", "Yup", "Ajv", "Zod"),
                                "Zod",
                                "obj_genkit_fundamentals")
                );

test.AddQuestion( new Question ("genkit_fund_3",
                                "Flows in Genkit automatically provide tracing and logging capabilities",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_genkit_fundamentals")
                );

test.AddQuestion( new Question ("genkit_fund_4",
                                "What command starts the Genkit Developer UI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("npm start genkit", "genkit ui", "npx genkit start", "firebase serve"),
                                "npx genkit start",
                                "obj_genkit_fundamentals")
                );

test.AddQuestion( new Question ("genkit_fund_5",
                                "Which of the following is NOT a core component of Genkit architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Flows", "Models", "Retrievers", "Databases"),
                                "Databases",
                                "obj_genkit_fundamentals")
                );

test.AddQuestion( new Question ("genkit_fund_6",
                                "What is the purpose of the outputSchema in a flow definition?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To validate and type the output structure", "To define the database schema", "To configure the AI model", "To set up authentication"),
                                "To validate and type the output structure",
                                "obj_genkit_fundamentals")
                );

test.AddQuestion( new Question ("genkit_fund_7",
                                "Genkit supports only Google's Gemini models",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_genkit_fundamentals")
                );

test.AddQuestion( new Question ("genkit_fund_8",
                                "In a Zod schema, what does z.string().min(5).max(100) enforce?",
                                QUESTION_TYPE_CHOICE,
                                new Array("String must be exactly 5 or 100 characters", "String length must be between 5 and 100 characters", "String must contain 5 to 100 words", "String must have 5 to 100 lines"),
                                "String length must be between 5 and 100 characters",
                                "obj_genkit_fundamentals")
                );
