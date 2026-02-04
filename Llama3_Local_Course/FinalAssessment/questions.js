test.AddQuestion( new Question ("q1",
                                "What is a primary advantage of running Llama 3 locally instead of using a cloud-based API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Access to infinite GPU memory", "Guaranteed 100% uptime", "Data privacy and reduced latency for local workflows", "No need for any hardware resources"),
                                "Data privacy and reduced latency for local workflows",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "Which command is typically used in Ollama to start a conversation with the Llama 3 model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ollama run llama3", "run local-model", "llama3 chat", "ollama start"),
                                "ollama run llama3",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "What is a hardware requirement usually needed to run Llama 3 (8B) smoothly on a local machine?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A printer", "At least 8GB of RAM (or VRAM)", "A floppy disk drive", "A 10Gbps internet connection"),
                                "At least 8GB of RAM (or VRAM)",
                                "obj_module_1")
                );
