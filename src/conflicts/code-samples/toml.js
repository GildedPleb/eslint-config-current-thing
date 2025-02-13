// PathMark: ./src/conflicts/code-samples/toml.js

/*
     !!! DO NOT EDIT !!!

    This is the baseline TOML code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const tomlCodeToLint = `# This is a TOML document that showcases all major TOML features

title = "TOML Example"
description = """
A multiline string that can span
multiple lines without needing
escape characters.
"""
keywords = [ "config", "encoding", "format" ]

# Basic string with escapes
path = "C:\\Users\\nodejs\\templates"

# Raw string
regex = '''[0-9]+'''

# Integer types
int1 = +99
int2 = 42
int3 = 0
int4 = -17
# Hex, octal, and binary formats
hex = 0xDEADBEEF
oct = 0o755
bin = 0b11010110

# Float examples
float1 = +1.0
float2 = 3.1415
float3 = -0.01
float4 = 5e+22
float5 = 1e06
float6 = -2E-2
float7 = 6.626e-34

# Boolean
bool1 = true
bool2 = false

# Datetime
created = 1979-05-27T07:32:00Z
updated = 1979-05-27T07:32:00-08:00
date1 = 1979-05-27
time1 = 07:32:00

[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00
organization = "GitHub"

[database]
enabled = true
ports = [ 8001, 8001, 8002 ]
data = [ ["delta", "phi"], [3.14] ]
temp_targets = { cpu = 79.5, case = 72.0 }

# Array of tables
[[fruits]]
name = "apple"
[fruits.physical]
color = "red"
shape = "round"

[[fruits]]
name = "banana"
[fruits.physical]
color = "yellow"
shape = "curved"

# Nested tables
[servers]

  [servers.alpha]
  ip = "10.0.0.1"
  role = "frontend"
  enabled = true

  [servers.beta]
  ip = "10.0.0.2"
  role = "backend"
  enabled = false

# Indentation is optional but helps with readability
[dependencies]
  [dependencies.lib1]
  version = "1.0.0"
  features = ["f1", "f2"]

  [dependencies.lib2]
  version = "2.1.0"
  features = []

# Dotted keys
"key.with.dots" = "value"
"quoted.key".nested = "value"

# Local date-time with nanoseconds
precise_time = 1979-05-27T07:32:00.999Z`;

export default tomlCodeToLint;
// EOF
