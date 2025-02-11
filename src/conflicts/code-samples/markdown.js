// PathMark: ./src/conflicts/code-samples/markdown.js

/*
     !!! DO NOT EDIT !!!

    This is the baseline MD code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const mdCodeToLint = `
\`\`\`js
import currentThing from "eslint-config-current-thing";

export default [...currentThing()];
\`\`\`

\`\`\`ts
import currentThing from "eslint-config-current-thing";

export default [...currentThing()];
\`\`\`

You'll also probably want something like this in your \`package.json\` (edit accordingly):

\`\`\`json
{
  "type": "module",
  "prettier": {},
  "engines": {
    "node": ">=20.0.0"
  },
  "browserslist": [
    "defaults and supports es6-module",
    "maintained node versions"
  ]
}
\`\`\`

# Sample Markdown Document

This is a _sample_ Markdown document to showcase **various features**.

## Table of Contents

- [Headers](#headers)
- [Text Emphasis](#text-emphasis)
- [Lists](#lists)
- [Links and Images](#links-and-images)
- [Code Blocks and Syntax Highlighting](#code-blocks-and-syntax-highlighting)
- [Tables](#tables)
- [Blockquotes](#blockquotes)
- [Horizontal Rules](#horizontal-rules)

## Headers

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

## Text Emphasis

- _Italic_ or _Italic_
- **Bold** or **Bold**
- **_Combined Emphasis_**
- ~~Strikethrough~~

## Lists

### Ordered List

1. First item
2. Second item
   1. Subitem
   2. Subitem
3. Third item

### Unordered List

- Bullet item
  - Subitem
  - Subitem
- Bullet item
- Bullet item

## Links and Images

- [OpenAI](https://www.openai.com)
- ![Image Alt Text](https://via.placeholder.com/150)

## Code Blocks and Syntax Highlighting

\`\`\`python
def hello_world():
    print("Hello, Markdown!")
\`\`\`

\`\`\`bash
echo "Hello, command line!"
\`\`\`

## Tables

| Name       | Age | Occupation   |
| ---------- | --- | ------------ |
| John Doe   | 29  | Software Dev |
| Jane Smith | 32  | Data Analyst |

## Blockquotes

> To be or not to be, that is the question.
>
> - William Shakespeare

## Horizontal Rules

---

Use three or more dashes for a horizontal rule.

---

## Advanced Formatting

<!-- eslint-disable markdown/no-missing-label-refs -- this is OK -->

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

<!-- eslint-enable markdown/no-missing-label-refs -- safe to re-enable now -->

### HTML in Markdown

You can also use plain HTML for more complex formatting:

<div style="color:red;">
    This is some red text.
</div>

---

**Note:** The effectiveness of certain Markdown features can depend on the platform you are using to view the Markdown file. For instance, HTML may not render in all Markdown viewers.
`;

export default mdCodeToLint;
// EOF
