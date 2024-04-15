// PathMark: ./src/definitions/index.ts
// eslint-disable-next-line import/no-extraneous-dependencies
import { Level } from "level";

import { isMoreThan1DaysInThePast } from "../helpers";
import { getDownloadCount, getInfo, type Info } from "../npm";
import type { Config } from "./configs";
import configs from "./configs";
import type { Parser } from "./parsers";
import parsers from "./parsers";

const database = new Level("./packages-installed", { valueEncoding: "json" });

interface DatabaseEntry {
  count: number;
  date: string;
  info: Info;
}

export interface PopulatedConfig extends Config {
  count: number;
  description: string;
  homepage: string;
}

const configsWithCount: PopulatedConfig[] = [];

for await (const config of configs) {
  console.log(`Getting info for "${config.name}"...`);
  let count = 0;
  let description = "";
  let homepage = "";
  for await (const { package: pack } of config.packages) {
    try {
      const previous = await database.get(`installed-${pack}`);

      const {
        count: packCount,
        date,
        info,
      } = JSON.parse(previous) as DatabaseEntry;

      if (isMoreThan1DaysInThePast(date)) throw new Error("Data too old");

      count += packCount;
      description =
        description === ""
          ? info.description
          : `${description} / ${info.description}`;
      homepage =
        homepage === "" ? info.homepage : `${homepage} / ${info.homepage}`;
    } catch {
      const packCount = await getDownloadCount(pack);
      const info = await getInfo(pack);

      await database.put(
        `installed-${pack}`,
        JSON.stringify({
          count: packCount ?? 0,
          date: new Date().toLocaleDateString(),
          info,
        }),
      );

      count += packCount ?? 0;
      description =
        description === ""
          ? info.description
          : `${description} / ${info.description}`;
      homepage =
        homepage === "" ? info.homepage : `${homepage} / ${info.homepage}`;
    }
  }

  configsWithCount.push({ ...config, count, description, homepage });
}

export interface PopulatedParser extends Parser {
  count: number;
  description: string;
  homepage: string;
}

const parsersWithCount: PopulatedParser[] = [];

for await (const config of parsers) {
  console.log(`Getting info for "${config.name}"...`);
  let count = 0;
  let description = "";
  let homepage = "";
  for await (const { package: pack } of config.packages) {
    try {
      const previous = await database.get(`installed-${pack}`);

      const {
        count: packCount,
        date,
        info,
      } = JSON.parse(previous) as DatabaseEntry;

      if (isMoreThan1DaysInThePast(date)) throw new Error("Data too old");

      count += packCount;
      description =
        description === ""
          ? info.description
          : `${description} / ${info.description}`;
      homepage =
        homepage === "" ? info.homepage : `${homepage} / ${info.homepage}`;
    } catch {
      const packCount = await getDownloadCount(pack);
      const info = await getInfo(pack);

      await database.put(
        `installed-${pack}`,
        JSON.stringify({
          count: packCount ?? 0,
          date: new Date().toLocaleDateString(),
          info,
        }),
      );

      count += packCount ?? 0;
      description =
        description === ""
          ? info.description
          : `${description} / ${info.description}`;
      homepage =
        homepage === "" ? info.homepage : `${homepage} / ${info.homepage}`;
    }
  }

  parsersWithCount.push({ ...config, count, description, homepage });
}

export interface FinalConfig extends PopulatedConfig {
  overrides: string[];
}

const ids = new Set<string>();
for (const config of configsWithCount) {
  const hasSecondary =
    config.nameSecondary !== undefined && config.nameSecondary !== "";
  const second = hasSecondary ? `-${config.nameSecondary?.toLowerCase()}` : "";
  const id = `${config.id}${second}`;
  if (id.includes("/")) throw new Error(`Ids must NOT include "/" got "${id}"`);
  if (ids.has(id)) {
    throw new Error(`Ids must be unique. "${id}" has duplicates`);
  }

  ids.add(id);
}

const configsMapped: Record<string, FinalConfig> = Object.fromEntries(
  configsWithCount.map((config) => {
    const hasSecondary =
      config.nameSecondary !== undefined && config.nameSecondary !== "";
    const second = hasSecondary
      ? `/${config.nameSecondary?.toLowerCase()}`
      : "";
    return [`${config.id}${second}`, { ...config, overrides: [] }];
  }),
);

for await (const config of configsWithCount) {
  const badRules = Object.entries(config.conflicts ?? {});
  for (const [rule, conflictingConfigs] of badRules) {
    for (const externalConfig of new Set(conflictingConfigs)) {
      if (!(externalConfig in configsMapped)) {
        throw new Error(
          `Must provide valid keys. Key does not exist: ${externalConfig}. Valid keys: ${Object.keys(configsMapped).sort().join(", ")}.`,
        );
      }

      // eslint-disable-next-line security/detect-object-injection
      if (!configsMapped[externalConfig].overrides.includes(rule)) {
        // eslint-disable-next-line security/detect-object-injection
        configsMapped[externalConfig].overrides.push(rule);
      }
    }
  }
}

const configsWithOverride: FinalConfig[] = Object.values(configsMapped);

export { parsersWithCount as parsers };
export { configsWithOverride as configs };
export { default as plugins } from "./plugins";

// EOF
