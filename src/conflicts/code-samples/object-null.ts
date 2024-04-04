// PathMark: ./src/conflicts/code-samples/object-null.ts

/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

// "allowNullableObject: false," auto-fixes type \`object | undefined\` poorly.
// When checking a nullable object, \`if (obj)...\` it auto-fixes to \`if (obj != null)...\`.
// This violates both the "unicorn/no-null" rule and the "eqeqeq" rule, causing unneeded further corrections.
// See: https://eslint.org/docs/latest/rules/eqeqeq
//      https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-null.md
//      https://typescript-eslint.io/rules/strict-boolean-expressions/#fixes-and-suggestions
// "@typescript-eslint/strict-boolean-expressions": [
//   2,
//   {
//     allowAny: false,
//     allowNullableBoolean: false,
//     allowNullableNumber: false,
//     allowNullableObject: true,
//     allowNullableString: false,
//     allowNumber: false,
//     allowString: false,
//   },
// ]

const tsCodeToLint = `
// See: https://typescript-eslint.io/rules/strict-boolean-expressions/
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
    console.log('Object is not null or undefined');
  }
}


// EOF

`;

export default tsCodeToLint;
// EOF
