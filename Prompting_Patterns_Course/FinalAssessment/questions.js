// Final Assessment - Prompting Patterns

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q1",
                                "Which pattern involves giving the AI a specific identity to improve its task-specific performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Template Pattern", "The Persona Pattern", "The ReAct Pattern", "The RAG Pattern"),
                                "The Persona Pattern",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q2",
                                "What is a 'few-shot' example in the context of prompting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A short prompt with no context", "One or more examples of inputs and desired outputs provided within the prompt", "A prompt that uses only a few tokens", "A prompt that is sent to multiple models"),
                                "One or more examples of inputs and desired outputs provided within the prompt",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q3",
                                "Which pattern is most useful for making AI output easily parseable by a computer program?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Persona Pattern", "Template Pattern (specifically JSON)", "Self-Reflection Pattern", "Recursive Summarization"),
                                "Template Pattern (specifically JSON)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q4",
                                "What is the key benefit of 'Chain of Thought' prompting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces the cost of the API call", "It allows the model to explain its step-by-step reasoning, leading to more accurate answers for complex problems", "It makes the model respond faster", "It prevents the model from using tools"),
                                "It allows the model to explain its step-by-step reasoning, leading to more accurate answers for complex problems",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q5",
                                "In the Tree of Thoughts pattern, what does 'State Evaluation' involve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Checking if the model is currently running", "Assessing whether a particular reasoning path is likely to lead to a correct solution", "Measuring the latency of each model call", "Calculating the total number of tokens used"),
                                "Assessing whether a particular reasoning path is likely to lead to a correct solution",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q6",
                                "Which pattern uses a creator-critic-creator cycle to improve output quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ReAct", "RAG", "Self-Reflection", "Persona"),
                                "Self-Reflection",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q7",
                                "What does the 'Observation' stage in the ReAct pattern provide?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model's internal thoughts", "The results or data returned by a tool or API call", "The final answer to the user", "A critique of the model's previous action"),
                                "The results or data returned by a tool or API call",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q8",
                                "Which pattern is specifically designed to ground an LLM in up-to-date or private information?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Chain of Density", "Recursive Summarization", "Retrieval-Augmented Generation (RAG)", "Skeleton-of-Thought"),
                                "Retrieval-Augmented Generation (RAG)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q9",
                                "In RAG, what is the role of the 'Augmentation' step?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retrieving documents from a database", "Including the retrieved information into the prompt as context for the model", "Generating the final response", "Asking the user for more information"),
                                "Including the retrieved information into the prompt as context for the model",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q10",
                                "What is the primary objective of the Chain of Density (CoD) pattern?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase the length of a summary in each step", "To pack as many unique facts as possible into a summary while staying within a word count limit", "To translate a summary into five different languages", "To remove all entities from a summary"),
                                "To pack as many unique facts as possible into a summary while staying within a word count limit",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q11",
                                "When would you use 'Recursive Summarization' instead of standard RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When you have a very small dataset", "When you need to synthesize information from a massive dataset that exceeds the model's context window", "When you want the model to respond as fast as possible", "Standard RAG is always better"),
                                "When you need to synthesize information from a massive dataset that exceeds the model's context window",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q12",
                                "How does the 'Skeleton-of-Thought' pattern achieve high-speed generation of long documents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By asking the model to write faster", "By first creating an outline and then expanding each section in parallel", "By reducing the quality of the output", "By using a smaller model version"),
                                "By first creating an outline and then expanding each section in parallel",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q13",
                                "In the Persona Pattern, why should you include 'Negative Constraints'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make the AI more argumentative", "To explicitly list behaviors or actions the persona should avoid", "To reduce the cost of the response", "To improve the model's grammar"),
                                "To explicitly list behaviors or actions the persona should avoid",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q14",
                                "Which pattern is most effective for a task that requires multiple steps, tool use, and adaptive planning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Template Pattern", "ReAct Pattern", "Chain of Density", "Recursive Summarization"),
                                "ReAct Pattern",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.prompting.patterns.final_q15",
                                "What is the main limitation of using advanced patterns like Tree of Thoughts or Chain of Density?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too simple to be effective", "They involve multiple iterations or complex logic, leading to higher token costs and latency", "They can only be used with open-source models", "They don't work with English text"),
                                "They involve multiple iterations or complex logic, leading to higher token costs and latency",
                                "obj_final_assessment")
                );