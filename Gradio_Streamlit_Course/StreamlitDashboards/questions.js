test.AddQuestion( new Question ("com.scorm.streamlit.module2.q1",
                                "What is the fundamental difference between Streamlit's execution model and traditional web frameworks?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Streamlit uses JavaScript", "Streamlit reruns the entire script on every interaction", "Streamlit requires a database", "Streamlit only works with Python 2"),
                                "Streamlit reruns the entire script on every interaction",
                                "obj_streamlit_dashboards")
                );

test.AddQuestion( new Question ("com.scorm.streamlit.module2.q2",
                                "Which Streamlit feature is essential for persisting data across script reruns?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("st.cache", "st.session_state", "st.memory", "st.persist"),
                                "st.session_state",
                                "obj_streamlit_dashboards")
                );

test.AddQuestion( new Question ("com.scorm.streamlit.module2.q3",
                                "What function is used to display streaming chat responses in Streamlit?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("st.stream()", "st.write_stream()", "st.chat_stream()", "st.display_stream()"),
                                "st.write_stream()",
                                "obj_streamlit_dashboards")
                );

test.AddQuestion( new Question ("com.scorm.streamlit.module2.q4",
                                "How do you create columns with different widths in Streamlit?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("st.columns([2, 1])", "st.columns(widths=[2, 1])", "st.create_columns(2, 1)", "st.layout([2, 1])"),
                                "st.columns([2, 1])",
                                "obj_streamlit_dashboards")
                );

test.AddQuestion( new Question ("com.scorm.streamlit.module2.q5",
                                "Where should API keys be stored in a Streamlit application?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("In the main script file", "In .streamlit/secrets.toml", "In a public GitHub repository", "In the requirements.txt file"),
                                "In .streamlit/secrets.toml",
                                "obj_streamlit_dashboards")
                );

test.AddQuestion( new Question ("com.scorm.streamlit.module2.q6",
                                "What decorator is used to cache resources that should not be serialized (like API clients)?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@st.cache", "@st.cache_resource", "@st.cache_data", "@st.memo"),
                                "@st.cache_resource",
                                "obj_streamlit_dashboards")
                );

test.AddQuestion( new Question ("com.scorm.streamlit.module2.q7",
                                "Which component is used to create collapsible sections in Streamlit?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("st.collapse()", "st.expander()", "st.accordion()", "st.section()"),
                                "st.expander()",
                                "obj_streamlit_dashboards")
                );

test.AddQuestion( new Question ("com.scorm.streamlit.module2.q8",
                                "What is the correct way to initialize a session state variable if it doesn't exist?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("if not st.session_state.counter:", "if 'counter' not in st.session_state:", "if st.session_state.has('counter'):", "if st.session_state.exists('counter'):"),
                                "if 'counter' not in st.session_state:",
                                "obj_streamlit_dashboards")
                );

test.AddQuestion( new Question ("com.scorm.streamlit.module2.q9",
                                "Which platform provides free hosting for Streamlit applications?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("Heroku", "Streamlit Cloud", "AWS Lambda", "Google App Engine"),
                                "Streamlit Cloud",
                                "obj_streamlit_dashboards")
                );

test.AddQuestion( new Question ("com.scorm.streamlit.module2.q10",
                                "What is the purpose of the on_change parameter in Streamlit input widgets?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("To validate input", "To execute a callback function when the value changes", "To change the widget color", "To enable streaming"),
                                "To execute a callback function when the value changes",
                                "obj_streamlit_dashboards")
                );