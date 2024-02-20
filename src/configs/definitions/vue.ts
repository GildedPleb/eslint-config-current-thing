import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "vue", package: "eslint-plugin-vue", requiresImport: true },
  ],
  name: "Vue",
  definitions: `{
    files,
    plugins: { vue },
    ${RULES}
  }`,
  rules: `{
    ...vue.configs.base.rules,
    ...vue.configs.essential.rules,
    ...vue.configs.recommended.rules,
    ...vue.configs['strongly-recommended'].rules,
    ...vue.configs['vue3-essential'].rules,
    ...vue.configs['vue3-recommended'].rules,
    ...vue.configs['vue3-strongly-recommended'].rules,
  }
  `,
} satisfies Config;
