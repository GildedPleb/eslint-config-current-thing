import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "Standard React",
  packages: [
    {
      name: "standardReact",
      package: "eslint-config-standard-react",
      requiresImport: true,
    },
  ],
  rules: `standardReact.rules`,
} satisfies Config;
