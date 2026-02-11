test.AddQuestion( new Question ("kg.fundamentals.q1",
                                "What is the fundamental unit of a knowledge graph?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Entity", "Relationship", "Triple (subject, predicate, object)", "Property"),
                                "Triple (subject, predicate, object)",
                                "obj_kg_fundamentals")
                );

test.AddQuestion( new Question ("kg.fundamentals.q2",
                                "Which data model allows properties on both nodes and relationships?",
                                QUESTION_TYPE_CHOICE,
                                new Array("RDF", "Property Graph Model", "Relational Model", "Document Model"),
                                "Property Graph Model",
                                "obj_kg_fundamentals")
                );

test.AddQuestion( new Question ("kg.fundamentals.q3",
                                "What is the primary advantage of knowledge graphs over relational databases for connected data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster writes", "Natural graph traversal without complex joins", "Smaller storage footprint", "Simpler schema design"),
                                "Natural graph traversal without complex joins",
                                "obj_kg_fundamentals")
                );

test.AddQuestion( new Question ("kg.fundamentals.q4",
                                "In schema design, what does 'domain' refer to in a relationship type definition?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The database where data is stored", "The source entity type of the relationship", "The property values allowed", "The query language used"),
                                "The source entity type of the relationship",
                                "obj_kg_fundamentals")
                );

test.AddQuestion( new Question ("kg.fundamentals.q5",
                                "Which naming convention is recommended for relationship types in knowledge graphs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("camelCase", "PascalCase", "UPPER_SNAKE_CASE", "lowercase"),
                                "UPPER_SNAKE_CASE",
                                "obj_kg_fundamentals")
                );

test.AddQuestion( new Question ("kg.fundamentals.q6",
                                "What is a reified relationship?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A relationship with no properties", "A relationship converted into an entity to hold additional properties and relationships", "A bidirectional relationship", "A relationship between two entities of the same type"),
                                "A relationship converted into an entity to hold additional properties and relationships",
                                "obj_kg_fundamentals")
                );

test.AddQuestion( new Question ("kg.fundamentals.q7",
                                "Which strategy helps maintain data quality by preventing duplicate entities?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Temporal partitioning", "Uniqueness constraints", "Composite indexes", "Schema versioning"),
                                "Uniqueness constraints",
                                "obj_kg_fundamentals")
                );

test.AddQuestion( new Question ("kg.fundamentals.q8",
                                "What is the purpose of tracking provenance in a knowledge graph?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve query performance", "To document the origin and confidence level of information", "To reduce storage costs", "To enable faster indexing"),
                                "To document the origin and confidence level of information",
                                "obj_kg_fundamentals")
                );
