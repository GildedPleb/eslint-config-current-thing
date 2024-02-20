import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "airbnbBase",
      package: "eslint-config-airbnb",
      requiresImport: false,
    },
    {
      name: "airBnbTypescript",
      package: "eslint-config-airbnb-typescript",
      requiresImport: false,
    },
  ],
  name: "AirBnb/AirBnb-Typescript",
  definitions: `{
    files,
    ${RULES}
  }`,
  rules: `{
    ...compat.extends("airbnb")[0].rules,
    ...compat.extends("airbnb/hooks")[0].rules,
    ...compat.extends("airbnb-typescript")[0].rules,
    // Added to moderize this infrequently updated, but oft used config
    "no-restricted-syntax": [0, { selector: "ForOfStatement" }],
  }`,
} satisfies Config;
