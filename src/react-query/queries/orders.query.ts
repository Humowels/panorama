import { getBaseUrl } from "@/lib/utils";
import fetcher from "@/react-query/fetcher";

export const ordersQueryFn = async (nextLink?: string) => {
  return fetcher(nextLink || `${getBaseUrl()}/orders`)
    .then((res) => res.json())
    .then((res) => res);
};
