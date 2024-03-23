// PathMark: ./src/definitions/plugins/index.ts

import babel from "./babel";
import comments from "./comments";
import compat from "./compat";
import cssModules from "./css-modules";
import emotion from "./emotion";
import es from "./es";
import flowtype from "./flowtype";
import functional from "./functional";
import header from "./header";
import i18next from "./i18next";
import importPlugin from "./import";
import importSort from "./import-sort";
import jestDom from "./jest-dom";

export interface Plugin {
  name: string;
  packages: Array<{
    key: string;
    name: string;
    package: string;
    requiresImport: boolean;
  }>;
}

const plugins: Plugin[] = [
  babel,
  comments,
  compat,
  cssModules,
  emotion,
  es,
  flowtype,
  functional,
  header,
  i18next,
  importSort,
  importPlugin,
  jestDom,
];

export default plugins;
// EOF
