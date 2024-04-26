// PathMark: ./src/definitions/configs/prettier-tailwind.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
  files: [...jsxFiles, ...tsxFiles],
    ${RULES}
  }`,
  id: "prettier-tailwind",
  name: "Prettier Plugin Tailwind",
  packages: [
    {
      declaredAs: "prettier",
      package: "prettier-plugin-tailwindcss",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["prettier-tailwind"],
  rules: `"prettier-tailwind/prettier": [
      2,
      { plugins: ["prettier-plugin-tailwindcss"] },
    ],`,
} satisfies Config;
// EOF
