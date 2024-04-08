/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @stylistic/no-tabs */
// PathMark: ./src/conflicts/code-samples/javascript-style.js

/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const jsCodeToLint = `
// JS

// ***************************** //
// CERTIFIED CONFLICT CODE START //
// ***************************** //

   const     asdf      =     1    ;     // Spacing spaces
 	const 	asdf2 	  = 	  2	  ;         // Spacing tabs
const double = "double";                /* double quotes */
const single = 'single';                /* single quotes */
const backtick = \`backtick\`;          /* backticks quotes */
var varDeclare = 0;                     /* var declaration */
let letDeclare = 0;                     /* let declaration */
const constDeclare = 0;                 /* const declaration */
const noSemi = 0                        /* without semi */
const semi = 0;                         /* wit semi */
const objA = {
  first: 'John',
  last: 'Doe',                          /* dangling comma */
};
const objB = {
  first: 'John',
  last: 'Doe'                           /* no dangling comma */
};
function funcName() {}                  /* function declaration style */
const funcExpr = function() {};         /* function expression style */
const arrowFunc = () => {};             /* arrow function syntax */
for (let i = 0; i < 10; i++) {}         /* for loop formatting */
if (true) console.log(1)                /* if statement formatting */
if (true) {console.log(1)}              /* if statement formatting */
if (true) {                             /* if statement formatting */
  console.log(1)                        /* if statement formatting */
}                                       /* if statement formatting */
if (true)                               /* if statement formatting */
{                                       /* if statement formatting */
  console.log(1)                        /* if statement formatting */
}                                       /* if statement formatting */
const arrA = [1, 2, 3,];                /* array with dangling comma */
const arrB = [1, 2, 3]                  /* array without dangling comma */
const eqeq = 0 == "0";                  /* loose equality, Using == vs === for comparison */
const eqeqeq = 0 === "0";               /* strict equality */
const trailingSpace = "trailing ";      /* line with trailing space */
function blockSpace() {
  console.log("example");
}

function curry(func) {
  return function curried(...args) {
      if (args.length >= func.length) {
          return func.apply(this, args);
      } else {
          return function(...args2) {
              return curried.apply(this, args.concat(args2));
          }
      }
  };
}
const sum2 = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // Currying function for partial application

const asdfg = {
  a: 1,
  b: 2,     // No quotes
  "c": 3,   // double quotes
  'd': 4,   // single quotes
  "e-f": 5, // double quotes
  "g/h": 6, // double quotes
  'i.j': 7, // single quotes
};

/**
 *
 * @param {number} first - a number
 * @param {number} second - a number
 * @param {number} third - a number
 */
function t(first, second, third) {
  if (
    first < 100_000_000
    && second < 200_000_000
    && third < 300_000_000
    && second < first
    && third > first
  )
    console.log("less than");
}

function td(first) { // bracket spacing
  if ( // bracket spacing
    first < 100_000_000 // bracket spacing
  ) // bracket spacing
  { // bracket spacing
    console.log("less than"); // bracket spacing
  } // bracket spacing
} // bracket spacing

const sum2345 = 1 + // Operator indentation might trip up linters expecting different styles
          2 -
          3 *
          4 /
          5;
const total = 1 // Line breaks before the operator could be against linter rules
          + 2
          - 3;

const multiLineString = \`This is a string // Multi-line strings with template literals
that spans multiple // Multi-line strings with template literals
lines.\`; // Multi-line strings with template literals

const multiLineString2 = "This is a string " + // Concatenation across lines might be flagged
"that spans across " + // Concatenation across lines might be flagged
"multiple lines."; // Concatenation across lines might be flagged

const isEven = n => n % 2 === 0 ? 'Even' : 'Odd'; // Returns 'Even' or 'Odd' based on n

(function() { console.log("IIFE for scoping and immediate execution"); })(); // IIFE
const immediateOutcome = (function(n) { return n % 2 === 0 ? "Even" : "Odd"; })(5); // IIFE with ternary for odd/even

const funcMap = new Map(); // Map to store functions
funcMap.set(() => "keyFunction", "Value associated with 'keyFunction'"); // Using function as key
console.log(funcMap.get([...funcMap.keys()][0])()); // Immediately invokes function key to retrieve value

const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C"; // Assigns a grade based on score

const result = true ? "value1" // Ternary operator indentation might be flagged
: "value2";

const funcInTernary = true ? function() { console.log("True branch"); } : function() { console.log("False branch"); };
funcInTernary(); // Invokes the function chosen by the ternary

const loggingProxy = new Proxy({a: 1}, { get: (target, prop) => { console.log(\`Accessed \${prop}\`); return target[prop]; } }); // Proxy to log property accesses
console.log(loggingProxy.a); // Accessing triggers logging

let loopCounter = 0;
const maxLoops = 5;
while(loopCounter++ < maxLoops ? console.log(\`Loop \${loopCounter}\`) : false); // Ternary in loop condition

const fetchData = async url => { // Async function to fetch data
  const response = await fetch(url); // Awaits the fetch call
  const data = await response.json(); // Awaits the conversion to JSON
  console.log(data); // Logs the fetched data
};
fetchData('https://api.example.com/data'); // Invokes fetchData with URL
  const withDefaultValue = (target, defaultValue) => new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue), // Returns default value if property is missing
    set: (obj, prop, value) => {
      console.log(\`Setting value '\${value}' to '\${prop}'\`);
      obj[prop] = value; // Logs the action of setting a property
        return true;
    }
});
withDefaultValue({}, 'Unknown');

const regexOverlySpecificEscape = /\\[\\^\\]/; // Escaping '^' inside a character class is unnecessary
const regexOverlappingRanges = /[a-zA-Zz]/; // 'z' is unnecessary because it's included in 'a-z'
const regexUnicodeWithoutUFlag = /\\p{L}/; // Should suggest adding the 'u' flag for proper Unicode handling
const regexOverlyComplex = /^([a-z]\\d{2}(\\[A-Z]|-)){2,}$/; // Challenge is for linters to suggest simplification for better readability
const foo1234 = /.|abc/
const bar1234 = /[\\s\\S]/;
const baz1234 = /(?:a|b|c+)*$/;
const fuz1234 = /\\}/

const binaryDataEncoded = \`Binary data: \${String.fromCharCode(0x01, 0xFF, 0x00)}\`; // Best practice: Clearly document the use of binary data within strings

/**
 * Incredibly, this function and the next are needed in tandem to create a conflict
 * @returns without type or description in JSDoc
 */
function returnsWithoutTypeOrDescriptionKhKYgF() {
    return true;
}

/**
 * This function is needed with the previous function to create a conflict.
 * @param {number} first - numb
 * @param {number} second - denominator
 * @return {number} - returning a number using the RETURN key not RETURNS
 */
const multiplyKgKIyG = (first, second) => first * second;

function checkConditionsjhtrcj(
  extraLongNameVariable1,
  extraLongNameVariable2,
  extraLongNameVariable3,
  extraLongNameVariable4,
  extraLongNameVariable5,
  extraLongNameVariable6,
) {
  if (
    extraLongNameVariable1 &&
    extraLongNameVariable2 &&
    extraLongNameVariable3(
      extraLongNameVariable4 ||
        extraLongNameVariable5 ||
      extraLongNameVariable6,
    )
  ) {
    console.log("indent-binary-ops");
  }
}

// *************************** //
// CERTIFIED CONFLICT CODE END //
// *************************** //

 `;

export default jsCodeToLint;
// EOF
