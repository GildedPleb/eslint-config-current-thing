// PathMark: ./src/definitions/configs/storybook-main.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: storybook.configs.recommended.overrides[1].files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "storybook",
  name: "Storybook",
  nameSecondary: "Main",
  packages: [
    {
      declaredAs: "storybook",
      package: "eslint-plugin-storybook",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["storybook"],
  rules: `...storybook.configs.recommended.overrides[1].rules,`,
} satisfies Config;
// EOF
