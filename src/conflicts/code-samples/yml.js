// PathMark: ./src/conflicts/code-samples/yml.js

/*
     !!! DO NOT EDIT !!!

    This is the baseline YML code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const ymlCodeToLint = `# Expanded YAML example demonstrating advanced features.

# Scalars: Strings, integers, floats, booleans
name: John Doe
age: 30
height: 5.9
active: true

# Sequences (Lists)
skills:
  - Programming
  - Design
  - Writing

# Nested sequences and more detailed objects
tasks:
  - id: 1
    name: Task One
    description: Complete the report
    completed: false
  - id: 2
    name: Task Two
    description: Design the website
    completed: true

# Mappings (Dictionaries)
address:
  street: 1234 Elm Street
  city: Metropolis
  state: NY
  zip: 10001

# References and anchors to avoid duplication and merging
default_address: &default_address
  street: 1234 Pine Street
  city: Smalltown
  state: CA
  zip: 90210

johns_address:
  <<: *default_address
  apartment: 101

# Inheritance and merging of maps
base_task: &base_task
  progress: incomplete
  priority: medium

urgent_task:
  <<: *base_task
  priority: high
  description: Complete immediately

# Complex nesting with arrays and maps
user_profile:
  personal_info:
    first_name: John
    last_name: Doe
    age: 30
  contact_info:
    email: john.doe@example.com
    phone: 123-456-7890
  roles:
    - Admin
    - User

# eslint-disable-next-line prettier/prettier
favorites: {color: blue, food: pizza, sport: soccer}

# eslint-disable-next-line yml/flow-mapping-curly-spacing
favoritesPrettier: { color: blue, food: pizza, sport: soccer }

favorites: {color: blue, food: pizza, sport: soccer}

# Multi-line strings using different styles
description: |
  This block style keeps newlines.
  It's good for more controlled formatting.
  Perfect for code blocks or pre-formatted text.

description_keep: |+
  This style keeps trailing newlines.
  There are newlines after this sentence.

description_strip: |-
  This style strips trailing newlines.
  There won't be newlines after this sentence.

folded_description: >
  This folded style converts newlines
  to spaces unless it's a double newline.

  New paragraph.

folded_description_keep: >+
  This style keeps trailing newlines.
  Newlines will be preserved at the end of this block.

folded_description_strip: >-
  This style strips trailing newlines.
  It will look like one paragraph with a break only here.

  New paragraph.`;

export default ymlCodeToLint;
// EOF
