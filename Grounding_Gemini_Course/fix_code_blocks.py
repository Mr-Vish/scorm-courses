import os
import re

def fix_code_blocks(content):
    """Wrap blockquote content in pre/code tags if not already wrapped."""
    # Pattern to find blockquotes that don't already have pre/code
    pattern = r'<blockquote>\n((?:(?!<pre>|</blockquote>).)+)\n</blockquote>'
    
    def replace_func(match):
        code_content = match.group(1)
        # Check if it's already wrapped
        if '<pre>' in code_content or not code_content.strip():
            return match.group(0)
        return f'<blockquote><pre><code>{code_content}</code></pre></blockquote>'
    
    return re.sub(pattern, replace_func, content, flags=re.DOTALL)

# Process all HTML files in the course
base_path = r'C:\work\course Generation\data\final\Courses\Vishal\Grounding_Gemini_Course'

folders = [
    'GroundingFundamentals',
    'GoogleSearchGrounding',
    'EnterpriseDataGrounding',
    'ProsAndCons'
]

for folder in folders:
    folder_path = os.path.join(base_path, folder)
    if os.path.exists(folder_path):
        for filename in os.listdir(folder_path):
            if filename.endswith('.html'):
                filepath = os.path.join(folder_path, filename)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                fixed_content = fix_code_blocks(content)
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(fixed_content)
                
                print(f'Fixed: {folder}/{filename}')

print('All files processed!')
