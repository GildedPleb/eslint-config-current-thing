// PathMark: ./src/npm.ts
import memoize from "fast-memoize";

import { BASE_API, BASE_URL, LAST_DAY_INTERVAL } from "./constants";

export interface Info {
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
async function getInfoLong(name: string): Promise<Info> {
  const request = `${BASE_URL}/${name.trim()}`;
  const response = await fetch(request);
  return (await response.json()) as Info;
}

export const getInfo = memoize(getInfoLong);

const getDateLong = (date: Date) => date.toISOString().split("T")[0];

const getDate = memoize(getDateLong);
/**
 * Gets the download count for a given npm package
 * @param name - The name of the package.
 */
async function getDownloadCountLong(name: string) {
  const date = new Date();
  date.setDate(date.getDate() - LAST_DAY_INTERVAL);
  const request = `${BASE_API}/${getDate(date)}:${getDate(new Date())}/${name.trim()}`;
  const response = await fetch(request);
  try {
    const parsed = (await response.json()) as Stats;

    return parsed.downloads;
  } catch {
    console.log("failed for:", { request, response });
    return 0;
  }
}

export const getDownloadCount = memoize(getDownloadCountLong);

/**
 * Searches NPM for the given list of searches
 * @param searchStrings  - a list of NPM search strings
 */
async function fetchNPMURLsLong(searchStrings: string[]) {
  const pluginNames: string[] = [];
  for await (const search of searchStrings) {
    console.log("Searching for ...", search);
    const url = `${BASE_URL}/-/v1/search?text=${search}&size=500`;
    const searchResponse = await fetch(url);
    try {
      const searchData = (await searchResponse.json()) as NpmSearchResult;
      const names = searchData.objects.map((object) => object.package.name);
      pluginNames.push(...names);
    } catch {
      console.log("failed with:", { searchResponse, url });
    }
  }

  return [...new Set(pluginNames)];
}

export const fetchNPMURLs = memoize(fetchNPMURLsLong);

// EOF
