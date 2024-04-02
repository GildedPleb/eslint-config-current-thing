// PathMark: ./src/conflicts/code-samples/javascript.js

/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const jsCodeToLint = `
export default function greet(name) { return \`Hello, \${name}!\`; } // Default export
export const add = (a, b) => a + b; // Named export
export const subtract = (a, b) => a - b; // Named export
import greet from './greet.js'; // Importing default export
import { add, subtract } from './math.js'; // Importing named exports
import * as math from './math.js'; // Import all as an object
import('./module.js').then(module => { // Dynamic import
  const exportedFunction = module.default;
  exportedFunction();
});
export const config = { key: 'value' }; // Exporting an object
const lodash = require('lodash'); // CommonJS require
export class Calculator { // Exporting a class
  add(a, b) { return a + b; }
}
import { add as addNumbers } from './math.js'; // Renaming imports
export { add as addOperation } from './math.js'; // Renaming exports
const double = "double";         /* double quotes */
const single = 'single';         /* single quotes */
const backtick = \`backtick\`;   /* backticks quotes */
var varDeclare = 0;        /* var declaration */
let letDeclare = 0;        /* let declaration */
const constDeclare = 0;    /* const declaration */
const noSemi = 0        /* without semi */
const semi = 0;         /* wit semi */
const objA = {
  first: 'John',
  last: 'Doe',         /* dangling comma */
};
const objB = {
  first: 'John',
  last: 'Doe'         /* no dangling comma */
};
function funcName() {}                  /* function declaration style */
const funcExpr = function() {};         /* function expression style */
const arrowFunc = () => {};             /* arrow function syntax */
for (let i = 0; i < 10; i++) {}         /* for loop formatting */
if (true) {}                            /* if statement formatting */
const arrA = [1, 2, 3,];                /* array with dangling comma */
const arrB = [1, 2, 3]                  /* array without dangling comma */
// Using == vs === for comparison
const eqeq = 0 == "0";                  /* loose equality */
const eqeqeq = 0 === "0";               /* strict equality */
// Trailing spaces
const trailingSpace = "trailing ";      /* line with trailing space */
// Block spacing
function blockSpace() {
  console.log("example");
}
// Object shorthand
const name = "John";
const objC = {name};                    /* object property shorthand */
// Template literals vs concatenation
const name = "John";
const greeting = "Hello, " + name;      /* concatenation */
const templateGreeting = \`Hello, \${name}\`; /* template literal */
const arrowWithImplicitReturn = () => "return value"; // Implicit return in arrow functions
const oldSchoolConcat = "Hello, " + "World!"; // Plus operator for string concatenation
const person = { name: "John", age: 30 }; const { name, age } = person; // Object destructuring
const numbers = [1, 2, 3]; const [one, two, three] = numbers; // Array destructuring
function greet(name = "Guest") { return \`Hello, \${name}!\`; } // Default parameters in functions
const multiLineString = \`This is a string
that spans multiple
lines.\`; // Multi-line strings with template literals
const newArray = [...numbers, 4, 5, 6]; // Spread operator for array
const newPerson = { ...person, location: "City" }; // Spread operator for object
const asyncFunction = async () => { await someAsyncAction(); }; // Async function with await
const mappedArray = numbers.map(number => number * 2); // Array .map() method
const tenaryOperator = numbers.length > 2 ? true : false; // Ternary operator for conditional
const bitwiseOperation = 5 | 2; // Bitwise operator example
const typeOfCheck = typeof "Hello"; // typeof operator usage
const deleteOperator = delete person.age; // delete operator usage
const inOperator = "name" in person; // in operator for property existence
(function() { console.log("IIFE for scoping and immediate execution"); })(); // IIFE
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
} // Closure
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
} // Rest parameters
const {name = "Anonymous", age} = {age: 30}; // Destructuring with defaults
const personName = "John";
const greeting = \`Hello, \${personName}, it's \${new Date().getFullYear()}\`; // Template strings
const x = 1, y = 2;
const obj = { x, y, [personName]: true }; // Shorthand and computed properties
const handler = {
  get: (obj, prop) => prop in obj ? obj[prop] : 37
};
const p = new Proxy({}, handler); // Proxy example
const uniqueKey = Symbol('unique');
const objWithSymbol = { [uniqueKey]: "value" }; // Symbols
async function fetchData() {
  const data = await fetch('https://api.example.com');
  return data.json();
} // Async/Await
function* fibonacci(n) {
  let current = 0, next = 1;
  while (n--) {
    yield current;
    [current, next] = [next, current + next];
  }
} // Generators
if (true) { // Allman style might be expected by the linter
  console.log("Hello");
} else { // Inconsistent brace style could confuse some linters
  console.log("World");
}
const result = true ? "value1" // Ternary operator indentation might be flagged
: "value2";
const sum = 1 + // Operator indentation might trip up linters expecting different styles
          2 -
          3 *
          4 /
          5;
const total = 1 // Line breaks before the operator could be against linter rules
          + 2
          - 3;
const mixedBraces = function() { // Mixed brace styles in one construct
  if (true)
  {
      console.log("Mixed braces");
  } // Possible confusion for linters enforcing a single brace style
};
const binaryOpsIndentation = 1 + 2 - 3 * 4 / 5; // Binary operation without proper indentation
const chainedMethods = object // Linters might expect chaining to be more visually distinct
.method1()
.method2();
const multiLineString = "This is a string " + // Concatenation across lines might be flagged
"that spans across " +
"multiple lines.";
const complexExpression = ((a + b) * c) - d / e; // Complex expressions without clear indentation
const arrowFunction = (a, b) => { return a + b; }; // Inconsistent use of braces in arrow functions
if (condition) { // Evaluates if condition is true
    console.log("Condition is true");
} else { // Executes if condition is false
    console.log("Condition is false");
}
switch(expression) { // Switch case based on expression's value
    case 'a':
        console.log('a');
        break; // Breaks are crucial to prevent fall-through
    case 'b':
        console.log('b');
        break;
    default: // Executes if no case matches
        console.log('default');
}
for (let i = 0; i < 5; i++) { // Standard for loop with initialization, condition, and increment
    console.log(i);
}
let j = 0; // Initialization outside the loop
while (j < 5) { // Condition checked before each loop iteration
    console.log(j);
    j++; // Increment within the loop
}
let k = 0;
do { // Executes block at least once
    console.log(k);
    k++;
} while (k < 5); // Condition checked after each loop iteration
const object = {a: 1, b: 2, c: 3};
for (const key in object) { // Iterates over object keys
    console.log(\`\${key}: \${object[key]}\`);
}
const array = ['a', 'b', 'c'];
for (const value of array) { // Iterates over iterable objects like arrays
    console.log(value);
}
for (let l = 0; l < 5; l++) {
    if (l === 2) continue; // Skips the rest of the loop when l is 2
    console.log(l);
}
for (let m = 0; m < 5; m++) {
    if (m === 3) break; // Exits the loop when m is 3
    console.log(m);
}
const isEven = n => n % 2 === 0 ? 'Even' : 'Odd'; // Returns 'Even' or 'Odd' based on n
const age = 20;
const canVote = age >= 18 ? "Yes" : "No"; // Determines voting eligibility
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C"; // Assigns a grade based on score
const loginAttempt = true;
const accessGranted = loginAttempt && age >= 18 ? "Access granted" : "Access denied"; // Combines logical AND with ternary
const hasLicense = false;
const canDrive = hasLicense || age >= 16 ? "Can drive" : "Cannot drive"; // Combines logical OR with ternary
const isLoggedIn = false;
const userStatus = !isLoggedIn ? "Guest" : "Member"; // Uses logical NOT with ternary
const isPositive = num => num >= 0 ? "Positive" : "Negative"; // Returns Positive or Negative based on num
const numberStatus = isPositive(-5); // Invokes function with ternary inside
const userName = "John";
const greeting = \`Hello, \${userName ? userName : "Guest"}\`; // Uses ternary inside a template literal
const andResult = (5 & 1) === 1 ? "Odd" : "Even"; // Checks if the number is odd using binary AND
const orResult = (2 | 1) === 3 ? "Has 1-bit" : "No 1-bit"; // Uses binary OR to check for a 1-bit
const needsAssistance = age > 65 || score < 50 ? "Needs assistance" : "Independent"; // Combines logical operators in ternary
const complexOperation = (5 | 2) && (10 || 0) ? "Truthy" : "Falsy"; // Combines binary OR, logical AND, and logical OR
const config1Rule = "we"
const config = {rules: {[config1Rule]: 9}}
if (
  ("rules" in config1 &&
    config1.rules !== undefined &&
    config1.rules[config1Rule] === 0) ||
  config1.rules[config1Rule][0] === 0
) {
  console.log("stuff");
}
const immediateInvoke = (age => age >= 18 ? "Adult" : "Minor")(16); // Immediately invokes with age
const logPersonStatus = ({ age, score }) => console.log(age >= 18 ? "Adult" : "Minor", score >= 60 ? "Pass" : "Fail");
logPersonStatus({ age: 20, score: 55 }); // Destructures and applies ternary in one go
const condition = false;
const result = condition && (() => console.log("Executed if true"))(); // Function executes if condition is true
const bitwiseLogicalMix = ((5 & 1) && age > 18) ? "Odd and adult" : "Even or minor"; // Combines bitwise AND with logical AND
const nestedTernaryInTemplate = \`Status: \${age > 18 ? (score > 90 ? "Excellent" : "Good") : "Too young"}\`; // Uses nested ternary in a template string
let loopCounter = 0;
const maxLoops = 5;
while(loopCounter++ < maxLoops ? console.log(\`Loop \${loopCounter}\`) : false); // Ternary in loop condition
const funcInTernary = true ? function() { console.log("True branch"); } : function() { console.log("False branch"); };
funcInTernary(); // Invokes the function chosen by the ternary
const sayHello = name => console.log(\`Hello, \${name}\`);
const sayGoodbye = name => console.log(\`Goodbye, \${name}\`);
const greetOrFarewell = (greet, name) => (greet ? sayHello : sayGoodbye)(name);
greetOrFarewell(true, "Alice"); // Selects and invokes function based on condition
const dynamicProperty = { [age >= 18 ? "adult" : "minor"]: true };
console.log(dynamicProperty); // Object with dynamic property name based on age
const flexibleFunction = (...args) => console.log(args.length > 2 ? "Many arguments" : "Few arguments");
flexibleFunction(1, 2); // Ternary checks the number of arguments
flexibleFunction(1, 2, 3, 4); // Adjusts behavior based on arguments count
const immediateOutcome = (function(n) { return n % 2 === 0 ? "Even" : "Odd"; })(5); // IIFE with ternary for odd/even
const userInfo = ({name: userName = "Anonymous", preferences: {theme = "dark"} = {}} = {}) => console.log(\`\${userName} prefers \${theme}\`); // Nested destructuring with defaults
userInfo({name: "John", preferences: {}}); // Invokes with partial object
(async () => { const response = await fetch('https://api.example.com'); console.log(await response.json()); })(); // Async IIFE for immediate async operations
const logMessage = ({message = \`No message provided at \${new Date().toLocaleTimeString()}\`} = {}) => console.log(message); // Uses template literal in default param
logMessage(); // Invokes without arguments
function* fibonacci(n) { let [a, b] = [0, 1]; while (n-- > 0) { yield a; [a, b] = [b, a + b]; } } // Generator for Fibonacci
console.log([...fibonacci(5)]); // Uses spread to convert generator to array
const loggingProxy = new Proxy({a: 1}, { get: (target, prop) => { console.log(\`Accessed \${prop}\`); return target[prop]; } }); // Proxy to log property accesses
console.log(loggingProxy.a); // Accessing triggers logging
const setup = {timeout: 0}; // Setup object with intentional 0 value
const timeout = setup.timeout || 300; // Incorrectly overrides 0 with 300 due to logical OR
const correctTimeout = setup.timeout ?? 300; // Correctly uses 0, only defaults on null/undefined
const funcMap = new Map(); // Map to store functions
funcMap.set(() => "keyFunction", "Value associated with 'keyFunction'"); // Using function as key
console.log(funcMap.get([...funcMap.keys()][0])()); // Immediately invokes function key to retrieve value
const dynamicKey = "id";
const entity = { [dynamicKey]: 123, name: "EntityName" }; // Object with dynamic key based on variable
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
const myObject = withDefaultValue({}, 'Unknown');
console.log(myObject.name); // Logs 'Unknown'
myObject.name = 'JavaScript'; // Logs setting action
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
const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // Currying function for partial application
const fibonacci = (() => {
    const cache = {};
    return function fib(n) {
        if (n in cache) { // Checks cache to avoid recalculating
            return cache[n];
        } else {
            if (n < 2) return n;
            cache[n] = fib(n - 1) + fib(n - 2); // Stores result in cache
            return cache[n];
        }
    };
})();
console.log(fibonacci(10)); // Uses memoization to improve performance
function* infiniteNumbers() {
    let n = 0;
    while (true) {
        yield n++;
    }
}
const numbers = infiniteNumbers(); // Creates an infinite sequence of numbers
console.log(numbers.next().value); // Logs 0
console.log(numbers.next().value); // Logs 1
const dynamicFunc = new Function('name', 'return \`Hello, \${name}!\`');
console.log(dynamicFunc('Dynamic')); // Creates and invokes a function dynamically
const Person = (() => {
    const privateProps = new WeakMap();
    return class {
        constructor(name) {
            privateProps.set(this, { name });
        }
        getName() {
            return privateProps.get(this).name; // Accesses private property
        }
    };
})();
const person = new Person('Private Name');
console.log(person.getName()); // Encapsulation using WeakMap
async function* asyncRange(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulates delay
        yield i;
    }
}
(async () => {
    for await (let num of asyncRange(1, 3)) { // Asynchronously iterates over the range
        console.log(num); // Logs numbers with delay
    }
})();
const obj = { a: 1 };
Reflect.defineProperty(obj, 'b', { value: 2 }); // Dynamically defines a new property
console.log(obj.b); // Meta-programming with Reflect API
const html = strings => strings.join('');
const div = html\`<div>Hello, World!</div>\`; // Simplified example of tagged template for HTML
console.log(div); // Uses tagged templates for custom processing
function commaOperatorExample() {
    let a = 1, b = 2;
    return (a += b, a * b); // The comma operator allows multiple expressions, returns the last
}
console.log(commaOperatorExample()); // Demonstrates use of the comma operator


 `;

export default jsCodeToLint;
// EOF
