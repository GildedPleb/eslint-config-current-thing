import { BASE_API, BASE_URL, LAST_DAY_INTERVAL } from "../constants";
import type { Config } from "./definitions";
import definitions from "./definitions";

export interface PopulatedConfig extends Config {
  description: string;
  count: number;
  homepage: string;
}

const getDate = (date: Date) => date.toISOString().split("T")[0];

interface Stats {
  downloads: number;
}
/**
 * Gets the download count for a given npm package
 * @param name - The name of the package.
 */
async function getDownloadCount(name: string) {
  const date = new Date();
  date.setDate(date.getDate() - LAST_DAY_INTERVAL);
  const request = `${BASE_API}/${getDate(date)}:${getDate(new Date())}/${name}`;
  const response = await fetch(request);
  const parsed = (await response.json()) as Stats;
  return parsed.downloads;
}

interface Info {
  description: string;
  homepage: string;
}
/**
 * Gets the info for a given npm package
 * @param name - The name of the package.
 */
async function getInfo(name: string): Promise<Info> {
  const request = `${BASE_URL}/${name}`;
  const responce = await fetch(request);
  return (await responce.json()) as Info;
}

const configsWithCount: PopulatedConfig[] = [];

for await (const config of definitions) {
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

export default configsWithCount;
