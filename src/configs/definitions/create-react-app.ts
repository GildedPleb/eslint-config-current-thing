import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "cra", package: "eslint-config-react-app", requiresImport: true },
  ],
  name: "Create React App",
  definitions: `{
    files,
    ${RULES}
  }`,
  rules: `{
    "react/jsx-uses-vars": "warn",
    "react/jsx-uses-react": "warn",
    ...cra.rules,
    ...cra.overrides[0].rules,
  }`,
} satisfies Config;

// ...compat.extends("react-app"),
