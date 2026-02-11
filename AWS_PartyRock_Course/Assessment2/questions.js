test.AddQuestion( new Question ("q1",
                                "What is the primary benefit of widget chaining in PartyRock applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces the number of widgets needed", "It enables sophisticated multi-stage workflows where each widget builds upon previous outputs", "It improves application loading speed", "It simplifies prompt engineering requirements"),
                                "It enables sophisticated multi-stage workflows where each widget builds upon previous outputs",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2",
                                "In a parallel analysis with synthesis pattern, what is the role of the final synthesis widget?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To execute all previous widgets simultaneously", "To integrate multiple independent analyses into a cohesive output", "To validate that all widgets produced correct results", "To reduce token consumption across the chain"),
                                "To integrate multiple independent analyses into a cohesive output",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3",
                                "A marketing team wants to analyze customer feedback from multiple perspectives (sentiment, feature requests, complaints) and then create an executive summary. Which chaining pattern is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sequential transformation chain", "Conversational exploration", "Parallel analysis with synthesis", "Iterative refinement chain"),
                                "Parallel analysis with synthesis",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4",
                                "What is a key design consideration when creating long widget chains (more than 8 widgets)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Long chains always produce better results than short chains", "Each additional widget increases potential failure points, token consumption, and processing time", "Long chains are not possible in PartyRock", "Long chains automatically optimize themselves"),
                                "Each additional widget increases potential failure points, token consumption, and processing time",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5",
                                "Why are educational applications particularly well-suited for PartyRock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Educational content requires no prompt engineering", "PartyRock's accessibility, immediate feedback, and AI-powered personalization align with modern pedagogical principles", "Educational applications don't need widget chaining", "Schools receive free unlimited access to PartyRock"),
                                "PartyRock's accessibility, immediate feedback, and AI-powered personalization align with modern pedagogical principles",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6",
                                "A company wants to create an application that transforms blog posts into social media threads, email newsletters, and video scripts. What type of application is this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Character development application", "Content repurposing engine", "Technical troubleshooting assistant", "Meeting summarizer"),
                                "Content repurposing engine",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q7",
                                "Which of the following indicates a use case is a POOR fit for PartyRock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The application involves content generation and analysis", "The application requires strict security controls and handles sensitive customer data", "The application benefits from rapid prototyping and iteration", "The application is for educational or demonstration purposes"),
                                "The application requires strict security controls and handles sensitive customer data",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q8",
                                "What is the primary purpose of the remix feature in PartyRock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To create backup copies of applications", "To allow users to copy and modify existing applications, facilitating learning and accelerating development", "To merge multiple applications into one", "To automatically improve application performance"),
                                "To allow users to copy and modify existing applications, facilitating learning and accelerating development",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q9",
                                "When sharing PartyRock applications with external stakeholders, what is an important consideration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Shared applications require recipients to create AWS accounts", "Shared applications are publicly accessible via URL and should not contain sensitive or proprietary information", "Shared applications automatically expire after 24 hours", "Shared applications can only be accessed by users in the same organization"),
                                "Shared applications are publicly accessible via URL and should not contain sensitive or proprietary information",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q10",
                                "Multi-modal chaining combines different widget types (text generation, image generation, chatbots) to create richer applications.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q11",
                                "In widget chains, errors in early widgets can propagate and compound in subsequent widgets, making error resilience important in prompt design.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q12",
                                "PartyRock provides detailed analytics showing exactly who uses your shared applications and how they interact with them.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_module_2")
                );
