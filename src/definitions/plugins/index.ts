// PathMark: ./src/definitions/plugins/index.ts

import babel from "./babel";
import comments from "./comments";
import compat from "./compat";
import cssModules from "./css-modules";
import emotion from "./emotion";
import es from "./es";
import flowtype from "./flowtype";
import functional from "./functional";

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
];

export default plugins;
// EOF