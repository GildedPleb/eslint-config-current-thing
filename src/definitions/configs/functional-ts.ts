// PathMark: ./src/definitions/configs/functional-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";
import { reactIds, testIds } from "./id-groups";

export default {
  conflicts: {
    "functional/functional-parameters": [...testIds, ...reactIds],
    "functional/immutable-data": ["promises"],
    "functional/no-classes": [...reactIds, "ts"],
    "functional/no-conditional-statements": [
      ...testIds,
      ...reactIds,
      "node",
      "ts",
    ],
    "functional/no-expression-statements": [
      ...testIds,
      ...reactIds,
      "node",
      "ts",
    ],
    "functional/no-let": ["promises"],
    "functional/no-loop-statements": ["unicorn"],
    "functional/no-return-void": [...testIds, ...reactIds, "ts"],
    "functional/no-throw-statements": [
      "promises",
      "node",
      ...reactIds,
      ...testIds,
    ],
    "functional/prefer-immutable-types": ["unicorn"],
  },
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "functional",
  name: "Functional",
  nameSecondary: "TS",
  packages: [
    {
      declaredAs: "functional",
      package: "eslint-plugin-functional",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@typescript-eslint", "functional"],
  rules: `...functional.configs.recommended.rules,
    ...functional.configs["external-typescript-recommended"].rules,`,
} satisfies Config;
// EOF
