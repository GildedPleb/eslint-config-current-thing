// PathMark: ./src/helpers.ts
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
// EOF
