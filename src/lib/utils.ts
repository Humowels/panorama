import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function priceFormatter(price: string | number): string {
  if (typeof price === "number") {
    price = price.toString();
  }

  return price.replaceAll(" ", "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function parseNumber(price: string): number {
  return parseInt(price.replaceAll(" ", ""));
}

export const getUserId = (): number => {
  const initData = getTelegramInitData();

  const chatId = initData.user?.id;

  if (chatId) {
    return chatId;
  }
  const localStoredUserId = localStorage.getItem("userId");

  if (localStoredUserId) {
    return Number(localStoredUserId);
  }
  if (process.env.NODE_ENV === "development") {
    return Number(process.env.NEXT_PUBLIC_MOCK_USER_ID);
  }

  return 0;
};

export const getBaseUrl = () => {
  return `https://panorama.magicstore.uz/api/v1/telegram`;
};

import { TelegramWebApps } from "@/global";

export const getTelegramInitData = (): TelegramWebApps.WebAppInitData => {
  const firstLayerInitData = Object.fromEntries(
    new URLSearchParams(window.Telegram?.WebApp.initData),
  );
  const initData: Record<string, string> = {};

  for (const key in firstLayerInitData) {
    try {
      initData[key] = JSON.parse(firstLayerInitData[key]);
    } catch {
      initData[key] = firstLayerInitData[key];
    }
  }
  return initData as TelegramWebApps.WebAppInitData;
};
