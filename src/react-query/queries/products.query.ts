import { getBaseUrl } from "@/lib/utils";
import fetcher from "@/react-query/fetcher";

export const getAllProductsQueryFn = () =>
  fetcher(`${getBaseUrl()}/products`)
    .then((res) => res.json())
    .then((res) => res.data);

export const getProductByIdQueryFn = (productId: string) =>
  fetcher(`${getBaseUrl()}/products/${productId}`)
    .then((res) => res.json())
    .then((res) => res.data);
