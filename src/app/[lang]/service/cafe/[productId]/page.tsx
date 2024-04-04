import { SingleProduct } from "@/components/cafe/product/single-product";
import { getProductByIdQueryFn } from "@/react-query/queries/services.query";
import getQueryClient from "@/react-query/get-query-client";
import { dehydrate } from "@tanstack/query-core";
import Hydrate from "@/react-query/hydrate-client";
import { ICommonProps } from "@/app/[lang]/layout";

export default async function SingleProductPage({ params: { productId } }: ICommonProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["cafe", "product", productId],
    queryFn: () => getProductByIdQueryFn(productId),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <SingleProduct productId={productId} />
    </Hydrate>
  );
}
