test.AddQuestion( new Question ("mcp.arch.q1",
                                "What is the primary purpose of the Model Context Protocol (MCP)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To replace existing AI models with better ones", "To provide a standardized interface for connecting AI applications to external data and tools", "To train large language models more efficiently", "To store AI conversation history"),
                                "To provide a standardized interface for connecting AI applications to external data and tools",
                                "obj_mcp_architecture")
                );

test.AddQuestion( new Question ("mcp.arch.q2",
                                "In the MCP architecture, what is the role of the MCP Host?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To execute tool operations on behalf of the AI", "To store all MCP server configurations", "To provide the AI application that uses external tools and data", "To validate JSON-RPC messages"),
                                "To provide the AI application that uses external tools and data",
                                "obj_mcp_architecture")
                );

test.AddQuestion( new Question ("mcp.arch.q3",
                                "The MCP Client maintains a 1:1 connection with an MCP Server",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_mcp_architecture")
                );

test.AddQuestion( new Question ("mcp.arch.q4",
                                "Which transport mechanism is best suited for local file system access and development tools?",
                                QUESTION_TYPE_CHOICE,
                                new Array("SSE (Server-Sent Events)", "stdio (Standard Input/Output)", "WebSocket", "HTTP POST"),
                                "stdio (Standard Input/Output)",
                                "obj_mcp_architecture")
                );

test.AddQuestion( new Question ("mcp.arch.q5",
                                "What is the primary advantage of using SSE transport over stdio transport?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster message processing", "Support for multiple clients and remote access", "Better error handling", "Simpler configuration"),
                                "Support for multiple clients and remote access",
                                "obj_mcp_architecture")
                );

test.AddQuestion( new Question ("mcp.arch.q6",
                                "MCP uses JSON-RPC 2.0 as its message format regardless of the transport layer",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_mcp_architecture")
                );

test.AddQuestion( new Question ("mcp.arch.q7",
                                "Which MCP primitive represents actions that the AI can execute?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Resources", "Tools", "Prompts", "Schemas"),
                                "Tools",
                                "obj_mcp_architecture")
                );

test.AddQuestion( new Question ("mcp.arch.q8",
                                "What is the primary purpose of MCP Resources?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To execute database queries", "To provide read-only contextual data to the AI", "To store user authentication tokens", "To define tool input schemas"),
                                "To provide read-only contextual data to the AI",
                                "obj_mcp_architecture")
                );
