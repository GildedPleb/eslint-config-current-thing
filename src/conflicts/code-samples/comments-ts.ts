// PathMark: ./src/conflicts/code-samples/javascript.js

/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const jsCodeToLint = `
/* Example missing JSDoc for function declaration */
function missingJsDocExample(): void {}

// Inconsistent comment style: should use either /* */ or // consistently
let inconsistentCommentStyle: boolean = true;

/* TODO: not using a recognized TODO format */
let unrecognizedTodoFormat: boolean = false;

// \`Inline code\` within comments should use backticks
let inlineCodeWithoutBackticks: string = "example";

/* Misplaced comment - should be above the variable declaration */
const misplacedComment: string = "Misplaced";

/**
 * JSDoc with incorrect @param type, should be {number} not {Number}
 * @param incorrectParamType - The incorrect param type, should be a number.
 */
function incorrectJsDocParam(incorrectParamType: number): void {}

// Non-descriptive comment that doesn't explain why or how
let nonDescriptiveComment: number = 1;

// Commented out code should be removed
// let oldVariable: number = 2;

/* Dangling block comment without content */
/**/

/* Incorrect use of tsdoc syntax in a JavaScript file */
/**
 * Incorrect use of TSDoc syntax in a TypeScript file.
 * @param name - The name parameter.
 */
function incorrectTSDocSyntax(name: string): void {}
/* Use of global TODO without linking to an issue tracker */
// TODO: Refactor this function
function globalTodoWithoutIssueLink(): void {}

/* Multiline comment style used for single line comment */
/*
This should be a single line comment.
*/
let multilineForSingleLine: boolean = true;

/**
 * JSDoc without description for the function itself
 * @param param - Describes the parameter but not the function.
 */
function jsDocWithoutFunctionDescription(param: string): void {}

// Excessive spacing between slashes and comment text
let excessiveSpacing: string = "Notice the    excessive spacing.";

/* Inline comment placed after code on the same line, which can be unclear */
let unclearInlineComment: boolean = true; // This comment might be unclear.

/**
 * @returns A boolean value, true.
 */
function returnsWithoutTypeOrDescription(): boolean {
    return true;
}

/* Comment with spelling errors that can be caught by some linters */
let comemntWithSpelingError: boolean = false;

// URL in comment not using a link tag in JSDoc
/**
 * For more info visit https://example.com
 */
function urlInCommentNotUsingLinkTag(): void {}

/* JSDoc tag @deprecated without explanation */
/**
 * @deprecated without an explanation.
 */
function deprecatedWithoutExplanation(): void {}

/* Using TODOs without specifying an assignee */
// TODO: Fix this later
function todoWithoutAssignee(): void {}

/* Comment with ambiguous reference, lacking clarity on what "this" refers to */
let ambiguousReferenceComment: string = "this"; // This needs refactoring

/**
 * JSDoc for a function with a missing @return tag, leaving the return value undocumented.
 * @param value - The value to be processed.
 * @returns The processed value, doubled.
 */
function undocumentedReturnValue(value: number): number {
    return value * 2;
}

/* Use of generic comments that add no value, such as just repeating the code */
let increment: number = 0; // Initial declaration
increment = increment + 1; // Increment by one

// Placing a comment between the declaration and the assignment, which can be confusing
let splitDeclarationAndAssignment: number;
// Important initial value
splitDeclarationAndAssignment = 42;

/**
 * Using an @example tag in JSDoc without an actual code example.
 * @example
 */
function exampleTagWithoutCode(): void {}

/* Comment that contradicts the code, potentially misleading */
let isAvailable: boolean = true; // Set to false if not available

/* Non-standard abbreviations in comments that may not be universally understood */
let calculateArea = (r: number): number => Math.PI * r * r; // Calc. A using R

/* Commented code without any explanation for why it's commented out */
// console.log("Debug info");

/* End-of-line comments that make lines excessively long, reducing readability */
let someVariable: string = "value"; // This is a comment that goes on and on and might make the line too long for some editors or styles

/**
 * Incomplete JSDoc that mentions params but not the function's purpose or behavior.
 * @param username - The username of the account.
 * @param password - The password for the account.
 */
function incompleteJsDoc(username: string, password: string): void {}


`;

export default jsCodeToLint;
