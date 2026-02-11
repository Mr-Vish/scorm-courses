test.AddQuestion( new Question ("com.scorm.gradio.module1.q1",
                                "What is the primary advantage of using Gradio's ChatInterface over building a custom chat UI?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("It's faster to load", "It automatically handles conversation history and message formatting", "It uses less memory", "It supports more languages"),
                                "It automatically handles conversation history and message formatting",
                                "obj_gradio_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gradio.module1.q2",
                                "Which Python keyword enables real-time token streaming in Gradio functions?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("return", "yield", "stream", "async"),
                                "yield",
                                "obj_gradio_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gradio.module1.q3",
                                "What is the correct way to add multiple input components to a Gradio Interface?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Pass a single component", "Pass a list of components", "Use the add_input() method", "Define them in a separate file"),
                                "Pass a list of components",
                                "obj_gradio_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gradio.module1.q4",
                                "Which Gradio component is most appropriate for uploading PDF documents in a RAG application?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Textbox", "Image", "File", "Upload"),
                                "File",
                                "obj_gradio_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gradio.module1.q5",
                                "What does the Blocks API provide that the basic Interface API does not?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster performance", "Custom layouts and advanced interactivity", "Better security", "Automatic deployment"),
                                "Custom layouts and advanced interactivity",
                                "obj_gradio_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gradio.module1.q6",
                                "Where is the automatic REST API endpoint located for every Gradio application?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("/api/predict", "/rest/api", "/endpoint", "/service"),
                                "/api/predict",
                                "obj_gradio_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gradio.module1.q7",
                                "What is the recommended way to handle API keys in Gradio applications deployed to Hugging Face Spaces?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcode them in the script", "Store them in a text file", "Use environment variables and repository secrets", "Pass them as URL parameters"),
                                "Use environment variables and repository secrets",
                                "obj_gradio_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gradio.module1.q8",
                                "Which parameter should be configured to handle multiple concurrent users in a Gradio app?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("demo.scale()", "demo.queue()", "demo.concurrent()", "demo.parallel()"),
                                "demo.queue()",
                                "obj_gradio_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gradio.module1.q9",
                                "In a ChatInterface function, what does the history parameter contain?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("A string of all previous messages", "A list of [user_message, assistant_message] pairs", "A dictionary with timestamps", "Only the last message"),
                                "A list of [user_message, assistant_message] pairs",
                                "obj_gradio_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.gradio.module1.q10",
                                "What is the purpose of the additional_inputs parameter in ChatInterface?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To add more chat participants", "To provide extra controls like temperature or system prompts", "To enable file uploads", "To add authentication"),
                                "To provide extra controls like temperature or system prompts",
                                "obj_gradio_fundamentals")
                );