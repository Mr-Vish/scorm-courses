test.AddQuestion( new Question ("q1",
                                "How can an AI gateway implement 'Tenant-Aware Rate Limiting'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By blocking all requests that don't come from the admin", "By applying a single global limit to the entire gateway", "By identifying the tenant ID in the request and applying specific quotas for that ID", "By randomly dropping 10% of all requests"),
                                "By identifying the tenant ID in the request and applying specific quotas for that ID",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q2",
                                "In a multi-tenant RAG system, how is data usually isolated in a vector database?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By encrypting the data with the same key", "By using a different physical server for every single user", "Data isolation is not possible in vector databases", "By using metadata filters (e.g., tenant_id) in every query"),
                                "By using metadata filters (e.g., tenant_id) in every query",
                                "obj_module_1")
                );
test.AddQuestion( new Question ("q3",
                                "What is 'Tiered Billing' in a multi-tenant AI gateway?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Charging different tenants different rates based on their usage or service level", "Charging everyone the same flat fee", "An encryption algorithm", "A way to delete old tenants"),
                                "Charging different tenants different rates based on their usage or service level",
                                "obj_module_1")
                );
