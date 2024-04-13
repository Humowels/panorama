import { getUserId } from "@/lib/utils";

interface IOptions {
  body?: BodyInit;
  headers?: HeadersInit;
  method: "GET" | "POST" | "PUT" | "DELETE";
}

export const getTelegramId = () => {
  const MOCK_USER_ID = 5127851350;

  if (process.env.NODE_ENV === "production") {
    return String(getUserId());
  }

  return String(MOCK_USER_ID);
};

const updateOptions = (options?: IOptions) => {
  const update = { ...options };
  update.headers = {
    "X-Telegram-Id": getTelegramId(),
    "X-Magic-Id": "",
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  return update;
};

export default function fetcher(url: string, options?: IOptions) {
  return fetch(url, updateOptions(options));
}
