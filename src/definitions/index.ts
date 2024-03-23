// PathMark: ./src/definitions/index.ts
import { getDownloadCount, getInfo } from "../npm";
import type { Config } from "./configs";
import configs from "./configs";

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
    count += await getDownloadCount(pack);
    const info = await getInfo(pack);
    description =
      description === ""
        ? info.description
        : `${description} / ${info.description}`;
    homepage =
      homepage === "" ? info.homepage : `${homepage} / ${info.homepage}`;
  }

  configsWithCount.push({ ...config, count, description, homepage });
}

export { configsWithCount as configs };
export { default as plugins } from "./plugins";

// EOF