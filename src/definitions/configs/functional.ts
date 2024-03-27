// PathMark: ./src/definitions/configs/functional.ts
import { RULES } from "../../constants";
import { type Config } from ".";
import { reactIds, tesIds } from "./id-groups";

export default {
  conflicts: {
    "functional/functional-parameters": [...tesIds, ...reactIds],
    "functional/immutable-data": ["promises"],
    "functional/no-classes": reactIds,
    "functional/no-conditional-statements": [
      ...tesIds,
      ...reactIds,
      "node",
      "ts",
    ],
    "functional/no-expression-statements": [...tesIds, ...reactIds],
    "functional/no-let": ["promises"],
    "functional/no-loop-statements": ["unicorn"],
    "functional/no-return-void": [...tesIds, ...reactIds],
    "functional/no-throw-statements": [
      "promises",
      "node",
      ...reactIds,
      ...tesIds,
    ],
    "functional/prefer-immutable-types": ["unicorn"],
  },
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "fn",
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
