// PathMark: ./src/definitions/configs/airbnb.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "AirBnb",
  packages: [
    {
      name: "airbnb",
      package: "eslint-config-airbnb",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jsx-a11y", "import", "react", "react-hooks"],
  rules: `compat.extends("airbnb")[0].rules,
    ...compat.extends("airbnb/hooks")[0].rules`,
} satisfies Config;
// EOF
