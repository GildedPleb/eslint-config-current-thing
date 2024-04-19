// PathMark: ./src/definitions/configs/no-use-extend-native.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "no-use-extend-native",
  name: "No Use Extend Native",
  packages: [
    {
      declaredAs: "noUseExtendNative",
      package: "eslint-plugin-ava",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["no-use-extend-native"],
  rules: `...noUseExtendNative.configs.recommended.rules,`,
} satisfies Config;
// EOF
