// PathMark: ./src/definitions/configs/functional.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { functional },
    // "Strick", "Recommended", and "Lite" punch far above their weight and are not added.
    ${RULES}
  }`,
  name: "Functional",
  packages: [
    {
      name: "functional",
      package: "eslint-plugin-functional",
      requiresImport: true,
    },
  ],
  rules: `functional.configs["external-typescript-recommended"].rules,
    ...functional.configs.stylistic.rules,
    ...functional.configs["no-other-paradigms"].rules,
    "functional/no-loop-statements": 0`,
} satisfies Config;
// EOF
