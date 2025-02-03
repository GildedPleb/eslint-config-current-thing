// PathMark: ./src/definitions/configs/airbnb-base-node.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "airbnb-base",
  name: "AirBnb Base",
  nameSecondary: "Node",
  packages: [
    {
      declaredAs: "airbnbBaseNode",
      package: "eslint-config-airbnb-base",
      requiresImport: false,
      subModule: "/rules/node",
    },
  ],
  requiredPlugins: [],
  rules: `"callback-return": 0,
    "global-require": 2,
    "handle-callback-err": 0,
    "no-buffer-constructor": 2,
    "no-mixed-requires": [0, false],
    "no-new-require": 2,
    "no-path-concat": 2,
    "no-process-env": 0,
    "no-process-exit": 0,
    "no-restricted-modules": 0,
    "no-sync": 0,`,
} satisfies Config;
// EOF
