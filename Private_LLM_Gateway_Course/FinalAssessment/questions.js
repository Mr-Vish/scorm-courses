// Final Comprehensive Assessment
// Covers all modules


test.AddQuestion( new Question ("com.scorm.llmgateway.final_q1",
                                "Regarding LLM Gateway Design: Which of the following is true regarding Rotate API keys: Implement automatic key rotation every 90 days?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Rate Limiting Strategies", "Enforce per-team/per-user limits", "Rotate API keys: Implement automatic key rotation every 90 days", "Cost-based limiting"),
                                "Rotate API keys: Implement automatic key rotation every 90 days",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.llmgateway.final_q2",
                                "Regarding LLM Gateway Design: Which of the following best describes Audit trail: Log all admin actions (key creation, limit changes, etc.)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Audit trail: Log all admin actions (key creation, limit changes, etc.)", "Token Bucket Rate Limiting", "Enforce per-team/per-user limits", "Rate Limiting Strategies"),
                                "Audit trail: Log all admin actions (key creation, limit changes, etc.)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.llmgateway.final_q3",
                                "Regarding LLM Gateway Design: In the context of LLM Gateway Design, what does Network isolation: Deploy the gateway in a private subnet with no direct internet access refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Network isolation: Deploy the gateway in a private subnet with no direct internet access", "OAuth2: Full SSO integration with corporate identity providers", "Authentication Patterns", "Basic Gateway with FastAPI"),
                                "Network isolation: Deploy the gateway in a private subnet with no direct internet access",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llmgateway.final_q4",
                                "Regarding LLM Gateway Design: What is a key characteristic of Receives requests, validates auth?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Receives requests, validates auth", "Gateway Architecture", "Authentication Patterns", "Tokens per minute (TPM)"),
                                "Receives requests, validates auth",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llmgateway.final_q5",
                                "Which open-source library is a standard for real-time PII identification and redaction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("TensorFlow", "Microsoft Presidio", "PyTorch", "Django"),
                                "Microsoft Presidio",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llmgateway.final_q6",
                                "What does TPM stand for in the context of AI resource management?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Total Processed Messages", "Tokens Per Minute", "Time Per Model", "Technical Project Manager"),
                                "Tokens Per Minute",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llmgateway.final_q7",
                                "Why should master API keys be stored in a dedicated secret manager like AWS Secrets Manager?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make them easier to remember", "To provide encryption, access logging, and automatic rotation while preventing code-level access", "Because it's required by OpenAI", "To increase the latency of the request"),
                                "To provide encryption, access logging, and automatic rotation while preventing code-level access",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llmgateway.final_q8",
                                "In a 'Hub-and-Spoke' gateway architecture, where is the gateway located?",
                                QUESTION_TYPE_CHOICE,
                                new Array("On the public internet", "On the user's laptop", "In a centralized, highly-available cluster within the organization's VPC", "Inside the AI provider's data center"),
                                "In a centralized, highly-available cluster within the organization's VPC",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llmgateway.final_q9",
                                "What is 'Model Aliasing' used for in a gateway?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Giving the AI a human personality", "Mapping a stable, custom name like 'company-smart-model' to a specific provider and version to allow for seamless upgrades", "Using a fake name when signing up for an API", "Translating prompts into different languages"),
                                "Mapping a stable, custom name like 'company-smart-model' to a specific provider and version to allow for seamless upgrades",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.llmgateway.final_q10",
                                "Which protocol is recommended for integrating a gateway with an enterprise Identity Provider (IDP)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FTP", "OIDC (OpenID Connect)", "SMTP", "Telnet"),
                                "OIDC (OpenID Connect)",
                                "obj_final_assessment")
                );