// Module 2 Assessment: Intelligent Runbook Automation and Remediation
// Tests understanding of AI-assisted runbook systems

test.AddQuestion( new Question ("com.scorm.aiincident.mod2.q1",
                                "What is the primary limitation of traditional static runbooks?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They are too expensive to create", "They are static and inflexible, unable to adapt to variations in incidents", "They require too much storage", "They are difficult to read"),
                                "They are static and inflexible, unable to adapt to variations in incidents",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod2.q2",
                                "How does AI-powered runbook selection differ from manual runbook selection?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is slower but more accurate", "It uses semantic matching to understand symptom similarity even without exact keyword matches", "It requires more training", "It only works with new incidents"),
                                "It uses semantic matching to understand symptom similarity even without exact keyword matches",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod2.q3",
                                "According to the automation spectrum, which remediation actions should be fully automated?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Database schema changes", "Data deletion", "Low-risk, easily reversible actions like restarting a service", "All remediation actions"),
                                "Low-risk, easily reversible actions like restarting a service",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod2.q4",
                                "What is the 'human-in-the-loop' pattern in AI remediation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Humans do all the work while AI watches", "AI suggests remediation, human reviews and approves with one click, then AI executes", "Humans and AI work simultaneously", "AI only provides documentation"),
                                "AI suggests remediation, human reviews and approves with one click, then AI executes",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod2.q5",
                                "What should trigger an automatic rollback during AI-driven remediation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Any change in metrics", "Error rate increases by more than 20% or key metrics worsen", "User complaints", "Time of day"),
                                "Error rate increases by more than 20% or key metrics worsen",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod2.q6",
                                "What is a circuit breaker in the context of AI remediation systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A physical device that stops electricity", "A mechanism that stops automatic remediation after repeated failures", "A network switch", "A database connection"),
                                "A mechanism that stops automatic remediation after repeated failures",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod2.q7",
                                "How do intelligent runbooks learn and improve over time?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They don't improve", "By analyzing execution outcomes, engineer feedback, and success rates to refine steps", "By reading documentation", "By asking users for ratings"),
                                "By analyzing execution outcomes, engineer feedback, and success rates to refine steps",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("com.scorm.aiincident.mod2.q8",
                                "According to best practices, what should be done before deploying runbook automation to production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deploy immediately to all incidents", "Test in staging environments and start with a small percentage of incidents", "Wait for perfect accuracy", "Get approval from all engineers"),
                                "Test in staging environments and start with a small percentage of incidents",
                                "obj_module_2")
                );
