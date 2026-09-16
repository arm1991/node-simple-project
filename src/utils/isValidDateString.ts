export function isValidDateString(dateStr: string): boolean {
  // 1. Strict regex for YYYY-MM-DD format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return false;
  }

  // 2. Validate real calendar date (handles leap years, month 13, day 32, etc.)
  const [year, month, day] = dateStr.split('-').map(Number) as [number, number, number];
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
  );
}
