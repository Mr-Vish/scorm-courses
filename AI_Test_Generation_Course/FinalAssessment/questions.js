// Final Comprehensive Assessment
// Covers all 3 modules: Foundations, Advanced Techniques, and Enterprise Implementation

test.AddQuestion( new Question ("final_q1",
                                "From Module 1: What distinguishes AI-powered test generation from traditional rule-based test generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI systems run tests faster", "AI systems understand semantic meaning and context, not just syntax", "AI systems never make mistakes", "AI systems don't require any human input"),
                                "AI systems understand semantic meaning and context, not just syntax",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q2",
                                "From Module 1: In prompt engineering, what is 'few-shot learning'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Running tests only a few times", "Providing examples of existing tests to help the LLM understand project patterns", "Generating only a few tests instead of many", "Testing only the most important functions"),
                                "Providing examples of existing tests to help the LLM understand project patterns",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q3",
                                "From Module 1: What is the target mutation score for critical code?",
                                QUESTION_TYPE_CHOICE,
                                new Array("30-40%", "50-60%", "70-80%", "100% always"),
                                "70-80%",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q4",
                                "From Module 2: What is the main difference between integration tests and unit tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Integration tests are faster", "Integration tests validate interactions between multiple components", "Integration tests don't need assertions", "Integration tests only test databases"),
                                "Integration tests validate interactions between multiple components",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q5",
                                "From Module 2: In E2E testing, which selector type is most stable and recommended?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Dynamically generated IDs", "data-testid attributes", "Random CSS classes", "Absolute XPath"),
                                "data-testid attributes",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q6",
                                "From Module 2: What does a high mutation score indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tests run very quickly", "Tests effectively catch bugs when code is modified", "Tests have many lines of code", "Tests use advanced frameworks"),
                                "Tests effectively catch bugs when code is modified",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q7",
                                "From Module 2: What should you do when AI-generated tests have weak assertions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Accept them as-is since AI generated them", "Iterate with the LLM to improve assertions to validate actual outcomes", "Delete all the tests", "Only use them for documentation"),
                                "Iterate with the LLM to improve assertions to validate actual outcomes",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q8",
                                "From Module 3: What is a coverage-driven test generation strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Generating tests randomly across the codebase", "Automatically generating tests for code that falls below coverage thresholds", "Only generating tests for new features", "Generating tests based on user requests"),
                                "Automatically generating tests for code that falls below coverage thresholds",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q9",
                                "From Module 3: What is a key advantage of AI test generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It completely eliminates the need for human testers", "It reduces test writing time by 60-80% while improving coverage", "It makes all software bug-free", "It removes the need for code reviews"),
                                "It reduces test writing time by 60-80% while improving coverage",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q10",
                                "From Module 3: Which scenario is NOT recommended for AI test generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Unit tests for pure functions", "Defining overall test strategy and business priorities", "Integration tests for API endpoints", "Regression tests for bug fixes"),
                                "Defining overall test strategy and business priorities",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q11",
                                "From Module 3: What is the role of a Center of Excellence in enterprise AI test generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To write all tests for every team", "To develop standards, templates, and provide guidance", "To replace the development team", "To manage company finances"),
                                "To develop standards, templates, and provide guidance",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q12",
                                "Across all modules: What is the most important factor in successful AI test generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using the most expensive AI model", "Balancing AI automation with human expertise and oversight", "Generating as many tests as possible", "Never reviewing generated tests"),
                                "Balancing AI automation with human expertise and oversight",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q13",
                                "From Module 1: What is a tautological test?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A test that runs twice", "A test that reimplements function logic rather than validating with known correct values", "A test that always fails", "A test written in multiple languages"),
                                "A test that reimplements function logic rather than validating with known correct values",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q14",
                                "From Module 2: What causes test flakiness?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Too many assertions", "Timing issues, race conditions, or environmental dependencies", "Using modern testing frameworks", "Having good code coverage"),
                                "Timing issues, race conditions, or environmental dependencies",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("final_q15",
                                "From Module 3: What is a key limitation of AI test generation regarding business knowledge?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI is too slow", "AI lacks domain knowledge about business rules and regulatory requirements", "AI cannot write any code", "AI only works with one programming language"),
                                "AI lacks domain knowledge about business rules and regulatory requirements",
                                "obj_final_assessment")
                );
