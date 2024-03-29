// PathMark: ./src/definitions/configs/emotion.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "emotion-css",
  name: "Emotion CSS",
  packages: [
    {
      name: "{ rules as emotion }",
      package: "@emotion/eslint-plugin",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["emotion"],
  rules: `{
    "@emotion/jsx-import": 2,
    "@emotion/no-vanilla": 2,
    "@emotion/import-from-emotion": 2,
    "@emotion/styled-import": 2,
    "@emotion/pkg-renaming": 2,
  }`,
} satisfies Config;
// EOF
