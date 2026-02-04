test.AddQuestion( new Question ("q1",
                                "Which section of a Model Card would typically contain information about the demographic groups used in training?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Quantitative Analyses", "Training Data / Factors", "Environmental Impact", "Model Architecture"),
                                "Training Data / Factors",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "Why is it important to include 'Out-of-Scope Use Cases' in a Model Card?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To warn users about contexts where the model is likely to perform poorly or cause harm", "To show off the model's capabilities", "To list the developer's favorite movies", "To increase the length of the document"),
                                "To warn users about contexts where the model is likely to perform poorly or cause harm",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "Which section describes the intended users and use cases for the model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Dataset Profile", "Carbon Footprint", "Intended Use", "Technical Specifications"),
                                "Intended Use",
                                "obj_module_1")
                );
