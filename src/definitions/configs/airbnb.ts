// PathMark: ./src/definitions/configs/airbnb.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "AirBnb",
  packages: [
    {
      name: "airbnb",
      package: "eslint-config-airbnb",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jsx-a11y", "import", "react", "react-hooks"],
  rules: `{
    ...compat.extends("airbnb")[0].rules,
    ...compat.extends("airbnb/hooks")[0].rules,
    // Added to modernize this infrequently updated, but oft used config
    "no-restricted-syntax": [0, { selector: "ForOfStatement" }],
  }`,
} satisfies Config;
// EOF
