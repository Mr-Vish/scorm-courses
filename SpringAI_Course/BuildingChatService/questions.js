test.AddQuestion( new Question ("com.scorm.springai.interactions.build_1",
                                "Which Maven artifact provides Spring AI support for OpenAI?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("spring-boot-starter-ai", "spring-ai-openai-spring-boot-starter", "openai-java-client", "spring-openai-connector"),
                                "spring-ai-openai-spring-boot-starter",
                                "obj_building")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.build_2",
                                "The ChatClient is automatically configured by Spring Boot when you add the Spring AI starter dependency",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_building")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.build_3",
                                "Where should you store your OpenAI API key in a Spring Boot application?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("In the Java source code", "In application.properties or application.yml", "In a public GitHub repository", "In the pom.xml file"),
                                "In application.properties or application.yml",
                                "obj_building")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.build_4",
                                "What does the call() method do in the ChatClient fluent API?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Closes the application", "Executes the API call to the AI model", "Deletes the prompt", "Restarts the server"),
                                "Executes the API call to the AI model",
                                "obj_building")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.build_5",
                                "The @RestController annotation combines @Controller and @ResponseBody",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_building")
                );
                
test.AddQuestion( new Question ("com.scorm.springai.interactions.build_6",
                                "Which method extracts the plain text content from the AI response?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("getText()", "content()", "getResponse()", "extract()"),
                                "content()",
                                "obj_building")
                );
