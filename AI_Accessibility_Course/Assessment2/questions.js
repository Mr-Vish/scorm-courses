// Assessment 2: Scenario-Based Assessment - Practical Application
// Tests ability to apply concepts to real-world situations

test.AddQuestion( new Question ("com.scorm.aiaccessibility.assess2.q1",
                                "Your e-commerce platform has 75,000 product images without alt text. The legal team warns of ADA compliance risk. What is the most practical first step?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hire a team of 10 writers to manually create alt text", "Use AI to generate alt text for all images, then prioritize human review for top-selling products", "Remove all images until alt text can be added manually", "Add generic alt text like 'product image' to all images"),
                                "Use AI to generate alt text for all images, then prioritize human review for top-selling products",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.aiaccessibility.assess2.q2",
                                "A blind user reports that your multi-step checkout form is impossible to complete with NVDA screen reader. What is the most likely root cause?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The form uses too many colors", "Form inputs lack proper labels and ARIA attributes", "The form loads too slowly", "The form has too many steps"),
                                "Form inputs lack proper labels and ARIA attributes",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.aiaccessibility.assess2.q3",
                                "Your organization needs to caption 500 hours of training videos. Budget is $10,000. Manual captioning costs $150/hour. What approach maximizes quality within budget?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manually caption the first 66 hours and leave the rest", "Use AI transcription (Whisper) for all videos ($2,500), then use remaining budget for quality review of critical content", "Use free auto-captions from YouTube without review", "Delay the project until more budget is available"),
                                "Use AI transcription (Whisper) for all videos ($2,500), then use remaining budget for quality review of critical content",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.aiaccessibility.assess2.q4",
                                "Your data analytics dashboard displays complex charts showing quarterly revenue trends. A blind executive needs to access this information. What is the best accessibility solution?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increase chart size and use brighter colors", "Provide a detailed text summary and an accessible data table with the same information", "Email the executive a verbal description", "Create an audio recording describing the charts"),
                                "Provide a detailed text summary and an accessible data table with the same information",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.aiaccessibility.assess2.q5",
                                "Your company's employee handbook is a 200-page PDF written at a graduate reading level. Employees with cognitive disabilities report difficulty understanding it. What is the most effective solution?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reduce the font size to fit more content per page", "Use AI to generate a simplified version at 8th-grade reading level, available alongside the original", "Add more images throughout the document", "Break the document into 200 separate one-page files"),
                                "Use AI to generate a simplified version at 8th-grade reading level, available alongside the original",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.aiaccessibility.assess2.q6",
                                "An automated accessibility scan of your website identifies 847 issues. Resources are limited. How should you prioritize remediation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Fix all Level AAA issues first", "Address critical issues blocking core user tasks first, then high-traffic pages, then remaining issues", "Fix the easiest issues first to show quick progress", "Ignore issues with 'Low' severity ratings"),
                                "Address critical issues blocking core user tasks first, then high-traffic pages, then remaining issues",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.aiaccessibility.assess2.q7",
                                "Your VP of Engineering proposes using AI-generated alt text without any human review to save time and money. How should you respond?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Agree completely - AI is accurate enough", "Explain that AI should augment human expertise, not replace it, and that critical content requires human review for quality and legal compliance", "Refuse to use AI at all and insist on 100% manual creation", "Implement the VP's suggestion but don't tell the legal team"),
                                "Explain that AI should augment human expertise, not replace it, and that critical content requires human review for quality and legal compliance",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.aiaccessibility.assess2.q8",
                                "Your team is building a new customer portal from scratch. The project manager asks when accessibility should be addressed. What is the best answer?",
                                QUESTION_TYPE_CHOICE,
                                new Array("After the portal launches and we get user feedback", "Integrate accessibility requirements into design, development, and testing from day one", "During the final QA phase before launch", "Only if we receive legal complaints"),
                                "Integrate accessibility requirements into design, development, and testing from day one",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.aiaccessibility.assess2.q9",
                                "You discover that a critical third-party chat widget on your site has multiple accessibility violations. The vendor has no timeline for fixes. What should you do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Remove the widget immediately regardless of business impact", "Document the issue, notify the vendor with a deadline, explore accessible alternatives, and implement a remediation plan", "Hide the accessibility issues with custom CSS", "Add a disclaimer that the chat widget is not accessible"),
                                "Document the issue, notify the vendor with a deadline, explore accessible alternatives, and implement a remediation plan",
                                "obj_assessment_2")
                );

test.AddQuestion( new Question ("com.scorm.aiaccessibility.assess2.q10",
                                "Leadership asks you to demonstrate ROI for your AI accessibility initiative. Which metrics combination is most meaningful?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Number of AI tools purchased and training hours completed", "Percentage of content meeting WCAG 2.1 AA, user satisfaction scores from people with disabilities, and reduction in accessibility complaints", "Lines of code written and number of images processed", "Social media mentions and press coverage"),
                                "Percentage of content meeting WCAG 2.1 AA, user satisfaction scores from people with disabilities, and reduction in accessibility complaints",
                                "obj_assessment_2")
                );
