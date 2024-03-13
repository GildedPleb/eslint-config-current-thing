import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { flowtype },
    // No rules as they conflict with Typescript
    ${RULES}
  }`,
  name: "Flowtype",
  packages: [
    {
      name: "flowtype",
      package: "eslint-plugin-flowtype",
      requiresImport: true,
    },
  ],
} satisfies Config;
