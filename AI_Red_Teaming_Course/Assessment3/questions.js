test.AddQuestion( new Question ("q1",
                                "What is the primary principle behind defense-in-depth for AI systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using only the strongest single defense mechanism", "Combining multiple complementary defense layers that provide overlapping protection", "Focusing exclusively on input filtering", "Relying solely on model training for safety"),
                                "Combining multiple complementary defense layers that provide overlapping protection",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q2",
                                "Which defense layer examines model responses before delivering them to users?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Input filtering and validation", "System prompt hardening", "Output filtering and validation", "Rate limiting and access controls"),
                                "Output filtering and validation",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3",
                                "What is a key limitation of input filtering as a defense mechanism?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is too expensive to implement", "It can be easily bypassed with novel attack variations and cannot detect semantic attacks", "It always blocks all legitimate user inputs", "It requires quantum computing resources"),
                                "It can be easily bypassed with novel attack variations and cannot detect semantic attacks",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q4",
                                "What distinguishes Constitutional AI from external filtering approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Constitutional AI is faster than all other approaches", "Constitutional AI embeds safety principles directly into the model through training rather than adding external filters", "Constitutional AI only works for small models", "Constitutional AI eliminates the need for any testing"),
                                "Constitutional AI embeds safety principles directly into the model through training rather than adding external filters",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q5",
                                "What is the primary advantage of automated testing over manual red teaming?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Automated testing completely replaces the need for human red teamers", "Automated testing enables scale, consistency, and continuous monitoring that manual testing cannot achieve", "Automated testing is always more creative than human testing", "Automated testing requires no maintenance or updates"),
                                "Automated testing enables scale, consistency, and continuous monitoring that manual testing cannot achieve",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q6",
                                "Which open-source tool is described as a comprehensive LLM vulnerability scanner with a plugin architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PyRIT", "Garak", "Promptfoo", "TensorFlow"),
                                "Garak",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q7",
                                "What is the main advantage of using LLM-as-Judge for evaluation compared to rule-based approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is always faster and cheaper", "It provides flexibility to handle nuanced, context-dependent evaluations without requiring labeled training data", "It never makes mistakes", "It requires no prompt engineering"),
                                "It provides flexibility to handle nuanced, context-dependent evaluations without requiring labeled training data",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q8",
                                "In a continuous red teaming program, what is the purpose of CI/CD integration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To slow down the development process", "To run automated tests on every code or model change and block deployments that fail critical security tests", "To eliminate the need for pre-deployment testing", "To replace all manual security reviews"),
                                "To run automated tests on every code or model change and block deployments that fail critical security tests",
                                "obj_module_3")
                );
