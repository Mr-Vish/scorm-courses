test.AddQuestion( new Question ("com.scorm.notebooklm.module1.q1",
                                "What does the 'LM' in NotebookLM stand for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Learning Module", "Language Model", "Link Manager", "Literature Map"),
                                "Language Model",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.module1.q2",
                                "What is the maximum number of sources you can upload per notebook in NotebookLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("25 sources", "50 sources", "100 sources", "Unlimited sources"),
                                "50 sources",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.module1.q3",
                                "Which Google AI model powers NotebookLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PaLM", "Gemini", "BERT", "LaMDA"),
                                "Gemini",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.module1.q4",
                                "What is the maximum word limit per source in NotebookLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("100,000 words", "250,000 words", "500,000 words", "1,000,000 words"),
                                "500,000 words",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.module1.q5",
                                "Which source type maintains a live connection and can be refreshed to reflect updates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PDF files", "Google Docs", "Web URLs", "Text files"),
                                "Google Docs",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.module1.q6",
                                "What technology does NotebookLM use to combine document retrieval with AI generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retrieval-Augmented Generation (RAG)", "Transfer Learning", "Reinforcement Learning", "Supervised Fine-tuning"),
                                "Retrieval-Augmented Generation (RAG)",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.module1.q7",
                                "What happens when you ask NotebookLM a question that cannot be answered from your uploaded sources?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It searches the internet for answers", "It acknowledges it doesn't have that information in your sources", "It makes an educated guess", "It refuses to respond"),
                                "It acknowledges it doesn't have that information in your sources",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.module1.q8",
                                "Which of the following is NOT a benefit of source grounding in NotebookLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improved accuracy based on your documents", "Automatic fact-checking against external sources", "Reduced AI hallucinations", "Verifiable citations"),
                                "Automatic fact-checking against external sources",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.module1.q9",
                                "What does clicking on a citation in NotebookLM allow you to do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Edit the source document", "View the exact passage from the source", "Share the citation with others", "Delete the citation"),
                                "View the exact passage from the source",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.module1.q10",
                                "Which source type requires available captions or transcripts to be processed by NotebookLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PDF files", "Google Slides", "YouTube videos", "Text files"),
                                "YouTube videos",
                                "obj_module1")
                );
