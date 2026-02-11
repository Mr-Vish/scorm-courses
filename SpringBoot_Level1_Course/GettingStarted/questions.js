test.AddQuestion( new Question ("com.scorm.springboot.interactions.getting_1",
                                "What is the official tool for generating Spring Boot projects?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Spring Generator", "Spring Initializr", "Spring Creator", "Spring Builder"),
                                "Spring Initializr",
                                "obj_gettingstarted")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.getting_2",
                                "Which three annotations does @SpringBootApplication combine?",
                                QUESTION_TYPE_CHOICE,
                                new Array("@Configuration, @EnableAutoConfiguration, @ComponentScan", "@Service, @Repository, @Controller", "@Entity, @Table, @Column", "@RestController, @RequestMapping, @Autowired"),
                                "@Configuration, @EnableAutoConfiguration, @ComponentScan",
                                "obj_gettingstarted")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.getting_3",
                                "Spring Boot DevTools improves development productivity",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_gettingstarted")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.getting_4",
                                "What is the default port for Spring Boot web applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("8080", "8000", "3000", "9090"),
                                "8080",
                                "obj_gettingstarted")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.getting_5",
                                "Which build tool is commonly used with Spring Boot?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Maven", "Gradle", "Both Maven and Gradle", "Ant"),
                                "Both Maven and Gradle",
                                "obj_gettingstarted")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.getting_6",
                                "Spring Boot applications can be packaged as executable JAR files",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_gettingstarted")
                );