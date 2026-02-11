test.AddQuestion( new Question ("mcp.final.q1",
                                "What problem does the Model Context Protocol primarily solve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Training AI models faster", "Standardizing AI-to-system integrations", "Reducing AI model size", "Improving AI accuracy"),
                                "Standardizing AI-to-system integrations",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q2",
                                "Which MCP component is responsible for maintaining a 1:1 connection with an MCP server?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MCP Host", "MCP Client", "MCP Transport", "MCP Protocol"),
                                "MCP Client",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q3",
                                "MCP Resources are read-only and provide contextual data to AI applications",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q4",
                                "Which transport is best for MCP servers that need to serve multiple clients over a network?",
                                QUESTION_TYPE_CHOICE,
                                new Array("stdio", "SSE", "WebSocket", "gRPC"),
                                "SSE",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q5",
                                "What format does MCP use for message exchange between clients and servers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("XML-RPC", "JSON-RPC 2.0", "GraphQL", "REST"),
                                "JSON-RPC 2.0",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q6",
                                "In TypeScript MCP servers, the Zod library is commonly used for runtime type validation",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q7",
                                "When implementing tool handlers, what should be done if an unknown tool name is requested?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Return an empty result", "Ignore the request", "Throw an error", "Return a default response"),
                                "Throw an error",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q8",
                                "Which tool is specifically designed for interactive testing and debugging of MCP servers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MCP Debugger", "MCP Inspector", "MCP Tester", "MCP Console"),
                                "MCP Inspector",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q9",
                                "All debug and error logging in MCP servers should be written to stderr, not stdout",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q10",
                                "What is the primary purpose of input validation in MCP tool handlers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To improve performance", "To prevent injection attacks and data corruption", "To reduce code complexity", "To enable caching"),
                                "To prevent injection attacks and data corruption",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q11",
                                "Which authentication method is most suitable for high-security enterprise environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("API Keys", "Basic Auth", "mTLS (Mutual TLS)", "No authentication"),
                                "mTLS (Mutual TLS)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q12",
                                "Rate limiting protects MCP servers from abuse and denial-of-service attacks",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q13",
                                "What should be included in audit logs for MCP server operations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only error messages", "User credentials and passwords", "Security-relevant events with timestamps and user IDs", "All tool responses"),
                                "Security-relevant events with timestamps and user IDs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q14",
                                "Which deployment option provides the best portability and consistency across environments?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cloud VMs", "Containers", "Serverless", "Bare metal"),
                                "Containers",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("mcp.final.q15",
                                "Caching frequently accessed data can significantly reduce response latency in MCP servers",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final_assessment")
                );
