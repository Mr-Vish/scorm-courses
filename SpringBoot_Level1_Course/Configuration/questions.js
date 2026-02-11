test.AddQuestion( new Question ("com.scorm.springboot.interactions.config_1",
                                "What is the default port for Spring Boot applications?",
                                QUESTION_TYPE_NUMERIC,
                                null,
                                8080,
                                "obj_configuration")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.config_2",
                                "Which annotation is used to inject property values?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Value", "@Property", "@Config", "@Inject"),
                                "@Value",
                                "obj_configuration")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.config_3",
                                "Spring Boot can create executable JAR files with embedded servers",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_configuration")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.config_4",
                                "Which annotation is used to define configuration classes?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Configuration", "@Config", "@Settings", "@Properties"),
                                "@Configuration",
                                "obj_configuration")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.config_5",
                                "What is the purpose of @Profile annotation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Activates beans for specific environments", "Profiles application performance", "Creates user profiles", "Manages security profiles"),
                                "Activates beans for specific environments",
                                "obj_configuration")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.config_6",
                                "@SpringBootTest annotation is used for integration testing",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_configuration")
                );