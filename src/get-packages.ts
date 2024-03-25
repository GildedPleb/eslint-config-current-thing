// PathMark: ./src/get-packages.ts
import { MINIMUMS } from "./constants";
import configs from "./definitions/configs";
import plugins from "./definitions/plugins";
import notApplicable from "./not-applicable";
import { fetchNPMURLs, getDownloadCount } from "./npm";
import rejected from "./rejected";

const searchTerms: string[] = [
  "eslint",
  "eslint%20plugin",
  "eslint%20config",
  "eslint-plugin",
  "eslint-config",
  // "lint",
];

/**
 * Uses the NPM API results to find and coalesce all applicable NPM packages
 */
async function fetchEslintPlugins() {
  const installed = new Set([
    ...configs.flatMap((config) =>
      config.packages.map(({ package: pack }) => pack),
    ),
    ...plugins.flatMap((config) =>
      config.packages.map(({ package: pack }) => pack),
    ),
  ]);
  console.log("\nGetting packages, this could take a loooong time... \n");

  const pluginNames = await fetchNPMURLs(searchTerms);

  const downloadList: Array<{ count: number; name: string }> = [];
  for await (const pluginName of pluginNames) {
    const downloads = await getDownloadCount(pluginName);

    if (
      downloads > MINIMUMS / 4 &&
      !installed.has(pluginName) &&
      !rejected.has(pluginName) &&
      !notApplicable.has(pluginName)
    ) {
      downloadList.push({ count: downloads, name: pluginName });
      console.log(`Adding "${pluginName}"...`);
    }
  }

  return downloadList
    .sort((first, second) => second.count - first.count)
    .map((pack) => ({ ...pack, count: pack.count }));
}

export default fetchEslintPlugins;
// EOF
