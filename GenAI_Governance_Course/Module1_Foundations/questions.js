test.AddQuestion( new Question ("com.scorm.genai.gov.mod1_1",
                                "Which framework provides a structured approach with four core functions: Govern, Map, Measure, and Manage?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("EU AI Act", "NIST AI RMF", "ISO/IEC 42001", "OECD AI Principles"),
                                "NIST AI RMF",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod1_2",
                                "What is the maximum penalty under the EU AI Act for prohibited AI uses?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("€15M or 3% revenue", "€20M or 4% revenue", "€35M or 7% revenue", "€50M or 10% revenue"),
                                "€35M or 7% revenue",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod1_3",
                                "Which risk tier in the acceptable use policy requires AI Governance Board approval?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Tier 1", "Tier 2", "Tier 3", "All tiers"),
                                "Tier 3",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod1_4",
                                "According to the data handling policy, which data type is prohibited in all AI systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Public information", "Internal documents", "Customer PII", "Trade secrets"),
                                "Trade secrets",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod1_5",
                                "What is the minimum accuracy threshold required in the deployment checklist?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("90%", "92%", "95%", "98%"),
                                "95%",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod1_6",
                                "In the RACI matrix, who is Accountable for setting governance policy?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AI Ethics Lead", "AI Board", "Risk Manager", "Model Owner"),
                                "AI Board",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod1_7",
                                "Which role is responsible for conducting bias audits on models and data?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Data Steward", "AI Risk Manager", "AI Ethics Lead", "Model Owner"),
                                "AI Ethics Lead",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod1_8",
                                "What is the recommended frequency for reviewing and updating the acceptable use policy?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Monthly", "Quarterly", "Semi-annually", "Annually"),
                                "Quarterly",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod1_9",
                                "Which governance maturity level is characterized by comprehensive policies, clear roles, and regular reviews?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Level 1: Ad Hoc", "Level 2: Developing", "Level 3: Defined", "Level 5: Optimizing"),
                                "Level 3: Defined",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.genai.gov.mod1_10",
                                "ISO/IEC 42001 is an international standard specifically for AI management systems",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_1")
                );
