// Final Comprehensive Assessment
// Covers all 3 modules with unique questions

// Module 1 Questions (6 questions)
test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q1",
                                "Which regulatory framework requires providers of general-purpose AI models to ensure outputs are detectable as AI-generated?",
                                QUESTION_TYPE_CHOICE,
                                new Array("US Executive Order on AI", "EU AI Act", "China's Generative AI Regulations", "NIST AI Risk Management Framework"),
                                "EU AI Act",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q2",
                                "What is the primary reason statistical detection methods fail to reliably identify AI-generated content?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too expensive to deploy", "As AI models improve, outputs become statistically indistinguishable from human content", "They require too much computational power", "They only work on images, not text"),
                                "As AI models improve, outputs become statistically indistinguishable from human content",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q3",
                                "In the context of watermarking security, what does 'unforgeability' mean?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Watermarks cannot be detected by users", "Adversaries cannot create valid watermarks without the secret key", "Watermarks survive all types of attacks", "Content quality is never affected"),
                                "Adversaries cannot create valid watermarks without the secret key",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q4",
                                "Which watermarking approach requires model retraining or fine-tuning but provides watermarks inherent to the model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Statistical watermarking", "Post-processing watermarking", "Model-level watermarking", "Semantic watermarking"),
                                "Model-level watermarking",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q5",
                                "What information-theoretic principle explains why watermarked content has lower entropy in specific ways?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Watermarks reduce randomness by biasing selection toward preferred tokens or pixels", "Watermarks increase file size significantly", "Watermarks encrypt the content", "Watermarks compress the data"),
                                "Watermarks reduce randomness by biasing selection toward preferred tokens or pixels",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q6",
                                "Which organization developed SynthID watermarking technology for both text and images?",
                                QUESTION_TYPE_CHOICE,
                                new Array("OpenAI", "Meta/Stability AI", "Google DeepMind", "Microsoft Research"),
                                "Google DeepMind",
                                "obj_final_assessment"
                ));

// Module 2 Questions (6 questions)
test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q7",
                                "In green/red list watermarking, why must the hash function be deterministic?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make watermarking faster", "To ensure the same input always produces the same green/red partition, enabling detection", "To reduce memory usage", "To improve content quality"),
                                "To ensure the same input always produces the same green/red partition, enabling detection",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q8",
                                "If a text has 100 tokens and 65 are green tokens, what does this suggest about the text?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The text is definitely human-written", "The text is likely watermarked since 65% exceeds the expected 50%", "The text is encrypted", "The text contains errors"),
                                "The text is likely watermarked since 65% exceeds the expected 50%",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q9",
                                "What is the main challenge with watermarking very short texts like tweets or headlines?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They cannot be tokenized", "Statistical tests have low power with few samples, increasing error rates", "They are always encrypted", "They require different languages"),
                                "Statistical tests have low power with few samples, increasing error rates",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q10",
                                "Multi-bit watermarking allows encoding of additional information beyond simple presence/absence. What is a potential privacy concern with this capability?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes watermarks visible", "It could encode user identifiers, enabling tracking and surveillance", "It reduces content quality significantly", "It prevents content from being shared"),
                                "It could encode user identifiers, enabling tracking and surveillance",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q11",
                                "Context-aware watermarking adapts watermark strength based on what factor?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User's geographic location", "The generation context, such as whether content is creative or factual", "The time of day", "The device being used"),
                                "The generation context, such as whether content is creative or factual",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q12",
                                "Which attack method involves translating watermarked text to another language and back to remove the watermark?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compression attack", "Substitution attack", "Translation round-trip attack", "Cropping attack"),
                                "Translation round-trip attack",
                                "obj_final_assessment"
                ));

// Module 3 Questions (6 questions)
test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q13",
                                "Why are mid-frequency DCT coefficients preferred for watermark embedding in images?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are fastest to compute", "They balance imperceptibility and robustness better than low or high frequencies", "They require no secret keys", "They work only on color images"),
                                "They balance imperceptibility and robustness better than low or high frequencies",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q14",
                                "Stable Signature watermarking for Stable Diffusion embeds watermarks at which stage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("In the text prompt", "In the VAE decoder during latent-to-pixel conversion", "In the training data", "In the user interface"),
                                "In the VAE decoder during latent-to-pixel conversion",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q15",
                                "A PSNR value of 42 dB for a watermarked image compared to the original indicates what level of quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Severely degraded quality", "Acceptable quality", "Imperceptible watermark with excellent quality", "The watermark is visible"),
                                "Imperceptible watermark with excellent quality",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q16",
                                "In C2PA, what is the purpose of the digital signature in the manifest?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To compress the image", "To provide cryptographic proof of authenticity and detect tampering", "To watermark the content", "To encrypt the metadata"),
                                "To provide cryptographic proof of authenticity and detect tampering",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q17",
                                "What happens to C2PA content credentials when an image is screenshot?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are automatically transferred to the screenshot", "They are lost because screenshots do not preserve metadata", "They become encrypted", "They are converted to watermarks"),
                                "They are lost because screenshots do not preserve metadata",
                                "obj_final_assessment"
                ));

test.AddQuestion( new Question ("com.scorm.aiwatermarking.final.q18",
                                "According to best practices, what is the recommended strategy for comprehensive content authentication?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use only watermarking", "Use only provenance metadata", "Combine watermarking with provenance metadata in a layered defense", "Rely solely on statistical detection"),
                                "Combine watermarking with provenance metadata in a layered defense",
                                "obj_final_assessment"
                ));
