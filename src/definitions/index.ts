// PathMark: ./src/definitions/index.ts
// eslint-disable-next-line import/no-extraneous-dependencies
import { Level } from "level";

import { isMoreThan1DaysInThePast } from "../helpers";
import { getDownloadCount, getInfo, type Info } from "../npm";
import type { Config } from "./configs";
import configs from "./configs";

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

export interface FinalConfig extends PopulatedConfig {
  overrides: string[];
}

const ids = new Set<string>();
for (const config of configsWithCount) {
  const hasSecondary =
    config.nameSecondary !== undefined && config.nameSecondary !== "";
  const second = hasSecondary ? `/${config.nameSecondary?.toLowerCase()}` : "";
  const id = `${config.id}${second}`;
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
      if (!(externalConfig in configsMapped))
        throw new Error(
          `Must provide valid keys. Key does not exist: ${externalConfig}. Valid keys: ${Object.keys(configsMapped).join(", ")}.`,
        );
      // eslint-disable-next-line security/detect-object-injection
      if (!configsMapped[externalConfig].overrides.includes(rule))
        // eslint-disable-next-line security/detect-object-injection
        configsMapped[externalConfig].overrides.push(rule);
    }
  }
}

const configsWithOverride: FinalConfig[] = Object.values(configsMapped);

export { configsWithOverride as configs };
export { default as plugins } from "./plugins";

// EOF
