import re
import os

files = [
    r"C:\work\course Generation\data\final\Courses\Vishal\Intro_LLMs_Course\LLMApplications\UseCases.html",
    r"C:\work\course Generation\data\final\Courses\Vishal\Intro_LLMs_Course\PromptEngineering\Fundamentals.html",
    r"C:\work\course Generation\data\final\Courses\Vishal\Intro_LLMs_Course\PromptEngineering\AdvancedTechniques.html",
    r"C:\work\course Generation\data\final\Courses\Vishal\Intro_LLMs_Course\ProsAndCons\AdvantagesLimitations.html"
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add <pre> after <blockquote> and </pre> before </blockquote>
    content = re.sub(r'<blockquote>\n(?!<pre>)', r'<blockquote>\n<pre>\n', content)
    content = re.sub(r'(?<!</pre>)\n</blockquote>', r'\n</pre>\n</blockquote>', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated: {os.path.basename(filepath)}")

print("All files updated!")
