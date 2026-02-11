// Final Comprehensive Assessment - 25 Unique Questions
// Covers all modules: KG Fundamentals, LLM Construction, Advanced Applications

// Module 1: Knowledge Graph Fundamentals (8 questions)
test.AddQuestion( new Question ("kg.final.fund1",
                                "What are the three components of a knowledge graph triple?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Entity, Property, Value", "Subject, Predicate, Object", "Node, Edge, Attribute", "Source, Relation, Destination"),
                                "Subject, Predicate, Object",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.fund2",
                                "Which standard is used by W3C for representing information as triples?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Property Graph", "RDF (Resource Description Framework)", "JSON-LD", "GraphQL"),
                                "RDF (Resource Description Framework)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.fund3",
                                "What is the purpose of an ontology in knowledge graphs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To store data efficiently", "To define entity types, properties, and relationships", "To query the graph", "To visualize relationships"),
                                "To define entity types, properties, and relationships",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.fund4",
                                "Which naming convention is recommended for entity types?",
                                QUESTION_TYPE_CHOICE,
                                new Array("lowercase", "UPPER_SNAKE_CASE", "PascalCase", "camelCase"),
                                "PascalCase",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.fund5",
                                "What is a qualified relationship in knowledge graphs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A relationship with no properties", "A relationship with additional context through properties", "A bidirectional relationship", "A relationship between identical entity types"),
                                "A relationship with additional context through properties",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.fund6",
                                "Which constraint type ensures a property value is unique across all entities?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Existence constraint", "Uniqueness constraint", "Type constraint", "Range constraint"),
                                "Uniqueness constraint",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.fund7",
                                "What is the main difference between relational databases and knowledge graphs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Storage capacity", "Relationships are first-class citizens in knowledge graphs", "Query speed", "Data types supported"),
                                "Relationships are first-class citizens in knowledge graphs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.fund8",
                                "What does provenance tracking in knowledge graphs help with?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Improving query speed", "Documenting the source and confidence of information", "Reducing storage costs", "Simplifying schema design"),
                                "Documenting the source and confidence of information",
                                "obj_final_assessment")
                );

// Module 2: LLM-Based Construction (9 questions)
test.AddQuestion( new Question ("kg.final.llm1",
                                "What is the main benefit of using structured output formats like JSON mode in LLM extraction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster processing", "Ensures consistent and parseable output format", "Lower API costs", "Better accuracy"),
                                "Ensures consistent and parseable output format",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.llm2",
                                "Why is chunking with overlap important for long document processing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "To maintain relationship continuity across chunk boundaries", "To improve extraction speed", "To simplify implementation"),
                                "To maintain relationship continuity across chunk boundaries",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.llm3",
                                "What is the purpose of entity resolution in knowledge graph construction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To extract entities faster", "To identify and merge duplicate entities referring to the same object", "To validate entity types", "To create new entities"),
                                "To identify and merge duplicate entities referring to the same object",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.llm4",
                                "In an automated graph building pipeline, which step comes after extraction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Storage", "Validation", "Deduplication", "Visualization"),
                                "Validation",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.llm5",
                                "What is the role of schema specification in extraction prompts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce token usage", "To define allowed entity and relationship types for consistency", "To improve processing speed", "To enable caching"),
                                "To define allowed entity and relationship types for consistency",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.llm6",
                                "What is chain-of-thought prompting used for in extraction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reducing costs", "Guiding the LLM through step-by-step reasoning for complex extraction", "Faster processing", "Simpler implementation"),
                                "Guiding the LLM through step-by-step reasoning for complex extraction",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.llm7",
                                "What is self-consistency checking in LLM extraction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Checking for syntax errors", "Extracting multiple times and using majority voting", "Validating against schema", "Comparing with ground truth"),
                                "Extracting multiple times and using majority voting",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.llm8",
                                "Why should extraction results include confidence scores?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce storage", "To filter low-quality extractions and track reliability", "To improve speed", "To simplify queries"),
                                "To filter low-quality extractions and track reliability",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.llm9",
                                "What is the benefit of batch processing in knowledge graph construction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Simpler code", "Improved efficiency and reduced overhead", "Better accuracy", "Lower storage costs"),
                                "Improved efficiency and reduced overhead",
                                "obj_final_assessment")
                );

// Module 3: Advanced Applications (8 questions)
test.AddQuestion( new Question ("kg.final.adv1",
                                "What is the primary purpose of creating indexes in Neo4j?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To backup data", "To improve query performance on frequently accessed properties", "To reduce storage", "To enable replication"),
                                "To improve query performance on frequently accessed properties",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.adv2",
                                "In Cypher, what does the MERGE command do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deletes duplicate nodes", "Creates a node or relationship only if it doesn't exist", "Combines two graphs", "Updates all properties"),
                                "Creates a node or relationship only if it doesn't exist",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.adv3",
                                "What are the three main steps in a Graph RAG query?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Parse, store, retrieve", "Extract entities from question, retrieve graph context, generate answer", "Embed, search, rank", "Index, query, filter"),
                                "Extract entities from question, retrieve graph context, generate answer",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.adv4",
                                "What is the advantage of hybrid Graph RAG over pure graph retrieval?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower cost", "Combines structured relationships with semantic similarity", "Faster queries", "Simpler implementation"),
                                "Combines structured relationships with semantic similarity",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.adv5",
                                "Which technology is commonly used for distributed task processing in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Neo4j", "Celery with message brokers", "FastAPI", "GraphQL"),
                                "Celery with message brokers",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.adv6",
                                "What is the purpose of read replicas in graph database architecture?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To reduce costs", "To distribute read query load and improve scalability", "To enable backups", "To validate data"),
                                "To distribute read query load and improve scalability",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.adv7",
                                "What is query decomposition in Graph RAG?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Splitting queries across databases", "Breaking complex questions into simpler sub-questions", "Optimizing query performance", "Caching query results"),
                                "Breaking complex questions into simpler sub-questions",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("kg.final.adv8",
                                "Which metric is important for monitoring knowledge graph extraction quality?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Storage size", "Precision, recall, and F1 scores", "Query speed", "API response time"),
                                "Precision, recall, and F1 scores",
                                "obj_final_assessment")
                );
