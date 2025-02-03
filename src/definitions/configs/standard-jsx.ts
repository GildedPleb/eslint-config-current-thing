// PathMark: ./src/definitions/configs/standard-jsx.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ${RULES}
    settings: {
      react: {
        version: "detect",
      },
    },
  }`,
  ejected: true,
  enabled: true,
  id: "standard-jsx",
  name: "Standard JSX",
  packages: [
    {
      declaredAs: "standardJsx",
      package: "eslint-config-standard-jsx",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react"],
  rules: `"jsx-quotes": [2, "prefer-single"],
    "react/jsx-boolean-value": 2,
    "react/jsx-closing-bracket-location": [2, "tag-aligned"],
    "react/jsx-closing-tag-location": 2,
    "react/jsx-curly-brace-presence": [2, {
      "props": "never",
      "children": "never"
    }],
    "react/jsx-curly-newline": [2, {
      "multiline": "consistent",
      "singleline": "consistent"
    }],
    "react/jsx-curly-spacing": [2, {
      "attributes": { "when": "never", "allowMultiline": true },
      "children": { "when": "never", "allowMultiline": true }
    }],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],
    "react/jsx-fragments": [2, "syntax"],
    "react/jsx-handler-names": 2,
    "react/jsx-indent": [2, 2, {
      "checkAttributes": false,
      "indentLogicalExpressions": true
    }],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": [2, {
      "checkFragmentShorthand": true
    }],
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-target-blank": [2, { "enforceDynamicLinks": "always" }],
    "react/jsx-no-undef": [2, { "allowGlobals": true }],
    "react/jsx-pascal-case": [2, { "allowAllCaps": false }],
    "react/jsx-props-no-multi-spaces": 2,
    "react/jsx-tag-spacing": [2, {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never"
    }],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": [2, {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "ignore",
      "condition": "ignore",
      "logical": "ignore",
      "prop": "ignore"
    }],
    "react/no-children-prop": 2,
    "react/no-danger-with-children": 2,
    "react/no-deprecated": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-find-dom-node": 2,
    "react/no-is-mounted": 2,
    "react/no-string-refs": [2, {
      "noTemplateLiterals": true
    }],
    "react/no-unescaped-entities": [2, {
      "forbid": [">", "}"]
    }],
    "react/no-render-return-value": 2,
    "react/require-render-return": 2,
    "react/self-closing-comp": 2,`,
} satisfies Config;
// EOF
