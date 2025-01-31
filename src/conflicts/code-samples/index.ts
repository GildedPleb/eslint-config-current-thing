// PathMark: ./src/conflicts/code-samples/index.ts
import cssInJS from "./css-in-js";
import importsCodeToLint from "./import-export";
import jsCodeToLint from "./javascript";
import testCodeToLint from "./js.t";
import jsonCodeToLint from "./json";
import jsxCodeToLint from "./jsx";
import mdCodeToLint from "./markdown";
import tsxCodeToLint from "./tsx";
import tsCodeToLint from "./typescript";
import ymlCodeToLint from "./yml";

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
  {
    def: jsonCodeToLint,
    filePath: "./src/conflicts/code-samples/json.json",
    short: "json",
  },
  {
    def: mdCodeToLint,
    filePath: "./src/conflicts/code-samples/markdown.md",
    short: "markdown",
  },
  {
    def: ymlCodeToLint,
    filePath: "./src/conflicts/code-samples/yml.yml",
    short: "yml",
  },
  {
    def: cssInJS,
    filePath: "./src/conflicts/code-samples/css-in-js.jsx",
    short: "css-in-js",
  },
];

export default fileList;
// EOF
