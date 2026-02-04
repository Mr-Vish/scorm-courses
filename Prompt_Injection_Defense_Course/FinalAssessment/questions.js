test.AddQuestion( new Question ("q1",
                                "What is a 'Delimiting' technique used to defend against prompt injection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reversing the order of words in the prompt", "Encrypting the entire prompt", "Using clear separators like '###' or XML tags to distinguish between system instructions and user-provided data", "Deleting the user data"),
                                "Using clear separators like '###' or XML tags to distinguish between system instructions and user-provided data",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "What is the role of 'Output Filtering' in prompt injection defense?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Checking the model's generated response for leaked system secrets or malicious content before showing it to the user", "Filtering the air in the data center", "Reducing the number of words in the response", "Translating the response to another language"),
                                "Checking the model's generated response for leaked system secrets or malicious content before showing it to the user",
                                "obj_module_1")
                );
