// PathMark: ./src/conflicts/get-fixables.ts

// TODO: it would be good to get this generator to always be in line with the main generator, but i'm not sure its worth it...
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type { Config } from "../definitions/configs";
import rawConfigs from "../definitions/configs";
import plugins from "../definitions/plugins";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export interface PopulatedConfig extends Config {
  count: number;
  description: string;
  homepage: string;
}

export interface FinalConfig extends PopulatedConfig {
  overrides: string[];
}

const generateCode = `// PathMark: ./src/conflicts/plugins.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate-conflicts.ts
*/

${rawConfigs
  .flatMap((config) =>
    config.packages
      .map(({ name, package: pack, requiresImport }) =>
        requiresImport
          ? `\n// @ts-ignore yes, we need to ignore every import for this to run
import ${name} from "${pack}";`
          : "",
      )
      .filter(Boolean).join(`
`),
  )
  .join(``)}
${plugins
  .flatMap(({ packages }) =>
    packages.map(({ name, package: pack, requiresImport }) =>
      requiresImport
        ? `\n// @ts-ignore yes, we need to ignore every import for this to run
import ${name} from "${pack}";`
        : "",
    ),
  )
  .filter(Boolean)
  .join(``)}
// @ts-ignore yes, we need to ignore every import for this to run
import { Linter } from 'eslint';

const linter = new Linter();
const allRules = linter.getRules();

const plugins = {
  ${plugins
    .flatMap(({ packages }) =>
      packages.map(
        ({ key, name }) =>
          `"${key}": ${name
            .split("\n")
            .map((line, index) => (index === 0 ? line : `  ${line}`))
            .join("\n")},`,
      ),
    )
    .sort().join(`
  `)}
};

const fixableRules = new Set();

for (const [name, definition] of allRules.entries())
  if (definition?.meta?.fixable) fixableRules.add(name);

for (const [namespace, ruleDefinition] of Object.entries(plugins))
  if (ruleDefinition.rules)
    for (const [name, definition] of Object.entries(ruleDefinition.rules))
      if (definition?.meta?.fixable) fixableRules.add(\`\${namespace}/\${name}\`);

export default fixableRules;

// EOF
`;
const outputPath = path.join(dirname, "plugins.js");
try {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  fs.writeFileSync(outputPath, generateCode, "utf8");
  console.log(`\n.${outputPath} has been updated successfully.`);
} catch (error) {
  console.error(`Error processing the ${outputPath} file:`, error);
  throw new Error("Failed");
}

// EOF
