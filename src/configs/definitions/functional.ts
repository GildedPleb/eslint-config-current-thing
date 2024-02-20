import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "functional",
      package: "eslint-plugin-functional",
      requiresImport: true,
    },
  ],
  name: "Functional",
  definitions: `{
    files,
    plugins: { functional },
    // "Strick", "Recommended", and "Lite" punch far above their weight and are not added.
    ${RULES}
  }`,
  rules: `functional.configs["external-typescript-recommended"].rules,
    ...functional.configs.stylistic.rules,
    ...functional.configs["no-other-paradigms"].rules,
    "functional/no-loop-statements": 0`,
} satisfies Config;
