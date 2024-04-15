// PathMark: ./src/definitions/configs/airbnb-base.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "no-restricted-syntax": ["unicorn"],
  },
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  id: "airbnb-base",
  name: "AirBnb Base",
  nameSecondary: "Style",
  packages: [
    {
      declaredAs: "airbnbBaseStyle",
      package: "eslint-config-airbnb-base",
      requiresImport: true,
      subModule: "/rules/style",
    },
  ],
  requiredPlugins: [],
  rules: `...airbnbBaseStyle.rules,
    // Added to modernize this config
    "no-restricted-syntax": [
      2,
      {
        selector: "ForInStatement",
        message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      // {
      //   selector: 'ForOfStatement',
      //   message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      // },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "\`with\` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],`,
} satisfies Config;
// EOF
