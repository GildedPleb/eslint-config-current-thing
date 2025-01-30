// PathMark: ./src/helpers.ts

import { createHash } from "node:crypto";

// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from "chalk";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as diff from "diff";

/**
 *
 * @param dateString - formatted like "3/15/24"
 * @returns the outcome
 */
export function isMoreThan1DaysInThePast(dateString: string): boolean {
  const givenDate = new Date(dateString).getTime();
  const currentDate = Date.now();
  const timeDiff = currentDate - givenDate;
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  return daysDiff > 1;
}

/**
 * Decides if a cache is invalid
 * @param dateString - formatted like "3/15/24"
 * @returns the outcome
 */
export function isMoreThanRandomDaysInThePast(dateString: string): boolean {
  const givenDate = new Date(dateString).getTime();
  const currentDate = Date.now();
  const timeDiff = currentDate - givenDate;
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  // first number is how many days to spread this out over? Second number is how many days after is this invalidated?
  return daysDiff > Math.random() * 60 + 1;
}

const ADD = "[~~~+]";
const SUB = "[~~~-]";

const parseDif = (results: diff.Change[]): string => {
  let accumulatedString = "";

  for (const part of results) {
    // Use color coding to mark added and removed parts
    const color =
      part.added === true ? "green" : part.removed === true ? "red" : "grey";
    // eslint-disable-next-line security/detect-object-injection
    accumulatedString += chalk[color](part.value);
    if (color === "green") accumulatedString += ADD;
    if (color === "red") accumulatedString += SUB;
  }

  return accumulatedString;
};

/**
 * Print the diff of two string inputs by line
 * @param oldString - the original string to diff against
 * @param newString - the new string
 */
export function printDiffLines(
  oldString: string | undefined,
  newString: string | undefined,
): void {
  if (oldString === undefined || newString === undefined) return;
  const diffResult = diff.diffChars(oldString, newString);

  // Split the accumulated string into lines
  const lines = parseDif(diffResult).split("\n");

  // Filter and print lines with differences
  for (const [index, line] of lines.entries()) {
    let changes = "";
    let pad = "   ";
    let editedLine = line;
    if (line.includes(ADD)) {
      changes += chalk.green("+");
      pad = pad.slice(1);
      editedLine = editedLine.replaceAll(ADD, "");
    }

    if (line.includes(SUB)) {
      changes += chalk.red("-");
      pad = pad.slice(1);
      editedLine = editedLine.replaceAll(SUB, "");
    }

    if (changes !== "") {
      console.log(
        `${pad}${changes} ${String(index + 1).padStart(3, " ")}: ${editedLine}`,
      );
    }
  }
}

export const hashObject = (object: object): string => {
  const jsonString = JSON.stringify(object);
  return createHash("sha256").update(jsonString).digest("hex");
};

export const hashString = (text: string): string =>
  createHash("sha256").update(text).digest("hex");

/**
 * Tests if an object is empty
 * @param object - the object to test
 * @returns true or false
 */
export function isEmpty(object: object): boolean {
  for (const property in object) {
    if (Object.hasOwn(object, property)) {
      return false;
    }
  }

  return true;
}
// EOF
