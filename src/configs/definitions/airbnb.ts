import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "airbnbBase", package: "eslint-config-airbnb" },
    { name: "airBnbTypescript", package: "eslint-config-airbnb-typescript" },
  ],
  requiresImport: false,
  name: "AirBnb/AirBnb-Typescript",
  definitions: `...compat.extends("airbnb", "airbnb/hooks", "airbnb-typescript"),
  {
    files,
    ${RULES}
  }`,
  rules: `{
    // Added to moderize this infrequently updated, but oft used config
    "no-restricted-syntax": [0, { selector: "ForOfStatement" }],
  }`,
} satisfies Config;
