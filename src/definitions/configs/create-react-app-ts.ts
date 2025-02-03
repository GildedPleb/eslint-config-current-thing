// PathMark: ./src/definitions/configs/create-react-app-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsxFiles,
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
        "warnOnUnsupportedTypeScriptVersion": false,
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
  id: "cra",
  name: "Create React App",
  nameSecondary: "TS",
  packages: [
    {
      declaredAs: "cra",
      package: "eslint-config-react-app",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@typescript-eslint"],
  rules: `"@typescript-eslint/consistent-type-assertions": 1,
    "@typescript-eslint/no-array-constructor": 1,
    "@typescript-eslint/no-redeclare": 1,
    "@typescript-eslint/no-unused-expressions": [
      2,
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      1,
      {
        args: "none",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      1,
      {
        classes: false,
        functions: false,
        typedefs: false,
        variables: false,
      },
    ],
    "@typescript-eslint/no-useless-constructor": 1,
    "default-case": 0,
    "no-dupe-class-members": 0,
    "no-undef": 0,
    "no-array-constructor": 0,
    "no-redeclare": 0,
    "no-use-before-define": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "no-useless-constructor": 0,`,
} satisfies Config;
// EOF
