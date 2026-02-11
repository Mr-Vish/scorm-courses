test.AddQuestion( new Question ("com.scorm.gv.uuid_1",
                                "What is the collision probability of UUIDs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1 in 1000", "1 in 1 million", "Effectively zero (1 in 2^122)", "50%"),
                                "Effectively zero (1 in 2^122)",
                                "obj_uuid")
                );

test.AddQuestion( new Question ("com.scorm.gv.uuid_2",
                                "What is the main disadvantage of using string UUIDs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They cause collisions", "Larger storage size (36 bytes vs 8 bytes for Long)", "They don't work with JPA", "They're too short"),
                                "Larger storage size (36 bytes vs 8 bytes for Long)",
                                "obj_uuid")
                );

test.AddQuestion( new Question ("com.scorm.gv.uuid_3",
                                "How can you optimize UUID storage performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Don't use UUIDs", "Store as BINARY(16) instead of VARCHAR(36)", "Use shorter UUIDs", "Store in separate table"),
                                "Store as BINARY(16) instead of VARCHAR(36)",
                                "obj_uuid")
                );

test.AddQuestion( new Question ("com.scorm.gv.uuid_4",
                                "When should you use UUIDs over SEQUENCE strategy?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Always, in every case", "When database doesn't support sequences or in microservices", "Never, SEQUENCE is always better", "Only in development"),
                                "When database doesn't support sequences or in microservices",
                                "obj_uuid")
                );

test.AddQuestion( new Question ("com.scorm.gv.uuid_5",
                                "What annotation generates UUIDs in Hibernate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("@GeneratedValue(strategy=UUID)", "@GenericGenerator(strategy=\"uuid2\")", "@UUIDGenerator", "@AutoUUID"),
                                "@GenericGenerator(strategy=\"uuid2\")",
                                "obj_uuid")
                );

test.AddQuestion( new Question ("com.scorm.gv.uuid_6",
                                "Can UUIDs be generated offline before database insert?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No, database must generate them", "Yes, they're generated in application layer", "Only with special database support", "Only in production"),
                                "Yes, they're generated in application layer",
                                "obj_uuid")
                );
