// PathMark: ./src/definitions/configs/tailwind-config.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { tailwindcss },
    ${RULES}
  }`,
  name: "Tailwind CSS",
  packages: [
    {
      name: "tailwindcss",
      package: "eslint-plugin-tailwindcss",
      requiresImport: true,
    },
  ],
  rules: `{
    ...tailwindcss.configs.recommended.rules,
  }`,
} satisfies Config;
// EOF