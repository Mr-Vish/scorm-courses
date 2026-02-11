test.AddQuestion( new Question ("mcp.build.q1",
                                "Which package manager command installs the MCP SDK for TypeScript?",
                                QUESTION_TYPE_CHOICE,
                                new Array("pip install mcp", "npm install @modelcontextprotocol/sdk", "yarn add mcp-sdk", "npm install mcp-server"),
                                "npm install @modelcontextprotocol/sdk",
                                "obj_building_servers")
                );

test.AddQuestion( new Question ("mcp.build.q2",
                                "In TypeScript MCP servers, tool input schemas are defined using which format?",
                                QUESTION_TYPE_CHOICE,
                                new Array("XML Schema", "JSON Schema", "TypeScript interfaces", "Zod schemas only"),
                                "JSON Schema",
                                "obj_building_servers")
                );

test.AddQuestion( new Question ("mcp.build.q3",
                                "When implementing MCP servers, all debug logging must go to stderr instead of stdout",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_building_servers")
                );

test.AddQuestion( new Question ("mcp.build.q4",
                                "What is the primary purpose of the MCP Inspector tool?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To compile TypeScript code", "To deploy servers to production", "To interactively test and debug MCP servers", "To generate server documentation"),
                                "To interactively test and debug MCP servers",
                                "obj_building_servers")
                );

test.AddQuestion( new Question ("mcp.build.q5",
                                "In Python MCP servers, which decorator is used to define the list of available tools?",
                                QUESTION_TYPE_CHOICE,
                                new Array("@app.tools()", "@app.list_tools()", "@app.define_tools()", "@app.register_tools()"),
                                "@app.list_tools()",
                                "obj_building_servers")
                );

test.AddQuestion( new Question ("mcp.build.q6",
                                "Tool handlers should validate all input parameters before processing to prevent errors",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_building_servers")
                );

test.AddQuestion( new Question ("mcp.build.q7",
                                "What should a tool handler return when an unknown tool name is requested?",
                                QUESTION_TYPE_CHOICE,
                                new Array("An empty result object", "A warning message", "An error or exception", "A list of valid tool names"),
                                "An error or exception",
                                "obj_building_servers")
                );

test.AddQuestion( new Question ("mcp.build.q8",
                                "Which transport class is used for stdio communication in TypeScript MCP servers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("HttpServerTransport", "StdioServerTransport", "WebSocketTransport", "IpcServerTransport"),
                                "StdioServerTransport",
                                "obj_building_servers")
                );
