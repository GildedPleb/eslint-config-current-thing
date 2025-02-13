// PathMark: ./src/definitions/plugins/tailwind-plugin.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Tailwind CSS",
  packages: [
    {
      declaredAs: "tailwindcss",
      mappedAs: "tailwindcss",
      namespace: "tailwindcss",
      package: "eslint-plugin-tailwindcss",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"tailwindcss">;
// EOF
