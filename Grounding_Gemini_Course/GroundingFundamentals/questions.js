test.AddQuestion( new Question ("com.scorm.gemini.grounding.fundamentals_1",
                                "What is the primary purpose of grounding in Large Language Models?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase model training speed", "To connect model responses to verifiable, external information sources", "To reduce model size", "To improve code generation capabilities"),
                                "To connect model responses to verifiable, external information sources",
                                "obj_grounding_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gemini.grounding.fundamentals_2",
                                "Which problem does grounding primarily address?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Slow inference speed", "High computational costs", "Hallucinations and stale knowledge", "Limited context windows"),
                                "Hallucinations and stale knowledge",
                                "obj_grounding_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gemini.grounding.fundamentals_3",
                                "What does a grounding score of 0.85 indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The response is 85% accurate", "The response is strongly supported by retrieved sources", "85% of sources were used", "The model is 85% confident"),
                                "The response is strongly supported by retrieved sources",
                                "obj_grounding_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gemini.grounding.fundamentals_4",
                                "According to the course, what is the recommended minimum grounding score for production systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0.5", "0.7", "0.9", "1.0"),
                                "0.7",
                                "obj_grounding_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gemini.grounding.fundamentals_5",
                                "Which of the following queries does NOT require grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Current stock prices", "Creative fiction writing", "Latest product specifications", "Recent news events"),
                                "Creative fiction writing",
                                "obj_grounding_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gemini.grounding.fundamentals_6",
                                "What information is included in grounding metadata?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model training data", "Source URLs and grounding scores", "User authentication tokens", "API rate limits"),
                                "Source URLs and grounding scores",
                                "obj_grounding_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gemini.grounding.fundamentals_7",
                                "What should a production system do when a grounding score falls below the minimum threshold?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Return the response anyway", "Reject the response and provide feedback", "Increase the model temperature", "Disable grounding"),
                                "Reject the response and provide feedback",
                                "obj_grounding_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gemini.grounding.fundamentals_8",
                                "Which metric measures the time taken to fetch grounding information?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Grounding score", "Source count", "Retrieval latency", "Citation coverage"),
                                "Retrieval latency",
                                "obj_grounding_fundamentals")
                );
