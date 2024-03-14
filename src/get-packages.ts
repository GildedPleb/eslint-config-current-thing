import definitions from "./configs/definitions";
import { MINIMUMS } from "./constants";
import notApplicable from "./not-applicable";
import { fetchNPMURLs, getDownloadCount } from "./npm";
import rejected from "./rejected";

const searchTerms = [
  "eslint",
  "eslint%20plugin",
  "eslint%20config",
  "eslint-plugin",
  "eslint-config",
];

/**
 * Uses the NPM API results to find and coalesce all applicable NPM packages
 */
async function fetchEslintPlugins() {
  const installed = new Set(
    definitions.flatMap((config) =>
      config.packages.map(({ package: pack }) => pack),
    ),
  );
  console.log("\nGetting packages, this could take a loooong time... \n");

  const pluginNames = await fetchNPMURLs(searchTerms);

  const downloadlist: { count: number; name: string }[] = [];
  for await (const pluginName of pluginNames) {
    const downloads = await getDownloadCount(pluginName);

    if (
      downloads > MINIMUMS &&
      !installed.has(pluginName) &&
      !rejected.has(pluginName) &&
      !notApplicable.has(pluginName)
    ) {
      downloadlist.push({ count: downloads, name: pluginName });
      console.log(`Adding "${pluginName}"...`);
    }
  }

  return downloadlist
    .sort((first, second) => second.count - first.count)
    .map((pack) => ({ ...pack, count: pack.count.toLocaleString() }));
}

export default fetchEslintPlugins;
