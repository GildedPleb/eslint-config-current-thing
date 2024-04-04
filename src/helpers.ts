// PathMark: ./src/helpers.ts

import { createHash } from "node:crypto";

// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from "chalk";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as diff from "diff";

/**
 *
 * @param dateString - formatted like "3/15/24"
 */
export function isMoreThan1DaysInThePast(dateString: string) {
  const givenDate = new Date(dateString).getTime();
  const currentDate = Date.now();
  const timeDiff = currentDate - givenDate;
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  return daysDiff > 1;
}

/**
 *
 * @param dateString - formatted like "3/15/24"
 */
export function isMoreThanRandomDaysInThePast(dateString: string) {
  const givenDate = new Date(dateString).getTime();
  const currentDate = Date.now();
  const timeDiff = currentDate - givenDate;
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  return daysDiff > Math.random() * 100;
}

/**
 * Print the diff of two string inputs by line
 */
export function printDiffLines(oldString: string, newString: string) {
  const diffResult = diff.diffChars(oldString, newString);

  let accumulatedString = "";

  for (const part of diffResult) {
    // Use color coding to mark added and removed parts
    const color =
      part.added === true ? "green" : part.removed === true ? "red" : "grey";
    // eslint-disable-next-line security/detect-object-injection
    accumulatedString += chalk[color](part.value);
    if (color === "green") accumulatedString += "[~~~+]";
    if (color === "red") accumulatedString += "[~~~-]";
  }

  // Split the accumulated string into lines
  const lines = accumulatedString.split("\n");

  // Filter and print lines with differences
  for (const [index, line] of lines.entries()) {
    let changes = "";
    let pad = "   ";
    let editedLine = line;
    if (line.includes("[~~~+]")) {
      changes += chalk.green("+");
      pad = pad.slice(1);
      editedLine = editedLine.replaceAll("[~~~+]", "");
    }

    if (line.includes("[~~~-]")) {
      changes += chalk.red("-");
      pad = pad.slice(1);
      editedLine = editedLine.replaceAll("[~~~-]", "");
    }

    if (changes !== "") {
      console.log(
        `${pad}${changes} ${String(index + 1).padStart(3, " ")}: ${editedLine}`,
      );
    }
  }
}

/**
 * Create a hash of a JS object
 */
export function hashObject(object: object): string {
  const jsonString = JSON.stringify(object);
  return createHash("sha256").update(jsonString).digest("hex");
}
// EOF
