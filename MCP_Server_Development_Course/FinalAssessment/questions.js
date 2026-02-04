test.AddQuestion( new Question ("q1",
                                "In MCP, how do servers communicate their available tools to the host?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Through a 'list_tools' request/response exchange", "Via a hardcoded list in the host's source code", "By writing to a shared file on disk", "Tools are discovered via DNS"),
                                "Through a 'list_tools' request/response exchange",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "Which protocol is commonly used as the transport layer for MCP?",
                                QUESTION_TYPE_CHOICE,
                                new Array("BGP", "SMTP", "FTP", "JSON-RPC"),
                                "JSON-RPC",
                                "obj_module_1")
                );
