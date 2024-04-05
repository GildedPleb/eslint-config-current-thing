import commentsJsCodeToLint from "./comments";
import commentsTsCodeToLint from "./comments-ts";
import encCodeToLint from "./encoding";
import inconsistentKeys from "./inconsistent-keys";
import jsCodeToLint from "./javascript";
import testCodeToLint from "./js.test";
import jsxCodeToLint from "./jsx";
import tsCodeToLintObjectNull from "./object-null";
import regexCodeToLint from "./regex";
import tsxCodeToLint from "./tsx";
import tsCodeToLint from "./typescript";

export interface FileList {
  def: string;
  filePath: string;
  short: string;
}

const fileList: FileList[] = [
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
    def: regexCodeToLint,
    filePath: "./src/conflicts/code-samples/regex.js",
    short: "regex",
  },
  {
    def: encCodeToLint,
    filePath: "./src/conflicts/code-samples/encoding.js",
    short: "encoding",
  },
  {
    def: commentsJsCodeToLint,
    filePath: "./src/conflicts/code-samples/comments.js",
    short: "comments-js",
  },
  {
    def: commentsTsCodeToLint,
    filePath: "./src/conflicts/code-samples/comments-ts.ts",
    short: "comments-ts",
  },
  {
    def: inconsistentKeys,
    filePath: "./src/conflicts/code-samples/inconsistent-keys.js",
    short: "inconsistent-keys",
  },
  {
    def: tsCodeToLintObjectNull,
    filePath: "./src/conflicts/code-samples/object-null.ts",
    short: "object-null",
  },
];

export default fileList;
