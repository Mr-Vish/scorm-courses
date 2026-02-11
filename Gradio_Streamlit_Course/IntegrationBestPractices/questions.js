test.AddQuestion( new Question ("com.scorm.integration.module3.q1",
                                "What is the primary purpose of RAG (Retrieval-Augmented Generation) in GenAI applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To make responses faster", "To combine information retrieval with LLM generation for accurate, context-aware responses", "To reduce API costs", "To improve UI design"),
                                "To combine information retrieval with LLM generation for accurate, context-aware responses",
                                "obj_integration_practices")
                );

test.AddQuestion( new Question ("com.scorm.integration.module3.q2",
                                "Which LangChain component is used to split documents into manageable chunks for RAG?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("DocumentSplitter", "RecursiveCharacterTextSplitter", "ChunkManager", "TextDivider"),
                                "RecursiveCharacterTextSplitter",
                                "obj_integration_practices")
                );

test.AddQuestion( new Question ("com.scorm.integration.module3.q3",
                                "What is the recommended approach for storing API keys in production applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcode them in the script", "Store in a public GitHub repository", "Use environment variables and secrets management", "Include them in requirements.txt"),
                                "Use environment variables and secrets management",
                                "obj_integration_practices")
                );

test.AddQuestion( new Question ("com.scorm.integration.module3.q4",
                                "What is the purpose of implementing retry logic with exponential backoff in LLM API calls?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To make requests faster", "To handle transient failures gracefully and avoid overwhelming the API", "To reduce costs", "To improve response quality"),
                                "To handle transient failures gracefully and avoid overwhelming the API",
                                "obj_integration_practices")
                );

test.AddQuestion( new Question ("com.scorm.integration.module3.q5",
                                "Which library is commonly used for counting tokens in text before sending to LLM APIs?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("tokenizer", "tiktoken", "textcount", "llmcount"),
                                "tiktoken",
                                "obj_integration_practices")
                );

test.AddQuestion( new Question ("com.scorm.integration.module3.q6",
                                "What is the optimal chunk size range for RAG implementations according to best practices?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("50-100 tokens", "500-1000 tokens", "2000-3000 tokens", "5000+ tokens"),
                                "500-1000 tokens",
                                "obj_integration_practices")
                );

test.AddQuestion( new Question ("com.scorm.integration.module3.q7",
                                "Which technique combines semantic search and keyword search for better retrieval in RAG?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Dual search", "Hybrid search", "Combined search", "Mixed retrieval"),
                                "Hybrid search",
                                "obj_integration_practices")
                );

test.AddQuestion( new Question ("com.scorm.integration.module3.q8",
                                "What is the primary advantage of using Gradio over Streamlit for ML demos?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Better data visualization", "Automatic REST API generation", "More complex layouts", "Better state management"),
                                "Automatic REST API generation",
                                "obj_integration_practices")
                );

test.AddQuestion( new Question ("com.scorm.integration.module3.q9",
                                "Which OpenAI API should be used to check content for policy violations before processing?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("chat.completions", "moderations", "embeddings", "validations"),
                                "moderations",
                                "obj_integration_practices")
                );

test.AddQuestion( new Question ("com.scorm.integration.module3.q10",
                                "What is the main benefit of using async operations in GenAI applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced costs", "Better concurrency and handling of multiple requests", "Improved accuracy", "Simpler code"),
                                "Better concurrency and handling of multiple requests",
                                "obj_integration_practices")
                );