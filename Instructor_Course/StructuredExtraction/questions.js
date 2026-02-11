test.AddQuestion( new Question ("q1_se",
                                "What library does Instructor use internally for data validation and type checking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Dataclasses", "Pydantic", "Attrs", "Marshmallow"),
                                "Pydantic",
                                "obj_structured_extraction")
                );

test.AddQuestion( new Question ("q2_se",
                                "What happens when an LLM response fails Pydantic validation in Instructor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The program terminates", "A default value is used", "The error is sent back to the LLM for correction", "The validation is skipped"),
                                "The error is sent back to the LLM for correction",
                                "obj_structured_extraction")
                );

test.AddQuestion( new Question ("q3_se",
                                "Which Pydantic constraint ensures a field value is greater than a specified number?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Field(min=value)", "Field(gt=value)", "Field(greater=value)", "Field(above=value)"),
                                "Field(gt=value)",
                                "obj_structured_extraction")
                );

test.AddQuestion( new Question ("q4_se",
                                "What Instructor method enables streaming of partial structured results?",
                                QUESTION_TYPE_CHOICE,
                                new Array("stream_create()", "create_partial()", "partial_stream()", "stream_response()"),
                                "create_partial()",
                                "obj_structured_extraction")
                );

test.AddQuestion( new Question ("q5_se",
                                "How do you configure Instructor to work with an OpenAI client?",
                                QUESTION_TYPE_CHOICE,
                                new Array("instructor.patch(OpenAI())", "instructor.from_openai(OpenAI())", "instructor.wrap(OpenAI())", "instructor.init(OpenAI())"),
                                "instructor.from_openai(OpenAI())",
                                "obj_structured_extraction")
                );