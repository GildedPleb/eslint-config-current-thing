// PathMark: ./src/conflicts/code-samples/typescript.ts

/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const tsCodeToLint = `
// PathMark: ./src/conflicts/code-samples/typescript.ts

export default function greet(name: string): string {
  return \`Hello, \${name}!\`; // Default export with type annotation
}
export const add = (a: number, b: number): number => a + b; // Named export with type annotations
export const subtract = (a: number, b: number): number => a - b; // Named export with type annotations
import greetFunction from './greet.js'; // Importing default export with type annotation
import { add as addNumbers, subtract as subtractNumbers } from './math.js'; // Importing named exports with type annotations
import * as mathModule from './math.js'; // Import all as an object with type annotation
import('./module.js').then((module: { default: () => void }) => {
  const exportedFunction = module.default;
  exportedFunction();
});
export interface Config {
  key: string;
}
export const config: Config = { key: 'value' };
const lodash = require('lodash') as any; // Assuming any type as it's a commonJS import
export class Calculator {
  add(a: number, b: number): number { return a + b; }
}
import { add as addOperation } from './math.js'; // Renaming exports with type annotations
const double: string = "double";
const single: string = 'single';
const backtick: string = \`backtick\`;
var varDeclare: number = 0;
let letDeclare: number = 0;
const constDeclare: number = 0;
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}
interface Person {
  firstName: string;
  lastName: string;
}
const person: Person = {
  firstName: 'John',
  lastName: 'Doe',
};
let tuple: [number, string] = [1, 'TupleElement'];
const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
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
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}
const person = { name: "Alice", age: 25 };
const values: (string | number)[] = pluck(person, ['name', 'age']); // Uses index access type
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



// EOF

`;

export default tsCodeToLint;
// EOF
