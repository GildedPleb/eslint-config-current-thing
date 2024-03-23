// PathMark: ./src/definitions/plugins/index.ts

import babel from "./babel";
import comments from "./comments";

export interface Plugin {
  name: string;
  packages: Array<{
    key: string;
    name: string;
    package: string;
    requiresImport: boolean;
  }>;
}

const plugins: Plugin[] = [babel, comments];

export default plugins;
// EOF
