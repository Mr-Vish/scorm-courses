test.AddQuestion( new Question ("com.scorm.multistep.rag.springai.interactions.m2_q1",
                                "The concept of \'Spring AI vs. LangChain: The Orchestration Battle\' is covered in this module.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.multistep.rag.springai.interactions.m2_q2",
                                "Which of the following best describes: In a production environment, you should transition from simple RAG to a multistep architecture when ...",
                                QUESTION_TYPE_CHOICE,
                                new Array("In a production environment, you should transition from simple RAG to a multiste", "An unrelated concept not covered in 1. When is Multistep RAG Required?", "None of the above", "This topic is not part of the course material"),
                                "In a production environment, you should transition from simple RAG to a multiste",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.multistep.rag.springai.interactions.m2_q3",
                                "Which of the following best describes: Verdict: Choose Spring AI for enterprise Java apps where maintainability and \"Spring-native\" convent...",
                                QUESTION_TYPE_CHOICE,
                                new Array("Verdict: Choose Spring AI for enterprise Java apps where maintainability and \"Sp", "An unrelated concept not covered in 1. When is Multistep RAG Required?", "None of the above", "This topic is not part of the course material"),
                                "Verdict: Choose Spring AI for enterprise Java apps where maintainability and \"Sp",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.multistep.rag.springai.interactions.m2_q4",
                                "Multi-Hop Reasoning: When an answer requires connecting two unrelated facts (e.g., \"How does the CEO’s bonus in our 2023 report compare to the market average for tech firms in 2024?\"). One search won\'t find both pieces of data.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.multistep.rag.springai.interactions.m2_q5",
                                "Missing Context (The \"Web Bridge\"): When internal documents are outdated or incomplete. The system must recognize it lacks info and \"step out\" to a web search tool.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.multistep.rag.springai.interactions.m2_q6",
                                "Query Ambiguity: When the user\'s initial question is too broad. The system needs a \"Query Transformation\" step to break one question into three specific sub-queries for the vector database.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_2")
                );