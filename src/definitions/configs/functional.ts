// PathMark: ./src/definitions/configs/functional.ts
import { RULES } from "../../constants";
import { type Config } from ".";
import { reactIds, testIds } from "./id-groups";

export default {
  conflicts: {
    "functional/functional-parameters": [...testIds, ...reactIds],
    "functional/immutable-data": ["promises"],
    "functional/no-classes": reactIds,
    "functional/no-conditional-statements": [
      ...testIds,
      ...reactIds,
      "node",
      "ts",
    ],
    "functional/no-expression-statements": [...testIds, ...reactIds],
    "functional/no-let": ["promises"],
    "functional/no-loop-statements": ["unicorn"],
    "functional/no-return-void": [...testIds, ...reactIds],
    "functional/no-throw-statements": [
      "promises",
      "node",
      ...reactIds,
      ...testIds,
    ],
    "functional/prefer-immutable-types": ["unicorn"],
  },
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "functional",
  name: "Functional",
  packages: [
    {
      name: "functional",
      package: "eslint-plugin-functional",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["functional"],
  rules: `functional.configs["external-vanilla-recommended"].rules,
    ...functional.configs.recommended.rules`,
} satisfies Config;
// EOF
