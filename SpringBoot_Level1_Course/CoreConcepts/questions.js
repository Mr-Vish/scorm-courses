test.AddQuestion( new Question ("com.scorm.springboot.interactions.core_1",
                                "What does IoC stand for in Spring?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Internet of Code", "Inversion of Control", "Integration of Components", "Interface of Classes"),
                                "Inversion of Control",
                                "obj_coreconcepts")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.core_2",
                                "Which injection type ensures dependencies are present at object construction?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Field injection", "Constructor injection", "Setter injection", "Method injection"),
                                "Constructor injection",
                                "obj_coreconcepts")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.core_3",
                                "The @Repository annotation is used for data access layer components",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_coreconcepts")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.core_4",
                                "What is the default bean scope in Spring Boot?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Prototype", "Singleton", "Request", "Session"),
                                "Singleton",
                                "obj_coreconcepts")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.core_5",
                                "Which annotation is used to mark a class as a Spring component?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Component", "@Bean", "@Inject", "@Resource"),
                                "@Component",
                                "obj_coreconcepts")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.core_6",
                                "@Autowired annotation can be used on constructors, fields, and methods",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_coreconcepts")
                );