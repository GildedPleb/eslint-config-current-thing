/* eslint-disable import/no-extraneous-dependencies -- needed for not prod */
// PathMark: ./src/helpers.ts

import { createHash } from "node:crypto";

import chalk from "chalk";
import * as diff from "diff";

import { LAST_DAY_INTERVAL } from "./constants";

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
 * Decides if a cache is invalid based on date criteria
 * @param dateString - formatted like "3/15/24"
 * @returns boolean indicating if cache should be invalidated
 */
export function isMoreThanRandomDaysInThePast(dateString: string): boolean {
  const givenDate = new Date(dateString).getTime();
  const currentDate = Date.now();
  const timeDiff = currentDate - givenDate;
  const hoursDiff = timeDiff / (1000 * 60 * 60);

  // If cache is less than 24 hours old, never invalidate
  if (hoursDiff < 24) {
    return false;
  }

  // If more than 30 days old, always invalidate
  if (hoursDiff > 24 * LAST_DAY_INTERVAL) {
    return true;
  }

  // For caches between 24 hours and 30 days old, invalidate 0.1% of the time
  // eslint-disable-next-line sonarjs/pseudo-random -- we do not need secure random
  return Math.random() < 0.001;
}

const ADD = "[~~~+]";
const SUB = "[~~~-]";

const parseDif = (results: diff.Change[]): string => {
  let accumulatedString = "";

  for (const part of results) {
    // Use color coding to mark added and removed parts
    let color: keyof typeof chalk = "grey";
    if (part.added) {
      color = "green";
    } else if (part.removed) {
      color = "red";
    }
    // eslint-disable-next-line security/detect-object-injection -- we can trust it
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
      // eslint-disable-next-line no-console -- needed for UI
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
