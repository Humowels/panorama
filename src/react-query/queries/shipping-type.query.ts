import fetcher from "@/react-query/fetcher";
import { getBaseUrl } from "@/lib/utils";

export const shippingMethodsQueryFn = () =>
  fetcher(`${getBaseUrl()}/shipping-methods`)
    .then((res) => res.json())
    .then((res) => res.data);
