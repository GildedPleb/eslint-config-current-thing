// PathMark: ./src/definitions/configs/airbnb-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "AirBnb-Typescript",
  packages: [
    {
      name: "airbnbTypescript",
      package: "eslint-config-airbnb-typescript",
      requiresImport: false,
    },
  ],
  rules: `{
    ...compat.extends("airbnb-typescript")[0].rules,
    // Added to modernize this infrequently updated, but oft used config
    "no-restricted-syntax": [0, { selector: "ForOfStatement" }],
  }`,
} satisfies Config;
// EOF
