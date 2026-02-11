test.AddQuestion( new Question ("com.scorm.gemini.enterprise.grounding_1",
                                "What is the primary benefit of enterprise data grounding compared to Google Search grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower latency", "Access to proprietary organizational data while maintaining privacy", "Better accuracy for all queries", "Lower cost"),
                                "Access to proprietary organizational data while maintaining privacy",
                                "obj_enterprise_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.enterprise.grounding_2",
                                "Which Google Cloud service is used for indexing enterprise data for grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cloud Storage", "Vertex AI Search", "BigQuery", "Cloud SQL"),
                                "Vertex AI Search",
                                "obj_enterprise_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.enterprise.grounding_3",
                                "Which file formats are supported by Cloud Storage as a data source for Vertex AI Search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only PDF files", "PDF, HTML, TXT, DOCX, PPTX, CSV", "Only text-based formats", "All multimedia formats"),
                                "PDF, HTML, TXT, DOCX, PPTX, CSV",
                                "obj_enterprise_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.enterprise.grounding_4",
                                "In a hybrid grounding strategy, what is the recommended approach for internal policy queries?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use Google Search only", "Use enterprise data first, Google Search as fallback", "Use both simultaneously", "Alternate between sources"),
                                "Use enterprise data first, Google Search as fallback",
                                "obj_enterprise_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.enterprise.grounding_5",
                                "What mechanism does Vertex AI Search use to protect sensitive documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encryption only", "Document-level access controls and IAM integration", "Password protection", "IP whitelisting"),
                                "Document-level access controls and IAM integration",
                                "obj_enterprise_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.enterprise.grounding_6",
                                "What should be implemented to optimize performance for frequently asked internal questions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Disable grounding", "Response caching with appropriate TTL", "Use smaller models", "Reduce data store size"),
                                "Response caching with appropriate TTL",
                                "obj_enterprise_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.enterprise.grounding_7",
                                "Which metric indicates that a production grounding system needs investigation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cache hit rate above 60%", "Grounding success rate below 95%", "Average latency of 300ms", "10 queries per minute"),
                                "Grounding success rate below 95%",
                                "obj_enterprise_grounding")
                );

test.AddQuestion( new Question ("com.scorm.gemini.enterprise.grounding_8",
                                "What is the purpose of metadata filtering in enterprise grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce storage costs", "To pre-filter documents by department, date, or category for improved relevance", "To encrypt data", "To compress responses"),
                                "To pre-filter documents by department, date, or category for improved relevance",
                                "obj_enterprise_grounding")
                );
