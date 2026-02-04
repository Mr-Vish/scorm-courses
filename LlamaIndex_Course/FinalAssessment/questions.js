test.AddQuestion( new Question ("q1",
                                "Which component in LlamaIndex is responsible for taking a user query and retrieving relevant nodes from an index?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Metadata Extractor", "Query Engine", "Response Synthesizer", "Data Connector"),
                                "Query Engine",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "What are 'Data Connectors' (LlamaHub) used for in LlamaIndex?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To ingest data from various sources like PDFs, APIs, or databases", "To encrypt user passwords", "To connect to a power supply", "To speed up the LLM inference"),
                                "To ingest data from various sources like PDFs, APIs, or databases",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "In LlamaIndex, what does the 'Response Synthesizer' do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Calculates the embeddings for text", "Deletes redundant data", "Generates the final natural language answer using retrieved context", "Splits documents into chunks"),
                                "Generates the final natural language answer using retrieved context",
                                "obj_module_1")
                );
