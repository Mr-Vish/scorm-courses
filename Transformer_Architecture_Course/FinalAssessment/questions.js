// Final Comprehensive Assessment
// Covers all 1 modules


test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.transformerarch.final_q1",
                                "Regarding Transformer Deep Dive: Which statement about Head 2: Might focus on co-reference (pronouns to nouns) is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Attention weights show what the model \"looks at\"", "Scale: Divide by sqrt(d_k) to stabilize gradients", "Limit attention to nearby tokens (Mistral)", "Head 2: Might focus on co-reference (pronouns to nouns)"),
                                "Head 2: Might focus on co-reference (pronouns to nouns)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.transformerarch.final_q2",
                                "Regarding Transformer Deep Dive: Which of the following is true regarding Head 3: Might focus on semantic similarity?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Original Transformer", "Weighted sum: Multiply weights by V vectors to get output", "Head 3: Might focus on semantic similarity", "Relative positions, extrapolates well"),
                                "Head 3: Might focus on semantic similarity",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.transformerarch.final_q3",
                                "Regarding Transformer Deep Dive: How is Outputs from all heads are concatenated and projected best defined in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Attention weights show what the model \"looks at\"", "Outputs from all heads are concatenated and projected", "Residual Connections: Skip connections that help gradient flow", "Sparse Attention"),
                                "Outputs from all heads are concatenated and projected",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.transformerarch.final_q4",
                                "Regarding Transformer Deep Dive: Which of the following best describes Multi-Head Self-Attention: Captures token relationships?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Multi-Head Self-Attention: Captures token relationships", "Why Attention Matters for GenAI", "Decoder-only (GPT, Claude, Llama): Causal attention mask, generates tokens left to right. ", "With cache: O(n) computation per new token"),
                                "Multi-Head Self-Attention: Captures token relationships",
                                "obj_final_assessment")
                );