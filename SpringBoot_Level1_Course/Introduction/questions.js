test.AddQuestion( new Question ("com.scorm.springboot.interactions.intro_1",
                                "What does Spring Boot's auto-configuration feature do?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Requires manual XML configuration", "Automatically configures applications based on classpath dependencies", "Only works with specific IDEs", "Disables all Spring features"),
                                "Automatically configures applications based on classpath dependencies",
                                "obj_introduction")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.intro_2",
                                "Spring Boot applications include embedded servers by default",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_introduction")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.intro_3",
                                "Which of these is a key benefit of Spring Boot?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Requires extensive XML configuration", "Opinionated setup with sensible defaults", "Only supports MySQL databases", "Cannot be used for web applications"),
                                "Opinionated setup with sensible defaults",
                                "obj_introduction")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.intro_4",
                                "What is the main annotation used to mark a Spring Boot application class?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@SpringApplication", "@SpringBootApplication", "@BootApplication", "@Application"),
                                "@SpringBootApplication",
                                "obj_introduction")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.intro_5",
                                "Spring Boot eliminates the need for application servers",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_introduction")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.intro_6",
                                "Which embedded server does Spring Boot use by default?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Jetty", "Tomcat", "Undertow", "Netty"),
                                "Tomcat",
                                "obj_introduction")
                );