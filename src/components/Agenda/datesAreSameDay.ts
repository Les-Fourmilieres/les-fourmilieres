export function datesAreSameDay(d1: Date, d2: Date) {
  if (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
    return true;
  const diff =
    Math.max(d2.getTime(), d1.getTime()) - Math.min(d2.getTime(), d1.getTime());
  if (diff <= 24 * 3600_000) return true;
  return false;
}
