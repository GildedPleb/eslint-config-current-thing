// PathMark: ./src/conflicts/code-samples/index.ts
import importsCodeToLint from "./import-export";
import jsCodeToLint from "./javascript";
import jsCodeToLintStyle from "./javascript-style";
import testCodeToLint from "./js.test";
import jsxCodeToLint from "./jsx";
import tsxCodeToLint from "./tsx";
import tsCodeToLint from "./typescript";
import tsCodeToLintStyle from "./typescript-style";

export interface FileList {
  configs?: string[];
  def: string;
  exclude?: string[];
  filePath: string;
  short: string;
}

const fileList: FileList[] = [
  {
    configs: [
      "perfectionist",
      "import-sort",
      "import-js",
      "import-js-ts",
      "unused-imports",
    ],
    def: importsCodeToLint,
    filePath: "./src/conflicts/code-samples/import-export.ts",
    short: "imports",
  },
  {
    configs: ["prettier", "stylistic"],
    def: jsCodeToLintStyle,
    filePath: "./src/conflicts/code-samples/javascript-style.js",
    short: "js-style",
  },
  {
    configs: ["prettier", "stylistic"],
    def: tsCodeToLintStyle,
    filePath: "./src/conflicts/code-samples/typescript-style.ts",
    short: "ts-style",
  },
  {
    def: jsCodeToLint,
    exclude: ["prettier", "stylistic"],
    filePath: "./src/conflicts/code-samples/javascript.js",
    short: "js",
  },
  {
    def: tsCodeToLint,
    exclude: ["prettier", "stylistic"],
    filePath: "./src/conflicts/code-samples/typescript.ts",
    short: "ts",
  },
  {
    def: jsxCodeToLint,
    filePath: "./src/conflicts/code-samples/jsx.jsx",
    short: "jsx",
  },
  {
    def: tsxCodeToLint,
    filePath: "./src/conflicts/code-samples/tsx.tsx",
    short: "tsx",
  },
  {
    def: testCodeToLint,
    filePath: "./src/conflicts/code-samples/js.test.js",
    short: "test",
  },
];

export default fileList;
// EOF
