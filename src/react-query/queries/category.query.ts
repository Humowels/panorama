import { getBaseUrl } from "@/lib/utils";
import fetcher from "@/react-query/fetcher";

export const categoryQueryFn = (
  shopName: string,
  id: number,
  lang: string,
  nextLink?: string,
  categoryType?: string,
) =>
  fetcher(
    nextLink ||
      `${getBaseUrl()}/categories/${id}?lang=${lang}&filter[product_type]=${categoryType}`,
  ).then((res) => res.json());
