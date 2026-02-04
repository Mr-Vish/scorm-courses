test.AddQuestion( new Question ("q1",
                                "Which risk involves an attacker poisoning the data used to train or fine-tune an LLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Insecure Output Handling", "Training Data Poisoning", "Model Denial of Service", "Prompt Injection"),
                                "Training Data Poisoning",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "What is 'Insecure Output Handling'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When an application blindly trusts LLM output and passes it to sensitive functions (like exec() or innerHTML) without validation", "When the user forgets to save the chat", "When the model runs out of tokens", "When the server is slow"),
                                "When an application blindly trusts LLM output and passes it to sensitive functions (like exec() or innerHTML) without validation",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "How can you mitigate the risk of 'Model Denial of Service'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Buying more GPUs", "Disabling the internet", "Implementing rate limiting and resource quotas per user/tenant", "Using a smaller font"),
                                "Implementing rate limiting and resource quotas per user/tenant",
                                "obj_module_1")
                );
