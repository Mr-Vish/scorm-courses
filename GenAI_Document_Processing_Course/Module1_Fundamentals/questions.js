test.AddQuestion( new Question ("com.scorm.genai.docproc.mod1_1",
                                "How many stages are in the core IDP pipeline?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("4 stages", "5 stages", "6 stages", "7 stages"),
                                "6 stages",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod1_2",
                                "Which architecture pattern is best for processing fewer than 1,000 documents per day?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Single server, synchronous", "Queue-based, horizontal scaling", "Distributed workers, batch API", "Multi-region, parallel processing"),
                                "Single server, synchronous",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod1_3",
                                "What is the typical cost range per document for GenAI processing?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("$0.001 - $0.01", "$0.01 - $0.05", "$0.05 - $0.20", "$0.20 - $0.50"),
                                "$0.05 - $0.20",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod1_4",
                                "Which generation of document processing technology requires no templates?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Generation 1 - Template-Based OCR", "Generation 2 - Machine Learning OCR", "Generation 3 - GenAI", "All generations require templates"),
                                "Generation 3 - GenAI",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod1_5",
                                "What is the typical setup time for GenAI document processing?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Hours to days", "Days to weeks", "Weeks to months", "Months to years"),
                                "Hours to days",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod1_6",
                                "In a hybrid OCR/GenAI approach, what cost savings can be achieved compared to GenAI-only?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("10-20%", "20-30%", "40-60%", "70-80%"),
                                "40-60%",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod1_7",
                                "Which classification approach offers the highest accuracy?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Rule-Based (70-85%)", "Fine-Tuned Classifier (90-95%)", "Vision Model GenAI (95-99%)", "All have equal accuracy"),
                                "Vision Model GenAI (95-99%)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod1_8",
                                "At what confidence level should documents be auto-processed without additional validation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Above 70%", "Above 85%", "Above 95%", "Above 99%"),
                                "Above 95%",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod1_9",
                                "What is the target classification accuracy for production IDP systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 80%", "Greater than 90%", "Greater than 95%", "Greater than 99%"),
                                "Greater than 95%",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod1_10",
                                "GenAI can calculate due dates from payment terms like 'Net 30' while traditional OCR only extracts the text",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );
