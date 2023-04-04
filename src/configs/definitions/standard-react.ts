import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "standardReact", package: "eslint-config-standard-react" },
  ],
  requiresImport: true,
  name: "Standard React",
  definitions: `{
    files,
    ${RULES}
  }`,
  rules: `standardReact.rules`,
} satisfies Config;
