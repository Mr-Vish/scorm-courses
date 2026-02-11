// Final Comprehensive Assessment - 25 Questions
// Covers all modules: Fundamentals, Advanced Features, Applications & Best Practices

// Module 1: Fundamentals (8 questions)
test.AddQuestion( new Question ("com.scorm.notebooklm.final.fund1",
                                "What is the primary principle that distinguishes NotebookLM from general AI chatbots?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster response times", "Source grounding in uploaded documents", "Better user interface", "Lower cost"),
                                "Source grounding in uploaded documents",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.fund2",
                                "Which technology does NotebookLM use to combine document retrieval with response generation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Supervised Learning", "Retrieval-Augmented Generation (RAG)", "Unsupervised Clustering", "Genetic Algorithms"),
                                "Retrieval-Augmented Generation (RAG)",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.fund3",
                                "What is the total maximum capacity of words across all sources in a single notebook?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10 million words", "25 million words", "50 million words", "100 million words"),
                                "25 million words",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.fund4",
                                "Which source type automatically extracts transcripts for analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("PDF files", "Google Slides", "YouTube videos", "Text files"),
                                "YouTube videos",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.fund5",
                                "What happens during the semantic indexing process in NotebookLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only exact keywords are indexed", "Semantic embeddings capture meaning beyond keywords", "Documents are compressed for storage", "Sources are translated to English"),
                                "Semantic embeddings capture meaning beyond keywords",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.fund6",
                                "When NotebookLM encounters contradictory information in sources, what should it do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Choose the most recent source", "Ignore the contradiction", "Identify and explain the discrepancy", "Average the conflicting information"),
                                "Identify and explain the discrepancy",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.fund7",
                                "What is the benefit of clicking on citations in NotebookLM responses?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It downloads the source", "It allows editing the source", "It shows the exact passage and context from the source", "It shares the citation with collaborators"),
                                "It shows the exact passage and context from the source",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.fund8",
                                "Which statement about NotebookLM's data privacy is correct?",
                                QUESTION_TYPE_CHOICE,
                                new Array("All notebooks are public by default", "Google uses your documents to train AI models", "Your sources and conversations are private unless you share them", "Anyone with a Google account can access your notebooks"),
                                "Your sources and conversations are private unless you share them",
                                "obj_final")
                );

// Module 2: Advanced Features (8 questions)
test.AddQuestion( new Question ("com.scorm.notebooklm.final.adv1",
                                "What format do Audio Overviews use to present information?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Single narrator reading", "Two-host conversational dialogue", "Music with voiceover", "Automated text-to-speech"),
                                "Two-host conversational dialogue",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.adv2",
                                "How can you customize the focus of an Audio Overview?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By selecting specific pages", "By providing focus instructions before generation", "By editing the audio after generation", "By choosing different voice types"),
                                "By providing focus instructions before generation",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.adv3",
                                "What is the main advantage of using structured output requests in prompts?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Faster response generation", "Easier consumption and organization of information", "Reduced token usage", "Better citation quality"),
                                "Easier consumption and organization of information",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.adv4",
                                "Which prompting approach involves building complex understanding incrementally?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Funnel Approach", "The Building Block Approach", "The Batch Approach", "The Template Approach"),
                                "The Building Block Approach",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.adv5",
                                "What type of prompt is most effective for identifying research gaps?",
                                QUESTION_TYPE_CHOICE,
                                new Array("'Summarize all sources'", "'What questions are left unanswered by these sources?'", "'List all the facts'", "'Create a timeline'"),
                                "'What questions are left unanswered by these sources?'",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.adv6",
                                "What remains private when you share a notebook with collaborators?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The uploaded sources", "Your individual chat history", "Shared notes", "Audio overviews"),
                                "Your individual chat history",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.adv7",
                                "Which permission level can add sources but cannot share the notebook with new collaborators?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Owner", "Editor", "Viewer", "Administrator"),
                                "Editor",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.adv8",
                                "What is a recommended practice for effective note creation in NotebookLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Create notes for every AI response", "Use descriptive titles and save key insights", "Never edit generated notes", "Only create notes at the end of research"),
                                "Use descriptive titles and save key insights",
                                "obj_final")
                );

// Module 3: Applications & Best Practices (9 questions)
test.AddQuestion( new Question ("com.scorm.notebooklm.final.app1",
                                "For which scenario is NotebookLM MOST ideally suited?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Real-time news monitoring", "Academic literature review with citations", "Video game development", "Social media management"),
                                "Academic literature review with citations",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.app2",
                                "What is the recommended source curation strategy for optimal performance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Upload all available sources immediately", "Start with core sources and add incrementally based on gaps", "Always use exactly 50 sources", "Only use PDF files"),
                                "Start with core sources and add incrementally based on gaps",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.app3",
                                "Which workflow technique involves starting with foundational sources and adding layers?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Batch processing", "Source layering strategy", "Random sampling", "Reverse chronological"),
                                "Source layering strategy",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.app4",
                                "What should you do when working with more than 50 sources?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Compress all sources into one file", "Create multiple themed notebooks", "Delete older sources randomly", "Use only the first 50 sources"),
                                "Create multiple themed notebooks",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.app5",
                                "What is a key limitation regarding NotebookLM's ability to process content?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Cannot process any PDF files", "Cannot interpret charts and graphs in images", "Cannot handle text files", "Cannot process Google Docs"),
                                "Cannot interpret charts and graphs in images",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.app6",
                                "Why is it important to verify AI responses for critical decisions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To increase response speed", "Because AI may misinterpret text or lose context", "To generate more citations", "To improve audio quality"),
                                "Because AI may misinterpret text or lose context",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.app7",
                                "What is the primary reason NotebookLM cannot answer questions about current events?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It's too slow", "It has no internet access or external knowledge", "It only works with old documents", "It requires special permissions"),
                                "It has no internet access or external knowledge",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.app8",
                                "Which factor does NOT affect NotebookLM response time?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Number of sources in notebook", "Query complexity", "The color scheme of your browser", "Source length"),
                                "The color scheme of your browser",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.notebooklm.final.app9",
                                "What is the best practice when using NotebookLM for academic work?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Copy all AI responses without verification", "Use as a research aid while maintaining critical thinking", "Replace all manual research with AI", "Never cite NotebookLM assistance"),
                                "Use as a research aid while maintaining critical thinking",
                                "obj_final")
                );
