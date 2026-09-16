export function formatToYYYYMMDD(): string {
  const date = new Date();

  // Months are 0-indexed in JS (January is 0), so add 1
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  console.log('formatToYYYYMMDD:: date :', `${year}-${month}-${day}`);

  return `${year}-${month}-${day}`;
}
