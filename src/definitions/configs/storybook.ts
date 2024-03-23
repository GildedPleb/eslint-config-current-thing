// PathMark: ./src/definitions/configs/storybook.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: storybook.configs.recommended.overrides[0].files,
    plugins: { storybook: storybook },
    ${RULES}
  }`,
  name: "Storybook",
  packages: [
    {
      name: "storybook",
      package: "eslint-plugin-storybook",
      requiresImport: true,
    },
  ],
  rules: `{
    ...storybook.configs.recommended.overrides[0].rules,
  }`,
} satisfies Config;
// EOF
