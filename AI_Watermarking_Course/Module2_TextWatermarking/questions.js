test.AddQuestion( new Question ("com.scorm.aiwatermarking.module2.q1",
                                "In green/red list watermarking, what determines which tokens are classified as 'green' at each generation step?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Random selection by the model", "A hash function using the previous token and a secret key", "The highest probability tokens are always green", "User preferences specified in the prompt"),
                                "A hash function using the previous token and a secret key",
                                "obj_module2"
                ));
                
test.AddQuestion( new Question ("com.scorm.aiwatermarking.module2.q2",
                                "What is the expected proportion of green tokens in non-watermarked (human-written) text when using a 50/50 green/red partition?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Approximately 25%", "Approximately 50%", "Approximately 75%", "Approximately 100%"),
                                "Approximately 50%",
                                "obj_module2"
                ));
                
test.AddQuestion( new Question ("com.scorm.aiwatermarking.module2.q3",
                                "A z-score of 4 in watermark detection indicates what level of confidence that the text is watermarked?",
                                QUESTION_TYPE_CHOICE,
                                new Array("50% confidence", "95% confidence", "99.7% confidence", "99.99% confidence"),
                                "99.99% confidence",
                                "obj_module2"
                ));
                
test.AddQuestion( new Question ("com.scorm.aiwatermarking.module2.q4",
                                "Which type of attack is most effective at removing text watermarks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compression attack", "Paraphrasing attack", "Encryption attack", "Formatting attack"),
                                "Paraphrasing attack",
                                "obj_module2"
                ));
                
test.AddQuestion( new Question ("com.scorm.aiwatermarking.module2.q5",
                                "What is the primary advantage of semantic watermarking over token-level statistical watermarking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is faster to implement", "It requires no secret keys", "It is more robust to paraphrasing attacks", "It works only on short texts"),
                                "It is more robust to paraphrasing attacks",
                                "obj_module2"
                ));
                
test.AddQuestion( new Question ("com.scorm.aiwatermarking.module2.q6",
                                "The 'delta parameter' in text watermarking controls which aspect of the watermark?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The encryption algorithm used", "The strength of the bias toward green tokens", "The number of tokens in the vocabulary", "The language of the generated text"),
                                "The strength of the bias toward green tokens",
                                "obj_module2"
                ));
