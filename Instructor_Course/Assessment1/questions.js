test.AddQuestion( new Question ("q1_m1",
                                "What is the primary purpose of the Instructor library?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To train custom LLM models", "To patch LLM clients for validated structured data extraction", "To optimize LLM inference speed", "To manage LLM API keys"),
                                "To patch LLM clients for validated structured data extraction",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2_m1",
                                "Which Python library does Instructor use for data validation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Marshmallow", "Pydantic", "Cerberus", "Voluptuous"),
                                "Pydantic",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3_m1",
                                "When validation fails in Instructor, what happens by default?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The program crashes immediately", "The error is logged and ignored", "The validation error is sent back to the LLM for correction", "A default value is returned"),
                                "The validation error is sent back to the LLM for correction",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4_m1",
                                "Which Field parameter ensures a numeric value is greater than zero?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Field(min=0)", "Field(gt=0)", "Field(positive=True)", "Field(greater_than_zero=True)"),
                                "Field(gt=0)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5_m1",
                                "What is the correct way to install Instructor with OpenAI support?",
                                QUESTION_TYPE_CHOICE,
                                new Array("pip install instructor-openai", "pip install instructor openai", "pip install openai-instructor", "pip install instructor[openai]"),
                                "pip install instructor openai",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6_m1",
                                "Which parameter in Field() is used to provide guidance to the LLM about what a field represents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("hint", "description", "help_text", "guide"),
                                "description",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q7_m1",
                                "Instructor supports multiple LLM providers including OpenAI, Anthropic, and Google",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q8_m1",
                                "What decorator is used to add custom validation logic to a specific field in a Pydantic model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("@validator", "@field_validator", "@validate_field", "@custom_validator"),
                                "@field_validator",
                                "obj_module_1")
                );
