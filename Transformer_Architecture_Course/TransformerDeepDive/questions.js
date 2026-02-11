test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.transformerarch.m1_q1",
                                "Which of the following is true regarding Create Q, K, V: Each token embedding is projected into Query, Key, and Value vectors?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Attention Formula", "Residual Connections: Skip connections that help gradient flow", "KV Cache", "Create Q, K, V: Each token embedding is projected into Query, Key, and Value vectors"),
                                "Create Q, K, V: Each token embedding is projected into Query, Key, and Value vectors",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.transformerarch.m1_q2",
                                "What role does Compute attention scores: Dot product of Q with all K vectors (how relevant is each token? play in Transformer Deep Dive?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Outputs from all heads are concatenated and projected", "Compute attention scores: Dot product of Q with all K vectors (how relevant is each token?", "Head 1: Might focus on syntactic relationships (subject-verb)", "Feed-Forward Network: Two linear layers with activation (processes each token independentl"),
                                "Compute attention scores: Dot product of Q with all K vectors (how relevant is each token?",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.transformerarch.m1_q3",
                                "What is the primary purpose of Scale: Divide by sqrt(d_k) to stabilize gradients?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Encoder-decoder (T5, BART): Encoder sees full input, decoder generates output. Used for tr", "Original Transformer", "Scale: Divide by sqrt(d_k) to stabilize gradients", "KV Cache"),
                                "Scale: Divide by sqrt(d_k) to stabilize gradients",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.transformerarch.m1_q4",
                                "Which of the following best describes Softmax: Convert scores to probabilities (attention weights)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Positional Encoding", "Limit attention to nearby tokens (Mistral)", "Softmax: Convert scores to probabilities (attention weights)", "Original Transformer"),
                                "Softmax: Convert scores to probabilities (attention weights)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.transformerarch.m1_q5",
                                "How is Weighted sum: Multiply weights by V vectors to get output best defined in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Transformer Block Architecture", "Residual Connections: Skip connections that help gradient flow", "Weighted sum: Multiply weights by V vectors to get output", "Trade-off: Uses significant GPU memory (proportional to sequence length)"),
                                "Weighted sum: Multiply weights by V vectors to get output",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.transformerarch.m1_q6",
                                "What is a key characteristic of Head 1: Might focus on syntactic relationships (subject-verb)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Memory-efficient attention using tiling (2-4x faster)", "Head 1: Might focus on syntactic relationships (subject-verb)", "Relative positions, extrapolates well", "Decoder-only (GPT, Claude, Llama): Causal attention mask, generates tokens left to right. "),
                                "Head 1: Might focus on syntactic relationships (subject-verb)",
                                "obj_module_1")
                );