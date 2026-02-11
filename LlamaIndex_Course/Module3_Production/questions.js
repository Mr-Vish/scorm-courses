test.AddQuestion( new Question ("q1_m3",
                                "Which component typically dominates latency in RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Query embedding", "Vector search", "LLM generation", "Network overhead"),
                                "LLM generation",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q2_m3",
                                "What is the primary benefit of semantic caching over traditional exact-match caching?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It requires less storage", "It matches queries based on meaning, enabling hits for paraphrased questions", "It is faster to implement", "It eliminates the need for embeddings"),
                                "It matches queries based on meaning, enabling hits for paraphrased questions",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3_m3",
                                "Streaming responses reduces perceived latency by delivering tokens as they are generated",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q4_m3",
                                "Which cost optimization strategy involves routing simple queries to cheaper models and complex queries to expensive models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Batch processing", "Model tiering", "Context minimization", "Caching"),
                                "Model tiering",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q5_m3",
                                "What is a prompt injection attack in the context of RAG systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A hardware failure in the server", "Malicious queries that manipulate the LLM into ignoring system instructions", "A network connectivity issue", "A database corruption error"),
                                "Malicious queries that manipulate the LLM into ignoring system instructions",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q6_m3",
                                "Which mitigation strategy helps prevent data leakage through retrieval?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using larger embedding models", "Implementing metadata-based access control and filtering", "Increasing chunk sizes", "Disabling caching"),
                                "Implementing metadata-based access control and filtering",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q7_m3",
                                "PII (Personally Identifiable Information) should be detected and redacted or masked before indexing sensitive documents",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q8_m3",
                                "Under GDPR, what right allows users to request deletion of their personal data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Right to access", "Right to rectification", "Right to be forgotten (Right to deletion)", "Right to portability"),
                                "Right to be forgotten (Right to deletion)",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q9_m3",
                                "Which access control model defines policies based on attributes of users, documents, and context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)", "Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)"),
                                "Attribute-Based Access Control (ABAC)",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q10_m3",
                                "Recall@k measures the percentage of relevant documents that appear in the top-k retrieved results",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q11_m3",
                                "What does the 'faithfulness' metric measure in RAG answer quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("How fast the answer is generated", "Whether the answer accurately reflects retrieved context without hallucination", "How many words are in the answer", "Whether the user liked the answer"),
                                "Whether the answer accurately reflects retrieved context without hallucination",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q12_m3",
                                "Which evaluation methodology involves deploying two system variants to different user groups and comparing performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Offline evaluation", "A/B testing", "Unit testing", "Load testing"),
                                "A/B testing",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q13_m3",
                                "Task completion rate measures whether users successfully accomplish their intended goals using the RAG system",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q14_m3",
                                "What is the purpose of failure analysis in continuous improvement processes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To assign blame for system errors", "To review low-rated responses and categorize failure modes for targeted improvements", "To reduce system costs", "To increase embedding dimensions"),
                                "To review low-rated responses and categorize failure modes for targeted improvements",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q15_m3",
                                "Knowledge base maintenance includes regular content audits, gap analysis, and quality assurance for new content",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_module_3")
                );
