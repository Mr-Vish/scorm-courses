test.AddQuestion( new Question ("intro_q1",
    "What is the primary difference between fine-tuning and prompt engineering?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "Fine-tuning modifies the model's internal weights, while prompt engineering only guides behavior via input text",
        "Fine-tuning is always cheaper than prompt engineering for small tasks",
        "Prompt engineering requires a specialized dataset in JSONL format",
        "Fine-tuning is used to add real-time information to the model's context"
    ),
    "Fine-tuning modifies the model's internal weights, while prompt engineering only guides behavior via input text",
    "obj_intro")
);

test.AddQuestion( new Question ("intro_q2",
    "Which of the following is a key benefit of fine-tuning a smaller LLM?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "It eliminates the need for any data preparation",
        "It can achieve high performance on specialized tasks with lower latency and cost compared to larger models",
        "It allows the model to access the live internet for every query",
        "It automatically removes all biases from the pre-trained base model"
    ),
    "It can achieve high performance on specialized tasks with lower latency and cost compared to larger models",
    "obj_intro")
);

test.AddQuestion( new Question ("intro_q3",
    "How does Spring AI support the fine-tuning lifecycle?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "Spring AI provides the GPU hardware needed for the training process",
        "Spring AI is primarily used for cleaning the training dataset",
        "Spring AI provides a unified interface to easily integrate and swap between base and fine-tuned models",
        "Spring AI automatically generates the Golden Dataset for evaluation"
    ),
    "Spring AI provides a unified interface to easily integrate and swap between base and fine-tuned models",
    "obj_intro")
);
