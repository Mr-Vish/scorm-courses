test.AddQuestion( new Question ("ai_ethics_gov_1",
                                "Which ethical principle requires clearly identifying code generated or significantly modified by AI?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Accountability", "Transparency and Explainability", "Fairness", "Privacy"),
                                "Transparency and Explainability",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_2",
                                "What type of bias occurs when AI models are more proficient in popular languages than less common ones?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Algorithmic bias", "Training data bias", "Representation bias", "Selection bias"),
                                "Training data bias",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_3",
                                "Developers remain responsible for all code they commit, regardless of whether it was AI-generated",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_4",
                                "Which license type presents the highest risk if AI reproduces code from training data?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("MIT License", "Apache 2.0", "GPL/AGPL", "BSD License"),
                                "GPL/AGPL",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_5",
                                "What is the primary mitigation for SQL injection vulnerabilities in AI-generated code?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Using longer passwords", "Always use parameterized queries", "Disabling the database", "Removing all user inputs"),
                                "Always use parameterized queries",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_6",
                                "The NIST AI Risk Management Framework addresses trustworthiness characteristics including validity, reliability, safety, security, and fairness",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_7",
                                "Which security testing approach analyzes source code without executing it?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Dynamic Application Security Testing (DAST)", "Static Application Security Testing (SAST)", "Penetration Testing", "Manual Testing"),
                                "Static Application Security Testing (SAST)",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_8",
                                "What is a key advantage of AI code generation from a business perspective?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Eliminates need for developers", "30-50% reduction in development time", "Guarantees zero bugs", "Removes all security risks"),
                                "30-50% reduction in development time",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_9",
                                "Which risk category includes vendor dependency and tool unavailability?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Technical risks", "Security risks", "Operational risks", "Legal risks"),
                                "Operational risks",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_10",
                                "Organizations should prohibit sharing sensitive or proprietary code with external AI services",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_11",
                                "What is the recommended approach for input validation in secure code?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Use denylists to block bad input", "Use allowlists to permit only valid input", "Accept all input and sanitize later", "Disable input validation"),
                                "Use allowlists to permit only valid input",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_12",
                                "Which ethical principle emphasizes that AI-generated code must not perpetuate discrimination?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Transparency", "Accountability", "Fairness and Non-Discrimination", "Privacy"),
                                "Fairness and Non-Discrimination",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_13",
                                "What is a key limitation of AI code generation related to security?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("It always produces secure code", "It may introduce security vulnerabilities", "It cannot generate any code", "It only works offline"),
                                "It may introduce security vulnerabilities",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_14",
                                "Cross-Site Scripting (XSS) vulnerabilities can be mitigated by properly encoding all output",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_15",
                                "Which control type includes incident response procedures for addressing issues in AI-generated code?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Preventive controls", "Detective controls", "Corrective controls", "Administrative controls"),
                                "Corrective controls",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_16",
                                "What is the priority level for security vulnerability introduction risk?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Low", "Medium", "High", "Critical"),
                                "Critical",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_17",
                                "Which responsible AI framework is a voluntary framework for managing AI risks developed by NIST?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("IEEE Ethically Aligned Design", "EU AI Act", "NIST AI Risk Management Framework", "ISO 27001"),
                                "NIST AI Risk Management Framework",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_18",
                                "Hardcoded credentials in code represent a security vulnerability that must be avoided",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_19",
                                "What is an accessibility pitfall of AI code generation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AI always generates accessible code", "AI may not prioritize accessibility without explicit prompting", "AI cannot generate any UI code", "Accessibility is not relevant to code"),
                                "AI may not prioritize accessibility without explicit prompting",
                                "obj_module3_ethics")
                );

test.AddQuestion( new Question ("ai_ethics_gov_20",
                                "Which defense in depth strategy principle grants minimum necessary permissions?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Input Validation", "Output Encoding", "Least Privilege", "Secure Defaults"),
                                "Least Privilege",
                                "obj_module3_ethics")
                );
