// PathMark: ./src/packages/rejected-cli.ts

/* eslint-disable no-console -- console needed for UI */
/* eslint-disable import/no-extraneous-dependencies -- used for prod */

import process, { stdin as input, stdout as output } from "node:process";
// eslint-disable-next-line n/no-unsupported-features/node-builtins -- not used for prod
import { createInterface } from "node:readline/promises";

import Ajv from "ajv";
import chalk from "chalk";
import Table from "cli-table3";
import { Command } from "commander";

import type { DataType } from "./rejected-database";
import {
  addItem,
  getAll,
  getCategories,
  getCategoryItems,
  getItemByName,
  search,
} from "./rejected-database";
import type { PackageAnalysis } from "./rejected-research";

const program = new Command();
const rl = createInterface({ input, output });

// Schema validation
const ajv = new Ajv();
const validator = ajv.compile<PackageAnalysis & { name: string }>({
  additionalProperties: false,
  properties: {
    category: { type: "string" },
    confidence: { maximum: 100, minimum: 0, type: "number" },
    description: { type: "string" },
    evidence: {
      properties: {
        negative: { items: { type: "string" }, type: "array" },
        positive: { items: { type: "string" }, type: "array" },
      },
      required: ["positive", "negative"],
      type: "object",
    },
    name: { type: "string" },
    purpose: { type: "string" },
    reject: { type: "boolean" },
  },
  required: [
    "name",
    "reject",
    "description",
    "purpose",
    "confidence",
    "category",
    "evidence",
  ],
  type: "object",
});

interface CliOptions {
  category?: string;
}

/**
 *
 * @param data - data
 */
function displayTable(data: DataType[]): void {
  const table = new Table({
    chars: {
      bottom: "─",
      "bottom-left": "└",
      "bottom-mid": "┴",
      "bottom-right": "┘",
      left: "│",
      "left-mid": "├",
      mid: "─",
      "mid-mid": "┼",
      middle: "│",
      right: "│",
      "right-mid": "┤",
      top: "─",
      "top-left": "┌",
      "top-mid": "┬",
      "top-right": "┐",
    },
    // eslint-disable-next-line unicorn/no-null -- null required
    colWidths: [null, 3, 40, 40, null, null, null, 4],
    head: [
      "Name",
      "Reject",
      "Description",
      "Purpose",
      "Confidence",
      "Category",
      "Date",
      "isAI",
    ],
    style: {
      border: [],
      head: ["green"],
    },
    wordWrap: true,
  });

  // Add rows, excluding the evidence field
  for (const { evidence, ...item } of data) {
    table.push([
      chalk.green(item.name),
      item.reject ? chalk.red("X") : chalk.green("√"),
      item.description,
      item.purpose,
      item.confidence,
      item.category,
      item.date,
      item.isAI ? chalk.red("🤖") : chalk.green("🧠"),
    ]);
  }

  console.log(table.toString());
}

program
  .name("db-cli")
  .description("CLI tool to manage the database")
  .version("1.0.0");

program
  .command("list")
  .description("List all items or items in a category")
  .option("-c, --category <category>", "filter by category")
  .action(async (options: CliOptions) => {
    try {
      if (options.category === undefined) {
        const items = await getAll();
        displayTable(items);
      } else {
        const items = await getCategoryItems(options.category);
        displayTable(items);
      }
    } catch (error) {
      console.error("Error listing items:", error);
    } finally {
      rl.close();
    }
  });

program
  .command("get")
  .description("Get item by name")
  .argument("<name>", "item name")
  .action(async (name: string) => {
    try {
      const item = await getItemByName(name);
      if (item === undefined) {
        console.log("Item not found");
      } else {
        console.log(JSON.stringify({ ...item, name }, undefined, 2));
      }
    } catch (error) {
      console.error("Error getting item:", error);
    } finally {
      rl.close();
    }
  });

program
  .command("categories")
  .description("List all categories")
  .action(async () => {
    try {
      const categories = await getCategories();
      console.log("Available categories:");
      for (const category of categories) console.log(`- ${category}`);
    } catch (error) {
      console.error("Error listing categories:", error);
    } finally {
      rl.close();
    }
  });

program
  .command("add")
  .description("Add new item")
  .argument("[json]", "JSON string for the new item")
  .action(async (json?: string) => {
    try {
      let data = {};

      if (json === undefined) {
        // Read JSON from stdin
        let innerInput = "";
        for await (const chunk of process.stdin) {
          innerInput += chunk;
        }
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we validate the data immediately after this
          const { date, isAI, ...rest } = JSON.parse(
            innerInput,
          ) as PackageAnalysis & {
            date: string;
            isAI: boolean;
            name: string;
          };

          data = rest;
        } catch {
          throw new Error("Invalid JSON format");
        }
      } else {
        // Parse JSON from command line argument
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we validate the data immediately after this
          data = JSON.parse(json) as PackageAnalysis & {
            date: string;
            isAI: boolean;
            name: string;
          };
        } catch {
          throw new Error("Invalid JSON format");
        }
      }

      // Validate the data
      if (!validator(data)) {
        console.error("Invalid data structure:");
        console.log("errors:", validator.errors);
        throw new Error("JSON validation failed");
      }

      // Extract name and category from the validated data
      const { category, name } = data;

      // Add the item
      await addItem(category, name, data, false);
      console.log("Item added successfully!", data);
    } catch (error) {
      console.error("Error adding item:", error);
      throw new Error("Adding error");
    }
  });

program
  .command("search")
  .description("Search through database entries")
  .argument("<term>", "search term")
  .option("-k, --keys <keys>", "comma-separated list of keys to search in")
  .option("-j, --json", "output results in JSON format")
  .action(async (term: string, options: { json?: boolean; keys?: string }) => {
    console.log("Searching for", term, options);
    try {
      // Convert comma-separated keys to array if provided
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we own the data
      const searchKeys = (options.keys?.split(",").map((key) => key.trim()) ??
        []) as Array<"name" | keyof PackageAnalysis>;

      const results = await search(term, searchKeys);

      if (results.length === 0) {
        console.log("No matching items found");
        return;
      }

      if (options.json !== undefined && options.json) {
        // Output as formatted JSON
        console.log(JSON.stringify(results, undefined, 2));
      } else {
        // Use the existing table display
        displayTable(results);
        console.log("Result count:", results.length);
      }
    } catch (error) {
      console.error("Error searching items:", error);
    } finally {
      rl.close();
    }
  });

program.parse();
// EOF
