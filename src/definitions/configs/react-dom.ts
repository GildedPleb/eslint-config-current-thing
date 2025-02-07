// PathMark: ./src/definitions/configs/react-hooks.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "react-dom",
  name: "React DOM",
  packages: [
    {
      declaredAs: "reactX",
      package: "eslint-plugin-react-dom",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-dom"],
  rules: `"react-dom/no-dangerously-set-innerhtml-with-children": "error",
    "react-dom/no-dangerously-set-innerhtml": "warn",
    "react-dom/no-find-dom-node": "error",
    "react-dom/no-missing-button-type": "warn",
    "react-dom/no-missing-iframe-sandbox": "warn",
    "react-dom/no-namespace": "error",
    "react-dom/no-render-return-value": "error",
    "react-dom/no-script-url": "warn",
    "react-dom/no-unknown-property": "warn",
    "react-dom/no-unsafe-iframe-sandbox": "warn",
    "react-dom/no-unsafe-target-blank": "warn",
    "react-dom/no-void-elements-with-children": "warn",`,
} satisfies Config;
// EOF
