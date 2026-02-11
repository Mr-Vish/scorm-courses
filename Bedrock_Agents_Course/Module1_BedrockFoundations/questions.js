test.AddQuestion( new Question ("com.scorm.bedrock.module1.q1",
                                "Which foundation model family is best suited for agents requiring extended context windows up to 200K tokens?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Amazon Titan", "Claude 3", "Llama 3", "Cohere Command"),
                                "Claude 3",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module1.q2",
                                "What is the primary advantage of using Amazon Bedrock over self-hosted foundation models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower cost per token", "Managed infrastructure and unified API access", "Better model performance", "Unlimited context windows"),
                                "Managed infrastructure and unified API access",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module1.q3",
                                "In the ReAct reasoning loop, what happens during the 'Observation' step?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The agent analyzes the user's request", "The agent decides which action to take", "The agent receives and incorporates results from its action", "The agent returns the final answer to the user"),
                                "The agent receives and incorporates results from its action",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module1.q4",
                                "Bedrock Agents can handle novel requests through dynamic reasoning rather than predefined flows",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module1.q5",
                                "Which agent design pattern involves a supervisor agent routing requests to specialized sub-agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Single-Purpose Specialist", "General-Purpose Assistant", "Supervisor-Subordinate Architecture", "Human-in-the-Loop Agent"),
                                "Supervisor-Subordinate Architecture",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module1.q6",
                                "What is a key limitation of Bedrock Agents compared to traditional rule-based systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cannot integrate with external APIs", "Higher cost per interaction due to model invocations", "Limited to text-only interactions", "Requires manual coding for each scenario"),
                                "Higher cost per interaction due to model invocations",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module1.q7",
                                "Agent instructions should explicitly define what the agent cannot do to prevent inappropriate actions",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module1.q8",
                                "Which component is NOT part of effective agent instructions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Role definition", "Behavioral guidelines", "Lambda function code", "Security requirements"),
                                "Lambda function code",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module1.q9",
                                "What is the recommended approach when agent instructions exceed 1,500 words?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compress the instructions using abbreviations", "Break into multiple specialized agents", "Increase the model's context window", "Remove security guidelines to save space"),
                                "Break into multiple specialized agents",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.bedrock.module1.q10",
                                "Chain-of-thought prompting encourages agents to show their reasoning process before taking actions",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module1")
                );
