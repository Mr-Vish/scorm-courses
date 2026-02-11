// Final Comprehensive Assessment
// Covers all 3 modules


test.AddQuestion( new Question ("q1",
                                "What is the primary strategic purpose of AWS PartyRock in the AI development lifecycle?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To replace traditional software development", "To serve as a rapid prototyping and validation platform before production investment", "To provide the only way to access Amazon Bedrock models", "To eliminate the need for prompt engineering"),
                                "To serve as a rapid prototyping and validation platform before production investment",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q2",
                                "A product manager wants to demonstrate an AI-powered feature concept to executives before requesting development resources. Which approach is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Create a PowerPoint presentation describing the concept", "Build a functional PartyRock prototype that executives can interact with", "Write detailed technical specifications", "Wait until the development team can build a production version"),
                                "Build a functional PartyRock prototype that executives can interact with",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q3",
                                "In prompt engineering, why is providing context important for AI model outputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Context reduces token consumption", "Context helps the model understand the situation, audience, and purpose, leading to more relevant outputs", "Context is required by PartyRock's technical architecture", "Context allows the use of smaller, cheaper models"),
                                "Context helps the model understand the situation, audience, and purpose, leading to more relevant outputs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q4",
                                "An application needs to analyze customer feedback from multiple perspectives (sentiment, feature requests, pain points) and create an executive summary. Which design pattern is most appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Linear pipeline", "Parallel analysis with synthesis", "Single widget processing", "Conversational exploration"),
                                "Parallel analysis with synthesis",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q5",
                                "What is a key consideration when designing long widget chains with more than 8 widgets?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Longer chains always produce better results", "Each additional widget increases failure points, token consumption, and processing time", "PartyRock limits chains to exactly 8 widgets", "Long chains require special AWS permissions"),
                                "Each additional widget increases failure points, token consumption, and processing time",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q6",
                                "Why are shared PartyRock applications inappropriate for handling customer personal information?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PartyRock applications are publicly accessible via URL with no authentication or access controls", "PartyRock doesn't support text input widgets", "Customer data requires different AI models", "Shared applications expire after 24 hours"),
                                "PartyRock applications are publicly accessible via URL with no authentication or access controls",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q7",
                                "What is the relationship between PartyRock and Amazon Bedrock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are competing services from different companies", "PartyRock provides simplified access to Bedrock's models for prototyping; Bedrock provides enterprise production capabilities", "Bedrock is the old version of PartyRock", "They use completely different AI models"),
                                "PartyRock provides simplified access to Bedrock's models for prototyping; Bedrock provides enterprise production capabilities",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q8",
                                "A financial services company wants to deploy an AI application that processes transaction data for fraud detection. Why must they use Amazon Bedrock instead of PartyRock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Bedrock has better AI models for fraud detection", "Bedrock provides required security controls, compliance certifications, data privacy protections, and VPC isolation that PartyRock lacks", "PartyRock is too expensive for financial services", "Bedrock processes transactions faster"),
                                "Bedrock provides required security controls, compliance certifications, data privacy protections, and VPC isolation that PartyRock lacks",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q9",
                                "What is the primary benefit of the remix feature in PartyRock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It automatically improves application performance", "It allows users to learn from existing applications and accelerate development by building on others' work", "It merges multiple applications into one", "It converts PartyRock applications to production code"),
                                "It allows users to learn from existing applications and accelerate development by building on others' work",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q10",
                                "Which scenario represents the BEST use case for PartyRock?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploying a customer-facing chatbot for a major e-commerce site", "Validating whether AI-generated marketing copy meets brand standards before building a production system", "Processing employee payroll data", "Managing patient medical records in a hospital"),
                                "Validating whether AI-generated marketing copy meets brand standards before building a production system",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q11",
                                "In production Bedrock implementations, why is prompt management important?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To hide prompts from users", "To enable version control, A/B testing, and optimization of prompts independently from application code", "To reduce the number of AI models needed", "To automatically generate better prompts"),
                                "To enable version control, A/B testing, and optimization of prompts independently from application code",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q12",
                                "What is a key advantage of PartyRock for organizational AI adoption?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It provides production-grade security", "It enables cost-effective validation and cross-functional collaboration without technical barriers", "It replaces the need for Amazon Bedrock", "It automatically deploys to production"),
                                "It enables cost-effective validation and cross-functional collaboration without technical barriers",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q13",
                                "Widget chaining in PartyRock enables multi-stage workflows where each widget builds upon previous outputs.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q14",
                                "PartyRock applications can integrate with enterprise databases and external APIs.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q15",
                                "Prompts validated in PartyRock can generally be transferred to Amazon Bedrock production implementations.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );