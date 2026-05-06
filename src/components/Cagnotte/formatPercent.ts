export function formatPercent(amount: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "percent",
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
    minimumSignificantDigits: 1,
  }).format(amount);
}
