// Final Comprehensive Assessment - 25 Questions
// Covers all modules: Fundamentals, Extraction, Production, and Pros/Cons

// Module 1: Fundamentals (7 questions)
test.AddQuestion( new Question ("com.scorm.genai.docproc.final_1",
                                "Which IDP pipeline stage involves determining the document type?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Ingestion", "Classification", "Extraction", "Validation"),
                                "Classification",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_2",
                                "What is the typical processing time for documents in a synchronous architecture?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Milliseconds", "2-10 seconds", "Minutes", "Hours"),
                                "2-10 seconds",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_3",
                                "Which document processing generation understands context and meaning?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Generation 1 - Template-Based OCR", "Generation 2 - Machine Learning OCR", "Generation 3 - GenAI", "All generations"),
                                "Generation 3 - GenAI",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_4",
                                "What is the typical maintenance time reduction with GenAI vs traditional OCR?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("20-30 hours/month", "10-20 hours/month", "5-10 hours/month", "1-5 hours/month"),
                                "20-30 hours/month",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_5",
                                "Which classification approach is fastest?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Rule-Based", "Fine-Tuned Classifier", "Vision Model GenAI", "Hybrid"),
                                "Rule-Based",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_6",
                                "What is the target manual override rate for document classification?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 2%", "Less than 5%", "Less than 10%", "Less than 15%"),
                                "Less than 5%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_7",
                                "For documents with 10-20 pages, which processing strategy is recommended?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Single API call", "Page-by-page", "Chunked processing", "Manual processing"),
                                "Chunked processing",
                                "obj_final_assessment")
                );

// Module 2: Extraction (7 questions)
test.AddQuestion( new Question ("com.scorm.genai.docproc.final_8",
                                "What ensures consistent JSON output from GenAI models?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Prompt engineering only", "Structured output with tool/function calling", "Post-processing scripts", "Manual formatting"),
                                "Structured output with tool/function calling",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_9",
                                "Which validation rule type verifies that line items sum equals the total amount?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Format Validation", "Range Validation", "Cross-Reference", "Completeness"),
                                "Cross-Reference",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_10",
                                "What percentage of documents should receive random spot-checking when confidence is above 95%?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1%", "5%", "10%", "20%"),
                                "5%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_11",
                                "What is the target false positive rate for auto-approved documents?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 1%", "Less than 2%", "Less than 5%", "Less than 10%"),
                                "Less than 2%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_12",
                                "Which document format should be processed directly without conversion?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("DOCX", "PDF", "TXT", "HTML"),
                                "PDF",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_13",
                                "What is the recommended batch size for optimal processing?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("5-10 documents", "10-50 documents", "50-100 documents", "100-500 documents"),
                                "10-50 documents",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_14",
                                "How many retry attempts should be made for malformed output errors?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("0 - No retry", "1 retry", "2 retries", "3 retries"),
                                "1 retry",
                                "obj_final_assessment")
                );

// Module 3: Production (7 questions)
test.AddQuestion( new Question ("com.scorm.genai.docproc.final_15",
                                "Which regulatory framework requires Business Associate Agreements for PHI?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("GDPR", "HIPAA", "SOX", "PCI-DSS"),
                                "HIPAA",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_16",
                                "What is the recommended TLS version for data in transit?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("TLS 1.0", "TLS 1.1", "TLS 1.2", "TLS 1.3"),
                                "TLS 1.3",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_17",
                                "What is the target throughput for production document processing?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("100-500 docs/hour", "500-1000 docs/hour", "Greater than 1000 docs/hour", "Greater than 5000 docs/hour"),
                                "Greater than 1000 docs/hour",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_18",
                                "What is the Recovery Point Objective (RPO) for production systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Less than 5 minutes", "Less than 15 minutes", "Less than 1 hour", "Less than 4 hours"),
                                "Less than 15 minutes",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_19",
                                "How often should disaster recovery drills be conducted?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Monthly", "Quarterly", "Semi-annually", "Annually"),
                                "Quarterly",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_20",
                                "What is the recommended cooldown period for auto-scaling?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1 minute", "5 minutes", "10 minutes", "15 minutes"),
                                "5 minutes",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_21",
                                "Which deployment pattern uses blue-green and canary releases?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Manual deployment", "CI/CD pipeline", "Direct production push", "Hotfix deployment"),
                                "CI/CD pipeline",
                                "obj_final_assessment")
                );

// Pros/Cons and Practical Application (4 questions)
test.AddQuestion( new Question ("com.scorm.genai.docproc.final_22",
                                "What is the typical setup time reduction with GenAI vs traditional OCR?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("50-60%", "70-80%", "80-90%", "95-100%"),
                                "80-90%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_23",
                                "What is the residual error risk even with mitigation strategies?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("0-1%", "1-3%", "3-5%", "5-10%"),
                                "1-3%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_24",
                                "In a hybrid approach, what percentage of documents typically use traditional OCR?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("40%", "50%", "60%", "80%"),
                                "60%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.genai.docproc.final_25",
                                "What is the break-even volume for GenAI vs traditional OCR?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Greater than 10K docs/year", "Greater than 20K docs/year", "Greater than 50K docs/year", "Greater than 100K docs/year"),
                                "Greater than 50K docs/year",
                                "obj_final_assessment")
                );
