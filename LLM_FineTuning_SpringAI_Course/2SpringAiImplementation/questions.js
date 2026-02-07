test.AddQuestion( new Question ("impl_q1",
    "What is the primary mechanism of Low-Rank Adaptation (LoRA)?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "It updates all parameters of the base model simultaneously",
        "It removes half of the layers in the neural network to save memory",
        "It freezes base weights and adds small, trainable adapter layers",
        "It converts the model from 32-bit to 4-bit precision without any training"
    ),
    "It freezes base weights and adds small, trainable adapter layers",
    "obj_implementation")
);

test.AddQuestion( new Question ("impl_q2",
    "How can you configure a specific fine-tuned model ID for an OpenAI provider in Spring AI's application.yml?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "spring.ai.model.id=custom-model",
        "spring.ai.openai.fine-tune=true",
        "spring.ai.openai.chat.options.tuning-id=my-id",
        "spring.ai.openai.chat.options.model=ft:gpt-3.5-turbo:your-org:custom-model-id"
    ),
    "spring.ai.openai.chat.options.model=ft:gpt-3.5-turbo:your-org:custom-model-id",
    "obj_implementation")
);

test.AddQuestion( new Question ("impl_q3",
    "What is a significant advantage of using Parameter-Efficient Fine-Tuning (PEFT) techniques like LoRA?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "It reduces GPU memory requirements and allows training on consumer hardware",
        "It always results in higher accuracy than full fine-tuning",
        "It eliminates the need for a base model",
        "It makes the training process take significantly longer but uses less RAM"
    ),
    "It reduces GPU memory requirements and allows training on consumer hardware",
    "obj_implementation")
);
