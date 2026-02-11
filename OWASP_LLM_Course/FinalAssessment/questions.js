// Final Comprehensive Assessment
// Covers all modules


test.AddQuestion( new Question ("com.scorm.owaspllm.final_q1",
                                "Regarding LLM Security Risks: Which of the following best describes Layer 4: Permission controls limiting what actions the model can take?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Human-in-the-loop for critical actions", "LLM10: Model Theft", "Layer 4: Permission controls limiting what actions the model can take", "LLM05: Supply Chain Vulnerabilities"),
                                "Layer 4: Permission controls limiting what actions the model can take",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.owaspllm.final_q2",
                                "Regarding LLM Security Risks: What role does Layer 5: Monitoring and alerting for anomalous model behavior play in LLM Security Risks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Model generates SQL that is executed directly", "Defense-in-Depth Strategy", "Unauthorized extraction of model weights or behavior", "Layer 5: Monitoring and alerting for anomalous model behavior"),
                                "Layer 5: Monitoring and alerting for anomalous model behavior",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.owaspllm.final_q3",
                                "Regarding LLM Security Risks: What is the primary purpose of Compromised models: Malicious model weights on Hugging Face or other hubs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Plugins with excessive permissions or poor input validation", "LLM10: Model Theft", "Command injection", "Compromised models: Malicious model weights on Hugging Face or other hubs"),
                                "Compromised models: Malicious model weights on Hugging Face or other hubs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.owaspllm.final_q4",
                                "Regarding LLM Security Risks: In the context of LLM Security Risks, what does Poisoned packages: Typosquatting on pip/npm for LLM-related libraries refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Poisoned packages: Typosquatting on pip/npm for LLM-related libraries", "Unauthorized extraction of model weights or behavior", "Incident response: Have a plan for prompt injection attacks and data leaks", "Limit tool call depth and count"),
                                "Poisoned packages: Typosquatting on pip/npm for LLM-related libraries",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.owaspllm.final_q5",
                                "What is the difference between direct and indirect prompt injection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Direct occurs via user input; indirect occurs via external data sources (websites, docs)", "Direct is more dangerous", "Indirect only happens in older models", "There is no difference"),
                                "Direct occurs via user input; indirect occurs via external data sources (websites, docs)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.owaspllm.final_q6",
                                "Which risk involves an LLM revealing its own system instructions or internal secrets?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LLM01: Prompt Injection", "LLM06: Sensitive Information Disclosure", "LLM04: Model Denial of Service", "LLM09: Overreliance"),
                                "LLM06: Sensitive Information Disclosure",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.owaspllm.final_q7",
                                "What is the best defense against LLM02: Insecure Output Handling?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using a larger model", "Treating LLM output as untrusted user input and performing rigorous sanitization and encoding", "Asking the model to be safe", "Blocking all user input"),
                                "Treating LLM output as untrusted user input and performing rigorous sanitization and encoding",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.owaspllm.final_q8",
                                "What does LLM08: Excessive Agency refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("An AI model that is too intelligent", "Giving an AI agent too many tools or broad permissions without human oversight", "The high cost of running LLM models", "The risk of models being stolen"),
                                "Giving an AI agent too many tools or broad permissions without human oversight",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.owaspllm.final_q9",
                                "Which practice helps prevent LLM04: Model Denial of Service?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increasing the GPU temperature", "Implementing strict token limits and rate limiting for all users", "Allowing unlimited context windows", "Removing all security filters"),
                                "Implementing strict token limits and rate limiting for all users",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.owaspllm.final_q10",
                                "What is 'Model Theft' in the context of LLMs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Stealing a physical laptop running AI software", "Unauthorized extraction or exfiltration of model weights, datasets, or proprietary prompts", "A user refusing to pay their API bill", "The model losing its ability to generate text"),
                                "Unauthorized extraction or exfiltration of model weights, datasets, or proprietary prompts",
                                "obj_final_assessment")
                );