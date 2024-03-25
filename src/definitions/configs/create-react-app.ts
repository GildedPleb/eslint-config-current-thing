// PathMark: ./src/definitions/configs/create-react-app.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    languageOptions: {
      globals: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    ${RULES}
  }`,
  name: "Create React App",
  packages: [
    { name: "cra", package: "eslint-config-react-app", requiresImport: false },
  ],
  requiredPlugins: ["react", "react-hooks", "import", "jsx-a11y", "flowtype"],
  rules: `{
    "react/jsx-uses-vars": 1,
    "react/jsx-uses-react": 1,
    "array-callback-return": 1,
    "default-case": [1, { commentPattern: "^no default$" }],
    "dot-location": [1, "property"],
    "eqeqeq": [1, "smart"],
    "new-parens": 1,
    "no-array-constructor": 1,
    "no-caller": 1,
    "no-cond-assign": [1, "except-parens"],
    "no-const-assign": 1,
    "no-control-regex": 1,
    "no-delete-var": 1,
    "no-dupe-args": 1,
    "no-dupe-class-members": 1,
    "no-dupe-keys": 1,
    "no-duplicate-case": 1,
    "no-empty-character-class": 1,
    "no-empty-pattern": 1,
    "no-eval": 1,
    "no-ex-assign": 1,
    "no-extend-native": 1,
    "no-extra-bind": 1,
    "no-extra-label": 1,
    "no-fallthrough": 1,
    "no-func-assign": 1,
    "no-implied-eval": 1,
    "no-invalid-regexp": 1,
    "no-iterator": 1,
    "no-label-var": 1,
    "no-labels": [1, { allowLoop: true, allowSwitch: false }],
    "no-lone-blocks": 1,
    "no-loop-func": 1,
    "no-mixed-operators": [
      1,
      {
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        allowSamePrecedence: false,
      },
    ],
    "no-multi-str": 1,
    "no-global-assign": 1,
    "no-unsafe-negation": 1,
    "no-new-func": 1,
    "no-new-object": 1,
    "no-new-symbol": 1,
    "no-new-wrappers": 1,
    "no-obj-calls": 1,
    "no-octal": 1,
    "no-octal-escape": 1,
    "no-redeclare": 1,
    "no-regex-spaces": 1,
    "no-restricted-syntax": [1, "WithStatement"],
    "no-script-url": 1,
    "no-self-assign": 1,
    "no-self-compare": 1,
    "no-sequences": 1,
    "no-shadow-restricted-names": 1,
    "no-sparse-arrays": 1,
    "no-template-curly-in-string": 1,
    "no-this-before-super": 1,
    "no-throw-literal": 1,
    "no-undef": 2,
    "no-restricted-globals": ["error", ...restrictedGlobals],
    "no-unreachable": 1,
    "no-unused-expressions": [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-unused-labels": 1,
    "no-unused-vars": [
      1,
      {
        args: "none",
        ignoreRestSiblings: true,
      },
    ],
    "no-use-before-define": [
      1,
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    "no-useless-computed-key": 1,
    "no-useless-concat": 1,
    "no-useless-constructor": 1,
    "no-useless-escape": 1,
    "no-useless-rename": [
      1,
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    "no-with": 1,
    "no-whitespace-before-property": 1,
    "react-hooks/exhaustive-deps": 1,
    "require-yield": 1,
    "rest-spread-spacing": [1, "never"],
    "strict": [1, "never"],
    "unicode-bom": [1, "never"],
    "use-isnan": 1,
    "valid-typeof": 1,
    "no-restricted-properties": [
      2,
      {
        object: "require",
        property: "ensure",
        message:
          "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
      },
      {
        object: "System",
        property: "import",
        message:
          "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
      },
    ],
    "getter-return": 1,

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    "import/first": 2,
    "import/no-amd": 2,
    "import/no-anonymous-default-export": 1,
    "import/no-webpack-loader-syntax": 2,

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/forbid-foreign-prop-types": [
      1,
      { allowInPropTypes: true },
    ],
    "react/jsx-no-comment-textnodes": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-target-blank": 1,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": [
      1,
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "react/no-danger-with-children": 1,

    // Disabled because of undesirable warnings
    // See https://github.com/facebook/create-react-app/issues/5204 for
    // blockers until its re-enabled
    // "react/no-deprecated": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-is-mounted": 1,
    "react/no-typos": 2,
    "react/require-render-return": 2,
    "react/style-prop-object": 1,

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    "jsx-a11y/alt-text": 1,
    "jsx-a11y/anchor-has-content": 1,
    "jsx-a11y/anchor-is-valid": [
      1,
      {
        aspects: ["noHref", "invalidHref"],
      },
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": 1,
    "jsx-a11y/aria-props": 1,
    "jsx-a11y/aria-proptypes": 1,
    "jsx-a11y/aria-role": [1, { ignoreNonDOM: true }],
    "jsx-a11y/aria-unsupported-elements": 1,
    "jsx-a11y/heading-has-content": 1,
    "jsx-a11y/iframe-has-title": 1,
    "jsx-a11y/img-redundant-alt": 1,
    "jsx-a11y/no-access-key": 1,
    "jsx-a11y/no-distracting-elements": 1,
    "jsx-a11y/no-redundant-roles": 1,
    "jsx-a11y/role-has-required-aria-props": 1,
    "jsx-a11y/role-supports-aria-props": 1,
    "jsx-a11y/scope": 1,

    // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": 2,

    // https://github.com/gajus/eslint-plugin-flowtype
    "flowtype/define-flow-type": 1,
    "flowtype/require-valid-file-annotation": 1,
    "flowtype/use-flow-type": 1,
  }`,
} satisfies Config;
// EOF
