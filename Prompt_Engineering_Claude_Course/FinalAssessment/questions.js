test.AddQuestion( new Question ("q1",
                                "What is 'Prefilling' in the context of Claude's API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Filling the model's memory with random data", "Paying for API credits in advance", "Training the model on your dataset before use", "Starting Claude's response with a few words (like '{') to guide its output format"),
                                "Starting Claude's response with a few words (like '{') to guide its output format",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "How can 'Few-Shot' examples improve Claude's performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By reducing the number of tokens used", "By increasing the model's temperature", "By providing clear examples of input-output pairs to demonstrate the desired behavior", "By making Claude talk faster"),
                                "By providing clear examples of input-output pairs to demonstrate the desired behavior",
                                "obj_module_1")
                );
