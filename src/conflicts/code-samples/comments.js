// PathMark: ./src/conflicts/code-samples/comments.js

/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const jsCodeToLint = `
/* Example missing JSDoc for function declaration */
function missingJsDocExample() {}

// Inconsistent comment style: should use either /* */ or // consistently
let inconsistentCommentStyle = true;

/* TODO: not using a recognized TODO format */
let unrecognizedTodoFormat = false;

//\`Inline code\` within comments should use backticks
let inlineCodeWithoutBackticks = "example";

/* Misplaced comment - should be above the variable declaration */
const misplacedComment = "Misplaced";

/**
 * JSDoc with incorrect @param type, should be {number} not {Number}
 * @param {Number} incorrectParamType
 */
function incorrectJsDocParam(incorrectParamType) {}

// Non-descriptive comment that doesn't explain why or how
let nonDescriptiveComment = 1;

// Commented out code should be removed
// let oldVariable = 2;

/* Dangling block comment without content */
/**/

/* Incorrect use of tsdoc syntax in a JavaScript file */
/**
 * @param {string} name
 */
function incorrectTSDocSyntax(name) {}
/* Use of global TODO without linking to an issue tracker */
// TODO: Refactor this function
function globalTodoWithoutIssueLink() {}

/* Multiline comment style used for single line comment */
/*
This should be a single line comment.
*/
let multilineForSingleLine = true;

/**
 * JSDoc without description for the function itself
 * @param {string} param - Describes the parameter but not the function.
 */
function jsDocWithoutFunctionDescription(param) {}

// Excessive spacing between slashes and comment text
let excessiveSpacing = "Notice the    excessive spacing.";

/* Inline comment placed after code on the same line, which can be unclear */
let unclearInlineComment = true; // This comment might be unclear.

/**
 * @returns without type or description in JSDoc
 */
function returnsWithoutTypeOrDescription() {
    return true;
}

/* Comment with spelling errors that can be caught by some linters */
let comemntWithSpelingError = false;

// URL in comment not using a link tag in JSDoc
/**
 * For more info visit https://example.com
 */
function urlInCommentNotUsingLinkTag() {}

/* JSDoc tag @deprecated without explanation */
/**
 * @deprecated
 */
function deprecatedWithoutExplanation() {}

/* Using TODOs without specifying an assignee */
// TODO: Fix this later
function todoWithoutAssignee() {}

/* Comment with ambiguous reference, lacking clarity on what "this" refers to */
let ambiguousReferenceComment = "this"; // This needs refactoring

/**
 * JSDoc for a function with a missing @return tag, leaving the return value undocumented
 * @param {number} value - The value to be processed.
 */
function undocumentedReturnValue(value) {
    return value * 2;
}

/* Use of generic comments that add no value, such as just repeating the code */
let increment = increment + 1; // Increment by one

// Placing a comment between the declaration and the assignment, which can be confusing
let splitDeclarationAndAssignment;
// Important initial value
splitDeclarationAndAssignment = 42;

/**
 * Using an @example tag in JSDoc without actual code example
 * @example
 */
function exampleTagWithoutCode() {}

/* Comment that contradicts the code, potentially misleading */
let isAvailable = true; // Set to false if not available

/* Non-standard abbreviations in comments that may not be universally understood */
let calculateArea = (r) => Math.PI * r * r; // Calc. A using R

/* Commented code without any explanation for why it's commented out */
// console.log("Debug info");

/* End-of-line comments that make lines excessively long, reducing readability */
let someVariable = "value"; // This is a comment that goes on and on and might make the line too long for some editors or styles

/**
 * Incomplete JSDoc that mentions params but not the function's purpose or behavior
 * @param {string} username - The username of the account
 * @param {string} password - The password for the account
 */
function incompleteJsDoc(username, password) {}

/**
 * @param {number} first - numberator
 * @param {number} second - denominator
 * @return {number} - returning a number using the RETURN key not RETURNS
 */
const multiply = (first, second) => first * second;


`;

export default jsCodeToLint;
// EOF
