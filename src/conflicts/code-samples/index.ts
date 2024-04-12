// PathMark: ./src/conflicts/code-samples/index.ts
import importsCodeToLint from "./import-export";
import jsCodeToLint from "./javascript";
import testCodeToLint from "./js.test";
import jsxCodeToLint from "./jsx";
import tsxCodeToLint from "./tsx";
import tsCodeToLint from "./typescript";

export interface FileList {
  def: string;
  filePath: string;
  short: string;
}

const fileList: FileList[] = [
  {
    def: importsCodeToLint,
    filePath: "./src/conflicts/code-samples/import-export.ts",
    short: "imports",
  },
  {
    def: jsCodeToLint,
    filePath: "./src/conflicts/code-samples/javascript.js",
    short: "js",
  },
  {
    def: tsCodeToLint,
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
