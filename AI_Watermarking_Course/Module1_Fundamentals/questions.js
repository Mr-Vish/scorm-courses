test.AddQuestion( new Question ("com.scorm.aiwatermarking.module1.q1",
                                "Which characteristic is NOT a key requirement for effective AI watermarking systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Imperceptibility - watermarks should not degrade content quality", "Robustness - watermarks should survive common modifications", "Visibility - watermarks should be easily noticeable to end users", "Detectability - watermarks should be reliably identifiable"),
                                "Visibility - watermarks should be easily noticeable to end users",
                                "obj_module1"
                ));
                
test.AddQuestion( new Question ("com.scorm.aiwatermarking.module1.q2",
                                "What is the primary advantage of watermarking over statistical detection methods for AI-generated content?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Watermarking is faster to implement", "Watermarking provides cryptographic guarantees rather than statistical inferences", "Watermarking works on all content types equally", "Watermarking requires no computational resources"),
                                "Watermarking provides cryptographic guarantees rather than statistical inferences",
                                "obj_module1"
                ));
                
test.AddQuestion( new Question ("com.scorm.aiwatermarking.module1.q3",
                                "The 'watermarking trilemma' refers to the tension between which three properties?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Speed, accuracy, and cost", "Quality, robustness, and detectability", "Privacy, security, and transparency", "Text, images, and audio"),
                                "Quality, robustness, and detectability",
                                "obj_module1"
                ));
                
test.AddQuestion( new Question ("com.scorm.aiwatermarking.module1.q4",
                                "Which attack type involves rewriting AI-generated text using another AI or human editing to remove watermarks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compression attack", "Substitution attack", "Paraphrasing attack", "Spoofing attack"),
                                "Paraphrasing attack",
                                "obj_module1"
                ));
                
test.AddQuestion( new Question ("com.scorm.aiwatermarking.module1.q5",
                                "Statistical watermarking works by modifying which aspect of the generation process?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model architecture permanently", "The training data used by the model", "The output distribution or sampling process during generation", "The user interface of the application"),
                                "The output distribution or sampling process during generation",
                                "obj_module1"
                ));
                
test.AddQuestion( new Question ("com.scorm.aiwatermarking.module1.q6",
                                "What is the primary purpose of the C2PA (Coalition for Content Provenance and Authenticity) standard?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To encrypt all AI-generated content", "To provide cryptographically signed metadata tracking content origin and modifications", "To prevent AI systems from generating content", "To compress images for faster transmission"),
                                "To provide cryptographically signed metadata tracking content origin and modifications",
                                "obj_module1"
                ));
