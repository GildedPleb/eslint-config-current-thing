// PathMark: ./src/npm.ts
import { BASE_API, BASE_URL, LAST_DAY_INTERVAL } from "./constants";

interface Info {
  description: string;
  homepage: string;
}

interface NpmSearchResult {
  objects: Array<{
    package: {
      name: string;
    };
  }>;
}

interface Stats {
  downloads: number;
}

/**
 * Gets the info for a given npm package
 * @param name - The name of the package.
 */
export async function getInfo(name: string): Promise<Info> {
  const request = `${BASE_URL}/${name}`;
  const responce = await fetch(request);
  return (await responce.json()) as Info;
}

const getDate = (date: Date) => date.toISOString().split("T")[0];

/**
 * Gets the download count for a given npm package
 * @param name - The name of the package.
 */
export async function getDownloadCount(name: string) {
  const date = new Date();
  date.setDate(date.getDate() - LAST_DAY_INTERVAL);
  const request = `${BASE_API}/${getDate(date)}:${getDate(new Date())}/${name}`;
  const response = await fetch(request);
  const parsed = (await response.json()) as Stats;
  return parsed.downloads;
}

/**
 * Searches NPM for the given list of searches
 * @param searchStrings  - a list of NPM search strings
 */
export async function fetchNPMURLs(searchStrings: string[]) {
  const pluginNames: string[] = [];
  for await (const search of searchStrings) {
    const url = `${BASE_URL}/-/v1/search?text=${search}&size=500`;
    const searchResponse = await fetch(url);
    const searchData = (await searchResponse.json()) as NpmSearchResult;
    const names = searchData.objects.map((object) => object.package.name);
    pluginNames.push(...names);
  }

  return [...new Set(pluginNames)];
}
// EOF
