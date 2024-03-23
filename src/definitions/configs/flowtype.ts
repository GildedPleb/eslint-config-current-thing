// PathMark: ./src/definitions/configs/flowtype.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    settings: {
      flowtype: {
        onlyFilesWithFlowAnnotation: false
      },
      "ft-flow": {
        onlyFilesWithFlowAnnotation: false
      }
    },
    // No rules as they conflict with Typescript
    // ...flowtype.configs.recommended.rules,
    // ...ftFlow.configs.recommended.rules,
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
} satisfies Config;
// EOF
