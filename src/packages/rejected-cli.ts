import { stdin as input, stdout as output } from "node:process";
import { createInterface } from "node:readline/promises";

// eslint-disable-next-line import/no-extraneous-dependencies
import Ajv from "ajv";
// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from "chalk";
// eslint-disable-next-line import/no-extraneous-dependencies
import Table from "cli-table3";
import { Command } from "commander";

// import { Table } from "console-table-printer";
import {
  addItem,
  type DataType,
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
const validator = ajv.compile<{ name: string } & PackageAnalysis>({
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
    colWidths: [
      // eslint-disable-next-line unicorn/no-null
      null,
      3, // reject
      40, // description
      40, // purpose
    ],
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
      item.isAI,
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
      let data;

      if (json === undefined) {
        // Read JSON from stdin
        let innerInput = "";
        for await (const chunk of process.stdin) {
          innerInput += chunk;
        }
        try {
          const { date, isAI, ...rest } = JSON.parse(innerInput) as {
            date: string;
            isAI: boolean;
            name: string;
          } & PackageAnalysis;

          data = rest;
        } catch {
          throw new Error("Invalid JSON format");
        }
      } else {
        // Parse JSON from command line argument
        try {
          data = JSON.parse(json) as {
            date: string;
            isAI: boolean;
            name: string;
          } & PackageAnalysis;
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
    try {
      // Convert comma-separated keys to array if provided
      const searchKeys = (options.keys?.split(",").map((k) => k.trim()) ??
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
      }
    } catch (error) {
      console.error("Error searching items:", error);
    } finally {
      rl.close();
    }
  });

program.parse();
