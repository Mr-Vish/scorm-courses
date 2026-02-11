test.AddQuestion( new Question ("kg.advanced.q1",
                                "Which query language is used by Neo4j?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SQL", "Cypher", "Gremlin", "SPARQL"),
                                "Cypher",
                                "obj_advanced_applications")
                );

test.AddQuestion( new Question ("kg.advanced.q2",
                                "What is the main advantage of Graph RAG over Vector RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower cost", "Faster queries", "Better for multi-hop relational queries and structured reasoning", "Simpler implementation"),
                                "Better for multi-hop relational queries and structured reasoning",
                                "obj_advanced_applications")
                );

test.AddQuestion( new Question ("kg.advanced.q3",
                                "Which graph database is a managed AWS service?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Neo4j", "Amazon Neptune", "FalkorDB", "Kuzu"),
                                "Amazon Neptune",
                                "obj_advanced_applications")
                );

test.AddQuestion( new Question ("kg.advanced.q4",
                                "In Graph RAG, what is the first step when processing a user question?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Generate the answer", "Extract entities from the question", "Store results", "Create embeddings"),
                                "Extract entities from the question",
                                "obj_advanced_applications")
                );

test.AddQuestion( new Question ("kg.advanced.q5",
                                "What is the purpose of creating indexes in a graph database?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce storage costs", "To improve query performance on frequently accessed properties", "To enable backups", "To validate data"),
                                "To improve query performance on frequently accessed properties",
                                "obj_advanced_applications")
                );

test.AddQuestion( new Question ("kg.advanced.q6",
                                "What is a hybrid Graph RAG approach?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using multiple graph databases", "Combining graph traversal with vector similarity search", "Using multiple LLM models", "Mixing structured and unstructured data"),
                                "Combining graph traversal with vector similarity search",
                                "obj_advanced_applications")
                );

test.AddQuestion( new Question ("kg.advanced.q7",
                                "Which component is used for distributed task processing in production knowledge graph systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Neo4j", "Celery with Redis", "OpenAI API", "FastAPI"),
                                "Celery with Redis",
                                "obj_advanced_applications")
                );

test.AddQuestion( new Question ("kg.advanced.q8",
                                "What is the benefit of using read replicas in graph database deployment?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduced storage costs", "Improved write performance", "Load balancing for read queries and better scalability", "Automatic backups"),
                                "Load balancing for read queries and better scalability",
                                "obj_advanced_applications")
                );
