// PathMark: ./src/definitions/plugins/index.ts

import babel from "./babel";
import comments from "./comments";
import compat from "./compat";

export interface Plugin {
  name: string;
  packages: Array<{
    key: string;
    name: string;
    package: string;
    requiresImport: boolean;
  }>;
}

const plugins: Plugin[] = [babel, comments, compat];

export default plugins;
// EOF
