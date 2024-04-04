// PathMark: ./src/conflicts/code-samples/regex.js

/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const jsCodeToLint = `
const regexEscapeCharacters = /\\d+/; // Consider escaping backslashes in regex patterns
const regexSimplified = /[a-zA-Z0-9_]/; // Could be simplified to /\\w/
const regexBroadMatch = /.*/; // Potentially inefficient, consider more specific pattern
const regexLazyQuantifier = /<.*?>/; // Lazy quantifiers can lead to performance issues
const regexMultipleCharClasses = /[0-9][a-z][A-Z]/; // Could be combined into a single character class
const regexNegatedClass = /[^\\w\\s]/; // Consider specifying what to match instead of what not to match
const regexCapturingGroups = /(foo)(bar)(baz)/; // Consider if capturing groups are necessary
const regexComplex = /(?:[01]?\\d\\d?|2[0-4]\\d|25[0-5])\\. ... /; // Example of an IP address regex; consider using a library
const regexLookaround = /(?<=@)\\w+(?=\\.com)/; // Lookarounds may make patterns hard to read and maintain
const regexGreedy = /<div>.*<\\/div>/; // Greedy quantifier can lead to unexpected matches, consider using a non-greedy quantifier
const regexOverlappingRanges = /[a-zA-Zz]/; // 'z' is unnecessary because it's included in 'a-z'
const regexLookaheadOveruse = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$/; // Complex way to enforce password rules, may be simplified
const regexExcessiveBacktracking = /(a+)+$/; // Nested quantifiers can cause performance issues due to excessive backtracking
const regexBoundaryConfusion = /\\bword\\b/; // Correct usage, but can be confusing in terms of what \\b represents
const regexNonCapturingMisuse = /(?:foo|bar|baz)/; // Non-capturing group used where capturing might be intended
const regexLooksLikeComment = /\\/*/; // Looks like the start of a block comment, can be confusing
const regexUnnecessaryQuantifiers = /(foo){1,1}/; // {1,1} is unnecessary, equivalent to 'foo'
const regexOverlySpecificEscape = /\\[\\^\\]/; // Escaping '^' inside a character class is unnecessary
const regexDotAllMisuse = /foo.*bar/s; // Using dot-all flag 's' when specific character class might be more appropriate
const regexComplexForSimple = /^1?$|^(11+?)\\1+$/; // Used to check for prime numbers, example of regex being used for a task better suited for regular programming constructs
const regexCatastrophicBacktracking = /(a+){10,}/; // Challenges linters to catch performance issues due to backtracking
const regexVariableLengthLookbehind = /(?<=a{1,3})b/; // Tests linter's handling of advanced lookaround features
const regexUnicodeWithoutUFlag = /\\p{L}/; // Should suggest adding the 'u' flag for proper Unicode handling
const regexReDoS = /(a+)+$/; // Linters could warn about security implications of vulnerable patterns
const regexOverlyComplex = /^([a-z]\\d{2}(\\[A-Z]|-)){2,}$/; // Challenge is for linters to suggest simplification for better readability
const regexDeprecatedSyntax = /\\b\\w+\\s*\\b/; // Assuming future deprecation, this tests if linters suggest modern alternatives
const regexStringMethodMisuse = 'Hello World'.split(/(\\w+)/); // Tests if linters can identify misuses in context with string methods
const regexUnicodeHandling = /\\p{Script=Hiragana}+/u; // Checks if linters recommend the 'u' flag for scripts or Unicode blocks
const regexSimplePatternLookahead = /(?=.*[0-9]).{6,}/; // Might be overly complex for simple validations, linters could suggest direct character classes
const regexUnnecessaryNonGreedy = /<.*?>/; // In some contexts, the non-greedy quantifier is unnecessary; linters could catch this

`;

export default jsCodeToLint;

// EOF
