test.AddQuestion( new Question ("fund_q1",
    "When preparing a dataset for fine-tuning, what is generally considered more important than the sheer size of the dataset?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "The number of duplicate examples",
        "Using as much noisy data as possible to improve robustness",
        "The use of PDF files instead of JSONL",
        "The quality, diversity, and consistency of the examples"
    ),
    "The quality, diversity, and consistency of the examples",
    "obj_fundamentals")
);

test.AddQuestion( new Question ("fund_q2",
    "Which fine-tuning objective involves minimizing the difference between the model's output and a provided 'Target Response'?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "Supervised Fine-Tuning (SFT)",
        "Reinforcement Learning from Human Feedback (RLHF)",
        "Unsupervised Pre-training",
        "Zero-shot Inference"
    ),
    "Supervised Fine-Tuning (SFT)",
    "obj_fundamentals")
);

test.AddQuestion( new Question ("fund_q3",
    "Which metric is a mathematical measure of how well a model predicts a sample, where a lower value generally indicates a better fit?",
    QUESTION_TYPE_CHOICE,
    new Array(
        "BLEU Score",
        "Perplexity",
        "ROUGE-L",
        "Pass@k"
    ),
    "Perplexity",
    "obj_fundamentals")
);
