// Final Comprehensive Assessment - 25 Questions
// Covers all modules: Gradio Fundamentals, Streamlit Dashboards, Integration & Best Practices, Pros & Cons

// Gradio Fundamentals (6 questions)
test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q1",
                                "What is the main advantage of Gradio's function-based approach for building ML interfaces?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Better performance", "Rapid prototyping with minimal code", "More customization options", "Better security"),
                                "Rapid prototyping with minimal code",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q2",
                                "Which Gradio API provides more control over custom layouts and complex interactions?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Interface API", "Blocks API", "Layout API", "Custom API"),
                                "Blocks API",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q3",
                                "In Gradio's ChatInterface, what format does the history parameter use?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("A string of concatenated messages", "A list of [user_message, assistant_message] pairs", "A dictionary with timestamps", "A JSON object"),
                                "A list of [user_message, assistant_message] pairs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q4",
                                "What is automatically generated for every Gradio application?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("A database schema", "A REST API", "A mobile app", "A documentation site"),
                                "A REST API",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q5",
                                "Which parameter enables handling multiple concurrent users in Gradio?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("demo.concurrent()", "demo.queue()", "demo.multiuser()", "demo.scale()"),
                                "demo.queue()",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q6",
                                "What is the recommended platform for deploying Gradio applications for free?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("AWS Lambda", "Hugging Face Spaces", "Google Cloud Run", "Azure Functions"),
                                "Hugging Face Spaces",
                                "obj_final_assessment")
                );

// Streamlit Dashboards (6 questions)
test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q7",
                                "What is the fundamental characteristic of Streamlit's execution model?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses event-driven architecture", "It reruns the entire script on every interaction", "It uses a virtual DOM", "It compiles to JavaScript"),
                                "It reruns the entire script on every interaction",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q8",
                                "Which Streamlit feature is essential for maintaining data across script reruns?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("st.cache", "st.session_state", "st.memory", "st.global"),
                                "st.session_state",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q9",
                                "What decorator should be used to cache API clients in Streamlit?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@st.cache", "@st.cache_resource", "@st.cache_data", "@st.memo"),
                                "@st.cache_resource",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q10",
                                "How do you create columns with a 2:1 width ratio in Streamlit?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("st.columns(2, 1)", "st.columns([2, 1])", "st.layout([2, 1])", "st.create_columns(2, 1)"),
                                "st.columns([2, 1])",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q11",
                                "Where should API keys be stored in Streamlit applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("In the main script", "In .streamlit/secrets.toml", "In requirements.txt", "In the README file"),
                                "In .streamlit/secrets.toml",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q12",
                                "What function displays streaming chat responses in Streamlit?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("st.stream()", "st.write_stream()", "st.display_stream()", "st.chat_stream()"),
                                "st.write_stream()",
                                "obj_final_assessment")
                );

// Integration & Best Practices (8 questions)
test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q13",
                                "What does RAG stand for in the context of GenAI applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Rapid Application Generation", "Retrieval-Augmented Generation", "Random Access Gateway", "Resource Allocation Graph"),
                                "Retrieval-Augmented Generation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q14",
                                "Which LangChain component splits documents into chunks for RAG?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("DocumentSplitter", "RecursiveCharacterTextSplitter", "ChunkManager", "TextProcessor"),
                                "RecursiveCharacterTextSplitter",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q15",
                                "What is the recommended chunk size range for RAG implementations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("50-100 tokens", "500-1000 tokens", "2000-3000 tokens", "5000+ tokens"),
                                "500-1000 tokens",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q16",
                                "Which library is used for counting tokens before sending to LLM APIs?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("tokencount", "tiktoken", "llmcount", "textcount"),
                                "tiktoken",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q17",
                                "What is the purpose of exponential backoff in retry logic?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "To gradually increase wait time between retries to avoid overwhelming the API", "To improve response quality", "To cache responses"),
                                "To gradually increase wait time between retries to avoid overwhelming the API",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q18",
                                "Which OpenAI API endpoint is used for content moderation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("chat.completions", "moderations", "embeddings", "validations"),
                                "moderations",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q19",
                                "What technique combines semantic and keyword search in RAG?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Dual search", "Hybrid search", "Combined retrieval", "Mixed search"),
                                "Hybrid search",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q20",
                                "What is the main benefit of using async operations in GenAI applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower costs", "Better concurrency and handling of multiple requests", "Improved accuracy", "Simpler code"),
                                "Better concurrency and handling of multiple requests",
                                "obj_final_assessment")
                );

// Pros & Cons and Decision Making (5 questions)
test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q21",
                                "What is Gradio's primary advantage over Streamlit?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Better data visualization", "Automatic REST API generation and faster prototyping", "More complex layouts", "Better state management"),
                                "Automatic REST API generation and faster prototyping",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q22",
                                "What is Streamlit's primary advantage over Gradio?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster setup", "Built-in chat interface", "Rich layouts and advanced state management", "Automatic API generation"),
                                "Rich layouts and advanced state management",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q23",
                                "Which framework is better suited for building data dashboards with complex visualizations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Gradio", "Streamlit", "Both are equal", "Neither is suitable"),
                                "Streamlit",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q24",
                                "What is the free tier RAM limit for Streamlit Cloud?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("512 MB", "1 GB", "2 GB", "4 GB"),
                                "1 GB",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.gradio_streamlit.final.q25",
                                "According to best practices, what should neither Gradio nor Streamlit replace in production?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Database systems", "A production frontend framework", "Testing tools", "Version control"),
                                "A production frontend framework",
                                "obj_final_assessment")
                );