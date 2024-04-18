// PathMark: ./src/definitions/configs/rxjs.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "rxjs",
  name: "RxJS",
  packages: [
    {
      declaredAs: "rxjs",
      package: "eslint-plugin-rxjs",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["rxjs"],
  rules: `...rxjs.configs.recommended.rules,`,
} satisfies Config;
// EOF
