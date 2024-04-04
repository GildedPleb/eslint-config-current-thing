// PathMark: ./src/definitions/configs/standard-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "standard-ts",
  name: "Standard",
  packages: [
    {
      name: "standard",
      package: "eslint-config-standard-with-typescript",
      requiresImport: false,
    },
    {
      name: "standardTS",
      package: "eslint-config-love",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["@typescript-eslint"],
  rules: `...standardTS.rules,
    // Types can be inferred by typescript
    "@typescript-eslint/explicit-function-return-type": 0,
    // "allowNullableObject: false," auto-fixes type \`object | undefined\` poorly.
    // When checking a nullable object, \`if (obj)...\` it auto-fixes to \`if (obj != null)...\`.
    // This violates both the "unicorn/no-null" rule and the "eqeqeq" rule, causing unneeded further corrections.
    // See: https://eslint.org/docs/latest/rules/eqeqeq
    //      https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-null.md
    //      https://typescript-eslint.io/rules/strict-boolean-expressions/#fixes-and-suggestions
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        allowAny: false,
        allowNullableBoolean: false,
        allowNullableNumber: false,
        allowNullableObject: true,
        allowNullableString: false,
        allowNumber: false,
        allowString: false,
      },
    ],`,
} satisfies Config;
// EOF
