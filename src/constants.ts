// PathMark: ./src/constants.ts
// Base minimum from February 2023
const MINIMUM_DOWNLOADS = 400_000;
const ANNUAL_INFLATION_RATE = 0.15; // 15% annual inflation
const REFERENCE_DATE = new Date("2023-02-01");

const getInflatedMinimum = (date: Date): number => {
  const today = new Date();
  const yearsDiff =
    (today.getTime() - date.getTime()) / (365 * 24 * 60 * 60 * 1000);
  return Math.round(
    MINIMUM_DOWNLOADS * (1 + ANNUAL_INFLATION_RATE) ** yearsDiff,
  );
};

// Example usage:
const currentMinimum = getInflatedMinimum(REFERENCE_DATE);
// eslint-disable-next-line no-console -- needed for UI
console.log(
  `Current minimum threshold: ${currentMinimum.toLocaleString()} downloads`,
);

// Export for use in other modules
export const MINIMUMS = getInflatedMinimum(REFERENCE_DATE);

export const RULES = "$RULES";
export const BASE_API = "https://api.npmjs.org/downloads/point";
export const BASE_URL = "https://registry.npmjs.org";
export const LAST_DAY_INTERVAL = 28;
export const README_PATH = "../README.md";
// EOF
