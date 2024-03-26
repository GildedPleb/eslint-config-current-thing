// PathMark: ./src/packages/get-packages.ts

// eslint-disable-next-line import/no-extraneous-dependencies
import { Level } from "level";

import configs from "../definitions/configs";
import plugins from "../definitions/plugins";
import { isMoreThanRandomDaysInThePast } from "../helpers";
import { fetchNPMURLs, getDownloadCount } from "../npm";
import investigating from "./investigating";
import rejected from "./rejected";

const database = new Level("./package-cache", { valueEncoding: "json" });
const installed = new Set([
  ...configs.flatMap((config) =>
    config.packages.map(({ package: pack }) => pack),
  ),
  ...plugins.flatMap((config) =>
    config.packages.map(({ package: pack }) => pack),
  ),
]);

interface Populated {
  count: number;
  date: string;
  name: string;
}

const searchTerms: string[] = [
  ...new Set([
    "eslint",
    "eslint%20plugin",
    "eslint%20config",
    "eslint-plugin",
    "eslint-config",
    "lint",
    "lint%20plugin",
    "lint%20config",
    "eslint%20rules",
    "eslint%20extension",
    "javascript%20linter",
    "typescript%20eslint",
    "react%20eslint",
    "node%20eslint",
    "eslint%20preset",
    "eslint%20airbnb",
    "eslint%20google",
    "eslint%20standard",
    "eslint%20prettier",
    "eslint%20security",
    "eslint%20accessibility",
    "eslint%20performance",
    "eslint%20best%20practices",
    "custom%20eslint",
    "eslint%20for%20specific%20language",
    "eslint%20framework-specific",
    "eslint%20code%20quality",
    "eslint%20code%20style",
    "dynamic%20eslint%20config",
    "eslint%20auto-fix",
    "eslint%20IDE%20integration",
    "eslint%20CI%20integration",
    "eslint%20git%20hooks",
    "eslint%20complexity",
    "eslint%20dependency%20management",
    "eslint%20environmental%20config",
    "eslint%20multi-language%20support",
    "eslint%20project%20structure",
    "eslint%20migration",
    "eslint%20plugin%20development",
    "eslint%20debugging",
    "eslint%20tutorial",
    "eslint%20community",
    "eslint%20facebook",
    "eslint%20google",
    "eslint%20airbnb",
    "eslint%20amazon",
    "eslint%20microsoft",
    "eslint%20netflix",
    "eslint%20apple",
    "eslint%20twitter",
    "eslint%20github",
    "eslint%20gitlab",
    "eslint%20linkedin",
    "eslint%20uber",
    "eslint%20stripe",
    "eslint%20paypal",
    "eslint%20dropbox",
    "eslint%20spotify",
    "eslint%20slack",
    "eslint%20salesforce",
    "eslint%20adobe",
    "eslint%20oracle",
    "eslint%20sap",
    "eslint%20ibm",
    "eslint%20intel",
    "eslint%20nvidia",
    "eslint%20finance%20coding%20standards",
    "eslint%20healthcare%20compliance",
    "eslint%20e-commerce%20best%20practices",
    "eslint%20agile%20development",
    "eslint%20test%20driven%20development",
    "eslint%20behavior%20driven%20development",
    "eslint%20functional%20programming",
    "eslint%20object%20oriented%20best%20practices",
    "eslint%20reactive%20programming",
    "eslint%20esnext",
    "eslint%20async%20await",
    "eslint%20decorators",
    "eslint%20microservices%20architecture",
    "eslint%20progressive%20web%20apps",
    "eslint%20serverless%20functions",
    "eslint%20web%20security",
    "eslint%20performance%20optimization",
    "eslint%20community%20configs",
    "eslint%20graphql",
    "eslint%20webassembly",
    "eslint%20wasm",
    "eslint%20dockerfile",
    "eslint%20kubernetes",
    "eslint%20blockchain",
    "eslint%20ai%20machine%20learning",
    "eslint%20internet%20of%20things",
    "eslint%20virtual%20reality",
    "eslint%20augmented%20reality",
    "eslint%20game%20development",
    "eslint%20cybersecurity",
    "eslint%20data%20science",
    "eslint%20edge%20computing",
    "eslint%20cloud%20native",
    "eslint%20devops%20practices",
    "eslint%20low%20code%20no%20code",
    "eslint%20ethical%20coding",
    "eslint%20sustainability",
    "eslint%20digital%20accessibility",
    "eslint%20quantum%20computing",
    "eslint%20metaverse",
    "eslint%20noSQL%20databases",
    "eslint%20flutter",
    "eslint%20svelte",
    "eslint%20crypto",
    "eslint%20web3",
    "eslint%20solidity",
    "eslint%20nft",
    "eslint%20zero%20trust%20security",
    "eslint%20material%20ui",
    "eslint%20tailwind%20css",
    "eslint%20microfrontends",
    "eslint%20serverless%20architecture",
    "eslint%20api%20first%20development",
    "eslint%20continuous%20integration",
    "eslint%20continuous%20delivery",
    "eslint%20accessibility%20standards",
    "eslint%20content%20security%20policy",
    "eslint%20ethical%20hacking",
    "lint%20javascript",
    "lint%20typescript",
    "lint%20js%20best%20practices",
    "lint%20ts%20best%20practices",
    "lint%20js%20code%20quality",
    "lint%20ts%20code%20quality",
    "lint%20js%20performance",
    "lint%20ts%20performance",
    "lint%20js%20security",
    "lint%20ts%20security",
    "lint%20react",
    "lint%20nodejs",
    "lint%20express",
    "lint%20nextjs",
    "lint%20gatsby",
    "lint%20webpack",
    "lint%20rollup",
    "lint%20babel",
    "lint%20jest",
    "lint%20webpack%20config",
    "lint%20rollup%20config",
    "lint%20babel%20config",
    "javascript%20eslint%20lint",
    "typescript%20eslint%20lint",
    "js%20eslint%20lint%20best%20practices",
    "ts%20eslint%20lint%20best%20practices",
    "js%20lint%20eslint%20code%20quality",
    "ts%20lint%20eslint%20code%20quality",
    "js%20eslint%20lint%20performance",
    "ts%20eslint%20lint%20performance",
    "js%20lint%20eslint%20security",
    "ts%20lint%20eslint%20security",
    "react%20eslint%20lint",
    "angular%20eslint%20lint",
    "nodejs%20eslint%20lint",
    "express%20eslint%20lint",
    "nextjs%20eslint%20lint",
    "gatsby%20eslint%20lint",
    "webpack%20eslint%20lint",
    "rollup%20eslint%20lint",
    "babel%20eslint%20lint",
    "jest%20eslint%20lint",
    "mocha%20eslint%20lint",
    "cypress%20eslint%20lint",
    "webpack%20config%20eslint%20lint",
    "rollup%20config%20eslint%20lint",
    "babel%20config%20eslint%20lint",
  ]),
];

/**
 *
 */
async function getExisting(): Promise<Populated[]> {
  const downloads: Populated[] = [];

  try {
    // Assuming plugins are stored with keys prefixed by 'plugin-'
    const stream = database.iterator({
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

/**
 * Uses the NPM API results to find and coalesce all applicable NPM packages
 */
async function fetchEslintPlugins() {
  console.log("Checking lists...");
  for (const pack of investigating) {
    if (installed.has(pack))
      console.log(`--> ALERT! investigating "${pack}" already INSTALLED`);

    if (rejected.has(pack))
      console.log(`--> ALERT! investigating "${pack}" already REJECTED`);
  }

  console.log("Getting full list...");
  const searchedPluginNames = await fetchNPMURLs(searchTerms);
  const currentKnown = await getExisting();
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
      !isMoreThanRandomDaysInThePast(exists[0].date) &&
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

  for await (const plugin of unpopulated) {
    const downloads = await getDownloadCount(plugin.name);
    populated.push({ ...plugin, count: downloads ?? 0 });
    console.log(`Adding "${plugin.name}"... ${downloads}`);
  }

  for await (const plugin of populated)
    await database.put(`plugin-${plugin.name}`, JSON.stringify(plugin));

  return populated
    .filter((item) => item.count)
    .sort((first, second) => second.count - first.count)
    .slice(0, 40);
}

export default fetchEslintPlugins;
// EOF
