// Final Comprehensive Assessment
// Covers all 4 modules with unique, non-duplicate questions

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q1",
                                "What percentage of internet users globally are NOT English speakers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("25%", "50%", "75%", "90%"),
                                "75%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q2",
                                "Which component of a translation pipeline is responsible for extracting translatable text while preserving non-translatable elements?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Context Assembly", "Content Ingestion and Preprocessing", "Quality Assurance Layer", "Output Generation"),
                                "Content Ingestion and Preprocessing",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q3",
                                "In Hofstede's cultural dimensions, what do high uncertainty avoidance cultures prefer?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ambiguity and flexibility", "Structure, rules, and clear guidelines", "Informal communication", "Risk-taking behavior"),
                                "Structure, rules, and clear guidelines",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q4",
                                "What is the main advantage of asynchronous translation pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fastest processing time", "Ability to perform comprehensive QA and human review", "Lowest cost", "Simplest implementation"),
                                "Ability to perform comprehensive QA and human review",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q5",
                                "Which quality assurance layer should run first after translation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Back-translation validation", "Format and structure validation", "Cultural appropriateness review", "Fluency scoring"),
                                "Format and structure validation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q6",
                                "What is the typical cost per word for AI translation using GPT-4?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$0.10-$0.30", "$0.05-$0.15", "$0.01-$0.03", "$0.50-$1.00"),
                                "$0.01-$0.03",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q7",
                                "What does the 'i18n' abbreviation stand for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Internet 18 Nations", "Internationalization (18 letters between i and n)", "International 18 Networks", "Integration 18 Nodes"),
                                "Internationalization (18 letters between i and n)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q8",
                                "In few-shot learning for translation, how many example translations are typically provided?",
                                QUESTION_TYPE_CHOICE,
                                new Array("0-1", "2-5", "10-20", "50-100"),
                                "2-5",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q9",
                                "What is the primary purpose of glossary compliance checking in QA?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce translation time", "To verify that required terms are translated according to approved glossary", "To eliminate human review", "To increase translation costs"),
                                "To verify that required terms are translated according to approved glossary",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q10",
                                "Which translation method should be used for marketing slogans requiring creative adaptation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Traditional MT only", "AI + Human transcreation", "No translation needed", "Automated translation without review"),
                                "AI + Human transcreation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q11",
                                "What is a key characteristic of low-context cultures?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Communication relies on implicit understanding", "Communication is explicit, direct, and literal", "Prefer indirect communication", "Rely heavily on non-verbal cues"),
                                "Communication is explicit, direct, and literal",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q12",
                                "In continuous localization, what principle emphasizes translating changes rather than entire documents repeatedly?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Automation", "Incremental", "Parallel", "Transparent"),
                                "Incremental",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q13",
                                "What is the main limitation of traditional NMT systems regarding context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too expensive", "They are limited to single sentences or short paragraphs (up to 512 tokens)", "They only work with English", "They require constant internet connection"),
                                "They are limited to single sentences or short paragraphs (up to 512 tokens)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q14",
                                "What does a quality score of 90-100 indicate in translation QA?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Poor quality - retranslate", "Acceptable - review required", "Good - minor review recommended", "Excellent - publish without review"),
                                "Excellent - publish without review",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q15",
                                "Which organizational model for localization combines consistency with speed and context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fully centralized", "Fully distributed", "Hybrid model", "Outsourced model"),
                                "Hybrid model",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q16",
                                "What is the primary benefit of dynamic glossary selection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduces translation quality", "Allows large glossaries while staying within token limits", "Eliminates need for glossaries", "Increases translation costs"),
                                "Allows large glossaries while staying within token limits",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q17",
                                "In which era of localization did Neural Machine Translation emerge?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Era 1: Manual Translation (1990s-early 2000s)", "Era 2: Translation Memory Systems (2000s-2010s)", "Era 3: Statistical and Neural MT (2010s-2020)", "Era 4: Large Language Models (2020-Present)"),
                                "Era 3: Statistical and Neural MT (2010s-2020)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q18",
                                "What is the recommended approach when AI translation quality scores below 50?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Publish immediately", "Minor review only", "Retranslate or conduct extensive review", "Ignore and proceed"),
                                "Retranslate or conduct extensive review",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q19",
                                "What is the main advantage of LLMs over traditional MT for translation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower cost", "Faster speed", "Better context understanding across entire documents", "Simpler implementation"),
                                "Better context understanding across entire documents",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q20",
                                "Which type of content is ideal for AI translation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Legal contracts", "Medical patient information", "High-volume documentation with medium complexity", "Creative literary works"),
                                "High-volume documentation with medium complexity",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q21",
                                "What is the purpose of back-translation in quality assurance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To create bilingual dictionaries", "To translate back to source language and verify meaning preservation", "To train new translators", "To reduce costs"),
                                "To translate back to source language and verify meaning preservation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q22",
                                "What is a critical error in translation QA that has the highest severity?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Minor grammatical error", "Awkward phrasing", "Missing translation or corrupted placeholder", "Inconsistent terminology"),
                                "Missing translation or corrupted placeholder",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q23",
                                "What is the main risk of relying solely on AI for high-stakes content?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's too expensive", "AI lacks true understanding and may generate plausible but incorrect translations", "It's too slow", "It only works in English"),
                                "AI lacks true understanding and may generate plausible but incorrect translations",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q24",
                                "What is the expected medium-term development (3-5 years) in AI translation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Complete elimination of all translation needs", "Quality parity with human translation for most content types", "AI becoming more expensive than human translation", "Return to manual translation methods"),
                                "Quality parity with human translation for most content types",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.final.q25",
                                "What is the most effective overall approach to modern localization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use only AI with no human involvement", "Use only human translation and avoid all AI", "Combine AI efficiency with human cultural expertise and judgment", "Outsource everything to the cheapest provider"),
                                "Combine AI efficiency with human cultural expertise and judgment",
                                "obj_final_assessment")
                );
