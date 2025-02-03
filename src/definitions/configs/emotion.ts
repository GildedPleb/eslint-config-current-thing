// PathMark: ./src/definitions/configs/emotion.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    ${RULES}
  }`,
  ejected: true,
  enabled: false,
  id: "emotion-css",
  name: "Emotion CSS",
  packages: [
    {
      declaredAs: "{ rules as emotion }",
      package: "@emotion/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@emotion"],
  rules: `"@emotion/import-from-emotion": 2,
    "@emotion/jsx-import": 2,
    "@emotion/no-vanilla": 2,
    "@emotion/pkg-renaming": 2,
    "@emotion/styled-import": 2,`,
} satisfies Config;
// EOF
