// PathMark: ./src/definitions/configs/react-native.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    languageOptions: {
      globals: {
        __DEV__: true,
        __dirname: false,
        __fbBatchedBridgeConfig: false,
        AbortController: false,
        alert: false,
        Blob: true,
        cancelAnimationFrame: false,
        cancelIdleCallback: false,
        clearImmediate: true,
        clearInterval: false,
        clearTimeout: false,
        console: false,
        document: false,
        ErrorUtils: false,
        escape: false,
        Event: false,
        EventTarget: false,
        exports: false,
        fetch: false,
        File: true,
        FileReader: false,
        FormData: false,
        global: false,
        Headers: false,
        Intl: false,
        Map: true,
        module: false,
        navigator: false,
        process: false,
        Promise: true,
        queueMicrotask: true,
        requestAnimationFrame: true,
        requestIdleCallback: true,
        require: false,
        Set: true,
        setImmediate: true,
        setInterval: false,
        setTimeout: false,
        URL: false,
        URLSearchParams: false,
        WebSocket: true,
        window: false,
        XMLHttpRequest: false,
      },
    },
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "rn",
  name: "React Native Config",
  packages: [
    {
      declaredAs: "reactNativeConfig",
      package: "@react-native-community/eslint-config",
      requiresImport: false,
    },
    {
      declaredAs: "rnConfig",
      package: "@react-native/eslint-config",
      requiresImport: false,
    },
    // These globals exist in the other packages
    {
      declaredAs: "rnGlobals",
      package: "eslint-plugin-react-native-globals",
      requiresImport: false,
    },
  ],
  requiredPlugins: [
    "eslint-comments",
    "react",
    "react-hooks",
    "react-native",
    "jest",
  ],
  rules: `"block-scoped-var": 0,
    "brace-style": 0,
    camelcase: 0,
    "comma-dangle": [1, "always-multiline"],
    "comma-spacing": 0,
    complexity: 0,
    "consistent-return": 0,
    "consistent-this": 1,
    curly: 1,
    "default-case": 0,
    "dot-notation": 1,
    "eol-last": 1,
    eqeqeq: [1, "allow-null"],
    "eslint-comments/no-aggregating-enable": 1,
    "eslint-comments/no-unlimited-disable": 1,
    "eslint-comments/no-unused-disable": 1,
    "eslint-comments/no-unused-enable": 1,
    "func-call-spacing": 1,
    "func-names": 0,
    "func-style": 0,
    "guard-for-in": 0,
    "handle-callback-err": 1,
    "jest/no-disabled-tests": 1,
    "jest/no-focused-tests": 1,
    "jest/no-identical-title": 1,
    "jest/valid-expect": 1,
    "jsx-quotes": [1, "prefer-double"],
    "key-spacing": 0,
    "keyword-spacing": 1,
    "max-depth": 0,
    "max-len": 0,
    "max-nested-callbacks": 0,
    "max-params": 0,
    "max-statements": 0,
    "new-cap": 0,
    "new-parens": 1,
    "no-alert": 1,
    "no-array-constructor": 1,
    "no-bitwise": 1,
    "no-caller": 1,
    "no-catch-shadow": 1,
    "no-cond-assign": 1,
    "no-console": 0,
    "no-const-assign": 2,
    "no-constant-condition": 0,
    "no-control-regex": 1,
    "no-debugger": 1,
    "no-delete-var": 1,
    "no-div-regex": 1,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-else-return": 0,
    "no-empty": 0,
    "no-empty-character-class": 1,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-ex-assign": 1,
    "no-extend-native": 1,
    "no-extra-bind": 1,
    "no-extra-boolean-cast": 1,
    "no-extra-parens": 0,
    "no-extra-semi": 1,
    "no-fallthrough": 1,
    "no-floating-decimal": 1,
    "no-func-assign": 1,
    "no-implied-eval": 1,
    "no-inner-declarations": 0,
    "no-invalid-regexp": 1,
    "no-iterator": 1,
    "no-label-var": 1,
    "no-labels": 1,
    "no-lone-blocks": 1,
    "no-lonely-if": 0,
    "no-loop-func": 0,
    "no-mixed-requires": 1,
    "no-mixed-spaces-and-tabs": 1,
    "no-multi-spaces": 0,
    "no-multi-str": 0,
    "no-native-reassign": 0,
    "no-negated-in-lhs": 1,
    "no-nested-ternary": 0,
    "no-new": 1,
    "no-new-func": 2,
    "no-new-object": 1,
    "no-new-require": 1,
    "no-new-wrappers": 1,
    "no-obj-calls": 1,
    "no-octal": 1,
    "no-octal-escape": 1,
    "no-path-concat": 1,
    "no-plusplus": 0,
    "no-process-exit": 0,
    "no-proto": 1,
    "no-redeclare": 0,
    "no-regex-spaces": 1,
    "no-reserved-keys": 0,
    "no-restricted-modules": 1,
    "no-return-assign": 1,
    "no-script-url": 1,
    "no-self-compare": 1,
    "no-sequences": 1,
    "no-shadow": 1,
    "no-shadow-restricted-names": 1,
    "no-sparse-arrays": 1,
    "no-sync": 0,
    "no-ternary": 0,
    "no-trailing-spaces": 1,
    "no-undef": 2,
    "no-undef-init": 1,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unreachable": 2,
    "no-unused-expressions": 0,
    "no-unused-vars": [
      1,
      { args: "none", ignoreRestSiblings: true, vars: "all" },
    ],
    "no-use-before-define": 0,
    "no-useless-escape": 1,
    "no-void": 1,
    "no-warning-comments": 0,
    "no-with": 1,
    "one-var": 0,
    "quote-props": 0,
    quotes: [
      1,
      "single",
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    radix: 1,
    "react-hooks/exhaustive-deps": 2,
    "react-hooks/rules-of-hooks": 2,
    "react-native/no-inline-styles": 1,
    "react/display-name": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 0,
    "react/no-string-refs": 1,
    "react/no-unknown-property": 0,
    "react/no-unstable-nested-components": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/wrap-multilines": 0,
    semi: 1,
    "semi-spacing": 1,
    "sort-vars": 0,
    "space-in-brackets": 0,
    "space-in-parens": 0,
    "space-infix-ops": 1,
    "space-unary-ops": [1, { nonwords: false, words: true }],
    "use-isnan": 1,
    "valid-typeof": 1,
    "vars-on-top": 0,
    "wrap-iife": 0,
    "wrap-regex": 0,
    yoda: 1,`,
} satisfies Config;
// EOF
