test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q1",
                                "What is the primary difference between internationalization (i18n) and localization (l10n)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("i18n is translating text, l10n is adapting for culture", "i18n is designing for adaptability, l10n is the actual adaptation process", "i18n is for software, l10n is for content", "They are the same thing with different abbreviations"),
                                "i18n is designing for adaptability, l10n is the actual adaptation process",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q2",
                                "According to research cited in the course, what percentage of consumers prefer to buy products in their native language?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50%", "60%", "75%", "90%"),
                                "75%",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q3",
                                "Which era of localization introduced Translation Memory (TM) systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1990s-early 2000s (Manual Translation)", "2000s-2010s (Translation Memory Systems)", "2010s-2020 (Neural Machine Translation)", "2020-Present (Large Language Models)"),
                                "2000s-2010s (Translation Memory Systems)",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q4",
                                "What is a key limitation of Translation Memory (TM) systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too expensive for most organizations", "They operate at segment level and lack broader context", "They only support English and Spanish", "They require constant internet connectivity"),
                                "They operate at segment level and lack broader context",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q5",
                                "Traditional Neural Machine Translation (NMT) systems are trained on:",
                                QUESTION_TYPE_CHOICE,
                                new Array("General text in multiple languages", "Parallel corpora of sentence pairs in source and target languages", "User feedback and corrections", "Dictionary definitions and grammar rules"),
                                "Parallel corpora of sentence pairs in source and target languages",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q6",
                                "What is the typical context window size for traditional NMT systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Up to 512 tokens (single sentence to short paragraph)", "Up to 8,000 tokens (multiple pages)", "Up to 128,000 tokens (entire documents)", "Unlimited context"),
                                "Up to 512 tokens (single sentence to short paragraph)",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q7",
                                "Which of the following is a strength of traditional NMT compared to LLM translation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Better understanding of cultural context", "Superior style control and customization", "Much faster processing speed (50-100ms per sentence)", "Ability to handle longer documents"),
                                "Much faster processing speed (50-100ms per sentence)",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q8",
                                "LLMs perform translation through:",
                                QUESTION_TYPE_CHOICE,
                                new Array("Direct word-to-word mapping from source to target language", "Instruction following based on prompts and context", "Looking up translations in a built-in dictionary", "Copying from previously translated examples"),
                                "Instruction following based on prompts and context",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q9",
                                "When would traditional NMT be preferred over LLM translation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When translating marketing slogans requiring creative adaptation", "When maintaining coherence across long documents is critical", "When real-time translation speed is essential for high-volume workflows", "When complex cultural adaptation is required"),
                                "When real-time translation speed is essential for high-volume workflows",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q10",
                                "What is a key advantage of LLMs over traditional NMT for translation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower cost per character translated", "Faster processing time", "Better context understanding across entire documents", "Ability to work offline without internet"),
                                "Better context understanding across entire documents",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q11",
                                "Localization is legally required in which of the following scenarios?",
                                QUESTION_TYPE_CHOICE,
                                new Array("All software must be available in at least 5 languages", "EU consumer-facing content must be in official languages of member states", "Only medical devices require localization", "Localization is never legally required, only recommended"),
                                "EU consumer-facing content must be in official languages of member states",
                                "obj_assessment_1")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess1.q12",
                                "What does the course identify as the most effective localization approach?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fully automated AI translation with no human involvement", "Traditional human translation without any AI assistance", "A human-AI partnership combining automation with human expertise", "Using only Translation Memory systems"),
                                "A human-AI partnership combining automation with human expertise",
                                "obj_assessment_1")
                );
