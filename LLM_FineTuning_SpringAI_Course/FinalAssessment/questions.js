test.AddQuestion( new Question ("final_q1",
    "What does PEFT stand for in the context of LLM training?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "Permanent Extended Fine-Tuning",
        "Primary Element Feature Training",
        "Prompt Enhanced Functional Tuning",
        "Parameter-Efficient Fine-Tuning"
    ),
    "Parameter-Efficient Fine-Tuning",
    "obj_final")
);

test.AddQuestion( new Question ("final_q2",
    "How does Spring AI's ChatClient benefit developers using fine-tuned models?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "It provides a portable API that remains consistent even when swapping between base and custom models",
        "It automatically performs the LoRA training on the local machine",
        "It converts raw text data into the required JSONL format for fine-tuning",
        "It reduces the cost of OpenAI API calls by 50% automatically"
    ),
    "It provides a portable API that remains consistent even when swapping between base and custom models",
    "obj_final")
);

test.AddQuestion( new Question ("final_q3",
    "What is the primary purpose of a 'Golden Dataset' in the fine-tuning workflow?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "To provide the bulk of the training data",
        "To serve as a high-quality, held-out set for final evaluation and comparison",
        "To store the weights of the fine-tuned model",
        "To define the hyperparameter ranges for the training job"
    ),
    "To serve as a high-quality, held-out set for final evaluation and comparison",
    "obj_final")
);

test.AddQuestion( new Question ("final_q4",
    "What is the 'LLM-as-a-Judge' approach to evaluation?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "Using a legal-specialized LLM to check for copyright violations",
        "Using a fine-tuned model to generate more training data",
        "Using a more capable model (like GPT-4) to grade the outputs of a smaller fine-tuned model",
        "Replacing human reviewers with a simple perplexity calculation"
    ),
    "Using a more capable model (like GPT-4) to grade the outputs of a smaller fine-tuned model",
    "obj_final")
);

test.AddQuestion( new Question ("final_q5",
    "Compared to prompt engineering, how can fine-tuning reduce recurring token costs?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "By compressing the model weights into fewer tokens",
        "By allowing the use of cheaper API providers",
        "By encrypting the prompt text",
        "By reducing the need for long instructions and many-shot examples in every prompt"
    ),
    "By reducing the need for long instructions and many-shot examples in every prompt",
    "obj_final")
);

test.AddQuestion( new Question ("final_q6",
    "In LoRA adaptation, what happens to the original weights of the base model?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "They are frozen and not updated during the training process",
        "They are deleted to save space once the adapter layers are added",
        "They are averaged with the new weights in every epoch",
        "They are randomized to allow the model to learn from scratch"
    ),
    "They are frozen and not updated during the training process",
    "obj_final")
);

test.AddQuestion( new Question ("final_q7",
    "Which evaluation metric measures n-gram overlap between a model's output and a reference text?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "Validation Loss",
        "BLEU or ROUGE Scores",
        "Perplexity",
        "Cosine Similarity"
    ),
    "BLEU or ROUGE Scores",
    "obj_final")
);

test.AddQuestion( new Question ("final_q8",
    "What is the primary advantage of configuring model IDs via Spring AI's global properties?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "It makes the application run faster",
        "It enables the use of 4-bit quantization",
        "It allows model versions to be updated or rolled back without changing source code",
        "It automatically fine-tunes the model on every application startup"
    ),
    "It allows model versions to be updated or rolled back without changing source code",
    "obj_final")
);

test.AddQuestion( new Question ("final_q9",
    "How can you mitigate 'catastrophic forgetting' during fine-tuning?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "By increasing the learning rate significantly",
        "By training on only one specific example repeatedly",
        "By removing the base model weights entirely",
        "By using PEFT techniques like LoRA and maintaining a diverse validation set"
    ),
    "By using PEFT techniques like LoRA and maintaining a diverse validation set",
    "obj_final")
);

test.AddQuestion( new Question ("final_q10",
    "When comparing upfront costs, which technique typically has the highest initial investment?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "Fine-Tuning (due to data preparation and training compute)",
        "Prompt Engineering (due to token usage)",
        "Zero-shot Inference (due to model size)",
        "RAG (due to embedding generation)"
    ),
    "Fine-Tuning (due to data preparation and training compute)",
    "obj_final")
);
