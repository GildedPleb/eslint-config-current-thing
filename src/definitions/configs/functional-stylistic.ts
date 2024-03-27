// PathMark: ./src/definitions/configs/functional.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "fn",
  name: "Functional",
  nameSecondary: "Stylistic",
  packages: [
    {
      name: "functional",
      package: "eslint-plugin-functional",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["functional"],
  rules: `functional.configs.stylistic.rules`,
} satisfies Config;
// EOF
