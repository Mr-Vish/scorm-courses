test.AddQuestion( new Question ("tips_q1",
    "According to the fine-tuning lifecycle, what should you do immediately after base model selection?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "Hyperparameter Tuning (setting learning rate, batch size, etc.)",
        "Deploy the model to production",
        "Create the Golden Dataset",
        "Start cleaning the data"
    ),
    "Hyperparameter Tuning (setting learning rate, batch size, etc.)",
    "obj_tips")
);

test.AddQuestion( new Question ("tips_q2",
    "What is a clear indicator of overfitting during the fine-tuning process?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "Both training and validation loss are decreasing",
        "Training loss decreases while validation loss starts to increase",
        "The model starts generating responses faster than usual",
        "Training loss stays flat while validation loss decreases"
    ),
    "Training loss decreases while validation loss starts to increase",
    "obj_tips")
);

test.AddQuestion( new Question ("tips_q3",
    "What is the 'Rule of 100' suggested for fine-tuning?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "Always use exactly 100 epochs",
        "Never train on more than 100 examples",
        "Start with at least 100 high-quality examples and verify quality before increasing quantity",
        "Set the learning rate to 100"
    ),
    "Start with at least 100 high-quality examples and verify quality before increasing quantity",
    "obj_tips")
);
