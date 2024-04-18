// PathMark: ./src/definitions/parsers/index.ts

import eslint from "./eslint";
import graphql from "./graphql";
import jsonc from "./jsonc";
import md from "./md";
import ts from "./ts";
import yml from "./yml";

export interface Parser {
  definitions: string;
  name: string;
  packages: Array<{
    declaredAs: string;
    package: string;
  }>;
}

const parsers: Parser[] = [ts, jsonc, yml, graphql, eslint, md];

export default parsers;
// EOF
