test.AddQuestion( new Question ("mod1_q1",
                                "What is the primary advantage of AI-powered test generation over traditional rule-based test generation systems?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AI systems execute tests faster than rule-based systems", "AI systems can understand semantic meaning and context of code, not just syntax", "AI systems require less computational resources", "AI systems never produce incorrect tests"),
                                "AI systems can understand semantic meaning and context of code, not just syntax",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("mod1_q2",
                                "In the AI test generation workflow, what should happen immediately after the LLM generates test code?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Commit the tests to the codebase", "Perform initial review for obvious errors or hallucinations", "Deploy the code to production", "Delete existing manual tests"),
                                "Perform initial review for obvious errors or hallucinations",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("mod1_q3",
                                "Which type of code is MOST suitable for AI test generation with the highest success rate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Complex stateful classes with multiple dependencies", "Pure functions with no side effects and deterministic outputs", "Legacy code with undocumented business rules", "Multi-threaded concurrent systems"),
                                "Pure functions with no side effects and deterministic outputs",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("mod1_q4",
                                "What is a 'tautological test' in the context of AI-generated tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A test that validates multiple functions simultaneously", "A test that reimplements the function logic rather than validating behavior with known correct values", "A test that always passes regardless of code changes", "A test that uses complex mathematical formulas"),
                                "A test that reimplements the function logic rather than validating behavior with known correct values",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("mod1_q5",
                                "What is the purpose of mutation testing in validating AI-generated tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To test how code behaves with mutated input data", "To verify that tests fail when deliberate bugs are introduced into the code", "To generate new test variations automatically", "To measure how fast tests execute"),
                                "To verify that tests fail when deliberate bugs are introduced into the code",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("mod1_q6",
                                "According to the Arrange-Act-Assert pattern, what happens in the 'Arrange' phase?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Execute the function being tested", "Verify the outcome matches expectations", "Set up test data, mock dependencies, and establish preconditions", "Clean up resources after test completion"),
                                "Set up test data, mock dependencies, and establish preconditions",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("mod1_q7",
                                "What is the recommended target for branch coverage in unit tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("25% or higher", "50% or higher", "75% or higher", "100% always required"),
                                "75% or higher",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("mod1_q8",
                                "Which prompt engineering technique involves providing examples of existing tests to help the LLM understand project patterns?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Negative prompting", "Few-shot learning", "Persona-based prompting", "Coverage-driven prompting"),
                                "Few-shot learning",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("mod1_q9",
                                "What should you do if AI-generated tests achieve only 65% branch coverage when your target is 80%?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Accept the tests as they are since AI knows best", "Iterate with the LLM by specifying which untested branches need coverage", "Manually rewrite all tests from scratch", "Lower your coverage target to match the generated tests"),
                                "Iterate with the LLM by specifying which untested branches need coverage",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("mod1_q10",
                                "What is a 'hallucinated API' problem in AI-generated tests?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When tests take too long to execute", "When the LLM generates calls to methods or functions that don't exist in the testing framework", "When tests produce random results", "When tests are too complex to understand"),
                                "When the LLM generates calls to methods or functions that don't exist in the testing framework",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("mod1_q11",
                                "In prompt engineering, what is the purpose of 'negative prompting'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To generate tests for negative numbers only", "To explicitly state what the LLM should avoid doing", "To create tests that expect failures", "To reduce the number of tests generated"),
                                "To explicitly state what the LLM should avoid doing",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("mod1_q12",
                                "Which statement best describes the human-AI collaboration model in test generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AI completely replaces human testers in all scenarios", "Humans define test strategy and validate results while AI generates test implementation code", "Humans only review tests after deployment to production", "AI only suggests test ideas while humans write all code"),
                                "Humans define test strategy and validate results while AI generates test implementation code",
                                "obj_module_1")
                );
