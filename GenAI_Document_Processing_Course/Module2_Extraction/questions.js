test.AddQuestion( new Question ("com.scorm.genai.docproc.mod2_1",
                                "What is the target extraction accuracy for structured fields in production systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("85-90%", "90-93%", "95-98%", "99-100%"),
                                "95-98%",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod2_2",
                                "Which validation rule type checks if a vendor exists in the master data system?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Format Validation", "Range Validation", "Cross-Reference", "Business Rules"),
                                "Business Rules",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod2_3",
                                "At what confidence level should documents receive quick verification of flagged fields only?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Above 70%", "85-95%", "Above 95%", "Below 70%"),
                                "85-95%",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod2_4",
                                "What is the target auto-approval rate for a well-performing IDP system?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 50%", "Greater than 60%", "Greater than 70%", "Greater than 80%"),
                                "Greater than 70%",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod2_5",
                                "What is the target review time per document for human reviewers?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1 minute", "Less than 2 minutes", "Less than 5 minutes", "Less than 10 minutes"),
                                "Less than 2 minutes",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod2_6",
                                "Which document format should be processed directly without conversion for best results?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("DOCX", "PDF", "JPG", "TXT"),
                                "PDF",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod2_7",
                                "What is the recommended minimum image resolution for document processing?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("150 DPI", "200 DPI", "300 DPI", "600 DPI"),
                                "300 DPI",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod2_8",
                                "What is the typical throughput for batch document processing?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("100-500 documents/hour", "500-1000 documents/hour", "1000-5000 documents/hour", "5000-10000 documents/hour"),
                                "1000-5000 documents/hour",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod2_9",
                                "Structured output with tool/function calling ensures consistent JSON output from GenAI models",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.mod2_10",
                                "What is the target monthly improvement rate in auto-approval through feedback loops?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1%", "2%", "5%", "10%"),
                                "2%",
                                "obj_module_2")
                );
