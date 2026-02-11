test.AddQuestion( new Question ("com.scorm.springboot.interactions.data_1",
                                "Which annotation marks a class as a JPA entity?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Entity", "@Table", "@Component", "@Repository"),
                                "@Entity",
                                "obj_datapersistence")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.data_2",
                                "What interface should repositories extend for automatic CRUD operations?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("CrudRepository", "JpaRepository", "DataRepository", "BaseRepository"),
                                "JpaRepository",
                                "obj_datapersistence")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.data_3",
                                "H2 is an in-memory database suitable for development and testing",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_datapersistence")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.data_4",
                                "Which annotation is used to mark the primary key field?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@Id", "@PrimaryKey", "@Key", "@Identifier"),
                                "@Id",
                                "obj_datapersistence")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.data_5",
                                "What does JPA stand for?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Java Persistence API", "Java Programming Architecture", "Java Platform Application", "Java Process Automation"),
                                "Java Persistence API",
                                "obj_datapersistence")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.data_6",
                                "@GeneratedValue annotation is used to auto-generate primary key values",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_datapersistence")
                );