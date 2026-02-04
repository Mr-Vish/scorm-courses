test.AddQuestion( new Question ("q1",
                                "Which component of an LLM gateway is responsible for verifying the identity of the calling application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Load Balancer", "Response Cache", "Authentication Layer", "Logging Service"),
                                "Authentication Layer",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "What is 'PII Redaction' in the context of an LLM gateway?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Adding more personal data to the prompt", "Automatically identifying and masking sensitive personal information before sending data to an external LLM provider", "Deleting the LLM weights", "A type of database indexing"),
                                "Automatically identifying and masking sensitive personal information before sending data to an external LLM provider",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "Why should an enterprise use a private LLM gateway instead of direct API calls?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make the LLM smarter", "Because direct API calls are illegal", "To avoid using any electricity", "To centralize auditing, cost control, and security policy enforcement"),
                                "To centralize auditing, cost control, and security policy enforcement",
                                "obj_module_1")
                );
