// PathMark: ./src/definitions/plugins/tailwind-plugin.ts
import type { Plugin } from ".";

export default {
  name: "Tailwind CSS",
  packages: [
    {
      declaredAs: "tailwindcss",
      namespace: "tailwindcss",
      package: "eslint-plugin-tailwindcss",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"tailwindcss">;
// EOF
