// PathMark: ./src/definitions/configs/airbnb-base-es6.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "prefer-arrow-callback": ["mocha"],
  },
  definitions: `{
    files: jsFiles,
    ignores: testFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "airbnb-base",
  name: "AirBnb Base",
  nameSecondary: "ES6",
  packages: [
    {
      declaredAs: "airbnbBaseES6",
      package: "eslint-config-airbnb-base",
      requiresImport: false,
      subModule: "/rules/es6",
    },
  ],
  requiredPlugins: [],
  rules: `"arrow-body-style": [
      2,
      "as-needed",
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    "arrow-parens": [2, "always"],
    "arrow-spacing": [2, { after: true, before: true }],
    "constructor-super": 2,
    "generator-star-spacing": [2, { after: true, before: false }],
    "no-class-assign": 2,
    "no-confusing-arrow": [
      2,
      {
        allowParens: true,
      },
    ],
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 0,
    "no-new-symbol": 2,
    "no-restricted-exports": [
      2,
      {
        restrictedNamedExports: ["default", "then"],
      },
    ],
    "no-restricted-imports": [
      0,
      {
        paths: [],
        patterns: [],
      },
    ],
    "no-this-before-super": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-rename": [
      2,
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    "no-var": 2,
    "object-shorthand": [
      2,
      "always",
      {
        avoidQuotes: true,
        ignoreConstructors: false,
      },
    ],
    "prefer-arrow-callback": [
      2,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "prefer-const": [
      2,
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    "prefer-destructuring": [
      2,
      {
        AssignmentExpression: {
          array: true,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "prefer-numeric-literals": 2,
    "prefer-reflect": 0,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2,
    "rest-spread-spacing": [2, "never"],
    "sort-imports": [
      0,
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "symbol-description": 2,
    "template-curly-spacing": 2,
    "yield-star-spacing": [2, "after"],`,
} satisfies Config;
// EOF
