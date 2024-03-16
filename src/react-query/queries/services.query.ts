import { getBaseUrl } from "@/lib/utils";
import fetcher from "@/react-query/fetcher";

export const getAllProductsQueryFn = (serviceType: string, pageParams?: string) =>
  fetcher(pageParams || `${getBaseUrl()}/products?filter[product_type]=${serviceType}`)
    .then((res) => res.json())
    .then((res) => res);

export const getProductByIdQueryFn = (productId: string) =>
  fetcher(`${getBaseUrl()}/products/${productId}`)
    .then((res) => res.json())
    .then((res) => res.data);
