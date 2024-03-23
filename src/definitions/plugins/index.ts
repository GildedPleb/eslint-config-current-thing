// PathMark: ./src/definitions/plugins/index.ts

import babel from "./babel";

export interface Plugin {
  definitions: `${"..." | "{"}${string}${")" | "}"}`;
  name: string;
  packages: Array<{
    name: string;
    package: string;
    requiresImport: boolean;
  }>;
  usedBy: string[];
}

const packages: Plugin[] = [babel];

export default packages;
// EOF
