// PathMark: ./src/definitions/configs/unicorn.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    // We have more fine grained regex rules with RegExp Package
    ${RULES}
  }`,
  id: "unicorn",
  name: "Unicorn",
  packages: [
    {
      name: "unicorn",
      package: "eslint-plugin-unicorn",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["unicorn"],
  rules: `unicorn.configs.recommended.rules,
  "unicorn/better-regex": 0`,
} satisfies Config;
// EOF
