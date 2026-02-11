// Final Comprehensive Assessment - SageMaker Fine-Tuning
// Covers all expanded modules

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q1",
                                "What is the primary benefit of using SageMaker JumpStart for fine-tuning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It requires writing complex custom training scripts", "It provides optimized, 'one-click' fine-tuning for popular foundation models", "It is only available for small models", "It doesn't require an AWS account"),
                                "It provides optimized, 'one-click' fine-tuning for popular foundation models",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q2",
                                "Which technique allows for fine-tuning large models by updating only a tiny fraction of the parameters using low-rank matrices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Full Fine-Tuning", "LoRA (Low-Rank Adaptation)", "Grid Search", "Data Augmentation"),
                                "LoRA (Low-Rank Adaptation)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q3",
                                "What innovation does QLoRA introduce to the fine-tuning process?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses 128-bit precision for higher accuracy", "It combines LoRA with 4-bit quantization to enable tuning on smaller GPUs", "It removes the need for any GPU during training", "It only works on AWS Trainium"),
                                "It combines LoRA with 4-bit quantization to enable tuning on smaller GPUs",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q4",
                                "Which SageMaker instance type is purpose-built by AWS specifically for high-performance deep learning training?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ml.t3.medium", "ml.p4d.24xlarge", "trn1.32xlarge (AWS Trainium)", "ml.m5.large"),
                                "trn1.32xlarge (AWS Trainium)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q5",
                                "What is the role of 'Managed Spot Training' in SageMaker?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To make training jobs run 10x faster", "To reduce training costs by up to 90% using spare AWS capacity", "To prevent all training interruptions", "To automatically translate training data"),
                                "To reduce training costs by up to 90% using spare AWS capacity",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q6",
                                "Which type of parallelism involves splitting individual weight matrices across multiple GPUs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Data Parallelism", "Tensor Parallelism", "Pipeline Parallelism", "Sequential Processing"),
                                "Tensor Parallelism",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q7",
                                "How does 'Fast File Mode' optimize SageMaker training?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By compressing the model weights", "By streaming data directly from S3 into the container without downloading it first", "By increasing the clock speed of the GPU", "By removing the need for an IAM role"),
                                "By streaming data directly from S3 into the container without downloading it first",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q8",
                                "What is the primary function of the SageMaker Model Registry?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To store the raw training data", "To version, manage, and track the lineage of fine-tuned models", "To host public web pages for models", "To automatically generate training data"),
                                "To version, manage, and track the lineage of fine-tuned models",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q9",
                                "In an LLMOps workflow, what is the benefit of 'A/B Testing' a new model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It makes the model twice as large", "It allows you to compare the performance of a new model version against an old one using a small percentage of live traffic", "It ensures the model is always trained on 8-bit data", "It removes the need for evaluation metrics"),
                                "It allows you to compare the performance of a new model version against an old one using a small percentage of live traffic",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q10",
                                "Which metric is commonly used to evaluate the quality of summarization tasks by measuring word overlap?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Accuracy", "ROUGE", "F1-Score", "MSE"),
                                "ROUGE",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q11",
                                "Why would an organization choose custom training scripts over SageMaker JumpStart?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Because JumpStart is always more expensive", "To have total control over the training loop, libraries, and model architecture", "Because custom scripts don't require GPUs", "To avoid using Amazon S3"),
                                "To have total control over the training loop, libraries, and model architecture",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q12",
                                "What is 'Double Quantization' in the context of QLoRA?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Quantizing the model weights twice", "Quantizing the quantization constants themselves to save additional VRAM", "Using two GPUs for quantization", "Quantizing both the weights and the input text"),
                                "Quantizing the quantization constants themselves to save additional VRAM",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q13",
                                "Which deployment option is best for handling large-scale, non-interactive document processing jobs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Real-Time Inference", "Asynchronous Inference", "Serverless Inference", "Batch Transform"),
                                "Batch Transform",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q14",
                                "What does the 'Neuron SDK' enable on AWS?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It allows models to simulate human brain activity", "It is the software layer that allows standard ML frameworks to run on AWS Trainium and Inferentia hardware", "It is used for encrypting model outputs", "It is a tool for building mobile apps"),
                                "It is the software layer that allows standard ML frameworks to run on AWS Trainium and Inferentia hardware",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("com.scorm.com.scorm.genaicourse.sagemakerft.final_q15",
                                "What is 'Prompt Packing'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compressing prompts into a ZIP file", "Combining multiple small training examples into a single sequence to maximize GPU efficiency", "Removing all special tokens from a prompt", "Sending prompts to multiple models at once"),
                                "Combining multiple small training examples into a single sequence to maximize GPU efficiency",
                                "obj_final_assessment")
                );