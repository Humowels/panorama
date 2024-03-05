import { getUserId } from "@/lib/utils";

interface IOptions {
  body?: BodyInit;
  headers?: HeadersInit;
  method: "GET" | "POST" | "PUT" | "DELETE";
}

const updateOptions = (options?: IOptions) => {
  const update = { ...options };
  update.headers = {
    "X-Telegram-Id": String(getUserId()),
    "X-Magic-Id": String(process.env.NEXT_PUBLIC_MAGIC_KEY),
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  return update;
};

export default function fetcher(url: string, options?: IOptions) {
  return fetch(url, updateOptions(options));
}
