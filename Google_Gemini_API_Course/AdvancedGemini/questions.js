test.AddQuestion( new Question ("gemini_adv_1",
                                "What must you check before generating content with an uploaded video file?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The file size in bytes", "The video resolution and frame rate", "The file.state.name to ensure processing is complete", "The video duration in seconds"),
                                "The file.state.name to ensure processing is complete",
                                "obj_gemini_advanced")
                );

test.AddQuestion( new Question ("gemini_adv_2",
                                "What is the maximum file size for video uploads to the Gemini API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("500MB", "1GB", "2GB", "5GB"),
                                "2GB",
                                "obj_gemini_advanced")
                );

test.AddQuestion( new Question ("gemini_adv_3",
                                "In function calling, what does the model return when it wants to execute a function?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The function result directly", "A structured function call request with name and arguments", "An error message", "A confirmation prompt"),
                                "A structured function call request with name and arguments",
                                "obj_gemini_advanced")
                );

test.AddQuestion( new Question ("gemini_adv_4",
                                "What is the correct workflow order for function calling in Gemini?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Execute function → Define functions → Model decision → Return results", "Define functions → User query → Model decision → Execute function → Return results → Final response", "User query → Execute function → Model decision → Define functions", "Model decision → Define functions → Execute function → User query"),
                                "Define functions → User query → Model decision → Execute function → Return results → Final response",
                                "obj_gemini_advanced")
                );

test.AddQuestion( new Question ("gemini_adv_5",
                                "What is the primary benefit of Google Search grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster response generation", "Reduces hallucinations by grounding responses in real-time web data with citations", "Lower API costs", "Better code generation capabilities"),
                                "Reduces hallucinations by grounding responses in real-time web data with citations",
                                "obj_gemini_advanced")
                );

test.AddQuestion( new Question ("gemini_adv_6",
                                "Which function is used to delete an uploaded file from Gemini's servers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("genai.remove_file()", "genai.delete_file()", "genai.clear_file()", "genai.drop_file()"),
                                "genai.delete_file()",
                                "obj_gemini_advanced")
                );

test.AddQuestion( new Question ("gemini_adv_7",
                                "What type of analysis can Gemini perform on video content that goes beyond simple transcription?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only audio transcription", "Understanding visual elements, audio content, on-screen text, and relationships between modalities simultaneously", "Only frame-by-frame image analysis", "Only subtitle extraction"),
                                "Understanding visual elements, audio content, on-screen text, and relationships between modalities simultaneously",
                                "obj_gemini_advanced")
                );

test.AddQuestion( new Question ("gemini_adv_8",
                                "In function calling, what should your application do when the model requests a function execution?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ignore the request and generate a response", "Execute the function and send the result back to the model using FunctionResponse", "Ask the user for permission first", "Automatically retry the request"),
                                "Execute the function and send the result back to the model using FunctionResponse",
                                "obj_gemini_advanced")
                );

test.AddQuestion( new Question ("gemini_adv_9",
                                "What is a recommended use case for Gemini's long context window in codebase analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Analyzing single functions only", "Uploading multiple code files to analyze entire codebase architecture and identify issues", "Only syntax checking", "Formatting code files"),
                                "Uploading multiple code files to analyze entire codebase architecture and identify issues",
                                "obj_gemini_advanced")
                );

test.AddQuestion( new Question ("gemini_adv_10",
                                "What information can be accessed from grounding_metadata after using Google Search grounding?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the search query used", "Source URLs and grounding chunks that cite where information came from", "The number of search results", "The search ranking algorithm"),
                                "Source URLs and grounding chunks that cite where information came from",
                                "obj_gemini_advanced")
                );

test.AddQuestion( new Question ("gemini_adv_11",
                                "When defining function parameters, what must be specified in the Schema?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the parameter names", "Type, description, and optionally enum values or required fields", "Only default values", "Only the return type"),
                                "Type, description, and optionally enum values or required fields",
                                "obj_gemini_advanced")
                );

test.AddQuestion( new Question ("gemini_adv_12",
                                "What is parallel function calling in Gemini?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Calling the same function multiple times", "The model requesting multiple different functions to be executed simultaneously", "Running functions on multiple servers", "Executing functions in a loop"),
                                "The model requesting multiple different functions to be executed simultaneously",
                                "obj_gemini_advanced")
                );
