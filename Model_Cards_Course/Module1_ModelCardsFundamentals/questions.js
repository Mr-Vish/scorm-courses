test.AddQuestion( new Question ("modelcards.module1.q1",
                                "What was the primary motivation for introducing model cards in 2019?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase model performance", "To address the lack of consistent, accessible documentation about AI model capabilities and limitations", "To reduce training costs", "To improve model accuracy"),
                                "To address the lack of consistent, accessible documentation about AI model capabilities and limitations",
                                "obj_module1")
                );

test.AddQuestion( new Question ("modelcards.module1.q2",
                                "Which of the following is NOT one of the eight core sections of a standard model card?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model Details", "Marketing Strategy", "Ethical Considerations", "Limitations"),
                                "Marketing Strategy",
                                "obj_module1")
                );

test.AddQuestion( new Question ("modelcards.module1.q3",
                                "Model cards should be treated as living documents that are updated regularly",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1")
                );

test.AddQuestion( new Question ("modelcards.module1.q4",
                                "In the 'Intended Use' section of a model card, what is the purpose of documenting 'Out-of-Scope Uses'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase the document length", "To prevent misuse and set appropriate expectations about what the model should NOT be used for", "To showcase the model's versatility", "To satisfy legal requirements only"),
                                "To prevent misuse and set appropriate expectations about what the model should NOT be used for",
                                "obj_module1")
                );

test.AddQuestion( new Question ("modelcards.module1.q5",
                                "Which regulatory framework requires high-risk AI systems to provide detailed technical documentation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GDPR", "EU AI Act", "HIPAA", "SOX"),
                                "EU AI Act",
                                "obj_module1")
                );

test.AddQuestion( new Question ("modelcards.module1.q6",
                                "What is the recommended approach when writing model card content for diverse audiences?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use highly technical language throughout", "Write for your least technical stakeholder while maintaining accuracy", "Create separate documents for each audience", "Focus only on developers"),
                                "Write for your least technical stakeholder while maintaining accuracy",
                                "obj_module1")
                );

test.AddQuestion( new Question ("modelcards.module1.q7",
                                "According to best practices, which statement about documenting model limitations is correct?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Limitations should be minimized or hidden to maintain confidence", "Only technical limitations need to be documented", "Limitations should be documented honestly with specific, quantitative details", "Limitations are optional if the model performs well"),
                                "Limitations should be documented honestly with specific, quantitative details",
                                "obj_module1")
                );

test.AddQuestion( new Question ("modelcards.module1.q8",
                                "Which organization requires model cards for all models published on their platform?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GitHub", "Hugging Face", "Stack Overflow", "LinkedIn"),
                                "Hugging Face",
                                "obj_module1")
                );
