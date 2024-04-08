// PathMark: ./src/definitions/parsers/index.ts

import jsonc from "./jsonc";
import ts from "./ts";

export interface Parser {
  definitions: string;
  name: string;
  packages: Array<{
    declaredAs: string;
    package: string;
    requiresImport: boolean;
  }>;
}

const parsers: Parser[] = [ts, jsonc];

export default parsers;
// EOF
