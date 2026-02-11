// Final Comprehensive Assessment
// Covers all modules


test.AddQuestion( new Question ("com.scorm.nlanalytics.final_q1",
                                "Regarding NL Analytics: Which of the following best describes Few-shot examples: Include 3-5 example question-SQL pairs in the prompt for your specific ?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Few-shot examples: Include 3-5 example question-SQL pairs in the prompt for your specific ", "Execution and display: Results shown as a table with download option", "Save and share: Pin useful queries and charts to a dashboard", "Natural Language to SQL"),
                                "Few-shot examples: Include 3-5 example question-SQL pairs in the prompt for your specific ",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.nlanalytics.final_q2",
                                "Regarding NL Analytics: In the context of NL Analytics, what does Column descriptions: Add human-readable descriptions to column names (e.g., \"mrr\" means \"M refer to?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Column descriptions: Add human-readable descriptions to column names (e.g., \"mrr\" means \"M", "SQL injection from LLM output", "Validation: Validate the generated SQL (syntax check, permission check, cost estimation)", "Stacked area chart"),
                                "Column descriptions: Add human-readable descriptions to column names (e.g., \"mrr\" means \"M",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.nlanalytics.final_q3",
                                "Regarding NL Analytics: What role does Sample values: Include a few example values for enum-like columns to avoid hallucination play in NL Analytics?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Validation: Validate the generated SQL (syntax check, permission check, cost estimation)", "Sample values: Include a few example values for enum-like columns to avoid hallucination", "Query validation: Parse generated SQL and verify all referenced tables and columns exist", "\"Total revenue this month\""),
                                "Sample values: Include a few example values for enum-like columns to avoid hallucination",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.nlanalytics.final_q4",
                                "Regarding NL Analytics: What is the primary purpose of Query validation: Parse generated SQL and verify all referenced tables and columns exist?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Query validation: Parse generated SQL and verify all referenced tables and columns exist", "Hallucinated columns", "Architecture", "Natural Language to SQL"),
                                "Query validation: Parse generated SQL and verify all referenced tables and columns exist",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.nlanalytics.final_q5",
                                "Which SQL clause is used to define a Common Table Expression (CTE)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("FROM", "WITH", "WHERE", "JOIN"),
                                "WITH",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.nlanalytics.final_q6",
                                "In NL Analytics, what is a 'Self-Correction Loop'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The system automatically deleting the database if an error occurs", "The system using database error messages to guide the LLM in generating a corrected query", "The user manually typing the SQL query themselves", "The system ignoring all errors and showing a blank screen"),
                                "The system using database error messages to guide the LLM in generating a corrected query",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.nlanalytics.final_q7",
                                "Which library is frequently used for generating interactive visualizations from LLMs via Python?",
                                QUESTION_TYPE_CHOICE,
                                new Array("NumPy", "Plotly", "TensorFlow", "Requests"),
                                "Plotly",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.nlanalytics.final_q8",
                                "What is the primary security risk of executing model-generated Python code?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The code might be too slow", "The code might perform unauthorized network access or access sensitive files if not properly sandboxed", "The code might be written in Python 2 instead of Python 3", "The code might contain too many comments"),
                                "The code might perform unauthorized network access or access sensitive files if not properly sandboxed",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.nlanalytics.final_q9",
                                "Which benchmark is specifically designed for testing Text-to-SQL on challenging, large-scale databases?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MNIST", "Spider", "BIRD", "ImageNet"),
                                "BIRD",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.nlanalytics.final_q10",
                                "Why should you avoid sending raw data in the prompt to a third-party LLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make the prompt shorter", "To protect data privacy and comply with security policies", "Because the model cannot read raw data", "To increase the latency of the request"),
                                "To protect data privacy and comply with security policies",
                                "obj_final_assessment")
                );