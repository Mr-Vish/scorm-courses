test.AddQuestion( new Question ("q1",
                                "A company's search system returns irrelevant results for queries like 'AWS Lambda timeout error'. Which component would MOST likely improve this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increasing the RRF k parameter", "Adding query understanding with LLM to extract intent and entities", "Using only vector search", "Reducing the number of search results"),
                                "Adding query understanding with LLM to extract intent and entities",
                                "obj_final")
                );

test.AddQuestion( new Question ("q2",
                                "In multi-query retrieval, generating 3-5 query variations typically improves recall by what percentage?",
                                QUESTION_TYPE_CHOICE,
                                new Array("5-10%", "20-40%", "50-70%", "80-100%"),
                                "20-40%",
                                "obj_final")
                );

test.AddQuestion( new Question ("q3",
                                "Why are cross-encoders significantly slower than bi-encoders for search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They use larger models", "They encode query and document together rather than separately", "They require more memory", "They use older algorithms"),
                                "They encode query and document together rather than separately",
                                "obj_final")
                );

test.AddQuestion( new Question ("q4",
                                "Which AI-enhanced facet would be MOST useful for filtering customer support tickets by urgency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Category facet", "Date range facet", "Sentiment facet", "Entity facet"),
                                "Sentiment facet",
                                "obj_final")
                );

test.AddQuestion( new Question ("q5",
                                "A search system processes 50,000 queries per day. Based on cost-benefit analysis, what is the recommendation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Simple keyword search is sufficient", "Hybrid search provides good ROI", "Hybrid search is too expensive", "Only vector search is needed"),
                                "Hybrid search provides good ROI",
                                "obj_final")
                );

test.AddQuestion( new Question ("q6",
                                "What is the typical storage cost increase when implementing hybrid search compared to keyword-only search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No increase", "2-3x increase", "5-10x increase", "20x increase"),
                                "2-3x increase",
                                "obj_final")
                );

test.AddQuestion( new Question ("q7",
                                "In a production system, which optimization technique would MOST reduce query embedding generation latency?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using larger embedding models", "Caching embeddings for frequent queries", "Increasing batch size", "Disabling vector search"),
                                "Caching embeddings for frequent queries",
                                "obj_final")
                );

test.AddQuestion( new Question ("q8",
                                "For an e-commerce site with both product SKUs and natural language queries, which search approach is MOST appropriate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("BM25 keyword search only", "Vector search only", "Hybrid search combining both approaches", "Full-text search without ranking"),
                                "Hybrid search combining both approaches",
                                "obj_final")
                );

test.AddQuestion( new Question ("q9",
                                "What is the main advantage of using hierarchical chunking over fixed-size chunking?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster processing", "Lower storage requirements", "Multiple granularities for complex documents with structure", "Better for short documents"),
                                "Multiple granularities for complex documents with structure",
                                "obj_final")
                );

test.AddQuestion( new Question ("q10",
                                "When should you consider NOT using hybrid search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("When you have more than 100K documents", "When you need semantic understanding", "When you have simple catalogs with exact-match-only requirements", "When you have diverse query types"),
                                "When you have simple catalogs with exact-match-only requirements",
                                "obj_final")
                );

test.AddQuestion( new Question ("q11",
                                "In query understanding, what does the 'expanded_queries' field typically contain?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Longer versions of the original query", "2-3 rephrasings of the query for better recall", "Queries from other users", "Spelling corrections only"),
                                "2-3 rephrasings of the query for better recall",
                                "obj_final")
                );

test.AddQuestion( new Question ("q12",
                                "Which metric is MOST important for measuring search quality in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Query latency only", "Storage utilization", "Click-through rate (CTR)", "Number of queries per second"),
                                "Click-through rate (CTR)",
                                "obj_final")
                );
