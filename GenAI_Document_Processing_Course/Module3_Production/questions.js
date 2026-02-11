test.AddQuestion( new Question ("com.scorm.genai.docproc.mod3_1",
                                "What encryption standard should be used for documents at rest?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AES-128", "AES-256", "DES", "3DES"),
                                "AES-256",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod3_2",
                                "What is the minimum retention period for financial documents under SOX?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("3 years", "5 years", "7 years", "10 years"),
                                "7 years",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod3_3",
                                "What cost savings can be achieved using a tiered model strategy?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("20-30%", "30-40%", "47%", "60-70%"),
                                "47%",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod3_4",
                                "What is the target P95 processing time for production systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 5 seconds", "Less than 10 seconds", "Less than 15 seconds", "Less than 20 seconds"),
                                "Less than 10 seconds",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod3_5",
                                "What is the target error rate for document processing systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1%", "Less than 2%", "Less than 5%", "Less than 10%"),
                                "Less than 2%",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod3_6",
                                "What is the Recovery Time Objective (RTO) for production IDP systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 15 minutes", "Less than 1 hour", "Less than 4 hours", "Less than 24 hours"),
                                "Less than 1 hour",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod3_7",
                                "How many retry attempts should be made for API timeouts?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1", "2", "3", "5"),
                                "3",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod3_8",
                                "What is the recommended deprecation notice period before removing old API versions?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1 month", "3 months", "6 months", "12 months"),
                                "6 months",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod3_9",
                                "Batch API processing can reduce costs by 50% compared to individual API calls",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod3_10",
                                "What is the target API success rate for production systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 95%", "Greater than 97%", "Greater than 99%", "100%"),
                                "Greater than 99%",
                                "obj_module_3")
                );
