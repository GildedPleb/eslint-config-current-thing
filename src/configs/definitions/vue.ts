// PathMark: ./src/configs/definitions/vue.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [ ...files, "**/*.vue" ],
    plugins: { vue },
    ${RULES}
  }`,
  name: "Vue",
  packages: [
    { name: "vue", package: "eslint-plugin-vue", requiresImport: true },
    { name: "vueParser", package: "vue-eslint-parser", requiresImport: false },
  ],
  rules: `vue.configs.base.rules,
    ...vue.configs.essential.rules,
    ...vue.configs.recommended.rules,
    ...vue.configs['strongly-recommended'].rules,
    ...vue.configs['vue3-essential'].rules,
    ...vue.configs['vue3-recommended'].rules,
    ...vue.configs['vue3-strongly-recommended'].rules`,
} satisfies Config;
// EOF
