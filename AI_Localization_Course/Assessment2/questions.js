test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q1",
                                "What is the primary purpose of the preprocessing stage in a translation pipeline?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To translate the content", "To extract translatable text while preserving non-translatable elements", "To check translation quality", "To store translations in a database"),
                                "To extract translatable text while preserving non-translatable elements",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q2",
                                "Which architectural pattern is best suited for real-time chat translation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Asynchronous Pipeline", "Synchronous Pipeline", "Hybrid Pipeline", "Batch Pipeline"),
                                "Synchronous Pipeline",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q3",
                                "What is the recommended approach for handling large glossaries that exceed prompt token limits?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Remove less important terms permanently", "Dynamically select relevant terms based on source content", "Split translations into multiple requests", "Use a smaller LLM model"),
                                "Dynamically select relevant terms based on source content",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q4",
                                "In a translation pipeline, what should be done when a placeholder like {{user_name}} is corrupted in the translation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Accept the translation as-is", "Post-process to restore the original placeholder", "Manually fix each occurrence", "Ignore placeholder errors"),
                                "Post-process to restore the original placeholder",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q5",
                                "What is the purpose of few-shot learning in translation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce API costs", "To provide example translations that demonstrate desired style and format", "To translate multiple languages simultaneously", "To speed up translation processing"),
                                "To provide example translations that demonstrate desired style and format",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q6",
                                "Which type of context helps disambiguate words with multiple meanings?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cultural context", "Audience context", "Linguistic context", "Historical context"),
                                "Linguistic context",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q7",
                                "What is the recommended retry strategy when an API request times out?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retry immediately without delay", "Implement exponential backoff (wait 1s, 2s, 4s, 8s)", "Give up after first failure", "Retry with a different language"),
                                "Implement exponential backoff (wait 1s, 2s, 4s, 8s)",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q8",
                                "What should be included in a glossary entry besides the source term and target translation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the source and target terms are needed", "Part of speech, context/usage notes, and do-not-translate flags", "The translator's name", "The date of creation"),
                                "Part of speech, context/usage notes, and do-not-translate flags",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q9",
                                "In context window management, what should receive the highest priority?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Historical translations", "Broader document context", "The text to be translated", "Related documents"),
                                "The text to be translated",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q10",
                                "What is a key advantage of asynchronous pipelines over synchronous pipelines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster processing time", "Lower cost per translation", "Ability to perform comprehensive QA checks and human review", "Simpler implementation"),
                                "Ability to perform comprehensive QA checks and human review",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q11",
                                "How can brand voice consistency be maintained across languages?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use the same translator for all content", "Provide explicit brand voice guidelines in translation prompts", "Translate everything literally", "Avoid using LLMs for brand content"),
                                "Provide explicit brand voice guidelines in translation prompts",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.ailocalization.assess2.q12",
                                "What is the purpose of automated glossary compliance checking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce translation costs", "To verify that required terms are translated according to the glossary", "To speed up the translation process", "To eliminate the need for human review"),
                                "To verify that required terms are translated according to the glossary",
                                "obj_assessment_2")
                );
