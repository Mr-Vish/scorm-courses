test.AddQuestion( new Question ("q1",
                                "When analyzing a crash dump, what does a 'Deadlock' signify?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The database is out of space", "The network cable is unplugged", "Two or more threads are waiting indefinitely for each other to release locks", "The license key has expired"),
                                "Two or more threads are waiting indefinitely for each other to release locks",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "What is the primary purpose of a 'Heap Dump' in Java troubleshooting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To see the CPU temperature", "To analyze memory usage and identify memory leaks", "To delete temporary files", "To speed up the network"),
                                "To analyze memory usage and identify memory leaks",
                                "obj_module_1")
                );
