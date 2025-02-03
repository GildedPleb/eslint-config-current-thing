// PathMark: ./src/definitions/configs/airbnb-base-style.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "no-restricted-syntax": ["unicorn"],
  },
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "airbnb-base",
  name: "AirBnb Base",
  nameSecondary: "Style",
  packages: [
    {
      declaredAs: "airbnbBaseStyle",
      package: "eslint-config-airbnb-base",
      requiresImport: false,
      subModule: "/rules/style",
    },
  ],
  requiredPlugins: ["jsdoc"],
  rules: `"array-bracket-newline": [0, "consistent"],
    "array-bracket-spacing": [2, "never"],
    "array-element-newline": [0, { minItems: 3, multiline: true }],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { allowSingleLine: true }],
    camelcase: [
      2,
      { ignoreDestructuring: false, properties: "never" },
    ],
    "capitalized-comments": [
      0,
      "never",
      {
        block: {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: ".*",
        },
        line: {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: ".*",
        },
      },
    ],
    "comma-dangle": [
      2,
      {
        arrays: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],
    "comma-spacing": [2, { after: true, before: false }],
    "comma-style": [
      2,
      "last",
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          NewExpression: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
        },
      },
    ],
    "computed-property-spacing": [2, "never"],
    "consistent-this": 0,
    "eol-last": [2, "always"],
    "func-call-spacing": [2, "never"],
    "func-name-matching": [
      0,
      "always",
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    "func-names": 1,
    "func-style": [0, "expression"],
    "function-call-argument-newline": [2, "consistent"],
    "function-paren-newline": [2, "multiline-arguments"],
    "id-denylist": 0,
    "id-length": 0,
    "id-match": 0,
    "implicit-arrow-linebreak": [2, "beside"],
    indent: [
      2,
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        flatTernaryExpressions: false,
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        ignoreComments: false,
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ImportDeclaration: 1,
        ObjectExpression: 1,
        outerIIFEBody: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
      },
    ],
    "jsdoc/require-jsdoc": 0,
    "jsx-quotes": [0, "prefer-double"],
    "key-spacing": [2, { afterColon: true, beforeColon: false }],
    "keyword-spacing": [
      2,
      {
        after: true,
        before: true,
        overrides: {
          case: { after: true },
          return: { after: true },
          throw: { after: true },
        },
      },
    ],
    "line-comment-position": [
      0,
      {
        applyDefaultPatterns: true,
        ignorePattern: "",
        position: "above",
      },
    ],
    "linebreak-style": [2, "unix"],
    "lines-around-comment": 0,
    "lines-around-directive": [
      2,
      {
        after: "always",
        before: "always",
      },
    ],
    "lines-between-class-members": [
      2,
      "always",
      { exceptAfterSingleLine: false },
    ],
    "logical-assignment-operators": [
      0,
      "always",
      {
        enforceForIfStatements: true,
      },
    ],
    "max-depth": [0, 4],
    "max-len": [
      2,
      100,
      2,
      {
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    "max-lines": [
      0,
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-lines-per-function": [
      0,
      {
        IIFEs: true,
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-nested-callbacks": 0,
    "max-params": [0, 3],
    "max-statements": [0, 10],
    "max-statements-per-line": [0, { max: 1 }],
    "multiline-comment-style": [0, "starred-block"],
    "multiline-ternary": [0, "never"],
    "new-cap": [
      2,
      {
        capIsNew: false,
        capIsNewExceptions: [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List",
        ],
        newIsCap: true,
        newIsCapExceptions: [],
      },
    ],
    "new-parens": 2,
    "newline-after-var": 0,
    "newline-before-return": 0,
    "newline-per-chained-call": [2, { ignoreChainWithDepth: 4 }],
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-continue": 2,
    "no-inline-comments": 0,
    "no-lonely-if": 2,
    "no-mixed-operators": [
      2,
      {
        allowSamePrecedence: false,
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["/", "*"],
          ["&", "|", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!=="],
          ["&&", "||"],
        ],
      },
    ],
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-assign": [2],
    "no-multiple-empty-lines": [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
    "no-negated-condition": 0,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-plusplus": 2,
    "no-restricted-syntax": [
      2,
      {
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        selector: "ForInStatement",
      },
      // {
      //   selector: 'ForOfStatement',
      //   message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      // },
      {
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        selector: "LabeledStatement",
      },
      {
        message:
          "with is disallowed in strict mode because it makes code impossible to predict and optimize.",
        selector: "WithStatement",
      },
    ],
    "no-spaced-func": 0,
    "no-tabs": 2,
    "no-ternary": 0,
    "no-trailing-spaces": [
      2,
      {
        ignoreComments: false,
        skipBlankLines: false,
      },
    ],
    "no-underscore-dangle": [
      2,
      {
        allow: [],
        allowAfterSuper: false,
        allowAfterThis: false,
        enforceInMethodNames: true,
      },
    ],
    "no-unneeded-ternary": [2, { defaultAssignment: false }],
    "no-whitespace-before-property": 2,
    "nonblock-statement-body-position": [
      2,
      "beside",
      { overrides: {} },
    ],
    "object-curly-newline": [
      2,
      {
        ExportDeclaration: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
        ImportDeclaration: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
        ObjectExpression: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
        ObjectPattern: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
      },
    ],
    "object-curly-spacing": [2, "always"],
    "object-property-newline": [
      2,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "one-var": [2, "never"],
    "one-var-declaration-per-line": [2, "always"],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [
      2,
      "before",
      { overrides: { "=": "none" } },
    ],
    "padded-blocks": [
      2,
      {
        blocks: "never",
        classes: "never",
        switches: "never",
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    "padding-line-between-statements": 0,
    "prefer-exponentiation-operator": 2,
    "prefer-object-spread": 2,
    "quote-props": [
      2,
      "as-needed",
      { keywords: false, numbers: false, unnecessary: true },
    ],
    quotes: [2, "single", { avoidEscape: true }],
    semi: [2, "always"],
    "semi-spacing": [2, { after: true, before: false }],
    "semi-style": [2, "last"],
    "sort-keys": [0, "asc", { caseSensitive: false, natural: true }],
    "sort-vars": 0,
    "space-before-blocks": 2,
    "space-before-function-paren": [
      2,
      {
        anonymous: "always",
        asyncArrow: "always",
        named: "never",
      },
    ],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": [
      2,
      {
        nonwords: false,
        words: true,
      },
    ],
    "spaced-comment": [
      2,
      "always",
      {
        block: {
          balanced: true,
          exceptions: ["-", "+"],
          markers: ["=", "!", ":", "::"],
        },
        line: {
          exceptions: ["-", "+"],
          markers: ["=", "!", "/"],
        },
      },
    ],
    "switch-colon-spacing": [2, { after: true, before: false }],
    "template-tag-spacing": [2, "never"],
    "unicode-bom": [2, "never"],
    "wrap-regex": 0,`,
} satisfies Config;
// EOF
