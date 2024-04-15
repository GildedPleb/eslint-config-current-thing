// PathMark: ./src/definitions/configs/airbnb-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "airbnb-ts",
  name: "AirBnb-Typescript",
  packages: [
    {
      declaredAs: "airbnbTypescript",
      package: "eslint-config-airbnb-typescript",
      requiresImport: true,
      subModule: "/lib/shared.js",
    },
  ],
  requiredPlugins: ["@typescript-eslint", "import", "react"],
  rules: `...airbnbTypescript.rules,
    ...airbnbTypescript.overrides[0].rules,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".jsx", ".tsx"] },
    ],`,
} satisfies Config;
// EOF
