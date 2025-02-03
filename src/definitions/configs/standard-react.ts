// PathMark: ./src/definitions/configs/standard-react.ts
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
  id: "standard-react",
  name: "Standard React",
  packages: [
    {
      declaredAs: "standardReact",
      package: "eslint-config-standard-react",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react", "react-hooks"],
  rules: `"react-hooks/exhaustive-deps": 1,
    "react-hooks/rules-of-hooks": 2,
    "react/jsx-no-bind": [
      2,
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    "react/no-did-update-set-state": 2,
    "react/no-unknown-property": 2,
    "react/no-unused-prop-types": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,`,
} satisfies Config;
// EOF
