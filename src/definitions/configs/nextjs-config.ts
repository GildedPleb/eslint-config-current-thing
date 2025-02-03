// PathMark: ./src/definitions/configs/nextjs-config.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "nextjs",
  name: "NextJS",
  nameSecondary: "Config",
  packages: [
    {
      declaredAs: "nextJsConfig",
      package: "eslint-config-next",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["import", "react", "jsx-a11y"],
  rules: `// Rules Ejected because requires no longer needed: "@rushstack/eslint-patch/modern-module-resolution"
    "import/no-anonymous-default-export": 1,
    "jsx-a11y/alt-text": [
      1,
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": 1,
    "jsx-a11y/aria-proptypes": 1,
    "jsx-a11y/aria-unsupported-elements": 1,
    "jsx-a11y/role-has-required-aria-props": 1,
    "jsx-a11y/role-supports-aria-props": 1,
    "react/jsx-no-target-blank": 0,
    "react/no-unknown-property": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,`,
} satisfies Config;
// EOF
