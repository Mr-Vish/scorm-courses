// Assessment 2: Vector Search Implementation
// Covers index creation, deployment, querying, and optimization
// Answer distribution: A=3, B=2, C=3, D=2 (30%, 20%, 30%, 20%)

test.AddQuestion( new Question ("q1",
                                "What is the recommended index type for most production use cases in Vertex AI Vector Search?",
                                QUESTION_TYPE_CHOICE,
                                new Array("LSH Index", "Brute Force Index", "Tree-AH Index", "HNSW Index"),
                                "Tree-AH Index",
                                "obj_assessment2")
                );

test.AddQuestion( new Question ("q2",
                                "Which file format is recommended for storing embeddings before index creation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("JSONL format", "TXT format", "CSV format", "XML format"),
                                "JSONL format",
                                "obj_assessment2")
                );

test.AddQuestion( new Question ("q3",
                                "What is the typical index build time for 1 million vectors with 768 dimensions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("5-10 minutes", "8-12 hours", "2-4 hours", "30-60 minutes"),
                                "30-60 minutes",
                                "obj_assessment2")
                );

test.AddQuestion( new Question ("q4",
                                "What is the primary difference between a public endpoint and a private VPC endpoint?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Public endpoints are faster", "Private endpoints cost more", "Private endpoints are only accessible from within VPC network", "Public endpoints support more features"),
                                "Private endpoints are only accessible from within VPC network",
                                "obj_assessment2")
                );

test.AddQuestion( new Question ("q5",
                                "Which machine type is recommended for production workloads with medium-sized indexes (1-10M vectors)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("e2-standard-16", "n1-standard-32", "e2-standard-2", "e2-highmem-32"),
                                "e2-standard-16",
                                "obj_assessment2")
                );

test.AddQuestion( new Question ("q6",
                                "How long does it typically take for auto-scaling to add a new replica during traffic spikes?",
                                QUESTION_TYPE_CHOICE,
                                new Array("30 seconds", "2-3 minutes", "10-15 minutes", "30-60 minutes"),
                                "2-3 minutes",
                                "obj_assessment2")
                );

test.AddQuestion( new Question ("q7",
                                "What is the main advantage of batch querying over individual queries?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Batch queries support more features", "Batch queries are more accurate", "Batch queries reduce per-query overhead and improve throughput", "Batch queries use less memory"),
                                "Batch queries reduce per-query overhead and improve throughput",
                                "obj_assessment2")
                );

test.AddQuestion( new Question ("q8",
                                "What is the typical p50 latency for a single query on an index with 1 million vectors?",
                                QUESTION_TYPE_CHOICE,
                                new Array("8ms", "200ms", "2ms", "50ms"),
                                "8ms",
                                "obj_assessment2")
                );

test.AddQuestion( new Question ("q9",
                                "When using DOT_PRODUCT_DISTANCE, what does a higher distance value indicate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Vectors are identical", "Distance metric is invalid", "Vectors are more similar", "Vectors are less similar"),
                                "Vectors are more similar",
                                "obj_assessment2")
                );

test.AddQuestion( new Question ("q10",
                                "What deployment strategy enables zero-downtime index updates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Blue-green deployment", "Direct replacement", "Canary deployment", "Rolling deployment"),
                                "Blue-green deployment",
                                "obj_assessment2")
                );
