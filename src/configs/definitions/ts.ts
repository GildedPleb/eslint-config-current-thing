import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "tseslint", package: "typescript-eslint", requiresImport: true },
    {
      name: "typescriptParser",
      package: "@typescript-eslint/parser",
      requiresImport: false,
    },
    {
      name: "typescriptPlugin",
      package: "@typescript-eslint/eslint-plugin",
      requiresImport: false,
    },
  ],
  name: "TypeScript",
  definitions: `...tseslint.config( ...tseslint.configs.recommendedTypeChecked, {
      languageOptions: { parserOptions: { project: true } },
      ${RULES}
    }
  )`,
  rules: `{
    // "allowNullableObject: false," autofixes type \`object | undefined\` poorly.
    // When checking a nullable object, \`if (obj)...\` it autofixes to \`if (obj != null)...\`.
    // This violates both the "unicorn/no-null" rule and the "eqeqeq" rule, causing unneeded further corrections.
    // See: https://eslint.org/docs/latest/rules/eqeqeq
    //      https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-null.md
    //      https://typescript-eslint.io/rules/strict-boolean-expressions/#fixes-and-suggestions
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: true,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
      },
    ],
  }`,
} satisfies Config;
