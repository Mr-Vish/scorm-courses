// Final Comprehensive Assessment
// Covers all 3 modules: AI Code Generation Fundamentals, Enterprise Implementation, Ethics and Governance

test.AddQuestion( new Question ("final_q1",
                                "Which AI model is specifically designed with Constitutional AI and features a 200K token context window?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("GPT-4", "Anthropic Claude 3.5 Sonnet", "Google Gemini", "GitHub Copilot"),
                                "Anthropic Claude 3.5 Sonnet",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q2",
                                "What percentage of developers worldwide now use AI coding tools according to recent surveys?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("67%", "78%", "92%", "85%"),
                                "92%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q3",
                                "In the AI code generation process, which step involves breaking text into tokens and converting them to numerical representations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Context Analysis", "Input Processing and Tokenization", "Pattern Matching", "Code Generation"),
                                "Input Processing and Tokenization",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q4",
                                "What is the typical ROI range for AI code generation adoption in the first year?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("100-200%", "300-500%", "50-100%", "600-800%"),
                                "300-500%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q5",
                                "Which phase of LLM training involves pairing natural language instructions with corresponding code implementations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Pre-training", "Fine-tuning with instruction tuning", "Tokenization", "Validation"),
                                "Fine-tuning with instruction tuning",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q6",
                                "Which integration pattern involves creating detailed specifications first, then using AI to generate initial implementation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AI-Assisted Development", "Specification-Driven Generation", "Refactoring and Modernization", "Test-Driven AI Development"),
                                "Specification-Driven Generation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q7",
                                "What is the recommended minimum code coverage threshold for AI-generated code?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("60%", "70%", "80%", "90%"),
                                "80%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q8",
                                "Which quality assurance layer involves measuring cyclomatic complexity and identifying code duplication?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Automated Static Analysis", "Automated Testing", "Human Code Review", "Performance Testing"),
                                "Automated Static Analysis",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q9",
                                "What is the maximum recommended cyclomatic complexity per function?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("5", "10", "15", "20"),
                                "10",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q10",
                                "Which ethical principle requires maintaining transparency about AI code generation usage?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Accountability", "Transparency and Explainability", "Fairness", "Safety"),
                                "Transparency and Explainability",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q11",
                                "What type of bias occurs when certain perspectives are underrepresented in AI training data?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Training data bias", "Representation bias", "Algorithmic bias", "Selection bias"),
                                "Representation bias",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q12",
                                "Which license type presents HIGH risk if AI reproduces code due to copyleft requirements?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("MIT", "Apache 2.0", "GPL/AGPL", "BSD"),
                                "GPL/AGPL",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q13",
                                "What is the primary mitigation strategy for SQL injection vulnerabilities?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Longer passwords", "Parameterized queries", "Disabling databases", "Removing inputs"),
                                "Parameterized queries",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q14",
                                "Which security testing approach analyzes running applications for vulnerabilities?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("SAST", "DAST", "Code Review", "Manual Testing"),
                                "DAST",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q15",
                                "What is the acceptable threshold for critical and high severity security vulnerabilities?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("0 critical, 0 high", "1 critical, 2 high", "2 critical, 5 high", "Any number"),
                                "0 critical, 0 high",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q16",
                                "Which risk category has CRITICAL priority with medium likelihood and high impact?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Quality risks", "Security vulnerability introduction", "Vendor lock-in", "Skills degradation"),
                                "Security vulnerability introduction",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q17",
                                "What is the recommended duration for an AI code generation pilot program?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("1-2 weeks", "4-6 weeks", "3-4 months", "6-12 months"),
                                "4-6 weeks",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q18",
                                "Which tool is best suited for organizations with strict data residency requirements?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("GitHub Copilot", "ChatGPT", "Tabnine with on-premise deployment", "CodeWhisperer"),
                                "Tabnine with on-premise deployment",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q19",
                                "What is the minimum maintainability index threshold for AI-generated code?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("45", "55", "65", "75"),
                                "65",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q20",
                                "Which Generation 4 capability distinguishes modern AI systems from Generation 3?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Single line completion", "Full application generation with architectural design", "Basic autocomplete", "Template generation"),
                                "Full application generation with architectural design",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q21",
                                "What distinguishes Reinforcement Learning from Human Feedback (RLHF) in AI model training?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses only automated testing", "Human reviewers rate code quality to refine models", "It eliminates the need for training data", "It only works with Python code"),
                                "Human reviewers rate code quality to refine models",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q22",
                                "According to industry research, organizations report what percentage reduction in boilerplate code writing time?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("30%", "50%", "80%", "95%"),
                                "80%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q23",
                                "Which industry sector has the highest adoption rate of AI code generation tools?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Healthcare (58%)", "Manufacturing (54%)", "Technology and Software (95%)", "Financial Services (72%)"),
                                "Technology and Software (95%)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q24",
                                "AI code generation hallucinations refer to generating plausible but incorrect code",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q25",
                                "All AI-generated code must undergo mandatory human review before merging",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q26",
                                "Organizations should use multiple AI tool vendors to avoid vendor lock-in",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q27",
                                "Developers remain responsible for all code they commit, regardless of AI generation",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q28",
                                "The NIST AI Risk Management Framework addresses trustworthiness characteristics including safety, security, and fairness",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q29",
                                "Google Gemini 1.5 Pro features a 1 million token context window for analyzing entire projects",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q30",
                                "The typical payback period for AI code generation tool adoption is 3-6 months for most organizations",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );
