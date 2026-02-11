// Final Comprehensive Assessment - Responsible AI
// Covers all expanded modules

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q1",
                                "Which ethical framework argues that the morality of an AI's action is based on whether it follows a specific set of rules, regardless of the outcome?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Utilitarianism", "Deontology", "Virtue Ethics", "Consequentialism"),
                                "Deontology",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q2",
                                "What is 'Historical Bias' in the context of AI training data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Bias that only existed in the past and is no longer relevant", "When the training data accurately reflects a biased reality that existed when the data was collected", "Bias introduced by modern engineers during training", "Bias caused by hardware failures in old servers"),
                                "When the training data accurately reflects a biased reality that existed when the data was collected",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q3",
                                "Which bias detection metric tests if the model's output changes when a single sensitive attribute (like gender) is changed while keeping all other variables constant?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Disparate Impact", "Equalized Odds", "Counterfactual Fairness", "Recall@K"),
                                "Counterfactual Fairness",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q4",
                                "What is the primary purpose of a 'Model Card'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To act as an ID card for AI researchers", "To provide a standardized 'nutrition label' detailing a model's intended use, data, and limitations", "To store the model's weights in a compressed format", "To bypass safety filters during red teaming"),
                                "To provide a standardized 'nutrition label' detailing a model's intended use, data, and limitations",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q5",
                                "In the EU AI Act, which category of AI systems is considered a clear threat to human rights and is therefore prohibited?",
                                QUESTION_TYPE_CHOICE,
                                new Array("High-Risk", "Limited Risk", "Minimal Risk", "Unacceptable Risk"),
                                "Unacceptable Risk",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q6",
                                "What is 'Differential Privacy'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A law that requires all data to be deleted every 30 days", "A mathematical framework that adds noise to data or gradients to ensure individual data points cannot be extracted from a model", "A technique for training models on public data only", "A way to differentiate between real and AI-generated images"),
                                "A mathematical framework that adds noise to data or gradients to ensure individual data points cannot be extracted from a model",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q7",
                                "Which technique is used to identify which parts of an input (pixels or words) were most important to a model's specific decision?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Feature Importance / Saliency Maps", "Prompt Injection", "Gradient Descent", "Quantization"),
                                "Feature Importance / Saliency Maps",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q8",
                                "What is the primary goal of 'AI Red Teaming'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To market the AI system to new customers", "To deliberately stress-test the model by acting as an adversary to find safety and security vulnerabilities", "To increase the training speed of the model", "To replace human annotators with AI judges"),
                                "To deliberately stress-test the model by acting as an adversary to find safety and security vulnerabilities",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q9",
                                "In the context of the GDPR, why is the 'Right to be Forgotten' difficult to implement in AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Because users never want their data deleted", "Because it is technically complex to 'remove' the influence of a specific data point from a trained model's weights", "Because AI models are not subject to the GDPR", "Because data deletion is always free"),
                                "Because it is technically complex to 'remove' the influence of a specific data point from a trained model's weights",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q10",
                                "What is a 'Jailbreak' prompt?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A prompt used to train models on legal data", "A prompt designed to bypass a model's safety filters and trigger prohibited behavior", "A prompt that improves a model's coding ability", "A prompt that automatically encrypts user data"),
                                "A prompt designed to bypass a model's safety filters and trigger prohibited behavior",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q11",
                                "According to the EU AI Act, which of these would likely be classified as a 'High-Risk' AI system?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A spam filter in an email app", "An AI used to score student exams or filter job applications", "A chatbot that recommends movies", "A non-player character in a video game"),
                                "An AI used to score student exams or filter job applications",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q12",
                                "What does 'Explainability' refer to in AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model's ability to speak multiple languages", "The ability to provide human-understandable justifications for a model's outputs", "The size of the model's training dataset", "The speed at which the model generates tokens"),
                                "The ability to provide human-understandable justifications for a model's outputs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q13",
                                "Which privacy technique involves training a model locally on a user's device and only sending updates (not data) to a central server?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Differential Privacy", "Federated Learning", "Data Augmentation", "PII Redaction"),
                                "Federated Learning",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q14",
                                "What is the 'Brussels Effect' in the context of AI regulation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A type of bias found in European datasets", "The phenomenon where EU regulations (like the AI Act) become the de-facto global standards", "A new architecture for neural networks", "A conference held in Belgium every year"),
                                "The phenomenon where EU regulations (like the AI Act) become the de-facto global standards",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.responsible.ai.final_q15",
                                "Why is 'Human Oversight' a core principle of Trustworthy AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To ensure AI systems remain under human control and do not cause autonomous harm", "To make the AI systems work slower", "To increase the cost of AI development", "To replace all automated systems with manual labor"),
                                "To ensure AI systems remain under human control and do not cause autonomous harm",
                                "obj_final_assessment")
                );