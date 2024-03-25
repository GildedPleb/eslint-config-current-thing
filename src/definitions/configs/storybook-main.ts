// PathMark: ./src/definitions/configs/storybook-main.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: storybook.configs.recommended.overrides[1].files,
    ${RULES}
  }`,
  name: "Storybook - Main",
  packages: [
    {
      name: "storybook",
      package: "eslint-plugin-storybook",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["storybook"],
  rules: `storybook.configs.recommended.overrides[1].rules`,
} satisfies Config;
// EOF
