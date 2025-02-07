// PathMark: ./src/packages/rejected-database.ts
// eslint-disable-next-line import/no-extraneous-dependencies -- not used for prod
import { Level } from "level";

import type { PackageAnalysis } from "./rejected-research";

const database = new Level("./rejected-search", { valueEncoding: "json" });

const DELIMITER = "~";

export type DataType = PackageAnalysis & {
  date: string;
  isAI: boolean;
  name: string;
};

interface LevelDBError {
  code: string;
  notFound: boolean;
  status: number;
}

/**
 * Add item to a category
 * @param category - string
 * @param name  - string
 * @param data  - data
 * @param isAI - boole
 */
async function addItem(
  category: string,
  name: string,
  data: PackageAnalysis,
  isAI = true,
): Promise<void> {
  const key = `${category}${DELIMITER}${name}`;
  const nameKey = `_names${DELIMITER}${name}`;
  await Promise.all([
    database.put(
      key,
      JSON.stringify({
        ...data,
        date: `${new Date().getUTCFullYear()}/${new Date().getUTCMonth() + 1}/${new Date().getUTCDate()}`,
        isAI,
      }),
    ),
    database.put(nameKey, category),
  ]);
}

/**
 * @returns the list of items
 */
// eslint-disable-next-line functional/functional-parameters -- we don't need params
async function getAll(): Promise<DataType[]> {
  const items = [];

  for await (const [key, value] of database.iterator()) {
    if (!key.startsWith(`_names${DELIMITER}`)) {
      items.push({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we own all the data
        ...(JSON.parse(value) as DataType),
        name: key.split(DELIMITER)[1],
      });
    }
  }
  return items;
}

/**
 * @returns the list of categories
 */
// eslint-disable-next-line functional/functional-parameters -- we don't need params
async function getCategories(): Promise<string[]> {
  const categories = new Set<string>();

  for await (const [key] of database.iterator()) {
    if (!key.startsWith(`_names${DELIMITER}`)) {
      const [category] = key.split(DELIMITER);
      categories.add(category);
    }
  }
  return [...categories];
}

/**
 * Get all items in a category
 * @param category - string
 * @returns the list of items
 */
async function getCategoryItems(category: string): Promise<DataType[]> {
  const items = [];
  const prefix = `${category}${DELIMITER}`;

  for await (const [key, value] of database.iterator({
    gte: prefix,
    lt: prefix + "\uFFFF",
  })) {
    if (!key.startsWith(`_names${DELIMITER}`)) {
      items.push({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we own all the data
        ...(JSON.parse(value) as DataType),
        name: key.split(DELIMITER)[1],
      });
    }
  }
  return items;
}

/**
 * Get item by name using direct lookup
 * @param name - string
 * @returns the data
 */
async function getItemByName(
  name: string,
): Promise<PackageAnalysis | undefined> {
  try {
    const category = await database.get(`_names${DELIMITER}${name}`);
    const data = await database.get(`${category}${DELIMITER}${name}`);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, sonarjs/different-types-comparison -- in case its undefined?
    if (data === undefined) return data;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we own all the data
    return JSON.parse(data) as PackageAnalysis;
  } catch (error: unknown) {
    // Type guard to ensure error is a LevelDB error
    if (
      error !== null &&
      typeof error === "object" &&
      "code" in error &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we own all the data
      (error as LevelDBError).code === "LEVEL_NOT_FOUND"
    ) {
      return undefined;
    }
    // Re-throw other unexpected errors
    throw error instanceof Error ? error : new Error(String(error));
  }
}

/**
 * Search through database entries
 * @param searchTerm - string to search for
 * @param searchKeys - optional array of keys to limit search to
 * @returns Array of matching items with their names
 */
async function search(
  searchTerm: string,
  searchKeys: Array<keyof DataType>,
): Promise<DataType[]> {
  if (searchTerm === "") {
    return [];
  }

  const term = searchTerm.toLowerCase();
  const allItems = await getAll();
  if (allItems.length === 0) {
    return [];
  }
  // If no specific keys provided, search entire object
  if (searchKeys.length === 0) {
    const filtered = allItems.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(term),
    );
    return filtered;
  }

  return allItems.filter((item) =>
    searchKeys.some((key) => {
      // eslint-disable-next-line security/detect-object-injection, @typescript-eslint/prefer-destructuring -- we own the data
      const value = item[key];

      if (typeof value === "object") {
        return JSON.stringify(value).toLowerCase().includes(term);
      }

      return String(value).toLowerCase().includes(term);
    }),
  );
}

export {
  addItem,
  getAll,
  getCategories,
  getCategoryItems,
  getItemByName,
  search,
};
// EOF
