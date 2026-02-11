test.AddQuestion( new Question ("mod2_q1",
                                "What is the primary difference between integration tests and unit tests?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Integration tests run faster than unit tests", "Integration tests validate interactions between multiple components while unit tests isolate individual functions", "Integration tests don't require assertions", "Integration tests are easier to write than unit tests"),
                                "Integration tests validate interactions between multiple components while unit tests isolate individual functions",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("mod2_q2",
                                "When generating integration tests for API endpoints, which dependencies should typically be mocked?",
                                QUESTION_TYPE_CHOICE,
                                new Array("In-memory databases and internal services", "External APIs, payment processors, and email services", "All dependencies should always be mocked", "No dependencies should ever be mocked"),
                                "External APIs, payment processors, and email services",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("mod2_q3",
                                "What is the recommended approach for handling asynchronous operations in E2E tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use fixed sleep delays of 5-10 seconds", "Use explicit waits for specific conditions like element visibility", "Disable all animations and async operations", "Run tests multiple times until they pass"),
                                "Use explicit waits for specific conditions like element visibility",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("mod2_q4",
                                "In E2E testing, what is the most stable type of selector to use for UI elements?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Dynamically generated IDs", "data-testid attributes designed specifically for testing", "CSS classes that may change with styling updates", "XPath expressions with absolute paths"),
                                "data-testid attributes designed specifically for testing",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("mod2_q5",
                                "What does mutation testing validate about your test suite?",
                                QUESTION_TYPE_CHOICE,
                                new Array("That tests run quickly enough for CI/CD", "That tests actually catch bugs by verifying they fail when deliberate code changes are introduced", "That tests have good code coverage percentages", "That tests are well-documented with comments"),
                                "That tests actually catch bugs by verifying they fail when deliberate code changes are introduced",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("mod2_q6",
                                "What is a 'mutation score' in mutation testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The percentage of code covered by tests", "The percentage of mutants killed by the test suite", "The number of tests that need to be fixed", "The speed at which tests execute"),
                                "The percentage of mutants killed by the test suite",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("mod2_q7",
                                "What is the target range for branch coverage in a well-tested codebase?",
                                QUESTION_TYPE_CHOICE,
                                new Array("25-40%", "50-60%", "75-85%", "100% always required"),
                                "75-85%",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("mod2_q8",
                                "What is a 'flaky test'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A test that is poorly written and hard to understand", "A test that sometimes passes and sometimes fails due to timing or environmental issues", "A test that takes too long to execute", "A test that doesn't have any assertions"),
                                "A test that sometimes passes and sometimes fails due to timing or environmental issues",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("mod2_q9",
                                "In integration test generation, what should you provide to the LLM to improve test quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the function signature", "Comprehensive context including API specifications, data schemas, and architectural information", "Just the error messages you want to see", "Only the database connection string"),
                                "Comprehensive context including API specifications, data schemas, and architectural information",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("mod2_q10",
                                "What is the purpose of the Page Object Model pattern in E2E testing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make tests run faster", "To abstract UI interactions into reusable components making tests more maintainable", "To reduce the number of tests needed", "To eliminate the need for assertions"),
                                "To abstract UI interactions into reusable components making tests more maintainable",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("mod2_q11",
                                "What indicates that a test has weak assertions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The test runs very slowly", "The test only checks that no exception was thrown without validating actual outcomes", "The test has too many comments", "The test uses mocking"),
                                "The test only checks that no exception was thrown without validating actual outcomes",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("mod2_q12",
                                "When should you iterate and refine AI-generated tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Never, AI-generated tests are always perfect", "After running coverage analysis and mutation testing to identify gaps and weaknesses", "Only when tests fail in production", "Only if the code changes"),
                                "After running coverage analysis and mutation testing to identify gaps and weaknesses",
                                "obj_module_2")
                );
