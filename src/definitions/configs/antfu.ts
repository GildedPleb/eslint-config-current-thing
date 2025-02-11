// PathMark: ./src/definitions/configs/antfu.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "antfu/consistent-chaining": ["prettier"],
    "antfu/no-top-level-await": ["unicorn"],
    "jsonc/sort-keys": ["prettier/json"],
  },
  definitions: `...antfuConfigRaw.map(({ plugins: _plugins, ...config }) => {
    // Change the test name space
    if (config.name === "antfu/test/rules") {
      return {
        ...config,
        rules: {
          ...config.rules,
          "no-only-tests/no-only-tests":
            config.rules?.["vitest/no-only-tests"] ?? 0,
          "vitest/no-only-tests": 0,
        },
      };
    }
    // Change the ecma version for JS files to allow 'with' imports
    if (config.name === "antfu/javascript/setup") {
      return {
        ...config,
        languageOptions: {
          ...config.languageOptions,
          ecmaVersion: "latest",
          parserOptions: {
            ...config.languageOptions?.parserOptions,
            ecmaVersion: "latest",
          },
        },
      };
    }
    // Because these configs do not have files defined, they will attempt to lint things like .md files that should not be linted as js files
    const ruleConfigs = [
      "antfu/javascript/rules",
      "antfu/eslint-comments/rules",
      "antfu/command/rules",
      "antfu/perfectionist/setup",
      "antfu/stylistic/rules",
      "antfu/regexp/rules",
      "antfu/jsdoc/rules"
    ];
    if (config.name && ruleConfigs.includes(config.name)) {
      return {
        ...config,
        files,
      };
    }
    return config;
  }),
  {
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "antfu",
  name: "Antfu",
  packages: [
    {
      declaredAs: "antfuConfig",
      package: "@antfu/eslint-config",
      requiresImport: true,
    },
  ],
  preProcess: `const antfuConfigRaw = await antfuConfig({
    lessOpinionated: true,
    // formatters: {
    //   css: true,
    //   html: true,
    //   markdown: "prettier",
    // },
    react: true,
  }).renamePlugins({
    import: "import-x",
    node: "n",
    style: "@stylistic",
    test: "vitest",
    ts: "@typescript-eslint",
    yaml: "yml",
    react: "react-x",
  });`,
  requiredPlugins: [
    "antfu",
    "command",
    "@typescript-eslint",
    "n",
    "import-x",
    "yml",
    "@stylistic",
    "vitest",
    "no-only-tests",
    "jsdoc",
    "jsonc",
    "perfectionist",
    "regexp",
    "toml",
    "unicorn",
    "unused-imports",
    "eslint-comments",
    "react-dom",
    "react-hooks",
    "react-hooks-extra",
    "react-naming-convention",
    "react-refresh",
    "react-web-api",
    "react-x",
  ],
  rules: ``,
} satisfies Config;
// EOF
