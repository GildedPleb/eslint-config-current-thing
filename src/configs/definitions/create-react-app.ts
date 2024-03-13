import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "Create React App",
  packages: [
    { name: "cra", package: "eslint-config-react-app", requiresImport: true },
  ],
  rules: `{
    "react/jsx-uses-vars": "warn",
    "react/jsx-uses-react": "warn",
    ...cra.rules,
    ...cra.overrides[0].rules,
  }`,
} satisfies Config;
