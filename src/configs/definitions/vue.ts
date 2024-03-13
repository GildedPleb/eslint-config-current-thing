import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { vue },
    ${RULES}
  }`,
  name: "Vue",
  packages: [
    { name: "vue", package: "eslint-plugin-vue", requiresImport: true },
  ],
  rules: `vue.configs.base.rules,
    ...vue.configs.essential.rules,
    ...vue.configs.recommended.rules,
    ...vue.configs['strongly-recommended'].rules,
    ...vue.configs['vue3-essential'].rules,
    ...vue.configs['vue3-recommended'].rules,
    ...vue.configs['vue3-strongly-recommended'].rules`,
} satisfies Config;
