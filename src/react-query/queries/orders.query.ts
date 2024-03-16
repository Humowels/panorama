import { getBaseUrl } from "@/lib/utils";
import fetcher from "@/react-query/fetcher";

export const ordersQueryFn = async () => {
  return fetcher(`${getBaseUrl()}/orders`)
    .then((res) => res.json())
    .then((res) => res.data);
};
