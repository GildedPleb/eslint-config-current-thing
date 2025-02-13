/* eslint-disable no-console -- needed for UI */
/* eslint-disable import/no-extraneous-dependencies -- needed for not prod */
// PathMark: ./src/npm.ts

import memoize from "fast-memoize";
import { Level } from "level";

import { BASE_API, BASE_URL, LAST_DAY_INTERVAL } from "./constants";
import { isMoreThanRandomDaysInThePast } from "./helpers";

const database = new Level("./packages-search", { valueEncoding: "json" });

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

interface SearchEntry {
  date: string;
  result: string[];
  url: string;
}

interface Stats {
  downloads: number;
}

/**
 * Gets the info for a given npm package
 * @param name - The name of the package.
 * @returns a fetch request
 */
async function getInfoLong(name: string): Promise<Info> {
  const request = `${BASE_URL}/${name.trim()}`;
  const response = await fetch(request);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we can trust it
  return (await response.json()) as Info;
}

export const getInfo = memoize(getInfoLong);

const getDateLong = (date: Date): string => date.toISOString().split("T")[0];

const getDate = memoize(getDateLong);

/**
 * Gets the download count for a given npm package
 * @param name - The name of the package.
 * @returns download count
 */
async function getDownloadCountLong(name: string): Promise<number | undefined> {
  const date = new Date();
  date.setDate(date.getDate() - LAST_DAY_INTERVAL);
  const request = `${BASE_API}/${getDate(date)}:${getDate(new Date())}/${name.trim()}`;
  const response = await fetch(request);
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we own the data
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
 * @returns search results
 */
async function fetchNPMURLsLong(searchStrings: string[]): Promise<string[]> {
  const pluginNames: string[] = [];
  let count = 0;
  for (const search of searchStrings) {
    console.log(
      `Searching for "${search}" (${count++}/${searchStrings.length})`,
    );
    const url = `${BASE_URL}/-/v1/search?text=${search}&size=500`;
    try {
      const previous = await database.get(`search-${url}`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we can trust the data
      const { date, result } = JSON.parse(previous) as SearchEntry;
      if (isMoreThanRandomDaysInThePast(date)) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("Data too old");
      }
      pluginNames.push(...result);
    } catch {
      console.log(`--> Data too old for search "${search}", refreshing...`);
      const searchResponse = await fetch(url);
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we can trust the data
        const searchData = (await searchResponse.json()) as NpmSearchResult;
        const names = searchData.objects.map((object) => object.package.name);
        pluginNames.push(...names);
        await database.put(
          `search-${url}`,
          JSON.stringify({
            date: new Date().toLocaleDateString(),
            result: names,
            url,
          }),
        );
      } catch {
        console.log("failed with:", { searchResponse, url });
      }
    }
  }

  return [...new Set(pluginNames)];
}

export const fetchNPMURLs = memoize(fetchNPMURLsLong);

// EOF
