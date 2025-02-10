// PathMark: ./src/packages/rejected-research.ts
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair -- not needed */
/* eslint-disable no-console -- not for prod */
/* eslint-disable import/no-extraneous-dependencies -- not for prod */
import process from "node:process";

import Ajv from "ajv";
import chalk from "chalk";
import OpenAI from "openai";

import type { Populated } from "./get-packages";
import { addItem, getItemByName } from "./rejected-database";

export interface PackageAnalysis {
  category: string;
  confidence: number;
  description: string;
  evidence: {
    negative: string[];
    positive: string[];
  };
  purpose: string;
  reject: boolean;
}

interface NpmResponse {
  description?: string;
  keywords?: string[];
  maintainers?: Array<{ name: string }>;
  name: string;
  readme?: string;
  repository?: {
    type: string;
    url: string;
  };
  time?: {
    [key: string]: string;
    modified: string;
  };
}

interface PackageDetails {
  description: string;
  keywords: string[];
  lastPublish?: string;
  maintainers: string[];
  name: string;
  readme?: string;
  repository?: Repository;
}

interface Repository {
  type: string;
  url: string;
}

const PROMPTS = {
  analysis: (package_: PackageDetails, retryContext = "") => `
Analyze if this npm package should be REJECTED from an ESLint-focused tool.

Package:
\`\`\`
${JSON.stringify(package_)}
\`\`\`

EVALUATION CRITERIA:
1. PRIMARY PURPOSE: Does this package's main purpose involve linting code through ESLint?
   - Direct involvement (plugins, configs, parsers, formatters)
   - Indirect involvement (utilities, helpers, integrations)

2. IMMEDIATE REJECTION CRITERIA:
   - Abandoned/unmaintained packages
   - Malicious or suspicious packages
   - Packages with critical security vulnerabilities

${retryContext}

Return JSON matching:
{
  "reject": boolean,             // Should this package be rejected?
  "description": string,         // Concise description of what the package does
  "purpose": string,             // Clear statement of the package's primary purpose
  "confidence": number,          // Confidence in the analysis (0-100)
  "category": string,            // SINGLE WORD ALL CAPS category that the packages falls into
  "evidence": {
    "positive": string[],        // Evidence supporting linting purpose
    "negative": string[]         // Evidence supporting rejection
  }
}`,

  system: `You are a package analysis API that evaluates npm packages for inclusion in an ESLint-focused tool.
You must return JSON that matches the schema. Focus on the package's PRIMARY PURPOSE and ESLint relevance.`,
};

const ajv = new Ajv();
const validator = ajv.compile<PackageAnalysis>({
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
    purpose: { type: "string" },
    reject: { type: "boolean" },
  },
  required: [
    "reject",
    "description",
    "purpose",
    "confidence",
    "category",
    "evidence",
  ],
  type: "object",
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- not worth describing
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

/**
 *
 * @param details - package details
 * @param maxRetries - attempts
 * @returns the analysis
 */
// eslint-disable-next-line complexity -- bogus rule
async function analyzePackage(
  details: PackageDetails,
  maxRetries = 3,
): Promise<PackageAnalysis | { error: true; message: string }> {
  let lastError = "";
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    console.log("Analyzing package", details.name, attempt);

    try {
      const retryContext =
        attempt > 0
          ? `Previous attempt failed validation. Ensure exact schema match. Error(s): ${lastError}`
          : "";

      const response = await openai.chat.completions.create({
        messages: [
          { content: PROMPTS.system, role: "system" },
          { content: PROMPTS.analysis(details, retryContext), role: "user" },
        ],
        model: "gpt-4o-mini",
        response_format: { type: "json_object" },
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- this assignment is expected
      const result: PackageAnalysis = JSON.parse(
        response.choices[0]?.message?.content ?? "{}",
      );
      if (validator(result)) {
        return result;
      }

      console.warn(
        `Attempt ${attempt + 1} failed validation:`,
        validator.errors,
      );

      lastError = JSON.stringify(validator.errors);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error(`Attempt ${attempt + 1} failed:`, message);

      if (attempt === maxRetries - 1) {
        return { error: true, message };
      }
    }
  }

  return { error: true, message: `Failed after ${maxRetries} attempts` };
}

/**
 *
 * @param packageName - string
 * @returns package data
 */
async function fetchPackageData(
  packageName: string,
): Promise<PackageDetails | undefined> {
  console.log("Getting details for", packageName);
  try {
    const response = await fetch(
      `https://registry.npmjs.org/${encodeURIComponent(packageName)}`,
    );

    if (!response.ok) {
      if (response.status === 404) {
        return undefined;
      }
      throw new Error(`Failed to fetch package data: ${response.statusText}`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- this is fine
    const data: NpmResponse = await response.json();

    return {
      description: data.description ?? "",
      keywords: data.keywords ?? [],
      lastPublish: data.time?.modified,
      maintainers: (data.maintainers ?? []).map((main) => main.name),
      name: data.name,
      readme: data.readme,
      repository: data.repository,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new TypeError(`Error fetching package data: ${error.message}`);
    }
    throw new Error("unknown error");
  }
}

/**
 *
 * @param packages - packages to evaluate
 */
async function rejectTop40(packages: Populated[]): Promise<void> {
  console.log("\n\nConducting Package Research\n");

  for (const { name } of packages) {
    const previous = await getItemByName(name);
    if (previous !== undefined) {
      console.log("Already seen:", chalk.green(name));
      continue;
    }
    const info = await fetchPackageData(name);
    if (info === undefined) {
      console.log("No info for", chalk.green(name));
      continue;
    }

    const result = await analyzePackage(info);
    if ("error" in result) {
      throw new Error(result.message);
    }
    if ("category" in result) {
      // Display package information
      console.log(chalk.bgMagenta("\n=== Package Review ==="));
      console.log("Package:", chalk.green(name));
      console.log("Analysis Result:");
      console.log(result);

      await addItem(result.category, name, result);
    }
  }
}

export { rejectTop40 };
// EOF
