// PathMark: ./src/definitions/configs/flowtype.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    settings: {
      flowtype: {
        onlyFilesWithFlowAnnotation: true
      },
      "ft-flow": {
        onlyFilesWithFlowAnnotation: true
      }
    },
    // No rules as they conflict with Typescript
    ${RULES}
  }`,
  name: "Flowtype",
  packages: [
    {
      name: "flowtype",
      package: "eslint-plugin-flowtype",
      requiresImport: false,
    },
    {
      name: "ftFlow",
      package: "eslint-plugin-ft-flow",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["flowtype", "ft-flow"],
  rules: `{
    ...flowtype.configs.recommended.rules,
    ...ftFlow.configs.recommended.rules,
  }`,
} satisfies Config;
// EOF
