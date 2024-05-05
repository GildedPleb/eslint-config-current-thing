// PathMark: ./src/packages/get-packages.ts

import readline from "node:readline";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Level } from "level";

import configs from "../definitions/configs";
import parsers from "../definitions/parsers";
import plugins from "../definitions/plugins";
import { isMoreThan1DaysInThePast } from "../helpers";
import { fetchNPMURLs, getDownloadCount } from "../npm";
import investigating from "./investigating";
import rejected from "./rejected";
import searchTerms from "./searches";

const database = new Level("./package-cache", { valueEncoding: "json" });
const installed = new Set([
  ...configs.flatMap((config) =>
    config.packages.map(({ package: pack }) => pack),
  ),
  ...plugins.flatMap((config) =>
    config.packages.map(({ package: pack }) => pack),
  ),
  ...parsers.flatMap((config) =>
    config.packages.map(({ package: pack }) => pack),
  ),
]);

const installedNames = new Set([
  ...configs.map(({ name }) => `ESLint ${name}`.replaceAll(" ", "%20")),
  ...plugins.map(({ name }) => `ESLint ${name}`.replaceAll(" ", "%20")),
  ...parsers.map(({ name }) => `ESLint ${name}`.replaceAll(" ", "%20")),
]);

interface Populated {
  count: number;
  date: string;
  name: string;
}

/**
 * Gets the download counts from the cache
 * @param cache - The db
 * @returns the saved data
 */
async function getExisting(cache: Level): Promise<Populated[]> {
  const downloads: Populated[] = [];

  try {
    // Assuming plugins are stored with keys prefixed by 'plugin-'
    const stream = cache.iterator({
      gte: "plugin-",
      lte: "plugin-\u00FF",
    });

    for await (const [, value] of stream) {
      downloads.push(JSON.parse(value) as Populated);
    }

    return downloads;
  } catch (error) {
    console.error("Error accessing the LevelDB database:", error);
    throw new Error("Failed");
  }
}

for (const pack of investigating) {
  if (installed.has(pack)) {
    console.log(`--> ALERT! investigating "${pack}" already INSTALLED`);
  }

  if (rejected.has(pack)) {
    console.log(`--> ALERT! investigating "${pack}" already REJECTED`);
  }
}

for (const pack of rejected) {
  if (installed.has(pack)) {
    console.log(`--> ALERT! rejected "${pack}" already INSTALLED`);
  }
}

/**
 * Uses the NPM API results to find and coalesce all applicable NPM packages
 * @param cache - The db
 * @returns a populated plugin def
 */
async function fetchEslintPlugins(
  cache = database,
): Promise<{ size: number; top40: Populated[] }> {
  console.log("Checking lists...");
  console.log("Getting full list...");
  const searchedPluginNames = await fetchNPMURLs([
    ...searchTerms,
    ...installed,
    ...installedNames,
  ]);
  const currentKnown = await getExisting(cache);
  const everythingList = [
    ...new Set([
      ...searchedPluginNames,
      ...investigating,
      ...currentKnown.map(({ name }) => name),
    ]),
  ];
  console.log("Filtering full list...");
  const filteredList = everythingList.filter(
    (pluginName) => !installed.has(pluginName) && !rejected.has(pluginName),
  );

  console.log("Checking cache...");
  const populated: Populated[] = [];
  const unpopulated: Populated[] = [];

  for (const known of filteredList) {
    const exists = currentKnown.filter(({ name }) => name === known);
    if (
      exists.length === 1 &&
      !isMoreThan1DaysInThePast(exists[0].date) &&
      "count" in exists[0]
    ) {
      populated.push(exists[0]);
    } else {
      console.log("Found cache miss", known);
      unpopulated.push({
        count: 0,
        date: new Date().toLocaleDateString(),
        name: known,
      });
    }
  }

  console.log("\nGetting packages, this could take a loooong time... \n");
  let count = 0;
  for await (const plugin of unpopulated) {
    const downloads = await getDownloadCount(plugin.name);
    const newPlugin = { ...plugin, count: downloads ?? 0 };
    populated.push(newPlugin);
    await database.put(`plugin-${plugin.name}`, JSON.stringify(newPlugin));
    if ((downloads ?? 0) > 50_000)
      console.log(
        `Noteworthy plugin: "${plugin.name}"... ${downloads}`.padEnd(
          process.stdout.columns,
          " ",
        ),
      );
    const out = `Adding (${count++}/${unpopulated.length}): "${plugin.name}"... ${downloads}`;
    process.stdout.write(out.padEnd(process.stdout.columns, " "));
    readline.cursorTo(process.stdout, 0);
  }

  return {
    size: populated.length,
    top40: populated
      .filter((item) => item.count)
      .sort((first, second) => second.count - first.count)
      .slice(0, 40),
  };
}

export default fetchEslintPlugins;
// EOF
