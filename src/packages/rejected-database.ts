// eslint-disable-next-line import/no-extraneous-dependencies
import { Level } from "level";

import { type PackageAnalysis } from "./rejected-research";

const database = new Level("./rejected-search", { valueEncoding: "json" });

const DELIMITER = "~";

export type DataType = {
  date: string;
  isAI: string;
  name: string;
} & PackageAnalysis;

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

interface LevelDBError {
  code: string;
  notFound: boolean;
  status: number;
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
    return JSON.parse(data) as PackageAnalysis;
  } catch (error: unknown) {
    // Type guard to ensure error is a LevelDB error
    if (
      error !== null &&
      typeof error === "object" &&
      "code" in error &&
      (error as LevelDBError).code === "LEVEL_NOT_FOUND"
    ) {
      return undefined;
    }
    // Re-throw other unexpected errors
    throw error instanceof Error ? error : new Error(String(error));
  }
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
        ...(JSON.parse(value) as DataType),
        name: key.split(DELIMITER)[1],
      });
    }
  }
  return items;
}

/**
 * @returns the list of items
 */
// eslint-disable-next-line functional/functional-parameters
async function getAll(): Promise<DataType[]> {
  const items = [];

  for await (const [key, value] of database.iterator()) {
    if (!key.startsWith(`_names${DELIMITER}`)) {
      items.push({
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
// eslint-disable-next-line functional/functional-parameters
async function getCategories(): Promise<string[]> {
  const categories = new Set<string>();

  for await (const [key] of database.iterator()) {
    if (!key.startsWith(`_names${DELIMITER}`)) {
      const category = key.split(DELIMITER)[0];
      categories.add(category);
    }
  }
  return [...categories];
}

/**
 * Search through database entries
 * @param searchTerm - string to search for
 * @param searchKeys - optional array of keys to limit search to
 * @returns Array of matching items with their names
 */
async function search(
  searchTerm: string,
  searchKeys?: Array<keyof DataType>,
): Promise<DataType[]> {
  const results: DataType[] = [];
  const term = searchTerm.toLowerCase();

  // Get all items from database
  const allItems = await getAll();

  for (const item of allItems) {
    let isMatch = false;

    if (searchKeys !== undefined && searchKeys.length > 0) {
      // Search only in specified keys
      for (const key of searchKeys) {
        // eslint-disable-next-line security/detect-object-injection
        const value = item[key];
        if (String(value).toLowerCase().includes(term)) {
          isMatch = true;
          break;
        } else if (typeof value === "object") {
          // Handle nested objects
          const stringified = JSON.stringify(value).toLowerCase();
          if (stringified.includes(term)) {
            isMatch = true;
            break;
          }
        }
      }
    } else {
      // Search in all fields
      const stringified = JSON.stringify(item).toLowerCase();
      isMatch = stringified.includes(term);
    }

    if (isMatch) {
      results.push(item);
    }
  }

  return results;
}

export {
  addItem,
  getAll,
  getCategories,
  getCategoryItems,
  getItemByName,
  search,
};
