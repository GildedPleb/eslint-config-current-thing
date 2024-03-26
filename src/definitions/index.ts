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
          count: packCount,
          date: new Date().toLocaleDateString(),
          info,
        }),
      );

      count += packCount;
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

export { configsWithCount as configs };
export { default as plugins } from "./plugins";

// EOF
