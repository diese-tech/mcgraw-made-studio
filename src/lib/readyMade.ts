import type { ReadyMadeAvailability, ReadyMadeItem } from "@/content/types";

const purchasableStatuses: ReadyMadeAvailability[] = [
  "Available",
  "Low Stock",
  "Made-to-Order Available",
];

export function isSquareLink(url: string) {
  return /^https:\/\/(square\.link|checkout\.square\.site)\//i.test(url);
}

export function isPlaceholderSquareLink(url: string) {
  return /\/placeholder-/i.test(url);
}

export function isReadyMadePurchasable(item: ReadyMadeItem) {
  return (
    purchasableStatuses.includes(item.availability) &&
    isSquareLink(item.squareLink) &&
    !isPlaceholderSquareLink(item.squareLink)
  );
}

export function getReadyMadePrimaryLabel(item: ReadyMadeItem) {
  if (item.availability === "Sold Out") {
    return "Sold Out";
  }

  if (!isReadyMadePurchasable(item)) {
    return "Contact to Purchase";
  }

  if (item.availability === "Low Stock") {
    return "Buy Now - Low Stock";
  }

  if (item.availability === "Made-to-Order Available") {
    return "Buy Made-to-Order";
  }

  return item.squareLinkLabel;
}
