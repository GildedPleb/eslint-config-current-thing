// PathMark: ./src/definitions/parsers/index.ts

import eslint from "./eslint";
import graphql from "./graphql";
import jsonc from "./jsonc";
import md from "./md";
import toml from "./toml";
import ts from "./ts";
import yml from "./yml";

export interface Parser {
  definitions: string;
  enabled: boolean;
  name: string;
  packages: Array<{
    declaredAs: string;
    package: string;
  }>;
}

const parsers: Parser[] = [ts, jsonc, yml, graphql, eslint, md, toml];

export default parsers.filter(({ enabled }) => enabled);
// EOF
