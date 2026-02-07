test.AddQuestion( new Question ("usecase_q1",
    "In which scenario is Fine-Tuning generally superior to RAG (Retrieval-Augmented Generation)?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "When you need to incorporate real-time news into the model's responses",
        "When you need the model to consistently adopt a very specific stylistic tone or persona",
        "When the knowledge base is frequently changing every few hours",
        "When you want to minimize the upfront cost of training"
    ),
    "When you need the model to consistently adopt a very specific stylistic tone or persona",
    "obj_usecases")
);

test.AddQuestion( new Question ("usecase_q2",
    "What is 'catastrophic forgetting' in the context of fine-tuning?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "When the model forgets the training data after a restart",
        "When the dataset is too large for the GPU to handle",
        "When the model loses its general reasoning abilities while learning a specific task",
        "When the user forgets the prompt they were going to type"
    ),
    "When the model loses its general reasoning abilities while learning a specific task",
    "obj_usecases")
);

test.AddQuestion( new Question ("usecase_q3",
    "Why should you audit your training datasets for fine-tuning?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "To ensure they contain at least 1 million rows",
        "To make sure the file size is exactly 500MB",
        "To verify that all examples are written in multiple languages",
        "To identify and mitigate biases that could be amplified by the model"
    ),
    "To identify and mitigate biases that could be amplified by the model",
    "obj_usecases")
);
