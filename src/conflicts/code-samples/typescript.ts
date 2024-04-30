/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @stylistic/no-tabs */
// PathMark: ./src/conflicts/code-samples/typescript.ts

/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const tsCodeToLint = `
// ***************************** //
// CERTIFIED CONFLICT CODE START //
// ***************************** //


   const      asdf:      number      =      1;                      // Explicitly typed, but with egregious spacing
   const	   asdf2:	   number	   = 	  	  	  2;                    // Explicitly typed, but with egregious tabbing

const double: string = "double";            /* double quotes, with TypeScript but mundane */
const single: string = 'single';            /* single quotes, TypeScript adding a layer of 'why' */
const backtick: string = \`backtick\`;        /* backticks quotes, TypeScript meets template literals */

var varDeclare: number = 0;                 /* var declaration, sticking with var for the chaos */
let letDeclare: number = 0;                 /* let declaration, now with TypeScript typing */
const constDeclare: number = 0;             /* const declaration, TypeScript making it 'constant-er' */

let abcd;                                   /* let declaration */
let abcd: string;                           /* let declaration, now with TypeScript typing */
let abcde: string = "0";                    /* let declaration, now with TypeScript typing */
let abcdef = "0";                           /* let declaration, now with no TypeScript typing */

const noSemi: number = 0                    /* without semi, TypeScript questioning life choices */
const semi: number = 0;                     /* with semi, TypeScript feeling a bit more normal */

const objA: { first: string; last: string; } = {
  first: 'John',
  last: 'Doe',                              /* dangling comma, TypeScript still doesn't care */
};
const objB: { first: string; last: string } = {
  first: 'John',
  last: 'Doe'                               /* no dangling comma, TypeScript equally unbothered */
};

function funcName(): void {}                /* function declaration style, TypeScript yawns */
const funcExpr: () => void = function() {}; /* function expression style, TypeScript wonders why */
const arrowFunc: () => void = () => {};     /* arrow function syntax, TypeScript nods politely */

for (let i: number = 0; i < 10; i++) {}     /* for loop formatting, TypeScript counting sheep */
if (true) console.log(1)                    /* if statement formatting, TypeScript starts to doodle */
if (true) {console.log(1)}                  /* if statement formatting, TypeScript doodles a cat */
if (true) {                                 /* if statement formatting, TypeScript draws a spaceship */
  console.log(1)                            /* if statement formatting, TypeScript's spaceship flies */
}                                           /* if statement formatting, TypeScript lands the ship */
if (true)                                   /* if statement formatting, TypeScript starts a new drawing */
{                                           /* if statement formatting, TypeScript draws a mystery box */
  console.log(1)                            /* if statement formatting, TypeScript reveals...another cat */
}                                           /* if statement formatting, TypeScript's cats are everywhere */
const arrA: number[] = [1, 2, 3,];          /* array with dangling comma, TypeScript shrugs */
const arrB: number[] = [1, 2, 3]            /* array without dangling comma, TypeScript shrugs harder */
const eqeq: boolean = 0 == "0";                /* loose equality, Using == vs === for comparison, with TypeScript asking 'Really?' */
const eqeqeq: boolean = 0 === "0";             /* strict equality, TypeScript nods approvingly but wonders about the comparison */

const trailingSpace: string = "trailing ";     /* line with trailing space, TypeScript doesn't trim but silently judges */

function blockSpace(): void {
  console.log("example");
}                                              /* TypeScript sees this normal function and gets a tiny break from the chaos */

function curry(func: (...args: any[]) => any): ( ...args: any[]) => any {
  return function curried(...args: any[]): any {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2: any[]): any {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}                                              /* TypeScript, now with dynamic typing, dives into currying with a 'Why not?' attitude */
const sum2: (a: number, b: number, c: number) => number = (a, b, c) => a + b + c; // Explicitly typing curried sum function

const curriedSum = curry(sum2);                /* TypeScript sees the curry and raises you a typed function */
console.log(curriedSum(1)(2)(3));              // Currying function for partial application, TypeScript just rolls with it

const asdfg: { [key: string]: number } = {
  a: 1,
  b: 2,       // No quotes, TypeScript doesn't mind
  "c": 3,     // double quotes, TypeScript says 'Consistency? What's that?'
  'd': 4,     // single quotes, TypeScript keeps on keeping on
  "e-f": 5,   // double quotes, TypeScript starts questioning string key choices
  "g/h": 6,   // double quotes, TypeScript wonders if you're okay
  'i.j': 7,   // single quotes, TypeScript decides you're creatively chaotic
};                                               /* Object with mixed key quotation styles, TypeScript embraces the anarchy */

/**
 * TypeScript sees the documentation and thinks, 'At least there's some attempt at clarity.'
 * @param first - a number
 * @param second - a number
 * @param third - a number
 */
function t(first: number, second: number, third: number): void {
  if (
    first < 100_000_000
    && second < 200_000_000
    && third < 300_000_000
    && second < first
    && third > first
  )
    console.log("less than");
}                                              /* TypeScript, with typed parameters, makes this function seem almost normal */

function td(first: number): void {             // TypeScript adds types but can't fix the bracket spacing
  if (                                         // TypeScript watches on, powerless over the aesthetics
    first < 100_000_000                        // TypeScript, now deeply involved in this, keeps track of arbitrary numbers
  )                                            // TypeScript, at this point, just wants to see where this goes
  {                                            // TypeScript has given up on correcting the bracket style
    console.log("less than");                  // TypeScript acknowledges the consistency in console logging
  }                                            // TypeScript closes the block, silently applauding the effort
}                                              // TypeScript, done with this function, braces for what's next

const sum2345: number = 1 + // Operator indentation might trip up linters expecting different styles
          2 -
          3 *
          4 /
          5; // A mathematical expression, TypeScript contemplates its life choices

const total: number = 1 // Line breaks before the operator could be against linter rules
          + 2
          - 3; // TypeScript, realizing it's part of this, decides to just go with the flow

const multiLineString: string = \`This is a string // Multi-line strings with template literals
that spans multiple // Still going, TypeScript wonders if it's too late to become a poem
lines.\`; // TypeScript decides it's a free verse poem now

const multiLineString2: string = "This is a string " + // Concatenation across lines might be flagged
"that spans across " + // TypeScript, now a poetry critic, thinks this lacks rhythm
"multiple lines."; // TypeScript concludes the poem is more of a prose poem

const isEven: (n: number) => string = n => n % 2 === 0 ? 'Even' : 'Odd'; // Returns 'Even' or 'Odd' based on n, TypeScript nods in approval

(function() { console.log("IIFE for scoping and immediate execution"); })(); // IIFE, TypeScript appreciates the classic approach

const immediateOutcome: string = (function(n: number): string { return n % 2 === 0 ? "Even" : "Odd"; })(5); // IIFE with ternary for odd/even, TypeScript approves

const funcMap: Map<() => string, string> = new Map(); // Map to store functions, TypeScript is intrigued
funcMap.set(() => "keyFunction", "Value associated with 'keyFunction'"); // Using function as key, TypeScript finds this clever
console.log(funcMap.get([...funcMap.keys()][0])!()); // Immediately invokes function key to retrieve value, TypeScript is on board but cautious with the 'non-null assertion operator'

const score: number = 85;
const grade: string = score >= 90 ? "A" : score >= 80 ? "B" : "C"; // Assigns a grade based on score, TypeScript wonders about grade inflation

const result: string = true ? "value1" // Ternary operator indentation might be flagged
: "value2"; // TypeScript, now a philosopher, ponders the binary nature of choices

const funcInTernary: () => void = true ? function() { console.log("True branch"); } : function() { console.log("False branch"); };
funcInTernary(); // Invokes the function chosen by the ternary, TypeScript acknowledges the unconventional wisdom

const loggingProxy: ProxyConstructor = new Proxy({a: 1}, { // TypeScript sees 'ProxyConstructor' and wonders if it's too formal
  get: (target: { [key: string]: number }, prop: string): any => { // TypeScript, now a spy, is all about this proxy game
    console.log(\`Accessed \${prop}\`); return target[prop]; // TypeScript enjoys a good console.log espionage
  }
});
  console.log(loggingProxy.a); // Accessing triggers logging, TypeScript chuckles at the simplicity

let loopCounter: number = 0;
const maxLoops: number = 5;
while(loopCounter++ < maxLoops ? console.log(\`Loop \${loopCounter}\`) : false); // Ternary in loop condition, TypeScript is dizzy but entertained

const fetchData: (url: string) => Promise<void> = async url => { // Async function to fetch data, TypeScript gets serious about types
  const response = await fetch(url); // Awaits the fetch call, TypeScript is on the edge of its seat
  const data = await response.json(); // Awaits the conversion to JSON, TypeScript is now a data enthusiast
  console.log(data); // Logs the fetched data, TypeScript feels fulfilled
};
fetchData('https://api.example.com/data'); // Invokes fetchData with URL, TypeScript thinks about getting a snack

const withDefaultValue: <T extends object>(target: T, defaultValue: any) => T = (target, defaultValue) => new Proxy(target, {
  get: (obj: object, prop: string | symbol): any => (prop in obj ? obj[prop as keyof typeof obj] : defaultValue), // Returns default value if property is missing, TypeScript nods sagely
  set: (obj: object, prop: string | symbol, value: any): boolean => {
    console.log(\`Setting value '\${value}' to '\${String(prop)}'\`); // Logs the action of setting a property, TypeScript applauds the communication
    obj[prop as keyof typeof obj] = value; // TypeScript approves the use of generics and indexing types
    return true;
  }
});
withDefaultValue({}, 'Unknown'); // TypeScript sees this and thinks, 'Well, isn't that clever?'

// See: Note 1 Below
// Example scenario where the conflict occurs
const exampleFunction = (obj?: object | null | undefined) => {
  // Original code that might be written by a developer
  if (obj) {
    console.log('Object is not null or undefined');
  }
}

// After applying "@typescript-eslint/strict-boolean-expressions" with "allowNullableObject: false"
const exampleFunction = (obj?: object | null | undefined) => {
  if (obj != null) { // Auto-fixed to comply, but introduces a new issue
    console.log('Object is not null or undefined');
  }
}

// This change violates the "eqeqeq" rule (should use !== instead of !=)
// and the "unicorn/no-null" rule (should not use null)
const exampleFunction = (obj?: object | null | undefined) => {
  if (obj !== undefined) { // One way to satisfy both "eqeqeq" and "unicorn/no-null"
    console.log('Object is not undefined, but might be null, meaning we must also check for null');
  }
}

// Correct code, sadly.
const exampleFunction = (obj?: object | null | undefined) => {
  if (obj !== undefined && obj !== null) { // One way to satisfy both "eqeqeq" and "unicorn/no-null"
    console.log('Object is not undefined and not null');
  }
}

const readonlyArray: ReadonlyArray<number> = [1, 2, 3];

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}
const person = { name: "Alice", age: 25 };
const values: (string | number)[] = pluck(person, ['name', 'age']); // Uses index access type

/**
 * @returns A boolean value, true.
 */
function returnsWithoutTypeOrDescription(): boolean {
    return true;
}

/**
 * JSDoc for a function with a missing @return tag, leaving the return value undocumented.
 * @param value - The value to be processed.
 * @returns The processed value, doubled.
 */
function undocumentedReturnValue(value: number): number {
    return value * 2;
}

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
 *
 * @param extraLongNameVariable1 - thing
 * @param extraLongNameVariable2 - thing
 * @param extraLongNameVariable3 - thing
 * @param extraLongNameVariable786576544 - thing
 * @param extraLongNameVariable5 - thing
 * @param extraLongNameVariable6 - thing
 */
function checkConditionsjhtrcj(
  extraLongNameVariable1: boolean,
  extraLongNameVariable2: boolean,
  extraLongNameVariable3: boolean,
  extraLongNameVariable786576544: boolean,
  extraLongNameVariable5: boolean,
  extraLongNameVariable6: boolean,
) {
  if (
    extraLongNameVariable1 &&
    extraLongNameVariable2 &&
    extraLongNameVariable3 &&
    (extraLongNameVariable786576544 ||
      extraLongNameVariable5 ||
      extraLongNameVariable6)
  ) {
    console.log("indent-binary-ops");
  }
}

function* permute(array_, m = []) {
  if (m.length === size) {
    yield m;
  } else {
    for (let index = 0; index < array_.length; index++) {
      const current = [...array_];
      const next = current.splice(index, 1);
      yield* permute(current, m.concat(next));
    }
  }
}

// *************************** //
// CERTIFIED CONFLICT CODE END //
// *************************** //



let tuple: [number, string] = [1, 'TupleElement'];
function identity<T>(arg: T): T {
  return arg;
}
let notSure: unknown = 4;
notSure = "maybe a string instead";
function error(message: string): never {
  throw new Error(message);
}
interface CompleteConfig {
  host: string;
  port: number;
  database: string;
}
function updateConfig(config: Partial<CompleteConfig>) {
  // Update config here
}
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
type IsString<T> = T extends string ? "yes" : "no";
type T1 = IsString<string>; // "yes"
type T2 = IsString<number>; // "no"
type Flatten<T> = T extends any[] ? T[number] : T;
type TestFlatten = Flatten<string[] | number[]>; // Should be string | number due to distribution over unions
type ReadonlyIfObject<T> = {
  [P in keyof T]: T[P] extends Function ? T[P] : Readonly<T[P]>;
};
interface ComplexObject {
  id: number;
  name: string;
  nested: {
    date: Date;
  };
  reset(): void;
}
const complexObject: ReadonlyIfObject<ComplexObject> = {
  id: 1,
  name: "ReadOnly",
  nested: {
    date: new Date(),
  },
  reset() {}, // Function types are not made Readonly
};
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
const inferredFunction: ReturnType<() => string> = "Hello, World!"; // Infers return type of the function as string


const uniqueKey: unique symbol = Symbol();
const myObject = {
  [uniqueKey]: "secretValue",
};
console.log(myObject[uniqueKey]); // Accessible through the unique symbol
namespace Animal {
  export class Dog {}
}
namespace Animal {
  export interface Dog {
    bark(): void;
  }
}
const myDog = new Animal.Dog();
myDog.bark = () => console.log("Woof");
type EventNames = "onClick" | "onHover";
type EventHandlers = \`\${EventNames}_Handler\`;
function isString(test: any): test is string {
  return typeof test === "string";
}
const testValue: any = "This is a string";
if (isString(testValue)) {
  console.log(testValue.length); // \`testValue\` is now known to be of type string
}
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig) {}
createSquare({ colour: "red", width: 100 } as SquareConfig); // Bypasses excess property checks with type assertion
interface MergedInterface {
  fromInterface: string;
}
interface MergedInterface {
  fromSecondInterface: number;
}
type MergedInterface = {
  fromTypeAlias: boolean;
};
function padding(a: number): string; // Single number overload
function padding(a: number, b: number, c?: number, d?: number): string; // Overload with four parameters
function padding(a: number, b?: number, c?: number, d?: number): string {
    if (b !== undefined && c !== undefined && d !== undefined) {
        return \`Padding: top: \${a}, right: \${b}, bottom: \${c}, left: \${d}\`;
    } else if (b !== undefined) {
        return \`Padding: \${a}px \${b}px\`;
    } else {
        return \`Padding: \${a}px\`;
    }
}
console.log(padding(1)); // Uses the first overload
console.log(padding(1, 2)); // Uses the second overload with two arguments
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'rectangle'; width: number; height: number };
function area(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.size ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        default:
            // Exhaustiveness check using the never type
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
function getResponse(status: 'success' | 'failure'): string {
    switch (status) {
        case 'success':
            return 'Request succeeded';
        case 'failure':
            return 'Request failed';
        default:
            // This line is unreachable if all cases are handled
            const _exhaustiveCheck: never = status;
            throw new Error(\`Unhandled case: \${_exhaustiveCheck}\`);
    }
}
interface Bird {
    fly(): void;
    layEggs(): void;
}
interface Fish {
    swim(): void;
    layEggs(): void;
}
function getSmallPet(): Fish | Bird {
    // Implementation that returns either Fish or Bird
    return {
        swim() {
            console.log('swimming');
        },
        layEggs() {
            console.log('laying eggs');
        },
    };
}
let pet = getSmallPet();
if ((pet as Fish).swim) {
    (pet as Fish).swim();
} else if ((pet as Bird).fly) {
    (pet as Bird).fly();
}
function startRace(...participants: [string, ...string[]]): void {
    console.log(\`The race has started with participants: \${participants.join(', ')}\`);
}
startRace('Alice', 'Bob', 'Charlie'); // Uses rest parameters with tuple types for a minimum number of arguments

enum Direction1 {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

enum Direction2 {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4
}

enum Direction3 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
  no = 2,
  yes = "YESSSSS",
}

// EOF

`;

/*
  Note 1
  "allowNullableObject: false," auto-fixes type \`object | undefined\` poorly.
  When checking a nullable object, \`if (obj)...\` it auto-fixes to \`if (obj != null)...\`.
  This violates both the "unicorn/no-null" rule and the "eqeqeq" rule, causing unneeded further corrections.
  See: https://eslint.org/docs/latest/rules/eqeqeq
      https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-null.md
      https://typescript-eslint.io/rules/strict-boolean-expressions/#fixes-and-suggestions
  "@typescript-eslint/strict-boolean-expressions": [
   2,
   {
     allowAny: false,
     allowNullableBoolean: false,
     allowNullableNumber: false,
     allowNullableObject: true,
     allowNullableString: false,
     allowNumber: false,
     allowString: false,
   },
 ]
*/

export default tsCodeToLint;
// EOF
