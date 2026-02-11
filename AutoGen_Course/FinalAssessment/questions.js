// Final Comprehensive Assessment
// Covers all 3 modules with unique questions

// Module 1 Questions (Foundation concepts)
test.AddQuestion( new Question ("fq1",
                                "What is the global disability market's annual disposable income?",
                                QUESTION_TYPE_CHOICE,
                                new Array("$2 trillion", "$5 trillion", "$8 trillion", "$10 trillion"),
                                "$8 trillion",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq2",
                                "Which POUR principle requires that user interface components and navigation must be operable by all users?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Perceivable", "Operable", "Understandable", "Robust"),
                                "Operable",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq3",
                                "What does the 'Understandable' principle in POUR emphasize for AI systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI must be fast", "Information and operation of the user interface must be understandable", "AI must be expensive", "AI must be complex"),
                                "Information and operation of the user interface must be understandable",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq4",
                                "Which accessibility persona characteristic describes someone who uses JAWS screen reader and keyboard navigation exclusively?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User with auditory disability", "User with blindness", "User with motor disability", "User with cognitive disability"),
                                "User with blindness",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq5",
                                "What is the recommended approach when accessibility and other features compete for resources?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always delay accessibility", "Recognize accessibility as a fundamental requirement and build it in from the start", "Make accessibility optional", "Only add accessibility if there is extra budget"),
                                "Recognize accessibility as a fundamental requirement and build it in from the start",
                                "obj_final_assessment")
                );

// Module 2 Questions (Design and Implementation)
test.AddQuestion( new Question ("fq6",
                                "What is the primary purpose of ARIA live regions in AI chatbot interfaces?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make the interface colorful", "To announce new messages and dynamic content updates to screen readers", "To speed up the chatbot", "To reduce server load"),
                                "To announce new messages and dynamic content updates to screen readers",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq7",
                                "Which inclusive design principle emphasizes allowing users to customize AI behavior and presentation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Recognize Diversity", "Be Consistent", "Give Users Control", "Consider Context"),
                                "Give Users Control",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq8",
                                "What is the main benefit of including users with disabilities in AI training data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces costs", "It ensures the AI model works well for diverse users and doesn't perpetuate bias", "It speeds up training", "It simplifies the model"),
                                "It ensures the AI model works well for diverse users and doesn't perpetuate bias",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq9",
                                "Which testing approach can detect approximately 30-40% of accessibility issues?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User testing only", "Automated testing", "Manual testing only", "No testing needed"),
                                "Automated testing",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq10",
                                "What should be the first approach before adding ARIA to make content accessible?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always use ARIA first", "Use semantic HTML first; add ARIA only when necessary", "Never use semantic HTML", "Use only JavaScript"),
                                "Use semantic HTML first; add ARIA only when necessary",
                                "obj_final_assessment")
                );

// Module 3 Questions (Ethics and Compliance)
test.AddQuestion( new Question ("fq11",
                                "Which responsible AI principle requires clear communication about AI accessibility capabilities and limitations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fairness", "Privacy", "Transparency", "Reliability"),
                                "Transparency",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq12",
                                "What does Section 508 of the Rehabilitation Act require?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only private companies must be accessible", "Federal agencies must make electronic and information technology accessible", "Only websites need to be accessible", "Accessibility is optional for government"),
                                "Federal agencies must make electronic and information technology accessible",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq13",
                                "What is a key mitigation strategy for AI performance variability across user groups?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore the variability", "Train on diverse data, provide alternatives, and test with diverse users", "Only test with one user group", "Remove accessibility features"),
                                "Train on diverse data, provide alternatives, and test with diverse users",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq14",
                                "Which organizational challenge refers to different teams not communicating about accessibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Resource constraints", "Organizational silos", "Knowledge gaps", "Measurement issues"),
                                "Organizational silos",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq15",
                                "What is the vision for proactive accessibility in the future of AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI that ignores accessibility", "AI that anticipates and prevents accessibility barriers before they occur", "AI that only fixes issues after complaints", "AI that removes all features"),
                                "AI that anticipates and prevents accessibility barriers before they occur",
                                "obj_final_assessment")
                );

// Cross-Module Integration Questions
test.AddQuestion( new Question ("fq16",
                                "How do the POUR principles relate to legal compliance requirements?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are unrelated", "POUR principles form the foundation of WCAG, which is referenced by many accessibility laws", "Legal requirements ignore POUR", "POUR only applies to design, not law"),
                                "POUR principles form the foundation of WCAG, which is referenced by many accessibility laws",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq17",
                                "Why is user testing with people with disabilities essential even after automated and manual testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is not essential", "It is the only way to validate real-world accessibility and user experience quality", "Automated testing is sufficient", "Manual testing covers everything"),
                                "It is the only way to validate real-world accessibility and user experience quality",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq18",
                                "How does building accessibility into AI from the start compare to retrofitting in terms of cost?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They cost the same", "Retrofitting is cheaper", "Building in from start adds 5-10%, retrofitting adds 50-100% or more", "Building in from start is always more expensive"),
                                "Building in from start adds 5-10%, retrofitting adds 50-100% or more",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq19",
                                "What is the relationship between multimodal AI design and accessibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Multimodal design has no impact on accessibility", "Multimodal design provides the most accessible AI experiences by supporting multiple interaction methods", "Multimodal design reduces accessibility", "Only single-modal design is accessible"),
                                "Multimodal design provides the most accessible AI experiences by supporting multiple interaction methods",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq20",
                                "Why is intersectionality important in AI accessibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is not important", "People have multiple intersecting identities (disability + race, gender, etc.) that AI systems must consider", "Only disability matters", "Intersectionality only applies to social issues, not technology"),
                                "People have multiple intersecting identities (disability + race, gender, etc.) that AI systems must consider",
                                "obj_final_assessment")
                );

// Advanced Application Questions
test.AddQuestion( new Question ("fq21",
                                "In a scenario where an AI chatbot must balance speed and accessibility, what is the best approach?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always prioritize speed over accessibility", "Provide user control to adjust response speed and detail level based on their needs", "Remove all accessibility features for speed", "Make the system slow for everyone"),
                                "Provide user control to adjust response speed and detail level based on their needs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq22",
                                "What is the most effective strategy for ensuring AI-generated alt text is high quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Never review AI-generated alt text", "Clearly label as AI-generated, allow human review for critical content, continuously improve accuracy", "Only use human-written alt text", "Remove all images"),
                                "Clearly label as AI-generated, allow human review for critical content, continuously improve accuracy",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq23",
                                "When should accessibility be considered in the AI development lifecycle?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only at the end before launch", "Only during testing", "Throughout the entire lifecycle from research through maintenance", "Only during design"),
                                "Throughout the entire lifecycle from research through maintenance",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq24",
                                "What is the primary reason for documenting accessibility decisions and creating VPATs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is not necessary", "To demonstrate compliance, support procurement decisions, and maintain transparency", "Only for marketing purposes", "To slow down development"),
                                "To demonstrate compliance, support procurement decisions, and maintain transparency",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("fq25",
                                "What is the ultimate goal of AI accessibility according to the course?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To meet minimum legal requirements", "To create AI that is universally accessible, empowering, equitable, and respects human dignity for all users", "To add accessibility as an afterthought", "To make AI more expensive"),
                                "To create AI that is universally accessible, empowering, equitable, and respects human dignity for all users",
                                "obj_final_assessment")
                );
