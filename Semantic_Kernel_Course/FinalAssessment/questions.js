// Final Comprehensive Assessment - Semantic Kernel
// Covers all expanded modules

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q1",
                                "What is the primary role of the 'Kernel' object in Semantic Kernel?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To store the model's weights", "To act as the central hub that orchestrates plugins, services, and memory", "To replace the LLM with a rule-based engine", "To automatically generate training data"),
                                "To act as the central hub that orchestrates plugins, services, and memory",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q2",
                                "What is the difference between a 'Semantic Plugin' and a 'Native Plugin'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("There is no difference", "Semantic Plugins are natural language prompts; Native Plugins are standard code functions (C#/Python)", "Semantic Plugins only work on Azure; Native Plugins only work on AWS", "Semantic Plugins are for images; Native Plugins are for text"),
                                "Semantic Plugins are natural language prompts; Native Plugins are standard code functions (C#/Python)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q3",
                                "In the context of planners, which one is considered the most modern and reliable for iterative task execution?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sequential Planner", "Function Calling Stepwise Planner", "Action Planner", "Handlebars Planner"),
                                "Function Calling Stepwise Planner",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q4",
                                "How does Semantic Memory search for information compared to a traditional database?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses exact keyword matching only", "It uses embeddings and vector similarity to find information based on meaning", "It requires the user to know the primary key", "It only searches through model parameters"),
                                "It uses embeddings and vector similarity to find information based on meaning",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q5",
                                "What is 'Native Function Calling' (Tool Calling)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A way for the model to rewrite its own code", "The model's ability to decide when and how to call a specific native function to fulfill a request", "A method for training a model on new languages", "A type of prompt engineering"),
                                "The model's ability to decide when and how to call a specific native function to fulfill a request",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q6",
                                "What is the primary benefit of a Multi-Agent System (MAS)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes the system slower and more expensive", "It allows specialized agents with different personas and tools to collaborate on complex tasks", "It removes the need for a Kernel", "It only works with one model type"),
                                "It allows specialized agents with different personas and tools to collaborate on complex tasks",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q7",
                                "Which component travels through the execution pipeline, carrying inputs and outputs between functions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Service Registry", "The Kernel Context / KernelArguments", "The Model Connector", "The Termination Strategy"),
                                "The Kernel Context / KernelArguments",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q8",
                                "Why are clear 'Descriptions' essential for native functions in Semantic Kernel?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are required by the Python compiler", "They are the only way for the Planner/LLM to understand when to use the function", "They increase the cost of the API call", "They are used for translating the code"),
                                "They are the only way for the Planner/LLM to understand when to use the function",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q9",
                                "What is 'Retrieval-Augmented Generation' (RAG)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A way to train models faster", "The process of retrieving relevant context from memory and injecting it into the prompt before generation", "A method for compressing Large Language Models", "A type of image generation"),
                                "The process of retrieving relevant context from memory and injecting it into the prompt before generation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q10",
                                "Which observability standard is supported by Semantic Kernel for enterprise-grade logging and tracing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("DirectX", "OpenTelemetry", "SQL", "HTML5"),
                                "OpenTelemetry",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q11",
                                "What is the 'On-Behalf-Of' (OBO) flow used for in enterprise AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To allow the agent to ignore user permissions", "To pass the user's authentication token through the kernel so the agent only accesses authorized data", "To speed up the Kernel builder", "To translate prompts into different languages"),
                                "To pass the user's authentication token through the kernel so the agent only accesses authorized data",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q12",
                                "Which template engine in SK allows for complex logic and calling other functions directly within a prompt?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Simple SK Template", "Handlebars Template", "CSV Template", "Markdown Template"),
                                "Handlebars Template",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q13",
                                "In a Multi-Agent System, what does the 'Termination Strategy' define?",
                                QUESTION_TYPE_CHOICE,
                                new Array("How to delete an agent", "When the collaboration between agents should stop", "The cost of each token", "The hardware used by the agents"),
                                "When the collaboration between agents should stop",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q14",
                                "What is a 'Kernel Filter' used for?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To change the background color of the UI", "To intercept and modify or log requests before and after they reach the model", "To increase the token limit of GPT-4", "To replace native functions with semantic ones"),
                                "To intercept and modify or log requests before and after they reach the model",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.semantickernel.final_q15",
                                "Why would you use a 'VolatileMemoryStore'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("For production-grade persistent data", "For fast, in-memory testing and development where data doesn't need to persist", "To store massive amounts of video data", "To replace the LLM connector"),
                                "For fast, in-memory testing and development where data doesn't need to persist",
                                "obj_final_assessment")
                );