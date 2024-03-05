import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function priceFormatter(price: string | number): string {
  if (typeof price === "number") {
    price = price.toString();
  }

  return price.replaceAll(",", "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function parseNumber(price: string): number {
  return parseInt(price.replaceAll(",", ""));
}

export const getUserId = (): number => {
  const chatId = window.chatId;
  if (chatId) {
    return chatId;
  }

  if (process.env.NODE_ENV === "development") {
    return Number(process.env.NEXT_PUBLIC_MOCK_USER_ID);
  }

  return 0;
};

export const getBaseUrl = () => {
  return `https://panorama.magicstore.uz/api/v1/telegram`;
};
