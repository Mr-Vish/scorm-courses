test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.l4_q1",
                                "What is the primary mechanism of a Server-Side Request Forgery (SSRF) attack?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The client is forced to make requests to internal services", "The server is induced to make unintended requests to internal or external locations", "The attacker bypasses the login page by injecting SQL", "The server's database is directly accessed by the client"),
                                "The server is induced to make unintended requests to internal or external locations",
                                "obj_level_4")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.l4_q2",
                                "Which IP address is commonly targeted in SSRF attacks against cloud environments to retrieve sensitive metadata?",
                                QUESTION_TYPE_CHOICE,
                                new Array("127.0.0.1", "192.168.1.1", "169.254.169.254", "8.8.8.8"),
                                "169.254.169.254",
                                "obj_level_4")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.l4_q3",
                                "What is the most effective primary defense against SSRF?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using a regular expression to validate URLs", "Implementing a blacklist of internal IP addresses", "Avoiding user-supplied URLs for server-side requests entirely", "Disabling JavaScript on the client side"),
                                "Avoiding user-supplied URLs for server-side requests entirely",
                                "obj_level_4")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.l4_q4",
                                "Which of the following is an example of Insecure Design rather than a simple implementation bug?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Forgetting to escape user input in a SQL query", "Using a guessable security question for password recovery", "A buffer overflow in a C-based web server", "Missing a semicolon in a JavaScript file"),
                                "Using a guessable security question for password recovery",
                                "obj_level_4")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.l4_q5",
                                "What is 'Threat Modeling' used for in the context of secure design?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To automatically fix vulnerabilities in the code", "To identify and mitigate potential threats early in the design phase", "To monitor system logs for suspicious activity in real-time", "To perform penetration testing on a production environment"),
                                "To identify and mitigate potential threats early in the design phase",
                                "obj_level_4")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.l4_q6",
                                "Which of these should NEVER be stored in application logs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Usernames", "IP addresses", "Session tokens and passwords", "HTTP status codes"),
                                "Session tokens and passwords",
                                "obj_level_4")
                );

test.AddQuestion( new Question ("com.scorm.owasp.security.interactions.l4_q7",
                                "How does centralized logging help in securing an application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes the application run faster", "It prevents attackers from deleting logs to hide their tracks", "It automatically blocks IP addresses that show suspicious activity", "It encrypts the application's database"),
                                "It prevents attackers from deleting logs to hide their tracks",
                                "obj_level_4")
                );
