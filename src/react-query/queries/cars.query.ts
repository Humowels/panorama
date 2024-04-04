import { getBaseUrl } from "@/lib/utils";
import fetcher from "@/react-query/fetcher";

export const getCarsQueryFn = async () => {
  return fetcher(`${getBaseUrl()}/account/metafields`)
    .then((res) => res.json())
    .then((res) => res.data);
};
