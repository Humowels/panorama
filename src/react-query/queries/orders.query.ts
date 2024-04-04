import { getBaseUrl } from "@/lib/utils";
import fetcher from "@/react-query/fetcher";

export const ordersQueryFn = async (nextLink?: string) => {
  return fetcher(nextLink || `${getBaseUrl()}/orders`)
    .then((res) => res.json())
    .then((res) => res);
};

export const orderQueryFn = async (orderId: string) => {
  return fetcher(`${getBaseUrl()}/orders/${orderId}`)
    .then((res) => res.json())
    .then((res) => res.data);
};
