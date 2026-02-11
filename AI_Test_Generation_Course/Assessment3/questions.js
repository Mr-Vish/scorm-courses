test.AddQuestion( new Question ("mod3_q1",
                                "What is the primary purpose of integrating AI test generation into CI/CD pipelines?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To replace all manual testing activities", "To systematically and automatically improve test coverage as code evolves", "To eliminate the need for code reviews", "To reduce the number of developers needed"),
                                "To systematically and automatically improve test coverage as code evolves",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("mod3_q2",
                                "In a coverage-driven test generation strategy, what triggers the generation of new tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Every code commit regardless of coverage", "When code falls below defined coverage thresholds", "Only when bugs are found in production", "When developers manually request it"),
                                "When code falls below defined coverage thresholds",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("mod3_q3",
                                "What is a key advantage of AI test generation in terms of productivity?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It eliminates the need for any human involvement in testing", "It reduces time spent writing boilerplate test code by 60-80%", "It makes all tests run 10x faster", "It removes the need for test maintenance"),
                                "It reduces time spent writing boilerplate test code by 60-80%",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("mod3_q4",
                                "Which limitation of AI test generation relates to understanding business requirements?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Context window limitations", "Lack of domain knowledge about business rules and regulatory requirements", "Hallucination of non-existent APIs", "Slow execution speed"),
                                "Lack of domain knowledge about business rules and regulatory requirements",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("mod3_q5",
                                "What is the recommended approach when AI-generated tests expose proprietary code to external APIs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Stop using AI test generation entirely", "Use on-premise or private LLM deployments and sanitize sensitive data", "Only generate tests for non-critical code", "Ignore the security risk"),
                                "Use on-premise or private LLM deployments and sanitize sensitive data",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("mod3_q6",
                                "In enterprise governance, what is the role of a Center of Excellence for AI test generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To write all tests for the entire organization", "To develop standards, templates, and provide guidance to teams", "To replace the QA department", "To manage the company's budget"),
                                "To develop standards, templates, and provide guidance to teams",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("mod3_q7",
                                "What is a prompt library in the context of enterprise AI test generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A collection of test data for running tests", "A centralized repository of effective prompts organized by test type, language, and scenario", "A list of all bugs found by AI-generated tests", "A database of all generated tests"),
                                "A centralized repository of effective prompts organized by test type, language, and scenario",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("mod3_q8",
                                "What is the recommended phased approach for enterprise AI test generation adoption?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploy to all teams simultaneously on day one", "Pilot with 1-2 teams, expand to more teams, then scale enterprise-wide", "Start with the most critical systems first", "Begin with the least experienced teams"),
                                "Pilot with 1-2 teams, expand to more teams, then scale enterprise-wide",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("mod3_q9",
                                "Which use case is MOST ideal for AI test generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Defining overall test strategy for the organization", "Generating unit tests for pure functions with clear inputs and outputs", "Making ethical decisions about test scenarios", "Conducting user experience testing"),
                                "Generating unit tests for pure functions with clear inputs and outputs",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("mod3_q10",
                                "What is a key risk of over-reliance on AI test generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tests will become too comprehensive", "Developers may lose critical testing skills and stop thinking about test scenarios", "The code will become too well-tested", "Tests will run too quickly"),
                                "Developers may lose critical testing skills and stop thinking about test scenarios",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("mod3_q11",
                                "What should be included in quality gates for AI-generated tests before acceptance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only that the tests were generated by AI", "Syntax correctness, execution success, coverage improvement, and no duplication", "Just that they compile without errors", "Only the developer's approval"),
                                "Syntax correctness, execution success, coverage improvement, and no duplication",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("mod3_q12",
                                "What is the primary purpose of tracking ROI metrics for AI test generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To punish teams that don't adopt it", "To demonstrate business value and guide investment decisions", "To compare developers against each other", "To eliminate the testing department"),
                                "To demonstrate business value and guide investment decisions",
                                "obj_module_3")
                );
